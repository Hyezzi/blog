<template>
  <b-container fluid>
      <b-row>
          <b-col col xl="10" class = "mx-auto">
            <post-card v-for = "content in contents" :key = "content.id" :title = "content.title" :body = "content.body" :createdAt = "content.created_at" :comments = "content.comments"></post-card>
          </b-col>
      </b-row>
  </b-container>

<!--
  <div>
    <post-card v-for = "content in contents" :key = "content.id" :title = "content.title" :body = "content.body" :createdAt = "content.created_at" :comments = "content.comments"></post-card>
  </div>
-->
</template>

<script>
import PostCard from './components/PostCard.vue';

export default {
  components: {
    PostCard
  },
  data(){
    return{
      contents: [
        {
          _id: "5bb7206392ed1f83f75fd6a3",
          title: "ad sint eiusmod",
          body: "Ad incididunt ipsum exercitation do deserunt pariatur. Nulla id pariatur aliquip non nisi consectetur labore velit pariatur nostrud. Ullamco elit ipsum anim amet qui Lorem esse sint velit ea. Duis officia non laboris non reprehenderit veniam incididunt ad eu. Elit id sunt consectetur veniam nostrud consectetur irure labore amet qui.\r\n",
          created_at: "2015-10-16T12:02:55 -09:00",
          comments: [
            {
              id: "5bb720636fa07c628a4cbd74",
              body: "기차놀이 가야지(ฅ’ω’ฅ)​"
            },
            {
              id: "5bb7206345e1b81409c4e823",
              body: "Nulla tempor adipisicing culpa deserunt id culpa laborum irure duis."
            },
            {
              id: "5bb72063d2555aea6777db6b",
              body: "Mollit pariatur fugiat in voluptate incididunt voluptate enim eu nostrud eu."
            }
          ]
        },
        {
          _id: "5bb72063e1c17936aa31e85e",
          title: "enim minim irure",
          body: "Qui cillum sint id laboris est deserunt. Culpa adipisicing consequat laborum ullamco aute irure quis laborum commodo. Incididunt ad esse aute consequat commodo aute tempor. Elit mollit laboris enim nulla dolor.\r\n",
          created_at: "2016-05-09T01:17:14 -09:00",
          comments: [
            {
              id: "5bb720639110871031a8cf68",
              body: "Pariatur fugiat esse nisi cupidatat ea dolore tempor elit adipisicing qui aute voluptate veniam sint."
            },
            {
              id: "5bb72063168412bb96662808",
              body: "Cupidatat veniam fugiat proident elit."
            },
            {
              id: "5bb7206381c9c082b6c7be28",
              body: "Lorem laborum ex sit quis nostrud ex eu adipisicing ex ut eiusmod."
            }
          ]
        },
        {
          _id: "5bb720632205fa0ebc27c4e5",
          title: "culpa cupidatat tempor",
          body: "Reprehenderit proident eiusmod aliquip duis mollit cillum. Esse dolore mollit reprehenderit ex laboris est occaecat cillum. Voluptate culpa ipsum dolor proident eu quis velit commodo amet. Amet incididunt sunt adipisicing minim officia nulla fugiat est ullamco laborum sit id qui commodo. Dolore incididunt consequat aute quis ad elit incididunt laborum.\r\n",
          created_at: "2017-02-11T12:16:37 -09:00",
          comments: [
            {
              id: "5bb72063edac6ff7746b755b",
              body: "Irure deserunt culpa aliquip laboris exercitation eu Lorem in ut est consequat minim."
            },
            {
              id: "5bb7206345f4659080d3450c",
              body: "Fugiat proident pariatur excepteur tempor aliqua amet cillum aliquip quis elit minim aute."
            },
            {
              id: "5bb72063895d7fa930a99ba5",
              body: "Aliquip ipsum ad ullamco Lorem."
            }
          ]
        },
        {
          _id: "5bb72063cadd402f120362c3",
          title: "ad occaecat consectetur",
          body: "Id sint reprehenderit enim incididunt quis voluptate in irure. Officia aute exercitation aliquip consectetur est velit veniam dolore. Dolor esse nisi adipisicing nostrud id. Eiusmod anim ut nostrud reprehenderit. Proident minim ipsum ut cupidatat ipsum. Incididunt excepteur exercitation laboris excepteur nulla labore enim ipsum voluptate.\r\n",
          created_at: "2014-04-20T01:33:51 -09:00",
          comments: [
            {
              id: "5bb720635b8fb045aa1284ca",
              body: "Pariatur sint commodo culpa qui ullamco adipisicing exercitation sit sit."
            },
            {
              id: "5bb72063d6c94c4a52c39494",
              body: "Consequat laboris officia aliqua sit deserunt et in aliquip adipisicing ipsum incididunt in."
            },
            {
              id: "5bb720635ead1c69446956d6",
              body: "Reprehenderit commodo elit esse sit incididunt commodo."
            }
          ]
        },
        {
          _id: "5bb72063393647473e54d2b8",
          title: "sit laboris nostrud",
          body: "Fugiat amet do pariatur nostrud ipsum mollit do ex minim. Deserunt adipisicing dolor tempor sit sunt excepteur et tempor voluptate cupidatat proident Lorem. Anim dolor est eiusmod elit mollit irure cupidatat incididunt. Laboris tempor ipsum fugiat voluptate est elit.\r\n",
          created_at: "2015-02-07T12:18:58 -09:00",
          comments: [
            {
              id: "5bb72063bf904d3a1df7376f",
              body: "Pariatur commodo sint ullamco exercitation occaecat laborum amet culpa laboris."
            },
            {
              id: "5bb7206356c3705f9503b338",
              body: "Do velit culpa nisi eu nulla."
            },
            {
              id: "5bb72063a07b880bfff7dc91",
              body: "Elit in ut nisi dolore commodo et deserunt cillum."
            }
          ]
        },
        {
          _id: "5bb7206349343d6277e6049c",
          title: "elit dolor dolor",
          body: "Lorem irure esse ea minim quis sunt minim sit labore dolore proident ad Lorem deserunt. Voluptate amet qui in fugiat sit ullamco deserunt. Nostrud ad commodo in labore adipisicing nisi. Proident laborum et qui voluptate nostrud fugiat laborum excepteur et. Incididunt pariatur aliqua commodo consequat voluptate. Nostrud excepteur velit cillum quis consequat. Lorem eiusmod enim ad anim cillum nisi nulla deserunt dolore ex eu magna et ea.\r\n",
          created_at: "2017-09-21T01:40:28 -09:00",
          comments: [
            {
              id: "5bb7206347d8cd1149067a89",
              body: "Duis sunt fugiat laboris proident aute consequat adipisicing aliqua laboris exercitation veniam pariatur occaecat eu."
            },
            {
              id: "5bb7206318972819edfd208f",
              body: "Cillum exercitation Lorem duis et amet do anim irure cupidatat aliquip."
            },
            {
              id: "5bb7206317e1122b9efc01b5",
              body: "Laborum dolore labore irure magna labore veniam aute aliquip."
            }
          ]
        },
        {
          _id: "5bb720631b6952f724c1434f",
          title: "sint sunt do",
          body: "Aliqua duis duis veniam ullamco pariatur sint. Consectetur Lorem ex excepteur aliqua. Aute officia amet eu tempor excepteur nisi officia ut aliquip et exercitation. Quis velit ullamco mollit deserunt excepteur ullamco magna. Elit laboris nostrud ipsum ut exercitation consectetur quis aute dolor commodo Lorem incididunt quis Lorem. Et eiusmod id occaecat commodo est enim minim ea fugiat qui mollit.\r\n",
          created_at: "2016-03-26T04:13:26 -09:00",
          comments: [
            {
              id: "5bb72063695df679925f7bee",
              body: "Sint fugiat enim quis fugiat velit exercitation nulla consequat velit consequat dolor magna."
            },
            {
              id: "5bb720635b0a531203622a85",
              body: "Dolor commodo cupidatat magna amet nulla Lorem minim minim dolore."
            },
            {
              id: "5bb720633e3a826a9a54fba2",
              body: "Sit dolor ut in do reprehenderit anim amet et ex cupidatat."
            }
          ]
        },
        {
          _id: "5bb720634dd25b00757b3608",
          title: "officia elit Lorem",
          body: "Deserunt ullamco ea eiusmod nostrud. Consequat in veniam ullamco aliquip quis dolore voluptate sit aliquip tempor consequat ullamco amet. Lorem ipsum et voluptate consequat anim labore pariatur commodo non laboris anim ullamco quis.\r\n",
          created_at: "2017-08-22T10:48:15 -09:00",
          comments: [
            {
              id: "5bb72063aec73ee94066f209",
              body: "Eu magna ad ad ex reprehenderit enim occaecat exercitation duis qui."
            },
            {
              id: "5bb720631d0af686def261fc",
              body: "Laboris enim non laborum mollit."
            },
            {
              id: "5bb72063935de4d13d7f8a27",
              body: "In tempor voluptate culpa consequat esse in qui anim ullamco reprehenderit ad."
            }
          ]
        }
      ]
    }
  }
}
</script>

<style>

</style>
