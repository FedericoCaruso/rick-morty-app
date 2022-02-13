Mi scuso per il tempo impiegato ma purtroppo come avevo scritto ad Alessia ho avuto problemi famigliari che non mi hanno permesso di poter dedicare
il tempo necessario al progetto.

In ogni caso, spero che esso sia di vostro gradimento.

Onestamente non avevo familiarità con i vari script che avete richiesto cosi come con gly styled components,
comunque dovrebbero essere tutti installati in maniera corretta e funzionati.
In particolare purtroppo non so come gestire i test automatizzati, quindi lo script parte e funziona correttamente ma ovviamente non trova nessun test da runnare.
Spero che questo non non comprometta in maniera troppo negativa l'esito del test.

L'app di se per se è molto semplice, si tratta di una semplice schermata dove vengono mostrati a cascata 20 personaggi di rick e morty con tutte le informazioni necessarie.
Ho optato per una tipica paginazione rispetto ad un infinite loading perchè pensavo che in questo modo sarebbe stato più semplice gestire il lato delle performance,
nonostante tutto sono sicuro che l'applicazione può essere ulteriomente ottimizata.

Effettuo in totale quattro chiamate api, la prima è quella dove ottengo i 20 personaggi che sono presenti all'interno della pagina, poi per ciascun personaggio eseguo altre chiamate per ottenere la location, l'origine e gli episodi.

Per quanto riguarda le informazioni generali, cosi come la location e l'origine, non avevo molti dubbi su come presentarli a schermo mentre invece per quanto riguarda gli episodi non sapemo benissimo come impostarli, visto che alcuni personaggi possno avere molti episodi.
Alla fine ho scelto di inserire tutti gli epidosi all'interno di un div con overflow scroll.

Tutte le informazioni più importanti sono locate all'interno di un context che utilizza un reducer per la gestione dei vari stati.
Probabilmente, trattandosi di un'applicazione molto piccola il context è un po overkill ma ci tenevo ad usarlo.

Anche se è stata la mia prima volta, spero infine di aver usato in maniera corretta gli styled components.

Spero che il progetto sia di vostro gradimento,
grazie.
