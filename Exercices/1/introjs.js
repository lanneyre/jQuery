// Exercice 1
/*

	function changement(){ // création de la fonction changement()

	    $(".col50 ul").css("list-style-type","none"); // Je rajoute au.x ul situé.s dans le.s élément.s qui on la classe col50, 
	    //la propriété css list-style-type avec une valeur à none.

	}
*/

//Exercice 2

/*

function changement(){ // création de la fonction changement()

	var reverse1; // Initialisation de la variable locale
	if (!reverse1){ // condition : SI reverse1 est false

    	$(".col50 ul").css("list-style-type","none"); // Je rajoute au.x ul situé.s dans le.s élément.s qui on la classe col50, 
	    //la propriété css list-style-type avec une valeur à none.
    	reverse1 = true; // je met la variable reverse1 à true.
  
	}else{ // SINON

		$(".col50 ul").css("list-style-type","disc"); // Je rajoute au.x ul situé.s dans le.s élément.s qui on la classe col50, 
	    //la propriété css list-style-type avec une valeur à disc.
		reverse1 = false; // je met la variable reverse1 à false.
		
	}

}
*/

//Exercice 3

/*


function changement(){ // création de la fonction changement()
	
	$(".col50 ul").toggleClass("notype"); // Ajoute ou enlève la classe notype en fonction de l'état actuel de l'élément

}

function changementTwo(){ // création de la fonction changementTwo()

	$("ul").toggleClass("notype"); // Ajoute ou enlève la classe notype en fonction de l'état actuel des éléments ul.

}
*/

// Exercice 4

/*

function changement(){ // création de la fonction changement()
	
	$(".col50 ul").toggleClass("notype"); // Ajoute ou enlève la classe notype en fonction de l'état actuel des éléments ul situé dans un élément
	// ayant la classe col50

}

function changementTwo(){ // création de la fonction changementTwo()
	$(".col50 ul").toggleClass("notype"); // Ajoute ou enlève la classe notype en fonction de l'état actuel des éléments ul situé dans un élément
	// ayant la classe col50
	$(".col100 ul").toggleClass("notype nopad"); // Ajoute ou enlève la classe notype et la classe nopad en fonction de l'état actuel des éléments 
	//ul situé dans un élément ayant la classe col100

}
*/

// Exercice 5

		function changement(){ //création de la fonction changement()
			
			$(".col50 ul").toggleClass("notype"); // Ajoute ou enlève la classe notype en fonction de l'état actuel de l'élément

		}

		function changementTwo(){ // création de la fonction changementTwo()
			$(".col50 ul").toggleClass("notype"); // Ajoute ou enlève la classe notype en fonction de l'état actuel des éléments ul situé dans un élément
												// ayant la classe col50
			$(".col100 ul").toggleClass("notype nopad");// Ajoute ou enlève la classe notype et la classe nopad en fonction de l'état actuel des éléments 
														//ul situé dans un élément ayant la classe col100

		}
		var str; // initialisation de la variable
		var lorem = $(".division>p").text(); // initialisation et définition de la variable lorem
		function superfonction(){ // création de la fonction superfonction()
			console.log($("#testeur").val()); // permet de tester l'entré dans la fonction
			str = $("#testeur").val(); // changement de contenu de la variable str
			switch (true){ // Initialisation du switch, vérifie si le cas est VRAI
				case ((/(\boui\b)|(\bo\b)/i).test(str)): // Si la valeur dans le input est "oui,o,OUI,O"
					$(".division").addClass("bgvert"); // ajoute la classe bgvert aux div ayant la classe division
					console.log('bgvert');// permet de tester l'entré dans le cas
					break;
				case ((/(\bnon\b)|(\bn\b)/i).test(str)): // Si la valeur dans le input est "non,n,NON,N"
					$(".division").addClass("bgred"); // ajoute la classe bgred aux div ayant la classe division
					console.log('bgred'); // permet de tester l'entré dans le cas
					break;
				case ((/^[a-zA-Z0-9]{10,20}$/i).test(str)): // Si la valeur contient entre 10 et 20 caractères alphanumérique
					$(".division>p").text(str); // le contenu des paragraphes enfant direct des éléments ayant la classe division prend la valeur testée
					$(".division").removeClass("bgred"); // enlève la classe bgred aux div ayant la classe division
					$(".division").removeClass("bgvert"); // enlève la classe bgvert aux div ayant la classe division
					console.log(lorem); // permet de tester l'entré dans le cas
					break;
				case ((/[A-Z]{1}.{0,7}[0-9]{1}/).test(str)): // Si la le 1er caractère est une lettre majuscule, qu'elle est suivi par aucun ou 
															//jusqu'à 7 caractères, suivi par un chiffre
					$("#extlink").text(str); // le contenu de #extlink devient la valeur testée
					$("#extlink").attr("href","https://fr.wikipedia.org/wiki/"+str); // l'attribut href de #extlink devient https://fr.wikipedia.org/wiki/valeursaisi
					console.log("Test regex"); // permet de tester l'entré dans le cas
					break;

				default:
					$(".division").removeClass("bgred"); // enlève la classe bgred aux div ayant la classe division
					$(".division").removeClass("bgvert"); // enlève la classe bgvert aux div ayant la classe division
					$(".division>p").text(lorem); // remplace le contenu des paragraphes contenus dans les éléments ayant la classe division avec la valeur de la variable lorem
					console.log("default case"); // permet de tester l'entré dans le cas
					break;

			} // Fermeture du switch
		}

// Exo 6 - Bonus
$("#w3").attr("href","http://w3schools.com"); // Change l'attribut href du lien ayant l'id w3