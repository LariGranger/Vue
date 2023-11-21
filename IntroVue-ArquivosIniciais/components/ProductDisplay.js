const productDisplayComponent = {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: 
    /*html*/
    ` <div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img :src="imagem" class="{out-of-stock-img}">
      </div>
      <div class="product-info">
        <h1>{{titulo}}</h1>
        <p>{{descricao}}</p>
        <p v-if="estoque > 10">Em estoque</p>
        <p v-else-if="estoque <= 10 && estoque > 0">Quase esgotado</p>
        <p v-else>Fora de estoque</p>
        <p v-if="promocao">Em promoção</p>
        <a :href="url">URL</a>
        <p>Composição:
          <ul>
            <li v-for="detalhe in detalhes" :key="detalhe">{{detalhe}}</li>
          </ul>
          Cores disponiveis:
          <div
           v-for="(item,indice) in cores" :key="item.id" @mouseover="atualizaProdutoSelecionado(indice)" class="color-circle" :style="{backgroundColor: item.cor}">
           {{  }}
          </div>
          <p>Frete: {{frete}}</p>
          <div>
            <button class="button" v-on:click="addCarrinho" :disabled="!estoque" :class="{disabledButton: !estoque}">Comprar</button>
            <button class="button" @:click="removeCarrinho">Remover</button>
          </div>
          <!--posso usar v-on ou @-->
        </p>
      </div>
    </div>`,
    data(){
        return{
            produto: 'Camisa Proton',
            marca: 'GV Varejo',
            descricao: 'Camisa branca com a logo do Proton. Valor: R$220,00',
            url: 'https://github.com/',
            produtoSelecionado: 0,
            detalhes: ['67% poliéster', '30% algodão', '3% elastano'],
            cores: [
                { id: 'ED4F13', cor: '#fff', imagem: './assets/images/proton_branca.jpg', quantidade: 50, promocao: ''},
                { id: 'ED4F14', cor: '#a4a4a6', imagem: './assets/images/proton_cinza.jpg', quantidade: 0, promocao: 'true'}
            ]
        }
    },
    methods: {
        addCarrinho(){
            this.carrinho++
        },
        removeCarrinho(){
            this.carrinho--
        },
        atualizaProdutoSelecionado(indice){
            this.produtoSelecionado = indice
        }
    },
    computed: {
        titulo(){
            return this.produto + ' ' + this.marca
        },
        imagem(){
            return this.cores[this.produtoSelecionado].imagem
        },
        estoque(){
            return this.cores[this.produtoSelecionado].quantidade
        },
        promocao(){
            return this.cores[this.produtoSelecionado].promocao
        },
        frete(){
            if(this.premium)
                return 'grátis'
            else
                return 'R$19.99'
        }
    }
}

export default productDisplayComponent