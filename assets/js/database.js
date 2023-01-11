class Database{
    constructor(numero, nbPlaces, formeTable, positionTable, numero_table,
        codePlat, nomPlat, prixPlat, typePlat, photoPlat, tempsPreparation,
         nomPersonnel, surnomPersonnel, numeroTéléphone, postePersonnel,
          numeroCommande, nombrePersonnes, prixTotalCommande, qte, prixTotalPlat) { 
        //------------Menu-----------
        this.codePlat = codePlat;
        this.nomPlat = nomPlat;
        this.prixPlat = prixPlat;
        this.typePlat = typePlat;
        this.photoPlat = photoPlat;
        this.tempsPreparation = tempsPreparation;

        //------------Employés-----------
        this.nomPersonnel = nomPersonnel;
        this.surnomPersonnel = surnomPersonnel;
        this.numeroTéléphone = numeroTéléphone;
        this.postePersonnel = postePersonnel;

        //------------Commandes-----------
        this.numeroCommande = numeroCommande;
        this.numero_table = numero_table;
        this.nombrePersonnes = nombrePersonnes;
        this.prixTotalCommande = prixTotalCommande;
        this.prixTotalPlat = prixTotalPlat;
        this.qte = qte;
        //------------Tables-----------
        this.numero = numero;
        this.nbPlaces = nbPlaces;
        this.formeTable = formeTable;
        this.positionTable = positionTable;
    }
    //------------Bloc Fonctions-----------
    show_table(){
        let records = localStorage.getItem("TablesData");//coolecte les donee des tables
        let zone = document.getElementById("zone");
        if(records){
            for (var i = 0; i < localStorage.length; i++){
                JSON.parse(records).forEach(data => {
                    //Affiche les donee);

                    
                });
            }
        }
    }
    ajouter_table(e) {
        let numero_table = document.getElementById('numero').value,
            nbPlaces = document.getElementById('nbPlaces').value,
            formeTable = document.getElementById('forme').value,
            positionTable = document.getElementById('position').value;
        //recuperer les donee de la table
        let Tables = JSON.parse(localStorage.getItem('TablesData')) || [];
    
        let exist = Tables.length && 
            JSON.parse(localStorage.getItem('TablesData')).some(data => 
                data.numero_table.toLowerCase() == numero_table.toLowerCase() && 
                data.formeTable.toLowerCase() == formeTable.toLowerCase()
            );
    
        if(!exist){//verifier si une table existe, si non ajoute
            Tables.push({ numero_table, nbPlaces, formeTable, positionTable });
            localStorage.setItem('TablesData', JSON.stringify(Tables));
            document.getElementById('numero').focus();
            alert("La Table a été ajoutée avec succès");
        }
        else{// si oui affiche que ca existe deja
            alert("Cette Table existe");
        }
        e.preventDefault();
    }
}
d1 = new Database("","","","","","","","","","","","","","","","","","","","");