let $ = document;
let city = [
    tehran = { name1: 'تهران', name2: 'tehran', temperature: '42', wheather: 'آفتابی', humidty: '%30', windSpeed: '30km/h' },
    karaj = { name1: 'کرج', name2: 'karaj', temperature: '35', wheather: 'ابری', humidty: '%48', windSpeed: '10km/h' },
    shiraz = { name1: 'شیراز', name2: 'shiraz', temperature: '40', wheather: 'ابری', humidty: '%36', windSpeed: '40km/h' },
    esfahan = { name1: 'اصفهان', name2: 'esfahan', temperature: '41', wheather: 'آفتابی', humidty: '%28', windSpeed: '20km/h' },
    tabriz = { name1: 'تبریز', name2: 'tabriz', temperature: '30', wheather: 'بارانی', humidty: '%40', windSpeed: '350km/h' },
    yazd = { name1: 'یزد', name2: 'yazd', temperature: '45', wheather: 'آفتابی', humidty: '%22', windSpeed: '25km/h' },
    rasht = { name1: 'رشت', name2: 'rasht', temperature: '38', wheather: 'بارانی', humidty: '%65', windSpeed: '27km/h' },
];
let f;
let showCity;
let searchinput = $.getElementById('search-input');
let searchBtn = $.getElementById('search-btn');

let box = $.getElementById('show-box');

let CityName = $.getElementById('city-name');
let cityTemperature = $.getElementById('city-temperature');
let cityWheather = $.getElementById('city-wheather');
let cityHumidity = $.getElementById('city-humidity');
let cityWindSpeed = $.getElementById('city-windSpeed');

let alertBox = $.getElementById('alert-box');
let alerts = $.getElementById('alerts');



searchBtn.addEventListener('click', showWheather);


function showWheather() {
    alertBox.style.display = 'none';
    box.style.display = 'none';
    showCity = city.find(cityfind);
    //alert(searchinput.value);

    if (searchinput.value.length === 0) {
        //alert('فیلد خالی را پر کنید');
        alerts.innerHTML = 'لطفا فیلد های خالی را پر کنید.';
        alerts.style.color = 'red';
        alerts.style.textShadow = '0px 0px 15px rgba(255, 0, 0, 0.4)';
        alertBox.style.display = 'block';

        setTimeout(function() {
            alertBox.style.display = 'none';
        }, 3000)
    } else {
        if (f === false) {
            //alert('مقدار وارد شده صحیح نمیباشد');
            alerts.innerHTML = 'شهر مورد نظر یافت نشد.';
            alerts.style.color = 'red';
            alerts.style.textShadow = '0px 0px 15px rgba(255, 0, 0, 0.4)';
            alertBox.style.display = 'block';

            setTimeout(function() {
                alertBox.style.display = 'none';
            }, 3000)

        } else {
            CityName.innerHTML = 'آب و هوا در ' + showCity.name1;
            cityTemperature.innerHTML = 'دما: ℃' + showCity.temperature;
            cityWheather.innerHTML = showCity.wheather;
            cityHumidity.innerHTML = 'رطوبت: ' + showCity.humidty;
            cityWindSpeed.innerHTML = 'سرعت باد: ' + showCity.windSpeed;
            box.style.display = 'block';

            setTimeout(function() {
                box.style.display = 'none';
            }, 10000)
        }
    }
    searchinput.value = '';
}

function cityfind(a) {

    if (a.name1 === searchinput.value || a.name2 === searchinput.value.toLowerCase()) {
        f = true;
        return a;
    } else {
        f = false;
    }
}