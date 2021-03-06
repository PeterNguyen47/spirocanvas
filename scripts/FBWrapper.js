/*
Copyright 2011 Saiyasodharan (http://saiy2k.blogspot.com/)

This file is part of SpiroCanvas (http://code.google.com/p/spirocanvas/)

SpiroCanvas is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

SpiroCanvas is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with SpiroCanvas.  If not, see <http://www.gnu.org/licenses/>.
*/

/*
This class holds all the facebook related functionalities
*/

/**
 * @class
 */
SpiroCanvas.FBWrapper				=	function(sH)
{
	var		spiroHelper				=	sH;

	//this function passes the bse64 encoded PNG data to a service
	//hosted on our server, which decodes the data and shares in facebook
	this.sharePhoto					=	function()
	{
		var domain					=	document.domain;

		var _url = FACEBOOK_UPLOAD_SERVICE;

		$.ajax({
			url: _url,
			type: "POST",
			data: "data=" + spiroHelper.saveAsPNG() + "&uid=" + FB._session.uid,
			success: function(data, textStatus, jqXHR)
			{
				console.log(data);
				$( "#shareFacebook" ).html("Uploaded");
			}
		});
	}
		
	return this;
}