function restrictDays() {
    var datePicker = document.getElementById('datePicker');
    var selectedDate = new Date(datePicker.value);
    var today = new Date(); // Сьогоднішня дата
    var maxDate = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate()); // Дата через місяць вперед
    
    var dragonSelect = document.getElementsByName('select_dragon')[0]; // Зміна тут
    var selectedDragon = dragonSelect.options[dragonSelect.selectedIndex].value;

    // Перевірка, чи вибрана дата не раніш або рівна сьогоднішній даті
    if (selectedDate <= today) {
        alert('Будь ласка, оберіть дату, яка є майбутньою.');
        datePicker.value = ''; // Очистити поле введення, якщо вибрана дата не є майбутньою
    } else if (selectedDate > maxDate) {
        alert('Будь ласка, оберіть дату, яка не перевищує межу за місяць вперед.');
        datePicker.value = ''; // Очистити поле введення, якщо вибрана дата перевищує межу за місяць вперед
    } else if (dragonSelect.value !== "") {
        if (selectedDragon === "Норвезький хребтоспин" || selectedDragon === "Угорська рогохвістка" || selectedDragon === "Український залізопуз") {
            if (selectedDate.getDay() !== 1 && selectedDate.getDay() !== 4) {
                alert('Будь ласка, виберіть понеділок або четвер.');
                datePicker.value = ''; 
            }
        }
        if (selectedDragon === "Китайська метеорка" || selectedDragon === "Звичайна зелена валійка") {
            if (selectedDate.getDay() !== 2 && selectedDate.getDay() !== 5) {
                alert('Будь ласка, виберіть вівторок або п\'ятницю.');
                datePicker.value = ''; 
            }
        }
        if (selectedDragon === "Гебридій чорний" || selectedDragon === "Румунський довгоріг") {
            if (selectedDate.getDay() !== 3 && selectedDate.getDay() !== 6) {
                alert('Будь ласка, виберіть вівторок або п\'ятницю.');
                datePicker.value = ''; 
            }
        }
        if (selectedDragon === "Опалоок антиподібний" || selectedDragon === "Шведська короткокрилка") {
            if (selectedDate.getDay() !== 3 && selectedDate.getDay() !== 0) {
                alert('Будь ласка, виберіть вівторок або п\'ятницю.');
                datePicker.value = ''; 
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const inputFields = document.querySelectorAll('.input-field');
    const errorMessages = document.querySelectorAll('.error-message');
    inputFields.forEach((input, index) => {
        input.addEventListener('input', function () {
            if (input.value.trim() !== '') {
                input.style.borderColor = 'var(--green_light)';
                errorMessages[index].textContent = '';
            } else {
                input.style.borderColor = 'var(--red)';
                errorMessages[index].textContent = 'Заповніть це поле!';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Отримуємо посилання на елементи
    var activitySelect = document.querySelector('select[name="activity"]');
    var dragonSelect = document.querySelector('select[name="select_dragon"]');
    var dateVisit = document.querySelector('#form-date'); //!form-date
    var datePicker = document.getElementById('datePicker');
    var formTime = document.querySelector('#form-time');
    var selectTime = document.getElementsByName('select_time')[0]; // Зміна тут

    // Ховаємо блоки при завантаженні сторінки
    dragonSelect.style.display = 'none';
    dateVisit.style.display = 'none';
    formTime.style.display = 'none';

    // Додаємо слухач події до елемента activity
    activitySelect.addEventListener('change', function () {
        // Перевіряємо, чи обрана опція "Спостереження за драконами"
        if (activitySelect.value === "Спостереження за драконами") {
            // Якщо так, показуємо блок select_dragon і ховаємо блок date_visit і formTime
            dragonSelect.style.display = 'block';
            dateVisit.style.display = 'none';
            datePicker.value='';
            formTime.style.display = 'none';
            selectTime.value='';
        } else {
            // Якщо ні, ховаємо блок select_dragon і показуємо блок date_visit
            dragonSelect.style.display = 'none';
            dragonSelect.value='';
            dateVisit.style.display = 'block';
            formTime.style.display = 'none';
            selectTime.value='';
        }
    });

    // Додаємо слухач події до елемента dateVisit
    dateVisit.addEventListener('change', function () {
        // Перевіряємо, чи введено значення в поле dateVisit
        if (dateVisit.value !== "" && (activitySelect.value === "Спостереження за драконами" || activitySelect.value === "Підйом на гору")) {
            // Якщо так, показуємо блок formTime
            formTime.style.display = 'block';
        } else {
            // Якщо ні, ховаємо блок formTime
            formTime.style.display = 'none';
            selectTime.value='';
        }
    });
    // Додаємо слухач події до елемента dragonSelect
    dragonSelect.addEventListener('change', function () {
        // Перевіряємо, чи обрано конкретного дракона
        if (dragonSelect.value !== "") {
            // Якщо так, показуємо блок form-date
            dateVisit.style.display = 'block';
        } else {
            // Якщо ні, ховаємо блок form-date
            dateVisit.style.display = 'none';
            dateVisit.value='';
        }
    });
});