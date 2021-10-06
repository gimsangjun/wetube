import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";
const actionBtn = document.getElementById("actionBtn");
const video = document.getElementById("preview");

//모든 function에서 공유되어야하니까
let stream;
let recorder;
let videoFile;

const files = {
    input: "recording.webm",
    output: "output.mp4",
    thumb: "thumbnail.jpg",
};

const downloadFile = (fileUrl, fileName) => {
    const a = document.createElement("a");
    a.href = fileUrl;
    a.download = fileName;
    document.body.appendChild(a);
    a.click(); //사용자 대신 우리가 클릭해준다.
};

const handleDownload = async () => {
    actionBtn.removeEventListener("click", handleDownload);

    actionBtn.innerText = "Transcoding...";

    actionBtn.disabled = true;

    const ffmpeg = createFFmpeg({
        log: true,
        corePath: "/convert/ffmpeg-core.js",
    }); //log : true인 이유는 어떤 일이 일어나는지 보고싶어서.
    await ffmpeg.load();
    //브라우저상의 메모리에 존재
    //ffmpeg의 명령어들은 따르고 그것을 js상에서 쓰기위해 이런식으로 쓰는것인듯.
    ffmpeg.FS("writeFile", files.input, await fetchFile(videoFile))

    await ffmpeg.run("-i", "recording.webm", "-r", "60", "output.mp4");
    
    //썸네일 추출
    await ffmpeg.run(
        "-i",
        files.input,
        "-ss",
        "00:00:01",
        "-frames:v",
        "1",
        files.thumb
    );
    // binary data를 사용하고 싶다면 buffer를 사용해야한다라는것을 기억하자. 설명하면 너무 복잡하니까.
    // 브루우저상의 메모리에 있기때문에 읽기위해서 아래의 코드가 필요함. ffpeg.wasm doc을보면 equals라고 나와있음.
    const mp4File = ffmpeg.FS("readFile", files.output); // uint8array형태임. 이 데이터에 접근할려면 buffer를 사용해야함.
    const thumbFile = ffmpeg.FS("readFile", files.thumb);

    const mp4Blob = new Blob([mp4File.buffer], { type: "video/mp4" });
    const thumbBlob = new Blob([thumbFile.buffer], { type: "image/jpg" });

    const mp4Url = URL.createObjectURL(mp4Blob);
    const thumbUrl = URL.createObjectURL(thumbBlob);

    //반복되는 부분이라 함수로 만들어줬다.
    downloadFile(mp4Url, "MyRecording.mp4");
    downloadFile(thumbUrl, "MyThumbnail.jpg");
    
    //브라우저 메모리사에 남아있어서 없애주었다.
    ffmpeg.FS("unlink", files.input);
    ffmpeg.FS("unlink", files.output);
    ffmpeg.FS("unlink", files.thumb);

    actionBtn.disabled = false;
    actionBtn.innerText = "Record Again";
    actionBtn.addEventListener("click", handleStart);
};

const handleStart = () => {
    actionBtn.innerText = "Recording";
    actionBtn.disabled = true;
    actionBtn.removeEventListener("click", handleStart);
    recorder = new MediaRecorder(stream, { mimeType: "video/webm" }); //stream을 녹화하는 recorder
    recorder.ondataavailable = (event) => { //녹화가 멈추면 발생되는 event
        videoFile = URL.createObjectURL(event.data); //파일을 가리키고 있는 URL
        video.srcObject = null; //비디오 태그의 property들을 넣는거임. URL로 바꿀꺼니까 비워줌.
        video.src = videoFile;
        video.loop = true;
        video.play();
        actionBtn.innerText = "Download";
        actionBtn.disabled = false;
        actionBtn.addEventListener("click", handleDownload);
    };
    recorder.start();
    setTimeout(() => {
        recorder.stop();
    }, 5000);
};

// 녹화하는게 아니라 보여주는거임.
const init = async () => {
    stream = await navigator.mediaDevices.getUserMedia({ //미디어장비들에 접근하게해줌,stream은 0과 1로 이루어진 데이터를 의미.
        audio: false,
        video: {
            width: 1024,
            height: 576,
        },
    });
    video.srcObject = stream; //video태그인 preview에 담는다. 
    video.play();
};

init();

actionBtn.addEventListener("click", handleStart);