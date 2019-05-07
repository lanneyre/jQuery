$(document).ready(function(){//charge le code contenu à l'intérieur quand la page est pleinement chargé, évite des erreurs potentielles
    
   //faire en sorte qu'un clic sur le bouton 1 supprime les enfants de la première liste et lui ajoute un paragraphe qui dit "je suis tout seul"
    $("#bt1").on("click", function(){//j'ajoute la fonction à mon clic sur le bouton qui :
        $("#mesListes").children().eq(1)//cherche l'élément d'id mesListes, puis son deuxième enfant
            .empty()//le vide de ses enfants (attention, cela inclut le texte)
            .append("<p></p>")//lui ajoute un élément paragraphe
            .children().text("je suis tout seul");//va dans ce nouveau paragraphe et lui ajoute son texte
        //ma fonction ne contient techniquement qu'une ligne de code, on parle de chaînage d'instructions
    });
    
        //cliquer sur le bouton 3 ajoute un paragraphe dans la première div en troisième position ET un autre dans la troisième div avant les boutons, contenant le texte "Uchronie" dans le premier cas et "mes boutons" dans l'autre
    $("button").last().on("click", function(){//je navigue jusqu'au troisième bouton et je lui ajoute la fonction sur clic
        $("#duTexte").children().eq(1)//je navigue dans le deuxième paragraphe
        .after("<p></p>").next().text("Uchronie");//je lui crée un sibling juste derrière et je lui ajoute du texte
        $("#partieFonctionnelle").prepend("<p></p>")//je crée un paragraphe au début de ma div
            .children().first().text("mes boutons");//je vais dans le nouveau paragraphe et lui ajoute son texte
    });
    
    //ajouter une bordure pointillée noire de 3 pixels d'épaisseur à tous les ancêtres de la ligne li1 jusqu'à la div incluse au chargement
    $("#li1").parentsUntil("body").css("border", "dotted black 3px");//body étant le parent immmédiat de la div, la méthode prend la liste et la div
    
    //cliquer sur le bouton 2 donne un fond noir et un texte blanc à toutes les lignes de la deuxième liste SAUF la numéro 8
    $("#bt2").on("click", function(){//j'ajoute la fonction au clic
        $("#mesListes").children().last()//je navigue dans le dernier enfant de mesListes qui est la 2e ul
            .children().not($("#li8"))//je sélectionne ses enfants qui ne sont PAS la ligne 8
            .css({"backgroundColor": "black", "color": "white"});//je modifie le CSS
    });

    
    //ajouter un quatrième bouton qui modifie le texte des autres pour qu'ils disent "on a changé" et pour que sur un clic, à la place de leur action initiale ils déplacent la première ligne de la deuxième liste en fin de liste
    $("#partieFonctionnelle").append("<button>bouton4</button")//j'ajoute le nouveau bouton au chargement de page
        .children().last()//je navigue à son niveau
        .on("click", function(){//j'ajoute la fonction qui :
        $("button").last().siblings("button")//sélection des autres boutons depuis le nouveau
            .text("on a changé")//modifie le texte des 3 boutons précédents
            .off()//on supprime les évènements précédents liés aux boutons
            .on("click", function(){//on rajoute le nouvel évènement
            var $ligne = $("ul").eq(1).children().first();//on cherche l'élément à déplacer et on le passe en variable
            console.log($ligne);//test du contenu de la variable
            $("ul").eq(1).append($ligne);//on l'ajoute à la fin de la liste
        });
    });
    

}); 

