 let alarmTime = null;
        let alarmSet = false;
        let isAlarmRinging = false;
        const defaultAlarmSound = "Audio/alarm-1.mp3";


window.onload = function() {
    const alarmAudio = document.getElementById("alarm-audio");
    alarmAudio.src = defaultAlarmSound;
    alarmAudio.load();
};

function setAlarm() {
    const timeInput = document.getElementById("alarm-time").value;
    if (!timeInput) {
        alert("Please select a time first.");
        return;
    }
    alarmTime = timeInput;
    alarmSet = true;
    isAlarmRinging = false;
    document.getElementById("alarm-status").innerText = "Alarm set for " + alarmTime;
}

function stopAlarm() {
    const alarmAudio = document.getElementById("alarm-audio");
    alarmAudio.pause();
    alarmAudio.currentTime = 0;
    isAlarmRinging = false;
    alarmSet = false;  
    document.getElementById("alarm-status").innerText = "Alarm stopped";
}

function selectProgramSound() {
    const soundSelect = document.getElementById("program-sounds");
    const selectedSound = soundSelect.value;
    if (selectedSound) {
        const alarmAudio = document.getElementById("alarm-audio");
        alarmAudio.src = selectedSound;
        alarmAudio.load();
        document.getElementById("user-sound").value = "";
    }
}

function handleUserSound() {
    const fileInput = document.getElementById("user-sound");
    const file = fileInput.files[0];
    if (file) {
        const audioURL = URL.createObjectURL(file);
        const alarmAudio = document.getElementById("alarm-audio");
        alarmAudio.src = audioURL;
        document.getElementById("program-sounds").value = "";
    }
}

function updateClockAndCheckAlarm() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    
    let secondDeg = second * 6;
    let minuteDeg = minute * 6 + second * 0.1;
    let hourDeg = (hour % 12) * 30 + minute * 0.5;

    document.getElementById("second-hand").style.transform = "rotate(" + secondDeg + "deg)";
    document.getElementById("minute-hand").style.transform = "rotate(" + minuteDeg + "deg)";
    document.getElementById("hour-hand").style.transform = "rotate(" + hourDeg + "deg)";

    if (alarmSet && !isAlarmRinging) {
        let currentTime = date.toTimeString().slice(0, 5);
        if (currentTime === alarmTime) {
            const alarmAudio = document.getElementById("alarm-audio");
            isAlarmRinging = true;
            alarmAudio.currentTime = 0;
            alarmAudio.play()
                .then(() => {
                    document.getElementById("alarm-status").innerText = "⏰ Alarm is ringing! Click STOP to turn off";
                })
                .catch(error => {
                    console.error("Error playing alarm:", error);
                    alarmAudio.src = defaultAlarmSound;
                    alarmAudio.play();
                });
        }
    }

    
    else if (alarmSet && isAlarmRinging) {
        let currentTime = date.toTimeString().slice(0, 5);
        if (currentTime !== alarmTime) {
            isAlarmRinging = false;
        }
    }
}

setInterval(updateClockAndCheckAlarm, 1000);