var n = document.getElementById("disp");
			var numHolder;
			var optr;

			function attachNum(e){
				n.value += e.innerHTML;

			}

			function doAdd(){
				optr = '+';
				numHolder = parseInt(n.value);
				n.value = "";
			}

			function doMin(){
				optr = '-';
				numHolder = parseInt(n.value);
				n.value = "";
			}

			function doMul(){
				optr = '*';
				numHolder = parseInt(n.value);
				n.value = "";
			}

			function doDiv(){
				optr = '/';
				numHolder = parseInt(n.value);
				n.value = "";
			}

			function res(){
				switch(optr){
					case '+':
						n.value = numHolder + parseInt(n.value);
						break;
					
					case '-':
						n.value = numHolder - parseInt(n.value);
						break;
			
					case '*':
						n.value = numHolder * parseInt(n.value);
						break;

					case '/':
						n.value = numHolder / parseInt(n.value);
						break;

					default:
						console.log('no operator used');
						break;


				}
			}

			function del(){
				n.value = " ";
			}