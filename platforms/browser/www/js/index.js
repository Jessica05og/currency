/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// function to connect the code to the API with the key.
function callAPI(){
	var http = new XMLHttpRequest();

	// API KEY
	const url = 'http://www.apilayer.net/api/live?access_key=c8425a3698beec07187f0c08f68fe568';
	http.open("GET", url);
	http.send();
    // it gets the conversion from JSON format
	http.onreadystatechange = (e) => {
		var elementInputMoney = document.getElementById('inputMoney').value;
		var response = http.responseText;
		var responseJSON = JSON.parse(response);
		var data = responseJSON.quotes;
		var keys = Object.keys(data);
		var quotesForView = "";
		var quotesForResult = "";
    // do the conversion
			keys.forEach((element) =>{
                quotesForView += "1 USD is equivalent to " + data[element] + "convertTo " + element
                + "<br>";

			});
// call the function to show the result
			display(quotesForView, quotesForResult);

	}
}


// it recives the quotesForView and quotesForResult


function display(quotesForView, quotesForResult){
	// Get Values
	var elementInputMoney = document.getElementById('inputMoney').value;
	var elementDisplayConvertFrom = document.getElementById('convertFrom');
	var elementDisplayConvertTo = document.getElementById('convertTo');

	// Display Values
	elementDisplayConvertFrom.innerHTML = quotesForView;
	elementDisplayConvertTo.innerHTML = quotesForView;

}