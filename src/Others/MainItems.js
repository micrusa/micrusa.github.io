/*
MIT License

Copyright (c) 2020 Fayaz Bin Salam

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */

// Icons (from https://materialdesignicons.com/, just choose any SVG and paste the value of d from path)
export const githubIcon = 'M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z';
export const telegramIcon = 'm12 24c6.629 0 12-5.371 12-12s-5.371-12-12-12-12 5.371-12 12 5.371 12 12 12zm-6.509-12.26 11.57-4.461c.537-.194 1.006.131.832.943l.001-.001-1.97 9.281c-.146.658-.537.818-1.084.508l-3-2.211-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953z'
export const mailIcon = 'm230.9 253.371c13.369 8.913 36.827 8.914 50.199-.001.002-.001.005-.003.007-.004l227.865-151.911c-7.474-21.616-28.018-37.188-52.142-37.188h-401.663c-24.125 0-44.668 15.572-52.143 37.188l227.87 151.912c.003.002.005.002.007.004z"/><path d="m297.746 278.328c-.003.002-.005.004-.007.005-11.702 7.801-26.724 11.702-41.741 11.702-15.02 0-30.036-3.9-41.739-11.703-.002-.001-.003-.002-.005-.003l-214.254-142.835v257.072c0 30.417 24.747 55.163 55.166 55.163h401.666c30.418 0 55.164-24.746 55.164-55.163v-257.072z'
export const linkIcon = 'M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z'
export const giftIcon = 'https://image.flaticon.com/icons/svg/1867/1867817.svg'
export const androidIcon = 'https://www.vectorlogo.zone/logos/android/android-icon.svg'
export const javaIcon = 'https://www.vectorlogo.zone/logos/java/java-icon.svg'

//Custom vars
function getYearsAgo(oldYear){
    let currYear = new Date().getFullYear();
    let year = currYear - oldYear;

    return year > 1 ? year + " years" : "a year";
}

// First page infos
export var myName = 'micrusa'
export var myOccupation = 'Hobby programmer'
export var myDetails = `I have been coding as a hobby for many years, my first projects were about ${getYearsAgo(2016)} ago, and they were just simple batch/bash scripts with a few lines, then I created some discord bots and effortless programs on node.js and python, and learnt to use tools like git and some IDEs, finally ${getYearsAgo(2019)} ago I created my first android app and java, C#, php programs from zero, publishing my first open source project on github after some months. I am still learning new languages, tools, IDEs, and I will keep doing it because I love it`
export var myImageLink = ""
export var primaryColor = '#304ffe';

export const navItems = [
    "About",
    "Projects",
    "Contact",
]

export const navContactIcons = [
    {
        svgPath: githubIcon,
        link: 'https://github.com/micrusa'
    },
    {
        svgPath: telegramIcon,
        link: 'http://t.me/micrusa'
    },
    {
        svgPath: mailIcon,
        link: 'mailto:micrusa.com@gmail.com'
    }
]

//
document.title = myName;
