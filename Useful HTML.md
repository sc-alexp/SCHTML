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
<img src="https://stoneridgesoftware.com/wp-content/uploads/2024/03/copilot-logo-color.png" height="30px">
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
