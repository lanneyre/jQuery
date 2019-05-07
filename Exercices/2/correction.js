

		$( document ).ready(function() {
    		// Tapez votre code Jquery ici

    		// Correction exo 1
	    		$("#bloc1").on({
	    			//quand la souris entre, cet element se voit retiré la classe vert et ajouté la bleu
	    			mouseenter:function(){
	    			$(this).removeClass("vert").addClass("bleu");
	    			//quand la souris sort, cet element se voit retiré la classe bleu et ajouté la vert
	    		},mouseleave:function(){
	    			$(this).removeClass("bleu").addClass("vert");}
	    		});

	    	// Correction alternative
	    		$("#bloc1").hover(function(){
	    			$(this).removeClass("vert").addClass("bleu");	    			
	    		},function(){
	    			$(this).removeClass("bleu").addClass("vert");
	    		})

	    	// Correction exo2
	    		//Quand une touche est relevée, le texte du para1 se voit attribué le contenu du champ1
	    		$("#champ1").on("keyup",(function(){
	    			 $("#para1").text($("#champ1").val());
	    		}));

	    	// Correction exo3	
	    		$(".bloc2").hover(function(){
	    			//Quand le pointeur entre dans un élément bloc2, test si son contenu est numerique
	    			if ($.isNumeric($(this).text())) {
	    				//si pair, cet élément prend la classe vert
	    				if ($(this).text()%2 == 0) {
	    					$(this).addClass("vert");
	    				}else{
	    				//si non pair(impair), prend la classe rouge	
	    					$(this).addClass("rouge");
	    					}
	    			}else {
	    				//si non numerique, prend la classe bleu
	    					$(this).addClass("bleu");
	    				}
	    			},function(){
	    				//Quand le pointeur sort, l'élément se voit retirer les classes rouge, vert et bleu
	    				$(this).removeClass("rouge vert bleu");
	    			});

	    	// Correction exo3 bouton
	    	$("#btn").on("click",(function(){
	    		//Quand le bouton est cliqué
	    		var $tab = $(".bloc2");
	    		//Tout les éléments ayant la classe bloc2 sont récupérés et stockés dans $tab
	    		for(let i = 0; i < $tab.length; i++){
	    			//Itération sur chacun des éléments de $tab
		    		if ($.isNumeric($tab.eq(i).text())) {
		    			//test si le contenu de l'élément à l'index i est numerique
		    			if ($tab.eq(i).text() % 2 == 0) {
		    				//test si pair : ajoute le contenu de l'élément au paragraphe result en précisant pair
		    				$("#result").html($("#result").html()+$tab.eq(i).text()+" = "+"Pair "+" <br> ");
		    			}
		    			else{
		    				//si non pair: ajoute le contenu de l'élément au paragraphe result en précisant impair
		    				$("#result").html( $("#result").html() +  $tab.eq(i).text() + " = " + "Impair " +  " <br> ");
		    			}
		    		}	
		    		else{
		    			//si non numérique : ajoute le contenu de l'élément au paragraphe result en précisant chaine de caracteres
		    			$("#result").html($("#result").html()+  $tab.eq(i).text() + " = " + "chaine de caracteres " + " <br> ");
		    		}	
	    		}
	    		$("#btn").off();
	    	}));		

	    	});

		
