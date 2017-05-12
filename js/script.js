
function calculate() 
{
	
	var amount = document.getElementById('amount').value;
	var random = Math.floor(Math.random() * 101); 
	var eur = 4.2 * (1+(random + 50)/1000);
	
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1;
	var yyyy = today.getFullYear();
	var mins = today.getMinutes();
	var hh = today.getHours();

	if(dd<10) {
		dd='0'+dd
	} 

	if(mm<10) {
		mm='0'+mm
	} 
	
	if(hh < 10) {
		hh='0'+hh
	}
	
	if(mins < 10) {
		mins='0'+mins
	}
	
	today = mm+'/'+dd+'/'+yyyy+' '+hh+':'+mins;
	
	var columnContainer = document.createElement('div');
	columnContainer.className = 'column-container';
		
	var column = document.createElement('div');
	column.className = 'column';
	column.innerHTML = '<h5>PLN AMOUNT</h5>';
	
	var legend = document.createElement('h2');
	legend.innerHTML = eur * amount;
		
	var card = document.createElement('i');
	card.className = 'card fa fa-clock-o';
	card.id = 'iconStyle';
	card.innerHTML = ' ' + today;
		
	columnContainer.appendChild(column);
	columnContainer.appendChild(card);
	column.appendChild(legend);
		
	document.getElementById('board').appendChild(columnContainer);
}

document.getElementById('amount')
    .addEventListener('keyup', function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById('button').click();
    }
});