<template>
  <ion-page>
    <HeaderPage />
    <ion-content :fullscreen="true">
      <ion-text>
        <p>Bonjour, moi c'est Yannick et je suis developpeur de cette application.</p>
        <p>Celle-ci est en Beta test, ce qui veut dire qu'elle est sujette à disfonctionnement tout du long de son developpement.</p>

        <p>
          Il y a deux types de developpement concernant l'application:
        </p>
        <p>
          Fonctionnalitees applicatives. Ce type de developpement vous concerne directement car ca comprends toutes les fonctionnalites que vous pouvez utiliser au quotidien avec cette application.
          Ces developpement sont les plus interessant pour vous comme pour moi et c'est pas celle qui prends le plus temps. Toutefois pour fonctionner certaine sujet necessite des developpements techniques (voir la section suivante).
          Prochainement, je vais ajouter une section 'features' avec la liste des nouvelles fonctionnalitees à venir ainsi que la possibilite pour vous d'en proposer de nouvelles.
          C'est vous qui voterez les prochains developpement.
        </p>
        <p>Fonctionnalitees techniques. Ce type de developpement est souvent long a developper et est peu ou pas visible dans l'usage de l'application, mais necessaire.
          Ces topics concernes la securite, la disponibilite et la resiliance des donnees, la disponibilite et la resiliances des serveurs d'applications, l'implementation d'un buissness model pour financer le developpement et le coup des serveurs (pubs et abonnements),
          les algorithmes de traitements lies au tirages du loto.
        </p>
        <p>
          Je ne sais pas encore la repartition exacte qui sera faite entre les deux type de developpement, mais gardez à l'esprit qui il y aura forcemment plus de temps alloues au fonctionnalites techniques 
          et que donc il faudra surement etre un peu patient entre deux fonctionnalitees applicative.
        </p>
        <p>
          Garanti: Aucune publicite ni abonnement ne sera propose avant un niveau satisfaisant de l'application et de son infrastructure et donc de sa sortie de son status BETA.
        </p>
        <p>
          Comment soutenir le projet ? Tout simplement, en parler partout autour de vous et notamment à tous vos proches accro du loto :)
        </p>
        <p>
          Merci pour votre soutien et belle journee, beaux tirages a tous !
        </p>
      </ion-text>
    </ion-content>
  </ion-page>
</template>

<script src="./AboutUs.ts"></script>
