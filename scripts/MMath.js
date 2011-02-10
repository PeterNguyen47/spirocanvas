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

var MMath = (function ()
{
	var my 			=	{};
	
	//calculates the Highest Common Factor of given two numbers
	my.HCF			=	function HCF(a, b)
						{
							var i = 0;
							var j = 0;
							var hcf = 0;

							if (a < b)
							{
								hcf = a;
								i = b;
							}
							else
							{
								hcf = b;
								i = a;
							}
							do
							{
								j = i % hcf;
								if (j != 0)
								{
									i = hcf;
									hcf = j;
								}
							} while (j != 0);
							
							return hcf;
						};
						
	return my;
}());