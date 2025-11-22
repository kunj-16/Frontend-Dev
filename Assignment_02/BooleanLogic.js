function checkSecurity(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside) {

    let isSecure = isDoorLocked && isWindowClosed && isAlarmOn && isOwnerInside;

    let message = isSecure ? "Secure" : "Unsafe";

    document.getElementById("status").innerHTML = `
        Door Locked: ${isDoorLocked} <br>
        Window Closed: ${isWindowClosed} <br>
        Alarm On: ${isAlarmOn} <br>
        Owner Inside: ${isOwnerInside} <br><br>
        Status: <strong>${message}</strong>
    `;

    console.log("Security Check:", message);
}
