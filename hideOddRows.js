var table = document.getElementById('myTable');
var rows = document.getElementsByTagName('tr');

function hideOddRows(){
	for(i=0;i<(rows.length);i++){
		if((i%2)==0){
			document.getElementsByTagName('tr')[i].style.display = 'none';
		}
	}
}