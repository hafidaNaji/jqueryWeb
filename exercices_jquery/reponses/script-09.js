//  Chemin relatif : ../reponses/script-09.js
//  Chemin relatif : ../files/usa.json
$(document).ready(function() {
    //Partie A - JSON
    //1. Loading usa.json 
    $.ajax({
        url: './files/usa.json',
        dataType: 'json',
        success: function(data) {
            var usa = data;

            // 2. Fill the list #la with state names
            var $la = $('#la');
            $.each(usa, function(index, state) {
                $la.append('<option value="' + state.state + '">' + state.state + '</option>');
            });

            // 3. Attach a change handler to #la to sync cities in #lb
            $la.on('change', function() {
                var selectedState = $(this).val();
                var cities = usa.find(e => e.state === selectedState).cities;
                var $lb = $('#lb');

                // Clear existing options
                $lb.empty();

                // Populate #lb with cities of the selected state
                $.each(cities, function(index, city) {
                    $lb.append('<option value="' + city + '">' + city + '</option>');
                });
            });
        }
    });

    // Partie B - XML
    $.ajax({
        url: './files/usa.xml',
        dataType: 'xml',
        success: function(data) {
            // 2. Parse XML data
            var xmlDoc = $(data);
            var statesXml = xmlDoc.find('state');

            // 3. Fill the list #la with state names
            var $laXml = $('#laXml');
            statesXml.each(function() {
                var stateName = $(this).find('name').text();
                $laXml.append('<option value="' + stateName + '">' + stateName + '</option>');
            });

            // 4. Attach a change handler to #laXml to sync cities in #lbXml
            $laXml.on('change', function() {
                var selectedStateXml = $(this).val();
                var citiesXml = statesXml.find('name:contains(' + selectedStateXml + ')').siblings('cities').text().split(',');

                var $lbXml = $('#lbXml');

                // Clear existing options
                $lbXml.empty();

                // Populate #lbXml with cities of the selected state
                $.each(citiesXml, function(index, cityXml) {
                    $lbXml.append('<option value="' + cityXml.trim() + '">' + cityXml.trim() + '</option>');
                });
            });
        }
    });
    

});














