# Useful HTML
### The purpose of this document is to contain useful HTML that is not used often enough to include in the HTML editor itself

---

## Information from Knowledge Base Article
Creates a post-it to insert information from a KBA straight into a ticket

```
<div style="background-color: #ececec; border-top-right-radius: 10px; border-top-left-radius: 10px; display: inline-block; padding: 10px; border-left: 1px solid black; border-top: 1px solid black; border-right: 1px solid black; box-shadow: 0px -10px 10px darkgray inset;"><b>[INSERT KNOWLEDGE ARTICLE LINK HERE]</b></div><div style="background-color: #ececec; padding: 15px; border: 1px solid black;">[INFORMATION FROM KBA]</div>
```

---

## Create HTML tables quickly
[https://divtable.com/generator/](https://divtable.com/generator/)

---

## Copilot help
Creates a post-it to insert information from copilot

```
<img src="https://stoneridgesoftware.com/wp-content/uploads/2024/03/copilot-logo-color.png" style="height: 30px;">
<div width="100%" style="border: solid 1px; box-shadow: 0px 0px 1px black; padding: 10px; margin-top: 10px; border-radius: 10px;"></div>
```

## Countdown Timer
Creates a countdown timer to paste into a ticket

1. Navigate to [timeanddate.com/clocks/freecountdown.html](https://www.timeanddate.com/clocks/freecountdown.html)
2. Configure your countdown (preview in lower-right-hand corner)
3. Click `Show HTML for Countdown Timer` and grab the `iframe` code
4. Use this code in the [SCHTML Creator](https://sc-alexp.github.io/SCHTML/):
```
<div style="text-align: center;">INSERT iframe HERE</div>
```

## Zoom Meeting
Make sure you change the following before sending the Zoom meeting invitation:
- Join link for button
- Meeting ID under button
- Meeting password under button
- Double check the phone numbers (in case they changed)
- Meeting ID for international
- International numbers link (two different places)
```
Hello,

&nbsp;&nbsp;&nbsp;You are invited to a <a href="https://iastate.zoom.us" target="_blank" rel="noopener noreferrer" style="text-decoration: none; font-weight: bold; color: #2d8cff;">Zoom</a> meeting. Join from a PC, Mac, iPad, iPhone or Android device. Please click this URL to start or join:

<div style="background: linear-gradient(90deg, #C8102E, red, #C8102E); text-align: center; border-radius: 15px; max-width: 300px; margin-left: auto; margin-right: auto;"><a href="[JOIN LINK HERE]" style="color: white; font-weight: bold; font-size: 3rem;">Join</a></div><small>(If this does not work, go to <a href="https://iastate.zoom.us/">https://iastate.zoom.us/</a> and enter meeting ID: <code>[MEETING ID HERE]</code> and password: <code>[MEETING PASSWORD HERE]</code>)</small>

&nbsp;&nbsp;&nbsp;You can also join from dial-in phone line:
Dial: <a href="tel:3017158592">+1 (301) 715-8592</a> or <a href="tel:3052241968">+1 (305) 224-1968</a>
Meeting ID: <code>[MEETING ID HERE]</code>
Participant ID: <code>Shown after joining the meeting</code>
International numbers available: <a href="[INTERNATIONAL NUMBERS LINK]" target="_blank" rel="noopener noreferrer"><u>[INTERNATIONAL NUMBERS LINK]</u></a>

<a href="https://www.it.iastate.edu/help"><strong>ITS Solution Center</strong></a>
<a href="https://www.iastate.edu"><img border="0" alt="Iowa State University Logo" src="https://www.iastate.edu/themes/custom/iastate2022/img/iowa-state-university-logo-no-tagline-red.svg">
```
