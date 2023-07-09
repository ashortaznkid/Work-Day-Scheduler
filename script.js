$(document).ready(function () {

  $('.saveBtn').on('click', function () {
    var textVal = $(this).siblings('.description').val()
    var hourId = $(this).parent().att('id')
    localStorage.setItem(hourId, textVal)
  })
  localStorageReader()
  timeColor()
  today()


  function localStorageReader() {
    var timeBlocks = $('.container-lg').children()
    var startingHour = timeBlocks.attr('id').split('-')[1]
    var hourNumber =parseInt(startingHour)
    for (var i = 0; i < 9; i++) {
      var currentHour = hourNumber + i
      var selectString = '#hour-${currentHour.toString()} .description'
      var storageValue = localStorage.getItem('#hour-${currentHour.toString()}')
      $(selectString).val(storageValue)
    }
  }

  function timeColor() {
    var timeBlocks = $('.container-lg').children()
    var startingHour = timeBlocks.attr('id').split('-')[1]
    var hourNumber = parseInt(startingHour)
    var timeOfDay = dayjs().hour()
    for (var i = 0; i < 9; i++){
      var schedulerHour = hourNumber + i
      var selectString = '#hour-${schedulerHour.toString()}'
      if (schedulerHour < timeOfDay) {
        $(selectString).addClass('past')
      } else if (schedulerHour === timeOfDay){
        $(selectString).addClass('present')
      } else if (schedulerHour > timeOfDay){
        $(selectString).addClass('future')
      }
    }
  }


  function today() {
    var todayIs = dayjs().format('dddd MMM D, YYYY')
    $('#currentDay').text("Current Date: " + todayIs)
  }
 

});
