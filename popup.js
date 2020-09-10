var refreshDisplayTimeout;
var bgpage = chrome.extension.getBackgroundPage();
var previousValues = [3, 5, 10, 30];
var editing = false;

document.addEventListener('DOMContentLoaded', function () {
    load();
    document.querySelector('#start').addEventListener('click', setTimer);
    document.querySelector('#cancel').addEventListener('click', reset);
    document.querySelector('#wrench').addEventListener('click', reset); // this is wrong
    document.querySelector('#pause').addEventListener('click', pauseTimer);
    document.querySelector('#resume').addEventListener('click', resumeTimer);
    document.querySelector('#restart').addEventListener('click', restartTimer);
});

function show(section)
{
    document.getElementById(section).style.display = "block";
}

function showInline(section)
{
    document.getElementById(section).style.display = "inline";
}

function hide(section)
{
    document.getElementById(section).style.display = "none";
}

function load()
{
    hide("settings");
    hide("modify");
    hide("resume");
    editing = false;

    // if timer is paused, show resume button and hide pause button
    if(bgpage.pauseDate)
    {
        showInline("resume");
        hide("pause");
    }


    // if timer is off, show settings
    if(!bgpage.alarmDate)
    {
        show("settings");
        hide("display");
    }

    // else, show countdown
    else
    {
        show("display");
        refreshDisplay();
        show("modify");
    }
}

function getChoice()
{
    // find focus time, RETURN selected value
    var num;
    num = parseInt(document.getElementById("focusTime").value);
    return num;
}


function setTimer()
{
    // make sure we're dealing with text not fields

    // SET background timer for selected number
    // HIDE settings, DISPLAY countdown

    var num = getChoice();

    // set timer, hide settings, display reset button
    if(isValid(num))
    {
        bgpage.setAlarm(num * 60000);
        hide("settings");
        show("modify");
        show("display");
        refreshDisplay();
    }
    else
        bgpage.error();
}

// Returns true if 0 <= amt <= 240
function isValid(amt)
{
    if(isNaN(amt) || (amt == null))
        return false;
    else if((amt < 0) || (amt > 240))
        return false;
    else
        return true;
}

function refreshDisplay()
{
    percent = bgpage.getTimeLeftPercent();

    if(percent < 15)
    document.getElementById("bar").style.color = "grey";
    document.getElementById("bar").textContent = bgpage.getTimeLeftString();
    document.getElementById("bar").style.width = percent + "%";

    refreshDisplayTimeout = setTimeout(refreshDisplay, 100);

}

function pauseTimer()
{
    hide("pause");
    showInline("resume");
    bgpage.pause();
    clearTimeout(refreshDisplayTimeout);
}

function resumeTimer()
{
    hide("resume");
    showInline("pause");
    refreshDisplay();
    bgpage.resume();
}

function restartTimer()
{
    hide("resume");
    showInline("pause");
    refreshDisplay();
    bgpage.restart();
}

function reset()
{
    clearTimeout(refreshDisplayTimeout);
    bgpage.turnOff();
    hide("display");
    show("settings");
    hide("modify");
}
