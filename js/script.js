$('#sel1').on('change', function() {
	var optSelctd = this.value;
	switch (optSelctd) {
		case 'IP':
			{
				$('#DomesticPackages').hide();
				$('#InternationalPackages').show();
			}
			break;
		case 'DP':
			{
				$('#InternationalPackages').hide();
				$('#DomesticPackages').show();
			}
			break;
		/*case "AP":{alert(">AP");}break;*/
		default:
			{
			}
			break;
	}
});

$('#btnPackages').click(function() {
	var pt = $('#PackageSelectionBox').val();
	switch (pt) {
		case 'DP':
			{
				pt = $('#DomesticPackages').val();
			}
			break;
		case 'IP':
		default:
			{
				pt = $('#InternationalPackages').val();
			}
			break;
	}
	window.location.href = 'packages.html?pkg=' + pt;
});
