/* BGP BI — gerado por build-data.cjs em 2026-06-08T19:02:10.683Z */
/* Empresa: Boleto Amigo | Ano ref: 2026 */
const MONTHS = ["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"];
const MONTHS_FULL = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];

function fmt(n, opts = {}) {
  const { dec = 2, prefix = "R$", showSign = false } = opts;
  const sign = n < 0 ? "-" : (showSign ? "+" : "");
  const abs = Math.abs(n);
  const parts = abs.toFixed(dec).split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `${sign}${prefix}${parts.join(",")}`;
}
function fmtK(n) {
  return fmt(n, { dec: 0 });
}
function fmtPct(n, dec = 2) {
  const sign = n > 0 ? "+" : (n < 0 ? "-" : "");
  return `${sign}${Math.abs(n).toFixed(dec).replace(".", ",")}%`;
}

const META = {
  "empresa": {
    "nome_fantasia": "Boleto Amigo"
  },
  "fetched_at": "2026-06-08T19:02:10.475Z",
  "ref_year": 2026,
  "counts": {
    "contas_pagar": 0,
    "contas_receber": 0,
    "categorias": 45,
    "departamentos": 0,
    "clientes": 513
  }
};
const POSICAO_CAIXA = [
  {
    "name": "Saldo realizado YTD",
    "value": -25093.75999999995
  },
  {
    "name": "A receber (futuro)",
    "value": 162353.62
  },
  {
    "name": "A pagar (futuro)",
    "value": 126368.36000000002
  }
];
const COMPOSICAO_DESPESA = [
  {
    "name": "FUNDO DE CAIXA ECONOMY (CONTA SIMPLES)",
    "value": 44107.57,
    "color": "#2dd4bf"
  },
  {
    "name": "ANÚNCIOS DE TELEVISÃO",
    "value": 25000,
    "color": "#22c55e"
  },
  {
    "name": "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
    "value": 20045.42,
    "color": "#a78bfa"
  },
  {
    "name": "OUTRAS DESPESAS",
    "value": 17634.969999999998,
    "color": "#f59e0b"
  },
  {
    "name": "RESSARCIMENTO DE DESPESAS DE CUSTOS OPERACIONAIS (TAG/DF)",
    "value": 15142.749999999998,
    "color": "#ef4444"
  },
  {
    "name": "META (FACEBOOK E INSTAGRAM)",
    "value": 14157.8,
    "color": "#6b7686"
  }
];

const SEGMENTS = {
  "realizado": {
    "MONTH_DATA": [
      {
        "m": "janeiro",
        "receita": 43060.85000000001,
        "despesa": 52770.58
      },
      {
        "m": "fevereiro",
        "receita": 34208.00000000001,
        "despesa": 45762.58
      },
      {
        "m": "março",
        "receita": 40706.73000000003,
        "despesa": 42427.31
      },
      {
        "m": "abril",
        "receita": 39274.380000000005,
        "despesa": 45765.51
      },
      {
        "m": "maio",
        "receita": 33699.130000000005,
        "despesa": 28302.07000000001
      },
      {
        "m": "junho",
        "receita": 300,
        "despesa": 1314.8000000000002
      },
      {
        "m": "julho",
        "receita": 0,
        "despesa": 0
      },
      {
        "m": "agosto",
        "receita": 0,
        "despesa": 0
      },
      {
        "m": "setembro",
        "receita": 0,
        "despesa": 0
      },
      {
        "m": "outubro",
        "receita": 0,
        "despesa": 0
      },
      {
        "m": "novembro",
        "receita": 0,
        "despesa": 0
      },
      {
        "m": "dezembro",
        "receita": 0,
        "despesa": 0
      }
    ],
    "RECEITA_CATEGORIAS": [
      {
        "name": "VENDA DE PRODUTOS/ SERVIÇOS",
        "value": 191249.08999999982,
        "clientes": 186
      }
    ],
    "DESPESA_CATEGORIAS": [
      {
        "name": "FUNDO DE CAIXA ECONOMY (CONTA SIMPLES)",
        "value": 44107.57,
        "fornecedores": 1
      },
      {
        "name": "ANÚNCIOS DE TELEVISÃO",
        "value": 25000,
        "fornecedores": 3
      },
      {
        "name": "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "value": 20045.42,
        "fornecedores": 3
      },
      {
        "name": "OUTRAS DESPESAS",
        "value": 17634.969999999998,
        "fornecedores": 5
      },
      {
        "name": "RESSARCIMENTO DE DESPESAS DE CUSTOS OPERACIONAIS (TAG/DF)",
        "value": 15142.749999999998,
        "fornecedores": 1
      },
      {
        "name": "META (FACEBOOK E INSTAGRAM)",
        "value": 14157.8,
        "fornecedores": 3
      },
      {
        "name": "ALUGUEL",
        "value": 12033.93,
        "fornecedores": 1
      },
      {
        "name": "EMPRESA PRESTADORA DE SERVIÇOS",
        "value": 9934.089999999998,
        "fornecedores": 12
      },
      {
        "name": "CONDOMÍNIO",
        "value": 6107.11,
        "fornecedores": 1
      },
      {
        "name": "EMPRESTIMOS A PAGAR",
        "value": 6000,
        "fornecedores": 1
      },
      {
        "name": "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "value": 5605,
        "fornecedores": 3
      },
      {
        "name": "PAGAMENTO DE FÉRIAS",
        "value": 5430.69,
        "fornecedores": 1
      }
    ],
    "RECEITA_CLIENTES": [
      {
        "name": "FRANCISCO GESSIVALDO PINHEIRO",
        "value": 3327.58
      },
      {
        "name": "MAX SERGIO SANTOS MOREIRA JUNIOR",
        "value": 3050.8
      },
      {
        "name": "SIMONE NOBRE GASPAR",
        "value": 3000
      },
      {
        "name": "JANETE DE MELO GALVAO",
        "value": 3000
      },
      {
        "name": "SILVANIA PEREIRA DE SOUSA",
        "value": 2350.9700000000003
      },
      {
        "name": "LIDIANE ALMEIDA SILVA",
        "value": 2129.6099999999997
      },
      {
        "name": "JOSE ARI SANTOS MACIEL",
        "value": 2113.79
      },
      {
        "name": "EDNA COSTA DE JESUS ALVES",
        "value": 2100
      },
      {
        "name": "FABIO DE SOUZA BARBOSA",
        "value": 2100
      },
      {
        "name": "DIOGO HENRIQUE FARNESE",
        "value": 2031.7000000000003
      },
      {
        "name": "EDVALDO DO CARMO ALVES",
        "value": 2000
      },
      {
        "name": "ALEXANDRE MARTINS DA SILVA",
        "value": 1990.6299999999999
      }
    ],
    "DESPESA_FORNECEDORES": [
      {
        "name": "DOCK IP S.A FUNDO DE CAIXA E INVESTIMENTOS",
        "value": 44107.57
      },
      {
        "name": "MARIA EDUARDA ANACLETO",
        "value": 16535.480000000003
      },
      {
        "name": "ECONOMY ASSESSORIA - TAGUATINGA",
        "value": 15142.749999999998
      },
      {
        "name": "BANCO ITAÚ",
        "value": 14391.71
      },
      {
        "name": "FACEBOOK CNPJ: 13.347.016/0001-17",
        "value": 14000
      },
      {
        "name": "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        "value": 12033.93
      },
      {
        "name": "RÁDIO E TELEVISÃO CV LTDA",
        "value": 12000
      },
      {
        "name": "TV METROPOLITANA",
        "value": 11000
      },
      {
        "name": "HUGO LEONARDO MOURA",
        "value": 8535.4
      },
      {
        "name": "CONDOMINIO DO EDIFICIO SUPER CENTER VENANCIO 2000",
        "value": 6107.11
      },
      {
        "name": "ECONOMY - CONTA SIMPLES",
        "value": 6000
      },
      {
        "name": "PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL",
        "value": 5010
      }
    ],
    "EXTRATO": [
      [
        "09/06/2026",
        "Boleto Amigo",
        "Sem categoria",
        "-",
        -18.13,
        "PAGO"
      ],
      [
        "08/06/2026",
        "Boleto Amigo",
        "Sem categoria",
        "-",
        -7.77,
        "PAGO"
      ],
      [
        "05/06/2026",
        "Boleto Amigo",
        "Sem categoria",
        "-",
        -7.77,
        "PAGO"
      ],
      [
        "03/06/2026",
        "Boleto Amigo",
        "Sem categoria",
        "-",
        -12.95,
        "PAGO"
      ],
      [
        "03/06/2026",
        "Boleto Amigo",
        "DESPESA DE AQUISIÇÃO DE EQUIP OU MANUTENÇÃO",
        "HUGO LEONARDO MOURA",
        -599,
        "PAGO"
      ],
      [
        "03/06/2026",
        "Boleto Amigo",
        "EMPRESA PRESTADORA DE SERVIÇOS",
        "HUGO LEONARDO MOURA",
        -64,
        "PAGO"
      ],
      [
        "02/06/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "DALVA MARGARET ROCHA FERREIRA CIRQUEIRA",
        300,
        "PAGO"
      ],
      [
        "02/06/2026",
        "Boleto Amigo",
        "Sem categoria",
        "-",
        -2.59,
        "PAGO"
      ],
      [
        "02/06/2026",
        "Boleto Amigo",
        "ANÚNCIOS DE RÁDIO",
        "EMMANUEL WESLEY RAMOS DA SOUSA",
        -500,
        "PAGO"
      ],
      [
        "02/06/2026",
        "Boleto Amigo",
        "LIMPEZA E HIGIENIZAÇÃO ESCRITÓRIO",
        "MARIA LUIZA LIMEIRA P COELHO",
        -100,
        "PAGO"
      ],
      [
        "01/06/2026",
        "Boleto Amigo",
        "Sem categoria",
        "-",
        -2.59,
        "PAGO"
      ],
      [
        "29/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ELINILDA MACEDO DA SILVA",
        395.85,
        "PAGO"
      ],
      [
        "29/05/2026",
        "Boleto Amigo",
        "MATERIAL DE CONSUMO",
        "HUGO LEONARDO MOURA",
        -12.99,
        "PAGO"
      ],
      [
        "29/05/2026",
        "Boleto Amigo",
        "OUTROS IMPOSTOS",
        "MINISTERIO DA FAZENDA (IRRF)",
        -0.01,
        "PAGO"
      ],
      [
        "29/05/2026",
        "Boleto Amigo",
        "MATERIAL DE CONSUMO",
        "COMERCIAL ALVORADA PROD. LIMP DESC LTDA",
        -132.2,
        "PAGO"
      ],
      [
        "29/05/2026",
        "Boleto Amigo",
        "Sem categoria",
        "-",
        -5.18,
        "PAGO"
      ],
      [
        "29/05/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -5.18,
        "PAGO"
      ],
      [
        "28/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ALEXANDRE PIRES BESSA",
        300,
        "PAGO"
      ],
      [
        "28/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "WELLEN MENDES MOREIRA LIMA",
        476.2,
        "PAGO"
      ],
      [
        "28/05/2026",
        "Boleto Amigo",
        "Sem categoria",
        "-",
        -10.36,
        "PAGO"
      ],
      [
        "28/05/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -10.36,
        "PAGO"
      ],
      [
        "27/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MICHAEL DE JESUS DOS SANTOS SILVA",
        464.1,
        "PAGO"
      ],
      [
        "27/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "LIDIANE ALMEIDA SILVA",
        464.08,
        "PAGO"
      ],
      [
        "27/05/2026",
        "Boleto Amigo",
        "Sem categoria",
        "-",
        -31.08,
        "PAGO"
      ],
      [
        "27/05/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -31.08,
        "PAGO"
      ],
      [
        "26/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ANDRE LUIZ MARQUES MARTINS",
        450,
        "PAGO"
      ],
      [
        "26/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "VERONICA PEREIRA RAQUEL DA SILVA TELES",
        395.1,
        "PAGO"
      ],
      [
        "26/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ALEXANDRE MARTINS DA SILVA",
        396.35,
        "PAGO"
      ],
      [
        "26/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARIO AUGUSTO DA SILVA SANTOS",
        467.85,
        "PAGO"
      ],
      [
        "26/05/2026",
        "Boleto Amigo",
        "Sem categoria",
        "-",
        -7.77,
        "PAGO"
      ],
      [
        "26/05/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SICOOB",
        -7.77,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCO ALVES DE SOUSA FILHO",
        500,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCO HERNANDO FARIAS",
        600,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "BRUNO QUENA GOMES DINIZ",
        675,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ALLYNE CAROLINA SAMPAIO SILVA",
        383.33,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ANTONIO JOSIVAN ALVES RODRIGUES",
        100,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "AUDACI EVARISTO DA COSTA",
        383.33,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOSE AUGUSTO SOARES SERRAO",
        450,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "CARLOS DE SOUSA MARTINS",
        100,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "EDNA COSTA DE JESUS ALVES",
        450,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FABIO DE SOUZA BARBOSA",
        450,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "IRANILDO DE LIMA OLIVEIRA",
        100,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "KAIO RAMOS DE SOUZA BORGES",
        464.95,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOACIR ALVES DOS SANTOS",
        399.82,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCO GENECY DE SOUSA SANTOS",
        406.52,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Boleto Amigo",
        "PAGAMENTO DE VALE TRANSPORTE",
        "SEMOB SECRETARIA DE ESTADO DE TRANSPORTE E MODILIDADE DO DF",
        -253,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Boleto Amigo",
        "Sem categoria",
        "-",
        -2.59,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Boleto Amigo",
        "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL",
        -1420,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Boleto Amigo",
        "EMPRESA PRESTADORA DE SERVIÇOS",
        "FRANCISCO AROUDO DOS SANTOS BATISTA",
        -15,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -2.59,
        "PAGO"
      ],
      [
        "22/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ANDREZA  FERREIRA MARTINS",
        100,
        "PAGO"
      ],
      [
        "22/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ILA MARIA MACIEL NOGUEIRA",
        466.67,
        "PAGO"
      ],
      [
        "22/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOSE RIBAMAR PEREIRA DE OLIVEIRA",
        702.73,
        "PAGO"
      ],
      [
        "22/05/2026",
        "Boleto Amigo",
        "Sem categoria",
        "-",
        -5.18,
        "PAGO"
      ],
      [
        "22/05/2026",
        "Boleto Amigo",
        "MATERIAL DE CONSUMO",
        "COMERCIAL ALVORADA PROD. LIMP DESC LTDA",
        -132.21,
        "PAGO"
      ],
      [
        "22/05/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -5.18,
        "PAGO"
      ],
      [
        "21/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "CIBERLANIA MARIA DE ANDRADE",
        100,
        "PAGO"
      ],
      [
        "21/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOSE ARI SANTOS MACIEL",
        463.79,
        "PAGO"
      ],
      [
        "20/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "GILVANEIDE MESSIAS BARBOSA",
        100,
        "PAGO"
      ],
      [
        "20/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ANDERSON DA SILVA BARRETO",
        100,
        "PAGO"
      ],
      [
        "20/05/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "ALGAR TELECOM S/A",
        -482.56,
        "PAGO"
      ],
      [
        "20/05/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SICOOB",
        -50,
        "PAGO"
      ],
      [
        "19/05/2026",
        "Boleto Amigo",
        "Sem categoria",
        "-",
        -10.36,
        "PAGO"
      ],
      [
        "19/05/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -10.36,
        "PAGO"
      ],
      [
        "18/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARIA LEMOS DA SILVA COSTA",
        300,
        "PAGO"
      ],
      [
        "18/05/2026",
        "Boleto Amigo",
        "Sem categoria",
        "-",
        -2.59,
        "PAGO"
      ],
      [
        "18/05/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -2.59,
        "PAGO"
      ],
      [
        "15/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "LUIZ GABRIEL DE SOUZA DE SOUZA",
        375,
        "PAGO"
      ],
      [
        "15/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOSIANE FERNANDA DE SOUZA SILVA",
        450,
        "PAGO"
      ],
      [
        "15/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCA HELENA DOS SANTOS MORAIS",
        100,
        "PAGO"
      ],
      [
        "15/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "GERONIMO DA SILVA ALCANTARA",
        408.08,
        "PAGO"
      ],
      [
        "15/05/2026",
        "Boleto Amigo",
        "SIMPLES",
        "SIMPLES - RECEITA FEDERAL",
        -285.01,
        "PAGO"
      ],
      [
        "15/05/2026",
        "Boleto Amigo",
        "Sem categoria",
        "-",
        -5.18,
        "PAGO"
      ],
      [
        "15/05/2026",
        "Boleto Amigo",
        "CONFRATENIZAÇÃO",
        "HUGO LEONARDO MOURA",
        -70,
        "PAGO"
      ],
      [
        "15/05/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -5.18,
        "PAGO"
      ],
      [
        "14/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "GILSON CESAR BARBOSA",
        416.67,
        "PAGO"
      ],
      [
        "14/05/2026",
        "Boleto Amigo",
        "INSS",
        "MINISTERIO DA PREVIDENCIA (INSS)",
        -824.33,
        "PAGO"
      ],
      [
        "14/05/2026",
        "Boleto Amigo",
        "FGTS",
        "CAIXA ECONOMICA FEDERAL",
        -690.31,
        "PAGO"
      ],
      [
        "14/05/2026",
        "Boleto Amigo",
        "Sem categoria",
        "-",
        -2.59,
        "PAGO"
      ],
      [
        "14/05/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -2.59,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "GABRIEL DA GUIA SENA",
        300,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "KAIO RAMOS DE SOUZA BORGES",
        450,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOSEILTON BERTO BIZERRA",
        300,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "RITA MARIA DA COSTA PINTO",
        464.1,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Boleto Amigo",
        "Sem categoria",
        "-",
        -31.08,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -31.08,
        "PAGO"
      ],
      [
        "12/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARCOS ANDERSON OLIVEIRA ARAUJO",
        395.07,
        "PAGO"
      ],
      [
        "12/05/2026",
        "Boleto Amigo",
        "Sem categoria",
        "-",
        -5.18,
        "PAGO"
      ],
      [
        "12/05/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -5.18,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "WILLIAM BESERRA GOMES",
        450,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "EDNIVALDO MESQUITA PEREIRA",
        450,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARILZA ARAUJO OLIVEIRA",
        500,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCA AURILENE DA SILVA CAVALCANTE",
        1500,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ANTONIO MAGDO GUEDES MESQUITA",
        383.33,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "EDILSON DE OLIVEIRA PATOS",
        333.33,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "LUCAS DE PAIVA MONTEIRO",
        450,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "WILLYSON FERREIRA MATOS",
        450,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCA HELENA EVANGELISTA MARTINS",
        383.35,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCA MAIARA LIMA MOREIRA",
        450,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "CESAR NILDO DE BRITO OLIVEIRA",
        383.33,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "GRACENIRA GONCALVES DE OLIVEIRA",
        450,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JULIA DE SOUZA FIRMEZA",
        383.33,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "EDUARDA ANDRADE DO NASCIMENTO",
        472.49,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Boleto Amigo",
        "Sem categoria",
        "-",
        -12.95,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Boleto Amigo",
        "FUNDO DE CAIXA ECONOMY (CONTA SIMPLES)",
        "DOCK IP S.A FUNDO DE CAIXA E INVESTIMENTOS",
        -2029.27,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Boleto Amigo",
        "ALUGUEL DE IMPRESSORA",
        "QUALITY TOTAL LOCAÇÃO DE EQUIPAMENTOS DE INFORMATICA",
        -384.79,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -12.95,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCO GILSON CASTRO DE ALMEIDA",
        450,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JAIR COSTA LIMA",
        600,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "VANDERSON BARROS DE SOUZA",
        400.57,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Boleto Amigo",
        "OUTRAS DESPESAS",
        "BRXNQ- TELECOMUNICAÇÕES- LTDA",
        -180.8,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Boleto Amigo",
        "Sem categoria",
        "-",
        -10.36,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -10.36,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARLI MARIA DA SILVA SANTOS",
        450,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ONADINA GOMES OLIVEIRA",
        450,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "LUCIVANIA DE OLIVEIRA DO NASCIMENTO",
        450,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JULIANA PEREIRA DOS SANTOS",
        300,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOSE ANTONIO BARBOSA DE MOURA",
        261.24,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FLAVIO ROBERTO NASCIMENTO PEREIRA",
        489.04,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Boleto Amigo",
        "RESSARCIMENTO DE DESPESAS DE CUSTOS OPERACIONAIS (TAG/DF)",
        "ECONOMY ASSESSORIA - TAGUATINGA",
        -2998.93,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Boleto Amigo",
        "Sem categoria",
        "-",
        -12.95,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -12.95,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ALAN NIXON ARAGAO RIBEIRO",
        450,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "TALES FERREIRA DE LIMA",
        300,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "CLERTON CUNHA GOMES",
        600,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "SHIRLIANE DA SILVA BEZERRA",
        300,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCO GESSIVALDO PINHEIRO",
        463.79,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCO GESSIVALDO PINHEIRO",
        463.79,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ALEXANDRE MARTINS DA SILVA",
        398.82,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Boleto Amigo",
        "Sem categoria",
        "-",
        -15.54,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Boleto Amigo",
        "COMISSÃO INDICAÇÃO DE CLIENTES",
        "GABRIELA BARBOSA FERNANDES",
        -200,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Boleto Amigo",
        "COMISSÃO INDICAÇÃO DE CLIENTES",
        "ALINE VIEIRA GARCIA",
        -200,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -15.54,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "SIMONE FERNANDES DE SOUZA",
        383.33,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ORION ARAUJO PEREIRA",
        333.35,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ANTONIO DE PADUA VAZ DE LIMA",
        396.93,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "WILLIAM BESERRA GOMES",
        467.85,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ELENILTON SANTOS DO NASCIMENTO",
        398.75,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Boleto Amigo",
        "Sem categoria",
        "-",
        -10.36,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Boleto Amigo",
        "CONDOMÍNIO",
        "CONDOMINIO DO EDIFICIO SUPER CENTER VENANCIO 2000",
        -1188.25,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Boleto Amigo",
        "LIMPEZA E HIGIENIZAÇÃO ESCRITÓRIO",
        "ISMAILDE E SOUZA",
        -600,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -470.98,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -10.36,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MANOEL CARVALHO DA COSTA",
        675,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JULIETTE MONICA DA SILVA LEAO",
        450,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "LINDOMAR DE OLIVEIRA",
        100,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "LIDIANE ALMEIDA SILVA",
        465.53,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ELINILDA MACEDO DA SILVA",
        396.57,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "WASHINGTON TORQUATO DE LIMA JUNIOR",
        400.82,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Boleto Amigo",
        "ANÚNCIOS DE TELEVISÃO",
        "EMMANUEL WESLEY RAMOS DA SOUSA",
        -500,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Boleto Amigo",
        "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "MARIA EDUARDA ANACLETO",
        -3201.08,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Boleto Amigo",
        "Sem categoria",
        "-",
        -5.18,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Boleto Amigo",
        "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "HUGO LEONARDO MOURA",
        -3294.8,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Boleto Amigo",
        "META (FACEBOOK E INSTAGRAM)",
        "FACEBOOK CNPJ: 13.347.016/0001-17",
        -6000,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -5.18,
        "PAGO"
      ],
      [
        "01/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "GILVANEIDE MESSIAS BARBOSA",
        100,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOAQUIM DA SILVA REIS",
        383.35,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "UALAS NEVES SILVA",
        463.8,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ANTONIO DIONISIO GADELHA DA SILVA",
        463.8,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "LILIAN LIMA DIAS",
        464.37,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "DEUSIMAR RODRIGUES NASCIMENTO",
        395.63,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "CARLOS ANDRE NUNES DA SILVA",
        466.4,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "DOCK INSTITUIÇÃO DE PAGAMENTO S.A",
        -49,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -5.18,
        "PAGO"
      ],
      [
        "29/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "VERONICA PEREIRA RAQUEL DA SILVA TELES",
        383.33,
        "PAGO"
      ],
      [
        "29/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "SILVANIA PEREIRA DE SOUSA",
        675,
        "PAGO"
      ],
      [
        "29/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ALLYNE CAROLINA SAMPAIO SILVA",
        395.32,
        "PAGO"
      ],
      [
        "29/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "BRUNO QUENA GOMES DINIZ",
        675,
        "PAGO"
      ],
      [
        "29/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCO JOANDERSON GOMES FERREIRA",
        395.32,
        "PAGO"
      ],
      [
        "29/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FABIO DE SOUZA BARBOSA",
        450,
        "PAGO"
      ],
      [
        "29/04/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -10.36,
        "PAGO"
      ],
      [
        "29/04/2026",
        "Boleto Amigo",
        "PAGAMENTO DE FÉRIAS",
        "MARIA EDUARDA ANACLETO",
        -5430.69,
        "PAGO"
      ],
      [
        "29/04/2026",
        "Boleto Amigo",
        "COMISSÃO INDICAÇÃO DE CLIENTES",
        "FRANCISCO NADSON MENDES PEREIRA",
        -200,
        "PAGO"
      ],
      [
        "28/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ANDERSON DA SILVA BARRETO",
        100,
        "PAGO"
      ],
      [
        "28/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCO ALVES DE SOUSA FILHO",
        500,
        "PAGO"
      ],
      [
        "28/04/2026",
        "Boleto Amigo",
        "EMPRESA PRESTADORA DE SERVIÇOS",
        "LASERSING SINALIZAÇÃO E PROJETOS",
        -1792.79,
        "PAGO"
      ],
      [
        "28/04/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -2.59,
        "PAGO"
      ],
      [
        "27/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "EDNA COSTA DE JESUS ALVES",
        450,
        "PAGO"
      ],
      [
        "27/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ELIZANGELA ALVES DA COSTA",
        383.35,
        "PAGO"
      ],
      [
        "27/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "DANIELLY MAUL DA CUNHA MOURA",
        464.37,
        "PAGO"
      ],
      [
        "27/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOSE FRANCISCO PEREIRA",
        395.63,
        "PAGO"
      ],
      [
        "27/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "WELLEN MENDES MOREIRA LIMA",
        474.7,
        "PAGO"
      ],
      [
        "27/04/2026",
        "Boleto Amigo",
        "PAGAMENTO DE VALE TRANSPORTE",
        "SEMOB SECRETARIA DE ESTADO DE TRANSPORTE E MODILIDADE DO DF",
        -264,
        "PAGO"
      ],
      [
        "27/04/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -12.95,
        "PAGO"
      ],
      [
        "27/04/2026",
        "Boleto Amigo",
        "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL",
        -965,
        "PAGO"
      ],
      [
        "24/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ANDREZA  FERREIRA MARTINS",
        100,
        "PAGO"
      ],
      [
        "24/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "AUDACI EVARISTO DA COSTA",
        383.33,
        "PAGO"
      ],
      [
        "24/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ANDRE LUIZ MARQUES MARTINS",
        300,
        "PAGO"
      ],
      [
        "24/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ILA MARIA MACIEL NOGUEIRA",
        200,
        "PAGO"
      ],
      [
        "24/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "DAYANE ALVES DE ABREU",
        515.68,
        "PAGO"
      ],
      [
        "24/04/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -7.77,
        "PAGO"
      ],
      [
        "23/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JEFFERSON HUGO BANDEIRA DE FRANCA",
        100,
        "PAGO"
      ],
      [
        "23/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "IDELFONSO RODRIGUES CAMPOS",
        500,
        "PAGO"
      ],
      [
        "23/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MICHAEL DE JESUS DOS SANTOS SILVA",
        300,
        "PAGO"
      ],
      [
        "23/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOSE ARI SANTOS MACIEL",
        450,
        "PAGO"
      ],
      [
        "23/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "LUIZ GABRIEL DE SOUZA DE SOUZA",
        375,
        "PAGO"
      ],
      [
        "23/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "KLEBER DE ALMEIDA",
        466.4,
        "PAGO"
      ],
      [
        "23/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOACIR ALVES DOS SANTOS",
        398.32,
        "PAGO"
      ],
      [
        "23/04/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -12.95,
        "PAGO"
      ]
    ],
    "EXTRATO_RECEITAS": [
      [
        "02/06/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "DALVA MARGARET ROCHA FERREIRA CIRQUEIRA",
        300,
        "PAGO"
      ],
      [
        "29/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ELINILDA MACEDO DA SILVA",
        395.85,
        "PAGO"
      ],
      [
        "28/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ALEXANDRE PIRES BESSA",
        300,
        "PAGO"
      ],
      [
        "28/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "WELLEN MENDES MOREIRA LIMA",
        476.2,
        "PAGO"
      ],
      [
        "27/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MICHAEL DE JESUS DOS SANTOS SILVA",
        464.1,
        "PAGO"
      ],
      [
        "27/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "LIDIANE ALMEIDA SILVA",
        464.08,
        "PAGO"
      ],
      [
        "26/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ANDRE LUIZ MARQUES MARTINS",
        450,
        "PAGO"
      ],
      [
        "26/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "VERONICA PEREIRA RAQUEL DA SILVA TELES",
        395.1,
        "PAGO"
      ],
      [
        "26/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ALEXANDRE MARTINS DA SILVA",
        396.35,
        "PAGO"
      ],
      [
        "26/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARIO AUGUSTO DA SILVA SANTOS",
        467.85,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCO ALVES DE SOUSA FILHO",
        500,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCO HERNANDO FARIAS",
        600,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "BRUNO QUENA GOMES DINIZ",
        675,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ALLYNE CAROLINA SAMPAIO SILVA",
        383.33,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ANTONIO JOSIVAN ALVES RODRIGUES",
        100,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "AUDACI EVARISTO DA COSTA",
        383.33,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOSE AUGUSTO SOARES SERRAO",
        450,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "CARLOS DE SOUSA MARTINS",
        100,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "EDNA COSTA DE JESUS ALVES",
        450,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FABIO DE SOUZA BARBOSA",
        450,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "IRANILDO DE LIMA OLIVEIRA",
        100,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "KAIO RAMOS DE SOUZA BORGES",
        464.95,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOACIR ALVES DOS SANTOS",
        399.82,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCO GENECY DE SOUSA SANTOS",
        406.52,
        "PAGO"
      ],
      [
        "22/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ANDREZA  FERREIRA MARTINS",
        100,
        "PAGO"
      ],
      [
        "22/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ILA MARIA MACIEL NOGUEIRA",
        466.67,
        "PAGO"
      ],
      [
        "22/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOSE RIBAMAR PEREIRA DE OLIVEIRA",
        702.73,
        "PAGO"
      ],
      [
        "21/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "CIBERLANIA MARIA DE ANDRADE",
        100,
        "PAGO"
      ],
      [
        "21/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOSE ARI SANTOS MACIEL",
        463.79,
        "PAGO"
      ],
      [
        "20/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "GILVANEIDE MESSIAS BARBOSA",
        100,
        "PAGO"
      ],
      [
        "20/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ANDERSON DA SILVA BARRETO",
        100,
        "PAGO"
      ],
      [
        "18/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARIA LEMOS DA SILVA COSTA",
        300,
        "PAGO"
      ],
      [
        "15/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "LUIZ GABRIEL DE SOUZA DE SOUZA",
        375,
        "PAGO"
      ],
      [
        "15/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOSIANE FERNANDA DE SOUZA SILVA",
        450,
        "PAGO"
      ],
      [
        "15/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCA HELENA DOS SANTOS MORAIS",
        100,
        "PAGO"
      ],
      [
        "15/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "GERONIMO DA SILVA ALCANTARA",
        408.08,
        "PAGO"
      ],
      [
        "14/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "GILSON CESAR BARBOSA",
        416.67,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "GABRIEL DA GUIA SENA",
        300,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "KAIO RAMOS DE SOUZA BORGES",
        450,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOSEILTON BERTO BIZERRA",
        300,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "RITA MARIA DA COSTA PINTO",
        464.1,
        "PAGO"
      ],
      [
        "12/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARCOS ANDERSON OLIVEIRA ARAUJO",
        395.07,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "WILLIAM BESERRA GOMES",
        450,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "EDNIVALDO MESQUITA PEREIRA",
        450,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARILZA ARAUJO OLIVEIRA",
        500,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCA AURILENE DA SILVA CAVALCANTE",
        1500,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ANTONIO MAGDO GUEDES MESQUITA",
        383.33,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "EDILSON DE OLIVEIRA PATOS",
        333.33,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "LUCAS DE PAIVA MONTEIRO",
        450,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "WILLYSON FERREIRA MATOS",
        450,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCA HELENA EVANGELISTA MARTINS",
        383.35,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCA MAIARA LIMA MOREIRA",
        450,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "CESAR NILDO DE BRITO OLIVEIRA",
        383.33,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "GRACENIRA GONCALVES DE OLIVEIRA",
        450,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JULIA DE SOUZA FIRMEZA",
        383.33,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "EDUARDA ANDRADE DO NASCIMENTO",
        472.49,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCO GILSON CASTRO DE ALMEIDA",
        450,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JAIR COSTA LIMA",
        600,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "VANDERSON BARROS DE SOUZA",
        400.57,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARLI MARIA DA SILVA SANTOS",
        450,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ONADINA GOMES OLIVEIRA",
        450,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "LUCIVANIA DE OLIVEIRA DO NASCIMENTO",
        450,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JULIANA PEREIRA DOS SANTOS",
        300,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOSE ANTONIO BARBOSA DE MOURA",
        261.24,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FLAVIO ROBERTO NASCIMENTO PEREIRA",
        489.04,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ALAN NIXON ARAGAO RIBEIRO",
        450,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "TALES FERREIRA DE LIMA",
        300,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "CLERTON CUNHA GOMES",
        600,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "SHIRLIANE DA SILVA BEZERRA",
        300,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCO GESSIVALDO PINHEIRO",
        463.79,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCO GESSIVALDO PINHEIRO",
        463.79,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ALEXANDRE MARTINS DA SILVA",
        398.82,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "SIMONE FERNANDES DE SOUZA",
        383.33,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ORION ARAUJO PEREIRA",
        333.35,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ANTONIO DE PADUA VAZ DE LIMA",
        396.93,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "WILLIAM BESERRA GOMES",
        467.85,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ELENILTON SANTOS DO NASCIMENTO",
        398.75,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MANOEL CARVALHO DA COSTA",
        675,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JULIETTE MONICA DA SILVA LEAO",
        450,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "LINDOMAR DE OLIVEIRA",
        100,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "LIDIANE ALMEIDA SILVA",
        465.53,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ELINILDA MACEDO DA SILVA",
        396.57,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "WASHINGTON TORQUATO DE LIMA JUNIOR",
        400.82,
        "PAGO"
      ],
      [
        "01/05/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "GILVANEIDE MESSIAS BARBOSA",
        100,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOAQUIM DA SILVA REIS",
        383.35,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "UALAS NEVES SILVA",
        463.8,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ANTONIO DIONISIO GADELHA DA SILVA",
        463.8,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "LILIAN LIMA DIAS",
        464.37,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "DEUSIMAR RODRIGUES NASCIMENTO",
        395.63,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "CARLOS ANDRE NUNES DA SILVA",
        466.4,
        "PAGO"
      ],
      [
        "29/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "VERONICA PEREIRA RAQUEL DA SILVA TELES",
        383.33,
        "PAGO"
      ],
      [
        "29/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "SILVANIA PEREIRA DE SOUSA",
        675,
        "PAGO"
      ],
      [
        "29/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ALLYNE CAROLINA SAMPAIO SILVA",
        395.32,
        "PAGO"
      ],
      [
        "29/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "BRUNO QUENA GOMES DINIZ",
        675,
        "PAGO"
      ],
      [
        "29/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCO JOANDERSON GOMES FERREIRA",
        395.32,
        "PAGO"
      ],
      [
        "29/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FABIO DE SOUZA BARBOSA",
        450,
        "PAGO"
      ],
      [
        "28/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ANDERSON DA SILVA BARRETO",
        100,
        "PAGO"
      ],
      [
        "28/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCO ALVES DE SOUSA FILHO",
        500,
        "PAGO"
      ],
      [
        "27/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "EDNA COSTA DE JESUS ALVES",
        450,
        "PAGO"
      ],
      [
        "27/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ELIZANGELA ALVES DA COSTA",
        383.35,
        "PAGO"
      ],
      [
        "27/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "DANIELLY MAUL DA CUNHA MOURA",
        464.37,
        "PAGO"
      ],
      [
        "27/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOSE FRANCISCO PEREIRA",
        395.63,
        "PAGO"
      ],
      [
        "27/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "WELLEN MENDES MOREIRA LIMA",
        474.7,
        "PAGO"
      ],
      [
        "24/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ANDREZA  FERREIRA MARTINS",
        100,
        "PAGO"
      ],
      [
        "24/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "AUDACI EVARISTO DA COSTA",
        383.33,
        "PAGO"
      ],
      [
        "24/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ANDRE LUIZ MARQUES MARTINS",
        300,
        "PAGO"
      ],
      [
        "24/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ILA MARIA MACIEL NOGUEIRA",
        200,
        "PAGO"
      ],
      [
        "24/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "DAYANE ALVES DE ABREU",
        515.68,
        "PAGO"
      ],
      [
        "23/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JEFFERSON HUGO BANDEIRA DE FRANCA",
        100,
        "PAGO"
      ],
      [
        "23/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "IDELFONSO RODRIGUES CAMPOS",
        500,
        "PAGO"
      ],
      [
        "23/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MICHAEL DE JESUS DOS SANTOS SILVA",
        300,
        "PAGO"
      ],
      [
        "23/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOSE ARI SANTOS MACIEL",
        450,
        "PAGO"
      ],
      [
        "23/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "LUIZ GABRIEL DE SOUZA DE SOUZA",
        375,
        "PAGO"
      ],
      [
        "23/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "KLEBER DE ALMEIDA",
        466.4,
        "PAGO"
      ],
      [
        "23/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOACIR ALVES DOS SANTOS",
        398.32,
        "PAGO"
      ],
      [
        "22/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "CARLOS DE SOUSA MARTINS",
        100,
        "PAGO"
      ],
      [
        "22/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ANTONIO JOSIVAN ALVES RODRIGUES",
        100,
        "PAGO"
      ],
      [
        "22/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "SIMONE NOBRE GASPAR",
        2700,
        "PAGO"
      ],
      [
        "22/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "DEUSIMAR RODRIGUES NASCIMENTO",
        400.8,
        "PAGO"
      ],
      [
        "20/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "CLAUDIO JOSE INACIO JUNIOR",
        395.11,
        "PAGO"
      ],
      [
        "20/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "CRISTIANO REIS DA SILVA",
        396.41,
        "PAGO"
      ],
      [
        "17/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOSIANE FERNANDA DE SOUZA SILVA",
        450,
        "PAGO"
      ],
      [
        "17/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ELIS REGINA BERNARDO COSTA",
        366.65,
        "PAGO"
      ],
      [
        "17/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ELIETE ALVES RABELO DOS SANTOS",
        383.35,
        "PAGO"
      ],
      [
        "17/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCA HELENA DOS SANTOS MORAIS",
        100,
        "PAGO"
      ],
      [
        "16/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "EXODO GOMES BRASIL",
        200,
        "PAGO"
      ],
      [
        "16/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARLI MARIA DA SILVA SANTOS",
        300,
        "PAGO"
      ],
      [
        "16/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "IRANILDO DE LIMA OLIVEIRA",
        100,
        "PAGO"
      ],
      [
        "16/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "EDILSON DE OLIVEIRA PATOS",
        1000,
        "PAGO"
      ],
      [
        "16/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "GRIMARIO  BRITO DE SOUSA",
        350,
        "PAGO"
      ],
      [
        "15/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCYVANIA GOMES CHAGAS",
        300,
        "PAGO"
      ],
      [
        "15/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "GILSON CESAR BARBOSA",
        500,
        "PAGO"
      ],
      [
        "15/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ANTONIO MAGDO GUEDES MESQUITA",
        395.57,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ELENICE LOURENCO FELIPE",
        383.35,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCA HELENA EVANGELISTA MARTINS",
        383.33,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JULIA DE SOUZA FIRMEZA",
        383.33,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARIA HALINA ANDRE DOS SANTOS",
        383.35,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARCOS ANDERSON OLIVEIRA ARAUJO",
        383.33,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "CESAR NILDO DE BRITO OLIVEIRA",
        383.33,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JEFFERSON HUGO BANDEIRA DE FRANCA",
        100,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARIO AUGUSTO DA SILVA SANTOS",
        450,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "GRACENIRA GONCALVES DE OLIVEIRA",
        450,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ALAN NIXON ARAGAO RIBEIRO",
        450,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOSE RIBAMAR PEREIRA DE OLIVEIRA",
        697.01,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "WASHINGTON TORQUATO DE LIMA JUNIOR",
        402.57,
        "PAGO"
      ],
      [
        "13/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "WILLYSON FERREIRA MATOS",
        450,
        "PAGO"
      ],
      [
        "10/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "DELYNE DO VALE MARTINS BARROSO",
        383.35,
        "PAGO"
      ],
      [
        "10/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "LUCAS DE PAIVA MONTEIRO",
        450,
        "PAGO"
      ],
      [
        "10/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "RITA MARIA DA COSTA PINTO",
        300,
        "PAGO"
      ],
      [
        "09/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCO REGINALDO QUINTINO",
        383.35,
        "PAGO"
      ],
      [
        "09/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "LUCIVANIA DE OLIVEIRA DO NASCIMENTO",
        300,
        "PAGO"
      ],
      [
        "09/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "EDNIVALDO MESQUITA PEREIRA",
        300,
        "PAGO"
      ],
      [
        "09/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOSE AUGUSTO SOARES SERRAO",
        300,
        "PAGO"
      ],
      [
        "09/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCO JOANDERSON GOMES FERREIRA",
        398.07,
        "PAGO"
      ],
      [
        "09/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "SILVANIA PEREIRA DE SOUSA",
        700.97,
        "PAGO"
      ],
      [
        "09/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCO REGINALDO QUINTINO",
        399.5,
        "PAGO"
      ],
      [
        "09/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOSE ANTONIO BARBOSA DE MOURA",
        261.24,
        "PAGO"
      ],
      [
        "08/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARIA JOCELINA FREIRE DE OLIVEIRA",
        383.35,
        "PAGO"
      ],
      [
        "08/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCO GESSIVALDO PINHEIRO",
        450,
        "PAGO"
      ],
      [
        "08/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOAQUIM DA SILVA REIS",
        383.33,
        "PAGO"
      ],
      [
        "08/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JULIETTE MONICA DA SILVA LEAO",
        450,
        "PAGO"
      ],
      [
        "08/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ORION ARAUJO PEREIRA",
        333.33,
        "PAGO"
      ],
      [
        "08/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCO GESSIVALDO PINHEIRO",
        450,
        "PAGO"
      ],
      [
        "08/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "EXODO GOMES BRASIL",
        207.56,
        "PAGO"
      ],
      [
        "08/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCO DE ASSIS DA SILVA",
        405.22,
        "PAGO"
      ],
      [
        "07/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "CARLOS ANDRE NUNES DA SILVA",
        467.27,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ONADINA GOMES OLIVEIRA",
        300,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MANOEL CARVALHO DA COSTA",
        675,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "LINDOMAR DE OLIVEIRA",
        100,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ANTONIO DE PADUA VAZ DE LIMA",
        396.64,
        "PAGO"
      ],
      [
        "02/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCO GILSON CASTRO DE ALMEIDA",
        300,
        "PAGO"
      ],
      [
        "01/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "SIMONE FERNANDES DE SOUZA",
        383.33,
        "PAGO"
      ],
      [
        "01/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FERNANDO WILLIAM RIBEIRO ROCHA",
        300,
        "PAGO"
      ],
      [
        "01/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCA MAIARA LIMA MOREIRA",
        300,
        "PAGO"
      ],
      [
        "01/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOAO VICTOR SOUZA VILHENA",
        396.15,
        "PAGO"
      ],
      [
        "01/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARCUS THADEU FERNANDES ARRAES",
        516.65,
        "PAGO"
      ],
      [
        "01/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ELINILDA MACEDO DA SILVA",
        396.07,
        "PAGO"
      ],
      [
        "01/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ALEXANDRE MARTINS DA SILVA",
        397.32,
        "PAGO"
      ],
      [
        "01/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCO EVANILDO COSTA DOS SANTOS",
        400.02,
        "PAGO"
      ],
      [
        "01/04/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOACIR ALVES DOS SANTOS",
        401.07,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "UALAS NEVES SILVA",
        300,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "EDVALDO DO CARMO ALVES",
        500,
        "PAGO"
      ],
      [
        "30/03/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "RENAN DAS CHAGAS SILVESTRE",
        300,
        "PAGO"
      ],
      [
        "30/03/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOSIANE FERNANDA DE SOUZA SILVA",
        300,
        "PAGO"
      ],
      [
        "30/03/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "VERONICA PEREIRA RAQUEL DA SILVA TELES",
        383.33,
        "PAGO"
      ],
      [
        "30/03/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "DIOGO HENRIQUE FARNESE",
        515.34,
        "PAGO"
      ],
      [
        "30/03/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "DORISBERTO DE VASCONCELOS ARAUJO",
        383.35,
        "PAGO"
      ],
      [
        "30/03/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCO GENECY DE SOUSA SANTOS",
        398.98,
        "PAGO"
      ],
      [
        "27/03/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FABIO DE SOUZA BARBOSA",
        450,
        "PAGO"
      ],
      [
        "27/03/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "LUCIANA SILVA MEDEIROS",
        466.67,
        "PAGO"
      ],
      [
        "27/03/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "LIDIANE ALMEIDA SILVA",
        450,
        "PAGO"
      ],
      [
        "26/03/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "SERGIO RUFINO DE FREITAS",
        366.65,
        "PAGO"
      ],
      [
        "26/03/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARCIO JOSE ARAUJO POLICARPO",
        383.35,
        "PAGO"
      ],
      [
        "26/03/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "CARLOS ALBERTO RODRIGUES PEREIRA",
        383.33,
        "PAGO"
      ],
      [
        "26/03/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ELIZANGELA ALVES DA COSTA",
        383.33,
        "PAGO"
      ],
      [
        "26/03/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOSE FRANCISCO PEREIRA",
        395.86,
        "PAGO"
      ],
      [
        "26/03/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "GABRIEL DA GUIA SENA",
        401.57,
        "PAGO"
      ],
      [
        "25/03/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "AUDACI EVARISTO DA COSTA",
        383.33,
        "PAGO"
      ],
      [
        "25/03/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ALLYNE CAROLINA SAMPAIO SILVA",
        383.33,
        "PAGO"
      ],
      [
        "25/03/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "NAYANE DE SOUSA VIEIRA",
        386,
        "PAGO"
      ]
    ],
    "EXTRATO_DESPESAS": [
      [
        "09/06/2026",
        "Boleto Amigo",
        "Sem categoria",
        "-",
        -18.13,
        "PAGO"
      ],
      [
        "08/06/2026",
        "Boleto Amigo",
        "Sem categoria",
        "-",
        -7.77,
        "PAGO"
      ],
      [
        "05/06/2026",
        "Boleto Amigo",
        "Sem categoria",
        "-",
        -7.77,
        "PAGO"
      ],
      [
        "03/06/2026",
        "Boleto Amigo",
        "Sem categoria",
        "-",
        -12.95,
        "PAGO"
      ],
      [
        "03/06/2026",
        "Boleto Amigo",
        "DESPESA DE AQUISIÇÃO DE EQUIP OU MANUTENÇÃO",
        "HUGO LEONARDO MOURA",
        -599,
        "PAGO"
      ],
      [
        "03/06/2026",
        "Boleto Amigo",
        "EMPRESA PRESTADORA DE SERVIÇOS",
        "HUGO LEONARDO MOURA",
        -64,
        "PAGO"
      ],
      [
        "02/06/2026",
        "Boleto Amigo",
        "Sem categoria",
        "-",
        -2.59,
        "PAGO"
      ],
      [
        "02/06/2026",
        "Boleto Amigo",
        "ANÚNCIOS DE RÁDIO",
        "EMMANUEL WESLEY RAMOS DA SOUSA",
        -500,
        "PAGO"
      ],
      [
        "02/06/2026",
        "Boleto Amigo",
        "LIMPEZA E HIGIENIZAÇÃO ESCRITÓRIO",
        "MARIA LUIZA LIMEIRA P COELHO",
        -100,
        "PAGO"
      ],
      [
        "01/06/2026",
        "Boleto Amigo",
        "Sem categoria",
        "-",
        -2.59,
        "PAGO"
      ],
      [
        "29/05/2026",
        "Boleto Amigo",
        "MATERIAL DE CONSUMO",
        "HUGO LEONARDO MOURA",
        -12.99,
        "PAGO"
      ],
      [
        "29/05/2026",
        "Boleto Amigo",
        "OUTROS IMPOSTOS",
        "MINISTERIO DA FAZENDA (IRRF)",
        -0.01,
        "PAGO"
      ],
      [
        "29/05/2026",
        "Boleto Amigo",
        "MATERIAL DE CONSUMO",
        "COMERCIAL ALVORADA PROD. LIMP DESC LTDA",
        -132.2,
        "PAGO"
      ],
      [
        "29/05/2026",
        "Boleto Amigo",
        "Sem categoria",
        "-",
        -5.18,
        "PAGO"
      ],
      [
        "29/05/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -5.18,
        "PAGO"
      ],
      [
        "28/05/2026",
        "Boleto Amigo",
        "Sem categoria",
        "-",
        -10.36,
        "PAGO"
      ],
      [
        "28/05/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -10.36,
        "PAGO"
      ],
      [
        "27/05/2026",
        "Boleto Amigo",
        "Sem categoria",
        "-",
        -31.08,
        "PAGO"
      ],
      [
        "27/05/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -31.08,
        "PAGO"
      ],
      [
        "26/05/2026",
        "Boleto Amigo",
        "Sem categoria",
        "-",
        -7.77,
        "PAGO"
      ],
      [
        "26/05/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SICOOB",
        -7.77,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Boleto Amigo",
        "PAGAMENTO DE VALE TRANSPORTE",
        "SEMOB SECRETARIA DE ESTADO DE TRANSPORTE E MODILIDADE DO DF",
        -253,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Boleto Amigo",
        "Sem categoria",
        "-",
        -2.59,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Boleto Amigo",
        "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL",
        -1420,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Boleto Amigo",
        "EMPRESA PRESTADORA DE SERVIÇOS",
        "FRANCISCO AROUDO DOS SANTOS BATISTA",
        -15,
        "PAGO"
      ],
      [
        "25/05/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -2.59,
        "PAGO"
      ],
      [
        "22/05/2026",
        "Boleto Amigo",
        "Sem categoria",
        "-",
        -5.18,
        "PAGO"
      ],
      [
        "22/05/2026",
        "Boleto Amigo",
        "MATERIAL DE CONSUMO",
        "COMERCIAL ALVORADA PROD. LIMP DESC LTDA",
        -132.21,
        "PAGO"
      ],
      [
        "22/05/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -5.18,
        "PAGO"
      ],
      [
        "20/05/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "ALGAR TELECOM S/A",
        -482.56,
        "PAGO"
      ],
      [
        "20/05/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SICOOB",
        -50,
        "PAGO"
      ],
      [
        "19/05/2026",
        "Boleto Amigo",
        "Sem categoria",
        "-",
        -10.36,
        "PAGO"
      ],
      [
        "19/05/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -10.36,
        "PAGO"
      ],
      [
        "18/05/2026",
        "Boleto Amigo",
        "Sem categoria",
        "-",
        -2.59,
        "PAGO"
      ],
      [
        "18/05/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -2.59,
        "PAGO"
      ],
      [
        "15/05/2026",
        "Boleto Amigo",
        "SIMPLES",
        "SIMPLES - RECEITA FEDERAL",
        -285.01,
        "PAGO"
      ],
      [
        "15/05/2026",
        "Boleto Amigo",
        "Sem categoria",
        "-",
        -5.18,
        "PAGO"
      ],
      [
        "15/05/2026",
        "Boleto Amigo",
        "CONFRATENIZAÇÃO",
        "HUGO LEONARDO MOURA",
        -70,
        "PAGO"
      ],
      [
        "15/05/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -5.18,
        "PAGO"
      ],
      [
        "14/05/2026",
        "Boleto Amigo",
        "INSS",
        "MINISTERIO DA PREVIDENCIA (INSS)",
        -824.33,
        "PAGO"
      ],
      [
        "14/05/2026",
        "Boleto Amigo",
        "FGTS",
        "CAIXA ECONOMICA FEDERAL",
        -690.31,
        "PAGO"
      ],
      [
        "14/05/2026",
        "Boleto Amigo",
        "Sem categoria",
        "-",
        -2.59,
        "PAGO"
      ],
      [
        "14/05/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -2.59,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Boleto Amigo",
        "Sem categoria",
        "-",
        -31.08,
        "PAGO"
      ],
      [
        "13/05/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -31.08,
        "PAGO"
      ],
      [
        "12/05/2026",
        "Boleto Amigo",
        "Sem categoria",
        "-",
        -5.18,
        "PAGO"
      ],
      [
        "12/05/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -5.18,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Boleto Amigo",
        "Sem categoria",
        "-",
        -12.95,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Boleto Amigo",
        "FUNDO DE CAIXA ECONOMY (CONTA SIMPLES)",
        "DOCK IP S.A FUNDO DE CAIXA E INVESTIMENTOS",
        -2029.27,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Boleto Amigo",
        "ALUGUEL DE IMPRESSORA",
        "QUALITY TOTAL LOCAÇÃO DE EQUIPAMENTOS DE INFORMATICA",
        -384.79,
        "PAGO"
      ],
      [
        "11/05/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -12.95,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Boleto Amigo",
        "OUTRAS DESPESAS",
        "BRXNQ- TELECOMUNICAÇÕES- LTDA",
        -180.8,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Boleto Amigo",
        "Sem categoria",
        "-",
        -10.36,
        "PAGO"
      ],
      [
        "08/05/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -10.36,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Boleto Amigo",
        "RESSARCIMENTO DE DESPESAS DE CUSTOS OPERACIONAIS (TAG/DF)",
        "ECONOMY ASSESSORIA - TAGUATINGA",
        -2998.93,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Boleto Amigo",
        "Sem categoria",
        "-",
        -12.95,
        "PAGO"
      ],
      [
        "07/05/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -12.95,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Boleto Amigo",
        "Sem categoria",
        "-",
        -15.54,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Boleto Amigo",
        "COMISSÃO INDICAÇÃO DE CLIENTES",
        "GABRIELA BARBOSA FERNANDES",
        -200,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Boleto Amigo",
        "COMISSÃO INDICAÇÃO DE CLIENTES",
        "ALINE VIEIRA GARCIA",
        -200,
        "PAGO"
      ],
      [
        "06/05/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -15.54,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Boleto Amigo",
        "Sem categoria",
        "-",
        -10.36,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Boleto Amigo",
        "CONDOMÍNIO",
        "CONDOMINIO DO EDIFICIO SUPER CENTER VENANCIO 2000",
        -1188.25,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Boleto Amigo",
        "LIMPEZA E HIGIENIZAÇÃO ESCRITÓRIO",
        "ISMAILDE E SOUZA",
        -600,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -470.98,
        "PAGO"
      ],
      [
        "05/05/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -10.36,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Boleto Amigo",
        "ANÚNCIOS DE TELEVISÃO",
        "EMMANUEL WESLEY RAMOS DA SOUSA",
        -500,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Boleto Amigo",
        "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "MARIA EDUARDA ANACLETO",
        -3201.08,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Boleto Amigo",
        "Sem categoria",
        "-",
        -5.18,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Boleto Amigo",
        "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "HUGO LEONARDO MOURA",
        -3294.8,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Boleto Amigo",
        "META (FACEBOOK E INSTAGRAM)",
        "FACEBOOK CNPJ: 13.347.016/0001-17",
        -6000,
        "PAGO"
      ],
      [
        "04/05/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -5.18,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "DOCK INSTITUIÇÃO DE PAGAMENTO S.A",
        -49,
        "PAGO"
      ],
      [
        "30/04/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -5.18,
        "PAGO"
      ],
      [
        "29/04/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -10.36,
        "PAGO"
      ],
      [
        "29/04/2026",
        "Boleto Amigo",
        "PAGAMENTO DE FÉRIAS",
        "MARIA EDUARDA ANACLETO",
        -5430.69,
        "PAGO"
      ],
      [
        "29/04/2026",
        "Boleto Amigo",
        "COMISSÃO INDICAÇÃO DE CLIENTES",
        "FRANCISCO NADSON MENDES PEREIRA",
        -200,
        "PAGO"
      ],
      [
        "28/04/2026",
        "Boleto Amigo",
        "EMPRESA PRESTADORA DE SERVIÇOS",
        "LASERSING SINALIZAÇÃO E PROJETOS",
        -1792.79,
        "PAGO"
      ],
      [
        "28/04/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -2.59,
        "PAGO"
      ],
      [
        "27/04/2026",
        "Boleto Amigo",
        "PAGAMENTO DE VALE TRANSPORTE",
        "SEMOB SECRETARIA DE ESTADO DE TRANSPORTE E MODILIDADE DO DF",
        -264,
        "PAGO"
      ],
      [
        "27/04/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -12.95,
        "PAGO"
      ],
      [
        "27/04/2026",
        "Boleto Amigo",
        "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL",
        -965,
        "PAGO"
      ],
      [
        "24/04/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -7.77,
        "PAGO"
      ],
      [
        "23/04/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -12.95,
        "PAGO"
      ],
      [
        "22/04/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -5.18,
        "PAGO"
      ],
      [
        "22/04/2026",
        "Boleto Amigo",
        "DESPESA DE AQUISIÇÃO DE EQUIP OU MANUTENÇÃO",
        "MERCADO PAGO",
        -209.9,
        "PAGO"
      ],
      [
        "22/04/2026",
        "Boleto Amigo",
        "MATERIAL DE CONSUMO",
        "COMERCIAL ALVORADA PROD. LIMP DESC LTDA",
        -100.71,
        "PAGO"
      ],
      [
        "20/04/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -5.18,
        "PAGO"
      ],
      [
        "20/04/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "ALGAR TELECOM S/A",
        -26.66,
        "PAGO"
      ],
      [
        "20/04/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "ALGAR TELECOM S/A",
        -482.56,
        "PAGO"
      ],
      [
        "20/04/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SICOOB",
        -50,
        "PAGO"
      ],
      [
        "17/04/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -10.36,
        "PAGO"
      ],
      [
        "16/04/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -5.18,
        "PAGO"
      ],
      [
        "15/04/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -2.59,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Boleto Amigo",
        "MATERIAL DE CONSUMO",
        "COMERCIAL ALVORADA PROD. LIMP DESC LTDA",
        -100.72,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Boleto Amigo",
        "OUTRAS DESPESAS",
        "MARIA EDUARDA ANACLETO",
        -70,
        "PAGO"
      ],
      [
        "14/04/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -31.08,
        "PAGO"
      ],
      [
        "13/04/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -2.59,
        "PAGO"
      ],
      [
        "13/04/2026",
        "Boleto Amigo",
        "OUTRAS DESPESAS",
        "HUGO LEONARDO MOURA",
        -20,
        "PAGO"
      ],
      [
        "10/04/2026",
        "Boleto Amigo",
        "EMPRESA PRESTADORA DE SERVIÇOS",
        "GODADDY",
        -287.11,
        "PAGO"
      ],
      [
        "10/04/2026",
        "Boleto Amigo",
        "ENERGIA",
        "NEOENERGIA",
        -3.46,
        "PAGO"
      ],
      [
        "10/04/2026",
        "Boleto Amigo",
        "ANÚNCIOS DE TELEVISÃO",
        "EMMANUEL WESLEY RAMOS DA SOUSA",
        -500,
        "PAGO"
      ],
      [
        "10/04/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -5.18,
        "PAGO"
      ],
      [
        "10/04/2026",
        "Boleto Amigo",
        "META (FACEBOOK E INSTAGRAM)",
        "FACEBOOK CNPJ: 13.347.016/0001-17",
        -5000,
        "PAGO"
      ],
      [
        "10/04/2026",
        "Boleto Amigo",
        "OUTRAS DESPESAS",
        "BRXNQ- TELECOMUNICAÇÕES- LTDA",
        -180.8,
        "PAGO"
      ],
      [
        "10/04/2026",
        "Boleto Amigo",
        "ENERGIA",
        "NEOENERGIA",
        -3.6,
        "PAGO"
      ],
      [
        "10/04/2026",
        "Boleto Amigo",
        "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "HUGO LEONARDO MOURA",
        -1500,
        "PAGO"
      ],
      [
        "10/04/2026",
        "Boleto Amigo",
        "ENERGIA",
        "NEOENERGIA",
        -3.6,
        "PAGO"
      ],
      [
        "10/04/2026",
        "Boleto Amigo",
        "ENERGIA",
        "NEOENERGIA",
        -3.46,
        "PAGO"
      ],
      [
        "10/04/2026",
        "Boleto Amigo",
        "ENERGIA",
        "NEOENERGIA",
        -3.63,
        "PAGO"
      ],
      [
        "10/04/2026",
        "Boleto Amigo",
        "ENERGIA",
        "NEOENERGIA",
        -7.36,
        "PAGO"
      ],
      [
        "10/04/2026",
        "Boleto Amigo",
        "ENERGIA",
        "NEOENERGIA",
        -3.46,
        "PAGO"
      ],
      [
        "09/04/2026",
        "Boleto Amigo",
        "SIMPLES",
        "SIMPLES - RECEITA FEDERAL",
        -540,
        "PAGO"
      ],
      [
        "09/04/2026",
        "Boleto Amigo",
        "MATERIAL DE ESCRITÓRIO",
        "HUGO LEONARDO MOURA",
        -269,
        "PAGO"
      ],
      [
        "09/04/2026",
        "Boleto Amigo",
        "ALUGUEL DE IMPRESSORA",
        "QUALITY TOTAL LOCAÇÃO DE EQUIPAMENTOS DE INFORMATICA",
        -384.79,
        "PAGO"
      ],
      [
        "09/04/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -12.95,
        "PAGO"
      ],
      [
        "08/04/2026",
        "Boleto Amigo",
        "FGTS",
        "CAIXA ECONOMICA FEDERAL",
        -378.3,
        "PAGO"
      ],
      [
        "08/04/2026",
        "Boleto Amigo",
        "INSS",
        "MINISTERIO DA PREVIDENCIA (INSS)",
        -377.07,
        "PAGO"
      ],
      [
        "08/04/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -20.72,
        "PAGO"
      ],
      [
        "07/04/2026",
        "Boleto Amigo",
        "FUNDO DE CAIXA ECONOMY (CONTA SIMPLES)",
        "DOCK IP S.A FUNDO DE CAIXA E INVESTIMENTOS",
        -10955.52,
        "PAGO"
      ],
      [
        "07/04/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -2.59,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Boleto Amigo",
        "LIMPEZA E HIGIENIZAÇÃO ESCRITÓRIO",
        "ISMAILDE E SOUZA",
        -750,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -7.77,
        "PAGO"
      ],
      [
        "06/04/2026",
        "Boleto Amigo",
        "COMISSÃO INDICAÇÃO DE CLIENTES",
        "JOSE DAS NEVES PINHEIRO",
        -200,
        "PAGO"
      ],
      [
        "02/04/2026",
        "Boleto Amigo",
        "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "MARIA EDUARDA ANACLETO",
        -2507.01,
        "PAGO"
      ],
      [
        "02/04/2026",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "PAGO"
      ],
      [
        "02/04/2026",
        "Boleto Amigo",
        "RESSARCIMENTO DE DESPESAS DE CUSTOS OPERACIONAIS (TAG/DF)",
        "ECONOMY ASSESSORIA - TAGUATINGA",
        -4234.19,
        "PAGO"
      ],
      [
        "02/04/2026",
        "Boleto Amigo",
        "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "HUGO LEONARDO MOURA",
        -2147.95,
        "PAGO"
      ],
      [
        "02/04/2026",
        "Boleto Amigo",
        "EMPRESA PRESTADORA DE SERVIÇOS",
        "MARTE DECORA",
        -242.08,
        "PAGO"
      ],
      [
        "02/04/2026",
        "Boleto Amigo",
        "CONDOMÍNIO",
        "CONDOMINIO DO EDIFICIO SUPER CENTER VENANCIO 2000",
        -1138.2,
        "PAGO"
      ],
      [
        "02/04/2026",
        "Boleto Amigo",
        "CONFRATENIZAÇÃO",
        "ECONOMY ASSESSORIA - MATRIZ",
        -40,
        "PAGO"
      ],
      [
        "01/04/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -18.13,
        "PAGO"
      ],
      [
        "01/04/2026",
        "Boleto Amigo",
        "UNIFORMES",
        "D SOL CAMISETERIA",
        -550,
        "PAGO"
      ],
      [
        "01/04/2026",
        "Boleto Amigo",
        "RESCISÃO CONTRATUAL COM DEVOLUÇÃO DE VALORES",
        "SIMONE OLIVEIRA SILVA",
        -1250,
        "PAGO"
      ],
      [
        "01/04/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "DOCK INSTITUIÇÃO DE PAGAMENTO S.A",
        -49,
        "PAGO"
      ],
      [
        "31/03/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -2.59,
        "PAGO"
      ],
      [
        "30/03/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -10.36,
        "PAGO"
      ],
      [
        "27/03/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -7.77,
        "PAGO"
      ],
      [
        "27/03/2026",
        "Boleto Amigo",
        "CONFRATENIZAÇÃO",
        "ASSB COMERCIO VAREJISTA DE DOCES LTDA",
        -1749.4,
        "PAGO"
      ],
      [
        "26/03/2026",
        "Boleto Amigo",
        "DESPESA DE AQUISIÇÃO DE EQUIP OU MANUTENÇÃO",
        "AMAZON SERVIÇOS DE VAREJO BRASIL LTDA",
        -99.99,
        "PAGO"
      ],
      [
        "26/03/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -15.54,
        "PAGO"
      ],
      [
        "26/03/2026",
        "Boleto Amigo",
        "COMISSÃO INDICAÇÃO DE CLIENTES",
        "RICHARD RAFAEL RIBEIRO BRITO",
        -200,
        "PAGO"
      ],
      [
        "26/03/2026",
        "Boleto Amigo",
        "COMISSÃO INDICAÇÃO DE CLIENTES",
        "FRANCISCO BRAZ COSTA SERRÃO",
        -200,
        "PAGO"
      ],
      [
        "26/03/2026",
        "Boleto Amigo",
        "COMISSÃO INDICAÇÃO DE CLIENTES",
        "MARIA DO SOCORRO ALVES DA SILVA",
        -200,
        "PAGO"
      ],
      [
        "25/03/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -15.54,
        "PAGO"
      ],
      [
        "24/03/2026",
        "Boleto Amigo",
        "PAGAMENTO DE VALE TRANSPORTE",
        "SEMOB SECRETARIA DE ESTADO DE TRANSPORTE E MODILIDADE DO DF",
        -231,
        "PAGO"
      ],
      [
        "24/03/2026",
        "Boleto Amigo",
        "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL",
        -700,
        "PAGO"
      ],
      [
        "24/03/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -5.18,
        "PAGO"
      ],
      [
        "23/03/2026",
        "Boleto Amigo",
        "COMISSÃO INDICAÇÃO DE CLIENTES",
        "WANESSA DA SILVA CHAVES",
        -200,
        "PAGO"
      ],
      [
        "23/03/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -2.59,
        "PAGO"
      ],
      [
        "20/03/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -2.59,
        "PAGO"
      ],
      [
        "20/03/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SICOOB",
        -50,
        "PAGO"
      ],
      [
        "20/03/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "ALGAR TELECOM S/A",
        -469.35,
        "PAGO"
      ],
      [
        "20/03/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "ALGAR TELECOM S/A",
        -800,
        "PAGO"
      ],
      [
        "18/03/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -10.36,
        "PAGO"
      ],
      [
        "18/03/2026",
        "Boleto Amigo",
        "RESCISÃO CONTRATUAL COM DEVOLUÇÃO DE VALORES",
        "JORGE LUIZ FREITAS DA SILVA",
        -300,
        "PAGO"
      ],
      [
        "18/03/2026",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "PAGO"
      ],
      [
        "17/03/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -7.77,
        "PAGO"
      ],
      [
        "17/03/2026",
        "Boleto Amigo",
        "COMISSÃO INDICAÇÃO DE CLIENTES",
        "JOAO BATISTA RIBEIRO CARDOSO",
        -200,
        "PAGO"
      ],
      [
        "16/03/2026",
        "Boleto Amigo",
        "ANÚNCIOS DE TELEVISÃO",
        "RÁDIO E TELEVISÃO CV LTDA",
        -4000,
        "PAGO"
      ],
      [
        "16/03/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -5.18,
        "PAGO"
      ],
      [
        "16/03/2026",
        "Boleto Amigo",
        "INSS",
        "MINISTERIO DA PREVIDENCIA (INSS)",
        -265.97,
        "PAGO"
      ],
      [
        "16/03/2026",
        "Boleto Amigo",
        "FGTS",
        "CAIXA ECONOMICA FEDERAL",
        -251.58,
        "PAGO"
      ],
      [
        "16/03/2026",
        "Boleto Amigo",
        "RESCISÃO CONTRATUAL COM DEVOLUÇÃO DE VALORES",
        "KAIQUE PINHEIRO LEITE",
        -1273.69,
        "PAGO"
      ],
      [
        "16/03/2026",
        "Boleto Amigo",
        "SIMPLES",
        "SIMPLES - RECEITA FEDERAL",
        -150,
        "PAGO"
      ],
      [
        "13/03/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -5.18,
        "PAGO"
      ],
      [
        "12/03/2026",
        "Boleto Amigo",
        "OUTRAS DESPESAS",
        "DECOLAR.COM",
        -2249.26,
        "PAGO"
      ],
      [
        "12/03/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -25.9,
        "PAGO"
      ],
      [
        "12/03/2026",
        "Boleto Amigo",
        "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "HUGO LEONARDO MOURA",
        -420,
        "PAGO"
      ],
      [
        "12/03/2026",
        "Boleto Amigo",
        "PAGAMENTO DE VALE TRANSPORTE",
        "HUGO LEONARDO MOURA",
        -137.66,
        "PAGO"
      ],
      [
        "11/03/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -12.95,
        "PAGO"
      ],
      [
        "10/03/2026",
        "Boleto Amigo",
        "OUTRAS DESPESAS",
        "BRXNQ- TELECOMUNICAÇÕES- LTDA",
        -180.8,
        "PAGO"
      ],
      [
        "09/03/2026",
        "Boleto Amigo",
        "TAXA DE EXAME ADMISSIONAL/ DEMISSIONAL",
        "ENGEMEDICAL - ENGENHARIA CONSULTORIA LTDA",
        -25,
        "PAGO"
      ],
      [
        "09/03/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -12.95,
        "PAGO"
      ],
      [
        "09/03/2026",
        "Boleto Amigo",
        "ALUGUEL DE IMPRESSORA",
        "QUALITY TOTAL LOCAÇÃO DE EQUIPAMENTOS DE INFORMATICA",
        -384.79,
        "PAGO"
      ],
      [
        "09/03/2026",
        "Boleto Amigo",
        "FUNDO DE CAIXA ECONOMY (CONTA SIMPLES)",
        "DOCK IP S.A FUNDO DE CAIXA E INVESTIMENTOS",
        -9222.3,
        "PAGO"
      ],
      [
        "06/03/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -12.95,
        "PAGO"
      ],
      [
        "06/03/2026",
        "Boleto Amigo",
        "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "MARIA EDUARDA ANACLETO",
        -2724.57,
        "PAGO"
      ],
      [
        "06/03/2026",
        "Boleto Amigo",
        "RESCISÃO DE FUNCIONÁRIOS",
        "LANA THAYNI SILVA MENEZES",
        -1089.91,
        "PAGO"
      ],
      [
        "05/03/2026",
        "Boleto Amigo",
        "CONDOMÍNIO",
        "CONDOMINIO DO EDIFICIO SUPER CENTER VENANCIO 2000",
        -1333.54,
        "PAGO"
      ],
      [
        "05/03/2026",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "PAGO"
      ],
      [
        "05/03/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -2.59,
        "PAGO"
      ],
      [
        "04/03/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -10.36,
        "PAGO"
      ],
      [
        "04/03/2026",
        "Boleto Amigo",
        "LIMPEZA E HIGIENIZAÇÃO ESCRITÓRIO",
        "ISMAILDE E SOUZA",
        -600,
        "PAGO"
      ],
      [
        "04/03/2026",
        "Boleto Amigo",
        "EMPRESA PRESTADORA DE SERVIÇOS",
        "JANE JOSELI SANTOS DE MELO",
        -23.72,
        "PAGO"
      ],
      [
        "04/03/2026",
        "Boleto Amigo",
        "EMPRESA PRESTADORA DE SERVIÇOS",
        "ELENITA GADELHA DE SOUSA",
        -500,
        "PAGO"
      ],
      [
        "04/03/2026",
        "Boleto Amigo",
        "META (FACEBOOK E INSTAGRAM)",
        "FACEBOOK CNPJ: 13.347.016/0001-17",
        -3000,
        "PAGO"
      ],
      [
        "04/03/2026",
        "Boleto Amigo",
        "ANÚNCIOS DE TELEVISÃO",
        "EMMANUEL WESLEY RAMOS DA SOUSA",
        -500,
        "PAGO"
      ],
      [
        "04/03/2026",
        "Boleto Amigo",
        "COMISSÃO INDICAÇÃO DE CLIENTES",
        "CARLOS ALBERTO SOUSA VALDES",
        -200,
        "PAGO"
      ],
      [
        "03/03/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -12.95,
        "PAGO"
      ],
      [
        "03/03/2026",
        "Boleto Amigo",
        "RESSARCIMENTO DE DESPESAS DE CUSTOS OPERACIONAIS (TAG/DF)",
        "ECONOMY ASSESSORIA - TAGUATINGA",
        -1617.85,
        "PAGO"
      ],
      [
        "02/03/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -5.18,
        "PAGO"
      ],
      [
        "02/03/2026",
        "Boleto Amigo",
        "EMPRESA PRESTADORA DE SERVIÇOS",
        "PRINTI",
        -2328.86,
        "PAGO"
      ],
      [
        "02/03/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "DOCK INSTITUIÇÃO DE PAGAMENTO S.A",
        -49,
        "PAGO"
      ],
      [
        "27/02/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -28.49,
        "PAGO"
      ],
      [
        "27/02/2026",
        "Boleto Amigo",
        "UNIFORMES",
        "D SOL CAMISETERIA",
        -550,
        "PAGO"
      ],
      [
        "27/02/2026",
        "Boleto Amigo",
        "META (FACEBOOK E INSTAGRAM)",
        "DOCK INSTITUIÇÃO DE PAGAMENTO S.A",
        -53.9,
        "PAGO"
      ],
      [
        "26/02/2026",
        "Boleto Amigo",
        "TARIFAS BANCÁRIAS",
        "SISPAG",
        -12.95,
        "PAGO"
      ],
      [
        "26/02/2026",
        "Boleto Amigo",
        "PAGAMENTO DE VALE TRANSPORTE",
        "SEMOB SECRETARIA DE ESTADO DE TRANSPORTE E MODILIDADE DO DF",
        -253,
        "PAGO"
      ]
    ],
    "KPIS": {
      "TOTAL_RECEITA": 191249.09000000005,
      "TOTAL_DESPESA": 216342.85,
      "VALOR_LIQUIDO": -25093.75999999995,
      "MARGEM_LIQUIDA": -13.120982693303244,
      "VALOR_LIQ_SERIES": [
        -9709.729999999989,
        -11554.579999999994,
        -1720.5799999999654,
        -6491.129999999997,
        5397.059999999994,
        -1014.8000000000002,
        0,
        0,
        0,
        0,
        0,
        0
      ]
    },
    "RECEITA_DIA": [
      3590.6100000000006,
      7871.880000000001,
      3664.6899999999996,
      6993.1,
      3892.9500000000003,
      8646.2,
      5679.09,
      5412.080000000001,
      7555.97,
      2515.77,
      11648.66,
      10794.739999999998,
      7239.38,
      11176.24,
      4800.59,
      3414.64,
      3374.53,
      3466.71,
      3737.2599999999998,
      5833.29,
      2255.2000000000003,
      6102.639999999999,
      6257.17,
      4600.599999999999,
      9973.099999999999,
      8755.960000000001,
      14468.98,
      6842.849999999999,
      4567.66,
      5316.55,
      800
    ],
    "DESPESA_DIA": [
      1869.72,
      19038.020000000004,
      5196.65,
      21391.500000000004,
      29204.450000000004,
      8540.460000000001,
      16309.85,
      2012.97,
      11985.83,
      8033.440000000001,
      11072.27,
      3409.0899999999997,
      1702.8699999999997,
      1752.6999999999996,
      4980.91,
      6852.97,
      218.13,
      8323.310000000001,
      786.6999999999999,
      7235.92,
      10.36,
      466.13,
      228.48999999999998,
      11956.900000000001,
      2491.67,
      1012.56,
      18353.460000000003,
      2723.26,
      7063.54,
      2116.13,
      2.59
    ],
    "SALDOS_MES": [
      -9709.729999999989,
      -21264.309999999983,
      -22984.88999999995,
      -29476.019999999946,
      -24078.959999999952,
      -25093.75999999995,
      -25093.75999999995,
      -25093.75999999995,
      -25093.75999999995,
      -25093.75999999995,
      -25093.75999999995,
      -25093.75999999995
    ],
    "FLUXO_RECEITA": [
      {
        "cat": "VENDA DE PRODUTOS/ SERVIÇOS",
        "values": [
          43060.85000000001,
          34208.00000000001,
          40706.73000000003,
          39274.380000000005,
          33699.130000000005,
          300,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      }
    ],
    "FLUXO_DESPESA": [
      {
        "cat": "FUNDO DE CAIXA ECONOMY (CONTA SIMPLES)",
        "values": [
          -14162.64,
          -7737.84,
          -9222.3,
          -10955.52,
          -2029.27,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "ANÚNCIOS DE TELEVISÃO",
        "values": [
          -4000,
          -15500,
          -4500,
          -500,
          -500,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "values": [
          -2108.78,
          -2561.23,
          -2724.57,
          -6154.96,
          -6495.88,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "OUTRAS DESPESAS",
        "values": [
          -14572.509999999998,
          -180.8,
          -2430.0600000000004,
          -270.8,
          -180.8,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "RESSARCIMENTO DE DESPESAS DE CUSTOS OPERACIONAIS (TAG/DF)",
        "values": [
          -3404.47,
          -2887.31,
          -1617.85,
          -4234.19,
          -2998.93,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      }
    ],
    "COMP_DATA": [
      {
        "tipo": "Receita",
        "isHeader": true,
        "d1": 117975.58000000015,
        "d2": 73273.51000000004
      },
      {
        "tipo": "VENDA DE PRODUTOS/ SERVIÇOS",
        "parent": "Receita",
        "d1": 117975.58000000015,
        "d2": 73273.51000000004
      },
      {
        "tipo": "Despesa",
        "isHeader": true,
        "d1": -140960.4699999999,
        "d2": -75382.37999999995
      },
      {
        "tipo": "TARIFAS BANCÁRIAS",
        "parent": "Despesa",
        "d1": -758.65,
        "d2": -467.78
      },
      {
        "tipo": "CONFRATENIZAÇÃO",
        "parent": "Despesa",
        "d1": -1749.4,
        "d2": -110
      },
      {
        "tipo": "DESPESA DE AQUISIÇÃO DE EQUIP OU MANUTENÇÃO",
        "parent": "Despesa",
        "d1": -238.79,
        "d2": -808.9
      },
      {
        "tipo": "COMISSÃO INDICAÇÃO DE CLIENTES",
        "parent": "Despesa",
        "d1": -2000,
        "d2": -800
      },
      {
        "tipo": "PAGAMENTO DE VALE TRANSPORTE",
        "parent": "Despesa",
        "d1": -1050.6599999999999,
        "d2": -517
      },
      {
        "tipo": "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "parent": "Despesa",
        "d1": -3220,
        "d2": -2385
      },
      {
        "tipo": "SISTEMAS",
        "parent": "Despesa",
        "d1": -3931.7,
        "d2": -1089.78
      },
      {
        "tipo": "RESCISÃO CONTRATUAL COM DEVOLUÇÃO DE VALORES",
        "parent": "Despesa",
        "d1": -4118.76,
        "d2": -1250
      },
      {
        "tipo": "EMPRESTIMOS A PAGAR",
        "parent": "Despesa",
        "d1": -6000,
        "d2": 0
      },
      {
        "tipo": "ANÚNCIOS DE TELEVISÃO",
        "parent": "Despesa",
        "d1": -24000,
        "d2": -1000
      },
      {
        "tipo": "INSS",
        "parent": "Despesa",
        "d1": -694.29,
        "d2": -1201.4
      },
      {
        "tipo": "FGTS",
        "parent": "Despesa",
        "d1": -893.66,
        "d2": -1068.61
      },
      {
        "tipo": "SIMPLES",
        "parent": "Despesa",
        "d1": -675.01,
        "d2": -825.01
      },
      {
        "tipo": "OUTRAS DESPESAS",
        "parent": "Despesa",
        "d1": -17183.37,
        "d2": -451.6
      },
      {
        "tipo": "TAXA DE EXAME ADMISSIONAL/ DEMISSIONAL",
        "parent": "Despesa",
        "d1": -25,
        "d2": 0
      },
      {
        "tipo": "ALUGUEL DE IMPRESSORA",
        "parent": "Despesa",
        "d1": -1154.3700000000001,
        "d2": -769.58
      },
      {
        "tipo": "FUNDO DE CAIXA ECONOMY (CONTA SIMPLES)",
        "parent": "Despesa",
        "d1": -31122.78,
        "d2": -12984.79
      },
      {
        "tipo": "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "parent": "Despesa",
        "d1": -7394.58,
        "d2": -12650.84
      },
      {
        "tipo": "RESCISÃO DE FUNCIONÁRIOS",
        "parent": "Despesa",
        "d1": -1089.91,
        "d2": 0
      },
      {
        "tipo": "CONDOMÍNIO",
        "parent": "Despesa",
        "d1": -3780.66,
        "d2": -2326.45
      },
      {
        "tipo": "ALUGUEL",
        "parent": "Despesa",
        "d1": -6937.77,
        "d2": -5096.16
      },
      {
        "tipo": "LIMPEZA E HIGIENIZAÇÃO ESCRITÓRIO",
        "parent": "Despesa",
        "d1": -1950,
        "d2": -1450
      },
      {
        "tipo": "EMPRESA PRESTADORA DE SERVIÇOS",
        "parent": "Despesa",
        "d1": -7533.11,
        "d2": -2400.98
      },
      {
        "tipo": "META (FACEBOOK E INSTAGRAM)",
        "parent": "Despesa",
        "d1": -3157.8,
        "d2": -11000
      },
      {
        "tipo": "RESSARCIMENTO DE DESPESAS DE CUSTOS OPERACIONAIS (TAG/DF)",
        "parent": "Despesa",
        "d1": -7909.629999999999,
        "d2": -7233.119999999999
      },
      {
        "tipo": "UNIFORMES",
        "parent": "Despesa",
        "d1": -700,
        "d2": -550
      },
      {
        "tipo": "OUTROS IMPOSTOS",
        "parent": "Despesa",
        "d1": -665.87,
        "d2": -0.01
      },
      {
        "tipo": "MATERIAL DE CONSUMO",
        "parent": "Despesa",
        "d1": -212.87,
        "d2": -478.8299999999999
      },
      {
        "tipo": "DARF",
        "parent": "Despesa",
        "d1": -311.83,
        "d2": 0
      },
      {
        "tipo": "ANÚNCIOS DE RÁDIO",
        "parent": "Despesa",
        "d1": -500,
        "d2": -500
      },
      {
        "tipo": "Sem categoria",
        "parent": "Despesa",
        "d1": 0,
        "d2": -238.27999999999997
      },
      {
        "tipo": "PAGAMENTO DE FÉRIAS",
        "parent": "Despesa",
        "d1": 0,
        "d2": -5430.69
      },
      {
        "tipo": "ENERGIA",
        "parent": "Despesa",
        "d1": 0,
        "d2": -28.57
      },
      {
        "tipo": "MATERIAL DE ESCRITÓRIO",
        "parent": "Despesa",
        "d1": 0,
        "d2": -269
      }
    ]
  },
  "a_pagar_receber": {
    "MONTH_DATA": [
      {
        "m": "janeiro",
        "receita": 1150.0300000000002,
        "despesa": 0
      },
      {
        "m": "fevereiro",
        "receita": 883.35,
        "despesa": 0
      },
      {
        "m": "março",
        "receita": 1533.4,
        "despesa": 0
      },
      {
        "m": "abril",
        "receita": 3650,
        "despesa": 0
      },
      {
        "m": "maio",
        "receita": 14776.050000000001,
        "despesa": 2000.01
      },
      {
        "m": "junho",
        "receita": 36531.54999999999,
        "despesa": 19962.51
      },
      {
        "m": "julho",
        "receita": 33901.41,
        "despesa": 18752.28
      },
      {
        "m": "agosto",
        "receita": 26576.389999999996,
        "despesa": 18426.559999999998
      },
      {
        "m": "setembro",
        "receita": 22449.739999999998,
        "despesa": 18426.54
      },
      {
        "m": "outubro",
        "receita": 13524.67,
        "despesa": 18426.54
      },
      {
        "m": "novembro",
        "receita": 6407.020000000001,
        "despesa": 15186.960000000001
      },
      {
        "m": "dezembro",
        "receita": 970.01,
        "despesa": 15186.960000000001
      }
    ],
    "RECEITA_CATEGORIAS": [
      {
        "name": "VENDA DE PRODUTOS/ SERVIÇOS",
        "value": 162353.6200000001,
        "clientes": 105
      }
    ],
    "DESPESA_CATEGORIAS": [
      {
        "name": "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "value": 35428.61,
        "fornecedores": 2
      },
      {
        "name": "META (FACEBOOK E INSTAGRAM)",
        "value": 21000,
        "fornecedores": 1
      },
      {
        "name": "ALUGUEL",
        "value": 18210.48,
        "fornecedores": 1
      },
      {
        "name": "EMPRESTIMOS A PAGAR",
        "value": 16000,
        "fornecedores": 1
      },
      {
        "name": "SISTEMAS",
        "value": 9266.330000000002,
        "fornecedores": 2
      },
      {
        "name": "CONDOMÍNIO",
        "value": 5728.280000000001,
        "fornecedores": 1
      },
      {
        "name": "INSS",
        "value": 5394.15,
        "fornecedores": 1
      },
      {
        "name": "LIMPEZA E HIGIENIZAÇÃO ESCRITÓRIO",
        "value": 4550,
        "fornecedores": 1
      },
      {
        "name": "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "value": 4410,
        "fornecedores": 1
      },
      {
        "name": "FGTS",
        "value": 2260.2000000000003,
        "fornecedores": 1
      },
      {
        "name": "PAGAMENTO DE VALE TRANSPORTE",
        "value": 1463,
        "fornecedores": 1
      },
      {
        "name": "OUTRAS DESPESAS",
        "value": 904,
        "fornecedores": 1
      }
    ],
    "RECEITA_CLIENTES": [
      {
        "name": "FRANCYVANIA GOMES CHAGAS",
        "value": 5305.95
      },
      {
        "name": "CASSIO RODRIGO SANTOS SILVA",
        "value": 3720.0600000000004
      },
      {
        "name": "FRANCISCO HERNANDO FARIAS",
        "value": 3276.3499999999995
      },
      {
        "name": "JAIR COSTA LIMA",
        "value": 3116.830000000001
      },
      {
        "name": "MARILZA ARAUJO OLIVEIRA",
        "value": 3022.66
      },
      {
        "name": "CLERTON CUNHA GOMES",
        "value": 2806.4700000000003
      },
      {
        "name": "ALEXANDRE PIRES BESSA",
        "value": 2700
      },
      {
        "name": "GABRIEL DA GUIA SENA",
        "value": 2700
      },
      {
        "name": "TALES FERREIRA DE LIMA",
        "value": 2700
      },
      {
        "name": "MARIA LEMOS DA SILVA COSTA",
        "value": 2700
      },
      {
        "name": "SHIRLIANE DA SILVA BEZERRA",
        "value": 2700
      },
      {
        "name": "JOSEILTON BERTO BIZERRA",
        "value": 2700
      }
    ],
    "DESPESA_FORNECEDORES": [
      {
        "name": "FACEBOOK CNPJ: 13.347.016/0001-17",
        "value": 21000
      },
      {
        "name": "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        "value": 18210.48
      },
      {
        "name": "MARIA EDUARDA ANACLETO",
        "value": 17928.61
      },
      {
        "name": "HUGO LEONARDO MOURA",
        "value": 17500
      },
      {
        "name": "ECONOMY - CONTA SIMPLES",
        "value": 16000
      },
      {
        "name": "ALGAR TELECOM S/A",
        "value": 8874.330000000002
      },
      {
        "name": "CONDOMINIO DO EDIFICIO SUPER CENTER VENANCIO 2000",
        "value": 5728.280000000001
      },
      {
        "name": "MINISTERIO DA PREVIDENCIA (INSS)",
        "value": 5394.15
      },
      {
        "name": "ISMAILDE E SOUZA",
        "value": 4550
      },
      {
        "name": "PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL",
        "value": 4410
      },
      {
        "name": "CAIXA ECONOMICA FEDERAL",
        "value": 2260.2000000000003
      },
      {
        "name": "SEMOB SECRETARIA DE ESTADO DE TRANSPORTE E MODILIDADE DO DF",
        "value": 1463
      }
    ],
    "EXTRATO": [
      [
        "11/03/2029",
        "Boleto Amigo",
        "OUTRAS DESPESAS",
        "DLOCAL BRASIL PAGAMENTOS LTDA",
        -79.08,
        "A_PAGAR"
      ],
      [
        "05/08/2028",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "18/07/2028",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/07/2028",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "18/06/2028",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/06/2028",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "18/05/2028",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/05/2028",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "18/04/2028",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/04/2028",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "18/03/2028",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "11/03/2028",
        "Boleto Amigo",
        "OUTRAS DESPESAS",
        "DLOCAL BRASIL PAGAMENTOS LTDA",
        -79.08,
        "A_PAGAR"
      ],
      [
        "05/03/2028",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "18/02/2028",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/02/2028",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "18/01/2028",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/01/2028",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "18/12/2027",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/12/2027",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "18/11/2027",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/11/2027",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "18/10/2027",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/10/2027",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "18/09/2027",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/09/2027",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "18/08/2027",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/08/2027",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "18/07/2027",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/07/2027",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "18/06/2027",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/06/2027",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "28/05/2027",
        "Boleto Amigo",
        "ENERGIA",
        "NEOENERGIA",
        -7.36,
        "A_PAGAR"
      ],
      [
        "18/05/2027",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/05/2027",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "28/04/2027",
        "Boleto Amigo",
        "ENERGIA",
        "NEOENERGIA",
        -7.36,
        "A_PAGAR"
      ],
      [
        "18/04/2027",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/04/2027",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "28/03/2027",
        "Boleto Amigo",
        "ENERGIA",
        "NEOENERGIA",
        -7.36,
        "A_PAGAR"
      ],
      [
        "18/03/2027",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "11/03/2027",
        "Boleto Amigo",
        "OUTRAS DESPESAS",
        "DLOCAL BRASIL PAGAMENTOS LTDA",
        -79.08,
        "A_PAGAR"
      ],
      [
        "06/03/2027",
        "Boleto Amigo",
        "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "HUGO LEONARDO MOURA",
        -2500,
        "A_PAGAR"
      ],
      [
        "05/03/2027",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "28/02/2027",
        "Boleto Amigo",
        "ENERGIA",
        "NEOENERGIA",
        -7.36,
        "A_PAGAR"
      ],
      [
        "18/02/2027",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "06/02/2027",
        "Boleto Amigo",
        "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "HUGO LEONARDO MOURA",
        -2500,
        "A_PAGAR"
      ],
      [
        "05/02/2027",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "04/02/2027",
        "Boleto Amigo",
        "META (FACEBOOK E INSTAGRAM)",
        "FACEBOOK CNPJ: 13.347.016/0001-17",
        -3000,
        "A_PAGAR"
      ],
      [
        "28/01/2027",
        "Boleto Amigo",
        "SISTEMAS",
        "DOCK INSTITUIÇÃO DE PAGAMENTO S.A",
        -49,
        "A_PAGAR"
      ],
      [
        "28/01/2027",
        "Boleto Amigo",
        "ENERGIA",
        "NEOENERGIA",
        -7.36,
        "A_PAGAR"
      ],
      [
        "18/01/2027",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "16/01/2027",
        "Boleto Amigo",
        "OUTROS IMPOSTOS",
        "MINISTERIO DA FAZENDA (IRRF)",
        -0.01,
        "A_PAGAR"
      ],
      [
        "16/01/2027",
        "Boleto Amigo",
        "SIMPLES",
        "SIMPLES - RECEITA FEDERAL",
        -0.01,
        "A_PAGAR"
      ],
      [
        "06/01/2027",
        "Boleto Amigo",
        "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "HUGO LEONARDO MOURA",
        -2500,
        "A_PAGAR"
      ],
      [
        "06/01/2027",
        "Boleto Amigo",
        "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "MARIA EDUARDA ANACLETO",
        -2561.23,
        "A_PAGAR"
      ],
      [
        "05/01/2027",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "04/01/2027",
        "Boleto Amigo",
        "META (FACEBOOK E INSTAGRAM)",
        "FACEBOOK CNPJ: 13.347.016/0001-17",
        -3000,
        "A_PAGAR"
      ],
      [
        "28/12/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "DOCK INSTITUIÇÃO DE PAGAMENTO S.A",
        -49,
        "A_PAGAR"
      ],
      [
        "28/12/2026",
        "Boleto Amigo",
        "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL",
        -630,
        "A_PAGAR"
      ],
      [
        "28/12/2026",
        "Boleto Amigo",
        "ENERGIA",
        "NEOENERGIA",
        -7.36,
        "A_PAGAR"
      ],
      [
        "27/12/2026",
        "Boleto Amigo",
        "PAGAMENTO DE VALE TRANSPORTE",
        "SEMOB SECRETARIA DE ESTADO DE TRANSPORTE E MODILIDADE DO DF",
        -209,
        "A_PAGAR"
      ],
      [
        "25/12/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "DALVA MARGARET ROCHA FERREIRA CIRQUEIRA",
        450,
        "A_PAGAR"
      ],
      [
        "20/12/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "CASSIO RODRIGO SANTOS SILVA",
        520.01,
        "A_PAGAR"
      ],
      [
        "20/12/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "ALGAR TELECOM S/A",
        -467.76,
        "A_PAGAR"
      ],
      [
        "20/12/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "ALGAR TELECOM S/A",
        -800,
        "A_PAGAR"
      ],
      [
        "18/12/2026",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "16/12/2026",
        "Boleto Amigo",
        "SIMPLES",
        "SIMPLES - RECEITA FEDERAL",
        -0.01,
        "A_PAGAR"
      ],
      [
        "16/12/2026",
        "Boleto Amigo",
        "OUTROS IMPOSTOS",
        "MINISTERIO DA FAZENDA (IRRF)",
        -0.01,
        "A_PAGAR"
      ],
      [
        "06/12/2026",
        "Boleto Amigo",
        "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "MARIA EDUARDA ANACLETO",
        -2561.23,
        "A_PAGAR"
      ],
      [
        "06/12/2026",
        "Boleto Amigo",
        "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "HUGO LEONARDO MOURA",
        -2500,
        "A_PAGAR"
      ],
      [
        "05/12/2026",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "04/12/2026",
        "Boleto Amigo",
        "META (FACEBOOK E INSTAGRAM)",
        "FACEBOOK CNPJ: 13.347.016/0001-17",
        -3000,
        "A_PAGAR"
      ],
      [
        "04/12/2026",
        "Boleto Amigo",
        "LIMPEZA E HIGIENIZAÇÃO ESCRITÓRIO",
        "ISMAILDE E SOUZA",
        -650,
        "A_PAGAR"
      ],
      [
        "28/11/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "DOCK INSTITUIÇÃO DE PAGAMENTO S.A",
        -49,
        "A_PAGAR"
      ],
      [
        "28/11/2026",
        "Boleto Amigo",
        "ENERGIA",
        "NEOENERGIA",
        -7.36,
        "A_PAGAR"
      ],
      [
        "28/11/2026",
        "Boleto Amigo",
        "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL",
        -630,
        "A_PAGAR"
      ],
      [
        "27/11/2026",
        "Boleto Amigo",
        "PAGAMENTO DE VALE TRANSPORTE",
        "SEMOB SECRETARIA DE ESTADO DE TRANSPORTE E MODILIDADE DO DF",
        -209,
        "A_PAGAR"
      ],
      [
        "25/11/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ALEXANDRE PIRES BESSA",
        450,
        "A_PAGAR"
      ],
      [
        "25/11/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCO HERNANDO FARIAS",
        546.05,
        "A_PAGAR"
      ],
      [
        "25/11/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "GABRIEL DA GUIA SENA",
        450,
        "A_PAGAR"
      ],
      [
        "25/11/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "TALES FERREIRA DE LIMA",
        450,
        "A_PAGAR"
      ],
      [
        "25/11/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "DALVA MARGARET ROCHA FERREIRA CIRQUEIRA",
        450,
        "A_PAGAR"
      ],
      [
        "20/11/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARIA LEMOS DA SILVA COSTA",
        450,
        "A_PAGAR"
      ],
      [
        "20/11/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JAIR COSTA LIMA",
        519.48,
        "A_PAGAR"
      ],
      [
        "20/11/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "CASSIO RODRIGO SANTOS SILVA",
        520.01,
        "A_PAGAR"
      ],
      [
        "20/11/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "ALGAR TELECOM S/A",
        -800,
        "A_PAGAR"
      ],
      [
        "20/11/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "ALGAR TELECOM S/A",
        -467.76,
        "A_PAGAR"
      ],
      [
        "18/11/2026",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "16/11/2026",
        "Boleto Amigo",
        "SIMPLES",
        "SIMPLES - RECEITA FEDERAL",
        -0.01,
        "A_PAGAR"
      ],
      [
        "16/11/2026",
        "Boleto Amigo",
        "OUTROS IMPOSTOS",
        "MINISTERIO DA FAZENDA (IRRF)",
        -0.01,
        "A_PAGAR"
      ],
      [
        "15/11/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "SHIRLIANE DA SILVA BEZERRA",
        450,
        "A_PAGAR"
      ],
      [
        "15/11/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOSEILTON BERTO BIZERRA",
        450,
        "A_PAGAR"
      ],
      [
        "10/11/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JULIANA PEREIRA DOS SANTOS",
        450,
        "A_PAGAR"
      ],
      [
        "10/11/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCA AURILENE DA SILVA CAVALCANTE",
        250,
        "A_PAGAR"
      ],
      [
        "10/11/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARILZA ARAUJO OLIVEIRA",
        503.76,
        "A_PAGAR"
      ],
      [
        "10/11/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "CLERTON CUNHA GOMES",
        467.72,
        "A_PAGAR"
      ],
      [
        "06/11/2026",
        "Boleto Amigo",
        "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "HUGO LEONARDO MOURA",
        -2500,
        "A_PAGAR"
      ],
      [
        "06/11/2026",
        "Boleto Amigo",
        "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "MARIA EDUARDA ANACLETO",
        -2561.23,
        "A_PAGAR"
      ],
      [
        "05/11/2026",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "04/11/2026",
        "Boleto Amigo",
        "LIMPEZA E HIGIENIZAÇÃO ESCRITÓRIO",
        "ISMAILDE E SOUZA",
        -650,
        "A_PAGAR"
      ],
      [
        "04/11/2026",
        "Boleto Amigo",
        "META (FACEBOOK E INSTAGRAM)",
        "FACEBOOK CNPJ: 13.347.016/0001-17",
        -3000,
        "A_PAGAR"
      ],
      [
        "28/10/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "DOCK INSTITUIÇÃO DE PAGAMENTO S.A",
        -49,
        "A_PAGAR"
      ],
      [
        "28/10/2026",
        "Boleto Amigo",
        "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL",
        -630,
        "A_PAGAR"
      ],
      [
        "28/10/2026",
        "Boleto Amigo",
        "ENERGIA",
        "NEOENERGIA",
        -7.36,
        "A_PAGAR"
      ],
      [
        "27/10/2026",
        "Boleto Amigo",
        "PAGAMENTO DE VALE TRANSPORTE",
        "SEMOB SECRETARIA DE ESTADO DE TRANSPORTE E MODILIDADE DO DF",
        -209,
        "A_PAGAR"
      ],
      [
        "25/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCO HERNANDO FARIAS",
        546.06,
        "A_PAGAR"
      ],
      [
        "25/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ANDRE LUIZ MARQUES MARTINS",
        450,
        "A_PAGAR"
      ],
      [
        "25/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCYVANIA GOMES CHAGAS",
        884.3,
        "A_PAGAR"
      ],
      [
        "25/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOSE AUGUSTO SOARES SERRAO",
        450,
        "A_PAGAR"
      ],
      [
        "25/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARLI MARIA DA SILVA SANTOS",
        450,
        "A_PAGAR"
      ],
      [
        "25/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ALEXANDRE PIRES BESSA",
        450,
        "A_PAGAR"
      ],
      [
        "25/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "IDELFONSO RODRIGUES CAMPOS",
        416.65,
        "A_PAGAR"
      ],
      [
        "25/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MICHAEL DE JESUS DOS SANTOS SILVA",
        450,
        "A_PAGAR"
      ],
      [
        "25/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "GILSON CESAR BARBOSA",
        416.65,
        "A_PAGAR"
      ],
      [
        "25/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "GABRIEL DA GUIA SENA",
        450,
        "A_PAGAR"
      ],
      [
        "25/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "TALES FERREIRA DE LIMA",
        450,
        "A_PAGAR"
      ],
      [
        "25/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "DALVA MARGARET ROCHA FERREIRA CIRQUEIRA",
        450,
        "A_PAGAR"
      ],
      [
        "24/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ILA MARIA MACIEL NOGUEIRA",
        466.65,
        "A_PAGAR"
      ],
      [
        "20/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JAIR COSTA LIMA",
        519.47,
        "A_PAGAR"
      ],
      [
        "20/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARIA LEMOS DA SILVA COSTA",
        450,
        "A_PAGAR"
      ],
      [
        "20/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "WAGNER DA SILVA XAVIER",
        100,
        "A_PAGAR"
      ],
      [
        "20/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "CASSIO RODRIGO SANTOS SILVA",
        520.01,
        "A_PAGAR"
      ],
      [
        "20/10/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "ALGAR TELECOM S/A",
        -467.76,
        "A_PAGAR"
      ],
      [
        "20/10/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "ALGAR TELECOM S/A",
        -800,
        "A_PAGAR"
      ],
      [
        "18/10/2026",
        "Boleto Amigo",
        "INSS",
        "MINISTERIO DA PREVIDENCIA (INSS)",
        -1078.83,
        "A_PAGAR"
      ],
      [
        "18/10/2026",
        "Boleto Amigo",
        "FGTS",
        "CAIXA ECONOMICA FEDERAL",
        -452.04,
        "A_PAGAR"
      ],
      [
        "18/10/2026",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "16/10/2026",
        "Boleto Amigo",
        "OUTROS IMPOSTOS",
        "MINISTERIO DA FAZENDA (IRRF)",
        -0.01,
        "A_PAGAR"
      ],
      [
        "16/10/2026",
        "Boleto Amigo",
        "SIMPLES",
        "SIMPLES - RECEITA FEDERAL",
        -0.01,
        "A_PAGAR"
      ],
      [
        "15/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOSEILTON BERTO BIZERRA",
        450,
        "A_PAGAR"
      ],
      [
        "15/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "SHIRLIANE DA SILVA BEZERRA",
        450,
        "A_PAGAR"
      ],
      [
        "15/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "EDNIVALDO MESQUITA PEREIRA",
        450,
        "A_PAGAR"
      ],
      [
        "15/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ONADINA GOMES OLIVEIRA",
        450,
        "A_PAGAR"
      ],
      [
        "10/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "RITA MARIA DA COSTA PINTO",
        450,
        "A_PAGAR"
      ],
      [
        "10/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "LUCIVANIA DE OLIVEIRA DO NASCIMENTO",
        450,
        "A_PAGAR"
      ],
      [
        "10/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "CLERTON CUNHA GOMES",
        467.75,
        "A_PAGAR"
      ],
      [
        "10/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "EDILSON DE OLIVEIRA PATOS",
        333.35,
        "A_PAGAR"
      ],
      [
        "10/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCA MAIARA LIMA MOREIRA",
        450,
        "A_PAGAR"
      ],
      [
        "10/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JULIANA PEREIRA DOS SANTOS",
        450,
        "A_PAGAR"
      ],
      [
        "10/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCA AURILENE DA SILVA CAVALCANTE",
        250,
        "A_PAGAR"
      ],
      [
        "10/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCO GILSON CASTRO DE ALMEIDA",
        450,
        "A_PAGAR"
      ],
      [
        "10/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARILZA ARAUJO OLIVEIRA",
        503.78,
        "A_PAGAR"
      ],
      [
        "10/10/2026",
        "Boleto Amigo",
        "OUTRAS DESPESAS",
        "BRXNQ- TELECOMUNICAÇÕES- LTDA",
        -180.8,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Boleto Amigo",
        "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "MARIA EDUARDA ANACLETO",
        -2561.23,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Boleto Amigo",
        "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "HUGO LEONARDO MOURA",
        -2500,
        "A_PAGAR"
      ],
      [
        "05/10/2026",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -470.98,
        "A_PAGAR"
      ],
      [
        "05/10/2026",
        "Boleto Amigo",
        "CONDOMÍNIO",
        "CONDOMINIO DO EDIFICIO SUPER CENTER VENANCIO 2000",
        -1123.44,
        "A_PAGAR"
      ],
      [
        "05/10/2026",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2246.08,
        "A_PAGAR"
      ],
      [
        "04/10/2026",
        "Boleto Amigo",
        "META (FACEBOOK E INSTAGRAM)",
        "FACEBOOK CNPJ: 13.347.016/0001-17",
        -3000,
        "A_PAGAR"
      ],
      [
        "04/10/2026",
        "Boleto Amigo",
        "LIMPEZA E HIGIENIZAÇÃO ESCRITÓRIO",
        "ISMAILDE E SOUZA",
        -650,
        "A_PAGAR"
      ],
      [
        "28/09/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "DOCK INSTITUIÇÃO DE PAGAMENTO S.A",
        -49,
        "A_PAGAR"
      ],
      [
        "28/09/2026",
        "Boleto Amigo",
        "ENERGIA",
        "NEOENERGIA",
        -7.36,
        "A_PAGAR"
      ],
      [
        "28/09/2026",
        "Boleto Amigo",
        "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL",
        -630,
        "A_PAGAR"
      ],
      [
        "27/09/2026",
        "Boleto Amigo",
        "PAGAMENTO DE VALE TRANSPORTE",
        "SEMOB SECRETARIA DE ESTADO DE TRANSPORTE E MODILIDADE DO DF",
        -209,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MICHAEL DE JESUS DOS SANTOS SILVA",
        450,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "LILIAN LIMA DIAS",
        450,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "IDELFONSO RODRIGUES CAMPOS",
        416.67,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "UALAS NEVES SILVA",
        450,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCO HERNANDO FARIAS",
        546.06,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCYVANIA GOMES CHAGAS",
        884.33,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "CIBERLANIA MARIA DE ANDRADE",
        100,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "GILSON CESAR BARBOSA",
        416.67,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ATHIRSON BRENDO SOUSA SILVA",
        450,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ALEXANDRE PIRES BESSA",
        450,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOSE AUGUSTO SOARES SERRAO",
        450,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ANDRE LUIZ MARQUES MARTINS",
        450,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "RAFAEL ALVES DA SILVA",
        450,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "GABRIEL DA GUIA SENA",
        450,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ANTONIO DIONISIO GADELHA DA SILVA",
        450,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "TALES FERREIRA DE LIMA",
        450,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARLI MARIA DA SILVA SANTOS",
        450,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "DALVA MARGARET ROCHA FERREIRA CIRQUEIRA",
        450,
        "A_PAGAR"
      ],
      [
        "24/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ILA MARIA MACIEL NOGUEIRA",
        466.67,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARIA LEMOS DA SILVA COSTA",
        450,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JUCIVALDO RODRIGUES DURANS",
        450,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "KAIO RAMOS DE SOUZA BORGES",
        450,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARIA DO SOCORRO SERAFIM",
        450,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "DANIELLY MAUL DA CUNHA MOURA",
        450,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "LUIZ GABRIEL DE SOUZA DE SOUZA",
        375,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JAIR COSTA LIMA",
        519.47,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "WAGNER DA SILVA XAVIER",
        100,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "CASSIO RODRIGO SANTOS SILVA",
        520.01,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "ALGAR TELECOM S/A",
        -800,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "ALGAR TELECOM S/A",
        -467.76,
        "A_PAGAR"
      ],
      [
        "18/09/2026",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "18/09/2026",
        "Boleto Amigo",
        "FGTS",
        "CAIXA ECONOMICA FEDERAL",
        -452.04,
        "A_PAGAR"
      ],
      [
        "18/09/2026",
        "Boleto Amigo",
        "INSS",
        "MINISTERIO DA PREVIDENCIA (INSS)",
        -1078.83,
        "A_PAGAR"
      ],
      [
        "16/09/2026",
        "Boleto Amigo",
        "SIMPLES",
        "SIMPLES - RECEITA FEDERAL",
        -0.01,
        "A_PAGAR"
      ],
      [
        "16/09/2026",
        "Boleto Amigo",
        "OUTROS IMPOSTOS",
        "MINISTERIO DA FAZENDA (IRRF)",
        -0.01,
        "A_PAGAR"
      ],
      [
        "15/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "SHIRLIANE DA SILVA BEZERRA",
        450,
        "A_PAGAR"
      ],
      [
        "15/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOSEILTON BERTO BIZERRA",
        450,
        "A_PAGAR"
      ],
      [
        "15/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "GRIMARIO  BRITO DE SOUSA",
        350,
        "A_PAGAR"
      ],
      [
        "15/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOSIANE FERNANDA DE SOUZA SILVA",
        450,
        "A_PAGAR"
      ],
      [
        "15/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ONADINA GOMES OLIVEIRA",
        450,
        "A_PAGAR"
      ],
      [
        "15/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "EDNIVALDO MESQUITA PEREIRA",
        450,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCO GILSON CASTRO DE ALMEIDA",
        450,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "RITA MARIA DA COSTA PINTO",
        450,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "WILLYSON FERREIRA MATOS",
        450,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "LUCIVANIA DE OLIVEIRA DO NASCIMENTO",
        450,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "LUCAS DE PAIVA MONTEIRO",
        450,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARIO AUGUSTO DA SILVA SANTOS",
        450,
        "A_PAGAR"
      ]
    ],
    "EXTRATO_RECEITAS": [
      [
        "25/12/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "DALVA MARGARET ROCHA FERREIRA CIRQUEIRA",
        450,
        "A_PAGAR"
      ],
      [
        "20/12/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "CASSIO RODRIGO SANTOS SILVA",
        520.01,
        "A_PAGAR"
      ],
      [
        "25/11/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ALEXANDRE PIRES BESSA",
        450,
        "A_PAGAR"
      ],
      [
        "25/11/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCO HERNANDO FARIAS",
        546.05,
        "A_PAGAR"
      ],
      [
        "25/11/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "GABRIEL DA GUIA SENA",
        450,
        "A_PAGAR"
      ],
      [
        "25/11/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "TALES FERREIRA DE LIMA",
        450,
        "A_PAGAR"
      ],
      [
        "25/11/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "DALVA MARGARET ROCHA FERREIRA CIRQUEIRA",
        450,
        "A_PAGAR"
      ],
      [
        "20/11/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARIA LEMOS DA SILVA COSTA",
        450,
        "A_PAGAR"
      ],
      [
        "20/11/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JAIR COSTA LIMA",
        519.48,
        "A_PAGAR"
      ],
      [
        "20/11/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "CASSIO RODRIGO SANTOS SILVA",
        520.01,
        "A_PAGAR"
      ],
      [
        "15/11/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "SHIRLIANE DA SILVA BEZERRA",
        450,
        "A_PAGAR"
      ],
      [
        "15/11/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOSEILTON BERTO BIZERRA",
        450,
        "A_PAGAR"
      ],
      [
        "10/11/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JULIANA PEREIRA DOS SANTOS",
        450,
        "A_PAGAR"
      ],
      [
        "10/11/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCA AURILENE DA SILVA CAVALCANTE",
        250,
        "A_PAGAR"
      ],
      [
        "10/11/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARILZA ARAUJO OLIVEIRA",
        503.76,
        "A_PAGAR"
      ],
      [
        "10/11/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "CLERTON CUNHA GOMES",
        467.72,
        "A_PAGAR"
      ],
      [
        "25/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCO HERNANDO FARIAS",
        546.06,
        "A_PAGAR"
      ],
      [
        "25/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ANDRE LUIZ MARQUES MARTINS",
        450,
        "A_PAGAR"
      ],
      [
        "25/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCYVANIA GOMES CHAGAS",
        884.3,
        "A_PAGAR"
      ],
      [
        "25/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOSE AUGUSTO SOARES SERRAO",
        450,
        "A_PAGAR"
      ],
      [
        "25/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARLI MARIA DA SILVA SANTOS",
        450,
        "A_PAGAR"
      ],
      [
        "25/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ALEXANDRE PIRES BESSA",
        450,
        "A_PAGAR"
      ],
      [
        "25/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "IDELFONSO RODRIGUES CAMPOS",
        416.65,
        "A_PAGAR"
      ],
      [
        "25/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MICHAEL DE JESUS DOS SANTOS SILVA",
        450,
        "A_PAGAR"
      ],
      [
        "25/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "GILSON CESAR BARBOSA",
        416.65,
        "A_PAGAR"
      ],
      [
        "25/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "GABRIEL DA GUIA SENA",
        450,
        "A_PAGAR"
      ],
      [
        "25/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "TALES FERREIRA DE LIMA",
        450,
        "A_PAGAR"
      ],
      [
        "25/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "DALVA MARGARET ROCHA FERREIRA CIRQUEIRA",
        450,
        "A_PAGAR"
      ],
      [
        "24/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ILA MARIA MACIEL NOGUEIRA",
        466.65,
        "A_PAGAR"
      ],
      [
        "20/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JAIR COSTA LIMA",
        519.47,
        "A_PAGAR"
      ],
      [
        "20/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARIA LEMOS DA SILVA COSTA",
        450,
        "A_PAGAR"
      ],
      [
        "20/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "WAGNER DA SILVA XAVIER",
        100,
        "A_PAGAR"
      ],
      [
        "20/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "CASSIO RODRIGO SANTOS SILVA",
        520.01,
        "A_PAGAR"
      ],
      [
        "15/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOSEILTON BERTO BIZERRA",
        450,
        "A_PAGAR"
      ],
      [
        "15/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "SHIRLIANE DA SILVA BEZERRA",
        450,
        "A_PAGAR"
      ],
      [
        "15/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "EDNIVALDO MESQUITA PEREIRA",
        450,
        "A_PAGAR"
      ],
      [
        "15/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ONADINA GOMES OLIVEIRA",
        450,
        "A_PAGAR"
      ],
      [
        "10/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "RITA MARIA DA COSTA PINTO",
        450,
        "A_PAGAR"
      ],
      [
        "10/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "LUCIVANIA DE OLIVEIRA DO NASCIMENTO",
        450,
        "A_PAGAR"
      ],
      [
        "10/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "CLERTON CUNHA GOMES",
        467.75,
        "A_PAGAR"
      ],
      [
        "10/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "EDILSON DE OLIVEIRA PATOS",
        333.35,
        "A_PAGAR"
      ],
      [
        "10/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCA MAIARA LIMA MOREIRA",
        450,
        "A_PAGAR"
      ],
      [
        "10/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JULIANA PEREIRA DOS SANTOS",
        450,
        "A_PAGAR"
      ],
      [
        "10/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCA AURILENE DA SILVA CAVALCANTE",
        250,
        "A_PAGAR"
      ],
      [
        "10/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCO GILSON CASTRO DE ALMEIDA",
        450,
        "A_PAGAR"
      ],
      [
        "10/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARILZA ARAUJO OLIVEIRA",
        503.78,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MICHAEL DE JESUS DOS SANTOS SILVA",
        450,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "LILIAN LIMA DIAS",
        450,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "IDELFONSO RODRIGUES CAMPOS",
        416.67,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "UALAS NEVES SILVA",
        450,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCO HERNANDO FARIAS",
        546.06,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCYVANIA GOMES CHAGAS",
        884.33,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "CIBERLANIA MARIA DE ANDRADE",
        100,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "GILSON CESAR BARBOSA",
        416.67,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ATHIRSON BRENDO SOUSA SILVA",
        450,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ALEXANDRE PIRES BESSA",
        450,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOSE AUGUSTO SOARES SERRAO",
        450,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ANDRE LUIZ MARQUES MARTINS",
        450,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "RAFAEL ALVES DA SILVA",
        450,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "GABRIEL DA GUIA SENA",
        450,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ANTONIO DIONISIO GADELHA DA SILVA",
        450,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "TALES FERREIRA DE LIMA",
        450,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARLI MARIA DA SILVA SANTOS",
        450,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "DALVA MARGARET ROCHA FERREIRA CIRQUEIRA",
        450,
        "A_PAGAR"
      ],
      [
        "24/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ILA MARIA MACIEL NOGUEIRA",
        466.67,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARIA LEMOS DA SILVA COSTA",
        450,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JUCIVALDO RODRIGUES DURANS",
        450,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "KAIO RAMOS DE SOUZA BORGES",
        450,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARIA DO SOCORRO SERAFIM",
        450,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "DANIELLY MAUL DA CUNHA MOURA",
        450,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "LUIZ GABRIEL DE SOUZA DE SOUZA",
        375,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JAIR COSTA LIMA",
        519.47,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "WAGNER DA SILVA XAVIER",
        100,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "CASSIO RODRIGO SANTOS SILVA",
        520.01,
        "A_PAGAR"
      ],
      [
        "15/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "SHIRLIANE DA SILVA BEZERRA",
        450,
        "A_PAGAR"
      ],
      [
        "15/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOSEILTON BERTO BIZERRA",
        450,
        "A_PAGAR"
      ],
      [
        "15/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "GRIMARIO  BRITO DE SOUSA",
        350,
        "A_PAGAR"
      ],
      [
        "15/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOSIANE FERNANDA DE SOUZA SILVA",
        450,
        "A_PAGAR"
      ],
      [
        "15/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ONADINA GOMES OLIVEIRA",
        450,
        "A_PAGAR"
      ],
      [
        "15/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "EDNIVALDO MESQUITA PEREIRA",
        450,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCO GILSON CASTRO DE ALMEIDA",
        450,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "RITA MARIA DA COSTA PINTO",
        450,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "WILLYSON FERREIRA MATOS",
        450,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "LUCIVANIA DE OLIVEIRA DO NASCIMENTO",
        450,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "LUCAS DE PAIVA MONTEIRO",
        450,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARIO AUGUSTO DA SILVA SANTOS",
        450,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCA MAIARA LIMA MOREIRA",
        450,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FERNANDO WILLIAM RIBEIRO ROCHA",
        450,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JULIANA PEREIRA DOS SANTOS",
        450,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "CLERTON CUNHA GOMES",
        467.75,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARILZA ARAUJO OLIVEIRA",
        503.78,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ILZA LIMA DA SILVA",
        450,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "GRACENIRA GONCALVES DE OLIVEIRA",
        450,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCA AURILENE DA SILVA CAVALCANTE",
        250,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ALAN NIXON ARAGAO RIBEIRO",
        450,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "EDILSON DE OLIVEIRA PATOS",
        333.33,
        "A_PAGAR"
      ],
      [
        "05/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JULIETTE MONICA DA SILVA LEAO",
        450,
        "A_PAGAR"
      ],
      [
        "25/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "RAFAEL ALVES DA SILVA",
        450,
        "A_PAGAR"
      ],
      [
        "25/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "TALES FERREIRA DE LIMA",
        450,
        "A_PAGAR"
      ],
      [
        "25/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "GABRIEL DA GUIA SENA",
        450,
        "A_PAGAR"
      ],
      [
        "25/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "LILIAN LIMA DIAS",
        450,
        "A_PAGAR"
      ],
      [
        "25/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOSE AUGUSTO SOARES SERRAO",
        450,
        "A_PAGAR"
      ],
      [
        "25/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "LUCIANA SILVA MEDEIROS",
        466.65,
        "A_PAGAR"
      ],
      [
        "25/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "UALAS NEVES SILVA",
        450,
        "A_PAGAR"
      ],
      [
        "25/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ANTONIO DIONISIO GADELHA DA SILVA",
        450,
        "A_PAGAR"
      ],
      [
        "25/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ATHIRSON BRENDO SOUSA SILVA",
        450,
        "A_PAGAR"
      ],
      [
        "25/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MICHAEL DE JESUS DOS SANTOS SILVA",
        450,
        "A_PAGAR"
      ],
      [
        "25/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ALEXANDRE PIRES BESSA",
        450,
        "A_PAGAR"
      ],
      [
        "25/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCO ALVES DE SOUSA FILHO",
        500,
        "A_PAGAR"
      ],
      [
        "25/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ANDRE LUIZ MARQUES MARTINS",
        450,
        "A_PAGAR"
      ],
      [
        "25/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "GILSON CESAR BARBOSA",
        416.67,
        "A_PAGAR"
      ],
      [
        "25/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ANTONIO JOSIVAN ALVES RODRIGUES",
        100,
        "A_PAGAR"
      ],
      [
        "25/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "IDELFONSO RODRIGUES CAMPOS",
        416.67,
        "A_PAGAR"
      ],
      [
        "25/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "CIBERLANIA MARIA DE ANDRADE",
        100,
        "A_PAGAR"
      ],
      [
        "25/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCYVANIA GOMES CHAGAS",
        884.33,
        "A_PAGAR"
      ],
      [
        "25/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARLI MARIA DA SILVA SANTOS",
        450,
        "A_PAGAR"
      ],
      [
        "25/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCO HERNANDO FARIAS",
        546.06,
        "A_PAGAR"
      ],
      [
        "25/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "IRANILDO DE LIMA OLIVEIRA",
        100,
        "A_PAGAR"
      ],
      [
        "25/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "DALVA MARGARET ROCHA FERREIRA CIRQUEIRA",
        450,
        "A_PAGAR"
      ],
      [
        "24/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ILA MARIA MACIEL NOGUEIRA",
        466.67,
        "A_PAGAR"
      ],
      [
        "20/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JUCIVALDO RODRIGUES DURANS",
        450,
        "A_PAGAR"
      ],
      [
        "20/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "LUIZ GABRIEL DE SOUZA DE SOUZA",
        375,
        "A_PAGAR"
      ],
      [
        "20/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARIA DO SOCORRO SERAFIM",
        450,
        "A_PAGAR"
      ],
      [
        "20/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JAIR COSTA LIMA",
        519.47,
        "A_PAGAR"
      ],
      [
        "20/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARIA LEMOS DA SILVA COSTA",
        450,
        "A_PAGAR"
      ],
      [
        "20/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "DAYANE ALVES DE ABREU",
        500,
        "A_PAGAR"
      ],
      [
        "20/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "WILLIAM BESERRA GOMES",
        450,
        "A_PAGAR"
      ],
      [
        "20/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "WELLEN MENDES MOREIRA LIMA",
        460,
        "A_PAGAR"
      ],
      [
        "20/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "DANIELLY MAUL DA CUNHA MOURA",
        450,
        "A_PAGAR"
      ],
      [
        "20/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "KAIO RAMOS DE SOUZA BORGES",
        450,
        "A_PAGAR"
      ],
      [
        "20/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "GILVANEIDE MESSIAS BARBOSA",
        100,
        "A_PAGAR"
      ],
      [
        "20/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ANDERSON DA SILVA BARRETO",
        100,
        "A_PAGAR"
      ],
      [
        "20/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "WAGNER DA SILVA XAVIER",
        100,
        "A_PAGAR"
      ],
      [
        "20/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "CASSIO RODRIGO SANTOS SILVA",
        520.01,
        "A_PAGAR"
      ],
      [
        "15/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "GRIMARIO  BRITO DE SOUSA",
        350,
        "A_PAGAR"
      ],
      [
        "15/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOSIANE FERNANDA DE SOUZA SILVA",
        450,
        "A_PAGAR"
      ],
      [
        "15/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ONADINA GOMES OLIVEIRA",
        450,
        "A_PAGAR"
      ],
      [
        "15/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "SHIRLIANE DA SILVA BEZERRA",
        450,
        "A_PAGAR"
      ],
      [
        "15/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "EDNIVALDO MESQUITA PEREIRA",
        450,
        "A_PAGAR"
      ],
      [
        "15/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOSEILTON BERTO BIZERRA",
        450,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "EDILSON DE OLIVEIRA PATOS",
        333.33,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCO GILSON CASTRO DE ALMEIDA",
        450,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "LEIDLENE MAGNA DE ALENCAR",
        450,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FERNANDO WILLIAM RIBEIRO ROCHA",
        450,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "RITA MARIA DA COSTA PINTO",
        450,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCA MAIARA LIMA MOREIRA",
        450,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARIO AUGUSTO DA SILVA SANTOS",
        450,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "LUCIVANIA DE OLIVEIRA DO NASCIMENTO",
        450,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "CLERTON CUNHA GOMES",
        467.75,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JULIANA PEREIRA DOS SANTOS",
        450,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "WILLYSON FERREIRA MATOS",
        450,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "LUCAS DE PAIVA MONTEIRO",
        450,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ALAN NIXON ARAGAO RIBEIRO",
        450,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ILZA LIMA DA SILVA",
        450,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARILZA ARAUJO OLIVEIRA",
        503.78,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCA AURILENE DA SILVA CAVALCANTE",
        250,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "GRACENIRA GONCALVES DE OLIVEIRA",
        450,
        "A_PAGAR"
      ],
      [
        "05/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JULIETTE MONICA DA SILVA LEAO",
        450,
        "A_PAGAR"
      ],
      [
        "05/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCO GESSIVALDO PINHEIRO",
        450,
        "A_PAGAR"
      ],
      [
        "05/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCO GESSIVALDO PINHEIRO",
        450,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ANTONIO DIONISIO GADELHA DA SILVA",
        450,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "LUCIANA SILVA MEDEIROS",
        466.67,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "LILIAN LIMA DIAS",
        450,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "RAFAEL ALVES DA SILVA",
        450,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ANDREZA  FERREIRA MARTINS",
        100,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARCUS THADEU FERNANDES ARRAES",
        500,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "CIBERLANIA MARIA DE ANDRADE",
        100,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCYVANIA GOMES CHAGAS",
        884.33,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCO HERNANDO FARIAS",
        546.06,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MICHAEL DE JESUS DOS SANTOS SILVA",
        450,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ATHIRSON BRENDO SOUSA SILVA",
        450,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ANDRE LUIZ MARQUES MARTINS",
        450,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ALEXANDRE PIRES BESSA",
        450,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "IDELFONSO RODRIGUES CAMPOS",
        416.67,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ANTONIO JOSIVAN ALVES RODRIGUES",
        100,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "IRANILDO DE LIMA OLIVEIRA",
        100,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCO ALVES DE SOUSA FILHO",
        500,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARLI MARIA DA SILVA SANTOS",
        450,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "BRUNO QUENA GOMES DINIZ",
        675,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "GILSON CESAR BARBOSA",
        416.67,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "UALAS NEVES SILVA",
        450,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARIA NASCIMENTO GOMES",
        100,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "GABRIEL DA GUIA SENA",
        450,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FABIO DE SOUZA BARBOSA",
        450,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "EDNA COSTA DE JESUS ALVES",
        450,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOSE AUGUSTO SOARES SERRAO",
        450,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "TALES FERREIRA DE LIMA",
        450,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "LIDIANE ALMEIDA SILVA",
        450,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "CARLOS DE SOUSA MARTINS",
        100,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "DALVA MARGARET ROCHA FERREIRA CIRQUEIRA",
        450,
        "A_PAGAR"
      ],
      [
        "24/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ILA MARIA MACIEL NOGUEIRA",
        466.67,
        "A_PAGAR"
      ],
      [
        "20/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "WELLEN MENDES MOREIRA LIMA",
        460,
        "A_PAGAR"
      ],
      [
        "20/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JAIR COSTA LIMA",
        519.47,
        "A_PAGAR"
      ],
      [
        "20/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "KAIO RAMOS DE SOUZA BORGES",
        450,
        "A_PAGAR"
      ],
      [
        "20/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "DAYANE ALVES DE ABREU",
        500,
        "A_PAGAR"
      ],
      [
        "20/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOSE ARI SANTOS MACIEL",
        450,
        "A_PAGAR"
      ],
      [
        "20/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "LUIZ GABRIEL DE SOUZA DE SOUZA",
        375,
        "A_PAGAR"
      ],
      [
        "20/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "CARLOS ANDRE NUNES DA SILVA",
        450,
        "A_PAGAR"
      ],
      [
        "20/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARIA DO SOCORRO SERAFIM",
        450,
        "A_PAGAR"
      ],
      [
        "20/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JUCIVALDO RODRIGUES DURANS",
        450,
        "A_PAGAR"
      ]
    ],
    "EXTRATO_DESPESAS": [
      [
        "11/03/2029",
        "Boleto Amigo",
        "OUTRAS DESPESAS",
        "DLOCAL BRASIL PAGAMENTOS LTDA",
        -79.08,
        "A_PAGAR"
      ],
      [
        "05/08/2028",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "18/07/2028",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/07/2028",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "18/06/2028",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/06/2028",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "18/05/2028",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/05/2028",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "18/04/2028",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/04/2028",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "18/03/2028",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "11/03/2028",
        "Boleto Amigo",
        "OUTRAS DESPESAS",
        "DLOCAL BRASIL PAGAMENTOS LTDA",
        -79.08,
        "A_PAGAR"
      ],
      [
        "05/03/2028",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "18/02/2028",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/02/2028",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "18/01/2028",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/01/2028",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "18/12/2027",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/12/2027",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "18/11/2027",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/11/2027",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "18/10/2027",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/10/2027",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "18/09/2027",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/09/2027",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "18/08/2027",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/08/2027",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "18/07/2027",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/07/2027",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "18/06/2027",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/06/2027",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "28/05/2027",
        "Boleto Amigo",
        "ENERGIA",
        "NEOENERGIA",
        -7.36,
        "A_PAGAR"
      ],
      [
        "18/05/2027",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/05/2027",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "28/04/2027",
        "Boleto Amigo",
        "ENERGIA",
        "NEOENERGIA",
        -7.36,
        "A_PAGAR"
      ],
      [
        "18/04/2027",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/04/2027",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "28/03/2027",
        "Boleto Amigo",
        "ENERGIA",
        "NEOENERGIA",
        -7.36,
        "A_PAGAR"
      ],
      [
        "18/03/2027",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "11/03/2027",
        "Boleto Amigo",
        "OUTRAS DESPESAS",
        "DLOCAL BRASIL PAGAMENTOS LTDA",
        -79.08,
        "A_PAGAR"
      ],
      [
        "06/03/2027",
        "Boleto Amigo",
        "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "HUGO LEONARDO MOURA",
        -2500,
        "A_PAGAR"
      ],
      [
        "05/03/2027",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "28/02/2027",
        "Boleto Amigo",
        "ENERGIA",
        "NEOENERGIA",
        -7.36,
        "A_PAGAR"
      ],
      [
        "18/02/2027",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "06/02/2027",
        "Boleto Amigo",
        "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "HUGO LEONARDO MOURA",
        -2500,
        "A_PAGAR"
      ],
      [
        "05/02/2027",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "04/02/2027",
        "Boleto Amigo",
        "META (FACEBOOK E INSTAGRAM)",
        "FACEBOOK CNPJ: 13.347.016/0001-17",
        -3000,
        "A_PAGAR"
      ],
      [
        "28/01/2027",
        "Boleto Amigo",
        "SISTEMAS",
        "DOCK INSTITUIÇÃO DE PAGAMENTO S.A",
        -49,
        "A_PAGAR"
      ],
      [
        "28/01/2027",
        "Boleto Amigo",
        "ENERGIA",
        "NEOENERGIA",
        -7.36,
        "A_PAGAR"
      ],
      [
        "18/01/2027",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "16/01/2027",
        "Boleto Amigo",
        "OUTROS IMPOSTOS",
        "MINISTERIO DA FAZENDA (IRRF)",
        -0.01,
        "A_PAGAR"
      ],
      [
        "16/01/2027",
        "Boleto Amigo",
        "SIMPLES",
        "SIMPLES - RECEITA FEDERAL",
        -0.01,
        "A_PAGAR"
      ],
      [
        "06/01/2027",
        "Boleto Amigo",
        "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "HUGO LEONARDO MOURA",
        -2500,
        "A_PAGAR"
      ],
      [
        "06/01/2027",
        "Boleto Amigo",
        "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "MARIA EDUARDA ANACLETO",
        -2561.23,
        "A_PAGAR"
      ],
      [
        "05/01/2027",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "04/01/2027",
        "Boleto Amigo",
        "META (FACEBOOK E INSTAGRAM)",
        "FACEBOOK CNPJ: 13.347.016/0001-17",
        -3000,
        "A_PAGAR"
      ],
      [
        "28/12/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "DOCK INSTITUIÇÃO DE PAGAMENTO S.A",
        -49,
        "A_PAGAR"
      ],
      [
        "28/12/2026",
        "Boleto Amigo",
        "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL",
        -630,
        "A_PAGAR"
      ],
      [
        "28/12/2026",
        "Boleto Amigo",
        "ENERGIA",
        "NEOENERGIA",
        -7.36,
        "A_PAGAR"
      ],
      [
        "27/12/2026",
        "Boleto Amigo",
        "PAGAMENTO DE VALE TRANSPORTE",
        "SEMOB SECRETARIA DE ESTADO DE TRANSPORTE E MODILIDADE DO DF",
        -209,
        "A_PAGAR"
      ],
      [
        "20/12/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "ALGAR TELECOM S/A",
        -467.76,
        "A_PAGAR"
      ],
      [
        "20/12/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "ALGAR TELECOM S/A",
        -800,
        "A_PAGAR"
      ],
      [
        "18/12/2026",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "16/12/2026",
        "Boleto Amigo",
        "SIMPLES",
        "SIMPLES - RECEITA FEDERAL",
        -0.01,
        "A_PAGAR"
      ],
      [
        "16/12/2026",
        "Boleto Amigo",
        "OUTROS IMPOSTOS",
        "MINISTERIO DA FAZENDA (IRRF)",
        -0.01,
        "A_PAGAR"
      ],
      [
        "06/12/2026",
        "Boleto Amigo",
        "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "MARIA EDUARDA ANACLETO",
        -2561.23,
        "A_PAGAR"
      ],
      [
        "06/12/2026",
        "Boleto Amigo",
        "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "HUGO LEONARDO MOURA",
        -2500,
        "A_PAGAR"
      ],
      [
        "05/12/2026",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "04/12/2026",
        "Boleto Amigo",
        "META (FACEBOOK E INSTAGRAM)",
        "FACEBOOK CNPJ: 13.347.016/0001-17",
        -3000,
        "A_PAGAR"
      ],
      [
        "04/12/2026",
        "Boleto Amigo",
        "LIMPEZA E HIGIENIZAÇÃO ESCRITÓRIO",
        "ISMAILDE E SOUZA",
        -650,
        "A_PAGAR"
      ],
      [
        "28/11/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "DOCK INSTITUIÇÃO DE PAGAMENTO S.A",
        -49,
        "A_PAGAR"
      ],
      [
        "28/11/2026",
        "Boleto Amigo",
        "ENERGIA",
        "NEOENERGIA",
        -7.36,
        "A_PAGAR"
      ],
      [
        "28/11/2026",
        "Boleto Amigo",
        "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL",
        -630,
        "A_PAGAR"
      ],
      [
        "27/11/2026",
        "Boleto Amigo",
        "PAGAMENTO DE VALE TRANSPORTE",
        "SEMOB SECRETARIA DE ESTADO DE TRANSPORTE E MODILIDADE DO DF",
        -209,
        "A_PAGAR"
      ],
      [
        "20/11/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "ALGAR TELECOM S/A",
        -800,
        "A_PAGAR"
      ],
      [
        "20/11/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "ALGAR TELECOM S/A",
        -467.76,
        "A_PAGAR"
      ],
      [
        "18/11/2026",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "16/11/2026",
        "Boleto Amigo",
        "SIMPLES",
        "SIMPLES - RECEITA FEDERAL",
        -0.01,
        "A_PAGAR"
      ],
      [
        "16/11/2026",
        "Boleto Amigo",
        "OUTROS IMPOSTOS",
        "MINISTERIO DA FAZENDA (IRRF)",
        -0.01,
        "A_PAGAR"
      ],
      [
        "06/11/2026",
        "Boleto Amigo",
        "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "HUGO LEONARDO MOURA",
        -2500,
        "A_PAGAR"
      ],
      [
        "06/11/2026",
        "Boleto Amigo",
        "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "MARIA EDUARDA ANACLETO",
        -2561.23,
        "A_PAGAR"
      ],
      [
        "05/11/2026",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "04/11/2026",
        "Boleto Amigo",
        "LIMPEZA E HIGIENIZAÇÃO ESCRITÓRIO",
        "ISMAILDE E SOUZA",
        -650,
        "A_PAGAR"
      ],
      [
        "04/11/2026",
        "Boleto Amigo",
        "META (FACEBOOK E INSTAGRAM)",
        "FACEBOOK CNPJ: 13.347.016/0001-17",
        -3000,
        "A_PAGAR"
      ],
      [
        "28/10/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "DOCK INSTITUIÇÃO DE PAGAMENTO S.A",
        -49,
        "A_PAGAR"
      ],
      [
        "28/10/2026",
        "Boleto Amigo",
        "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL",
        -630,
        "A_PAGAR"
      ],
      [
        "28/10/2026",
        "Boleto Amigo",
        "ENERGIA",
        "NEOENERGIA",
        -7.36,
        "A_PAGAR"
      ],
      [
        "27/10/2026",
        "Boleto Amigo",
        "PAGAMENTO DE VALE TRANSPORTE",
        "SEMOB SECRETARIA DE ESTADO DE TRANSPORTE E MODILIDADE DO DF",
        -209,
        "A_PAGAR"
      ],
      [
        "20/10/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "ALGAR TELECOM S/A",
        -467.76,
        "A_PAGAR"
      ],
      [
        "20/10/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "ALGAR TELECOM S/A",
        -800,
        "A_PAGAR"
      ],
      [
        "18/10/2026",
        "Boleto Amigo",
        "INSS",
        "MINISTERIO DA PREVIDENCIA (INSS)",
        -1078.83,
        "A_PAGAR"
      ],
      [
        "18/10/2026",
        "Boleto Amigo",
        "FGTS",
        "CAIXA ECONOMICA FEDERAL",
        -452.04,
        "A_PAGAR"
      ],
      [
        "18/10/2026",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "16/10/2026",
        "Boleto Amigo",
        "OUTROS IMPOSTOS",
        "MINISTERIO DA FAZENDA (IRRF)",
        -0.01,
        "A_PAGAR"
      ],
      [
        "16/10/2026",
        "Boleto Amigo",
        "SIMPLES",
        "SIMPLES - RECEITA FEDERAL",
        -0.01,
        "A_PAGAR"
      ],
      [
        "10/10/2026",
        "Boleto Amigo",
        "OUTRAS DESPESAS",
        "BRXNQ- TELECOMUNICAÇÕES- LTDA",
        -180.8,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Boleto Amigo",
        "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "MARIA EDUARDA ANACLETO",
        -2561.23,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Boleto Amigo",
        "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "HUGO LEONARDO MOURA",
        -2500,
        "A_PAGAR"
      ],
      [
        "05/10/2026",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -470.98,
        "A_PAGAR"
      ],
      [
        "05/10/2026",
        "Boleto Amigo",
        "CONDOMÍNIO",
        "CONDOMINIO DO EDIFICIO SUPER CENTER VENANCIO 2000",
        -1123.44,
        "A_PAGAR"
      ],
      [
        "05/10/2026",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2246.08,
        "A_PAGAR"
      ],
      [
        "04/10/2026",
        "Boleto Amigo",
        "META (FACEBOOK E INSTAGRAM)",
        "FACEBOOK CNPJ: 13.347.016/0001-17",
        -3000,
        "A_PAGAR"
      ],
      [
        "04/10/2026",
        "Boleto Amigo",
        "LIMPEZA E HIGIENIZAÇÃO ESCRITÓRIO",
        "ISMAILDE E SOUZA",
        -650,
        "A_PAGAR"
      ],
      [
        "28/09/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "DOCK INSTITUIÇÃO DE PAGAMENTO S.A",
        -49,
        "A_PAGAR"
      ],
      [
        "28/09/2026",
        "Boleto Amigo",
        "ENERGIA",
        "NEOENERGIA",
        -7.36,
        "A_PAGAR"
      ],
      [
        "28/09/2026",
        "Boleto Amigo",
        "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL",
        -630,
        "A_PAGAR"
      ],
      [
        "27/09/2026",
        "Boleto Amigo",
        "PAGAMENTO DE VALE TRANSPORTE",
        "SEMOB SECRETARIA DE ESTADO DE TRANSPORTE E MODILIDADE DO DF",
        -209,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "ALGAR TELECOM S/A",
        -800,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "ALGAR TELECOM S/A",
        -467.76,
        "A_PAGAR"
      ],
      [
        "18/09/2026",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "18/09/2026",
        "Boleto Amigo",
        "FGTS",
        "CAIXA ECONOMICA FEDERAL",
        -452.04,
        "A_PAGAR"
      ],
      [
        "18/09/2026",
        "Boleto Amigo",
        "INSS",
        "MINISTERIO DA PREVIDENCIA (INSS)",
        -1078.83,
        "A_PAGAR"
      ],
      [
        "16/09/2026",
        "Boleto Amigo",
        "SIMPLES",
        "SIMPLES - RECEITA FEDERAL",
        -0.01,
        "A_PAGAR"
      ],
      [
        "16/09/2026",
        "Boleto Amigo",
        "OUTROS IMPOSTOS",
        "MINISTERIO DA FAZENDA (IRRF)",
        -0.01,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Boleto Amigo",
        "OUTRAS DESPESAS",
        "BRXNQ- TELECOMUNICAÇÕES- LTDA",
        -180.8,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Boleto Amigo",
        "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "MARIA EDUARDA ANACLETO",
        -2561.23,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Boleto Amigo",
        "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "HUGO LEONARDO MOURA",
        -2500,
        "A_PAGAR"
      ],
      [
        "05/09/2026",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -470.98,
        "A_PAGAR"
      ],
      [
        "05/09/2026",
        "Boleto Amigo",
        "CONDOMÍNIO",
        "CONDOMINIO DO EDIFICIO SUPER CENTER VENANCIO 2000",
        -1123.44,
        "A_PAGAR"
      ],
      [
        "05/09/2026",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2246.08,
        "A_PAGAR"
      ],
      [
        "04/09/2026",
        "Boleto Amigo",
        "LIMPEZA E HIGIENIZAÇÃO ESCRITÓRIO",
        "ISMAILDE E SOUZA",
        -650,
        "A_PAGAR"
      ],
      [
        "04/09/2026",
        "Boleto Amigo",
        "META (FACEBOOK E INSTAGRAM)",
        "FACEBOOK CNPJ: 13.347.016/0001-17",
        -3000,
        "A_PAGAR"
      ],
      [
        "28/08/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "DOCK INSTITUIÇÃO DE PAGAMENTO S.A",
        -49,
        "A_PAGAR"
      ],
      [
        "28/08/2026",
        "Boleto Amigo",
        "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL",
        -630,
        "A_PAGAR"
      ],
      [
        "28/08/2026",
        "Boleto Amigo",
        "ENERGIA",
        "NEOENERGIA",
        -7.36,
        "A_PAGAR"
      ],
      [
        "27/08/2026",
        "Boleto Amigo",
        "PAGAMENTO DE VALE TRANSPORTE",
        "SEMOB SECRETARIA DE ESTADO DE TRANSPORTE E MODILIDADE DO DF",
        -209,
        "A_PAGAR"
      ],
      [
        "20/08/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "ALGAR TELECOM S/A",
        -800,
        "A_PAGAR"
      ],
      [
        "20/08/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "ALGAR TELECOM S/A",
        -467.76,
        "A_PAGAR"
      ],
      [
        "18/08/2026",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "18/08/2026",
        "Boleto Amigo",
        "INSS",
        "MINISTERIO DA PREVIDENCIA (INSS)",
        -1078.83,
        "A_PAGAR"
      ],
      [
        "18/08/2026",
        "Boleto Amigo",
        "FGTS",
        "CAIXA ECONOMICA FEDERAL",
        -452.04,
        "A_PAGAR"
      ],
      [
        "16/08/2026",
        "Boleto Amigo",
        "SIMPLES",
        "SIMPLES - RECEITA FEDERAL",
        -0.01,
        "A_PAGAR"
      ],
      [
        "16/08/2026",
        "Boleto Amigo",
        "OUTROS IMPOSTOS",
        "MINISTERIO DA FAZENDA (IRRF)",
        -0.01,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Boleto Amigo",
        "OUTRAS DESPESAS",
        "BRXNQ- TELECOMUNICAÇÕES- LTDA",
        -180.8,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Boleto Amigo",
        "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "HUGO LEONARDO MOURA",
        -2500,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Boleto Amigo",
        "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "MARIA EDUARDA ANACLETO",
        -2561.23,
        "A_PAGAR"
      ],
      [
        "05/08/2026",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -470.98,
        "A_PAGAR"
      ],
      [
        "05/08/2026",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2246.08,
        "A_PAGAR"
      ],
      [
        "05/08/2026",
        "Boleto Amigo",
        "CONDOMÍNIO",
        "CONDOMINIO DO EDIFICIO SUPER CENTER VENANCIO 2000",
        -1123.44,
        "A_PAGAR"
      ],
      [
        "04/08/2026",
        "Boleto Amigo",
        "LIMPEZA E HIGIENIZAÇÃO ESCRITÓRIO",
        "ISMAILDE E SOUZA",
        -650,
        "A_PAGAR"
      ],
      [
        "04/08/2026",
        "Boleto Amigo",
        "META (FACEBOOK E INSTAGRAM)",
        "FACEBOOK CNPJ: 13.347.016/0001-17",
        -3000,
        "A_PAGAR"
      ],
      [
        "02/08/2026",
        "Boleto Amigo",
        "RESSARCIMENTO DE DESPESAS DE CUSTOS OPERACIONAIS (TAG/DF)",
        "ECONOMY ASSESSORIA - TAGUATINGA",
        -0.01,
        "A_PAGAR"
      ],
      [
        "01/08/2026",
        "Boleto Amigo",
        "FUNDO DE CAIXA ECONOMY (CONTA SIMPLES)",
        "DOCK IP S.A FUNDO DE CAIXA E INVESTIMENTOS",
        -0.01,
        "A_PAGAR"
      ],
      [
        "28/07/2026",
        "Boleto Amigo",
        "ENERGIA",
        "NEOENERGIA",
        -7.36,
        "A_PAGAR"
      ],
      [
        "28/07/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "DOCK INSTITUIÇÃO DE PAGAMENTO S.A",
        -49,
        "A_PAGAR"
      ],
      [
        "28/07/2026",
        "Boleto Amigo",
        "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL",
        -630,
        "A_PAGAR"
      ],
      [
        "27/07/2026",
        "Boleto Amigo",
        "PAGAMENTO DE VALE TRANSPORTE",
        "SEMOB SECRETARIA DE ESTADO DE TRANSPORTE E MODILIDADE DO DF",
        -209,
        "A_PAGAR"
      ],
      [
        "20/07/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "ALGAR TELECOM S/A",
        -800,
        "A_PAGAR"
      ],
      [
        "20/07/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "ALGAR TELECOM S/A",
        -467.76,
        "A_PAGAR"
      ],
      [
        "18/07/2026",
        "Boleto Amigo",
        "INSS",
        "MINISTERIO DA PREVIDENCIA (INSS)",
        -1078.83,
        "A_PAGAR"
      ],
      [
        "18/07/2026",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "18/07/2026",
        "Boleto Amigo",
        "FGTS",
        "CAIXA ECONOMICA FEDERAL",
        -452.04,
        "A_PAGAR"
      ],
      [
        "16/07/2026",
        "Boleto Amigo",
        "OUTROS IMPOSTOS",
        "MINISTERIO DA FAZENDA (IRRF)",
        -0.01,
        "A_PAGAR"
      ],
      [
        "16/07/2026",
        "Boleto Amigo",
        "SIMPLES",
        "SIMPLES - RECEITA FEDERAL",
        -0.01,
        "A_PAGAR"
      ],
      [
        "10/07/2026",
        "Boleto Amigo",
        "OUTRAS DESPESAS",
        "BRXNQ- TELECOMUNICAÇÕES- LTDA",
        -180.8,
        "A_PAGAR"
      ],
      [
        "06/07/2026",
        "Boleto Amigo",
        "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "HUGO LEONARDO MOURA",
        -2500,
        "A_PAGAR"
      ],
      [
        "06/07/2026",
        "Boleto Amigo",
        "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "MARIA EDUARDA ANACLETO",
        -2561.23,
        "A_PAGAR"
      ],
      [
        "06/07/2026",
        "Boleto Amigo",
        "MATERIAL DE CONSUMO",
        "TUDO OFFICE LTDA",
        -325.72,
        "A_PAGAR"
      ],
      [
        "05/07/2026",
        "Boleto Amigo",
        "CONDOMÍNIO",
        "CONDOMINIO DO EDIFICIO SUPER CENTER VENANCIO 2000",
        -1123.44,
        "A_PAGAR"
      ],
      [
        "05/07/2026",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2246.08,
        "A_PAGAR"
      ],
      [
        "05/07/2026",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -470.98,
        "A_PAGAR"
      ],
      [
        "04/07/2026",
        "Boleto Amigo",
        "META (FACEBOOK E INSTAGRAM)",
        "FACEBOOK CNPJ: 13.347.016/0001-17",
        -3000,
        "A_PAGAR"
      ],
      [
        "04/07/2026",
        "Boleto Amigo",
        "LIMPEZA E HIGIENIZAÇÃO ESCRITÓRIO",
        "ISMAILDE E SOUZA",
        -650,
        "A_PAGAR"
      ],
      [
        "02/07/2026",
        "Boleto Amigo",
        "RESSARCIMENTO DE DESPESAS DE CUSTOS OPERACIONAIS (TAG/DF)",
        "ECONOMY ASSESSORIA - TAGUATINGA",
        -0.01,
        "A_PAGAR"
      ],
      [
        "01/07/2026",
        "Boleto Amigo",
        "FUNDO DE CAIXA ECONOMY (CONTA SIMPLES)",
        "DOCK IP S.A FUNDO DE CAIXA E INVESTIMENTOS",
        -0.01,
        "A_PAGAR"
      ],
      [
        "28/06/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "DOCK INSTITUIÇÃO DE PAGAMENTO S.A",
        -49,
        "A_PAGAR"
      ],
      [
        "28/06/2026",
        "Boleto Amigo",
        "ENERGIA",
        "NEOENERGIA",
        -7.36,
        "A_PAGAR"
      ],
      [
        "28/06/2026",
        "Boleto Amigo",
        "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL",
        -630,
        "A_PAGAR"
      ],
      [
        "27/06/2026",
        "Boleto Amigo",
        "PAGAMENTO DE VALE TRANSPORTE",
        "SEMOB SECRETARIA DE ESTADO DE TRANSPORTE E MODILIDADE DO DF",
        -209,
        "A_PAGAR"
      ],
      [
        "20/06/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "ALGAR TELECOM S/A",
        -467.76,
        "A_PAGAR"
      ],
      [
        "20/06/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "ALGAR TELECOM S/A",
        -800,
        "A_PAGAR"
      ],
      [
        "18/06/2026",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "18/06/2026",
        "Boleto Amigo",
        "INSS",
        "MINISTERIO DA PREVIDENCIA (INSS)",
        -1078.83,
        "A_PAGAR"
      ],
      [
        "18/06/2026",
        "Boleto Amigo",
        "FGTS",
        "CAIXA ECONOMICA FEDERAL",
        -452.04,
        "A_PAGAR"
      ],
      [
        "16/06/2026",
        "Boleto Amigo",
        "MATERIAL DE CONSUMO",
        "TUDO OFFICE LTDA",
        -325.72,
        "A_PAGAR"
      ],
      [
        "16/06/2026",
        "Boleto Amigo",
        "OUTROS IMPOSTOS",
        "MINISTERIO DA FAZENDA (IRRF)",
        -0.01,
        "A_PAGAR"
      ],
      [
        "16/06/2026",
        "Boleto Amigo",
        "SIMPLES",
        "SIMPLES - RECEITA FEDERAL",
        -0.01,
        "A_PAGAR"
      ],
      [
        "10/06/2026",
        "Boleto Amigo",
        "OUTRAS DESPESAS",
        "BRXNQ- TELECOMUNICAÇÕES- LTDA",
        -180.8,
        "A_PAGAR"
      ],
      [
        "09/06/2026",
        "Boleto Amigo",
        "ALUGUEL DE IMPRESSORA",
        "QUALITY TOTAL LOCAÇÃO DE EQUIPAMENTOS DE INFORMATICA",
        -384.79,
        "A_PAGAR"
      ],
      [
        "06/06/2026",
        "Boleto Amigo",
        "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "MARIA EDUARDA ANACLETO",
        -2561.23,
        "A_PAGAR"
      ],
      [
        "06/06/2026",
        "Boleto Amigo",
        "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "HUGO LEONARDO MOURA",
        -2500,
        "A_PAGAR"
      ],
      [
        "05/06/2026",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2246.08,
        "A_PAGAR"
      ],
      [
        "05/06/2026",
        "Boleto Amigo",
        "CONDOMÍNIO",
        "CONDOMINIO DO EDIFICIO SUPER CENTER VENANCIO 2000",
        -1234.52,
        "A_PAGAR"
      ],
      [
        "05/06/2026",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -470.98,
        "A_PAGAR"
      ],
      [
        "05/06/2026",
        "Boleto Amigo",
        "DESPESA DE AQUISIÇÃO DE EQUIP OU MANUTENÇÃO",
        "MERCADO LIVRE",
        -258,
        "A_PAGAR"
      ],
      [
        "04/06/2026",
        "Boleto Amigo",
        "LIMPEZA E HIGIENIZAÇÃO ESCRITÓRIO",
        "ISMAILDE E SOUZA",
        -650,
        "A_PAGAR"
      ],
      [
        "04/06/2026",
        "Boleto Amigo",
        "META (FACEBOOK E INSTAGRAM)",
        "FACEBOOK CNPJ: 13.347.016/0001-17",
        -3000,
        "A_PAGAR"
      ],
      [
        "02/06/2026",
        "Boleto Amigo",
        "RESSARCIMENTO DE DESPESAS DE CUSTOS OPERACIONAIS (TAG/DF)",
        "ECONOMY ASSESSORIA - TAGUATINGA",
        -0.01,
        "A_PAGAR"
      ],
      [
        "01/06/2026",
        "Boleto Amigo",
        "ENERGIA",
        "NEOENERGIA",
        -7.36,
        "A_PAGAR"
      ],
      [
        "01/06/2026",
        "Boleto Amigo",
        "EMPRESA PRESTADORA DE SERVIÇOS",
        "LEANDRO HENRIQUE PEREIRA DE LIRA",
        -400,
        "A_PAGAR"
      ],
      [
        "01/06/2026",
        "Boleto Amigo",
        "FUNDO DE CAIXA ECONOMY (CONTA SIMPLES)",
        "DOCK IP S.A FUNDO DE CAIXA E INVESTIMENTOS",
        -0.01,
        "A_PAGAR"
      ],
      [
        "01/06/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "DOCK INSTITUIÇÃO DE PAGAMENTO S.A",
        -49,
        "A_PAGAR"
      ],
      [
        "22/05/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "ALGAR TELECOM S/A",
        -0.01,
        "A_PAGAR"
      ],
      [
        "18/05/2026",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ]
    ],
    "KPIS": {
      "TOTAL_RECEITA": 162353.62,
      "TOTAL_DESPESA": 126368.36000000002,
      "VALOR_LIQUIDO": 35985.25999999998,
      "MARGEM_LIQUIDA": 22.16474138365377,
      "VALOR_LIQ_SERIES": [
        1150.0300000000002,
        883.35,
        1533.4,
        3650,
        12776.04,
        16569.03999999999,
        15149.130000000005,
        8149.829999999998,
        4023.199999999997,
        -4901.870000000001,
        -8779.939999999999,
        -14216.95
      ]
    },
    "RECEITA_DIA": [
      0,
      700,
      0,
      0,
      8550.03,
      1350,
      0,
      0,
      0,
      45895.91999999999,
      0,
      0,
      0,
      0,
      14933.35,
      0,
      0,
      383.35,
      0,
      27733.569999999992,
      0,
      0,
      0,
      2333.33,
      60474.069999999985,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "DESPESA_DIA": [
      456.39,
      0.03,
      0,
      25550,
      24196.759999999995,
      35754.33,
      0,
      0,
      384.79,
      904,
      0,
      0,
      0,
      0,
      0,
      325.86,
      0,
      23654.350000000006,
      0,
      8874.320000000002,
      0,
      0.01,
      0,
      0,
      0,
      0,
      1463,
      4804.52,
      0,
      0,
      0
    ],
    "SALDOS_MES": [
      1150.0300000000002,
      2033.38,
      3566.78,
      7216.780000000001,
      19992.82,
      36561.859999999986,
      51710.98999999999,
      59860.81999999999,
      63884.01999999999,
      58982.14999999999,
      50202.20999999999,
      35985.259999999995
    ],
    "FLUXO_RECEITA": [
      {
        "cat": "VENDA DE PRODUTOS/ SERVIÇOS",
        "values": [
          1150.0300000000002,
          883.35,
          1533.4,
          3650,
          14776.050000000001,
          36531.54999999999,
          33901.41,
          26576.389999999996,
          22449.739999999998,
          13524.67,
          6407.020000000001,
          970.01
        ]
      }
    ],
    "FLUXO_DESPESA": [
      {
        "cat": "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "values": [
          0,
          0,
          0,
          0,
          0,
          -5061.23,
          -5061.23,
          -5061.23,
          -5061.23,
          -5061.23,
          -5061.23,
          -5061.23
        ]
      },
      {
        "cat": "META (FACEBOOK E INSTAGRAM)",
        "values": [
          0,
          0,
          0,
          0,
          0,
          -3000,
          -3000,
          -3000,
          -3000,
          -3000,
          -3000,
          -3000
        ]
      },
      {
        "cat": "ALUGUEL",
        "values": [
          0,
          0,
          0,
          0,
          0,
          -2717.06,
          -2717.06,
          -2717.06,
          -2717.06,
          -2717.06,
          -2312.59,
          -2312.59
        ]
      },
      {
        "cat": "EMPRESTIMOS A PAGAR",
        "values": [
          0,
          0,
          0,
          0,
          -2000,
          -2000,
          -2000,
          -2000,
          -2000,
          -2000,
          -2000,
          -2000
        ]
      },
      {
        "cat": "SISTEMAS",
        "values": [
          0,
          0,
          0,
          0,
          -0.01,
          -1365.76,
          -1316.76,
          -1316.76,
          -1316.76,
          -1316.76,
          -1316.76,
          -1316.76
        ]
      }
    ],
    "COMP_DATA": [
      {
        "tipo": "Receita",
        "isHeader": true,
        "d1": 3566.7799999999997,
        "d2": 54957.599999999984
      },
      {
        "tipo": "VENDA DE PRODUTOS/ SERVIÇOS",
        "parent": "Receita",
        "d1": 3566.7799999999997,
        "d2": 54957.599999999984
      },
      {
        "tipo": "Despesa",
        "isHeader": true,
        "d1": 0,
        "d2": -21962.519999999997
      },
      {
        "tipo": "SISTEMAS",
        "parent": "Despesa",
        "d1": 0,
        "d2": -1365.77
      },
      {
        "tipo": "ENERGIA",
        "parent": "Despesa",
        "d1": 0,
        "d2": -14.72
      },
      {
        "tipo": "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "parent": "Despesa",
        "d1": 0,
        "d2": -630
      },
      {
        "tipo": "PAGAMENTO DE VALE TRANSPORTE",
        "parent": "Despesa",
        "d1": 0,
        "d2": -209
      },
      {
        "tipo": "EMPRESTIMOS A PAGAR",
        "parent": "Despesa",
        "d1": 0,
        "d2": -4000
      },
      {
        "tipo": "INSS",
        "parent": "Despesa",
        "d1": 0,
        "d2": -1078.83
      },
      {
        "tipo": "FGTS",
        "parent": "Despesa",
        "d1": 0,
        "d2": -452.04
      },
      {
        "tipo": "MATERIAL DE CONSUMO",
        "parent": "Despesa",
        "d1": 0,
        "d2": -325.72
      },
      {
        "tipo": "OUTROS IMPOSTOS",
        "parent": "Despesa",
        "d1": 0,
        "d2": -0.01
      },
      {
        "tipo": "SIMPLES",
        "parent": "Despesa",
        "d1": 0,
        "d2": -0.01
      },
      {
        "tipo": "OUTRAS DESPESAS",
        "parent": "Despesa",
        "d1": 0,
        "d2": -180.8
      },
      {
        "tipo": "ALUGUEL DE IMPRESSORA",
        "parent": "Despesa",
        "d1": 0,
        "d2": -384.79
      },
      {
        "tipo": "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "parent": "Despesa",
        "d1": 0,
        "d2": -5061.23
      },
      {
        "tipo": "ALUGUEL",
        "parent": "Despesa",
        "d1": 0,
        "d2": -2717.06
      },
      {
        "tipo": "CONDOMÍNIO",
        "parent": "Despesa",
        "d1": 0,
        "d2": -1234.52
      },
      {
        "tipo": "LIMPEZA E HIGIENIZAÇÃO ESCRITÓRIO",
        "parent": "Despesa",
        "d1": 0,
        "d2": -650
      },
      {
        "tipo": "META (FACEBOOK E INSTAGRAM)",
        "parent": "Despesa",
        "d1": 0,
        "d2": -3000
      },
      {
        "tipo": "RESSARCIMENTO DE DESPESAS DE CUSTOS OPERACIONAIS (TAG/DF)",
        "parent": "Despesa",
        "d1": 0,
        "d2": -0.01
      },
      {
        "tipo": "EMPRESA PRESTADORA DE SERVIÇOS",
        "parent": "Despesa",
        "d1": 0,
        "d2": -400
      },
      {
        "tipo": "FUNDO DE CAIXA ECONOMY (CONTA SIMPLES)",
        "parent": "Despesa",
        "d1": 0,
        "d2": -0.01
      },
      {
        "tipo": "DESPESA DE AQUISIÇÃO DE EQUIP OU MANUTENÇÃO",
        "parent": "Despesa",
        "d1": 0,
        "d2": -258
      }
    ]
  },
  "tudo": {
    "MONTH_DATA": [
      {
        "m": "janeiro",
        "receita": 44210.88000000001,
        "despesa": 52770.58
      },
      {
        "m": "fevereiro",
        "receita": 35091.350000000006,
        "despesa": 45762.58
      },
      {
        "m": "março",
        "receita": 42240.13000000003,
        "despesa": 42427.31
      },
      {
        "m": "abril",
        "receita": 42924.380000000005,
        "despesa": 45765.51
      },
      {
        "m": "maio",
        "receita": 48475.18,
        "despesa": 30302.080000000013
      },
      {
        "m": "junho",
        "receita": 36831.54999999999,
        "despesa": 21277.31
      },
      {
        "m": "julho",
        "receita": 33901.41,
        "despesa": 18752.28
      },
      {
        "m": "agosto",
        "receita": 26576.389999999996,
        "despesa": 18426.559999999998
      },
      {
        "m": "setembro",
        "receita": 22449.739999999998,
        "despesa": 18426.54
      },
      {
        "m": "outubro",
        "receita": 13524.67,
        "despesa": 18426.54
      },
      {
        "m": "novembro",
        "receita": 6407.020000000001,
        "despesa": 15186.960000000001
      },
      {
        "m": "dezembro",
        "receita": 970.01,
        "despesa": 15186.960000000001
      }
    ],
    "RECEITA_CATEGORIAS": [
      {
        "name": "VENDA DE PRODUTOS/ SERVIÇOS",
        "value": 353602.71000000025,
        "clientes": 191
      }
    ],
    "DESPESA_CATEGORIAS": [
      {
        "name": "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "value": 55474.030000000006,
        "fornecedores": 3
      },
      {
        "name": "FUNDO DE CAIXA ECONOMY (CONTA SIMPLES)",
        "value": 44107.6,
        "fornecedores": 1
      },
      {
        "name": "META (FACEBOOK E INSTAGRAM)",
        "value": 35157.8,
        "fornecedores": 3
      },
      {
        "name": "ALUGUEL",
        "value": 30244.41,
        "fornecedores": 1
      },
      {
        "name": "ANÚNCIOS DE TELEVISÃO",
        "value": 25000,
        "fornecedores": 3
      },
      {
        "name": "EMPRESTIMOS A PAGAR",
        "value": 22000,
        "fornecedores": 1
      },
      {
        "name": "OUTRAS DESPESAS",
        "value": 18538.969999999998,
        "fornecedores": 5
      },
      {
        "name": "RESSARCIMENTO DE DESPESAS DE CUSTOS OPERACIONAIS (TAG/DF)",
        "value": 15142.779999999999,
        "fornecedores": 1
      },
      {
        "name": "SISTEMAS",
        "value": 14287.810000000001,
        "fornecedores": 2
      },
      {
        "name": "CONDOMÍNIO",
        "value": 11835.39,
        "fornecedores": 1
      },
      {
        "name": "EMPRESA PRESTADORA DE SERVIÇOS",
        "value": 10334.089999999998,
        "fornecedores": 12
      },
      {
        "name": "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "value": 10015,
        "fornecedores": 3
      }
    ],
    "RECEITA_CLIENTES": [
      {
        "name": "FRANCISCO GESSIVALDO PINHEIRO",
        "value": 6027.58
      },
      {
        "name": "FRANCYVANIA GOMES CHAGAS",
        "value": 5605.95
      },
      {
        "name": "FRANCISCO HERNANDO FARIAS",
        "value": 3876.3499999999995
      },
      {
        "name": "GABRIEL DA GUIA SENA",
        "value": 3802.1400000000003
      },
      {
        "name": "CASSIO RODRIGO SANTOS SILVA",
        "value": 3720.0600000000004
      },
      {
        "name": "JAIR COSTA LIMA",
        "value": 3716.830000000001
      },
      {
        "name": "MARILZA ARAUJO OLIVEIRA",
        "value": 3522.66
      },
      {
        "name": "CLERTON CUNHA GOMES",
        "value": 3406.4700000000003
      },
      {
        "name": "MAX SERGIO SANTOS MOREIRA JUNIOR",
        "value": 3050.8
      },
      {
        "name": "JOSE RIBAMAR PEREIRA DE OLIVEIRA",
        "value": 3049.74
      },
      {
        "name": "CARLOS ANDRE NUNES DA SILVA",
        "value": 3048.33
      },
      {
        "name": "FLAVIO ROBERTO NASCIMENTO PEREIRA",
        "value": 3036.99
      }
    ],
    "DESPESA_FORNECEDORES": [
      {
        "name": "DOCK IP S.A FUNDO DE CAIXA E INVESTIMENTOS",
        "value": 44107.6
      },
      {
        "name": "FACEBOOK CNPJ: 13.347.016/0001-17",
        "value": 35000
      },
      {
        "name": "MARIA EDUARDA ANACLETO",
        "value": 34464.090000000004
      },
      {
        "name": "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        "value": 30244.41
      },
      {
        "name": "HUGO LEONARDO MOURA",
        "value": 26035.4
      },
      {
        "name": "ECONOMY - CONTA SIMPLES",
        "value": 22000
      },
      {
        "name": "ECONOMY ASSESSORIA - TAGUATINGA",
        "value": 15142.779999999999
      },
      {
        "name": "BANCO ITAÚ",
        "value": 14391.71
      },
      {
        "name": "ALGAR TELECOM S/A",
        "value": 13699.810000000001
      },
      {
        "name": "RÁDIO E TELEVISÃO CV LTDA",
        "value": 12000
      },
      {
        "name": "CONDOMINIO DO EDIFICIO SUPER CENTER VENANCIO 2000",
        "value": 11835.39
      },
      {
        "name": "TV METROPOLITANA",
        "value": 11000
      }
    ],
    "EXTRATO": [
      [
        "11/03/2029",
        "Boleto Amigo",
        "OUTRAS DESPESAS",
        "DLOCAL BRASIL PAGAMENTOS LTDA",
        -79.08,
        "A_PAGAR"
      ],
      [
        "05/08/2028",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "18/07/2028",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/07/2028",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "18/06/2028",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/06/2028",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "18/05/2028",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/05/2028",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "18/04/2028",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/04/2028",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "18/03/2028",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "11/03/2028",
        "Boleto Amigo",
        "OUTRAS DESPESAS",
        "DLOCAL BRASIL PAGAMENTOS LTDA",
        -79.08,
        "A_PAGAR"
      ],
      [
        "05/03/2028",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "18/02/2028",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/02/2028",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "18/01/2028",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/01/2028",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "18/12/2027",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/12/2027",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "18/11/2027",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/11/2027",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "18/10/2027",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/10/2027",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "18/09/2027",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/09/2027",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "18/08/2027",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/08/2027",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "18/07/2027",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/07/2027",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "18/06/2027",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/06/2027",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "28/05/2027",
        "Boleto Amigo",
        "ENERGIA",
        "NEOENERGIA",
        -7.36,
        "A_PAGAR"
      ],
      [
        "18/05/2027",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/05/2027",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "28/04/2027",
        "Boleto Amigo",
        "ENERGIA",
        "NEOENERGIA",
        -7.36,
        "A_PAGAR"
      ],
      [
        "18/04/2027",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/04/2027",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "28/03/2027",
        "Boleto Amigo",
        "ENERGIA",
        "NEOENERGIA",
        -7.36,
        "A_PAGAR"
      ],
      [
        "18/03/2027",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "11/03/2027",
        "Boleto Amigo",
        "OUTRAS DESPESAS",
        "DLOCAL BRASIL PAGAMENTOS LTDA",
        -79.08,
        "A_PAGAR"
      ],
      [
        "06/03/2027",
        "Boleto Amigo",
        "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "HUGO LEONARDO MOURA",
        -2500,
        "A_PAGAR"
      ],
      [
        "05/03/2027",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "28/02/2027",
        "Boleto Amigo",
        "ENERGIA",
        "NEOENERGIA",
        -7.36,
        "A_PAGAR"
      ],
      [
        "18/02/2027",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "06/02/2027",
        "Boleto Amigo",
        "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "HUGO LEONARDO MOURA",
        -2500,
        "A_PAGAR"
      ],
      [
        "05/02/2027",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "04/02/2027",
        "Boleto Amigo",
        "META (FACEBOOK E INSTAGRAM)",
        "FACEBOOK CNPJ: 13.347.016/0001-17",
        -3000,
        "A_PAGAR"
      ],
      [
        "28/01/2027",
        "Boleto Amigo",
        "SISTEMAS",
        "DOCK INSTITUIÇÃO DE PAGAMENTO S.A",
        -49,
        "A_PAGAR"
      ],
      [
        "28/01/2027",
        "Boleto Amigo",
        "ENERGIA",
        "NEOENERGIA",
        -7.36,
        "A_PAGAR"
      ],
      [
        "18/01/2027",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "16/01/2027",
        "Boleto Amigo",
        "OUTROS IMPOSTOS",
        "MINISTERIO DA FAZENDA (IRRF)",
        -0.01,
        "A_PAGAR"
      ],
      [
        "16/01/2027",
        "Boleto Amigo",
        "SIMPLES",
        "SIMPLES - RECEITA FEDERAL",
        -0.01,
        "A_PAGAR"
      ],
      [
        "06/01/2027",
        "Boleto Amigo",
        "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "HUGO LEONARDO MOURA",
        -2500,
        "A_PAGAR"
      ],
      [
        "06/01/2027",
        "Boleto Amigo",
        "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "MARIA EDUARDA ANACLETO",
        -2561.23,
        "A_PAGAR"
      ],
      [
        "05/01/2027",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "04/01/2027",
        "Boleto Amigo",
        "META (FACEBOOK E INSTAGRAM)",
        "FACEBOOK CNPJ: 13.347.016/0001-17",
        -3000,
        "A_PAGAR"
      ],
      [
        "28/12/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "DOCK INSTITUIÇÃO DE PAGAMENTO S.A",
        -49,
        "A_PAGAR"
      ],
      [
        "28/12/2026",
        "Boleto Amigo",
        "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL",
        -630,
        "A_PAGAR"
      ],
      [
        "28/12/2026",
        "Boleto Amigo",
        "ENERGIA",
        "NEOENERGIA",
        -7.36,
        "A_PAGAR"
      ],
      [
        "27/12/2026",
        "Boleto Amigo",
        "PAGAMENTO DE VALE TRANSPORTE",
        "SEMOB SECRETARIA DE ESTADO DE TRANSPORTE E MODILIDADE DO DF",
        -209,
        "A_PAGAR"
      ],
      [
        "25/12/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "DALVA MARGARET ROCHA FERREIRA CIRQUEIRA",
        450,
        "A_PAGAR"
      ],
      [
        "20/12/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "CASSIO RODRIGO SANTOS SILVA",
        520.01,
        "A_PAGAR"
      ],
      [
        "20/12/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "ALGAR TELECOM S/A",
        -467.76,
        "A_PAGAR"
      ],
      [
        "20/12/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "ALGAR TELECOM S/A",
        -800,
        "A_PAGAR"
      ],
      [
        "18/12/2026",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "16/12/2026",
        "Boleto Amigo",
        "SIMPLES",
        "SIMPLES - RECEITA FEDERAL",
        -0.01,
        "A_PAGAR"
      ],
      [
        "16/12/2026",
        "Boleto Amigo",
        "OUTROS IMPOSTOS",
        "MINISTERIO DA FAZENDA (IRRF)",
        -0.01,
        "A_PAGAR"
      ],
      [
        "06/12/2026",
        "Boleto Amigo",
        "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "MARIA EDUARDA ANACLETO",
        -2561.23,
        "A_PAGAR"
      ],
      [
        "06/12/2026",
        "Boleto Amigo",
        "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "HUGO LEONARDO MOURA",
        -2500,
        "A_PAGAR"
      ],
      [
        "05/12/2026",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "04/12/2026",
        "Boleto Amigo",
        "META (FACEBOOK E INSTAGRAM)",
        "FACEBOOK CNPJ: 13.347.016/0001-17",
        -3000,
        "A_PAGAR"
      ],
      [
        "04/12/2026",
        "Boleto Amigo",
        "LIMPEZA E HIGIENIZAÇÃO ESCRITÓRIO",
        "ISMAILDE E SOUZA",
        -650,
        "A_PAGAR"
      ],
      [
        "28/11/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "DOCK INSTITUIÇÃO DE PAGAMENTO S.A",
        -49,
        "A_PAGAR"
      ],
      [
        "28/11/2026",
        "Boleto Amigo",
        "ENERGIA",
        "NEOENERGIA",
        -7.36,
        "A_PAGAR"
      ],
      [
        "28/11/2026",
        "Boleto Amigo",
        "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL",
        -630,
        "A_PAGAR"
      ],
      [
        "27/11/2026",
        "Boleto Amigo",
        "PAGAMENTO DE VALE TRANSPORTE",
        "SEMOB SECRETARIA DE ESTADO DE TRANSPORTE E MODILIDADE DO DF",
        -209,
        "A_PAGAR"
      ],
      [
        "25/11/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ALEXANDRE PIRES BESSA",
        450,
        "A_PAGAR"
      ],
      [
        "25/11/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCO HERNANDO FARIAS",
        546.05,
        "A_PAGAR"
      ],
      [
        "25/11/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "GABRIEL DA GUIA SENA",
        450,
        "A_PAGAR"
      ],
      [
        "25/11/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "TALES FERREIRA DE LIMA",
        450,
        "A_PAGAR"
      ],
      [
        "25/11/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "DALVA MARGARET ROCHA FERREIRA CIRQUEIRA",
        450,
        "A_PAGAR"
      ],
      [
        "20/11/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARIA LEMOS DA SILVA COSTA",
        450,
        "A_PAGAR"
      ],
      [
        "20/11/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JAIR COSTA LIMA",
        519.48,
        "A_PAGAR"
      ],
      [
        "20/11/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "CASSIO RODRIGO SANTOS SILVA",
        520.01,
        "A_PAGAR"
      ],
      [
        "20/11/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "ALGAR TELECOM S/A",
        -800,
        "A_PAGAR"
      ],
      [
        "20/11/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "ALGAR TELECOM S/A",
        -467.76,
        "A_PAGAR"
      ],
      [
        "18/11/2026",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "16/11/2026",
        "Boleto Amigo",
        "SIMPLES",
        "SIMPLES - RECEITA FEDERAL",
        -0.01,
        "A_PAGAR"
      ],
      [
        "16/11/2026",
        "Boleto Amigo",
        "OUTROS IMPOSTOS",
        "MINISTERIO DA FAZENDA (IRRF)",
        -0.01,
        "A_PAGAR"
      ],
      [
        "15/11/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "SHIRLIANE DA SILVA BEZERRA",
        450,
        "A_PAGAR"
      ],
      [
        "15/11/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOSEILTON BERTO BIZERRA",
        450,
        "A_PAGAR"
      ],
      [
        "10/11/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JULIANA PEREIRA DOS SANTOS",
        450,
        "A_PAGAR"
      ],
      [
        "10/11/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCA AURILENE DA SILVA CAVALCANTE",
        250,
        "A_PAGAR"
      ],
      [
        "10/11/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARILZA ARAUJO OLIVEIRA",
        503.76,
        "A_PAGAR"
      ],
      [
        "10/11/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "CLERTON CUNHA GOMES",
        467.72,
        "A_PAGAR"
      ],
      [
        "06/11/2026",
        "Boleto Amigo",
        "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "HUGO LEONARDO MOURA",
        -2500,
        "A_PAGAR"
      ],
      [
        "06/11/2026",
        "Boleto Amigo",
        "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "MARIA EDUARDA ANACLETO",
        -2561.23,
        "A_PAGAR"
      ],
      [
        "05/11/2026",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "04/11/2026",
        "Boleto Amigo",
        "LIMPEZA E HIGIENIZAÇÃO ESCRITÓRIO",
        "ISMAILDE E SOUZA",
        -650,
        "A_PAGAR"
      ],
      [
        "04/11/2026",
        "Boleto Amigo",
        "META (FACEBOOK E INSTAGRAM)",
        "FACEBOOK CNPJ: 13.347.016/0001-17",
        -3000,
        "A_PAGAR"
      ],
      [
        "28/10/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "DOCK INSTITUIÇÃO DE PAGAMENTO S.A",
        -49,
        "A_PAGAR"
      ],
      [
        "28/10/2026",
        "Boleto Amigo",
        "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL",
        -630,
        "A_PAGAR"
      ],
      [
        "28/10/2026",
        "Boleto Amigo",
        "ENERGIA",
        "NEOENERGIA",
        -7.36,
        "A_PAGAR"
      ],
      [
        "27/10/2026",
        "Boleto Amigo",
        "PAGAMENTO DE VALE TRANSPORTE",
        "SEMOB SECRETARIA DE ESTADO DE TRANSPORTE E MODILIDADE DO DF",
        -209,
        "A_PAGAR"
      ],
      [
        "25/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCO HERNANDO FARIAS",
        546.06,
        "A_PAGAR"
      ],
      [
        "25/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ANDRE LUIZ MARQUES MARTINS",
        450,
        "A_PAGAR"
      ],
      [
        "25/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCYVANIA GOMES CHAGAS",
        884.3,
        "A_PAGAR"
      ],
      [
        "25/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOSE AUGUSTO SOARES SERRAO",
        450,
        "A_PAGAR"
      ],
      [
        "25/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARLI MARIA DA SILVA SANTOS",
        450,
        "A_PAGAR"
      ],
      [
        "25/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ALEXANDRE PIRES BESSA",
        450,
        "A_PAGAR"
      ],
      [
        "25/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "IDELFONSO RODRIGUES CAMPOS",
        416.65,
        "A_PAGAR"
      ],
      [
        "25/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MICHAEL DE JESUS DOS SANTOS SILVA",
        450,
        "A_PAGAR"
      ],
      [
        "25/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "GILSON CESAR BARBOSA",
        416.65,
        "A_PAGAR"
      ],
      [
        "25/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "GABRIEL DA GUIA SENA",
        450,
        "A_PAGAR"
      ],
      [
        "25/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "TALES FERREIRA DE LIMA",
        450,
        "A_PAGAR"
      ],
      [
        "25/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "DALVA MARGARET ROCHA FERREIRA CIRQUEIRA",
        450,
        "A_PAGAR"
      ],
      [
        "24/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ILA MARIA MACIEL NOGUEIRA",
        466.65,
        "A_PAGAR"
      ],
      [
        "20/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JAIR COSTA LIMA",
        519.47,
        "A_PAGAR"
      ],
      [
        "20/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARIA LEMOS DA SILVA COSTA",
        450,
        "A_PAGAR"
      ],
      [
        "20/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "WAGNER DA SILVA XAVIER",
        100,
        "A_PAGAR"
      ],
      [
        "20/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "CASSIO RODRIGO SANTOS SILVA",
        520.01,
        "A_PAGAR"
      ],
      [
        "20/10/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "ALGAR TELECOM S/A",
        -467.76,
        "A_PAGAR"
      ],
      [
        "20/10/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "ALGAR TELECOM S/A",
        -800,
        "A_PAGAR"
      ],
      [
        "18/10/2026",
        "Boleto Amigo",
        "INSS",
        "MINISTERIO DA PREVIDENCIA (INSS)",
        -1078.83,
        "A_PAGAR"
      ],
      [
        "18/10/2026",
        "Boleto Amigo",
        "FGTS",
        "CAIXA ECONOMICA FEDERAL",
        -452.04,
        "A_PAGAR"
      ],
      [
        "18/10/2026",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "16/10/2026",
        "Boleto Amigo",
        "OUTROS IMPOSTOS",
        "MINISTERIO DA FAZENDA (IRRF)",
        -0.01,
        "A_PAGAR"
      ],
      [
        "16/10/2026",
        "Boleto Amigo",
        "SIMPLES",
        "SIMPLES - RECEITA FEDERAL",
        -0.01,
        "A_PAGAR"
      ],
      [
        "15/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOSEILTON BERTO BIZERRA",
        450,
        "A_PAGAR"
      ],
      [
        "15/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "SHIRLIANE DA SILVA BEZERRA",
        450,
        "A_PAGAR"
      ],
      [
        "15/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "EDNIVALDO MESQUITA PEREIRA",
        450,
        "A_PAGAR"
      ],
      [
        "15/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ONADINA GOMES OLIVEIRA",
        450,
        "A_PAGAR"
      ],
      [
        "10/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "RITA MARIA DA COSTA PINTO",
        450,
        "A_PAGAR"
      ],
      [
        "10/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "LUCIVANIA DE OLIVEIRA DO NASCIMENTO",
        450,
        "A_PAGAR"
      ],
      [
        "10/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "CLERTON CUNHA GOMES",
        467.75,
        "A_PAGAR"
      ],
      [
        "10/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "EDILSON DE OLIVEIRA PATOS",
        333.35,
        "A_PAGAR"
      ],
      [
        "10/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCA MAIARA LIMA MOREIRA",
        450,
        "A_PAGAR"
      ],
      [
        "10/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JULIANA PEREIRA DOS SANTOS",
        450,
        "A_PAGAR"
      ],
      [
        "10/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCA AURILENE DA SILVA CAVALCANTE",
        250,
        "A_PAGAR"
      ],
      [
        "10/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCO GILSON CASTRO DE ALMEIDA",
        450,
        "A_PAGAR"
      ],
      [
        "10/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARILZA ARAUJO OLIVEIRA",
        503.78,
        "A_PAGAR"
      ],
      [
        "10/10/2026",
        "Boleto Amigo",
        "OUTRAS DESPESAS",
        "BRXNQ- TELECOMUNICAÇÕES- LTDA",
        -180.8,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Boleto Amigo",
        "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "MARIA EDUARDA ANACLETO",
        -2561.23,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Boleto Amigo",
        "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "HUGO LEONARDO MOURA",
        -2500,
        "A_PAGAR"
      ],
      [
        "05/10/2026",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -470.98,
        "A_PAGAR"
      ],
      [
        "05/10/2026",
        "Boleto Amigo",
        "CONDOMÍNIO",
        "CONDOMINIO DO EDIFICIO SUPER CENTER VENANCIO 2000",
        -1123.44,
        "A_PAGAR"
      ],
      [
        "05/10/2026",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2246.08,
        "A_PAGAR"
      ],
      [
        "04/10/2026",
        "Boleto Amigo",
        "META (FACEBOOK E INSTAGRAM)",
        "FACEBOOK CNPJ: 13.347.016/0001-17",
        -3000,
        "A_PAGAR"
      ],
      [
        "04/10/2026",
        "Boleto Amigo",
        "LIMPEZA E HIGIENIZAÇÃO ESCRITÓRIO",
        "ISMAILDE E SOUZA",
        -650,
        "A_PAGAR"
      ],
      [
        "28/09/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "DOCK INSTITUIÇÃO DE PAGAMENTO S.A",
        -49,
        "A_PAGAR"
      ],
      [
        "28/09/2026",
        "Boleto Amigo",
        "ENERGIA",
        "NEOENERGIA",
        -7.36,
        "A_PAGAR"
      ],
      [
        "28/09/2026",
        "Boleto Amigo",
        "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL",
        -630,
        "A_PAGAR"
      ],
      [
        "27/09/2026",
        "Boleto Amigo",
        "PAGAMENTO DE VALE TRANSPORTE",
        "SEMOB SECRETARIA DE ESTADO DE TRANSPORTE E MODILIDADE DO DF",
        -209,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MICHAEL DE JESUS DOS SANTOS SILVA",
        450,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "LILIAN LIMA DIAS",
        450,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "IDELFONSO RODRIGUES CAMPOS",
        416.67,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "UALAS NEVES SILVA",
        450,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCO HERNANDO FARIAS",
        546.06,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCYVANIA GOMES CHAGAS",
        884.33,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "CIBERLANIA MARIA DE ANDRADE",
        100,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "GILSON CESAR BARBOSA",
        416.67,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ATHIRSON BRENDO SOUSA SILVA",
        450,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ALEXANDRE PIRES BESSA",
        450,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOSE AUGUSTO SOARES SERRAO",
        450,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ANDRE LUIZ MARQUES MARTINS",
        450,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "RAFAEL ALVES DA SILVA",
        450,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "GABRIEL DA GUIA SENA",
        450,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ANTONIO DIONISIO GADELHA DA SILVA",
        450,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "TALES FERREIRA DE LIMA",
        450,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARLI MARIA DA SILVA SANTOS",
        450,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "DALVA MARGARET ROCHA FERREIRA CIRQUEIRA",
        450,
        "A_PAGAR"
      ],
      [
        "24/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ILA MARIA MACIEL NOGUEIRA",
        466.67,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARIA LEMOS DA SILVA COSTA",
        450,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JUCIVALDO RODRIGUES DURANS",
        450,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "KAIO RAMOS DE SOUZA BORGES",
        450,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARIA DO SOCORRO SERAFIM",
        450,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "DANIELLY MAUL DA CUNHA MOURA",
        450,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "LUIZ GABRIEL DE SOUZA DE SOUZA",
        375,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JAIR COSTA LIMA",
        519.47,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "WAGNER DA SILVA XAVIER",
        100,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "CASSIO RODRIGO SANTOS SILVA",
        520.01,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "ALGAR TELECOM S/A",
        -800,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "ALGAR TELECOM S/A",
        -467.76,
        "A_PAGAR"
      ],
      [
        "18/09/2026",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "18/09/2026",
        "Boleto Amigo",
        "FGTS",
        "CAIXA ECONOMICA FEDERAL",
        -452.04,
        "A_PAGAR"
      ],
      [
        "18/09/2026",
        "Boleto Amigo",
        "INSS",
        "MINISTERIO DA PREVIDENCIA (INSS)",
        -1078.83,
        "A_PAGAR"
      ],
      [
        "16/09/2026",
        "Boleto Amigo",
        "SIMPLES",
        "SIMPLES - RECEITA FEDERAL",
        -0.01,
        "A_PAGAR"
      ],
      [
        "16/09/2026",
        "Boleto Amigo",
        "OUTROS IMPOSTOS",
        "MINISTERIO DA FAZENDA (IRRF)",
        -0.01,
        "A_PAGAR"
      ],
      [
        "15/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "SHIRLIANE DA SILVA BEZERRA",
        450,
        "A_PAGAR"
      ],
      [
        "15/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOSEILTON BERTO BIZERRA",
        450,
        "A_PAGAR"
      ],
      [
        "15/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "GRIMARIO  BRITO DE SOUSA",
        350,
        "A_PAGAR"
      ],
      [
        "15/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOSIANE FERNANDA DE SOUZA SILVA",
        450,
        "A_PAGAR"
      ],
      [
        "15/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ONADINA GOMES OLIVEIRA",
        450,
        "A_PAGAR"
      ],
      [
        "15/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "EDNIVALDO MESQUITA PEREIRA",
        450,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCO GILSON CASTRO DE ALMEIDA",
        450,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "RITA MARIA DA COSTA PINTO",
        450,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "WILLYSON FERREIRA MATOS",
        450,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "LUCIVANIA DE OLIVEIRA DO NASCIMENTO",
        450,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "LUCAS DE PAIVA MONTEIRO",
        450,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARIO AUGUSTO DA SILVA SANTOS",
        450,
        "A_PAGAR"
      ]
    ],
    "EXTRATO_RECEITAS": [
      [
        "25/12/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "DALVA MARGARET ROCHA FERREIRA CIRQUEIRA",
        450,
        "A_PAGAR"
      ],
      [
        "20/12/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "CASSIO RODRIGO SANTOS SILVA",
        520.01,
        "A_PAGAR"
      ],
      [
        "25/11/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ALEXANDRE PIRES BESSA",
        450,
        "A_PAGAR"
      ],
      [
        "25/11/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCO HERNANDO FARIAS",
        546.05,
        "A_PAGAR"
      ],
      [
        "25/11/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "GABRIEL DA GUIA SENA",
        450,
        "A_PAGAR"
      ],
      [
        "25/11/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "TALES FERREIRA DE LIMA",
        450,
        "A_PAGAR"
      ],
      [
        "25/11/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "DALVA MARGARET ROCHA FERREIRA CIRQUEIRA",
        450,
        "A_PAGAR"
      ],
      [
        "20/11/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARIA LEMOS DA SILVA COSTA",
        450,
        "A_PAGAR"
      ],
      [
        "20/11/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JAIR COSTA LIMA",
        519.48,
        "A_PAGAR"
      ],
      [
        "20/11/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "CASSIO RODRIGO SANTOS SILVA",
        520.01,
        "A_PAGAR"
      ],
      [
        "15/11/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "SHIRLIANE DA SILVA BEZERRA",
        450,
        "A_PAGAR"
      ],
      [
        "15/11/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOSEILTON BERTO BIZERRA",
        450,
        "A_PAGAR"
      ],
      [
        "10/11/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JULIANA PEREIRA DOS SANTOS",
        450,
        "A_PAGAR"
      ],
      [
        "10/11/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCA AURILENE DA SILVA CAVALCANTE",
        250,
        "A_PAGAR"
      ],
      [
        "10/11/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARILZA ARAUJO OLIVEIRA",
        503.76,
        "A_PAGAR"
      ],
      [
        "10/11/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "CLERTON CUNHA GOMES",
        467.72,
        "A_PAGAR"
      ],
      [
        "25/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCO HERNANDO FARIAS",
        546.06,
        "A_PAGAR"
      ],
      [
        "25/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ANDRE LUIZ MARQUES MARTINS",
        450,
        "A_PAGAR"
      ],
      [
        "25/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCYVANIA GOMES CHAGAS",
        884.3,
        "A_PAGAR"
      ],
      [
        "25/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOSE AUGUSTO SOARES SERRAO",
        450,
        "A_PAGAR"
      ],
      [
        "25/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARLI MARIA DA SILVA SANTOS",
        450,
        "A_PAGAR"
      ],
      [
        "25/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ALEXANDRE PIRES BESSA",
        450,
        "A_PAGAR"
      ],
      [
        "25/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "IDELFONSO RODRIGUES CAMPOS",
        416.65,
        "A_PAGAR"
      ],
      [
        "25/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MICHAEL DE JESUS DOS SANTOS SILVA",
        450,
        "A_PAGAR"
      ],
      [
        "25/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "GILSON CESAR BARBOSA",
        416.65,
        "A_PAGAR"
      ],
      [
        "25/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "GABRIEL DA GUIA SENA",
        450,
        "A_PAGAR"
      ],
      [
        "25/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "TALES FERREIRA DE LIMA",
        450,
        "A_PAGAR"
      ],
      [
        "25/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "DALVA MARGARET ROCHA FERREIRA CIRQUEIRA",
        450,
        "A_PAGAR"
      ],
      [
        "24/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ILA MARIA MACIEL NOGUEIRA",
        466.65,
        "A_PAGAR"
      ],
      [
        "20/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JAIR COSTA LIMA",
        519.47,
        "A_PAGAR"
      ],
      [
        "20/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARIA LEMOS DA SILVA COSTA",
        450,
        "A_PAGAR"
      ],
      [
        "20/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "WAGNER DA SILVA XAVIER",
        100,
        "A_PAGAR"
      ],
      [
        "20/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "CASSIO RODRIGO SANTOS SILVA",
        520.01,
        "A_PAGAR"
      ],
      [
        "15/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOSEILTON BERTO BIZERRA",
        450,
        "A_PAGAR"
      ],
      [
        "15/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "SHIRLIANE DA SILVA BEZERRA",
        450,
        "A_PAGAR"
      ],
      [
        "15/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "EDNIVALDO MESQUITA PEREIRA",
        450,
        "A_PAGAR"
      ],
      [
        "15/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ONADINA GOMES OLIVEIRA",
        450,
        "A_PAGAR"
      ],
      [
        "10/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "RITA MARIA DA COSTA PINTO",
        450,
        "A_PAGAR"
      ],
      [
        "10/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "LUCIVANIA DE OLIVEIRA DO NASCIMENTO",
        450,
        "A_PAGAR"
      ],
      [
        "10/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "CLERTON CUNHA GOMES",
        467.75,
        "A_PAGAR"
      ],
      [
        "10/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "EDILSON DE OLIVEIRA PATOS",
        333.35,
        "A_PAGAR"
      ],
      [
        "10/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCA MAIARA LIMA MOREIRA",
        450,
        "A_PAGAR"
      ],
      [
        "10/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JULIANA PEREIRA DOS SANTOS",
        450,
        "A_PAGAR"
      ],
      [
        "10/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCA AURILENE DA SILVA CAVALCANTE",
        250,
        "A_PAGAR"
      ],
      [
        "10/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCO GILSON CASTRO DE ALMEIDA",
        450,
        "A_PAGAR"
      ],
      [
        "10/10/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARILZA ARAUJO OLIVEIRA",
        503.78,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MICHAEL DE JESUS DOS SANTOS SILVA",
        450,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "LILIAN LIMA DIAS",
        450,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "IDELFONSO RODRIGUES CAMPOS",
        416.67,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "UALAS NEVES SILVA",
        450,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCO HERNANDO FARIAS",
        546.06,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCYVANIA GOMES CHAGAS",
        884.33,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "CIBERLANIA MARIA DE ANDRADE",
        100,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "GILSON CESAR BARBOSA",
        416.67,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ATHIRSON BRENDO SOUSA SILVA",
        450,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ALEXANDRE PIRES BESSA",
        450,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOSE AUGUSTO SOARES SERRAO",
        450,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ANDRE LUIZ MARQUES MARTINS",
        450,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "RAFAEL ALVES DA SILVA",
        450,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "GABRIEL DA GUIA SENA",
        450,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ANTONIO DIONISIO GADELHA DA SILVA",
        450,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "TALES FERREIRA DE LIMA",
        450,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARLI MARIA DA SILVA SANTOS",
        450,
        "A_PAGAR"
      ],
      [
        "25/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "DALVA MARGARET ROCHA FERREIRA CIRQUEIRA",
        450,
        "A_PAGAR"
      ],
      [
        "24/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ILA MARIA MACIEL NOGUEIRA",
        466.67,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARIA LEMOS DA SILVA COSTA",
        450,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JUCIVALDO RODRIGUES DURANS",
        450,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "KAIO RAMOS DE SOUZA BORGES",
        450,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARIA DO SOCORRO SERAFIM",
        450,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "DANIELLY MAUL DA CUNHA MOURA",
        450,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "LUIZ GABRIEL DE SOUZA DE SOUZA",
        375,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JAIR COSTA LIMA",
        519.47,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "WAGNER DA SILVA XAVIER",
        100,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "CASSIO RODRIGO SANTOS SILVA",
        520.01,
        "A_PAGAR"
      ],
      [
        "15/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "SHIRLIANE DA SILVA BEZERRA",
        450,
        "A_PAGAR"
      ],
      [
        "15/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOSEILTON BERTO BIZERRA",
        450,
        "A_PAGAR"
      ],
      [
        "15/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "GRIMARIO  BRITO DE SOUSA",
        350,
        "A_PAGAR"
      ],
      [
        "15/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOSIANE FERNANDA DE SOUZA SILVA",
        450,
        "A_PAGAR"
      ],
      [
        "15/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ONADINA GOMES OLIVEIRA",
        450,
        "A_PAGAR"
      ],
      [
        "15/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "EDNIVALDO MESQUITA PEREIRA",
        450,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCO GILSON CASTRO DE ALMEIDA",
        450,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "RITA MARIA DA COSTA PINTO",
        450,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "WILLYSON FERREIRA MATOS",
        450,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "LUCIVANIA DE OLIVEIRA DO NASCIMENTO",
        450,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "LUCAS DE PAIVA MONTEIRO",
        450,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARIO AUGUSTO DA SILVA SANTOS",
        450,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCA MAIARA LIMA MOREIRA",
        450,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FERNANDO WILLIAM RIBEIRO ROCHA",
        450,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JULIANA PEREIRA DOS SANTOS",
        450,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "CLERTON CUNHA GOMES",
        467.75,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARILZA ARAUJO OLIVEIRA",
        503.78,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ILZA LIMA DA SILVA",
        450,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "GRACENIRA GONCALVES DE OLIVEIRA",
        450,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCA AURILENE DA SILVA CAVALCANTE",
        250,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ALAN NIXON ARAGAO RIBEIRO",
        450,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "EDILSON DE OLIVEIRA PATOS",
        333.33,
        "A_PAGAR"
      ],
      [
        "05/09/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JULIETTE MONICA DA SILVA LEAO",
        450,
        "A_PAGAR"
      ],
      [
        "25/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "RAFAEL ALVES DA SILVA",
        450,
        "A_PAGAR"
      ],
      [
        "25/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "TALES FERREIRA DE LIMA",
        450,
        "A_PAGAR"
      ],
      [
        "25/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "GABRIEL DA GUIA SENA",
        450,
        "A_PAGAR"
      ],
      [
        "25/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "LILIAN LIMA DIAS",
        450,
        "A_PAGAR"
      ],
      [
        "25/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOSE AUGUSTO SOARES SERRAO",
        450,
        "A_PAGAR"
      ],
      [
        "25/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "LUCIANA SILVA MEDEIROS",
        466.65,
        "A_PAGAR"
      ],
      [
        "25/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "UALAS NEVES SILVA",
        450,
        "A_PAGAR"
      ],
      [
        "25/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ANTONIO DIONISIO GADELHA DA SILVA",
        450,
        "A_PAGAR"
      ],
      [
        "25/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ATHIRSON BRENDO SOUSA SILVA",
        450,
        "A_PAGAR"
      ],
      [
        "25/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MICHAEL DE JESUS DOS SANTOS SILVA",
        450,
        "A_PAGAR"
      ],
      [
        "25/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ALEXANDRE PIRES BESSA",
        450,
        "A_PAGAR"
      ],
      [
        "25/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCO ALVES DE SOUSA FILHO",
        500,
        "A_PAGAR"
      ],
      [
        "25/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ANDRE LUIZ MARQUES MARTINS",
        450,
        "A_PAGAR"
      ],
      [
        "25/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "GILSON CESAR BARBOSA",
        416.67,
        "A_PAGAR"
      ],
      [
        "25/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ANTONIO JOSIVAN ALVES RODRIGUES",
        100,
        "A_PAGAR"
      ],
      [
        "25/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "IDELFONSO RODRIGUES CAMPOS",
        416.67,
        "A_PAGAR"
      ],
      [
        "25/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "CIBERLANIA MARIA DE ANDRADE",
        100,
        "A_PAGAR"
      ],
      [
        "25/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCYVANIA GOMES CHAGAS",
        884.33,
        "A_PAGAR"
      ],
      [
        "25/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARLI MARIA DA SILVA SANTOS",
        450,
        "A_PAGAR"
      ],
      [
        "25/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCO HERNANDO FARIAS",
        546.06,
        "A_PAGAR"
      ],
      [
        "25/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "IRANILDO DE LIMA OLIVEIRA",
        100,
        "A_PAGAR"
      ],
      [
        "25/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "DALVA MARGARET ROCHA FERREIRA CIRQUEIRA",
        450,
        "A_PAGAR"
      ],
      [
        "24/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ILA MARIA MACIEL NOGUEIRA",
        466.67,
        "A_PAGAR"
      ],
      [
        "20/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JUCIVALDO RODRIGUES DURANS",
        450,
        "A_PAGAR"
      ],
      [
        "20/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "LUIZ GABRIEL DE SOUZA DE SOUZA",
        375,
        "A_PAGAR"
      ],
      [
        "20/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARIA DO SOCORRO SERAFIM",
        450,
        "A_PAGAR"
      ],
      [
        "20/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JAIR COSTA LIMA",
        519.47,
        "A_PAGAR"
      ],
      [
        "20/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARIA LEMOS DA SILVA COSTA",
        450,
        "A_PAGAR"
      ],
      [
        "20/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "DAYANE ALVES DE ABREU",
        500,
        "A_PAGAR"
      ],
      [
        "20/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "WILLIAM BESERRA GOMES",
        450,
        "A_PAGAR"
      ],
      [
        "20/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "WELLEN MENDES MOREIRA LIMA",
        460,
        "A_PAGAR"
      ],
      [
        "20/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "DANIELLY MAUL DA CUNHA MOURA",
        450,
        "A_PAGAR"
      ],
      [
        "20/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "KAIO RAMOS DE SOUZA BORGES",
        450,
        "A_PAGAR"
      ],
      [
        "20/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "GILVANEIDE MESSIAS BARBOSA",
        100,
        "A_PAGAR"
      ],
      [
        "20/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ANDERSON DA SILVA BARRETO",
        100,
        "A_PAGAR"
      ],
      [
        "20/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "WAGNER DA SILVA XAVIER",
        100,
        "A_PAGAR"
      ],
      [
        "20/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "CASSIO RODRIGO SANTOS SILVA",
        520.01,
        "A_PAGAR"
      ],
      [
        "15/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "GRIMARIO  BRITO DE SOUSA",
        350,
        "A_PAGAR"
      ],
      [
        "15/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOSIANE FERNANDA DE SOUZA SILVA",
        450,
        "A_PAGAR"
      ],
      [
        "15/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ONADINA GOMES OLIVEIRA",
        450,
        "A_PAGAR"
      ],
      [
        "15/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "SHIRLIANE DA SILVA BEZERRA",
        450,
        "A_PAGAR"
      ],
      [
        "15/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "EDNIVALDO MESQUITA PEREIRA",
        450,
        "A_PAGAR"
      ],
      [
        "15/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOSEILTON BERTO BIZERRA",
        450,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "EDILSON DE OLIVEIRA PATOS",
        333.33,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCO GILSON CASTRO DE ALMEIDA",
        450,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "LEIDLENE MAGNA DE ALENCAR",
        450,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FERNANDO WILLIAM RIBEIRO ROCHA",
        450,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "RITA MARIA DA COSTA PINTO",
        450,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCA MAIARA LIMA MOREIRA",
        450,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARIO AUGUSTO DA SILVA SANTOS",
        450,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "LUCIVANIA DE OLIVEIRA DO NASCIMENTO",
        450,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "CLERTON CUNHA GOMES",
        467.75,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JULIANA PEREIRA DOS SANTOS",
        450,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "WILLYSON FERREIRA MATOS",
        450,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "LUCAS DE PAIVA MONTEIRO",
        450,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ALAN NIXON ARAGAO RIBEIRO",
        450,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ILZA LIMA DA SILVA",
        450,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARILZA ARAUJO OLIVEIRA",
        503.78,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCA AURILENE DA SILVA CAVALCANTE",
        250,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "GRACENIRA GONCALVES DE OLIVEIRA",
        450,
        "A_PAGAR"
      ],
      [
        "05/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JULIETTE MONICA DA SILVA LEAO",
        450,
        "A_PAGAR"
      ],
      [
        "05/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCO GESSIVALDO PINHEIRO",
        450,
        "A_PAGAR"
      ],
      [
        "05/08/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCO GESSIVALDO PINHEIRO",
        450,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ANTONIO DIONISIO GADELHA DA SILVA",
        450,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "LUCIANA SILVA MEDEIROS",
        466.67,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "LILIAN LIMA DIAS",
        450,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "RAFAEL ALVES DA SILVA",
        450,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ANDREZA  FERREIRA MARTINS",
        100,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARCUS THADEU FERNANDES ARRAES",
        500,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "CIBERLANIA MARIA DE ANDRADE",
        100,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCYVANIA GOMES CHAGAS",
        884.33,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCO HERNANDO FARIAS",
        546.06,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MICHAEL DE JESUS DOS SANTOS SILVA",
        450,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ATHIRSON BRENDO SOUSA SILVA",
        450,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ANDRE LUIZ MARQUES MARTINS",
        450,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ALEXANDRE PIRES BESSA",
        450,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "IDELFONSO RODRIGUES CAMPOS",
        416.67,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ANTONIO JOSIVAN ALVES RODRIGUES",
        100,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "IRANILDO DE LIMA OLIVEIRA",
        100,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FRANCISCO ALVES DE SOUSA FILHO",
        500,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARLI MARIA DA SILVA SANTOS",
        450,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "BRUNO QUENA GOMES DINIZ",
        675,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "GILSON CESAR BARBOSA",
        416.67,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "UALAS NEVES SILVA",
        450,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARIA NASCIMENTO GOMES",
        100,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "GABRIEL DA GUIA SENA",
        450,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "FABIO DE SOUZA BARBOSA",
        450,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "EDNA COSTA DE JESUS ALVES",
        450,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOSE AUGUSTO SOARES SERRAO",
        450,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "TALES FERREIRA DE LIMA",
        450,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "LIDIANE ALMEIDA SILVA",
        450,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "CARLOS DE SOUSA MARTINS",
        100,
        "A_PAGAR"
      ],
      [
        "25/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "DALVA MARGARET ROCHA FERREIRA CIRQUEIRA",
        450,
        "A_PAGAR"
      ],
      [
        "24/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "ILA MARIA MACIEL NOGUEIRA",
        466.67,
        "A_PAGAR"
      ],
      [
        "20/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "WELLEN MENDES MOREIRA LIMA",
        460,
        "A_PAGAR"
      ],
      [
        "20/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JAIR COSTA LIMA",
        519.47,
        "A_PAGAR"
      ],
      [
        "20/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "KAIO RAMOS DE SOUZA BORGES",
        450,
        "A_PAGAR"
      ],
      [
        "20/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "DAYANE ALVES DE ABREU",
        500,
        "A_PAGAR"
      ],
      [
        "20/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JOSE ARI SANTOS MACIEL",
        450,
        "A_PAGAR"
      ],
      [
        "20/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "LUIZ GABRIEL DE SOUZA DE SOUZA",
        375,
        "A_PAGAR"
      ],
      [
        "20/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "CARLOS ANDRE NUNES DA SILVA",
        450,
        "A_PAGAR"
      ],
      [
        "20/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "MARIA DO SOCORRO SERAFIM",
        450,
        "A_PAGAR"
      ],
      [
        "20/07/2026",
        "Boleto Amigo",
        "VENDA DE PRODUTOS/ SERVIÇOS",
        "JUCIVALDO RODRIGUES DURANS",
        450,
        "A_PAGAR"
      ]
    ],
    "EXTRATO_DESPESAS": [
      [
        "11/03/2029",
        "Boleto Amigo",
        "OUTRAS DESPESAS",
        "DLOCAL BRASIL PAGAMENTOS LTDA",
        -79.08,
        "A_PAGAR"
      ],
      [
        "05/08/2028",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "18/07/2028",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/07/2028",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "18/06/2028",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/06/2028",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "18/05/2028",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/05/2028",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "18/04/2028",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/04/2028",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "18/03/2028",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "11/03/2028",
        "Boleto Amigo",
        "OUTRAS DESPESAS",
        "DLOCAL BRASIL PAGAMENTOS LTDA",
        -79.08,
        "A_PAGAR"
      ],
      [
        "05/03/2028",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "18/02/2028",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/02/2028",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "18/01/2028",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/01/2028",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "18/12/2027",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/12/2027",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "18/11/2027",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/11/2027",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "18/10/2027",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/10/2027",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "18/09/2027",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/09/2027",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "18/08/2027",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/08/2027",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "18/07/2027",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/07/2027",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "18/06/2027",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/06/2027",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "28/05/2027",
        "Boleto Amigo",
        "ENERGIA",
        "NEOENERGIA",
        -7.36,
        "A_PAGAR"
      ],
      [
        "18/05/2027",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/05/2027",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "28/04/2027",
        "Boleto Amigo",
        "ENERGIA",
        "NEOENERGIA",
        -7.36,
        "A_PAGAR"
      ],
      [
        "18/04/2027",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "05/04/2027",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "28/03/2027",
        "Boleto Amigo",
        "ENERGIA",
        "NEOENERGIA",
        -7.36,
        "A_PAGAR"
      ],
      [
        "18/03/2027",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "11/03/2027",
        "Boleto Amigo",
        "OUTRAS DESPESAS",
        "DLOCAL BRASIL PAGAMENTOS LTDA",
        -79.08,
        "A_PAGAR"
      ],
      [
        "06/03/2027",
        "Boleto Amigo",
        "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "HUGO LEONARDO MOURA",
        -2500,
        "A_PAGAR"
      ],
      [
        "05/03/2027",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "28/02/2027",
        "Boleto Amigo",
        "ENERGIA",
        "NEOENERGIA",
        -7.36,
        "A_PAGAR"
      ],
      [
        "18/02/2027",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "06/02/2027",
        "Boleto Amigo",
        "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "HUGO LEONARDO MOURA",
        -2500,
        "A_PAGAR"
      ],
      [
        "05/02/2027",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "04/02/2027",
        "Boleto Amigo",
        "META (FACEBOOK E INSTAGRAM)",
        "FACEBOOK CNPJ: 13.347.016/0001-17",
        -3000,
        "A_PAGAR"
      ],
      [
        "28/01/2027",
        "Boleto Amigo",
        "SISTEMAS",
        "DOCK INSTITUIÇÃO DE PAGAMENTO S.A",
        -49,
        "A_PAGAR"
      ],
      [
        "28/01/2027",
        "Boleto Amigo",
        "ENERGIA",
        "NEOENERGIA",
        -7.36,
        "A_PAGAR"
      ],
      [
        "18/01/2027",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "16/01/2027",
        "Boleto Amigo",
        "OUTROS IMPOSTOS",
        "MINISTERIO DA FAZENDA (IRRF)",
        -0.01,
        "A_PAGAR"
      ],
      [
        "16/01/2027",
        "Boleto Amigo",
        "SIMPLES",
        "SIMPLES - RECEITA FEDERAL",
        -0.01,
        "A_PAGAR"
      ],
      [
        "06/01/2027",
        "Boleto Amigo",
        "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "HUGO LEONARDO MOURA",
        -2500,
        "A_PAGAR"
      ],
      [
        "06/01/2027",
        "Boleto Amigo",
        "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "MARIA EDUARDA ANACLETO",
        -2561.23,
        "A_PAGAR"
      ],
      [
        "05/01/2027",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "04/01/2027",
        "Boleto Amigo",
        "META (FACEBOOK E INSTAGRAM)",
        "FACEBOOK CNPJ: 13.347.016/0001-17",
        -3000,
        "A_PAGAR"
      ],
      [
        "28/12/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "DOCK INSTITUIÇÃO DE PAGAMENTO S.A",
        -49,
        "A_PAGAR"
      ],
      [
        "28/12/2026",
        "Boleto Amigo",
        "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL",
        -630,
        "A_PAGAR"
      ],
      [
        "28/12/2026",
        "Boleto Amigo",
        "ENERGIA",
        "NEOENERGIA",
        -7.36,
        "A_PAGAR"
      ],
      [
        "27/12/2026",
        "Boleto Amigo",
        "PAGAMENTO DE VALE TRANSPORTE",
        "SEMOB SECRETARIA DE ESTADO DE TRANSPORTE E MODILIDADE DO DF",
        -209,
        "A_PAGAR"
      ],
      [
        "20/12/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "ALGAR TELECOM S/A",
        -467.76,
        "A_PAGAR"
      ],
      [
        "20/12/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "ALGAR TELECOM S/A",
        -800,
        "A_PAGAR"
      ],
      [
        "18/12/2026",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "16/12/2026",
        "Boleto Amigo",
        "SIMPLES",
        "SIMPLES - RECEITA FEDERAL",
        -0.01,
        "A_PAGAR"
      ],
      [
        "16/12/2026",
        "Boleto Amigo",
        "OUTROS IMPOSTOS",
        "MINISTERIO DA FAZENDA (IRRF)",
        -0.01,
        "A_PAGAR"
      ],
      [
        "06/12/2026",
        "Boleto Amigo",
        "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "MARIA EDUARDA ANACLETO",
        -2561.23,
        "A_PAGAR"
      ],
      [
        "06/12/2026",
        "Boleto Amigo",
        "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "HUGO LEONARDO MOURA",
        -2500,
        "A_PAGAR"
      ],
      [
        "05/12/2026",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "04/12/2026",
        "Boleto Amigo",
        "META (FACEBOOK E INSTAGRAM)",
        "FACEBOOK CNPJ: 13.347.016/0001-17",
        -3000,
        "A_PAGAR"
      ],
      [
        "04/12/2026",
        "Boleto Amigo",
        "LIMPEZA E HIGIENIZAÇÃO ESCRITÓRIO",
        "ISMAILDE E SOUZA",
        -650,
        "A_PAGAR"
      ],
      [
        "28/11/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "DOCK INSTITUIÇÃO DE PAGAMENTO S.A",
        -49,
        "A_PAGAR"
      ],
      [
        "28/11/2026",
        "Boleto Amigo",
        "ENERGIA",
        "NEOENERGIA",
        -7.36,
        "A_PAGAR"
      ],
      [
        "28/11/2026",
        "Boleto Amigo",
        "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL",
        -630,
        "A_PAGAR"
      ],
      [
        "27/11/2026",
        "Boleto Amigo",
        "PAGAMENTO DE VALE TRANSPORTE",
        "SEMOB SECRETARIA DE ESTADO DE TRANSPORTE E MODILIDADE DO DF",
        -209,
        "A_PAGAR"
      ],
      [
        "20/11/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "ALGAR TELECOM S/A",
        -800,
        "A_PAGAR"
      ],
      [
        "20/11/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "ALGAR TELECOM S/A",
        -467.76,
        "A_PAGAR"
      ],
      [
        "18/11/2026",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "16/11/2026",
        "Boleto Amigo",
        "SIMPLES",
        "SIMPLES - RECEITA FEDERAL",
        -0.01,
        "A_PAGAR"
      ],
      [
        "16/11/2026",
        "Boleto Amigo",
        "OUTROS IMPOSTOS",
        "MINISTERIO DA FAZENDA (IRRF)",
        -0.01,
        "A_PAGAR"
      ],
      [
        "06/11/2026",
        "Boleto Amigo",
        "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "HUGO LEONARDO MOURA",
        -2500,
        "A_PAGAR"
      ],
      [
        "06/11/2026",
        "Boleto Amigo",
        "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "MARIA EDUARDA ANACLETO",
        -2561.23,
        "A_PAGAR"
      ],
      [
        "05/11/2026",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2312.59,
        "A_PAGAR"
      ],
      [
        "04/11/2026",
        "Boleto Amigo",
        "LIMPEZA E HIGIENIZAÇÃO ESCRITÓRIO",
        "ISMAILDE E SOUZA",
        -650,
        "A_PAGAR"
      ],
      [
        "04/11/2026",
        "Boleto Amigo",
        "META (FACEBOOK E INSTAGRAM)",
        "FACEBOOK CNPJ: 13.347.016/0001-17",
        -3000,
        "A_PAGAR"
      ],
      [
        "28/10/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "DOCK INSTITUIÇÃO DE PAGAMENTO S.A",
        -49,
        "A_PAGAR"
      ],
      [
        "28/10/2026",
        "Boleto Amigo",
        "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL",
        -630,
        "A_PAGAR"
      ],
      [
        "28/10/2026",
        "Boleto Amigo",
        "ENERGIA",
        "NEOENERGIA",
        -7.36,
        "A_PAGAR"
      ],
      [
        "27/10/2026",
        "Boleto Amigo",
        "PAGAMENTO DE VALE TRANSPORTE",
        "SEMOB SECRETARIA DE ESTADO DE TRANSPORTE E MODILIDADE DO DF",
        -209,
        "A_PAGAR"
      ],
      [
        "20/10/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "ALGAR TELECOM S/A",
        -467.76,
        "A_PAGAR"
      ],
      [
        "20/10/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "ALGAR TELECOM S/A",
        -800,
        "A_PAGAR"
      ],
      [
        "18/10/2026",
        "Boleto Amigo",
        "INSS",
        "MINISTERIO DA PREVIDENCIA (INSS)",
        -1078.83,
        "A_PAGAR"
      ],
      [
        "18/10/2026",
        "Boleto Amigo",
        "FGTS",
        "CAIXA ECONOMICA FEDERAL",
        -452.04,
        "A_PAGAR"
      ],
      [
        "18/10/2026",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "16/10/2026",
        "Boleto Amigo",
        "OUTROS IMPOSTOS",
        "MINISTERIO DA FAZENDA (IRRF)",
        -0.01,
        "A_PAGAR"
      ],
      [
        "16/10/2026",
        "Boleto Amigo",
        "SIMPLES",
        "SIMPLES - RECEITA FEDERAL",
        -0.01,
        "A_PAGAR"
      ],
      [
        "10/10/2026",
        "Boleto Amigo",
        "OUTRAS DESPESAS",
        "BRXNQ- TELECOMUNICAÇÕES- LTDA",
        -180.8,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Boleto Amigo",
        "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "MARIA EDUARDA ANACLETO",
        -2561.23,
        "A_PAGAR"
      ],
      [
        "06/10/2026",
        "Boleto Amigo",
        "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "HUGO LEONARDO MOURA",
        -2500,
        "A_PAGAR"
      ],
      [
        "05/10/2026",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -470.98,
        "A_PAGAR"
      ],
      [
        "05/10/2026",
        "Boleto Amigo",
        "CONDOMÍNIO",
        "CONDOMINIO DO EDIFICIO SUPER CENTER VENANCIO 2000",
        -1123.44,
        "A_PAGAR"
      ],
      [
        "05/10/2026",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2246.08,
        "A_PAGAR"
      ],
      [
        "04/10/2026",
        "Boleto Amigo",
        "META (FACEBOOK E INSTAGRAM)",
        "FACEBOOK CNPJ: 13.347.016/0001-17",
        -3000,
        "A_PAGAR"
      ],
      [
        "04/10/2026",
        "Boleto Amigo",
        "LIMPEZA E HIGIENIZAÇÃO ESCRITÓRIO",
        "ISMAILDE E SOUZA",
        -650,
        "A_PAGAR"
      ],
      [
        "28/09/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "DOCK INSTITUIÇÃO DE PAGAMENTO S.A",
        -49,
        "A_PAGAR"
      ],
      [
        "28/09/2026",
        "Boleto Amigo",
        "ENERGIA",
        "NEOENERGIA",
        -7.36,
        "A_PAGAR"
      ],
      [
        "28/09/2026",
        "Boleto Amigo",
        "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL",
        -630,
        "A_PAGAR"
      ],
      [
        "27/09/2026",
        "Boleto Amigo",
        "PAGAMENTO DE VALE TRANSPORTE",
        "SEMOB SECRETARIA DE ESTADO DE TRANSPORTE E MODILIDADE DO DF",
        -209,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "ALGAR TELECOM S/A",
        -800,
        "A_PAGAR"
      ],
      [
        "20/09/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "ALGAR TELECOM S/A",
        -467.76,
        "A_PAGAR"
      ],
      [
        "18/09/2026",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "18/09/2026",
        "Boleto Amigo",
        "FGTS",
        "CAIXA ECONOMICA FEDERAL",
        -452.04,
        "A_PAGAR"
      ],
      [
        "18/09/2026",
        "Boleto Amigo",
        "INSS",
        "MINISTERIO DA PREVIDENCIA (INSS)",
        -1078.83,
        "A_PAGAR"
      ],
      [
        "16/09/2026",
        "Boleto Amigo",
        "SIMPLES",
        "SIMPLES - RECEITA FEDERAL",
        -0.01,
        "A_PAGAR"
      ],
      [
        "16/09/2026",
        "Boleto Amigo",
        "OUTROS IMPOSTOS",
        "MINISTERIO DA FAZENDA (IRRF)",
        -0.01,
        "A_PAGAR"
      ],
      [
        "10/09/2026",
        "Boleto Amigo",
        "OUTRAS DESPESAS",
        "BRXNQ- TELECOMUNICAÇÕES- LTDA",
        -180.8,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Boleto Amigo",
        "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "MARIA EDUARDA ANACLETO",
        -2561.23,
        "A_PAGAR"
      ],
      [
        "06/09/2026",
        "Boleto Amigo",
        "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "HUGO LEONARDO MOURA",
        -2500,
        "A_PAGAR"
      ],
      [
        "05/09/2026",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -470.98,
        "A_PAGAR"
      ],
      [
        "05/09/2026",
        "Boleto Amigo",
        "CONDOMÍNIO",
        "CONDOMINIO DO EDIFICIO SUPER CENTER VENANCIO 2000",
        -1123.44,
        "A_PAGAR"
      ],
      [
        "05/09/2026",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2246.08,
        "A_PAGAR"
      ],
      [
        "04/09/2026",
        "Boleto Amigo",
        "LIMPEZA E HIGIENIZAÇÃO ESCRITÓRIO",
        "ISMAILDE E SOUZA",
        -650,
        "A_PAGAR"
      ],
      [
        "04/09/2026",
        "Boleto Amigo",
        "META (FACEBOOK E INSTAGRAM)",
        "FACEBOOK CNPJ: 13.347.016/0001-17",
        -3000,
        "A_PAGAR"
      ],
      [
        "28/08/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "DOCK INSTITUIÇÃO DE PAGAMENTO S.A",
        -49,
        "A_PAGAR"
      ],
      [
        "28/08/2026",
        "Boleto Amigo",
        "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL",
        -630,
        "A_PAGAR"
      ],
      [
        "28/08/2026",
        "Boleto Amigo",
        "ENERGIA",
        "NEOENERGIA",
        -7.36,
        "A_PAGAR"
      ],
      [
        "27/08/2026",
        "Boleto Amigo",
        "PAGAMENTO DE VALE TRANSPORTE",
        "SEMOB SECRETARIA DE ESTADO DE TRANSPORTE E MODILIDADE DO DF",
        -209,
        "A_PAGAR"
      ],
      [
        "20/08/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "ALGAR TELECOM S/A",
        -800,
        "A_PAGAR"
      ],
      [
        "20/08/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "ALGAR TELECOM S/A",
        -467.76,
        "A_PAGAR"
      ],
      [
        "18/08/2026",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "18/08/2026",
        "Boleto Amigo",
        "INSS",
        "MINISTERIO DA PREVIDENCIA (INSS)",
        -1078.83,
        "A_PAGAR"
      ],
      [
        "18/08/2026",
        "Boleto Amigo",
        "FGTS",
        "CAIXA ECONOMICA FEDERAL",
        -452.04,
        "A_PAGAR"
      ],
      [
        "16/08/2026",
        "Boleto Amigo",
        "SIMPLES",
        "SIMPLES - RECEITA FEDERAL",
        -0.01,
        "A_PAGAR"
      ],
      [
        "16/08/2026",
        "Boleto Amigo",
        "OUTROS IMPOSTOS",
        "MINISTERIO DA FAZENDA (IRRF)",
        -0.01,
        "A_PAGAR"
      ],
      [
        "10/08/2026",
        "Boleto Amigo",
        "OUTRAS DESPESAS",
        "BRXNQ- TELECOMUNICAÇÕES- LTDA",
        -180.8,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Boleto Amigo",
        "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "HUGO LEONARDO MOURA",
        -2500,
        "A_PAGAR"
      ],
      [
        "06/08/2026",
        "Boleto Amigo",
        "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "MARIA EDUARDA ANACLETO",
        -2561.23,
        "A_PAGAR"
      ],
      [
        "05/08/2026",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -470.98,
        "A_PAGAR"
      ],
      [
        "05/08/2026",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2246.08,
        "A_PAGAR"
      ],
      [
        "05/08/2026",
        "Boleto Amigo",
        "CONDOMÍNIO",
        "CONDOMINIO DO EDIFICIO SUPER CENTER VENANCIO 2000",
        -1123.44,
        "A_PAGAR"
      ],
      [
        "04/08/2026",
        "Boleto Amigo",
        "LIMPEZA E HIGIENIZAÇÃO ESCRITÓRIO",
        "ISMAILDE E SOUZA",
        -650,
        "A_PAGAR"
      ],
      [
        "04/08/2026",
        "Boleto Amigo",
        "META (FACEBOOK E INSTAGRAM)",
        "FACEBOOK CNPJ: 13.347.016/0001-17",
        -3000,
        "A_PAGAR"
      ],
      [
        "02/08/2026",
        "Boleto Amigo",
        "RESSARCIMENTO DE DESPESAS DE CUSTOS OPERACIONAIS (TAG/DF)",
        "ECONOMY ASSESSORIA - TAGUATINGA",
        -0.01,
        "A_PAGAR"
      ],
      [
        "01/08/2026",
        "Boleto Amigo",
        "FUNDO DE CAIXA ECONOMY (CONTA SIMPLES)",
        "DOCK IP S.A FUNDO DE CAIXA E INVESTIMENTOS",
        -0.01,
        "A_PAGAR"
      ],
      [
        "28/07/2026",
        "Boleto Amigo",
        "ENERGIA",
        "NEOENERGIA",
        -7.36,
        "A_PAGAR"
      ],
      [
        "28/07/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "DOCK INSTITUIÇÃO DE PAGAMENTO S.A",
        -49,
        "A_PAGAR"
      ],
      [
        "28/07/2026",
        "Boleto Amigo",
        "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL",
        -630,
        "A_PAGAR"
      ],
      [
        "27/07/2026",
        "Boleto Amigo",
        "PAGAMENTO DE VALE TRANSPORTE",
        "SEMOB SECRETARIA DE ESTADO DE TRANSPORTE E MODILIDADE DO DF",
        -209,
        "A_PAGAR"
      ],
      [
        "20/07/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "ALGAR TELECOM S/A",
        -800,
        "A_PAGAR"
      ],
      [
        "20/07/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "ALGAR TELECOM S/A",
        -467.76,
        "A_PAGAR"
      ],
      [
        "18/07/2026",
        "Boleto Amigo",
        "INSS",
        "MINISTERIO DA PREVIDENCIA (INSS)",
        -1078.83,
        "A_PAGAR"
      ],
      [
        "18/07/2026",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "18/07/2026",
        "Boleto Amigo",
        "FGTS",
        "CAIXA ECONOMICA FEDERAL",
        -452.04,
        "A_PAGAR"
      ],
      [
        "16/07/2026",
        "Boleto Amigo",
        "OUTROS IMPOSTOS",
        "MINISTERIO DA FAZENDA (IRRF)",
        -0.01,
        "A_PAGAR"
      ],
      [
        "16/07/2026",
        "Boleto Amigo",
        "SIMPLES",
        "SIMPLES - RECEITA FEDERAL",
        -0.01,
        "A_PAGAR"
      ],
      [
        "10/07/2026",
        "Boleto Amigo",
        "OUTRAS DESPESAS",
        "BRXNQ- TELECOMUNICAÇÕES- LTDA",
        -180.8,
        "A_PAGAR"
      ],
      [
        "06/07/2026",
        "Boleto Amigo",
        "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "HUGO LEONARDO MOURA",
        -2500,
        "A_PAGAR"
      ],
      [
        "06/07/2026",
        "Boleto Amigo",
        "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "MARIA EDUARDA ANACLETO",
        -2561.23,
        "A_PAGAR"
      ],
      [
        "06/07/2026",
        "Boleto Amigo",
        "MATERIAL DE CONSUMO",
        "TUDO OFFICE LTDA",
        -325.72,
        "A_PAGAR"
      ],
      [
        "05/07/2026",
        "Boleto Amigo",
        "CONDOMÍNIO",
        "CONDOMINIO DO EDIFICIO SUPER CENTER VENANCIO 2000",
        -1123.44,
        "A_PAGAR"
      ],
      [
        "05/07/2026",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2246.08,
        "A_PAGAR"
      ],
      [
        "05/07/2026",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -470.98,
        "A_PAGAR"
      ],
      [
        "04/07/2026",
        "Boleto Amigo",
        "META (FACEBOOK E INSTAGRAM)",
        "FACEBOOK CNPJ: 13.347.016/0001-17",
        -3000,
        "A_PAGAR"
      ],
      [
        "04/07/2026",
        "Boleto Amigo",
        "LIMPEZA E HIGIENIZAÇÃO ESCRITÓRIO",
        "ISMAILDE E SOUZA",
        -650,
        "A_PAGAR"
      ],
      [
        "02/07/2026",
        "Boleto Amigo",
        "RESSARCIMENTO DE DESPESAS DE CUSTOS OPERACIONAIS (TAG/DF)",
        "ECONOMY ASSESSORIA - TAGUATINGA",
        -0.01,
        "A_PAGAR"
      ],
      [
        "01/07/2026",
        "Boleto Amigo",
        "FUNDO DE CAIXA ECONOMY (CONTA SIMPLES)",
        "DOCK IP S.A FUNDO DE CAIXA E INVESTIMENTOS",
        -0.01,
        "A_PAGAR"
      ],
      [
        "28/06/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "DOCK INSTITUIÇÃO DE PAGAMENTO S.A",
        -49,
        "A_PAGAR"
      ],
      [
        "28/06/2026",
        "Boleto Amigo",
        "ENERGIA",
        "NEOENERGIA",
        -7.36,
        "A_PAGAR"
      ],
      [
        "28/06/2026",
        "Boleto Amigo",
        "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL",
        -630,
        "A_PAGAR"
      ],
      [
        "27/06/2026",
        "Boleto Amigo",
        "PAGAMENTO DE VALE TRANSPORTE",
        "SEMOB SECRETARIA DE ESTADO DE TRANSPORTE E MODILIDADE DO DF",
        -209,
        "A_PAGAR"
      ],
      [
        "20/06/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "ALGAR TELECOM S/A",
        -467.76,
        "A_PAGAR"
      ],
      [
        "20/06/2026",
        "Boleto Amigo",
        "SISTEMAS",
        "ALGAR TELECOM S/A",
        -800,
        "A_PAGAR"
      ],
      [
        "18/06/2026",
        "Boleto Amigo",
        "EMPRESTIMOS A PAGAR",
        "ECONOMY - CONTA SIMPLES",
        -2000,
        "A_PAGAR"
      ],
      [
        "18/06/2026",
        "Boleto Amigo",
        "INSS",
        "MINISTERIO DA PREVIDENCIA (INSS)",
        -1078.83,
        "A_PAGAR"
      ],
      [
        "18/06/2026",
        "Boleto Amigo",
        "FGTS",
        "CAIXA ECONOMICA FEDERAL",
        -452.04,
        "A_PAGAR"
      ],
      [
        "16/06/2026",
        "Boleto Amigo",
        "MATERIAL DE CONSUMO",
        "TUDO OFFICE LTDA",
        -325.72,
        "A_PAGAR"
      ],
      [
        "16/06/2026",
        "Boleto Amigo",
        "OUTROS IMPOSTOS",
        "MINISTERIO DA FAZENDA (IRRF)",
        -0.01,
        "A_PAGAR"
      ],
      [
        "16/06/2026",
        "Boleto Amigo",
        "SIMPLES",
        "SIMPLES - RECEITA FEDERAL",
        -0.01,
        "A_PAGAR"
      ],
      [
        "10/06/2026",
        "Boleto Amigo",
        "OUTRAS DESPESAS",
        "BRXNQ- TELECOMUNICAÇÕES- LTDA",
        -180.8,
        "A_PAGAR"
      ],
      [
        "09/06/2026",
        "Boleto Amigo",
        "ALUGUEL DE IMPRESSORA",
        "QUALITY TOTAL LOCAÇÃO DE EQUIPAMENTOS DE INFORMATICA",
        -384.79,
        "A_PAGAR"
      ],
      [
        "09/06/2026",
        "Boleto Amigo",
        "Sem categoria",
        "-",
        -18.13,
        "PAGO"
      ],
      [
        "08/06/2026",
        "Boleto Amigo",
        "Sem categoria",
        "-",
        -7.77,
        "PAGO"
      ],
      [
        "06/06/2026",
        "Boleto Amigo",
        "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "MARIA EDUARDA ANACLETO",
        -2561.23,
        "A_PAGAR"
      ],
      [
        "06/06/2026",
        "Boleto Amigo",
        "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "HUGO LEONARDO MOURA",
        -2500,
        "A_PAGAR"
      ],
      [
        "05/06/2026",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -2246.08,
        "A_PAGAR"
      ],
      [
        "05/06/2026",
        "Boleto Amigo",
        "CONDOMÍNIO",
        "CONDOMINIO DO EDIFICIO SUPER CENTER VENANCIO 2000",
        -1234.52,
        "A_PAGAR"
      ],
      [
        "05/06/2026",
        "Boleto Amigo",
        "ALUGUEL",
        "AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA",
        -470.98,
        "A_PAGAR"
      ],
      [
        "05/06/2026",
        "Boleto Amigo",
        "Sem categoria",
        "-",
        -7.77,
        "PAGO"
      ],
      [
        "05/06/2026",
        "Boleto Amigo",
        "DESPESA DE AQUISIÇÃO DE EQUIP OU MANUTENÇÃO",
        "MERCADO LIVRE",
        -258,
        "A_PAGAR"
      ],
      [
        "04/06/2026",
        "Boleto Amigo",
        "LIMPEZA E HIGIENIZAÇÃO ESCRITÓRIO",
        "ISMAILDE E SOUZA",
        -650,
        "A_PAGAR"
      ],
      [
        "04/06/2026",
        "Boleto Amigo",
        "META (FACEBOOK E INSTAGRAM)",
        "FACEBOOK CNPJ: 13.347.016/0001-17",
        -3000,
        "A_PAGAR"
      ],
      [
        "03/06/2026",
        "Boleto Amigo",
        "Sem categoria",
        "-",
        -12.95,
        "PAGO"
      ],
      [
        "03/06/2026",
        "Boleto Amigo",
        "DESPESA DE AQUISIÇÃO DE EQUIP OU MANUTENÇÃO",
        "HUGO LEONARDO MOURA",
        -599,
        "PAGO"
      ],
      [
        "03/06/2026",
        "Boleto Amigo",
        "EMPRESA PRESTADORA DE SERVIÇOS",
        "HUGO LEONARDO MOURA",
        -64,
        "PAGO"
      ],
      [
        "02/06/2026",
        "Boleto Amigo",
        "Sem categoria",
        "-",
        -2.59,
        "PAGO"
      ],
      [
        "02/06/2026",
        "Boleto Amigo",
        "RESSARCIMENTO DE DESPESAS DE CUSTOS OPERACIONAIS (TAG/DF)",
        "ECONOMY ASSESSORIA - TAGUATINGA",
        -0.01,
        "A_PAGAR"
      ],
      [
        "02/06/2026",
        "Boleto Amigo",
        "ANÚNCIOS DE RÁDIO",
        "EMMANUEL WESLEY RAMOS DA SOUSA",
        -500,
        "PAGO"
      ],
      [
        "02/06/2026",
        "Boleto Amigo",
        "LIMPEZA E HIGIENIZAÇÃO ESCRITÓRIO",
        "MARIA LUIZA LIMEIRA P COELHO",
        -100,
        "PAGO"
      ],
      [
        "01/06/2026",
        "Boleto Amigo",
        "ENERGIA",
        "NEOENERGIA",
        -7.36,
        "A_PAGAR"
      ],
      [
        "01/06/2026",
        "Boleto Amigo",
        "Sem categoria",
        "-",
        -2.59,
        "PAGO"
      ],
      [
        "01/06/2026",
        "Boleto Amigo",
        "EMPRESA PRESTADORA DE SERVIÇOS",
        "LEANDRO HENRIQUE PEREIRA DE LIRA",
        -400,
        "A_PAGAR"
      ]
    ],
    "KPIS": {
      "TOTAL_RECEITA": 353602.71,
      "TOTAL_DESPESA": 342711.21,
      "VALOR_LIQUIDO": 10891.5,
      "MARGEM_LIQUIDA": 3.08015173300001,
      "VALOR_LIQ_SERIES": [
        -8559.69999999999,
        -10671.229999999996,
        -187.1799999999712,
        -2841.1299999999974,
        18173.099999999988,
        15554.239999999987,
        15149.130000000005,
        8149.829999999998,
        4023.199999999997,
        -4901.870000000001,
        -8779.939999999999,
        -14216.95
      ]
    },
    "RECEITA_DIA": [
      3590.6100000000006,
      8571.880000000001,
      3664.6899999999996,
      6993.1,
      12442.980000000001,
      9996.2,
      5679.09,
      5412.080000000001,
      7555.97,
      48411.68999999999,
      11648.66,
      10794.739999999998,
      7239.38,
      11176.24,
      19733.940000000006,
      3414.64,
      3374.53,
      3850.06,
      3737.2599999999998,
      33566.86,
      2255.2000000000003,
      6102.639999999999,
      6257.17,
      6933.929999999999,
      70447.17,
      8755.960000000001,
      14468.98,
      6842.849999999999,
      4567.66,
      5316.55,
      800
    ],
    "DESPESA_DIA": [
      2326.11,
      19038.050000000003,
      5196.65,
      46941.5,
      53401.209999999985,
      44294.79,
      16309.85,
      2012.97,
      12370.62,
      8937.439999999999,
      11072.27,
      3409.0899999999997,
      1702.8699999999997,
      1752.6999999999996,
      4980.91,
      7178.830000000001,
      218.13,
      31977.660000000007,
      786.6999999999999,
      16110.240000000003,
      10.36,
      466.14,
      228.48999999999998,
      11956.900000000001,
      2491.67,
      1012.56,
      19816.460000000003,
      7527.78,
      7063.54,
      2116.13,
      2.59
    ],
    "SALDOS_MES": [
      -8559.69999999999,
      -19230.929999999986,
      -19418.109999999957,
      -22259.239999999954,
      -4086.1399999999667,
      11468.10000000002,
      26617.230000000025,
      34767.06000000003,
      38790.260000000024,
      33888.39000000002,
      25108.450000000023,
      10891.500000000022
    ],
    "FLUXO_RECEITA": [
      {
        "cat": "VENDA DE PRODUTOS/ SERVIÇOS",
        "values": [
          44210.88000000001,
          35091.350000000006,
          42240.13000000003,
          42924.380000000005,
          48475.18,
          36831.54999999999,
          33901.41,
          26576.389999999996,
          22449.739999999998,
          13524.67,
          6407.020000000001,
          970.01
        ]
      }
    ],
    "FLUXO_DESPESA": [
      {
        "cat": "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "values": [
          -2108.78,
          -2561.23,
          -2724.57,
          -6154.96,
          -6495.88,
          -5061.23,
          -5061.23,
          -5061.23,
          -5061.23,
          -5061.23,
          -5061.23,
          -5061.23
        ]
      },
      {
        "cat": "FUNDO DE CAIXA ECONOMY (CONTA SIMPLES)",
        "values": [
          -14162.64,
          -7737.84,
          -9222.3,
          -10955.52,
          -2029.27,
          -0.01,
          -0.01,
          -0.01,
          0,
          0,
          0,
          0
        ]
      },
      {
        "cat": "META (FACEBOOK E INSTAGRAM)",
        "values": [
          -53.9,
          -103.9,
          -3000,
          -5000,
          -6000,
          -3000,
          -3000,
          -3000,
          -3000,
          -3000,
          -3000,
          -3000
        ]
      },
      {
        "cat": "ALUGUEL",
        "values": [
          -2312.59,
          -2312.59,
          -2312.59,
          -2312.59,
          -2783.57,
          -2717.06,
          -2717.06,
          -2717.06,
          -2717.06,
          -2717.06,
          -2312.59,
          -2312.59
        ]
      },
      {
        "cat": "ANÚNCIOS DE TELEVISÃO",
        "values": [
          -4000,
          -15500,
          -4500,
          -500,
          -500,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      }
    ],
    "COMP_DATA": [
      {
        "tipo": "Receita",
        "isHeader": true,
        "d1": 121542.36000000018,
        "d2": 128231.11000000015
      },
      {
        "tipo": "VENDA DE PRODUTOS/ SERVIÇOS",
        "parent": "Receita",
        "d1": 121542.36000000018,
        "d2": 128231.11000000015
      },
      {
        "tipo": "Despesa",
        "isHeader": true,
        "d1": -140960.4699999999,
        "d2": -97344.9
      },
      {
        "tipo": "TARIFAS BANCÁRIAS",
        "parent": "Despesa",
        "d1": -758.65,
        "d2": -467.78
      },
      {
        "tipo": "CONFRATENIZAÇÃO",
        "parent": "Despesa",
        "d1": -1749.4,
        "d2": -110
      },
      {
        "tipo": "DESPESA DE AQUISIÇÃO DE EQUIP OU MANUTENÇÃO",
        "parent": "Despesa",
        "d1": -238.79,
        "d2": -1066.9
      },
      {
        "tipo": "COMISSÃO INDICAÇÃO DE CLIENTES",
        "parent": "Despesa",
        "d1": -2000,
        "d2": -800
      },
      {
        "tipo": "PAGAMENTO DE VALE TRANSPORTE",
        "parent": "Despesa",
        "d1": -1050.6599999999999,
        "d2": -726
      },
      {
        "tipo": "PAGAMENTO DE VALE ALIMENTAÇÃO",
        "parent": "Despesa",
        "d1": -3220,
        "d2": -3015
      },
      {
        "tipo": "SISTEMAS",
        "parent": "Despesa",
        "d1": -3931.7,
        "d2": -2455.55
      },
      {
        "tipo": "RESCISÃO CONTRATUAL COM DEVOLUÇÃO DE VALORES",
        "parent": "Despesa",
        "d1": -4118.76,
        "d2": -1250
      },
      {
        "tipo": "EMPRESTIMOS A PAGAR",
        "parent": "Despesa",
        "d1": -6000,
        "d2": -4000
      },
      {
        "tipo": "ANÚNCIOS DE TELEVISÃO",
        "parent": "Despesa",
        "d1": -24000,
        "d2": -1000
      },
      {
        "tipo": "INSS",
        "parent": "Despesa",
        "d1": -694.29,
        "d2": -2280.23
      },
      {
        "tipo": "FGTS",
        "parent": "Despesa",
        "d1": -893.66,
        "d2": -1520.6499999999999
      },
      {
        "tipo": "SIMPLES",
        "parent": "Despesa",
        "d1": -675.01,
        "d2": -825.02
      },
      {
        "tipo": "OUTRAS DESPESAS",
        "parent": "Despesa",
        "d1": -17183.37,
        "d2": -632.4000000000001
      },
      {
        "tipo": "TAXA DE EXAME ADMISSIONAL/ DEMISSIONAL",
        "parent": "Despesa",
        "d1": -25,
        "d2": 0
      },
      {
        "tipo": "ALUGUEL DE IMPRESSORA",
        "parent": "Despesa",
        "d1": -1154.3700000000001,
        "d2": -1154.3700000000001
      },
      {
        "tipo": "FUNDO DE CAIXA ECONOMY (CONTA SIMPLES)",
        "parent": "Despesa",
        "d1": -31122.78,
        "d2": -12984.800000000001
      },
      {
        "tipo": "PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS",
        "parent": "Despesa",
        "d1": -7394.58,
        "d2": -17712.07
      },
      {
        "tipo": "RESCISÃO DE FUNCIONÁRIOS",
        "parent": "Despesa",
        "d1": -1089.91,
        "d2": 0
      },
      {
        "tipo": "CONDOMÍNIO",
        "parent": "Despesa",
        "d1": -3780.66,
        "d2": -3560.9700000000003
      },
      {
        "tipo": "ALUGUEL",
        "parent": "Despesa",
        "d1": -6937.77,
        "d2": -7813.219999999999
      },
      {
        "tipo": "LIMPEZA E HIGIENIZAÇÃO ESCRITÓRIO",
        "parent": "Despesa",
        "d1": -1950,
        "d2": -2100
      },
      {
        "tipo": "EMPRESA PRESTADORA DE SERVIÇOS",
        "parent": "Despesa",
        "d1": -7533.11,
        "d2": -2800.98
      },
      {
        "tipo": "META (FACEBOOK E INSTAGRAM)",
        "parent": "Despesa",
        "d1": -3157.8,
        "d2": -14000
      },
      {
        "tipo": "RESSARCIMENTO DE DESPESAS DE CUSTOS OPERACIONAIS (TAG/DF)",
        "parent": "Despesa",
        "d1": -7909.629999999999,
        "d2": -7233.129999999999
      },
      {
        "tipo": "UNIFORMES",
        "parent": "Despesa",
        "d1": -700,
        "d2": -550
      },
      {
        "tipo": "OUTROS IMPOSTOS",
        "parent": "Despesa",
        "d1": -665.87,
        "d2": -0.02
      },
      {
        "tipo": "MATERIAL DE CONSUMO",
        "parent": "Despesa",
        "d1": -212.87,
        "d2": -804.5500000000001
      },
      {
        "tipo": "DARF",
        "parent": "Despesa",
        "d1": -311.83,
        "d2": 0
      },
      {
        "tipo": "ANÚNCIOS DE RÁDIO",
        "parent": "Despesa",
        "d1": -500,
        "d2": -500
      },
      {
        "tipo": "ENERGIA",
        "parent": "Despesa",
        "d1": 0,
        "d2": -43.290000000000006
      },
      {
        "tipo": "Sem categoria",
        "parent": "Despesa",
        "d1": 0,
        "d2": -238.27999999999997
      },
      {
        "tipo": "PAGAMENTO DE FÉRIAS",
        "parent": "Despesa",
        "d1": 0,
        "d2": -5430.69
      },
      {
        "tipo": "MATERIAL DE ESCRITÓRIO",
        "parent": "Despesa",
        "d1": 0,
        "d2": -269
      }
    ]
  }
};

// ALL_TX: lista flat de TODAS as transacoes normalizadas (despesa + receita,
// realizadas + a pagar + canceladas excluidas). Usada pra cross-filter real
// — pagina recalcula KPIs/charts/tabelas em runtime via aggregateTx().
// Cada row eh tupla compacta pra reduzir tamanho do bundle:
// [kind, mes, dia, categoria, cliente, valor, realizado, fornecedor, centroCusto, regime, tags]
// regime: 'c' = caixa, 'k' = competencia (compacto pra economizar bytes)
const ALL_TX = [["r","2026-11",25,"VENDA DE PRODUTOS/ SERVIÇOS","ALEXANDRE PIRES BESSA",450,0,"","Boleto Amigo","c",""],["r","2026-05",28,"VENDA DE PRODUTOS/ SERVIÇOS","ALEXANDRE PIRES BESSA",450,0,"","Boleto Amigo","k",""],["r","2026-11",25,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO HERNANDO FARIAS",546.05,0,"","Boleto Amigo","c",""],["r","2026-05",25,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO HERNANDO FARIAS",546.05,0,"","Boleto Amigo","k",""],["r","2026-11",25,"VENDA DE PRODUTOS/ SERVIÇOS","GABRIEL DA GUIA SENA",450,0,"","Boleto Amigo","c",""],["r","2026-05",14,"VENDA DE PRODUTOS/ SERVIÇOS","GABRIEL DA GUIA SENA",450,0,"","Boleto Amigo","k",""],["r","2026-11",25,"VENDA DE PRODUTOS/ SERVIÇOS","TALES FERREIRA DE LIMA",450,0,"","Boleto Amigo","c",""],["r","2026-05",7,"VENDA DE PRODUTOS/ SERVIÇOS","TALES FERREIRA DE LIMA",450,0,"","Boleto Amigo","k",""],["r","2026-11",20,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA LEMOS DA SILVA COSTA",450,0,"","Boleto Amigo","c",""],["r","2026-05",20,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA LEMOS DA SILVA COSTA",450,0,"","Boleto Amigo","k",""],["r","2026-11",20,"VENDA DE PRODUTOS/ SERVIÇOS","JAIR COSTA LIMA",519.48,0,"","Boleto Amigo","c",""],["r","2026-05",8,"VENDA DE PRODUTOS/ SERVIÇOS","JAIR COSTA LIMA",519.48,0,"","Boleto Amigo","k",""],["r","2026-11",15,"VENDA DE PRODUTOS/ SERVIÇOS","SHIRLIANE DA SILVA BEZERRA",450,0,"","Boleto Amigo","c",""],["r","2026-05",6,"VENDA DE PRODUTOS/ SERVIÇOS","SHIRLIANE DA SILVA BEZERRA",450,0,"","Boleto Amigo","k",""],["r","2026-11",15,"VENDA DE PRODUTOS/ SERVIÇOS","JOSEILTON BERTO BIZERRA",450,0,"","Boleto Amigo","c",""],["r","2026-05",13,"VENDA DE PRODUTOS/ SERVIÇOS","JOSEILTON BERTO BIZERRA",450,0,"","Boleto Amigo","k",""],["r","2026-11",10,"VENDA DE PRODUTOS/ SERVIÇOS","JULIANA PEREIRA DOS SANTOS",450,0,"","Boleto Amigo","c",""],["r","2026-05",11,"VENDA DE PRODUTOS/ SERVIÇOS","JULIANA PEREIRA DOS SANTOS",450,0,"","Boleto Amigo","k",""],["r","2026-11",10,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA AURILENE DA SILVA CAVALCANTE",250,0,"","Boleto Amigo","c",""],["r","2026-05",11,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA AURILENE DA SILVA CAVALCANTE",250,0,"","Boleto Amigo","k",""],["r","2026-11",10,"VENDA DE PRODUTOS/ SERVIÇOS","MARILZA ARAUJO OLIVEIRA",503.76,0,"","Boleto Amigo","c",""],["r","2026-05",11,"VENDA DE PRODUTOS/ SERVIÇOS","MARILZA ARAUJO OLIVEIRA",503.76,0,"","Boleto Amigo","k",""],["r","2026-11",10,"VENDA DE PRODUTOS/ SERVIÇOS","CLERTON CUNHA GOMES",467.72,0,"","Boleto Amigo","c",""],["r","2026-05",6,"VENDA DE PRODUTOS/ SERVIÇOS","CLERTON CUNHA GOMES",467.72,0,"","Boleto Amigo","k",""],["r","2026-10",25,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO HERNANDO FARIAS",546.06,0,"","Boleto Amigo","c",""],["r","2026-05",25,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO HERNANDO FARIAS",546.06,0,"","Boleto Amigo","k",""],["r","2026-10",25,"VENDA DE PRODUTOS/ SERVIÇOS","ANDRE LUIZ MARQUES MARTINS",450,0,"","Boleto Amigo","c",""],["r","2026-04",24,"VENDA DE PRODUTOS/ SERVIÇOS","ANDRE LUIZ MARQUES MARTINS",450,0,"","Boleto Amigo","k",""],["r","2026-10",25,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCYVANIA GOMES CHAGAS",884.3,0,"","Boleto Amigo","c",""],["r","2026-04",15,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCYVANIA GOMES CHAGAS",884.3,0,"","Boleto Amigo","k",""],["r","2026-10",25,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE AUGUSTO SOARES SERRAO",450,0,"","Boleto Amigo","c",""],["r","2026-04",10,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE AUGUSTO SOARES SERRAO",450,0,"","Boleto Amigo","k",""],["r","2026-10",25,"VENDA DE PRODUTOS/ SERVIÇOS","MARLI MARIA DA SILVA SANTOS",450,0,"","Boleto Amigo","c",""],["r","2026-04",17,"VENDA DE PRODUTOS/ SERVIÇOS","MARLI MARIA DA SILVA SANTOS",450,0,"","Boleto Amigo","k",""],["r","2026-10",25,"VENDA DE PRODUTOS/ SERVIÇOS","ALEXANDRE PIRES BESSA",450,0,"","Boleto Amigo","c",""],["r","2026-05",28,"VENDA DE PRODUTOS/ SERVIÇOS","ALEXANDRE PIRES BESSA",450,0,"","Boleto Amigo","k",""],["r","2026-10",25,"VENDA DE PRODUTOS/ SERVIÇOS","IDELFONSO RODRIGUES CAMPOS",416.65,0,"","Boleto Amigo","c",""],["r","2026-04",23,"VENDA DE PRODUTOS/ SERVIÇOS","IDELFONSO RODRIGUES CAMPOS",416.65,0,"","Boleto Amigo","k",""],["r","2026-10",25,"VENDA DE PRODUTOS/ SERVIÇOS","MICHAEL DE JESUS DOS SANTOS SILVA",450,0,"","Boleto Amigo","c",""],["r","2026-04",23,"VENDA DE PRODUTOS/ SERVIÇOS","MICHAEL DE JESUS DOS SANTOS SILVA",450,0,"","Boleto Amigo","k",""],["r","2026-10",25,"VENDA DE PRODUTOS/ SERVIÇOS","GILSON CESAR BARBOSA",416.65,0,"","Boleto Amigo","c",""],["r","2026-04",15,"VENDA DE PRODUTOS/ SERVIÇOS","GILSON CESAR BARBOSA",416.65,0,"","Boleto Amigo","k",""],["r","2026-10",25,"VENDA DE PRODUTOS/ SERVIÇOS","GABRIEL DA GUIA SENA",450,0,"","Boleto Amigo","c",""],["r","2026-05",14,"VENDA DE PRODUTOS/ SERVIÇOS","GABRIEL DA GUIA SENA",450,0,"","Boleto Amigo","k",""],["r","2026-10",25,"VENDA DE PRODUTOS/ SERVIÇOS","TALES FERREIRA DE LIMA",450,0,"","Boleto Amigo","c",""],["r","2026-05",7,"VENDA DE PRODUTOS/ SERVIÇOS","TALES FERREIRA DE LIMA",450,0,"","Boleto Amigo","k",""],["r","2026-10",24,"VENDA DE PRODUTOS/ SERVIÇOS","ILA MARIA MACIEL NOGUEIRA",466.65,0,"","Boleto Amigo","c",""],["r","2026-04",24,"VENDA DE PRODUTOS/ SERVIÇOS","ILA MARIA MACIEL NOGUEIRA",466.65,0,"","Boleto Amigo","k",""],["r","2026-10",20,"VENDA DE PRODUTOS/ SERVIÇOS","JAIR COSTA LIMA",519.47,0,"","Boleto Amigo","c",""],["r","2026-05",8,"VENDA DE PRODUTOS/ SERVIÇOS","JAIR COSTA LIMA",519.47,0,"","Boleto Amigo","k",""],["r","2026-10",20,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA LEMOS DA SILVA COSTA",450,0,"","Boleto Amigo","c",""],["r","2026-05",20,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA LEMOS DA SILVA COSTA",450,0,"","Boleto Amigo","k",""],["r","2026-10",15,"VENDA DE PRODUTOS/ SERVIÇOS","JOSEILTON BERTO BIZERRA",450,0,"","Boleto Amigo","c",""],["r","2026-05",13,"VENDA DE PRODUTOS/ SERVIÇOS","JOSEILTON BERTO BIZERRA",450,0,"","Boleto Amigo","k",""],["r","2026-10",15,"VENDA DE PRODUTOS/ SERVIÇOS","SHIRLIANE DA SILVA BEZERRA",450,0,"","Boleto Amigo","c",""],["r","2026-05",6,"VENDA DE PRODUTOS/ SERVIÇOS","SHIRLIANE DA SILVA BEZERRA",450,0,"","Boleto Amigo","k",""],["r","2026-10",15,"VENDA DE PRODUTOS/ SERVIÇOS","EDNIVALDO MESQUITA PEREIRA",450,0,"","Boleto Amigo","c",""],["r","2026-04",9,"VENDA DE PRODUTOS/ SERVIÇOS","EDNIVALDO MESQUITA PEREIRA",450,0,"","Boleto Amigo","k",""],["r","2026-10",15,"VENDA DE PRODUTOS/ SERVIÇOS","ONADINA GOMES OLIVEIRA",450,0,"","Boleto Amigo","c",""],["r","2026-04",6,"VENDA DE PRODUTOS/ SERVIÇOS","ONADINA GOMES OLIVEIRA",450,0,"","Boleto Amigo","k",""],["r","2026-10",10,"VENDA DE PRODUTOS/ SERVIÇOS","RITA MARIA DA COSTA PINTO",450,0,"","Boleto Amigo","c",""],["r","2026-04",10,"VENDA DE PRODUTOS/ SERVIÇOS","RITA MARIA DA COSTA PINTO",450,0,"","Boleto Amigo","k",""],["r","2026-10",10,"VENDA DE PRODUTOS/ SERVIÇOS","LUCIVANIA DE OLIVEIRA DO NASCIMENTO",450,0,"","Boleto Amigo","c",""],["r","2026-04",10,"VENDA DE PRODUTOS/ SERVIÇOS","LUCIVANIA DE OLIVEIRA DO NASCIMENTO",450,0,"","Boleto Amigo","k",""],["r","2026-10",10,"VENDA DE PRODUTOS/ SERVIÇOS","CLERTON CUNHA GOMES",467.75,0,"","Boleto Amigo","c",""],["r","2026-05",6,"VENDA DE PRODUTOS/ SERVIÇOS","CLERTON CUNHA GOMES",467.75,0,"","Boleto Amigo","k",""],["r","2026-10",10,"VENDA DE PRODUTOS/ SERVIÇOS","EDILSON DE OLIVEIRA PATOS",333.35,0,"","Boleto Amigo","c",""],["r","2026-04",17,"VENDA DE PRODUTOS/ SERVIÇOS","EDILSON DE OLIVEIRA PATOS",333.35,0,"","Boleto Amigo","k",""],["r","2026-10",10,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA MAIARA LIMA MOREIRA",450,0,"","Boleto Amigo","c",""],["r","2026-04",1,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA MAIARA LIMA MOREIRA",450,0,"","Boleto Amigo","k",""],["r","2026-10",10,"VENDA DE PRODUTOS/ SERVIÇOS","JULIANA PEREIRA DOS SANTOS",450,0,"","Boleto Amigo","c",""],["r","2026-05",11,"VENDA DE PRODUTOS/ SERVIÇOS","JULIANA PEREIRA DOS SANTOS",450,0,"","Boleto Amigo","k",""],["r","2026-10",10,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA AURILENE DA SILVA CAVALCANTE",250,0,"","Boleto Amigo","c",""],["r","2026-05",11,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA AURILENE DA SILVA CAVALCANTE",250,0,"","Boleto Amigo","k",""],["r","2026-10",10,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GILSON CASTRO DE ALMEIDA",450,0,"","Boleto Amigo","c",""],["r","2026-04",2,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GILSON CASTRO DE ALMEIDA",450,0,"","Boleto Amigo","k",""],["r","2026-10",10,"VENDA DE PRODUTOS/ SERVIÇOS","MARILZA ARAUJO OLIVEIRA",503.78,0,"","Boleto Amigo","c",""],["r","2026-05",11,"VENDA DE PRODUTOS/ SERVIÇOS","MARILZA ARAUJO OLIVEIRA",503.78,0,"","Boleto Amigo","k",""],["r","2026-09",25,"VENDA DE PRODUTOS/ SERVIÇOS","MICHAEL DE JESUS DOS SANTOS SILVA",450,0,"","Boleto Amigo","c",""],["r","2026-04",23,"VENDA DE PRODUTOS/ SERVIÇOS","MICHAEL DE JESUS DOS SANTOS SILVA",450,0,"","Boleto Amigo","k",""],["r","2026-09",25,"VENDA DE PRODUTOS/ SERVIÇOS","LILIAN LIMA DIAS",450,0,"","Boleto Amigo","c",""],["r","2026-03",3,"VENDA DE PRODUTOS/ SERVIÇOS","LILIAN LIMA DIAS",450,0,"","Boleto Amigo","k",""],["r","2026-09",25,"VENDA DE PRODUTOS/ SERVIÇOS","IDELFONSO RODRIGUES CAMPOS",416.67,0,"","Boleto Amigo","c",""],["r","2026-04",23,"VENDA DE PRODUTOS/ SERVIÇOS","IDELFONSO RODRIGUES CAMPOS",416.67,0,"","Boleto Amigo","k",""],["r","2026-09",25,"VENDA DE PRODUTOS/ SERVIÇOS","UALAS NEVES SILVA",450,0,"","Boleto Amigo","c",""],["r","2026-03",31,"VENDA DE PRODUTOS/ SERVIÇOS","UALAS NEVES SILVA",450,0,"","Boleto Amigo","k",""],["r","2026-09",25,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO HERNANDO FARIAS",546.06,0,"","Boleto Amigo","c",""],["r","2026-05",25,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO HERNANDO FARIAS",546.06,0,"","Boleto Amigo","k",""],["r","2026-09",25,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCYVANIA GOMES CHAGAS",884.33,0,"","Boleto Amigo","c",""],["r","2026-04",15,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCYVANIA GOMES CHAGAS",884.33,0,"","Boleto Amigo","k",""],["r","2026-09",25,"VENDA DE PRODUTOS/ SERVIÇOS","CIBERLANIA MARIA DE ANDRADE",100,0,"","Boleto Amigo","c",""],["r","2026-05",21,"VENDA DE PRODUTOS/ SERVIÇOS","CIBERLANIA MARIA DE ANDRADE",100,0,"","Boleto Amigo","k",""],["r","2026-09",25,"VENDA DE PRODUTOS/ SERVIÇOS","GILSON CESAR BARBOSA",416.67,0,"","Boleto Amigo","c",""],["r","2026-04",15,"VENDA DE PRODUTOS/ SERVIÇOS","GILSON CESAR BARBOSA",416.67,0,"","Boleto Amigo","k",""],["r","2026-09",25,"VENDA DE PRODUTOS/ SERVIÇOS","ATHIRSON BRENDO SOUSA SILVA",450,0,"","Boleto Amigo","c",""],["r","2026-03",18,"VENDA DE PRODUTOS/ SERVIÇOS","ATHIRSON BRENDO SOUSA SILVA",450,0,"","Boleto Amigo","k",""],["r","2026-09",25,"VENDA DE PRODUTOS/ SERVIÇOS","ALEXANDRE PIRES BESSA",450,0,"","Boleto Amigo","c",""],["r","2026-05",28,"VENDA DE PRODUTOS/ SERVIÇOS","ALEXANDRE PIRES BESSA",450,0,"","Boleto Amigo","k",""],["r","2026-09",25,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE AUGUSTO SOARES SERRAO",450,0,"","Boleto Amigo","c",""],["r","2026-04",10,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE AUGUSTO SOARES SERRAO",450,0,"","Boleto Amigo","k",""],["r","2026-09",25,"VENDA DE PRODUTOS/ SERVIÇOS","ANDRE LUIZ MARQUES MARTINS",450,0,"","Boleto Amigo","c",""],["r","2026-04",24,"VENDA DE PRODUTOS/ SERVIÇOS","ANDRE LUIZ MARQUES MARTINS",450,0,"","Boleto Amigo","k",""],["r","2026-09",25,"VENDA DE PRODUTOS/ SERVIÇOS","RAFAEL ALVES DA SILVA",450,0,"","Boleto Amigo","c",""],["r","2026-03",9,"VENDA DE PRODUTOS/ SERVIÇOS","RAFAEL ALVES DA SILVA",450,0,"","Boleto Amigo","k",""],["r","2026-09",25,"VENDA DE PRODUTOS/ SERVIÇOS","GABRIEL DA GUIA SENA",450,0,"","Boleto Amigo","c",""],["r","2026-05",14,"VENDA DE PRODUTOS/ SERVIÇOS","GABRIEL DA GUIA SENA",450,0,"","Boleto Amigo","k",""],["r","2026-09",25,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO DIONISIO GADELHA DA SILVA",450,0,"","Boleto Amigo","c",""],["r","2026-03",24,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO DIONISIO GADELHA DA SILVA",450,0,"","Boleto Amigo","k",""],["r","2026-09",25,"VENDA DE PRODUTOS/ SERVIÇOS","TALES FERREIRA DE LIMA",450,0,"","Boleto Amigo","c",""],["r","2026-05",7,"VENDA DE PRODUTOS/ SERVIÇOS","TALES FERREIRA DE LIMA",450,0,"","Boleto Amigo","k",""],["r","2026-09",25,"VENDA DE PRODUTOS/ SERVIÇOS","MARLI MARIA DA SILVA SANTOS",450,0,"","Boleto Amigo","c",""],["r","2026-04",17,"VENDA DE PRODUTOS/ SERVIÇOS","MARLI MARIA DA SILVA SANTOS",450,0,"","Boleto Amigo","k",""],["r","2026-09",24,"VENDA DE PRODUTOS/ SERVIÇOS","ILA MARIA MACIEL NOGUEIRA",466.67,0,"","Boleto Amigo","c",""],["r","2026-04",24,"VENDA DE PRODUTOS/ SERVIÇOS","ILA MARIA MACIEL NOGUEIRA",466.67,0,"","Boleto Amigo","k",""],["r","2026-09",20,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA LEMOS DA SILVA COSTA",450,0,"","Boleto Amigo","c",""],["r","2026-05",20,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA LEMOS DA SILVA COSTA",450,0,"","Boleto Amigo","k",""],["r","2026-09",20,"VENDA DE PRODUTOS/ SERVIÇOS","JUCIVALDO RODRIGUES DURANS",450,0,"","Boleto Amigo","c",""],["r","2026-03",20,"VENDA DE PRODUTOS/ SERVIÇOS","JUCIVALDO RODRIGUES DURANS",450,0,"","Boleto Amigo","k",""],["r","2026-09",20,"VENDA DE PRODUTOS/ SERVIÇOS","KAIO RAMOS DE SOUZA BORGES",450,0,"","Boleto Amigo","c",""],["r","2026-03",16,"VENDA DE PRODUTOS/ SERVIÇOS","KAIO RAMOS DE SOUZA BORGES",450,0,"","Boleto Amigo","k",""],["r","2026-09",20,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA DO SOCORRO SERAFIM",450,0,"","Boleto Amigo","c",""],["r","2026-03",6,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA DO SOCORRO SERAFIM",450,0,"","Boleto Amigo","k",""],["r","2026-09",20,"VENDA DE PRODUTOS/ SERVIÇOS","DANIELLY MAUL DA CUNHA MOURA",450,0,"","Boleto Amigo","c",""],["r","2026-03",12,"VENDA DE PRODUTOS/ SERVIÇOS","DANIELLY MAUL DA CUNHA MOURA",450,0,"","Boleto Amigo","k",""],["r","2026-09",20,"VENDA DE PRODUTOS/ SERVIÇOS","LUIZ GABRIEL DE SOUZA DE SOUZA",375,0,"","Boleto Amigo","c",""],["r","2026-03",16,"VENDA DE PRODUTOS/ SERVIÇOS","LUIZ GABRIEL DE SOUZA DE SOUZA",375,0,"","Boleto Amigo","k",""],["r","2026-09",20,"VENDA DE PRODUTOS/ SERVIÇOS","JAIR COSTA LIMA",519.47,0,"","Boleto Amigo","c",""],["r","2026-05",8,"VENDA DE PRODUTOS/ SERVIÇOS","JAIR COSTA LIMA",519.47,0,"","Boleto Amigo","k",""],["r","2026-09",15,"VENDA DE PRODUTOS/ SERVIÇOS","SHIRLIANE DA SILVA BEZERRA",450,0,"","Boleto Amigo","c",""],["r","2026-05",6,"VENDA DE PRODUTOS/ SERVIÇOS","SHIRLIANE DA SILVA BEZERRA",450,0,"","Boleto Amigo","k",""],["r","2026-09",15,"VENDA DE PRODUTOS/ SERVIÇOS","JOSEILTON BERTO BIZERRA",450,0,"","Boleto Amigo","c",""],["r","2026-05",13,"VENDA DE PRODUTOS/ SERVIÇOS","JOSEILTON BERTO BIZERRA",450,0,"","Boleto Amigo","k",""],["r","2026-09",15,"VENDA DE PRODUTOS/ SERVIÇOS","GRIMARIO  BRITO DE SOUSA",350,0,"","Boleto Amigo","c",""],["r","2026-03",2,"VENDA DE PRODUTOS/ SERVIÇOS","GRIMARIO  BRITO DE SOUSA",350,0,"","Boleto Amigo","k",""],["r","2026-09",15,"VENDA DE PRODUTOS/ SERVIÇOS","JOSIANE FERNANDA DE SOUZA SILVA",450,0,"","Boleto Amigo","c",""],["r","2026-03",30,"VENDA DE PRODUTOS/ SERVIÇOS","JOSIANE FERNANDA DE SOUZA SILVA",450,0,"","Boleto Amigo","k",""],["r","2026-09",15,"VENDA DE PRODUTOS/ SERVIÇOS","ONADINA GOMES OLIVEIRA",450,0,"","Boleto Amigo","c",""],["r","2026-04",6,"VENDA DE PRODUTOS/ SERVIÇOS","ONADINA GOMES OLIVEIRA",450,0,"","Boleto Amigo","k",""],["r","2026-09",15,"VENDA DE PRODUTOS/ SERVIÇOS","EDNIVALDO MESQUITA PEREIRA",450,0,"","Boleto Amigo","c",""],["r","2026-04",9,"VENDA DE PRODUTOS/ SERVIÇOS","EDNIVALDO MESQUITA PEREIRA",450,0,"","Boleto Amigo","k",""],["r","2026-09",10,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GILSON CASTRO DE ALMEIDA",450,0,"","Boleto Amigo","c",""],["r","2026-04",2,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GILSON CASTRO DE ALMEIDA",450,0,"","Boleto Amigo","k",""],["r","2026-09",10,"VENDA DE PRODUTOS/ SERVIÇOS","RITA MARIA DA COSTA PINTO",450,0,"","Boleto Amigo","c",""],["r","2026-04",10,"VENDA DE PRODUTOS/ SERVIÇOS","RITA MARIA DA COSTA PINTO",450,0,"","Boleto Amigo","k",""],["r","2026-09",10,"VENDA DE PRODUTOS/ SERVIÇOS","WILLYSON FERREIRA MATOS",450,0,"","Boleto Amigo","c",""],["r","2026-03",23,"VENDA DE PRODUTOS/ SERVIÇOS","WILLYSON FERREIRA MATOS",450,0,"","Boleto Amigo","k",""],["r","2026-09",10,"VENDA DE PRODUTOS/ SERVIÇOS","LUCIVANIA DE OLIVEIRA DO NASCIMENTO",450,0,"","Boleto Amigo","c",""],["r","2026-04",10,"VENDA DE PRODUTOS/ SERVIÇOS","LUCIVANIA DE OLIVEIRA DO NASCIMENTO",450,0,"","Boleto Amigo","k",""],["r","2026-09",10,"VENDA DE PRODUTOS/ SERVIÇOS","LUCAS DE PAIVA MONTEIRO",450,0,"","Boleto Amigo","c",""],["r","2026-03",3,"VENDA DE PRODUTOS/ SERVIÇOS","LUCAS DE PAIVA MONTEIRO",450,0,"","Boleto Amigo","k",""],["r","2026-09",10,"VENDA DE PRODUTOS/ SERVIÇOS","MARIO AUGUSTO DA SILVA SANTOS",450,0,"","Boleto Amigo","c",""],["r","2026-03",5,"VENDA DE PRODUTOS/ SERVIÇOS","MARIO AUGUSTO DA SILVA SANTOS",450,0,"","Boleto Amigo","k",""],["r","2026-09",10,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA MAIARA LIMA MOREIRA",450,0,"","Boleto Amigo","c",""],["r","2026-04",1,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA MAIARA LIMA MOREIRA",450,0,"","Boleto Amigo","k",""],["r","2026-09",10,"VENDA DE PRODUTOS/ SERVIÇOS","FERNANDO WILLIAM RIBEIRO ROCHA",450,0,"","Boleto Amigo","c",""],["r","2026-04",1,"VENDA DE PRODUTOS/ SERVIÇOS","FERNANDO WILLIAM RIBEIRO ROCHA",450,0,"","Boleto Amigo","k",""],["r","2026-09",10,"VENDA DE PRODUTOS/ SERVIÇOS","JULIANA PEREIRA DOS SANTOS",450,0,"","Boleto Amigo","c",""],["r","2026-05",11,"VENDA DE PRODUTOS/ SERVIÇOS","JULIANA PEREIRA DOS SANTOS",450,0,"","Boleto Amigo","k",""],["r","2026-09",10,"VENDA DE PRODUTOS/ SERVIÇOS","CLERTON CUNHA GOMES",467.75,0,"","Boleto Amigo","c",""],["r","2026-05",6,"VENDA DE PRODUTOS/ SERVIÇOS","CLERTON CUNHA GOMES",467.75,0,"","Boleto Amigo","k",""],["r","2026-09",10,"VENDA DE PRODUTOS/ SERVIÇOS","MARILZA ARAUJO OLIVEIRA",503.78,0,"","Boleto Amigo","c",""],["r","2026-05",11,"VENDA DE PRODUTOS/ SERVIÇOS","MARILZA ARAUJO OLIVEIRA",503.78,0,"","Boleto Amigo","k",""],["r","2026-09",10,"VENDA DE PRODUTOS/ SERVIÇOS","ILZA LIMA DA SILVA",450,0,"","Boleto Amigo","c",""],["r","2026-03",17,"VENDA DE PRODUTOS/ SERVIÇOS","ILZA LIMA DA SILVA",450,0,"","Boleto Amigo","k",""],["r","2026-09",10,"VENDA DE PRODUTOS/ SERVIÇOS","GRACENIRA GONCALVES DE OLIVEIRA",450,0,"","Boleto Amigo","c",""],["r","2026-03",12,"VENDA DE PRODUTOS/ SERVIÇOS","GRACENIRA GONCALVES DE OLIVEIRA",450,0,"","Boleto Amigo","k",""],["r","2026-09",10,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA AURILENE DA SILVA CAVALCANTE",250,0,"","Boleto Amigo","c",""],["r","2026-05",11,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA AURILENE DA SILVA CAVALCANTE",250,0,"","Boleto Amigo","k",""],["r","2026-09",10,"VENDA DE PRODUTOS/ SERVIÇOS","ALAN NIXON ARAGAO RIBEIRO",450,0,"","Boleto Amigo","c",""],["r","2026-03",20,"VENDA DE PRODUTOS/ SERVIÇOS","ALAN NIXON ARAGAO RIBEIRO",450,0,"","Boleto Amigo","k",""],["r","2026-09",10,"VENDA DE PRODUTOS/ SERVIÇOS","EDILSON DE OLIVEIRA PATOS",333.33,0,"","Boleto Amigo","c",""],["r","2026-04",17,"VENDA DE PRODUTOS/ SERVIÇOS","EDILSON DE OLIVEIRA PATOS",333.33,0,"","Boleto Amigo","k",""],["r","2026-09",5,"VENDA DE PRODUTOS/ SERVIÇOS","JULIETTE MONICA DA SILVA LEAO",450,0,"","Boleto Amigo","c",""],["r","2026-03",5,"VENDA DE PRODUTOS/ SERVIÇOS","JULIETTE MONICA DA SILVA LEAO",450,0,"","Boleto Amigo","k",""],["r","2026-08",25,"VENDA DE PRODUTOS/ SERVIÇOS","RAFAEL ALVES DA SILVA",450,0,"","Boleto Amigo","c",""],["r","2026-03",9,"VENDA DE PRODUTOS/ SERVIÇOS","RAFAEL ALVES DA SILVA",450,0,"","Boleto Amigo","k",""],["r","2026-08",25,"VENDA DE PRODUTOS/ SERVIÇOS","TALES FERREIRA DE LIMA",450,0,"","Boleto Amigo","c",""],["r","2026-05",7,"VENDA DE PRODUTOS/ SERVIÇOS","TALES FERREIRA DE LIMA",450,0,"","Boleto Amigo","k",""],["r","2026-08",25,"VENDA DE PRODUTOS/ SERVIÇOS","GABRIEL DA GUIA SENA",450,0,"","Boleto Amigo","c",""],["r","2026-05",14,"VENDA DE PRODUTOS/ SERVIÇOS","GABRIEL DA GUIA SENA",450,0,"","Boleto Amigo","k",""],["r","2026-08",25,"VENDA DE PRODUTOS/ SERVIÇOS","LILIAN LIMA DIAS",450,0,"","Boleto Amigo","c",""],["r","2026-03",3,"VENDA DE PRODUTOS/ SERVIÇOS","LILIAN LIMA DIAS",450,0,"","Boleto Amigo","k",""],["r","2026-08",25,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE AUGUSTO SOARES SERRAO",450,0,"","Boleto Amigo","c",""],["r","2026-04",10,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE AUGUSTO SOARES SERRAO",450,0,"","Boleto Amigo","k",""],["r","2026-08",25,"VENDA DE PRODUTOS/ SERVIÇOS","LUCIANA SILVA MEDEIROS",466.65,0,"","Boleto Amigo","c",""],["r","2026-02",10,"VENDA DE PRODUTOS/ SERVIÇOS","LUCIANA SILVA MEDEIROS",466.65,0,"","Boleto Amigo","k",""],["r","2026-08",25,"VENDA DE PRODUTOS/ SERVIÇOS","UALAS NEVES SILVA",450,0,"","Boleto Amigo","c",""],["r","2026-03",31,"VENDA DE PRODUTOS/ SERVIÇOS","UALAS NEVES SILVA",450,0,"","Boleto Amigo","k",""],["r","2026-08",25,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO DIONISIO GADELHA DA SILVA",450,0,"","Boleto Amigo","c",""],["r","2026-03",24,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO DIONISIO GADELHA DA SILVA",450,0,"","Boleto Amigo","k",""],["r","2026-08",25,"VENDA DE PRODUTOS/ SERVIÇOS","ATHIRSON BRENDO SOUSA SILVA",450,0,"","Boleto Amigo","c",""],["r","2026-03",18,"VENDA DE PRODUTOS/ SERVIÇOS","ATHIRSON BRENDO SOUSA SILVA",450,0,"","Boleto Amigo","k",""],["r","2026-08",25,"VENDA DE PRODUTOS/ SERVIÇOS","MICHAEL DE JESUS DOS SANTOS SILVA",450,0,"","Boleto Amigo","c",""],["r","2026-04",23,"VENDA DE PRODUTOS/ SERVIÇOS","MICHAEL DE JESUS DOS SANTOS SILVA",450,0,"","Boleto Amigo","k",""],["r","2026-08",25,"VENDA DE PRODUTOS/ SERVIÇOS","ALEXANDRE PIRES BESSA",450,0,"","Boleto Amigo","c",""],["r","2026-05",28,"VENDA DE PRODUTOS/ SERVIÇOS","ALEXANDRE PIRES BESSA",450,0,"","Boleto Amigo","k",""],["r","2026-08",25,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO ALVES DE SOUSA FILHO",500,0,"","Boleto Amigo","c",""],["r","2026-03",20,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO ALVES DE SOUSA FILHO",500,0,"","Boleto Amigo","k",""],["r","2026-08",25,"VENDA DE PRODUTOS/ SERVIÇOS","ANDRE LUIZ MARQUES MARTINS",450,0,"","Boleto Amigo","c",""],["r","2026-04",24,"VENDA DE PRODUTOS/ SERVIÇOS","ANDRE LUIZ MARQUES MARTINS",450,0,"","Boleto Amigo","k",""],["r","2026-08",25,"VENDA DE PRODUTOS/ SERVIÇOS","GILSON CESAR BARBOSA",416.67,0,"","Boleto Amigo","c",""],["r","2026-04",15,"VENDA DE PRODUTOS/ SERVIÇOS","GILSON CESAR BARBOSA",416.67,0,"","Boleto Amigo","k",""],["r","2026-08",25,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO JOSIVAN ALVES RODRIGUES",100,0,"","Boleto Amigo","c",""],["r","2026-04",22,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO JOSIVAN ALVES RODRIGUES",100,0,"","Boleto Amigo","k",""],["r","2026-08",25,"VENDA DE PRODUTOS/ SERVIÇOS","IDELFONSO RODRIGUES CAMPOS",416.67,0,"","Boleto Amigo","c",""],["r","2026-04",23,"VENDA DE PRODUTOS/ SERVIÇOS","IDELFONSO RODRIGUES CAMPOS",416.67,0,"","Boleto Amigo","k",""],["r","2026-08",25,"VENDA DE PRODUTOS/ SERVIÇOS","CIBERLANIA MARIA DE ANDRADE",100,0,"","Boleto Amigo","c",""],["r","2026-05",21,"VENDA DE PRODUTOS/ SERVIÇOS","CIBERLANIA MARIA DE ANDRADE",100,0,"","Boleto Amigo","k",""],["r","2026-08",25,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCYVANIA GOMES CHAGAS",884.33,0,"","Boleto Amigo","c",""],["r","2026-04",15,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCYVANIA GOMES CHAGAS",884.33,0,"","Boleto Amigo","k",""],["r","2026-08",25,"VENDA DE PRODUTOS/ SERVIÇOS","MARLI MARIA DA SILVA SANTOS",450,0,"","Boleto Amigo","c",""],["r","2026-04",17,"VENDA DE PRODUTOS/ SERVIÇOS","MARLI MARIA DA SILVA SANTOS",450,0,"","Boleto Amigo","k",""],["r","2026-08",25,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO HERNANDO FARIAS",546.06,0,"","Boleto Amigo","c",""],["r","2026-05",25,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO HERNANDO FARIAS",546.06,0,"","Boleto Amigo","k",""],["r","2026-08",25,"VENDA DE PRODUTOS/ SERVIÇOS","IRANILDO DE LIMA OLIVEIRA",100,0,"","Boleto Amigo","c",""],["r","2026-04",16,"VENDA DE PRODUTOS/ SERVIÇOS","IRANILDO DE LIMA OLIVEIRA",100,0,"","Boleto Amigo","k",""],["r","2026-08",24,"VENDA DE PRODUTOS/ SERVIÇOS","ILA MARIA MACIEL NOGUEIRA",466.67,0,"","Boleto Amigo","c",""],["r","2026-04",24,"VENDA DE PRODUTOS/ SERVIÇOS","ILA MARIA MACIEL NOGUEIRA",466.67,0,"","Boleto Amigo","k",""],["r","2026-08",20,"VENDA DE PRODUTOS/ SERVIÇOS","JUCIVALDO RODRIGUES DURANS",450,0,"","Boleto Amigo","c",""],["r","2026-03",20,"VENDA DE PRODUTOS/ SERVIÇOS","JUCIVALDO RODRIGUES DURANS",450,0,"","Boleto Amigo","k",""],["r","2026-08",20,"VENDA DE PRODUTOS/ SERVIÇOS","LUIZ GABRIEL DE SOUZA DE SOUZA",375,0,"","Boleto Amigo","c",""],["r","2026-03",16,"VENDA DE PRODUTOS/ SERVIÇOS","LUIZ GABRIEL DE SOUZA DE SOUZA",375,0,"","Boleto Amigo","k",""],["r","2026-08",20,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA DO SOCORRO SERAFIM",450,0,"","Boleto Amigo","c",""],["r","2026-03",6,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA DO SOCORRO SERAFIM",450,0,"","Boleto Amigo","k",""],["r","2026-08",20,"VENDA DE PRODUTOS/ SERVIÇOS","JAIR COSTA LIMA",519.47,0,"","Boleto Amigo","c",""],["r","2026-05",8,"VENDA DE PRODUTOS/ SERVIÇOS","JAIR COSTA LIMA",519.47,0,"","Boleto Amigo","k",""],["r","2026-08",20,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA LEMOS DA SILVA COSTA",450,0,"","Boleto Amigo","c",""],["r","2026-05",20,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA LEMOS DA SILVA COSTA",450,0,"","Boleto Amigo","k",""],["r","2026-08",20,"VENDA DE PRODUTOS/ SERVIÇOS","DAYANE ALVES DE ABREU",500,0,"","Boleto Amigo","c",""],["r","2026-03",25,"VENDA DE PRODUTOS/ SERVIÇOS","DAYANE ALVES DE ABREU",500,0,"","Boleto Amigo","k",""],["r","2026-08",20,"VENDA DE PRODUTOS/ SERVIÇOS","WILLIAM BESERRA GOMES",450,0,"","Boleto Amigo","c",""],["r","2026-02",19,"VENDA DE PRODUTOS/ SERVIÇOS","WILLIAM BESERRA GOMES",450,0,"","Boleto Amigo","k",""],["r","2026-08",20,"VENDA DE PRODUTOS/ SERVIÇOS","WELLEN MENDES MOREIRA LIMA",460,0,"","Boleto Amigo","c",""],["r","2026-03",4,"VENDA DE PRODUTOS/ SERVIÇOS","WELLEN MENDES MOREIRA LIMA",460,0,"","Boleto Amigo","k",""],["r","2026-08",20,"VENDA DE PRODUTOS/ SERVIÇOS","DANIELLY MAUL DA CUNHA MOURA",450,0,"","Boleto Amigo","c",""],["r","2026-03",12,"VENDA DE PRODUTOS/ SERVIÇOS","DANIELLY MAUL DA CUNHA MOURA",450,0,"","Boleto Amigo","k",""],["r","2026-08",20,"VENDA DE PRODUTOS/ SERVIÇOS","KAIO RAMOS DE SOUZA BORGES",450,0,"","Boleto Amigo","c",""],["r","2026-03",16,"VENDA DE PRODUTOS/ SERVIÇOS","KAIO RAMOS DE SOUZA BORGES",450,0,"","Boleto Amigo","k",""],["r","2026-08",20,"VENDA DE PRODUTOS/ SERVIÇOS","GILVANEIDE MESSIAS BARBOSA",100,0,"","Boleto Amigo","c",""],["r","2026-04",30,"VENDA DE PRODUTOS/ SERVIÇOS","GILVANEIDE MESSIAS BARBOSA",100,0,"","Boleto Amigo","k",""],["r","2026-08",20,"VENDA DE PRODUTOS/ SERVIÇOS","ANDERSON DA SILVA BARRETO",100,0,"","Boleto Amigo","c",""],["r","2026-04",28,"VENDA DE PRODUTOS/ SERVIÇOS","ANDERSON DA SILVA BARRETO",100,0,"","Boleto Amigo","k",""],["r","2026-08",15,"VENDA DE PRODUTOS/ SERVIÇOS","GRIMARIO  BRITO DE SOUSA",350,0,"","Boleto Amigo","c",""],["r","2026-03",2,"VENDA DE PRODUTOS/ SERVIÇOS","GRIMARIO  BRITO DE SOUSA",350,0,"","Boleto Amigo","k",""],["r","2026-08",15,"VENDA DE PRODUTOS/ SERVIÇOS","JOSIANE FERNANDA DE SOUZA SILVA",450,0,"","Boleto Amigo","c",""],["r","2026-03",30,"VENDA DE PRODUTOS/ SERVIÇOS","JOSIANE FERNANDA DE SOUZA SILVA",450,0,"","Boleto Amigo","k",""],["r","2026-08",15,"VENDA DE PRODUTOS/ SERVIÇOS","ONADINA GOMES OLIVEIRA",450,0,"","Boleto Amigo","c",""],["r","2026-04",6,"VENDA DE PRODUTOS/ SERVIÇOS","ONADINA GOMES OLIVEIRA",450,0,"","Boleto Amigo","k",""],["r","2026-08",15,"VENDA DE PRODUTOS/ SERVIÇOS","SHIRLIANE DA SILVA BEZERRA",450,0,"","Boleto Amigo","c",""],["r","2026-05",6,"VENDA DE PRODUTOS/ SERVIÇOS","SHIRLIANE DA SILVA BEZERRA",450,0,"","Boleto Amigo","k",""],["r","2026-08",15,"VENDA DE PRODUTOS/ SERVIÇOS","EDNIVALDO MESQUITA PEREIRA",450,0,"","Boleto Amigo","c",""],["r","2026-04",9,"VENDA DE PRODUTOS/ SERVIÇOS","EDNIVALDO MESQUITA PEREIRA",450,0,"","Boleto Amigo","k",""],["r","2026-08",15,"VENDA DE PRODUTOS/ SERVIÇOS","JOSEILTON BERTO BIZERRA",450,0,"","Boleto Amigo","c",""],["r","2026-05",13,"VENDA DE PRODUTOS/ SERVIÇOS","JOSEILTON BERTO BIZERRA",450,0,"","Boleto Amigo","k",""],["r","2026-08",10,"VENDA DE PRODUTOS/ SERVIÇOS","EDILSON DE OLIVEIRA PATOS",333.33,0,"","Boleto Amigo","c",""],["r","2026-04",17,"VENDA DE PRODUTOS/ SERVIÇOS","EDILSON DE OLIVEIRA PATOS",333.33,0,"","Boleto Amigo","k",""],["r","2026-08",10,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GILSON CASTRO DE ALMEIDA",450,0,"","Boleto Amigo","c",""],["r","2026-04",2,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GILSON CASTRO DE ALMEIDA",450,0,"","Boleto Amigo","k",""],["r","2026-08",10,"VENDA DE PRODUTOS/ SERVIÇOS","LEIDLENE MAGNA DE ALENCAR",450,0,"","Boleto Amigo","c",""],["r","2026-02",2,"VENDA DE PRODUTOS/ SERVIÇOS","LEIDLENE MAGNA DE ALENCAR",450,0,"","Boleto Amigo","k",""],["r","2026-08",10,"VENDA DE PRODUTOS/ SERVIÇOS","FERNANDO WILLIAM RIBEIRO ROCHA",450,0,"","Boleto Amigo","c",""],["r","2026-04",1,"VENDA DE PRODUTOS/ SERVIÇOS","FERNANDO WILLIAM RIBEIRO ROCHA",450,0,"","Boleto Amigo","k",""],["r","2026-08",10,"VENDA DE PRODUTOS/ SERVIÇOS","RITA MARIA DA COSTA PINTO",450,0,"","Boleto Amigo","c",""],["r","2026-04",10,"VENDA DE PRODUTOS/ SERVIÇOS","RITA MARIA DA COSTA PINTO",450,0,"","Boleto Amigo","k",""],["r","2026-08",10,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA MAIARA LIMA MOREIRA",450,0,"","Boleto Amigo","c",""],["r","2026-04",1,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA MAIARA LIMA MOREIRA",450,0,"","Boleto Amigo","k",""],["r","2026-08",10,"VENDA DE PRODUTOS/ SERVIÇOS","MARIO AUGUSTO DA SILVA SANTOS",450,0,"","Boleto Amigo","c",""],["r","2026-03",5,"VENDA DE PRODUTOS/ SERVIÇOS","MARIO AUGUSTO DA SILVA SANTOS",450,0,"","Boleto Amigo","k",""],["r","2026-08",10,"VENDA DE PRODUTOS/ SERVIÇOS","LUCIVANIA DE OLIVEIRA DO NASCIMENTO",450,0,"","Boleto Amigo","c",""],["r","2026-04",10,"VENDA DE PRODUTOS/ SERVIÇOS","LUCIVANIA DE OLIVEIRA DO NASCIMENTO",450,0,"","Boleto Amigo","k",""],["r","2026-08",10,"VENDA DE PRODUTOS/ SERVIÇOS","CLERTON CUNHA GOMES",467.75,0,"","Boleto Amigo","c",""],["r","2026-05",6,"VENDA DE PRODUTOS/ SERVIÇOS","CLERTON CUNHA GOMES",467.75,0,"","Boleto Amigo","k",""],["r","2026-08",10,"VENDA DE PRODUTOS/ SERVIÇOS","JULIANA PEREIRA DOS SANTOS",450,0,"","Boleto Amigo","c",""],["r","2026-05",11,"VENDA DE PRODUTOS/ SERVIÇOS","JULIANA PEREIRA DOS SANTOS",450,0,"","Boleto Amigo","k",""],["r","2026-08",10,"VENDA DE PRODUTOS/ SERVIÇOS","WILLYSON FERREIRA MATOS",450,0,"","Boleto Amigo","c",""],["r","2026-03",23,"VENDA DE PRODUTOS/ SERVIÇOS","WILLYSON FERREIRA MATOS",450,0,"","Boleto Amigo","k",""],["r","2026-08",10,"VENDA DE PRODUTOS/ SERVIÇOS","LUCAS DE PAIVA MONTEIRO",450,0,"","Boleto Amigo","c",""],["r","2026-03",3,"VENDA DE PRODUTOS/ SERVIÇOS","LUCAS DE PAIVA MONTEIRO",450,0,"","Boleto Amigo","k",""],["r","2026-08",10,"VENDA DE PRODUTOS/ SERVIÇOS","ALAN NIXON ARAGAO RIBEIRO",450,0,"","Boleto Amigo","c",""],["r","2026-03",20,"VENDA DE PRODUTOS/ SERVIÇOS","ALAN NIXON ARAGAO RIBEIRO",450,0,"","Boleto Amigo","k",""],["r","2026-08",10,"VENDA DE PRODUTOS/ SERVIÇOS","ILZA LIMA DA SILVA",450,0,"","Boleto Amigo","c",""],["r","2026-03",17,"VENDA DE PRODUTOS/ SERVIÇOS","ILZA LIMA DA SILVA",450,0,"","Boleto Amigo","k",""],["r","2026-08",10,"VENDA DE PRODUTOS/ SERVIÇOS","MARILZA ARAUJO OLIVEIRA",503.78,0,"","Boleto Amigo","c",""],["r","2026-05",11,"VENDA DE PRODUTOS/ SERVIÇOS","MARILZA ARAUJO OLIVEIRA",503.78,0,"","Boleto Amigo","k",""],["r","2026-08",10,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA AURILENE DA SILVA CAVALCANTE",250,0,"","Boleto Amigo","c",""],["r","2026-05",11,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA AURILENE DA SILVA CAVALCANTE",250,0,"","Boleto Amigo","k",""],["r","2026-08",10,"VENDA DE PRODUTOS/ SERVIÇOS","GRACENIRA GONCALVES DE OLIVEIRA",450,0,"","Boleto Amigo","c",""],["r","2026-03",12,"VENDA DE PRODUTOS/ SERVIÇOS","GRACENIRA GONCALVES DE OLIVEIRA",450,0,"","Boleto Amigo","k",""],["r","2026-08",5,"VENDA DE PRODUTOS/ SERVIÇOS","JULIETTE MONICA DA SILVA LEAO",450,0,"","Boleto Amigo","c",""],["r","2026-03",5,"VENDA DE PRODUTOS/ SERVIÇOS","JULIETTE MONICA DA SILVA LEAO",450,0,"","Boleto Amigo","k",""],["r","2026-08",5,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GESSIVALDO PINHEIRO",450,0,"","Boleto Amigo","c",""],["r","2026-02",2,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GESSIVALDO PINHEIRO",450,0,"","Boleto Amigo","k",""],["r","2026-08",5,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GESSIVALDO PINHEIRO",450,0,"","Boleto Amigo","c",""],["r","2026-02",2,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GESSIVALDO PINHEIRO",450,0,"","Boleto Amigo","k",""],["r","2026-07",25,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO DIONISIO GADELHA DA SILVA",450,0,"","Boleto Amigo","c",""],["r","2026-03",24,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO DIONISIO GADELHA DA SILVA",450,0,"","Boleto Amigo","k",""],["r","2026-07",25,"VENDA DE PRODUTOS/ SERVIÇOS","LUCIANA SILVA MEDEIROS",466.67,0,"","Boleto Amigo","c",""],["r","2026-02",10,"VENDA DE PRODUTOS/ SERVIÇOS","LUCIANA SILVA MEDEIROS",466.67,0,"","Boleto Amigo","k",""],["r","2026-07",25,"VENDA DE PRODUTOS/ SERVIÇOS","LILIAN LIMA DIAS",450,0,"","Boleto Amigo","c",""],["r","2026-03",3,"VENDA DE PRODUTOS/ SERVIÇOS","LILIAN LIMA DIAS",450,0,"","Boleto Amigo","k",""],["r","2026-07",25,"VENDA DE PRODUTOS/ SERVIÇOS","RAFAEL ALVES DA SILVA",450,0,"","Boleto Amigo","c",""],["r","2026-03",9,"VENDA DE PRODUTOS/ SERVIÇOS","RAFAEL ALVES DA SILVA",450,0,"","Boleto Amigo","k",""],["r","2026-07",25,"VENDA DE PRODUTOS/ SERVIÇOS","ANDREZA  FERREIRA MARTINS",100,0,"","Boleto Amigo","c",""],["r","2026-03",23,"VENDA DE PRODUTOS/ SERVIÇOS","ANDREZA  FERREIRA MARTINS",100,0,"","Boleto Amigo","k",""],["r","2026-07",25,"VENDA DE PRODUTOS/ SERVIÇOS","MARCUS THADEU FERNANDES ARRAES",500,0,"","Boleto Amigo","c",""],["r","2026-02",20,"VENDA DE PRODUTOS/ SERVIÇOS","MARCUS THADEU FERNANDES ARRAES",500,0,"","Boleto Amigo","k",""],["r","2026-07",25,"VENDA DE PRODUTOS/ SERVIÇOS","CIBERLANIA MARIA DE ANDRADE",100,0,"","Boleto Amigo","c",""],["r","2026-05",21,"VENDA DE PRODUTOS/ SERVIÇOS","CIBERLANIA MARIA DE ANDRADE",100,0,"","Boleto Amigo","k",""],["r","2026-07",25,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCYVANIA GOMES CHAGAS",884.33,0,"","Boleto Amigo","c",""],["r","2026-04",15,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCYVANIA GOMES CHAGAS",884.33,0,"","Boleto Amigo","k",""],["r","2026-07",25,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO HERNANDO FARIAS",546.06,0,"","Boleto Amigo","c",""],["r","2026-05",25,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO HERNANDO FARIAS",546.06,0,"","Boleto Amigo","k",""],["r","2026-07",25,"VENDA DE PRODUTOS/ SERVIÇOS","MICHAEL DE JESUS DOS SANTOS SILVA",450,0,"","Boleto Amigo","c",""],["r","2026-04",23,"VENDA DE PRODUTOS/ SERVIÇOS","MICHAEL DE JESUS DOS SANTOS SILVA",450,0,"","Boleto Amigo","k",""],["r","2026-07",25,"VENDA DE PRODUTOS/ SERVIÇOS","ATHIRSON BRENDO SOUSA SILVA",450,0,"","Boleto Amigo","c",""],["r","2026-03",18,"VENDA DE PRODUTOS/ SERVIÇOS","ATHIRSON BRENDO SOUSA SILVA",450,0,"","Boleto Amigo","k",""],["r","2026-07",25,"VENDA DE PRODUTOS/ SERVIÇOS","ANDRE LUIZ MARQUES MARTINS",450,0,"","Boleto Amigo","c",""],["r","2026-04",24,"VENDA DE PRODUTOS/ SERVIÇOS","ANDRE LUIZ MARQUES MARTINS",450,0,"","Boleto Amigo","k",""],["r","2026-07",25,"VENDA DE PRODUTOS/ SERVIÇOS","ALEXANDRE PIRES BESSA",450,0,"","Boleto Amigo","c",""],["r","2026-05",28,"VENDA DE PRODUTOS/ SERVIÇOS","ALEXANDRE PIRES BESSA",450,0,"","Boleto Amigo","k",""],["r","2026-07",25,"VENDA DE PRODUTOS/ SERVIÇOS","IDELFONSO RODRIGUES CAMPOS",416.67,0,"","Boleto Amigo","c",""],["r","2026-04",23,"VENDA DE PRODUTOS/ SERVIÇOS","IDELFONSO RODRIGUES CAMPOS",416.67,0,"","Boleto Amigo","k",""],["r","2026-07",25,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO JOSIVAN ALVES RODRIGUES",100,0,"","Boleto Amigo","c",""],["r","2026-04",22,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO JOSIVAN ALVES RODRIGUES",100,0,"","Boleto Amigo","k",""],["r","2026-07",25,"VENDA DE PRODUTOS/ SERVIÇOS","IRANILDO DE LIMA OLIVEIRA",100,0,"","Boleto Amigo","c",""],["r","2026-04",16,"VENDA DE PRODUTOS/ SERVIÇOS","IRANILDO DE LIMA OLIVEIRA",100,0,"","Boleto Amigo","k",""],["r","2026-07",25,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO ALVES DE SOUSA FILHO",500,0,"","Boleto Amigo","c",""],["r","2026-03",20,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO ALVES DE SOUSA FILHO",500,0,"","Boleto Amigo","k",""],["r","2026-07",25,"VENDA DE PRODUTOS/ SERVIÇOS","MARLI MARIA DA SILVA SANTOS",450,0,"","Boleto Amigo","c",""],["r","2026-04",17,"VENDA DE PRODUTOS/ SERVIÇOS","MARLI MARIA DA SILVA SANTOS",450,0,"","Boleto Amigo","k",""],["r","2026-07",25,"VENDA DE PRODUTOS/ SERVIÇOS","BRUNO QUENA GOMES DINIZ",675,0,"","Boleto Amigo","c",""],["r","2026-03",18,"VENDA DE PRODUTOS/ SERVIÇOS","BRUNO QUENA GOMES DINIZ",675,0,"","Boleto Amigo","k",""],["r","2026-07",25,"VENDA DE PRODUTOS/ SERVIÇOS","GILSON CESAR BARBOSA",416.67,0,"","Boleto Amigo","c",""],["r","2026-04",15,"VENDA DE PRODUTOS/ SERVIÇOS","GILSON CESAR BARBOSA",416.67,0,"","Boleto Amigo","k",""],["r","2026-07",25,"VENDA DE PRODUTOS/ SERVIÇOS","UALAS NEVES SILVA",450,0,"","Boleto Amigo","c",""],["r","2026-03",31,"VENDA DE PRODUTOS/ SERVIÇOS","UALAS NEVES SILVA",450,0,"","Boleto Amigo","k",""],["r","2026-07",25,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA NASCIMENTO GOMES",100,0,"","Boleto Amigo","c",""],["r","2026-03",10,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA NASCIMENTO GOMES",100,0,"","Boleto Amigo","k",""],["r","2026-07",25,"VENDA DE PRODUTOS/ SERVIÇOS","GABRIEL DA GUIA SENA",450,0,"","Boleto Amigo","c",""],["r","2026-05",14,"VENDA DE PRODUTOS/ SERVIÇOS","GABRIEL DA GUIA SENA",450,0,"","Boleto Amigo","k",""],["r","2026-07",25,"VENDA DE PRODUTOS/ SERVIÇOS","FABIO DE SOUZA BARBOSA",450,0,"","Boleto Amigo","c",""],["r","2026-01",23,"VENDA DE PRODUTOS/ SERVIÇOS","FABIO DE SOUZA BARBOSA",450,0,"","Boleto Amigo","k",""],["r","2026-07",25,"VENDA DE PRODUTOS/ SERVIÇOS","EDNA COSTA DE JESUS ALVES",450,0,"","Boleto Amigo","c",""],["r","2026-01",14,"VENDA DE PRODUTOS/ SERVIÇOS","EDNA COSTA DE JESUS ALVES",450,0,"","Boleto Amigo","k",""],["r","2026-07",25,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE AUGUSTO SOARES SERRAO",450,0,"","Boleto Amigo","c",""],["r","2026-04",10,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE AUGUSTO SOARES SERRAO",450,0,"","Boleto Amigo","k",""],["r","2026-07",25,"VENDA DE PRODUTOS/ SERVIÇOS","TALES FERREIRA DE LIMA",450,0,"","Boleto Amigo","c",""],["r","2026-05",7,"VENDA DE PRODUTOS/ SERVIÇOS","TALES FERREIRA DE LIMA",450,0,"","Boleto Amigo","k",""],["r","2026-07",25,"VENDA DE PRODUTOS/ SERVIÇOS","LIDIANE ALMEIDA SILVA",450,0,"","Boleto Amigo","c",""],["r","2026-01",14,"VENDA DE PRODUTOS/ SERVIÇOS","LIDIANE ALMEIDA SILVA",450,0,"","Boleto Amigo","k",""],["r","2026-07",25,"VENDA DE PRODUTOS/ SERVIÇOS","CARLOS DE SOUSA MARTINS",100,0,"","Boleto Amigo","c",""],["r","2026-03",25,"VENDA DE PRODUTOS/ SERVIÇOS","CARLOS DE SOUSA MARTINS",100,0,"","Boleto Amigo","k",""],["r","2026-07",24,"VENDA DE PRODUTOS/ SERVIÇOS","ILA MARIA MACIEL NOGUEIRA",466.67,0,"","Boleto Amigo","c",""],["r","2026-04",24,"VENDA DE PRODUTOS/ SERVIÇOS","ILA MARIA MACIEL NOGUEIRA",466.67,0,"","Boleto Amigo","k",""],["r","2026-07",20,"VENDA DE PRODUTOS/ SERVIÇOS","WELLEN MENDES MOREIRA LIMA",460,0,"","Boleto Amigo","c",""],["r","2026-03",4,"VENDA DE PRODUTOS/ SERVIÇOS","WELLEN MENDES MOREIRA LIMA",460,0,"","Boleto Amigo","k",""],["r","2026-07",20,"VENDA DE PRODUTOS/ SERVIÇOS","JAIR COSTA LIMA",519.47,0,"","Boleto Amigo","c",""],["r","2026-05",8,"VENDA DE PRODUTOS/ SERVIÇOS","JAIR COSTA LIMA",519.47,0,"","Boleto Amigo","k",""],["r","2026-07",20,"VENDA DE PRODUTOS/ SERVIÇOS","KAIO RAMOS DE SOUZA BORGES",450,0,"","Boleto Amigo","c",""],["r","2026-03",16,"VENDA DE PRODUTOS/ SERVIÇOS","KAIO RAMOS DE SOUZA BORGES",450,0,"","Boleto Amigo","k",""],["r","2026-07",20,"VENDA DE PRODUTOS/ SERVIÇOS","DAYANE ALVES DE ABREU",500,0,"","Boleto Amigo","c",""],["r","2026-03",25,"VENDA DE PRODUTOS/ SERVIÇOS","DAYANE ALVES DE ABREU",500,0,"","Boleto Amigo","k",""],["r","2026-07",20,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE ARI SANTOS MACIEL",450,0,"","Boleto Amigo","c",""],["r","2026-01",15,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE ARI SANTOS MACIEL",450,0,"","Boleto Amigo","k",""],["r","2026-07",20,"VENDA DE PRODUTOS/ SERVIÇOS","LUIZ GABRIEL DE SOUZA DE SOUZA",375,0,"","Boleto Amigo","c",""],["r","2026-03",16,"VENDA DE PRODUTOS/ SERVIÇOS","LUIZ GABRIEL DE SOUZA DE SOUZA",375,0,"","Boleto Amigo","k",""],["r","2026-07",20,"VENDA DE PRODUTOS/ SERVIÇOS","CARLOS ANDRE NUNES DA SILVA",450,0,"","Boleto Amigo","c",""],["r","2026-01",27,"VENDA DE PRODUTOS/ SERVIÇOS","CARLOS ANDRE NUNES DA SILVA",450,0,"","Boleto Amigo","k",""],["r","2026-07",20,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA DO SOCORRO SERAFIM",450,0,"","Boleto Amigo","c",""],["r","2026-03",6,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA DO SOCORRO SERAFIM",450,0,"","Boleto Amigo","k",""],["r","2026-07",20,"VENDA DE PRODUTOS/ SERVIÇOS","JUCIVALDO RODRIGUES DURANS",450,0,"","Boleto Amigo","c",""],["r","2026-03",20,"VENDA DE PRODUTOS/ SERVIÇOS","JUCIVALDO RODRIGUES DURANS",450,0,"","Boleto Amigo","k",""],["r","2026-07",20,"VENDA DE PRODUTOS/ SERVIÇOS","ANDERSON DA SILVA BARRETO",100,0,"","Boleto Amigo","c",""],["r","2026-04",28,"VENDA DE PRODUTOS/ SERVIÇOS","ANDERSON DA SILVA BARRETO",100,0,"","Boleto Amigo","k",""],["r","2026-07",20,"VENDA DE PRODUTOS/ SERVIÇOS","DANIELLY MAUL DA CUNHA MOURA",450,0,"","Boleto Amigo","c",""],["r","2026-03",12,"VENDA DE PRODUTOS/ SERVIÇOS","DANIELLY MAUL DA CUNHA MOURA",450,0,"","Boleto Amigo","k",""],["r","2026-07",20,"VENDA DE PRODUTOS/ SERVIÇOS","GILVANEIDE MESSIAS BARBOSA",100,0,"","Boleto Amigo","c",""],["r","2026-04",30,"VENDA DE PRODUTOS/ SERVIÇOS","GILVANEIDE MESSIAS BARBOSA",100,0,"","Boleto Amigo","k",""],["r","2026-07",20,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA LEMOS DA SILVA COSTA",450,0,"","Boleto Amigo","c",""],["r","2026-05",20,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA LEMOS DA SILVA COSTA",450,0,"","Boleto Amigo","k",""],["r","2026-07",20,"VENDA DE PRODUTOS/ SERVIÇOS","WILLIAM BESERRA GOMES",450,0,"","Boleto Amigo","c",""],["r","2026-02",19,"VENDA DE PRODUTOS/ SERVIÇOS","WILLIAM BESERRA GOMES",450,0,"","Boleto Amigo","k",""],["r","2026-07",15,"VENDA DE PRODUTOS/ SERVIÇOS","ONADINA GOMES OLIVEIRA",450,0,"","Boleto Amigo","c",""],["r","2026-04",6,"VENDA DE PRODUTOS/ SERVIÇOS","ONADINA GOMES OLIVEIRA",450,0,"","Boleto Amigo","k",""],["r","2026-07",15,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA HELENA DOS SANTOS MORAIS",100,0,"","Boleto Amigo","c",""],["r","2026-03",12,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA HELENA DOS SANTOS MORAIS",100,0,"","Boleto Amigo","k",""],["r","2026-07",15,"VENDA DE PRODUTOS/ SERVIÇOS","GRIMARIO  BRITO DE SOUSA",350,0,"","Boleto Amigo","c",""],["r","2026-03",2,"VENDA DE PRODUTOS/ SERVIÇOS","GRIMARIO  BRITO DE SOUSA",350,0,"","Boleto Amigo","k",""],["r","2026-07",15,"VENDA DE PRODUTOS/ SERVIÇOS","EDNIVALDO MESQUITA PEREIRA",450,0,"","Boleto Amigo","c",""],["r","2026-04",9,"VENDA DE PRODUTOS/ SERVIÇOS","EDNIVALDO MESQUITA PEREIRA",450,0,"","Boleto Amigo","k",""],["r","2026-07",15,"VENDA DE PRODUTOS/ SERVIÇOS","JOSEILTON BERTO BIZERRA",450,0,"","Boleto Amigo","c",""],["r","2026-05",13,"VENDA DE PRODUTOS/ SERVIÇOS","JOSEILTON BERTO BIZERRA",450,0,"","Boleto Amigo","k",""],["r","2026-07",15,"VENDA DE PRODUTOS/ SERVIÇOS","JOSIANE FERNANDA DE SOUZA SILVA",450,0,"","Boleto Amigo","c",""],["r","2026-03",30,"VENDA DE PRODUTOS/ SERVIÇOS","JOSIANE FERNANDA DE SOUZA SILVA",450,0,"","Boleto Amigo","k",""],["r","2026-07",15,"VENDA DE PRODUTOS/ SERVIÇOS","SHIRLIANE DA SILVA BEZERRA",450,0,"","Boleto Amigo","c",""],["r","2026-05",6,"VENDA DE PRODUTOS/ SERVIÇOS","SHIRLIANE DA SILVA BEZERRA",450,0,"","Boleto Amigo","k",""],["r","2026-07",10,"VENDA DE PRODUTOS/ SERVIÇOS","WILLYSON FERREIRA MATOS",450,0,"","Boleto Amigo","c",""],["r","2026-03",23,"VENDA DE PRODUTOS/ SERVIÇOS","WILLYSON FERREIRA MATOS",450,0,"","Boleto Amigo","k",""],["r","2026-07",10,"VENDA DE PRODUTOS/ SERVIÇOS","FERNANDO WILLIAM RIBEIRO ROCHA",450,0,"","Boleto Amigo","c",""],["r","2026-04",1,"VENDA DE PRODUTOS/ SERVIÇOS","FERNANDO WILLIAM RIBEIRO ROCHA",450,0,"","Boleto Amigo","k",""],["r","2026-07",10,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GILSON CASTRO DE ALMEIDA",450,0,"","Boleto Amigo","c",""],["r","2026-04",2,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GILSON CASTRO DE ALMEIDA",450,0,"","Boleto Amigo","k",""],["r","2026-07",10,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA MAIARA LIMA MOREIRA",450,0,"","Boleto Amigo","c",""],["r","2026-04",1,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA MAIARA LIMA MOREIRA",450,0,"","Boleto Amigo","k",""],["r","2026-07",10,"VENDA DE PRODUTOS/ SERVIÇOS","RITA MARIA DA COSTA PINTO",450,0,"","Boleto Amigo","c",""],["r","2026-04",10,"VENDA DE PRODUTOS/ SERVIÇOS","RITA MARIA DA COSTA PINTO",450,0,"","Boleto Amigo","k",""],["r","2026-07",10,"VENDA DE PRODUTOS/ SERVIÇOS","EDILSON DE OLIVEIRA PATOS",333.33,0,"","Boleto Amigo","c",""],["r","2026-04",17,"VENDA DE PRODUTOS/ SERVIÇOS","EDILSON DE OLIVEIRA PATOS",333.33,0,"","Boleto Amigo","k",""],["r","2026-07",10,"VENDA DE PRODUTOS/ SERVIÇOS","ALAN NIXON ARAGAO RIBEIRO",450,0,"","Boleto Amigo","c",""],["r","2026-03",20,"VENDA DE PRODUTOS/ SERVIÇOS","ALAN NIXON ARAGAO RIBEIRO",450,0,"","Boleto Amigo","k",""],["r","2026-07",10,"VENDA DE PRODUTOS/ SERVIÇOS","LUCIVANIA DE OLIVEIRA DO NASCIMENTO",450,0,"","Boleto Amigo","c",""],["r","2026-04",10,"VENDA DE PRODUTOS/ SERVIÇOS","LUCIVANIA DE OLIVEIRA DO NASCIMENTO",450,0,"","Boleto Amigo","k",""],["r","2026-07",10,"VENDA DE PRODUTOS/ SERVIÇOS","SOCORRO ALVES ROLIM RAMOS",100,0,"","Boleto Amigo","c",""],["r","2026-03",5,"VENDA DE PRODUTOS/ SERVIÇOS","SOCORRO ALVES ROLIM RAMOS",100,0,"","Boleto Amigo","k",""],["r","2026-07",10,"VENDA DE PRODUTOS/ SERVIÇOS","CLERTON CUNHA GOMES",467.75,0,"","Boleto Amigo","c",""],["r","2026-05",6,"VENDA DE PRODUTOS/ SERVIÇOS","CLERTON CUNHA GOMES",467.75,0,"","Boleto Amigo","k",""],["r","2026-07",10,"VENDA DE PRODUTOS/ SERVIÇOS","KLEBER DE ALMEIDA",450,0,"","Boleto Amigo","c",""],["r","2026-01",7,"VENDA DE PRODUTOS/ SERVIÇOS","KLEBER DE ALMEIDA",450,0,"","Boleto Amigo","k",""],["r","2026-07",10,"VENDA DE PRODUTOS/ SERVIÇOS","MARIO AUGUSTO DA SILVA SANTOS",450,0,"","Boleto Amigo","c",""],["r","2026-03",5,"VENDA DE PRODUTOS/ SERVIÇOS","MARIO AUGUSTO DA SILVA SANTOS",450,0,"","Boleto Amigo","k",""],["r","2026-07",10,"VENDA DE PRODUTOS/ SERVIÇOS","JEFFERSON HUGO BANDEIRA DE FRANCA",100,0,"","Boleto Amigo","c",""],["r","2026-03",9,"VENDA DE PRODUTOS/ SERVIÇOS","JEFFERSON HUGO BANDEIRA DE FRANCA",100,0,"","Boleto Amigo","k",""],["r","2026-07",10,"VENDA DE PRODUTOS/ SERVIÇOS","FLAVIO ROBERTO NASCIMENTO PEREIRA",466.65,0,"","Boleto Amigo","c",""],["r","2026-01",9,"VENDA DE PRODUTOS/ SERVIÇOS","FLAVIO ROBERTO NASCIMENTO PEREIRA",466.65,0,"","Boleto Amigo","k",""],["r","2026-07",10,"VENDA DE PRODUTOS/ SERVIÇOS","LEIDLENE MAGNA DE ALENCAR",450,0,"","Boleto Amigo","c",""],["r","2026-02",2,"VENDA DE PRODUTOS/ SERVIÇOS","LEIDLENE MAGNA DE ALENCAR",450,0,"","Boleto Amigo","k",""],["r","2026-07",10,"VENDA DE PRODUTOS/ SERVIÇOS","EDUARDA ANDRADE DO NASCIMENTO",450,0,"","Boleto Amigo","c",""],["r","2026-01",13,"VENDA DE PRODUTOS/ SERVIÇOS","EDUARDA ANDRADE DO NASCIMENTO",450,0,"","Boleto Amigo","k",""],["r","2026-07",10,"VENDA DE PRODUTOS/ SERVIÇOS","LUCAS DE PAIVA MONTEIRO",450,0,"","Boleto Amigo","c",""],["r","2026-03",3,"VENDA DE PRODUTOS/ SERVIÇOS","LUCAS DE PAIVA MONTEIRO",450,0,"","Boleto Amigo","k",""],["r","2026-07",10,"VENDA DE PRODUTOS/ SERVIÇOS","JULIANA PEREIRA DOS SANTOS",450,0,"","Boleto Amigo","c",""],["r","2026-05",11,"VENDA DE PRODUTOS/ SERVIÇOS","JULIANA PEREIRA DOS SANTOS",450,0,"","Boleto Amigo","k",""],["r","2026-07",10,"VENDA DE PRODUTOS/ SERVIÇOS","GRACENIRA GONCALVES DE OLIVEIRA",450,0,"","Boleto Amigo","c",""],["r","2026-03",12,"VENDA DE PRODUTOS/ SERVIÇOS","GRACENIRA GONCALVES DE OLIVEIRA",450,0,"","Boleto Amigo","k",""],["r","2026-07",10,"VENDA DE PRODUTOS/ SERVIÇOS","ILZA LIMA DA SILVA",450,0,"","Boleto Amigo","c",""],["r","2026-03",17,"VENDA DE PRODUTOS/ SERVIÇOS","ILZA LIMA DA SILVA",450,0,"","Boleto Amigo","k",""],["r","2026-07",10,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO ANTONIO PAULA DOS SANTOS",100,0,"","Boleto Amigo","c",""],["r","2026-03",20,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO ANTONIO PAULA DOS SANTOS",100,0,"","Boleto Amigo","k",""],["r","2026-07",10,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA AURILENE DA SILVA CAVALCANTE",250,0,"","Boleto Amigo","c",""],["r","2026-05",11,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA AURILENE DA SILVA CAVALCANTE",250,0,"","Boleto Amigo","k",""],["r","2026-07",10,"VENDA DE PRODUTOS/ SERVIÇOS","MARILZA ARAUJO OLIVEIRA",503.78,0,"","Boleto Amigo","c",""],["r","2026-05",11,"VENDA DE PRODUTOS/ SERVIÇOS","MARILZA ARAUJO OLIVEIRA",503.78,0,"","Boleto Amigo","k",""],["r","2026-07",5,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GESSIVALDO PINHEIRO",450,0,"","Boleto Amigo","c",""],["r","2026-02",2,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GESSIVALDO PINHEIRO",450,0,"","Boleto Amigo","k",""],["r","2026-07",5,"VENDA DE PRODUTOS/ SERVIÇOS","JOACIR ALVES DOS SANTOS",383.35,0,"","Boleto Amigo","c",""],["r","2026-01",2,"VENDA DE PRODUTOS/ SERVIÇOS","JOACIR ALVES DOS SANTOS",383.35,0,"","Boleto Amigo","k",""],["r","2026-07",5,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GESSIVALDO PINHEIRO",450,0,"","Boleto Amigo","c",""],["r","2026-02",2,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GESSIVALDO PINHEIRO",450,0,"","Boleto Amigo","k",""],["r","2026-07",5,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE RIBAMAR PEREIRA DE OLIVEIRA",675,0,"","Boleto Amigo","c",""],["r","2026-03",4,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE RIBAMAR PEREIRA DE OLIVEIRA",675,0,"","Boleto Amigo","k",""],["r","2026-07",5,"VENDA DE PRODUTOS/ SERVIÇOS","MANOEL CARVALHO DA COSTA",675,0,"","Boleto Amigo","c",""],["r","2026-03",11,"VENDA DE PRODUTOS/ SERVIÇOS","MANOEL CARVALHO DA COSTA",675,0,"","Boleto Amigo","k",""],["r","2026-07",5,"VENDA DE PRODUTOS/ SERVIÇOS","JULIETTE MONICA DA SILVA LEAO",450,0,"","Boleto Amigo","c",""],["r","2026-03",5,"VENDA DE PRODUTOS/ SERVIÇOS","JULIETTE MONICA DA SILVA LEAO",450,0,"","Boleto Amigo","k",""],["r","2026-07",5,"VENDA DE PRODUTOS/ SERVIÇOS","LINDOMAR DE OLIVEIRA",100,0,"","Boleto Amigo","c",""],["r","2026-03",20,"VENDA DE PRODUTOS/ SERVIÇOS","LINDOMAR DE OLIVEIRA",100,0,"","Boleto Amigo","k",""],["r","2026-06",25,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO DIONISIO GADELHA DA SILVA",450,0,"","Boleto Amigo","c",""],["r","2026-03",24,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO DIONISIO GADELHA DA SILVA",450,0,"","Boleto Amigo","k",""],["r","2026-06",25,"VENDA DE PRODUTOS/ SERVIÇOS","ALLYNE CAROLINA SAMPAIO SILVA",383.35,0,"","Boleto Amigo","c",""],["r","2025-12",2,"VENDA DE PRODUTOS/ SERVIÇOS","ALLYNE CAROLINA SAMPAIO SILVA",383.35,0,"","Boleto Amigo","k",""],["r","2026-06",25,"VENDA DE PRODUTOS/ SERVIÇOS","BRUNO QUENA GOMES DINIZ",675,0,"","Boleto Amigo","c",""],["r","2026-03",18,"VENDA DE PRODUTOS/ SERVIÇOS","BRUNO QUENA GOMES DINIZ",675,0,"","Boleto Amigo","k",""],["r","2026-06",25,"VENDA DE PRODUTOS/ SERVIÇOS","EDNA COSTA DE JESUS ALVES",450,0,"","Boleto Amigo","c",""],["r","2026-01",14,"VENDA DE PRODUTOS/ SERVIÇOS","EDNA COSTA DE JESUS ALVES",450,0,"","Boleto Amigo","k",""],["r","2026-06",25,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO ALVES DE SOUSA FILHO",500,0,"","Boleto Amigo","c",""],["r","2026-03",20,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO ALVES DE SOUSA FILHO",500,0,"","Boleto Amigo","k",""],["r","2026-06",25,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA NASCIMENTO GOMES",100,0,"","Boleto Amigo","c",""],["r","2026-03",10,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA NASCIMENTO GOMES",100,0,"","Boleto Amigo","k",""],["r","2026-06",25,"VENDA DE PRODUTOS/ SERVIÇOS","LIDIANE ALMEIDA SILVA",450,0,"","Boleto Amigo","c",""],["r","2026-01",14,"VENDA DE PRODUTOS/ SERVIÇOS","LIDIANE ALMEIDA SILVA",450,0,"","Boleto Amigo","k",""],["r","2026-06",25,"VENDA DE PRODUTOS/ SERVIÇOS","AUDACI EVARISTO DA COSTA",383.35,0,"","Boleto Amigo","c",""],["r","2025-12",8,"VENDA DE PRODUTOS/ SERVIÇOS","AUDACI EVARISTO DA COSTA",383.35,0,"","Boleto Amigo","k",""],["r","2026-06",25,"VENDA DE PRODUTOS/ SERVIÇOS","MARCUS THADEU FERNANDES ARRAES",500,0,"","Boleto Amigo","c",""],["r","2026-02",20,"VENDA DE PRODUTOS/ SERVIÇOS","MARCUS THADEU FERNANDES ARRAES",500,0,"","Boleto Amigo","k",""],["r","2026-06",25,"VENDA DE PRODUTOS/ SERVIÇOS","LUCIANA SILVA MEDEIROS",466.67,0,"","Boleto Amigo","c",""],["r","2026-02",10,"VENDA DE PRODUTOS/ SERVIÇOS","LUCIANA SILVA MEDEIROS",466.67,0,"","Boleto Amigo","k",""],["r","2026-06",25,"VENDA DE PRODUTOS/ SERVIÇOS","RAFAEL ALVES DA SILVA",450,0,"","Boleto Amigo","c",""],["r","2026-03",9,"VENDA DE PRODUTOS/ SERVIÇOS","RAFAEL ALVES DA SILVA",450,0,"","Boleto Amigo","k",""],["r","2026-06",25,"VENDA DE PRODUTOS/ SERVIÇOS","CARLOS DE SOUSA MARTINS",100,0,"","Boleto Amigo","c",""],["r","2026-03",25,"VENDA DE PRODUTOS/ SERVIÇOS","CARLOS DE SOUSA MARTINS",100,0,"","Boleto Amigo","k",""],["r","2026-06",25,"VENDA DE PRODUTOS/ SERVIÇOS","UALAS NEVES SILVA",450,0,"","Boleto Amigo","c",""],["r","2026-03",31,"VENDA DE PRODUTOS/ SERVIÇOS","UALAS NEVES SILVA",450,0,"","Boleto Amigo","k",""],["r","2026-06",25,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO JOANDERSON GOMES FERREIRA",383.35,0,"","Boleto Amigo","c",""],["r","2025-12",26,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO JOANDERSON GOMES FERREIRA",383.35,0,"","Boleto Amigo","k",""],["r","2026-06",25,"VENDA DE PRODUTOS/ SERVIÇOS","ATHIRSON BRENDO SOUSA SILVA",450,0,"","Boleto Amigo","c",""],["r","2026-03",18,"VENDA DE PRODUTOS/ SERVIÇOS","ATHIRSON BRENDO SOUSA SILVA",450,0,"","Boleto Amigo","k",""],["r","2026-06",25,"VENDA DE PRODUTOS/ SERVIÇOS","LILIAN LIMA DIAS",450,0,"","Boleto Amigo","c",""],["r","2026-03",3,"VENDA DE PRODUTOS/ SERVIÇOS","LILIAN LIMA DIAS",450,0,"","Boleto Amigo","k",""],["r","2026-06",25,"VENDA DE PRODUTOS/ SERVIÇOS","ANDREZA  FERREIRA MARTINS",100,0,"","Boleto Amigo","c",""],["r","2026-03",23,"VENDA DE PRODUTOS/ SERVIÇOS","ANDREZA  FERREIRA MARTINS",100,0,"","Boleto Amigo","k",""],["r","2026-06",25,"VENDA DE PRODUTOS/ SERVIÇOS","FABIO DE SOUZA BARBOSA",450,0,"","Boleto Amigo","c",""],["r","2026-01",23,"VENDA DE PRODUTOS/ SERVIÇOS","FABIO DE SOUZA BARBOSA",450,0,"","Boleto Amigo","k",""],["r","2026-06",25,"VENDA DE PRODUTOS/ SERVIÇOS","ALEXANDRE PIRES BESSA",450,0,"","Boleto Amigo","c",""],["r","2026-05",28,"VENDA DE PRODUTOS/ SERVIÇOS","ALEXANDRE PIRES BESSA",450,0,"","Boleto Amigo","k",""],["r","2026-06",25,"VENDA DE PRODUTOS/ SERVIÇOS","IDELFONSO RODRIGUES CAMPOS",416.67,0,"","Boleto Amigo","c",""],["r","2026-04",23,"VENDA DE PRODUTOS/ SERVIÇOS","IDELFONSO RODRIGUES CAMPOS",416.67,0,"","Boleto Amigo","k",""],["r","2026-06",25,"VENDA DE PRODUTOS/ SERVIÇOS","IRANILDO DE LIMA OLIVEIRA",100,0,"","Boleto Amigo","c",""],["r","2026-04",16,"VENDA DE PRODUTOS/ SERVIÇOS","IRANILDO DE LIMA OLIVEIRA",100,0,"","Boleto Amigo","k",""],["r","2026-05",26,"VENDA DE PRODUTOS/ SERVIÇOS","ANDRE LUIZ MARQUES MARTINS",450,1,"","Boleto Amigo","c",""],["r","2026-04",24,"VENDA DE PRODUTOS/ SERVIÇOS","ANDRE LUIZ MARQUES MARTINS",450,1,"","Boleto Amigo","k",""],["r","2026-06",25,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCYVANIA GOMES CHAGAS",884.33,0,"","Boleto Amigo","c",""],["r","2026-04",15,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCYVANIA GOMES CHAGAS",884.33,0,"","Boleto Amigo","k",""],["r","2026-06",25,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO HERNANDO FARIAS",546.06,0,"","Boleto Amigo","c",""],["r","2026-05",25,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO HERNANDO FARIAS",546.06,0,"","Boleto Amigo","k",""],["r","2026-06",25,"VENDA DE PRODUTOS/ SERVIÇOS","GILSON CESAR BARBOSA",416.67,0,"","Boleto Amigo","c",""],["r","2026-04",15,"VENDA DE PRODUTOS/ SERVIÇOS","GILSON CESAR BARBOSA",416.67,0,"","Boleto Amigo","k",""],["r","2026-06",25,"VENDA DE PRODUTOS/ SERVIÇOS","MICHAEL DE JESUS DOS SANTOS SILVA",450,0,"","Boleto Amigo","c",""],["r","2026-04",23,"VENDA DE PRODUTOS/ SERVIÇOS","MICHAEL DE JESUS DOS SANTOS SILVA",450,0,"","Boleto Amigo","k",""],["r","2026-06",25,"VENDA DE PRODUTOS/ SERVIÇOS","GABRIEL DA GUIA SENA",450,0,"","Boleto Amigo","c",""],["r","2026-05",14,"VENDA DE PRODUTOS/ SERVIÇOS","GABRIEL DA GUIA SENA",450,0,"","Boleto Amigo","k",""],["r","2026-06",25,"VENDA DE PRODUTOS/ SERVIÇOS","TALES FERREIRA DE LIMA",450,0,"","Boleto Amigo","c",""],["r","2026-05",7,"VENDA DE PRODUTOS/ SERVIÇOS","TALES FERREIRA DE LIMA",450,0,"","Boleto Amigo","k",""],["r","2026-06",25,"VENDA DE PRODUTOS/ SERVIÇOS","MARLI MARIA DA SILVA SANTOS",450,0,"","Boleto Amigo","c",""],["r","2026-04",17,"VENDA DE PRODUTOS/ SERVIÇOS","MARLI MARIA DA SILVA SANTOS",450,0,"","Boleto Amigo","k",""],["r","2026-06",25,"VENDA DE PRODUTOS/ SERVIÇOS","CIBERLANIA MARIA DE ANDRADE",100,0,"","Boleto Amigo","c",""],["r","2026-05",21,"VENDA DE PRODUTOS/ SERVIÇOS","CIBERLANIA MARIA DE ANDRADE",100,0,"","Boleto Amigo","k",""],["r","2026-06",25,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO JOSIVAN ALVES RODRIGUES",100,0,"","Boleto Amigo","c",""],["r","2026-04",22,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO JOSIVAN ALVES RODRIGUES",100,0,"","Boleto Amigo","k",""],["r","2026-06",25,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE AUGUSTO SOARES SERRAO",450,0,"","Boleto Amigo","c",""],["r","2026-04",10,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE AUGUSTO SOARES SERRAO",450,0,"","Boleto Amigo","k",""],["r","2026-06",24,"VENDA DE PRODUTOS/ SERVIÇOS","ILA MARIA MACIEL NOGUEIRA",466.67,0,"","Boleto Amigo","c",""],["r","2026-04",24,"VENDA DE PRODUTOS/ SERVIÇOS","ILA MARIA MACIEL NOGUEIRA",466.67,0,"","Boleto Amigo","k",""],["r","2026-06",20,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA LEMOS DA SILVA COSTA",450,0,"","Boleto Amigo","c",""],["r","2026-05",20,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA LEMOS DA SILVA COSTA",450,0,"","Boleto Amigo","k",""],["r","2026-06",20,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE ARI SANTOS MACIEL",450,0,"","Boleto Amigo","c",""],["r","2026-01",15,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE ARI SANTOS MACIEL",450,0,"","Boleto Amigo","k",""],["r","2026-06",20,"VENDA DE PRODUTOS/ SERVIÇOS","KAIO RAMOS DE SOUZA BORGES",450,0,"","Boleto Amigo","c",""],["r","2026-03",16,"VENDA DE PRODUTOS/ SERVIÇOS","KAIO RAMOS DE SOUZA BORGES",450,0,"","Boleto Amigo","k",""],["r","2026-06",20,"VENDA DE PRODUTOS/ SERVIÇOS","JUCIVALDO RODRIGUES DURANS",450,0,"","Boleto Amigo","c",""],["r","2026-03",20,"VENDA DE PRODUTOS/ SERVIÇOS","JUCIVALDO RODRIGUES DURANS",450,0,"","Boleto Amigo","k",""],["r","2026-06",20,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA DO SOCORRO SERAFIM",450,0,"","Boleto Amigo","c",""],["r","2026-03",6,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA DO SOCORRO SERAFIM",450,0,"","Boleto Amigo","k",""],["r","2026-06",20,"VENDA DE PRODUTOS/ SERVIÇOS","DAYANE ALVES DE ABREU",500,0,"","Boleto Amigo","c",""],["r","2026-03",25,"VENDA DE PRODUTOS/ SERVIÇOS","DAYANE ALVES DE ABREU",500,0,"","Boleto Amigo","k",""],["r","2026-06",20,"VENDA DE PRODUTOS/ SERVIÇOS","JAIR COSTA LIMA",519.47,0,"","Boleto Amigo","c",""],["r","2026-05",8,"VENDA DE PRODUTOS/ SERVIÇOS","JAIR COSTA LIMA",519.47,0,"","Boleto Amigo","k",""],["r","2026-06",20,"VENDA DE PRODUTOS/ SERVIÇOS","WILLIAM BESERRA GOMES",450,0,"","Boleto Amigo","c",""],["r","2026-02",19,"VENDA DE PRODUTOS/ SERVIÇOS","WILLIAM BESERRA GOMES",450,0,"","Boleto Amigo","k",""],["r","2026-06",20,"VENDA DE PRODUTOS/ SERVIÇOS","GILVANEIDE MESSIAS BARBOSA",100,0,"","Boleto Amigo","c",""],["r","2026-04",30,"VENDA DE PRODUTOS/ SERVIÇOS","GILVANEIDE MESSIAS BARBOSA",100,0,"","Boleto Amigo","k",""],["r","2026-06",20,"VENDA DE PRODUTOS/ SERVIÇOS","LUIZ GABRIEL DE SOUZA DE SOUZA",375,0,"","Boleto Amigo","c",""],["r","2026-03",16,"VENDA DE PRODUTOS/ SERVIÇOS","LUIZ GABRIEL DE SOUZA DE SOUZA",375,0,"","Boleto Amigo","k",""],["r","2026-06",20,"VENDA DE PRODUTOS/ SERVIÇOS","DANIELLY MAUL DA CUNHA MOURA",450,0,"","Boleto Amigo","c",""],["r","2026-03",12,"VENDA DE PRODUTOS/ SERVIÇOS","DANIELLY MAUL DA CUNHA MOURA",450,0,"","Boleto Amigo","k",""],["r","2026-06",20,"VENDA DE PRODUTOS/ SERVIÇOS","WELLEN MENDES MOREIRA LIMA",460,0,"","Boleto Amigo","c",""],["r","2026-03",4,"VENDA DE PRODUTOS/ SERVIÇOS","WELLEN MENDES MOREIRA LIMA",460,0,"","Boleto Amigo","k",""],["r","2026-06",20,"VENDA DE PRODUTOS/ SERVIÇOS","CARLOS ANDRE NUNES DA SILVA",450,0,"","Boleto Amigo","c",""],["r","2026-01",27,"VENDA DE PRODUTOS/ SERVIÇOS","CARLOS ANDRE NUNES DA SILVA",450,0,"","Boleto Amigo","k",""],["r","2026-06",20,"VENDA DE PRODUTOS/ SERVIÇOS","ANDERSON DA SILVA BARRETO",100,0,"","Boleto Amigo","c",""],["r","2026-04",28,"VENDA DE PRODUTOS/ SERVIÇOS","ANDERSON DA SILVA BARRETO",100,0,"","Boleto Amigo","k",""],["r","2026-06",15,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA HELENA DOS SANTOS MORAIS",100,0,"","Boleto Amigo","c",""],["r","2026-03",12,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA HELENA DOS SANTOS MORAIS",100,0,"","Boleto Amigo","k",""],["r","2026-06",15,"VENDA DE PRODUTOS/ SERVIÇOS","JOSIANE FERNANDA DE SOUZA SILVA",450,0,"","Boleto Amigo","c",""],["r","2026-03",30,"VENDA DE PRODUTOS/ SERVIÇOS","JOSIANE FERNANDA DE SOUZA SILVA",450,0,"","Boleto Amigo","k",""],["r","2026-06",15,"VENDA DE PRODUTOS/ SERVIÇOS","ONADINA GOMES OLIVEIRA",450,0,"","Boleto Amigo","c",""],["r","2026-04",6,"VENDA DE PRODUTOS/ SERVIÇOS","ONADINA GOMES OLIVEIRA",450,0,"","Boleto Amigo","k",""],["r","2026-06",15,"VENDA DE PRODUTOS/ SERVIÇOS","GRIMARIO  BRITO DE SOUSA",350,0,"","Boleto Amigo","c",""],["r","2026-03",2,"VENDA DE PRODUTOS/ SERVIÇOS","GRIMARIO  BRITO DE SOUSA",350,0,"","Boleto Amigo","k",""],["r","2026-06",15,"VENDA DE PRODUTOS/ SERVIÇOS","SHIRLIANE DA SILVA BEZERRA",450,0,"","Boleto Amigo","c",""],["r","2026-05",6,"VENDA DE PRODUTOS/ SERVIÇOS","SHIRLIANE DA SILVA BEZERRA",450,0,"","Boleto Amigo","k",""],["r","2026-06",15,"VENDA DE PRODUTOS/ SERVIÇOS","EDNIVALDO MESQUITA PEREIRA",450,0,"","Boleto Amigo","c",""],["r","2026-04",9,"VENDA DE PRODUTOS/ SERVIÇOS","EDNIVALDO MESQUITA PEREIRA",450,0,"","Boleto Amigo","k",""],["r","2026-06",15,"VENDA DE PRODUTOS/ SERVIÇOS","JOSEILTON BERTO BIZERRA",450,0,"","Boleto Amigo","c",""],["r","2026-05",13,"VENDA DE PRODUTOS/ SERVIÇOS","JOSEILTON BERTO BIZERRA",450,0,"","Boleto Amigo","k",""],["r","2026-06",10,"VENDA DE PRODUTOS/ SERVIÇOS","GRACENIRA GONCALVES DE OLIVEIRA",450,0,"","Boleto Amigo","c",""],["r","2026-03",12,"VENDA DE PRODUTOS/ SERVIÇOS","GRACENIRA GONCALVES DE OLIVEIRA",450,0,"","Boleto Amigo","k",""],["r","2026-06",10,"VENDA DE PRODUTOS/ SERVIÇOS","WILLYSON FERREIRA MATOS",450,0,"","Boleto Amigo","c",""],["r","2026-03",23,"VENDA DE PRODUTOS/ SERVIÇOS","WILLYSON FERREIRA MATOS",450,0,"","Boleto Amigo","k",""],["r","2026-06",10,"VENDA DE PRODUTOS/ SERVIÇOS","FLAVIO ROBERTO NASCIMENTO PEREIRA",466.67,0,"","Boleto Amigo","c",""],["r","2026-01",9,"VENDA DE PRODUTOS/ SERVIÇOS","FLAVIO ROBERTO NASCIMENTO PEREIRA",466.67,0,"","Boleto Amigo","k",""],["r","2026-06",10,"VENDA DE PRODUTOS/ SERVIÇOS","KLEBER DE ALMEIDA",450,0,"","Boleto Amigo","c",""],["r","2026-01",7,"VENDA DE PRODUTOS/ SERVIÇOS","KLEBER DE ALMEIDA",450,0,"","Boleto Amigo","k",""],["r","2026-06",10,"VENDA DE PRODUTOS/ SERVIÇOS","WASHINGTON TORQUATO DE LIMA JUNIOR",383.35,0,"","Boleto Amigo","c",""],["r","2025-12",18,"VENDA DE PRODUTOS/ SERVIÇOS","WASHINGTON TORQUATO DE LIMA JUNIOR",383.35,0,"","Boleto Amigo","k",""],["r","2026-06",10,"VENDA DE PRODUTOS/ SERVIÇOS","ALAN NIXON ARAGAO RIBEIRO",450,0,"","Boleto Amigo","c",""],["r","2026-03",20,"VENDA DE PRODUTOS/ SERVIÇOS","ALAN NIXON ARAGAO RIBEIRO",450,0,"","Boleto Amigo","k",""],["r","2026-06",10,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA AURILENE DA SILVA CAVALCANTE",250,0,"","Boleto Amigo","c",""],["r","2026-05",11,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA AURILENE DA SILVA CAVALCANTE",250,0,"","Boleto Amigo","k",""],["r","2026-06",10,"VENDA DE PRODUTOS/ SERVIÇOS","LUCIVANIA DE OLIVEIRA DO NASCIMENTO",450,0,"","Boleto Amigo","c",""],["r","2026-04",10,"VENDA DE PRODUTOS/ SERVIÇOS","LUCIVANIA DE OLIVEIRA DO NASCIMENTO",450,0,"","Boleto Amigo","k",""],["r","2026-06",10,"VENDA DE PRODUTOS/ SERVIÇOS","MARILZA ARAUJO OLIVEIRA",503.78,0,"","Boleto Amigo","c",""],["r","2026-05",11,"VENDA DE PRODUTOS/ SERVIÇOS","MARILZA ARAUJO OLIVEIRA",503.78,0,"","Boleto Amigo","k",""],["r","2026-06",10,"VENDA DE PRODUTOS/ SERVIÇOS","MARIO AUGUSTO DA SILVA SANTOS",450,0,"","Boleto Amigo","c",""],["r","2026-03",5,"VENDA DE PRODUTOS/ SERVIÇOS","MARIO AUGUSTO DA SILVA SANTOS",450,0,"","Boleto Amigo","k",""],["r","2026-06",10,"VENDA DE PRODUTOS/ SERVIÇOS","EDILSON DE OLIVEIRA PATOS",333.33,0,"","Boleto Amigo","c",""],["r","2026-04",17,"VENDA DE PRODUTOS/ SERVIÇOS","EDILSON DE OLIVEIRA PATOS",333.33,0,"","Boleto Amigo","k",""],["r","2026-06",10,"VENDA DE PRODUTOS/ SERVIÇOS","EDUARDA ANDRADE DO NASCIMENTO",450,0,"","Boleto Amigo","c",""],["r","2026-01",13,"VENDA DE PRODUTOS/ SERVIÇOS","EDUARDA ANDRADE DO NASCIMENTO",450,0,"","Boleto Amigo","k",""],["r","2026-06",10,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO MAGDO GUEDES MESQUITA",383.35,0,"","Boleto Amigo","c",""],["r","2025-12",3,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO MAGDO GUEDES MESQUITA",383.35,0,"","Boleto Amigo","k",""],["r","2026-06",10,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO ANTONIO PAULA DOS SANTOS",100,0,"","Boleto Amigo","c",""],["r","2026-03",20,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO ANTONIO PAULA DOS SANTOS",100,0,"","Boleto Amigo","k",""],["r","2026-06",10,"VENDA DE PRODUTOS/ SERVIÇOS","SOCORRO ALVES ROLIM RAMOS",100,0,"","Boleto Amigo","c",""],["r","2026-03",5,"VENDA DE PRODUTOS/ SERVIÇOS","SOCORRO ALVES ROLIM RAMOS",100,0,"","Boleto Amigo","k",""],["r","2026-06",10,"VENDA DE PRODUTOS/ SERVIÇOS","CESAR NILDO DE BRITO OLIVEIRA",383.35,0,"","Boleto Amigo","c",""],["r","2025-12",4,"VENDA DE PRODUTOS/ SERVIÇOS","CESAR NILDO DE BRITO OLIVEIRA",383.35,0,"","Boleto Amigo","k",""],["r","2026-06",10,"VENDA DE PRODUTOS/ SERVIÇOS","CLERTON CUNHA GOMES",467.75,0,"","Boleto Amigo","c",""],["r","2026-05",6,"VENDA DE PRODUTOS/ SERVIÇOS","CLERTON CUNHA GOMES",467.75,0,"","Boleto Amigo","k",""],["r","2026-06",10,"VENDA DE PRODUTOS/ SERVIÇOS","ILZA LIMA DA SILVA",450,0,"","Boleto Amigo","c",""],["r","2026-03",17,"VENDA DE PRODUTOS/ SERVIÇOS","ILZA LIMA DA SILVA",450,0,"","Boleto Amigo","k",""],["r","2026-06",10,"VENDA DE PRODUTOS/ SERVIÇOS","SIMONE FERNANDES DE SOUZA",383.35,0,"","Boleto Amigo","c",""],["r","2025-12",2,"VENDA DE PRODUTOS/ SERVIÇOS","SIMONE FERNANDES DE SOUZA",383.35,0,"","Boleto Amigo","k",""],["r","2026-06",10,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GILSON CASTRO DE ALMEIDA",450,0,"","Boleto Amigo","c",""],["r","2026-04",2,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GILSON CASTRO DE ALMEIDA",450,0,"","Boleto Amigo","k",""],["r","2026-06",10,"VENDA DE PRODUTOS/ SERVIÇOS","LEIDLENE MAGNA DE ALENCAR",450,0,"","Boleto Amigo","c",""],["r","2026-02",2,"VENDA DE PRODUTOS/ SERVIÇOS","LEIDLENE MAGNA DE ALENCAR",450,0,"","Boleto Amigo","k",""],["r","2026-06",10,"VENDA DE PRODUTOS/ SERVIÇOS","JULIANA PEREIRA DOS SANTOS",450,0,"","Boleto Amigo","c",""],["r","2026-05",11,"VENDA DE PRODUTOS/ SERVIÇOS","JULIANA PEREIRA DOS SANTOS",450,0,"","Boleto Amigo","k",""],["r","2026-06",10,"VENDA DE PRODUTOS/ SERVIÇOS","JEFFERSON HUGO BANDEIRA DE FRANCA",100,0,"","Boleto Amigo","c",""],["r","2026-03",9,"VENDA DE PRODUTOS/ SERVIÇOS","JEFFERSON HUGO BANDEIRA DE FRANCA",100,0,"","Boleto Amigo","k",""],["r","2026-06",10,"VENDA DE PRODUTOS/ SERVIÇOS","FERNANDO WILLIAM RIBEIRO ROCHA",450,0,"","Boleto Amigo","c",""],["r","2026-04",1,"VENDA DE PRODUTOS/ SERVIÇOS","FERNANDO WILLIAM RIBEIRO ROCHA",450,0,"","Boleto Amigo","k",""],["r","2026-06",10,"VENDA DE PRODUTOS/ SERVIÇOS","MARCOS ANDERSON OLIVEIRA ARAUJO",383.35,0,"","Boleto Amigo","c",""],["r","2025-12",9,"VENDA DE PRODUTOS/ SERVIÇOS","MARCOS ANDERSON OLIVEIRA ARAUJO",383.35,0,"","Boleto Amigo","k",""],["r","2026-06",10,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA MAIARA LIMA MOREIRA",450,0,"","Boleto Amigo","c",""],["r","2026-04",1,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA MAIARA LIMA MOREIRA",450,0,"","Boleto Amigo","k",""],["r","2026-06",10,"VENDA DE PRODUTOS/ SERVIÇOS","RITA MARIA DA COSTA PINTO",450,0,"","Boleto Amigo","c",""],["r","2026-04",10,"VENDA DE PRODUTOS/ SERVIÇOS","RITA MARIA DA COSTA PINTO",450,0,"","Boleto Amigo","k",""],["r","2026-06",10,"VENDA DE PRODUTOS/ SERVIÇOS","LUCAS DE PAIVA MONTEIRO",450,0,"","Boleto Amigo","c",""],["r","2026-03",3,"VENDA DE PRODUTOS/ SERVIÇOS","LUCAS DE PAIVA MONTEIRO",450,0,"","Boleto Amigo","k",""],["r","2026-06",10,"VENDA DE PRODUTOS/ SERVIÇOS","JULIA DE SOUZA FIRMEZA",383.35,0,"","Boleto Amigo","c",""],["r","2025-12",31,"VENDA DE PRODUTOS/ SERVIÇOS","JULIA DE SOUZA FIRMEZA",383.35,0,"","Boleto Amigo","k",""],["r","2026-06",5,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GESSIVALDO PINHEIRO",450,0,"","Boleto Amigo","c",""],["r","2026-02",2,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GESSIVALDO PINHEIRO",450,0,"","Boleto Amigo","k",""],["r","2026-06",5,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE RIBAMAR PEREIRA DE OLIVEIRA",675,0,"","Boleto Amigo","c",""],["r","2026-03",4,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE RIBAMAR PEREIRA DE OLIVEIRA",675,0,"","Boleto Amigo","k",""],["r","2026-06",5,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GESSIVALDO PINHEIRO",450,0,"","Boleto Amigo","c",""],["r","2026-02",2,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GESSIVALDO PINHEIRO",450,0,"","Boleto Amigo","k",""],["r","2026-06",5,"VENDA DE PRODUTOS/ SERVIÇOS","JULIETTE MONICA DA SILVA LEAO",450,0,"","Boleto Amigo","c",""],["r","2026-03",5,"VENDA DE PRODUTOS/ SERVIÇOS","JULIETTE MONICA DA SILVA LEAO",450,0,"","Boleto Amigo","k",""],["r","2026-06",5,"VENDA DE PRODUTOS/ SERVIÇOS","LINDOMAR DE OLIVEIRA",100,0,"","Boleto Amigo","c",""],["r","2026-03",20,"VENDA DE PRODUTOS/ SERVIÇOS","LINDOMAR DE OLIVEIRA",100,0,"","Boleto Amigo","k",""],["r","2026-06",5,"VENDA DE PRODUTOS/ SERVIÇOS","MANOEL CARVALHO DA COSTA",675,0,"","Boleto Amigo","c",""],["r","2026-03",11,"VENDA DE PRODUTOS/ SERVIÇOS","MANOEL CARVALHO DA COSTA",675,0,"","Boleto Amigo","k",""],["r","2026-06",5,"VENDA DE PRODUTOS/ SERVIÇOS","JOACIR ALVES DOS SANTOS",383.33,0,"","Boleto Amigo","c",""],["r","2026-01",2,"VENDA DE PRODUTOS/ SERVIÇOS","JOACIR ALVES DOS SANTOS",383.33,0,"","Boleto Amigo","k",""],["r","2026-05",28,"VENDA DE PRODUTOS/ SERVIÇOS","ALEXANDRE PIRES BESSA",300,1,"","Boleto Amigo","c",""],["r","2026-05",28,"VENDA DE PRODUTOS/ SERVIÇOS","ALEXANDRE PIRES BESSA",300,1,"","Boleto Amigo","k",""],["r","2026-05",25,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO ALVES DE SOUSA FILHO",500,1,"","Boleto Amigo","c",""],["r","2026-03",20,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO ALVES DE SOUSA FILHO",500,1,"","Boleto Amigo","k",""],["r","2026-05",25,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO HERNANDO FARIAS",600,1,"","Boleto Amigo","c",""],["r","2026-05",25,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO HERNANDO FARIAS",600,1,"","Boleto Amigo","k",""],["r","2026-05",25,"VENDA DE PRODUTOS/ SERVIÇOS","IDELFONSO RODRIGUES CAMPOS",416.67,0,"","Boleto Amigo","c",""],["r","2026-04",23,"VENDA DE PRODUTOS/ SERVIÇOS","IDELFONSO RODRIGUES CAMPOS",416.67,0,"","Boleto Amigo","k",""],["r","2026-05",26,"VENDA DE PRODUTOS/ SERVIÇOS","VERONICA PEREIRA RAQUEL DA SILVA TELES",395.1,1,"","Boleto Amigo","c",""],["r","2025-11",27,"VENDA DE PRODUTOS/ SERVIÇOS","VERONICA PEREIRA RAQUEL DA SILVA TELES",395.1,1,"","Boleto Amigo","k",""],["r","2026-05",25,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO JOANDERSON GOMES FERREIRA",383.33,0,"","Boleto Amigo","c",""],["r","2025-12",26,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO JOANDERSON GOMES FERREIRA",383.33,0,"","Boleto Amigo","k",""],["r","2026-05",25,"VENDA DE PRODUTOS/ SERVIÇOS","BRUNO QUENA GOMES DINIZ",675,1,"","Boleto Amigo","c",""],["r","2026-03",18,"VENDA DE PRODUTOS/ SERVIÇOS","BRUNO QUENA GOMES DINIZ",675,1,"","Boleto Amigo","k",""],["r","2026-05",25,"VENDA DE PRODUTOS/ SERVIÇOS","ALLYNE CAROLINA SAMPAIO SILVA",383.33,1,"","Boleto Amigo","c",""],["r","2025-12",2,"VENDA DE PRODUTOS/ SERVIÇOS","ALLYNE CAROLINA SAMPAIO SILVA",383.33,1,"","Boleto Amigo","k",""],["r","2026-05",25,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO JOSIVAN ALVES RODRIGUES",100,1,"","Boleto Amigo","c",""],["r","2026-04",22,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO JOSIVAN ALVES RODRIGUES",100,1,"","Boleto Amigo","k",""],["r","2026-05",27,"VENDA DE PRODUTOS/ SERVIÇOS","MICHAEL DE JESUS DOS SANTOS SILVA",464.1,1,"","Boleto Amigo","c",""],["r","2026-04",23,"VENDA DE PRODUTOS/ SERVIÇOS","MICHAEL DE JESUS DOS SANTOS SILVA",464.1,1,"","Boleto Amigo","k",""],["r","2026-05",7,"VENDA DE PRODUTOS/ SERVIÇOS","MARLI MARIA DA SILVA SANTOS",450,1,"","Boleto Amigo","c",""],["r","2026-04",17,"VENDA DE PRODUTOS/ SERVIÇOS","MARLI MARIA DA SILVA SANTOS",450,1,"","Boleto Amigo","k",""],["r","2026-05",25,"VENDA DE PRODUTOS/ SERVIÇOS","RAFAEL ALVES DA SILVA",450,0,"","Boleto Amigo","c",""],["r","2026-03",9,"VENDA DE PRODUTOS/ SERVIÇOS","RAFAEL ALVES DA SILVA",450,0,"","Boleto Amigo","k",""],["r","2026-05",25,"VENDA DE PRODUTOS/ SERVIÇOS","AUDACI EVARISTO DA COSTA",383.33,1,"","Boleto Amigo","c",""],["r","2025-12",8,"VENDA DE PRODUTOS/ SERVIÇOS","AUDACI EVARISTO DA COSTA",383.33,1,"","Boleto Amigo","k",""],["r","2026-05",25,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA NASCIMENTO GOMES",100,0,"","Boleto Amigo","c",""],["r","2026-03",10,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA NASCIMENTO GOMES",100,0,"","Boleto Amigo","k",""],["r","2026-05",22,"VENDA DE PRODUTOS/ SERVIÇOS","ANDREZA  FERREIRA MARTINS",100,1,"","Boleto Amigo","c",""],["r","2026-03",23,"VENDA DE PRODUTOS/ SERVIÇOS","ANDREZA  FERREIRA MARTINS",100,1,"","Boleto Amigo","k",""],["r","2026-05",25,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO DIONISIO GADELHA DA SILVA",450,0,"","Boleto Amigo","c",""],["r","2026-03",24,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO DIONISIO GADELHA DA SILVA",450,0,"","Boleto Amigo","k",""],["r","2026-05",25,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE AUGUSTO SOARES SERRAO",450,1,"","Boleto Amigo","c",""],["r","2026-04",10,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE AUGUSTO SOARES SERRAO",450,1,"","Boleto Amigo","k",""],["r","2026-05",25,"VENDA DE PRODUTOS/ SERVIÇOS","CARLOS DE SOUSA MARTINS",100,1,"","Boleto Amigo","c",""],["r","2026-03",25,"VENDA DE PRODUTOS/ SERVIÇOS","CARLOS DE SOUSA MARTINS",100,1,"","Boleto Amigo","k",""],["r","2026-05",14,"VENDA DE PRODUTOS/ SERVIÇOS","GILSON CESAR BARBOSA",416.67,1,"","Boleto Amigo","c",""],["r","2026-04",15,"VENDA DE PRODUTOS/ SERVIÇOS","GILSON CESAR BARBOSA",416.67,1,"","Boleto Amigo","k",""],["r","2026-05",25,"VENDA DE PRODUTOS/ SERVIÇOS","MARCUS THADEU FERNANDES ARRAES",500,0,"","Boleto Amigo","c",""],["r","2026-02",20,"VENDA DE PRODUTOS/ SERVIÇOS","MARCUS THADEU FERNANDES ARRAES",500,0,"","Boleto Amigo","k",""],["r","2026-05",25,"VENDA DE PRODUTOS/ SERVIÇOS","SILVANIA PEREIRA DE SOUSA",675,0,"","Boleto Amigo","c",""],["r","2026-01",9,"VENDA DE PRODUTOS/ SERVIÇOS","SILVANIA PEREIRA DE SOUSA",675,0,"","Boleto Amigo","k",""],["r","2026-05",25,"VENDA DE PRODUTOS/ SERVIÇOS","ATHIRSON BRENDO SOUSA SILVA",450,0,"","Boleto Amigo","c",""],["r","2026-03",18,"VENDA DE PRODUTOS/ SERVIÇOS","ATHIRSON BRENDO SOUSA SILVA",450,0,"","Boleto Amigo","k",""],["r","2026-05",25,"VENDA DE PRODUTOS/ SERVIÇOS","EDNA COSTA DE JESUS ALVES",450,1,"","Boleto Amigo","c",""],["r","2026-01",14,"VENDA DE PRODUTOS/ SERVIÇOS","EDNA COSTA DE JESUS ALVES",450,1,"","Boleto Amigo","k",""],["r","2026-05",27,"VENDA DE PRODUTOS/ SERVIÇOS","LIDIANE ALMEIDA SILVA",464.08,1,"","Boleto Amigo","c",""],["r","2026-01",14,"VENDA DE PRODUTOS/ SERVIÇOS","LIDIANE ALMEIDA SILVA",464.08,1,"","Boleto Amigo","k",""],["r","2026-05",25,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCYVANIA GOMES CHAGAS",884.33,0,"","Boleto Amigo","c",""],["r","2026-04",15,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCYVANIA GOMES CHAGAS",884.33,0,"","Boleto Amigo","k",""],["r","2026-05",25,"VENDA DE PRODUTOS/ SERVIÇOS","LUCIANA SILVA MEDEIROS",466.67,0,"","Boleto Amigo","c",""],["r","2026-02",10,"VENDA DE PRODUTOS/ SERVIÇOS","LUCIANA SILVA MEDEIROS",466.67,0,"","Boleto Amigo","k",""],["r","2026-05",25,"VENDA DE PRODUTOS/ SERVIÇOS","UALAS NEVES SILVA",450,0,"","Boleto Amigo","c",""],["r","2026-03",31,"VENDA DE PRODUTOS/ SERVIÇOS","UALAS NEVES SILVA",450,0,"","Boleto Amigo","k",""],["r","2026-05",25,"VENDA DE PRODUTOS/ SERVIÇOS","LILIAN LIMA DIAS",450,0,"","Boleto Amigo","c",""],["r","2026-03",3,"VENDA DE PRODUTOS/ SERVIÇOS","LILIAN LIMA DIAS",450,0,"","Boleto Amigo","k",""],["r","2026-05",25,"VENDA DE PRODUTOS/ SERVIÇOS","FABIO DE SOUZA BARBOSA",450,1,"","Boleto Amigo","c",""],["r","2026-01",23,"VENDA DE PRODUTOS/ SERVIÇOS","FABIO DE SOUZA BARBOSA",450,1,"","Boleto Amigo","k",""],["r","2026-05",29,"VENDA DE PRODUTOS/ SERVIÇOS","ELINILDA MACEDO DA SILVA",395.85,1,"","Boleto Amigo","c",""],["r","2025-11",17,"VENDA DE PRODUTOS/ SERVIÇOS","ELINILDA MACEDO DA SILVA",395.85,1,"","Boleto Amigo","k",""],["r","2026-05",25,"VENDA DE PRODUTOS/ SERVIÇOS","ANDRE LUIZ MARQUES MARTINS",450,0,"","Boleto Amigo","c",""],["r","2026-04",24,"VENDA DE PRODUTOS/ SERVIÇOS","ANDRE LUIZ MARQUES MARTINS",450,0,"","Boleto Amigo","k",""],["r","2026-05",25,"VENDA DE PRODUTOS/ SERVIÇOS","IRANILDO DE LIMA OLIVEIRA",100,1,"","Boleto Amigo","c",""],["r","2026-04",16,"VENDA DE PRODUTOS/ SERVIÇOS","IRANILDO DE LIMA OLIVEIRA",100,1,"","Boleto Amigo","k",""],["r","2026-05",22,"VENDA DE PRODUTOS/ SERVIÇOS","ILA MARIA MACIEL NOGUEIRA",466.67,1,"","Boleto Amigo","c",""],["r","2026-04",24,"VENDA DE PRODUTOS/ SERVIÇOS","ILA MARIA MACIEL NOGUEIRA",466.67,1,"","Boleto Amigo","k",""],["r","2026-05",21,"VENDA DE PRODUTOS/ SERVIÇOS","CIBERLANIA MARIA DE ANDRADE",100,1,"","Boleto Amigo","c",""],["r","2026-05",21,"VENDA DE PRODUTOS/ SERVIÇOS","CIBERLANIA MARIA DE ANDRADE",100,1,"","Boleto Amigo","k",""],["r","2026-05",20,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO EVANILDO COSTA DOS SANTOS",383.35,0,"","Boleto Amigo","c",""],["r","2025-11",4,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO EVANILDO COSTA DOS SANTOS",383.35,0,"","Boleto Amigo","k",""],["r","2026-05",15,"VENDA DE PRODUTOS/ SERVIÇOS","LUIZ GABRIEL DE SOUZA DE SOUZA",375,1,"","Boleto Amigo","c",""],["r","2026-03",16,"VENDA DE PRODUTOS/ SERVIÇOS","LUIZ GABRIEL DE SOUZA DE SOUZA",375,1,"","Boleto Amigo","k",""],["r","2026-05",26,"VENDA DE PRODUTOS/ SERVIÇOS","ALEXANDRE MARTINS DA SILVA",396.35,1,"","Boleto Amigo","c",""],["r","2025-11",18,"VENDA DE PRODUTOS/ SERVIÇOS","ALEXANDRE MARTINS DA SILVA",396.35,1,"","Boleto Amigo","k",""],["r","2026-05",20,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA DO SOCORRO SERAFIM",450,0,"","Boleto Amigo","c",""],["r","2026-03",6,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA DO SOCORRO SERAFIM",450,0,"","Boleto Amigo","k",""],["r","2026-05",20,"VENDA DE PRODUTOS/ SERVIÇOS","JUCIVALDO RODRIGUES DURANS",450,0,"","Boleto Amigo","c",""],["r","2026-03",20,"VENDA DE PRODUTOS/ SERVIÇOS","JUCIVALDO RODRIGUES DURANS",450,0,"","Boleto Amigo","k",""],["r","2026-05",20,"VENDA DE PRODUTOS/ SERVIÇOS","CARLOS ANDRE NUNES DA SILVA",450,0,"","Boleto Amigo","c",""],["r","2026-01",27,"VENDA DE PRODUTOS/ SERVIÇOS","CARLOS ANDRE NUNES DA SILVA",450,0,"","Boleto Amigo","k",""],["r","2026-05",21,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE ARI SANTOS MACIEL",463.79,1,"","Boleto Amigo","c",""],["r","2026-01",15,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE ARI SANTOS MACIEL",463.79,1,"","Boleto Amigo","k",""],["r","2026-05",25,"VENDA DE PRODUTOS/ SERVIÇOS","KAIO RAMOS DE SOUZA BORGES",464.95,1,"","Boleto Amigo","c",""],["r","2026-03",16,"VENDA DE PRODUTOS/ SERVIÇOS","KAIO RAMOS DE SOUZA BORGES",464.95,1,"","Boleto Amigo","k",""],["r","2026-05",20,"VENDA DE PRODUTOS/ SERVIÇOS","GILVANEIDE MESSIAS BARBOSA",100,1,"","Boleto Amigo","c",""],["r","2026-04",30,"VENDA DE PRODUTOS/ SERVIÇOS","GILVANEIDE MESSIAS BARBOSA",100,1,"","Boleto Amigo","k",""],["r","2026-05",20,"VENDA DE PRODUTOS/ SERVIÇOS","DAYANE ALVES DE ABREU",500,0,"","Boleto Amigo","c",""],["r","2026-03",25,"VENDA DE PRODUTOS/ SERVIÇOS","DAYANE ALVES DE ABREU",500,0,"","Boleto Amigo","k",""],["r","2026-05",28,"VENDA DE PRODUTOS/ SERVIÇOS","WELLEN MENDES MOREIRA LIMA",476.2,1,"","Boleto Amigo","c",""],["r","2026-03",4,"VENDA DE PRODUTOS/ SERVIÇOS","WELLEN MENDES MOREIRA LIMA",476.2,1,"","Boleto Amigo","k",""],["r","2026-05",20,"VENDA DE PRODUTOS/ SERVIÇOS","ANDERSON DA SILVA BARRETO",100,1,"","Boleto Amigo","c",""],["r","2026-04",28,"VENDA DE PRODUTOS/ SERVIÇOS","ANDERSON DA SILVA BARRETO",100,1,"","Boleto Amigo","k",""],["r","2026-05",11,"VENDA DE PRODUTOS/ SERVIÇOS","WILLIAM BESERRA GOMES",450,1,"","Boleto Amigo","c",""],["r","2026-02",19,"VENDA DE PRODUTOS/ SERVIÇOS","WILLIAM BESERRA GOMES",450,1,"","Boleto Amigo","k",""],["r","2026-05",20,"VENDA DE PRODUTOS/ SERVIÇOS","DANIELLY MAUL DA CUNHA MOURA",450,0,"","Boleto Amigo","c",""],["r","2026-03",12,"VENDA DE PRODUTOS/ SERVIÇOS","DANIELLY MAUL DA CUNHA MOURA",450,0,"","Boleto Amigo","k",""],["r","2026-05",18,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA LEMOS DA SILVA COSTA",300,1,"","Boleto Amigo","c",""],["r","2026-05",20,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA LEMOS DA SILVA COSTA",300,1,"","Boleto Amigo","k",""],["r","2026-05",7,"VENDA DE PRODUTOS/ SERVIÇOS","ONADINA GOMES OLIVEIRA",450,1,"","Boleto Amigo","c",""],["r","2026-04",6,"VENDA DE PRODUTOS/ SERVIÇOS","ONADINA GOMES OLIVEIRA",450,1,"","Boleto Amigo","k",""],["r","2026-05",15,"VENDA DE PRODUTOS/ SERVIÇOS","DOUGLAS MIRANDA",200,0,"","Boleto Amigo","c",""],["r","2026-03",13,"VENDA DE PRODUTOS/ SERVIÇOS","DOUGLAS MIRANDA",200,0,"","Boleto Amigo","k",""],["r","2026-05",15,"VENDA DE PRODUTOS/ SERVIÇOS","JOSIANE FERNANDA DE SOUZA SILVA",450,1,"","Boleto Amigo","c",""],["r","2026-03",30,"VENDA DE PRODUTOS/ SERVIÇOS","JOSIANE FERNANDA DE SOUZA SILVA",450,1,"","Boleto Amigo","k",""],["r","2026-05",15,"VENDA DE PRODUTOS/ SERVIÇOS","GRIMARIO  BRITO DE SOUSA",350,0,"","Boleto Amigo","c",""],["r","2026-03",2,"VENDA DE PRODUTOS/ SERVIÇOS","GRIMARIO  BRITO DE SOUSA",350,0,"","Boleto Amigo","k",""],["r","2026-05",11,"VENDA DE PRODUTOS/ SERVIÇOS","EDNIVALDO MESQUITA PEREIRA",450,1,"","Boleto Amigo","c",""],["r","2026-04",9,"VENDA DE PRODUTOS/ SERVIÇOS","EDNIVALDO MESQUITA PEREIRA",450,1,"","Boleto Amigo","k",""],["r","2026-05",15,"VENDA DE PRODUTOS/ SERVIÇOS","VANDERSON BARROS DE SOUZA",383.35,0,"","Boleto Amigo","c",""],["r","2025-11",11,"VENDA DE PRODUTOS/ SERVIÇOS","VANDERSON BARROS DE SOUZA",383.35,0,"","Boleto Amigo","k",""],["r","2026-05",15,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA HELENA DOS SANTOS MORAIS",100,1,"","Boleto Amigo","c",""],["r","2026-03",12,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA HELENA DOS SANTOS MORAIS",100,1,"","Boleto Amigo","k",""],["r","2026-05",13,"VENDA DE PRODUTOS/ SERVIÇOS","GABRIEL DA GUIA SENA",300,1,"","Boleto Amigo","c",""],["r","2026-05",14,"VENDA DE PRODUTOS/ SERVIÇOS","GABRIEL DA GUIA SENA",300,1,"","Boleto Amigo","k",""],["r","2026-05",13,"VENDA DE PRODUTOS/ SERVIÇOS","KAIO RAMOS DE SOUZA BORGES",450,1,"","Boleto Amigo","c",""],["r","2026-03",16,"VENDA DE PRODUTOS/ SERVIÇOS","KAIO RAMOS DE SOUZA BORGES",450,1,"","Boleto Amigo","k",""],["r","2026-05",13,"VENDA DE PRODUTOS/ SERVIÇOS","JOSEILTON BERTO BIZERRA",300,1,"","Boleto Amigo","c",""],["r","2026-05",13,"VENDA DE PRODUTOS/ SERVIÇOS","JOSEILTON BERTO BIZERRA",300,1,"","Boleto Amigo","k",""],["r","2026-05",11,"VENDA DE PRODUTOS/ SERVIÇOS","MARILZA ARAUJO OLIVEIRA",500,1,"","Boleto Amigo","c",""],["r","2026-05",11,"VENDA DE PRODUTOS/ SERVIÇOS","MARILZA ARAUJO OLIVEIRA",500,1,"","Boleto Amigo","k",""],["r","2026-05",11,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA AURILENE DA SILVA CAVALCANTE",1500,1,"","Boleto Amigo","c",""],["r","2026-05",11,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA AURILENE DA SILVA CAVALCANTE",1500,1,"","Boleto Amigo","k",""],["r","2026-05",11,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO MAGDO GUEDES MESQUITA",383.33,1,"","Boleto Amigo","c",""],["r","2025-12",3,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO MAGDO GUEDES MESQUITA",383.33,1,"","Boleto Amigo","k",""],["r","2026-05",10,"VENDA DE PRODUTOS/ SERVIÇOS","FLAVIO ROBERTO NASCIMENTO PEREIRA",466.67,0,"","Boleto Amigo","c",""],["r","2026-01",9,"VENDA DE PRODUTOS/ SERVIÇOS","FLAVIO ROBERTO NASCIMENTO PEREIRA",466.67,0,"","Boleto Amigo","k",""],["r","2026-05",6,"VENDA DE PRODUTOS/ SERVIÇOS","ALAN NIXON ARAGAO RIBEIRO",450,1,"","Boleto Amigo","c",""],["r","2026-03",20,"VENDA DE PRODUTOS/ SERVIÇOS","ALAN NIXON ARAGAO RIBEIRO",450,1,"","Boleto Amigo","k",""],["r","2026-05",11,"VENDA DE PRODUTOS/ SERVIÇOS","EDILSON DE OLIVEIRA PATOS",333.33,1,"","Boleto Amigo","c",""],["r","2026-04",17,"VENDA DE PRODUTOS/ SERVIÇOS","EDILSON DE OLIVEIRA PATOS",333.33,1,"","Boleto Amigo","k",""],["r","2026-05",11,"VENDA DE PRODUTOS/ SERVIÇOS","LUCAS DE PAIVA MONTEIRO",450,1,"","Boleto Amigo","c",""],["r","2026-03",3,"VENDA DE PRODUTOS/ SERVIÇOS","LUCAS DE PAIVA MONTEIRO",450,1,"","Boleto Amigo","k",""],["r","2026-05",11,"VENDA DE PRODUTOS/ SERVIÇOS","WILLYSON FERREIRA MATOS",450,1,"","Boleto Amigo","c",""],["r","2026-03",23,"VENDA DE PRODUTOS/ SERVIÇOS","WILLYSON FERREIRA MATOS",450,1,"","Boleto Amigo","k",""],["r","2026-05",10,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GENECY DE SOUSA SANTOS",383.35,0,"","Boleto Amigo","c",""],["r","2025-11",5,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GENECY DE SOUSA SANTOS",383.35,0,"","Boleto Amigo","k",""],["r","2026-05",10,"VENDA DE PRODUTOS/ SERVIÇOS","WASHINGTON TORQUATO DE LIMA JUNIOR",383.33,0,"","Boleto Amigo","c",""],["r","2025-12",18,"VENDA DE PRODUTOS/ SERVIÇOS","WASHINGTON TORQUATO DE LIMA JUNIOR",383.33,0,"","Boleto Amigo","k",""],["r","2026-05",10,"VENDA DE PRODUTOS/ SERVIÇOS","KLEBER DE ALMEIDA",450,0,"","Boleto Amigo","c",""],["r","2026-01",7,"VENDA DE PRODUTOS/ SERVIÇOS","KLEBER DE ALMEIDA",450,0,"","Boleto Amigo","k",""],["r","2026-05",26,"VENDA DE PRODUTOS/ SERVIÇOS","MARIO AUGUSTO DA SILVA SANTOS",467.85,1,"","Boleto Amigo","c",""],["r","2026-03",5,"VENDA DE PRODUTOS/ SERVIÇOS","MARIO AUGUSTO DA SILVA SANTOS",467.85,1,"","Boleto Amigo","k",""],["r","2026-05",10,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO ANTONIO PAULA DOS SANTOS",100,0,"","Boleto Amigo","c",""],["r","2026-03",20,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO ANTONIO PAULA DOS SANTOS",100,0,"","Boleto Amigo","k",""],["r","2026-05",10,"VENDA DE PRODUTOS/ SERVIÇOS","FERNANDO WILLIAM RIBEIRO ROCHA",450,0,"","Boleto Amigo","c",""],["r","2026-04",1,"VENDA DE PRODUTOS/ SERVIÇOS","FERNANDO WILLIAM RIBEIRO ROCHA",450,0,"","Boleto Amigo","k",""],["r","2026-05",10,"VENDA DE PRODUTOS/ SERVIÇOS","ILZA LIMA DA SILVA",450,0,"","Boleto Amigo","c",""],["r","2026-03",17,"VENDA DE PRODUTOS/ SERVIÇOS","ILZA LIMA DA SILVA",450,0,"","Boleto Amigo","k",""],["r","2026-05",5,"VENDA DE PRODUTOS/ SERVIÇOS","SIMONE FERNANDES DE SOUZA",383.33,1,"","Boleto Amigo","c",""],["r","2025-12",2,"VENDA DE PRODUTOS/ SERVIÇOS","SIMONE FERNANDES DE SOUZA",383.33,1,"","Boleto Amigo","k",""],["r","2026-05",11,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA HELENA EVANGELISTA MARTINS",383.35,1,"","Boleto Amigo","c",""],["r","2025-11",21,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA HELENA EVANGELISTA MARTINS",383.35,1,"","Boleto Amigo","k",""],["r","2026-05",12,"VENDA DE PRODUTOS/ SERVIÇOS","MARCOS ANDERSON OLIVEIRA ARAUJO",395.07,1,"","Boleto Amigo","c",""],["r","2025-12",9,"VENDA DE PRODUTOS/ SERVIÇOS","MARCOS ANDERSON OLIVEIRA ARAUJO",395.07,1,"","Boleto Amigo","k",""],["r","2026-04",23,"VENDA DE PRODUTOS/ SERVIÇOS","JEFFERSON HUGO BANDEIRA DE FRANCA",100,1,"","Boleto Amigo","c",""],["r","2026-03",9,"VENDA DE PRODUTOS/ SERVIÇOS","JEFFERSON HUGO BANDEIRA DE FRANCA",100,1,"","Boleto Amigo","k",""],["r","2026-05",11,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA MAIARA LIMA MOREIRA",450,1,"","Boleto Amigo","c",""],["r","2026-04",1,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA MAIARA LIMA MOREIRA",450,1,"","Boleto Amigo","k",""],["r","2026-05",7,"VENDA DE PRODUTOS/ SERVIÇOS","LUCIVANIA DE OLIVEIRA DO NASCIMENTO",450,1,"","Boleto Amigo","c",""],["r","2026-04",10,"VENDA DE PRODUTOS/ SERVIÇOS","LUCIVANIA DE OLIVEIRA DO NASCIMENTO",450,1,"","Boleto Amigo","k",""],["r","2026-05",8,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GILSON CASTRO DE ALMEIDA",450,1,"","Boleto Amigo","c",""],["r","2026-04",2,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GILSON CASTRO DE ALMEIDA",450,1,"","Boleto Amigo","k",""],["r","2026-05",11,"VENDA DE PRODUTOS/ SERVIÇOS","CESAR NILDO DE BRITO OLIVEIRA",383.33,1,"","Boleto Amigo","c",""],["r","2025-12",4,"VENDA DE PRODUTOS/ SERVIÇOS","CESAR NILDO DE BRITO OLIVEIRA",383.33,1,"","Boleto Amigo","k",""],["r","2026-05",11,"VENDA DE PRODUTOS/ SERVIÇOS","GRACENIRA GONCALVES DE OLIVEIRA",450,1,"","Boleto Amigo","c",""],["r","2026-03",12,"VENDA DE PRODUTOS/ SERVIÇOS","GRACENIRA GONCALVES DE OLIVEIRA",450,1,"","Boleto Amigo","k",""],["r","2026-05",10,"VENDA DE PRODUTOS/ SERVIÇOS","EDUARDA ANDRADE DO NASCIMENTO",450,0,"","Boleto Amigo","c",""],["r","2026-01",13,"VENDA DE PRODUTOS/ SERVIÇOS","EDUARDA ANDRADE DO NASCIMENTO",450,0,"","Boleto Amigo","k",""],["r","2026-05",13,"VENDA DE PRODUTOS/ SERVIÇOS","RITA MARIA DA COSTA PINTO",464.1,1,"","Boleto Amigo","c",""],["r","2026-04",10,"VENDA DE PRODUTOS/ SERVIÇOS","RITA MARIA DA COSTA PINTO",464.1,1,"","Boleto Amigo","k",""],["r","2026-05",10,"VENDA DE PRODUTOS/ SERVIÇOS","LEIDLENE MAGNA DE ALENCAR",450,0,"","Boleto Amigo","c",""],["r","2026-02",2,"VENDA DE PRODUTOS/ SERVIÇOS","LEIDLENE MAGNA DE ALENCAR",450,0,"","Boleto Amigo","k",""],["r","2026-05",10,"VENDA DE PRODUTOS/ SERVIÇOS","SOCORRO ALVES ROLIM RAMOS",100,0,"","Boleto Amigo","c",""],["r","2026-03",5,"VENDA DE PRODUTOS/ SERVIÇOS","SOCORRO ALVES ROLIM RAMOS",100,0,"","Boleto Amigo","k",""],["r","2026-05",11,"VENDA DE PRODUTOS/ SERVIÇOS","JULIA DE SOUZA FIRMEZA",383.33,1,"","Boleto Amigo","c",""],["r","2025-12",31,"VENDA DE PRODUTOS/ SERVIÇOS","JULIA DE SOUZA FIRMEZA",383.33,1,"","Boleto Amigo","k",""],["r","2026-05",8,"VENDA DE PRODUTOS/ SERVIÇOS","JAIR COSTA LIMA",600,1,"","Boleto Amigo","c",""],["r","2026-05",8,"VENDA DE PRODUTOS/ SERVIÇOS","JAIR COSTA LIMA",600,1,"","Boleto Amigo","k",""],["r","2026-05",6,"VENDA DE PRODUTOS/ SERVIÇOS","TALES FERREIRA DE LIMA",300,1,"","Boleto Amigo","c",""],["r","2026-05",7,"VENDA DE PRODUTOS/ SERVIÇOS","TALES FERREIRA DE LIMA",300,1,"","Boleto Amigo","k",""],["r","2026-05",7,"VENDA DE PRODUTOS/ SERVIÇOS","JULIANA PEREIRA DOS SANTOS",300,1,"","Boleto Amigo","c",""],["r","2026-05",11,"VENDA DE PRODUTOS/ SERVIÇOS","JULIANA PEREIRA DOS SANTOS",300,1,"","Boleto Amigo","k",""],["r","2026-05",6,"VENDA DE PRODUTOS/ SERVIÇOS","CLERTON CUNHA GOMES",600,1,"","Boleto Amigo","c",""],["r","2026-05",6,"VENDA DE PRODUTOS/ SERVIÇOS","CLERTON CUNHA GOMES",600,1,"","Boleto Amigo","k",""],["r","2026-05",6,"VENDA DE PRODUTOS/ SERVIÇOS","JUCIVALDO RODRIGUES DURANS",450,0,"","Boleto Amigo","c",""],["r","2026-03",20,"VENDA DE PRODUTOS/ SERVIÇOS","JUCIVALDO RODRIGUES DURANS",450,0,"","Boleto Amigo","k",""],["r","2026-05",6,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA DO SOCORRO SERAFIM",450,0,"","Boleto Amigo","c",""],["r","2026-03",6,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA DO SOCORRO SERAFIM",450,0,"","Boleto Amigo","k",""],["r","2026-05",6,"VENDA DE PRODUTOS/ SERVIÇOS","SHIRLIANE DA SILVA BEZERRA",300,1,"","Boleto Amigo","c",""],["r","2026-05",6,"VENDA DE PRODUTOS/ SERVIÇOS","SHIRLIANE DA SILVA BEZERRA",300,1,"","Boleto Amigo","k",""],["r","2026-05",6,"VENDA DE PRODUTOS/ SERVIÇOS","RAFAEL ALVES DA SILVA",450,0,"","Boleto Amigo","c",""],["r","2026-03",9,"VENDA DE PRODUTOS/ SERVIÇOS","RAFAEL ALVES DA SILVA",450,0,"","Boleto Amigo","k",""],["r","2026-05",6,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GESSIVALDO PINHEIRO",463.79,1,"","Boleto Amigo","c",""],["r","2026-02",2,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GESSIVALDO PINHEIRO",463.79,1,"","Boleto Amigo","k",""],["r","2026-05",6,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GESSIVALDO PINHEIRO",463.79,1,"","Boleto Amigo","c",""],["r","2026-02",2,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GESSIVALDO PINHEIRO",463.79,1,"","Boleto Amigo","k",""],["r","2026-04",30,"VENDA DE PRODUTOS/ SERVIÇOS","JOAQUIM DA SILVA REIS",383.35,1,"","Boleto Amigo","c",""],["r","2025-11",3,"VENDA DE PRODUTOS/ SERVIÇOS","JOAQUIM DA SILVA REIS",383.35,1,"","Boleto Amigo","k",""],["r","2026-05",4,"VENDA DE PRODUTOS/ SERVIÇOS","MANOEL CARVALHO DA COSTA",675,1,"","Boleto Amigo","c",""],["r","2026-03",11,"VENDA DE PRODUTOS/ SERVIÇOS","MANOEL CARVALHO DA COSTA",675,1,"","Boleto Amigo","k",""],["r","2026-05",22,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE RIBAMAR PEREIRA DE OLIVEIRA",702.73,1,"","Boleto Amigo","c",""],["r","2026-03",4,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE RIBAMAR PEREIRA DE OLIVEIRA",702.73,1,"","Boleto Amigo","k",""],["r","2026-05",4,"VENDA DE PRODUTOS/ SERVIÇOS","JULIETTE MONICA DA SILVA LEAO",450,1,"","Boleto Amigo","c",""],["r","2026-03",5,"VENDA DE PRODUTOS/ SERVIÇOS","JULIETTE MONICA DA SILVA LEAO",450,1,"","Boleto Amigo","k",""],["r","2026-05",5,"VENDA DE PRODUTOS/ SERVIÇOS","ORION ARAUJO PEREIRA",333.35,1,"","Boleto Amigo","c",""],["r","2025-11",21,"VENDA DE PRODUTOS/ SERVIÇOS","ORION ARAUJO PEREIRA",333.35,1,"","Boleto Amigo","k",""],["r","2026-05",4,"VENDA DE PRODUTOS/ SERVIÇOS","LINDOMAR DE OLIVEIRA",100,1,"","Boleto Amigo","c",""],["r","2026-03",20,"VENDA DE PRODUTOS/ SERVIÇOS","LINDOMAR DE OLIVEIRA",100,1,"","Boleto Amigo","k",""],["r","2026-05",25,"VENDA DE PRODUTOS/ SERVIÇOS","JOACIR ALVES DOS SANTOS",399.82,1,"","Boleto Amigo","c",""],["r","2026-01",2,"VENDA DE PRODUTOS/ SERVIÇOS","JOACIR ALVES DOS SANTOS",399.82,1,"","Boleto Amigo","k",""],["r","2026-05",1,"VENDA DE PRODUTOS/ SERVIÇOS","GILVANEIDE MESSIAS BARBOSA",100,1,"","Boleto Amigo","c",""],["r","2026-04",30,"VENDA DE PRODUTOS/ SERVIÇOS","GILVANEIDE MESSIAS BARBOSA",100,1,"","Boleto Amigo","k",""],["r","2026-04",28,"VENDA DE PRODUTOS/ SERVIÇOS","ANDERSON DA SILVA BARRETO",100,1,"","Boleto Amigo","c",""],["r","2026-04",28,"VENDA DE PRODUTOS/ SERVIÇOS","ANDERSON DA SILVA BARRETO",100,1,"","Boleto Amigo","k",""],["r","2026-04",27,"VENDA DE PRODUTOS/ SERVIÇOS","EDNA COSTA DE JESUS ALVES",450,1,"","Boleto Amigo","c",""],["r","2026-01",14,"VENDA DE PRODUTOS/ SERVIÇOS","EDNA COSTA DE JESUS ALVES",450,1,"","Boleto Amigo","k",""],["r","2026-04",30,"VENDA DE PRODUTOS/ SERVIÇOS","UALAS NEVES SILVA",463.8,1,"","Boleto Amigo","c",""],["r","2026-03",31,"VENDA DE PRODUTOS/ SERVIÇOS","UALAS NEVES SILVA",463.8,1,"","Boleto Amigo","k",""],["r","2026-04",16,"VENDA DE PRODUTOS/ SERVIÇOS","EXODO GOMES BRASIL",200,1,"","Boleto Amigo","c",""],["r","2026-02",26,"VENDA DE PRODUTOS/ SERVIÇOS","EXODO GOMES BRASIL",200,1,"","Boleto Amigo","k",""],["r","2026-04",29,"VENDA DE PRODUTOS/ SERVIÇOS","VERONICA PEREIRA RAQUEL DA SILVA TELES",383.33,1,"","Boleto Amigo","c",""],["r","2025-11",27,"VENDA DE PRODUTOS/ SERVIÇOS","VERONICA PEREIRA RAQUEL DA SILVA TELES",383.33,1,"","Boleto Amigo","k",""],["r","2026-04",30,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO DIONISIO GADELHA DA SILVA",463.8,1,"","Boleto Amigo","c",""],["r","2026-03",24,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO DIONISIO GADELHA DA SILVA",463.8,1,"","Boleto Amigo","k",""],["r","2026-04",24,"VENDA DE PRODUTOS/ SERVIÇOS","ANDREZA  FERREIRA MARTINS",100,1,"","Boleto Amigo","c",""],["r","2026-03",23,"VENDA DE PRODUTOS/ SERVIÇOS","ANDREZA  FERREIRA MARTINS",100,1,"","Boleto Amigo","k",""],["r","2026-04",29,"VENDA DE PRODUTOS/ SERVIÇOS","SILVANIA PEREIRA DE SOUSA",675,1,"","Boleto Amigo","c",""],["r","2026-01",9,"VENDA DE PRODUTOS/ SERVIÇOS","SILVANIA PEREIRA DE SOUSA",675,1,"","Boleto Amigo","k",""],["r","2026-04",24,"VENDA DE PRODUTOS/ SERVIÇOS","AUDACI EVARISTO DA COSTA",383.33,1,"","Boleto Amigo","c",""],["r","2025-12",8,"VENDA DE PRODUTOS/ SERVIÇOS","AUDACI EVARISTO DA COSTA",383.33,1,"","Boleto Amigo","k",""],["r","2026-04",25,"VENDA DE PRODUTOS/ SERVIÇOS","LUCIANA SILVA MEDEIROS",466.67,0,"","Boleto Amigo","c",""],["r","2026-02",10,"VENDA DE PRODUTOS/ SERVIÇOS","LUCIANA SILVA MEDEIROS",466.67,0,"","Boleto Amigo","k",""],["r","2026-05",4,"VENDA DE PRODUTOS/ SERVIÇOS","LIDIANE ALMEIDA SILVA",465.53,1,"","Boleto Amigo","c",""],["r","2026-01",14,"VENDA DE PRODUTOS/ SERVIÇOS","LIDIANE ALMEIDA SILVA",465.53,1,"","Boleto Amigo","k",""],["r","2026-04",28,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO ALVES DE SOUSA FILHO",500,1,"","Boleto Amigo","c",""],["r","2026-03",20,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO ALVES DE SOUSA FILHO",500,1,"","Boleto Amigo","k",""],["r","2026-04",27,"VENDA DE PRODUTOS/ SERVIÇOS","ELIZANGELA ALVES DA COSTA",383.35,1,"","Boleto Amigo","c",""],["r","2025-10",27,"VENDA DE PRODUTOS/ SERVIÇOS","ELIZANGELA ALVES DA COSTA",383.35,1,"","Boleto Amigo","k",""],["r","2026-05",5,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO DE PADUA VAZ DE LIMA",396.93,1,"","Boleto Amigo","c",""],["r","2025-10",29,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO DE PADUA VAZ DE LIMA",396.93,1,"","Boleto Amigo","k",""],["r","2026-04",22,"VENDA DE PRODUTOS/ SERVIÇOS","CARLOS DE SOUSA MARTINS",100,1,"","Boleto Amigo","c",""],["r","2026-03",25,"VENDA DE PRODUTOS/ SERVIÇOS","CARLOS DE SOUSA MARTINS",100,1,"","Boleto Amigo","k",""],["r","2026-04",25,"VENDA DE PRODUTOS/ SERVIÇOS","MARCUS THADEU FERNANDES ARRAES",500,0,"","Boleto Amigo","c",""],["r","2026-02",20,"VENDA DE PRODUTOS/ SERVIÇOS","MARCUS THADEU FERNANDES ARRAES",500,0,"","Boleto Amigo","k",""],["r","2026-04",25,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA NASCIMENTO GOMES",100,0,"","Boleto Amigo","c",""],["r","2026-03",10,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA NASCIMENTO GOMES",100,0,"","Boleto Amigo","k",""],["r","2026-04",29,"VENDA DE PRODUTOS/ SERVIÇOS","ALLYNE CAROLINA SAMPAIO SILVA",395.32,1,"","Boleto Amigo","c",""],["r","2025-12",2,"VENDA DE PRODUTOS/ SERVIÇOS","ALLYNE CAROLINA SAMPAIO SILVA",395.32,1,"","Boleto Amigo","k",""],["r","2026-05",4,"VENDA DE PRODUTOS/ SERVIÇOS","ELINILDA MACEDO DA SILVA",396.57,1,"","Boleto Amigo","c",""],["r","2025-11",17,"VENDA DE PRODUTOS/ SERVIÇOS","ELINILDA MACEDO DA SILVA",396.57,1,"","Boleto Amigo","k",""],["r","2026-04",29,"VENDA DE PRODUTOS/ SERVIÇOS","BRUNO QUENA GOMES DINIZ",675,1,"","Boleto Amigo","c",""],["r","2026-03",18,"VENDA DE PRODUTOS/ SERVIÇOS","BRUNO QUENA GOMES DINIZ",675,1,"","Boleto Amigo","k",""],["r","2026-04",30,"VENDA DE PRODUTOS/ SERVIÇOS","LILIAN LIMA DIAS",464.37,1,"","Boleto Amigo","c",""],["r","2026-03",3,"VENDA DE PRODUTOS/ SERVIÇOS","LILIAN LIMA DIAS",464.37,1,"","Boleto Amigo","k",""],["r","2026-04",30,"VENDA DE PRODUTOS/ SERVIÇOS","DEUSIMAR RODRIGUES NASCIMENTO",395.63,1,"","Boleto Amigo","c",""],["r","2025-09",30,"VENDA DE PRODUTOS/ SERVIÇOS","DEUSIMAR RODRIGUES NASCIMENTO",395.63,1,"","Boleto Amigo","k",""],["r","2026-04",29,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO JOANDERSON GOMES FERREIRA",395.32,1,"","Boleto Amigo","c",""],["r","2025-12",26,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO JOANDERSON GOMES FERREIRA",395.32,1,"","Boleto Amigo","k",""],["r","2026-04",29,"VENDA DE PRODUTOS/ SERVIÇOS","FABIO DE SOUZA BARBOSA",450,1,"","Boleto Amigo","c",""],["r","2026-01",23,"VENDA DE PRODUTOS/ SERVIÇOS","FABIO DE SOUZA BARBOSA",450,1,"","Boleto Amigo","k",""],["r","2026-04",25,"VENDA DE PRODUTOS/ SERVIÇOS","ATHIRSON BRENDO SOUSA SILVA",450,0,"","Boleto Amigo","c",""],["r","2026-03",18,"VENDA DE PRODUTOS/ SERVIÇOS","ATHIRSON BRENDO SOUSA SILVA",450,0,"","Boleto Amigo","k",""],["r","2026-04",24,"VENDA DE PRODUTOS/ SERVIÇOS","ANDRE LUIZ MARQUES MARTINS",300,1,"","Boleto Amigo","c",""],["r","2026-04",24,"VENDA DE PRODUTOS/ SERVIÇOS","ANDRE LUIZ MARQUES MARTINS",300,1,"","Boleto Amigo","k",""],["r","2026-04",24,"VENDA DE PRODUTOS/ SERVIÇOS","ILA MARIA MACIEL NOGUEIRA",200,1,"","Boleto Amigo","c",""],["r","2026-04",24,"VENDA DE PRODUTOS/ SERVIÇOS","ILA MARIA MACIEL NOGUEIRA",200,1,"","Boleto Amigo","k",""],["r","2026-04",23,"VENDA DE PRODUTOS/ SERVIÇOS","IDELFONSO RODRIGUES CAMPOS",500,1,"","Boleto Amigo","c",""],["r","2026-04",23,"VENDA DE PRODUTOS/ SERVIÇOS","IDELFONSO RODRIGUES CAMPOS",500,1,"","Boleto Amigo","k",""],["r","2026-04",23,"VENDA DE PRODUTOS/ SERVIÇOS","MICHAEL DE JESUS DOS SANTOS SILVA",300,1,"","Boleto Amigo","c",""],["r","2026-04",23,"VENDA DE PRODUTOS/ SERVIÇOS","MICHAEL DE JESUS DOS SANTOS SILVA",300,1,"","Boleto Amigo","k",""],["r","2026-04",22,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO JOSIVAN ALVES RODRIGUES",100,1,"","Boleto Amigo","c",""],["r","2026-04",22,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO JOSIVAN ALVES RODRIGUES",100,1,"","Boleto Amigo","k",""],["r","2026-04",20,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO EVANILDO COSTA DOS SANTOS",383.33,0,"","Boleto Amigo","c",""],["r","2025-11",4,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO EVANILDO COSTA DOS SANTOS",383.33,0,"","Boleto Amigo","k",""],["r","2026-04",27,"VENDA DE PRODUTOS/ SERVIÇOS","DANIELLY MAUL DA CUNHA MOURA",464.37,1,"","Boleto Amigo","c",""],["r","2026-03",12,"VENDA DE PRODUTOS/ SERVIÇOS","DANIELLY MAUL DA CUNHA MOURA",464.37,1,"","Boleto Amigo","k",""],["r","2026-04",27,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE FRANCISCO PEREIRA",395.63,1,"","Boleto Amigo","c",""],["r","2025-10",15,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE FRANCISCO PEREIRA",395.63,1,"","Boleto Amigo","k",""],["r","2026-04",30,"VENDA DE PRODUTOS/ SERVIÇOS","CARLOS ANDRE NUNES DA SILVA",466.4,1,"","Boleto Amigo","c",""],["r","2026-01",27,"VENDA DE PRODUTOS/ SERVIÇOS","CARLOS ANDRE NUNES DA SILVA",466.4,1,"","Boleto Amigo","k",""],["r","2026-04",9,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO REGINALDO QUINTINO",383.35,1,"","Boleto Amigo","c",""],["r","2025-10",7,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO REGINALDO QUINTINO",383.35,1,"","Boleto Amigo","k",""],["r","2026-04",23,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE ARI SANTOS MACIEL",450,1,"","Boleto Amigo","c",""],["r","2026-01",15,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE ARI SANTOS MACIEL",450,1,"","Boleto Amigo","k",""],["r","2026-04",23,"VENDA DE PRODUTOS/ SERVIÇOS","LUIZ GABRIEL DE SOUZA DE SOUZA",375,1,"","Boleto Amigo","c",""],["r","2026-03",16,"VENDA DE PRODUTOS/ SERVIÇOS","LUIZ GABRIEL DE SOUZA DE SOUZA",375,1,"","Boleto Amigo","k",""],["r","2026-04",24,"VENDA DE PRODUTOS/ SERVIÇOS","DAYANE ALVES DE ABREU",515.68,1,"","Boleto Amigo","c",""],["r","2026-03",25,"VENDA DE PRODUTOS/ SERVIÇOS","DAYANE ALVES DE ABREU",515.68,1,"","Boleto Amigo","k",""],["r","2026-04",27,"VENDA DE PRODUTOS/ SERVIÇOS","WELLEN MENDES MOREIRA LIMA",474.7,1,"","Boleto Amigo","c",""],["r","2026-03",4,"VENDA DE PRODUTOS/ SERVIÇOS","WELLEN MENDES MOREIRA LIMA",474.7,1,"","Boleto Amigo","k",""],["r","2026-05",5,"VENDA DE PRODUTOS/ SERVIÇOS","WILLIAM BESERRA GOMES",467.85,1,"","Boleto Amigo","c",""],["r","2026-02",19,"VENDA DE PRODUTOS/ SERVIÇOS","WILLIAM BESERRA GOMES",467.85,1,"","Boleto Amigo","k",""],["r","2026-05",6,"VENDA DE PRODUTOS/ SERVIÇOS","ALEXANDRE MARTINS DA SILVA",398.82,1,"","Boleto Amigo","c",""],["r","2025-11",18,"VENDA DE PRODUTOS/ SERVIÇOS","ALEXANDRE MARTINS DA SILVA",398.82,1,"","Boleto Amigo","k",""],["r","2026-04",22,"VENDA DE PRODUTOS/ SERVIÇOS","SIMONE NOBRE GASPAR",2700,1,"","Boleto Amigo","c",""],["r","2026-03",5,"VENDA DE PRODUTOS/ SERVIÇOS","SIMONE NOBRE GASPAR",2700,1,"","Boleto Amigo","k",""],["r","2026-04",16,"VENDA DE PRODUTOS/ SERVIÇOS","MARLI MARIA DA SILVA SANTOS",300,1,"","Boleto Amigo","c",""],["r","2026-04",17,"VENDA DE PRODUTOS/ SERVIÇOS","MARLI MARIA DA SILVA SANTOS",300,1,"","Boleto Amigo","k",""],["r","2026-04",8,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA JOCELINA FREIRE DE OLIVEIRA",383.35,1,"","Boleto Amigo","c",""],["r","2025-10",17,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA JOCELINA FREIRE DE OLIVEIRA",383.35,1,"","Boleto Amigo","k",""],["r","2026-04",16,"VENDA DE PRODUTOS/ SERVIÇOS","IRANILDO DE LIMA OLIVEIRA",100,1,"","Boleto Amigo","c",""],["r","2026-04",16,"VENDA DE PRODUTOS/ SERVIÇOS","IRANILDO DE LIMA OLIVEIRA",100,1,"","Boleto Amigo","k",""],["r","2026-04",16,"VENDA DE PRODUTOS/ SERVIÇOS","EDILSON DE OLIVEIRA PATOS",1000,1,"","Boleto Amigo","c",""],["r","2026-04",16,"VENDA DE PRODUTOS/ SERVIÇOS","EDILSON DE OLIVEIRA PATOS",1000,1,"","Boleto Amigo","k",""],["r","2026-04",15,"VENDA DE PRODUTOS/ SERVIÇOS","DOUGLAS MIRANDA",200,0,"","Boleto Amigo","c",""],["r","2026-03",13,"VENDA DE PRODUTOS/ SERVIÇOS","DOUGLAS MIRANDA",200,0,"","Boleto Amigo","k",""],["r","2026-04",20,"VENDA DE PRODUTOS/ SERVIÇOS","CLAUDIO JOSE INACIO JUNIOR",395.11,1,"","Boleto Amigo","c",""],["r","2025-10",21,"VENDA DE PRODUTOS/ SERVIÇOS","CLAUDIO JOSE INACIO JUNIOR",395.11,1,"","Boleto Amigo","k",""],["r","2026-05",8,"VENDA DE PRODUTOS/ SERVIÇOS","VANDERSON BARROS DE SOUZA",400.57,1,"","Boleto Amigo","c",""],["r","2025-11",11,"VENDA DE PRODUTOS/ SERVIÇOS","VANDERSON BARROS DE SOUZA",400.57,1,"","Boleto Amigo","k",""],["r","2026-04",15,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCYVANIA GOMES CHAGAS",300,1,"","Boleto Amigo","c",""],["r","2026-04",15,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCYVANIA GOMES CHAGAS",300,1,"","Boleto Amigo","k",""],["r","2026-04",15,"VENDA DE PRODUTOS/ SERVIÇOS","GILSON CESAR BARBOSA",500,1,"","Boleto Amigo","c",""],["r","2026-04",15,"VENDA DE PRODUTOS/ SERVIÇOS","GILSON CESAR BARBOSA",500,1,"","Boleto Amigo","k",""],["r","2026-04",16,"VENDA DE PRODUTOS/ SERVIÇOS","GRIMARIO  BRITO DE SOUSA",350,1,"","Boleto Amigo","c",""],["r","2026-03",2,"VENDA DE PRODUTOS/ SERVIÇOS","GRIMARIO  BRITO DE SOUSA",350,1,"","Boleto Amigo","k",""],["r","2026-04",14,"VENDA DE PRODUTOS/ SERVIÇOS","ELENICE LOURENCO FELIPE",383.35,1,"","Boleto Amigo","c",""],["r","2025-10",23,"VENDA DE PRODUTOS/ SERVIÇOS","ELENICE LOURENCO FELIPE",383.35,1,"","Boleto Amigo","k",""],["r","2026-04",17,"VENDA DE PRODUTOS/ SERVIÇOS","JOSIANE FERNANDA DE SOUZA SILVA",450,1,"","Boleto Amigo","c",""],["r","2026-03",30,"VENDA DE PRODUTOS/ SERVIÇOS","JOSIANE FERNANDA DE SOUZA SILVA",450,1,"","Boleto Amigo","k",""],["r","2026-05",7,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE ANTONIO BARBOSA DE MOURA",261.24,1,"","Boleto Amigo","c",""],["r","2025-10",24,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE ANTONIO BARBOSA DE MOURA",261.24,1,"","Boleto Amigo","k",""],["r","2026-04",17,"VENDA DE PRODUTOS/ SERVIÇOS","ELIS REGINA BERNARDO COSTA",366.65,1,"","Boleto Amigo","c",""],["r","2025-10",6,"VENDA DE PRODUTOS/ SERVIÇOS","ELIS REGINA BERNARDO COSTA",366.65,1,"","Boleto Amigo","k",""],["r","2026-04",17,"VENDA DE PRODUTOS/ SERVIÇOS","ELIETE ALVES RABELO DOS SANTOS",383.35,1,"","Boleto Amigo","c",""],["r","2025-10",3,"VENDA DE PRODUTOS/ SERVIÇOS","ELIETE ALVES RABELO DOS SANTOS",383.35,1,"","Boleto Amigo","k",""],["r","2026-04",17,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA HELENA DOS SANTOS MORAIS",100,1,"","Boleto Amigo","c",""],["r","2026-03",12,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA HELENA DOS SANTOS MORAIS",100,1,"","Boleto Amigo","k",""],["r","2026-04",10,"VENDA DE PRODUTOS/ SERVIÇOS","DELYNE DO VALE MARTINS BARROSO",383.35,1,"","Boleto Amigo","c",""],["r","2025-09",20,"VENDA DE PRODUTOS/ SERVIÇOS","DELYNE DO VALE MARTINS BARROSO",383.35,1,"","Boleto Amigo","k",""],["r","2026-04",14,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA HELENA EVANGELISTA MARTINS",383.33,1,"","Boleto Amigo","c",""],["r","2025-11",21,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA HELENA EVANGELISTA MARTINS",383.33,1,"","Boleto Amigo","k",""],["r","2026-04",14,"VENDA DE PRODUTOS/ SERVIÇOS","JULIA DE SOUZA FIRMEZA",383.33,1,"","Boleto Amigo","c",""],["r","2025-12",31,"VENDA DE PRODUTOS/ SERVIÇOS","JULIA DE SOUZA FIRMEZA",383.33,1,"","Boleto Amigo","k",""],["r","2026-04",14,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA HALINA ANDRE DOS SANTOS",383.35,1,"","Boleto Amigo","c",""],["r","2025-10",6,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA HALINA ANDRE DOS SANTOS",383.35,1,"","Boleto Amigo","k",""],["r","2026-05",11,"VENDA DE PRODUTOS/ SERVIÇOS","EDUARDA ANDRADE DO NASCIMENTO",472.49,1,"","Boleto Amigo","c",""],["r","2026-01",13,"VENDA DE PRODUTOS/ SERVIÇOS","EDUARDA ANDRADE DO NASCIMENTO",472.49,1,"","Boleto Amigo","k",""],["r","2026-04",1,"VENDA DE PRODUTOS/ SERVIÇOS","SIMONE FERNANDES DE SOUZA",383.33,1,"","Boleto Amigo","c",""],["r","2025-12",2,"VENDA DE PRODUTOS/ SERVIÇOS","SIMONE FERNANDES DE SOUZA",383.33,1,"","Boleto Amigo","k",""],["r","2026-04",23,"VENDA DE PRODUTOS/ SERVIÇOS","KLEBER DE ALMEIDA",466.4,1,"","Boleto Amigo","c",""],["r","2026-01",7,"VENDA DE PRODUTOS/ SERVIÇOS","KLEBER DE ALMEIDA",466.4,1,"","Boleto Amigo","k",""],["r","2026-05",4,"VENDA DE PRODUTOS/ SERVIÇOS","WASHINGTON TORQUATO DE LIMA JUNIOR",400.82,1,"","Boleto Amigo","c",""],["r","2025-12",18,"VENDA DE PRODUTOS/ SERVIÇOS","WASHINGTON TORQUATO DE LIMA JUNIOR",400.82,1,"","Boleto Amigo","k",""],["r","2026-05",25,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GENECY DE SOUSA SANTOS",406.52,1,"","Boleto Amigo","c",""],["r","2025-11",5,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GENECY DE SOUSA SANTOS",406.52,1,"","Boleto Amigo","k",""],["r","2026-04",15,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO MAGDO GUEDES MESQUITA",395.57,1,"","Boleto Amigo","c",""],["r","2025-12",3,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO MAGDO GUEDES MESQUITA",395.57,1,"","Boleto Amigo","k",""],["r","2026-05",7,"VENDA DE PRODUTOS/ SERVIÇOS","FLAVIO ROBERTO NASCIMENTO PEREIRA",489.04,1,"","Boleto Amigo","c",""],["r","2026-01",9,"VENDA DE PRODUTOS/ SERVIÇOS","FLAVIO ROBERTO NASCIMENTO PEREIRA",489.04,1,"","Boleto Amigo","k",""],["r","2026-02",18,"VENDA DE PRODUTOS/ SERVIÇOS","FLAVIO ROBERTO NASCIMENTO PEREIRA",466.67,1,"","Boleto Amigo","c",""],["r","2026-01",9,"VENDA DE PRODUTOS/ SERVIÇOS","FLAVIO ROBERTO NASCIMENTO PEREIRA",466.67,1,"","Boleto Amigo","k",""],["r","2026-04",20,"VENDA DE PRODUTOS/ SERVIÇOS","CRISTIANO REIS DA SILVA",396.41,1,"","Boleto Amigo","c",""],["r","2025-09",24,"VENDA DE PRODUTOS/ SERVIÇOS","CRISTIANO REIS DA SILVA",396.41,1,"","Boleto Amigo","k",""],["r","2026-04",14,"VENDA DE PRODUTOS/ SERVIÇOS","MARCOS ANDERSON OLIVEIRA ARAUJO",383.33,1,"","Boleto Amigo","c",""],["r","2025-12",9,"VENDA DE PRODUTOS/ SERVIÇOS","MARCOS ANDERSON OLIVEIRA ARAUJO",383.33,1,"","Boleto Amigo","k",""],["r","2026-04",14,"VENDA DE PRODUTOS/ SERVIÇOS","CESAR NILDO DE BRITO OLIVEIRA",383.33,1,"","Boleto Amigo","c",""],["r","2025-12",4,"VENDA DE PRODUTOS/ SERVIÇOS","CESAR NILDO DE BRITO OLIVEIRA",383.33,1,"","Boleto Amigo","k",""],["r","2026-04",10,"VENDA DE PRODUTOS/ SERVIÇOS","LUCAS DE PAIVA MONTEIRO",450,1,"","Boleto Amigo","c",""],["r","2026-03",3,"VENDA DE PRODUTOS/ SERVIÇOS","LUCAS DE PAIVA MONTEIRO",450,1,"","Boleto Amigo","k",""],["r","2026-04",10,"VENDA DE PRODUTOS/ SERVIÇOS","ILZA LIMA DA SILVA",450,0,"","Boleto Amigo","c",""],["r","2026-03",17,"VENDA DE PRODUTOS/ SERVIÇOS","ILZA LIMA DA SILVA",450,0,"","Boleto Amigo","k",""],["r","2026-04",14,"VENDA DE PRODUTOS/ SERVIÇOS","JEFFERSON HUGO BANDEIRA DE FRANCA",100,1,"","Boleto Amigo","c",""],["r","2026-03",9,"VENDA DE PRODUTOS/ SERVIÇOS","JEFFERSON HUGO BANDEIRA DE FRANCA",100,1,"","Boleto Amigo","k",""],["r","2026-04",14,"VENDA DE PRODUTOS/ SERVIÇOS","MARIO AUGUSTO DA SILVA SANTOS",450,1,"","Boleto Amigo","c",""],["r","2026-03",5,"VENDA DE PRODUTOS/ SERVIÇOS","MARIO AUGUSTO DA SILVA SANTOS",450,1,"","Boleto Amigo","k",""],["r","2026-04",10,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO ANTONIO PAULA DOS SANTOS",100,0,"","Boleto Amigo","c",""],["r","2026-03",20,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO ANTONIO PAULA DOS SANTOS",100,0,"","Boleto Amigo","k",""],["r","2026-04",10,"VENDA DE PRODUTOS/ SERVIÇOS","RITA MARIA DA COSTA PINTO",300,1,"","Boleto Amigo","c",""],["r","2026-04",10,"VENDA DE PRODUTOS/ SERVIÇOS","RITA MARIA DA COSTA PINTO",300,1,"","Boleto Amigo","k",""],["r","2026-04",10,"VENDA DE PRODUTOS/ SERVIÇOS","LEIDLENE MAGNA DE ALENCAR",450,0,"","Boleto Amigo","c",""],["r","2026-02",2,"VENDA DE PRODUTOS/ SERVIÇOS","LEIDLENE MAGNA DE ALENCAR",450,0,"","Boleto Amigo","k",""],["r","2026-04",14,"VENDA DE PRODUTOS/ SERVIÇOS","GRACENIRA GONCALVES DE OLIVEIRA",450,1,"","Boleto Amigo","c",""],["r","2026-03",12,"VENDA DE PRODUTOS/ SERVIÇOS","GRACENIRA GONCALVES DE OLIVEIRA",450,1,"","Boleto Amigo","k",""],["r","2026-04",10,"VENDA DE PRODUTOS/ SERVIÇOS","FERNANDO WILLIAM RIBEIRO ROCHA",450,0,"","Boleto Amigo","c",""],["r","2026-04",1,"VENDA DE PRODUTOS/ SERVIÇOS","FERNANDO WILLIAM RIBEIRO ROCHA",450,0,"","Boleto Amigo","k",""],["r","2026-04",13,"VENDA DE PRODUTOS/ SERVIÇOS","WILLYSON FERREIRA MATOS",450,1,"","Boleto Amigo","c",""],["r","2026-03",23,"VENDA DE PRODUTOS/ SERVIÇOS","WILLYSON FERREIRA MATOS",450,1,"","Boleto Amigo","k",""],["r","2026-04",10,"VENDA DE PRODUTOS/ SERVIÇOS","SOCORRO ALVES ROLIM RAMOS",100,0,"","Boleto Amigo","c",""],["r","2026-03",5,"VENDA DE PRODUTOS/ SERVIÇOS","SOCORRO ALVES ROLIM RAMOS",100,0,"","Boleto Amigo","k",""],["r","2026-04",14,"VENDA DE PRODUTOS/ SERVIÇOS","ALAN NIXON ARAGAO RIBEIRO",450,1,"","Boleto Amigo","c",""],["r","2026-03",20,"VENDA DE PRODUTOS/ SERVIÇOS","ALAN NIXON ARAGAO RIBEIRO",450,1,"","Boleto Amigo","k",""],["r","2026-04",9,"VENDA DE PRODUTOS/ SERVIÇOS","LUCIVANIA DE OLIVEIRA DO NASCIMENTO",300,1,"","Boleto Amigo","c",""],["r","2026-04",10,"VENDA DE PRODUTOS/ SERVIÇOS","LUCIVANIA DE OLIVEIRA DO NASCIMENTO",300,1,"","Boleto Amigo","k",""],["r","2026-04",9,"VENDA DE PRODUTOS/ SERVIÇOS","EDNIVALDO MESQUITA PEREIRA",300,1,"","Boleto Amigo","c",""],["r","2026-04",9,"VENDA DE PRODUTOS/ SERVIÇOS","EDNIVALDO MESQUITA PEREIRA",300,1,"","Boleto Amigo","k",""],["r","2026-04",9,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE AUGUSTO SOARES SERRAO",300,1,"","Boleto Amigo","c",""],["r","2026-04",9,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE AUGUSTO SOARES SERRAO",300,1,"","Boleto Amigo","k",""],["r","2026-04",6,"VENDA DE PRODUTOS/ SERVIÇOS","ONADINA GOMES OLIVEIRA",300,1,"","Boleto Amigo","c",""],["r","2026-04",6,"VENDA DE PRODUTOS/ SERVIÇOS","ONADINA GOMES OLIVEIRA",300,1,"","Boleto Amigo","k",""],["r","2026-04",8,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GESSIVALDO PINHEIRO",450,1,"","Boleto Amigo","c",""],["r","2026-02",2,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GESSIVALDO PINHEIRO",450,1,"","Boleto Amigo","k",""],["r","2026-04",14,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE RIBAMAR PEREIRA DE OLIVEIRA",697.01,1,"","Boleto Amigo","c",""],["r","2026-03",4,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE RIBAMAR PEREIRA DE OLIVEIRA",697.01,1,"","Boleto Amigo","k",""],["r","2026-04",8,"VENDA DE PRODUTOS/ SERVIÇOS","JOAQUIM DA SILVA REIS",383.33,1,"","Boleto Amigo","c",""],["r","2025-11",3,"VENDA DE PRODUTOS/ SERVIÇOS","JOAQUIM DA SILVA REIS",383.33,1,"","Boleto Amigo","k",""],["r","2026-04",8,"VENDA DE PRODUTOS/ SERVIÇOS","JULIETTE MONICA DA SILVA LEAO",450,1,"","Boleto Amigo","c",""],["r","2026-03",5,"VENDA DE PRODUTOS/ SERVIÇOS","JULIETTE MONICA DA SILVA LEAO",450,1,"","Boleto Amigo","k",""],["r","2026-04",8,"VENDA DE PRODUTOS/ SERVIÇOS","ORION ARAUJO PEREIRA",333.33,1,"","Boleto Amigo","c",""],["r","2025-11",21,"VENDA DE PRODUTOS/ SERVIÇOS","ORION ARAUJO PEREIRA",333.33,1,"","Boleto Amigo","k",""],["r","2026-04",8,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GESSIVALDO PINHEIRO",450,1,"","Boleto Amigo","c",""],["r","2026-02",2,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GESSIVALDO PINHEIRO",450,1,"","Boleto Amigo","k",""],["r","2026-04",6,"VENDA DE PRODUTOS/ SERVIÇOS","MANOEL CARVALHO DA COSTA",675,1,"","Boleto Amigo","c",""],["r","2026-03",11,"VENDA DE PRODUTOS/ SERVIÇOS","MANOEL CARVALHO DA COSTA",675,1,"","Boleto Amigo","k",""],["r","2026-04",6,"VENDA DE PRODUTOS/ SERVIÇOS","LINDOMAR DE OLIVEIRA",100,1,"","Boleto Amigo","c",""],["r","2026-03",20,"VENDA DE PRODUTOS/ SERVIÇOS","LINDOMAR DE OLIVEIRA",100,1,"","Boleto Amigo","k",""],["r","2026-04",23,"VENDA DE PRODUTOS/ SERVIÇOS","JOACIR ALVES DOS SANTOS",398.32,1,"","Boleto Amigo","c",""],["r","2026-01",2,"VENDA DE PRODUTOS/ SERVIÇOS","JOACIR ALVES DOS SANTOS",398.32,1,"","Boleto Amigo","k",""],["r","2026-04",2,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GILSON CASTRO DE ALMEIDA",300,1,"","Boleto Amigo","c",""],["r","2026-04",2,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GILSON CASTRO DE ALMEIDA",300,1,"","Boleto Amigo","k",""],["r","2026-04",1,"VENDA DE PRODUTOS/ SERVIÇOS","FERNANDO WILLIAM RIBEIRO ROCHA",300,1,"","Boleto Amigo","c",""],["r","2026-04",1,"VENDA DE PRODUTOS/ SERVIÇOS","FERNANDO WILLIAM RIBEIRO ROCHA",300,1,"","Boleto Amigo","k",""],["r","2026-04",1,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA MAIARA LIMA MOREIRA",300,1,"","Boleto Amigo","c",""],["r","2026-04",1,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA MAIARA LIMA MOREIRA",300,1,"","Boleto Amigo","k",""],["r","2026-03",31,"VENDA DE PRODUTOS/ SERVIÇOS","UALAS NEVES SILVA",300,1,"","Boleto Amigo","c",""],["r","2026-03",31,"VENDA DE PRODUTOS/ SERVIÇOS","UALAS NEVES SILVA",300,1,"","Boleto Amigo","k",""],["r","2026-03",30,"VENDA DE PRODUTOS/ SERVIÇOS","RENAN DAS CHAGAS SILVESTRE",300,1,"","Boleto Amigo","c",""],["r","2026-03",30,"VENDA DE PRODUTOS/ SERVIÇOS","RENAN DAS CHAGAS SILVESTRE",300,1,"","Boleto Amigo","k",""],["r","2026-03",30,"VENDA DE PRODUTOS/ SERVIÇOS","JOSIANE FERNANDA DE SOUZA SILVA",300,1,"","Boleto Amigo","c",""],["r","2026-03",30,"VENDA DE PRODUTOS/ SERVIÇOS","JOSIANE FERNANDA DE SOUZA SILVA",300,1,"","Boleto Amigo","k",""],["r","2026-03",31,"VENDA DE PRODUTOS/ SERVIÇOS","EDVALDO DO CARMO ALVES",500,1,"","Boleto Amigo","c",""],["r","2025-11",27,"VENDA DE PRODUTOS/ SERVIÇOS","EDVALDO DO CARMO ALVES",500,1,"","Boleto Amigo","k",""],["r","2026-03",23,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA DA PAIXÃO SANTOS SOUZA",100,1,"","Boleto Amigo","c",""],["r","2026-03",26,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA DA PAIXÃO SANTOS SOUZA",100,1,"","Boleto Amigo","k",""],["r","2026-03",26,"VENDA DE PRODUTOS/ SERVIÇOS","SERGIO RUFINO DE FREITAS",366.65,1,"","Boleto Amigo","c",""],["r","2025-09",10,"VENDA DE PRODUTOS/ SERVIÇOS","SERGIO RUFINO DE FREITAS",366.65,1,"","Boleto Amigo","k",""],["r","2026-04",8,"VENDA DE PRODUTOS/ SERVIÇOS","EXODO GOMES BRASIL",207.56,1,"","Boleto Amigo","c",""],["r","2026-02",26,"VENDA DE PRODUTOS/ SERVIÇOS","EXODO GOMES BRASIL",207.56,1,"","Boleto Amigo","k",""],["r","2026-04",22,"VENDA DE PRODUTOS/ SERVIÇOS","DEUSIMAR RODRIGUES NASCIMENTO",400.8,1,"","Boleto Amigo","c",""],["r","2025-09",30,"VENDA DE PRODUTOS/ SERVIÇOS","DEUSIMAR RODRIGUES NASCIMENTO",400.8,1,"","Boleto Amigo","k",""],["r","2026-03",25,"VENDA DE PRODUTOS/ SERVIÇOS","AUDACI EVARISTO DA COSTA",383.33,1,"","Boleto Amigo","c",""],["r","2025-12",8,"VENDA DE PRODUTOS/ SERVIÇOS","AUDACI EVARISTO DA COSTA",383.33,1,"","Boleto Amigo","k",""],["r","2026-03",11,"VENDA DE PRODUTOS/ SERVIÇOS","ZENILDO DA SILVA SANTOS",383.35,1,"","Boleto Amigo","c",""],["r","2025-09",25,"VENDA DE PRODUTOS/ SERVIÇOS","ZENILDO DA SILVA SANTOS",383.35,1,"","Boleto Amigo","k",""],["r","2026-03",30,"VENDA DE PRODUTOS/ SERVIÇOS","VERONICA PEREIRA RAQUEL DA SILVA TELES",383.33,1,"","Boleto Amigo","c",""],["r","2025-11",27,"VENDA DE PRODUTOS/ SERVIÇOS","VERONICA PEREIRA RAQUEL DA SILVA TELES",383.33,1,"","Boleto Amigo","k",""],["r","2026-03",23,"VENDA DE PRODUTOS/ SERVIÇOS","MARCOS COSTA MARQUES",383.35,1,"","Boleto Amigo","c",""],["r","2025-09",12,"VENDA DE PRODUTOS/ SERVIÇOS","MARCOS COSTA MARQUES",383.35,1,"","Boleto Amigo","k",""],["r","2026-03",25,"VENDA DE PRODUTOS/ SERVIÇOS","ALLYNE CAROLINA SAMPAIO SILVA",383.33,1,"","Boleto Amigo","c",""],["r","2025-12",2,"VENDA DE PRODUTOS/ SERVIÇOS","ALLYNE CAROLINA SAMPAIO SILVA",383.33,1,"","Boleto Amigo","k",""],["r","2026-04",1,"VENDA DE PRODUTOS/ SERVIÇOS","JOAO VICTOR SOUZA VILHENA",396.15,1,"","Boleto Amigo","c",""],["r","2025-09",15,"VENDA DE PRODUTOS/ SERVIÇOS","JOAO VICTOR SOUZA VILHENA",396.15,1,"","Boleto Amigo","k",""],["r","2026-03",26,"VENDA DE PRODUTOS/ SERVIÇOS","MARCIO JOSE ARAUJO POLICARPO",383.35,1,"","Boleto Amigo","c",""],["r","2025-09",16,"VENDA DE PRODUTOS/ SERVIÇOS","MARCIO JOSE ARAUJO POLICARPO",383.35,1,"","Boleto Amigo","k",""],["r","2026-01",28,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO JOANDERSON GOMES FERREIRA",383.33,1,"","Boleto Amigo","c",""],["r","2025-12",26,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO JOANDERSON GOMES FERREIRA",383.33,1,"","Boleto Amigo","k",""],["r","2026-04",9,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO JOANDERSON GOMES FERREIRA",398.07,1,"","Boleto Amigo","c",""],["r","2025-12",26,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO JOANDERSON GOMES FERREIRA",398.07,1,"","Boleto Amigo","k",""],["r","2026-03",26,"VENDA DE PRODUTOS/ SERVIÇOS","CARLOS ALBERTO RODRIGUES PEREIRA",383.33,1,"","Boleto Amigo","c",""],["r","2025-12",19,"VENDA DE PRODUTOS/ SERVIÇOS","CARLOS ALBERTO RODRIGUES PEREIRA",383.33,1,"","Boleto Amigo","k",""],["r","2026-03",25,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO DE ASSIS DA SILVA",383.35,0,"","Boleto Amigo","c",""],["r","2025-09",23,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO DE ASSIS DA SILVA",383.35,0,"","Boleto Amigo","k",""],["r","2026-04",1,"VENDA DE PRODUTOS/ SERVIÇOS","MARCUS THADEU FERNANDES ARRAES",516.65,1,"","Boleto Amigo","c",""],["r","2026-02",20,"VENDA DE PRODUTOS/ SERVIÇOS","MARCUS THADEU FERNANDES ARRAES",516.65,1,"","Boleto Amigo","k",""],["r","2026-03",3,"VENDA DE PRODUTOS/ SERVIÇOS","GERONIMO DA SILVA ALCANTARA",383.35,1,"","Boleto Amigo","c",""],["r","2025-09",19,"VENDA DE PRODUTOS/ SERVIÇOS","GERONIMO DA SILVA ALCANTARA",383.35,1,"","Boleto Amigo","k",""],["r","2026-04",9,"VENDA DE PRODUTOS/ SERVIÇOS","SILVANIA PEREIRA DE SOUSA",700.97,1,"","Boleto Amigo","c",""],["r","2026-01",9,"VENDA DE PRODUTOS/ SERVIÇOS","SILVANIA PEREIRA DE SOUSA",700.97,1,"","Boleto Amigo","k",""],["r","2026-03",23,"VENDA DE PRODUTOS/ SERVIÇOS","DAYANE ALVES DE ABREU",500,1,"","Boleto Amigo","c",""],["r","2026-03",25,"VENDA DE PRODUTOS/ SERVIÇOS","DAYANE ALVES DE ABREU",500,1,"","Boleto Amigo","k",""],["r","2026-05",15,"VENDA DE PRODUTOS/ SERVIÇOS","GERONIMO DA SILVA ALCANTARA",408.08,1,"","Boleto Amigo","c",""],["r","2025-09",19,"VENDA DE PRODUTOS/ SERVIÇOS","GERONIMO DA SILVA ALCANTARA",408.08,1,"","Boleto Amigo","k",""],["r","2026-03",27,"VENDA DE PRODUTOS/ SERVIÇOS","FABIO DE SOUZA BARBOSA",450,1,"","Boleto Amigo","c",""],["r","2026-01",23,"VENDA DE PRODUTOS/ SERVIÇOS","FABIO DE SOUZA BARBOSA",450,1,"","Boleto Amigo","k",""],["r","2026-04",1,"VENDA DE PRODUTOS/ SERVIÇOS","ELINILDA MACEDO DA SILVA",396.07,1,"","Boleto Amigo","c",""],["r","2025-11",17,"VENDA DE PRODUTOS/ SERVIÇOS","ELINILDA MACEDO DA SILVA",396.07,1,"","Boleto Amigo","k",""],["r","2026-03",25,"VENDA DE PRODUTOS/ SERVIÇOS","NAYANE DE SOUSA VIEIRA",386,1,"","Boleto Amigo","c",""],["r","2025-10",24,"VENDA DE PRODUTOS/ SERVIÇOS","NAYANE DE SOUSA VIEIRA",386,1,"","Boleto Amigo","k",""],["r","2026-03",26,"VENDA DE PRODUTOS/ SERVIÇOS","ELIZANGELA ALVES DA COSTA",383.33,1,"","Boleto Amigo","c",""],["r","2025-10",27,"VENDA DE PRODUTOS/ SERVIÇOS","ELIZANGELA ALVES DA COSTA",383.33,1,"","Boleto Amigo","k",""],["r","2026-03",25,"VENDA DE PRODUTOS/ SERVIÇOS","EDNA COSTA DE JESUS ALVES",450,1,"","Boleto Amigo","c",""],["r","2026-01",14,"VENDA DE PRODUTOS/ SERVIÇOS","EDNA COSTA DE JESUS ALVES",450,1,"","Boleto Amigo","k",""],["r","2026-04",6,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO DE PADUA VAZ DE LIMA",396.64,1,"","Boleto Amigo","c",""],["r","2025-10",29,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO DE PADUA VAZ DE LIMA",396.64,1,"","Boleto Amigo","k",""],["r","2026-03",27,"VENDA DE PRODUTOS/ SERVIÇOS","LUCIANA SILVA MEDEIROS",466.67,1,"","Boleto Amigo","c",""],["r","2026-02",10,"VENDA DE PRODUTOS/ SERVIÇOS","LUCIANA SILVA MEDEIROS",466.67,1,"","Boleto Amigo","k",""],["r","2026-03",27,"VENDA DE PRODUTOS/ SERVIÇOS","LIDIANE ALMEIDA SILVA",450,1,"","Boleto Amigo","c",""],["r","2026-01",14,"VENDA DE PRODUTOS/ SERVIÇOS","LIDIANE ALMEIDA SILVA",450,1,"","Boleto Amigo","k",""],["r","2026-03",30,"VENDA DE PRODUTOS/ SERVIÇOS","DIOGO HENRIQUE FARNESE",515.34,1,"","Boleto Amigo","c",""],["r","2025-11",5,"VENDA DE PRODUTOS/ SERVIÇOS","DIOGO HENRIQUE FARNESE",515.34,1,"","Boleto Amigo","k",""],["r","2026-03",30,"VENDA DE PRODUTOS/ SERVIÇOS","DORISBERTO DE VASCONCELOS ARAUJO",383.35,1,"","Boleto Amigo","c",""],["r","2025-09",5,"VENDA DE PRODUTOS/ SERVIÇOS","DORISBERTO DE VASCONCELOS ARAUJO",383.35,1,"","Boleto Amigo","k",""],["r","2026-03",25,"VENDA DE PRODUTOS/ SERVIÇOS","ANGELA MARIA LIMA SALES",383.35,0,"","Boleto Amigo","c",""],["r","2025-09",10,"VENDA DE PRODUTOS/ SERVIÇOS","ANGELA MARIA LIMA SALES",383.35,0,"","Boleto Amigo","k",""],["r","2026-03",24,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO DIONISIO GADELHA DA SILVA",300,1,"","Boleto Amigo","c",""],["r","2026-03",24,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO DIONISIO GADELHA DA SILVA",300,1,"","Boleto Amigo","k",""],["r","2026-03",20,"VENDA DE PRODUTOS/ SERVIÇOS","CARLOS DE SOUSA MARTINS",100,1,"","Boleto Amigo","c",""],["r","2026-03",23,"VENDA DE PRODUTOS/ SERVIÇOS","CARLOS DE SOUSA MARTINS",100,1,"","Boleto Amigo","k",""],["r","2026-03",23,"VENDA DE PRODUTOS/ SERVIÇOS","WILLYSON FERREIRA MATOS",300,1,"","Boleto Amigo","c",""],["r","2026-03",23,"VENDA DE PRODUTOS/ SERVIÇOS","WILLYSON FERREIRA MATOS",300,1,"","Boleto Amigo","k",""],["r","2026-03",23,"VENDA DE PRODUTOS/ SERVIÇOS","ANDREZA  FERREIRA MARTINS",100,1,"","Boleto Amigo","c",""],["r","2026-03",23,"VENDA DE PRODUTOS/ SERVIÇOS","ANDREZA  FERREIRA MARTINS",100,1,"","Boleto Amigo","k",""],["r","2026-03",23,"VENDA DE PRODUTOS/ SERVIÇOS","LINDOMAR DE OLIVEIRA",100,1,"","Boleto Amigo","c",""],["r","2026-03",20,"VENDA DE PRODUTOS/ SERVIÇOS","LINDOMAR DE OLIVEIRA",100,1,"","Boleto Amigo","k",""],["r","2026-03",20,"VENDA DE PRODUTOS/ SERVIÇOS","JUCIVALDO RODRIGUES DURANS",300,1,"","Boleto Amigo","c",""],["r","2026-03",20,"VENDA DE PRODUTOS/ SERVIÇOS","JUCIVALDO RODRIGUES DURANS",300,1,"","Boleto Amigo","k",""],["r","2026-03",20,"VENDA DE PRODUTOS/ SERVIÇOS","ALAN NIXON ARAGAO RIBEIRO",300,1,"","Boleto Amigo","c",""],["r","2026-03",20,"VENDA DE PRODUTOS/ SERVIÇOS","ALAN NIXON ARAGAO RIBEIRO",300,1,"","Boleto Amigo","k",""],["r","2026-04",1,"VENDA DE PRODUTOS/ SERVIÇOS","ALEXANDRE MARTINS DA SILVA",397.32,1,"","Boleto Amigo","c",""],["r","2025-11",18,"VENDA DE PRODUTOS/ SERVIÇOS","ALEXANDRE MARTINS DA SILVA",397.32,1,"","Boleto Amigo","k",""],["r","2026-03",24,"VENDA DE PRODUTOS/ SERVIÇOS","WILLIAM BESERRA GOMES",450,1,"","Boleto Amigo","c",""],["r","2026-02",19,"VENDA DE PRODUTOS/ SERVIÇOS","WILLIAM BESERRA GOMES",450,1,"","Boleto Amigo","k",""],["r","2026-04",9,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO REGINALDO QUINTINO",399.5,1,"","Boleto Amigo","c",""],["r","2025-10",7,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO REGINALDO QUINTINO",399.5,1,"","Boleto Amigo","k",""],["r","2026-03",25,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA FRANCILENE ALVES DA SILVA LIMA",387,1,"","Boleto Amigo","c",""],["r","2025-09",17,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA FRANCILENE ALVES DA SILVA LIMA",387,1,"","Boleto Amigo","k",""],["r","2026-03",20,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO ANTONIO PAULA DOS SANTOS",100,1,"","Boleto Amigo","c",""],["r","2026-03",20,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO ANTONIO PAULA DOS SANTOS",100,1,"","Boleto Amigo","k",""],["r","2026-04",7,"VENDA DE PRODUTOS/ SERVIÇOS","CARLOS ANDRE NUNES DA SILVA",467.27,1,"","Boleto Amigo","c",""],["r","2026-01",27,"VENDA DE PRODUTOS/ SERVIÇOS","CARLOS ANDRE NUNES DA SILVA",467.27,1,"","Boleto Amigo","k",""],["r","2026-03",18,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE ARI SANTOS MACIEL",450,1,"","Boleto Amigo","c",""],["r","2026-01",15,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE ARI SANTOS MACIEL",450,1,"","Boleto Amigo","k",""],["r","2026-03",20,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO ALVES DE SOUSA FILHO",500,1,"","Boleto Amigo","c",""],["r","2026-03",20,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO ALVES DE SOUSA FILHO",500,1,"","Boleto Amigo","k",""],["r","2026-03",26,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE FRANCISCO PEREIRA",395.86,1,"","Boleto Amigo","c",""],["r","2025-10",15,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE FRANCISCO PEREIRA",395.86,1,"","Boleto Amigo","k",""],["r","2026-03",18,"VENDA DE PRODUTOS/ SERVIÇOS","SANCHEZ FERREIRA DE LIMA",383.35,0,"","Boleto Amigo","c",""],["r","2025-05",28,"VENDA DE PRODUTOS/ SERVIÇOS","SANCHEZ FERREIRA DE LIMA",383.35,0,"","Boleto Amigo","k",""],["r","2026-03",18,"VENDA DE PRODUTOS/ SERVIÇOS","ATHIRSON BRENDO SOUSA SILVA",300,1,"","Boleto Amigo","c",""],["r","2026-03",18,"VENDA DE PRODUTOS/ SERVIÇOS","ATHIRSON BRENDO SOUSA SILVA",300,1,"","Boleto Amigo","k",""],["r","2026-03",17,"VENDA DE PRODUTOS/ SERVIÇOS","BRUNO QUENA GOMES DINIZ",300,1,"","Boleto Amigo","c",""],["r","2026-03",17,"VENDA DE PRODUTOS/ SERVIÇOS","BRUNO QUENA GOMES DINIZ",300,1,"","Boleto Amigo","k",""],["r","2026-03",17,"VENDA DE PRODUTOS/ SERVIÇOS","PAOLO PATRIZIO RODRIGUES",300,1,"","Boleto Amigo","c",""],["r","2026-03",17,"VENDA DE PRODUTOS/ SERVIÇOS","PAOLO PATRIZIO RODRIGUES",300,1,"","Boleto Amigo","k",""],["r","2026-03",17,"VENDA DE PRODUTOS/ SERVIÇOS","ILZA LIMA DA SILVA",300,1,"","Boleto Amigo","c",""],["r","2026-03",17,"VENDA DE PRODUTOS/ SERVIÇOS","ILZA LIMA DA SILVA",300,1,"","Boleto Amigo","k",""],["r","2026-03",9,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA JOCELINA FREIRE DE OLIVEIRA",383.33,1,"","Boleto Amigo","c",""],["r","2025-10",17,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA JOCELINA FREIRE DE OLIVEIRA",383.33,1,"","Boleto Amigo","k",""],["r","2026-03",16,"VENDA DE PRODUTOS/ SERVIÇOS","KAIO RAMOS DE SOUZA BORGES",300,1,"","Boleto Amigo","c",""],["r","2026-03",16,"VENDA DE PRODUTOS/ SERVIÇOS","KAIO RAMOS DE SOUZA BORGES",300,1,"","Boleto Amigo","k",""],["r","2026-03",16,"VENDA DE PRODUTOS/ SERVIÇOS","JORGE LUIZ FREITAS DA SILVA",300,1,"","Boleto Amigo","c",""],["r","2026-03",16,"VENDA DE PRODUTOS/ SERVIÇOS","JORGE LUIZ FREITAS DA SILVA",300,1,"","Boleto Amigo","k",""],["r","2026-03",16,"VENDA DE PRODUTOS/ SERVIÇOS","GABRIEL CRUZ DOS REIS",383.35,1,"","Boleto Amigo","c",""],["r","2025-09",23,"VENDA DE PRODUTOS/ SERVIÇOS","GABRIEL CRUZ DOS REIS",383.35,1,"","Boleto Amigo","k",""],["r","2026-03",24,"VENDA DE PRODUTOS/ SERVIÇOS","ELIETE ALVES RABELO DOS SANTOS",395.86,1,"","Boleto Amigo","c",""],["r","2025-10",3,"VENDA DE PRODUTOS/ SERVIÇOS","ELIETE ALVES RABELO DOS SANTOS",395.86,1,"","Boleto Amigo","k",""],["r","2026-04",9,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE ANTONIO BARBOSA DE MOURA",261.24,1,"","Boleto Amigo","c",""],["r","2025-10",24,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE ANTONIO BARBOSA DE MOURA",261.24,1,"","Boleto Amigo","k",""],["r","2026-03",20,"VENDA DE PRODUTOS/ SERVIÇOS","CLAUDIO JOSE INACIO JUNIOR",395.34,1,"","Boleto Amigo","c",""],["r","2025-10",21,"VENDA DE PRODUTOS/ SERVIÇOS","CLAUDIO JOSE INACIO JUNIOR",395.34,1,"","Boleto Amigo","k",""],["r","2026-03",18,"VENDA DE PRODUTOS/ SERVIÇOS","ELIS REGINA BERNARDO COSTA",366.67,1,"","Boleto Amigo","c",""],["r","2025-10",6,"VENDA DE PRODUTOS/ SERVIÇOS","ELIS REGINA BERNARDO COSTA",366.67,1,"","Boleto Amigo","k",""],["r","2026-03",4,"VENDA DE PRODUTOS/ SERVIÇOS","VANDERSON BARROS DE SOUZA",383.33,1,"","Boleto Amigo","c",""],["r","2025-11",11,"VENDA DE PRODUTOS/ SERVIÇOS","VANDERSON BARROS DE SOUZA",383.33,1,"","Boleto Amigo","k",""],["r","2026-03",17,"VENDA DE PRODUTOS/ SERVIÇOS","ELENICE LOURENCO FELIPE",383.33,1,"","Boleto Amigo","c",""],["r","2025-10",23,"VENDA DE PRODUTOS/ SERVIÇOS","ELENICE LOURENCO FELIPE",383.33,1,"","Boleto Amigo","k",""],["r","2026-05",5,"VENDA DE PRODUTOS/ SERVIÇOS","ELENILTON SANTOS DO NASCIMENTO",398.75,1,"","Boleto Amigo","c",""],["r","2025-08",20,"VENDA DE PRODUTOS/ SERVIÇOS","ELENILTON SANTOS DO NASCIMENTO",398.75,1,"","Boleto Amigo","k",""],["r","2026-03",13,"VENDA DE PRODUTOS/ SERVIÇOS","DOUGLAS MIRANDA",100,1,"","Boleto Amigo","c",""],["r","2026-03",13,"VENDA DE PRODUTOS/ SERVIÇOS","DOUGLAS MIRANDA",100,1,"","Boleto Amigo","k",""],["r","2026-03",13,"VENDA DE PRODUTOS/ SERVIÇOS","LUIZ GABRIEL DE SOUZA DE SOUZA",750,1,"","Boleto Amigo","c",""],["r","2026-03",13,"VENDA DE PRODUTOS/ SERVIÇOS","LUIZ GABRIEL DE SOUZA DE SOUZA",750,1,"","Boleto Amigo","k",""],["r","2026-03",12,"VENDA DE PRODUTOS/ SERVIÇOS","DANIELLY MAUL DA CUNHA MOURA",300,1,"","Boleto Amigo","c",""],["r","2026-03",12,"VENDA DE PRODUTOS/ SERVIÇOS","DANIELLY MAUL DA CUNHA MOURA",300,1,"","Boleto Amigo","k",""],["r","2026-03",12,"VENDA DE PRODUTOS/ SERVIÇOS","GRACENIRA GONCALVES DE OLIVEIRA",300,1,"","Boleto Amigo","c",""],["r","2026-03",12,"VENDA DE PRODUTOS/ SERVIÇOS","GRACENIRA GONCALVES DE OLIVEIRA",300,1,"","Boleto Amigo","k",""],["r","2026-03",12,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA HELENA DOS SANTOS MORAIS",100,1,"","Boleto Amigo","c",""],["r","2026-03",12,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA HELENA DOS SANTOS MORAIS",100,1,"","Boleto Amigo","k",""],["r","2026-03",11,"VENDA DE PRODUTOS/ SERVIÇOS","MANOEL CARVALHO DA COSTA",300,1,"","Boleto Amigo","c",""],["r","2026-03",11,"VENDA DE PRODUTOS/ SERVIÇOS","MANOEL CARVALHO DA COSTA",300,1,"","Boleto Amigo","k",""],["r","2026-03",12,"VENDA DE PRODUTOS/ SERVIÇOS","CESAR NILDO DE BRITO OLIVEIRA",383.33,1,"","Boleto Amigo","c",""],["r","2025-12",4,"VENDA DE PRODUTOS/ SERVIÇOS","CESAR NILDO DE BRITO OLIVEIRA",383.33,1,"","Boleto Amigo","k",""],["r","2026-03",10,"VENDA DE PRODUTOS/ SERVIÇOS","VITOR DA MACENO MIRANDA",383.35,0,"","Boleto Amigo","c",""],["r","2025-09",1,"VENDA DE PRODUTOS/ SERVIÇOS","VITOR DA MACENO MIRANDA",383.35,0,"","Boleto Amigo","k",""],["r","2026-03",30,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GENECY DE SOUSA SANTOS",398.98,1,"","Boleto Amigo","c",""],["r","2025-11",5,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GENECY DE SOUSA SANTOS",398.98,1,"","Boleto Amigo","k",""],["r","2026-03",11,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIA MARIA BARBOSA TEODOSIO",400,1,"","Boleto Amigo","c",""],["r","2025-10",1,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIA MARIA BARBOSA TEODOSIO",400,1,"","Boleto Amigo","k",""],["r","2026-03",12,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA HALINA ANDRE DOS SANTOS",383.33,1,"","Boleto Amigo","c",""],["r","2025-10",6,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA HALINA ANDRE DOS SANTOS",383.33,1,"","Boleto Amigo","k",""],["r","2026-04",1,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO EVANILDO COSTA DOS SANTOS",400.02,1,"","Boleto Amigo","c",""],["r","2025-11",4,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO EVANILDO COSTA DOS SANTOS",400.02,1,"","Boleto Amigo","k",""],["r","2026-03",12,"VENDA DE PRODUTOS/ SERVIÇOS","JULIA DE SOUZA FIRMEZA",383.33,1,"","Boleto Amigo","c",""],["r","2025-12",31,"VENDA DE PRODUTOS/ SERVIÇOS","JULIA DE SOUZA FIRMEZA",383.33,1,"","Boleto Amigo","k",""],["r","2026-03",12,"VENDA DE PRODUTOS/ SERVIÇOS","VALDEILSON SAMINES ARAUJO",383.35,1,"","Boleto Amigo","c",""],["r","2025-10",2,"VENDA DE PRODUTOS/ SERVIÇOS","VALDEILSON SAMINES ARAUJO",383.35,1,"","Boleto Amigo","k",""],["r","2026-03",6,"VENDA DE PRODUTOS/ SERVIÇOS","SIMONE FERNANDES DE SOUZA",383.33,1,"","Boleto Amigo","c",""],["r","2025-12",2,"VENDA DE PRODUTOS/ SERVIÇOS","SIMONE FERNANDES DE SOUZA",383.33,1,"","Boleto Amigo","k",""],["r","2026-03",13,"VENDA DE PRODUTOS/ SERVIÇOS","CRISTIANO REIS DA SILVA",395.08,1,"","Boleto Amigo","c",""],["r","2025-09",24,"VENDA DE PRODUTOS/ SERVIÇOS","CRISTIANO REIS DA SILVA",395.08,1,"","Boleto Amigo","k",""],["r","2026-03",11,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO MAGDO GUEDES MESQUITA",383.33,1,"","Boleto Amigo","c",""],["r","2025-12",3,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO MAGDO GUEDES MESQUITA",383.33,1,"","Boleto Amigo","k",""],["r","2026-03",12,"VENDA DE PRODUTOS/ SERVIÇOS","EDUARDA ANDRADE DO NASCIMENTO",450,1,"","Boleto Amigo","c",""],["r","2026-01",13,"VENDA DE PRODUTOS/ SERVIÇOS","EDUARDA ANDRADE DO NASCIMENTO",450,1,"","Boleto Amigo","k",""],["r","2026-03",4,"VENDA DE PRODUTOS/ SERVIÇOS","PAULO CANDIDO RODRIGUES",400,1,"","Boleto Amigo","c",""],["r","2025-10",11,"VENDA DE PRODUTOS/ SERVIÇOS","PAULO CANDIDO RODRIGUES",400,1,"","Boleto Amigo","k",""],["r","2026-03",12,"VENDA DE PRODUTOS/ SERVIÇOS","ELENILTON SANTOS DO NASCIMENTO",375,1,"","Boleto Amigo","c",""],["r","2025-08",20,"VENDA DE PRODUTOS/ SERVIÇOS","ELENILTON SANTOS DO NASCIMENTO",375,1,"","Boleto Amigo","k",""],["r","2026-03",16,"VENDA DE PRODUTOS/ SERVIÇOS","FLAVIO ROBERTO NASCIMENTO PEREIRA",481.29,1,"","Boleto Amigo","c",""],["r","2026-01",9,"VENDA DE PRODUTOS/ SERVIÇOS","FLAVIO ROBERTO NASCIMENTO PEREIRA",481.29,1,"","Boleto Amigo","k",""],["r","2026-03",10,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA NASCIMENTO GOMES",100,1,"","Boleto Amigo","c",""],["r","2026-03",10,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA NASCIMENTO GOMES",100,1,"","Boleto Amigo","k",""],["r","2026-03",17,"VENDA DE PRODUTOS/ SERVIÇOS","ERBANO VELOSO HOLANDA",395.63,1,"","Boleto Amigo","c",""],["r","2025-09",12,"VENDA DE PRODUTOS/ SERVIÇOS","ERBANO VELOSO HOLANDA",395.63,1,"","Boleto Amigo","k",""],["r","2026-03",12,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA HELENA EVANGELISTA MARTINS",383.33,1,"","Boleto Amigo","c",""],["r","2025-11",21,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA HELENA EVANGELISTA MARTINS",383.33,1,"","Boleto Amigo","k",""],["r","2026-03",17,"VENDA DE PRODUTOS/ SERVIÇOS","MARCOS ANDERSON OLIVEIRA ARAUJO",395.57,1,"","Boleto Amigo","c",""],["r","2025-12",9,"VENDA DE PRODUTOS/ SERVIÇOS","MARCOS ANDERSON OLIVEIRA ARAUJO",395.57,1,"","Boleto Amigo","k",""],["r","2026-04",14,"VENDA DE PRODUTOS/ SERVIÇOS","WASHINGTON TORQUATO DE LIMA JUNIOR",402.57,1,"","Boleto Amigo","c",""],["r","2025-12",18,"VENDA DE PRODUTOS/ SERVIÇOS","WASHINGTON TORQUATO DE LIMA JUNIOR",402.57,1,"","Boleto Amigo","k",""],["r","2026-03",12,"VENDA DE PRODUTOS/ SERVIÇOS","DELYNE DO VALE MARTINS BARROSO",383.33,1,"","Boleto Amigo","c",""],["r","2025-09",20,"VENDA DE PRODUTOS/ SERVIÇOS","DELYNE DO VALE MARTINS BARROSO",383.33,1,"","Boleto Amigo","k",""],["r","2026-03",12,"VENDA DE PRODUTOS/ SERVIÇOS","KLEBER DE ALMEIDA",450,1,"","Boleto Amigo","c",""],["r","2026-01",7,"VENDA DE PRODUTOS/ SERVIÇOS","KLEBER DE ALMEIDA",450,1,"","Boleto Amigo","k",""],["r","2026-03",13,"VENDA DE PRODUTOS/ SERVIÇOS","LEIDLENE MAGNA DE ALENCAR",463.79,1,"","Boleto Amigo","c",""],["r","2026-02",2,"VENDA DE PRODUTOS/ SERVIÇOS","LEIDLENE MAGNA DE ALENCAR",463.79,1,"","Boleto Amigo","k",""],["r","2026-03",9,"VENDA DE PRODUTOS/ SERVIÇOS","RAFAEL ALVES DA SILVA",300,1,"","Boleto Amigo","c",""],["r","2026-03",9,"VENDA DE PRODUTOS/ SERVIÇOS","RAFAEL ALVES DA SILVA",300,1,"","Boleto Amigo","k",""],["r","2026-03",6,"VENDA DE PRODUTOS/ SERVIÇOS","JEFFERSON HUGO BANDEIRA DE FRANCA",100,1,"","Boleto Amigo","c",""],["r","2026-03",9,"VENDA DE PRODUTOS/ SERVIÇOS","JEFFERSON HUGO BANDEIRA DE FRANCA",100,1,"","Boleto Amigo","k",""],["r","2026-03",6,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA DO SOCORRO SERAFIM",300,1,"","Boleto Amigo","c",""],["r","2026-03",6,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA DO SOCORRO SERAFIM",300,1,"","Boleto Amigo","k",""],["r","2026-04",1,"VENDA DE PRODUTOS/ SERVIÇOS","JOACIR ALVES DOS SANTOS",401.07,1,"","Boleto Amigo","c",""],["r","2026-01",2,"VENDA DE PRODUTOS/ SERVIÇOS","JOACIR ALVES DOS SANTOS",401.07,1,"","Boleto Amigo","k",""],["r","2026-03",6,"VENDA DE PRODUTOS/ SERVIÇOS","ORION ARAUJO PEREIRA",333.33,1,"","Boleto Amigo","c",""],["r","2025-11",21,"VENDA DE PRODUTOS/ SERVIÇOS","ORION ARAUJO PEREIRA",333.33,1,"","Boleto Amigo","k",""],["r","2026-03",4,"VENDA DE PRODUTOS/ SERVIÇOS","JOAQUIM DA SILVA REIS",383.33,1,"","Boleto Amigo","c",""],["r","2025-11",3,"VENDA DE PRODUTOS/ SERVIÇOS","JOAQUIM DA SILVA REIS",383.33,1,"","Boleto Amigo","k",""],["r","2026-03",9,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GESSIVALDO PINHEIRO",450,1,"","Boleto Amigo","c",""],["r","2026-02",2,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GESSIVALDO PINHEIRO",450,1,"","Boleto Amigo","k",""],["r","2026-03",9,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GESSIVALDO PINHEIRO",450,1,"","Boleto Amigo","c",""],["r","2026-02",2,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GESSIVALDO PINHEIRO",450,1,"","Boleto Amigo","k",""],["r","2026-03",5,"VENDA DE PRODUTOS/ SERVIÇOS","MARIO AUGUSTO DA SILVA SANTOS",300,1,"","Boleto Amigo","c",""],["r","2026-03",5,"VENDA DE PRODUTOS/ SERVIÇOS","MARIO AUGUSTO DA SILVA SANTOS",300,1,"","Boleto Amigo","k",""],["r","2026-03",5,"VENDA DE PRODUTOS/ SERVIÇOS","SOCORRO ALVES ROLIM RAMOS",100,1,"","Boleto Amigo","c",""],["r","2026-03",5,"VENDA DE PRODUTOS/ SERVIÇOS","SOCORRO ALVES ROLIM RAMOS",100,1,"","Boleto Amigo","k",""],["r","2026-03",5,"VENDA DE PRODUTOS/ SERVIÇOS","SIMONE NOBRE GASPAR",300,1,"","Boleto Amigo","c",""],["r","2026-03",5,"VENDA DE PRODUTOS/ SERVIÇOS","SIMONE NOBRE GASPAR",300,1,"","Boleto Amigo","k",""],["r","2026-03",3,"VENDA DE PRODUTOS/ SERVIÇOS","JULIETTE MONICA DA SILVA LEAO",300,1,"","Boleto Amigo","c",""],["r","2026-03",5,"VENDA DE PRODUTOS/ SERVIÇOS","JULIETTE MONICA DA SILVA LEAO",300,1,"","Boleto Amigo","k",""],["r","2026-03",4,"VENDA DE PRODUTOS/ SERVIÇOS","WELLEN MENDES MOREIRA LIMA",700,1,"","Boleto Amigo","c",""],["r","2026-03",4,"VENDA DE PRODUTOS/ SERVIÇOS","WELLEN MENDES MOREIRA LIMA",700,1,"","Boleto Amigo","k",""],["r","2026-03",4,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE RIBAMAR PEREIRA DE OLIVEIRA",300,1,"","Boleto Amigo","c",""],["r","2026-03",4,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE RIBAMAR PEREIRA DE OLIVEIRA",300,1,"","Boleto Amigo","k",""],["r","2026-03",3,"VENDA DE PRODUTOS/ SERVIÇOS","LUCAS DE PAIVA MONTEIRO",300,1,"","Boleto Amigo","c",""],["r","2026-03",3,"VENDA DE PRODUTOS/ SERVIÇOS","LUCAS DE PAIVA MONTEIRO",300,1,"","Boleto Amigo","k",""],["r","2026-03",3,"VENDA DE PRODUTOS/ SERVIÇOS","LILIAN LIMA DIAS",300,1,"","Boleto Amigo","c",""],["r","2026-03",3,"VENDA DE PRODUTOS/ SERVIÇOS","LILIAN LIMA DIAS",300,1,"","Boleto Amigo","k",""],["r","2026-03",2,"VENDA DE PRODUTOS/ SERVIÇOS","GRIMARIO  BRITO DE SOUSA",900,1,"","Boleto Amigo","c",""],["r","2026-03",2,"VENDA DE PRODUTOS/ SERVIÇOS","GRIMARIO  BRITO DE SOUSA",900,1,"","Boleto Amigo","k",""],["r","2026-03",3,"VENDA DE PRODUTOS/ SERVIÇOS","EDVALDO DO CARMO ALVES",500,1,"","Boleto Amigo","c",""],["r","2025-11",27,"VENDA DE PRODUTOS/ SERVIÇOS","EDVALDO DO CARMO ALVES",500,1,"","Boleto Amigo","k",""],["r","2026-02",26,"VENDA DE PRODUTOS/ SERVIÇOS","EXODO GOMES BRASIL",100,1,"","Boleto Amigo","c",""],["r","2026-02",26,"VENDA DE PRODUTOS/ SERVIÇOS","EXODO GOMES BRASIL",100,1,"","Boleto Amigo","k",""],["r","2026-03",2,"VENDA DE PRODUTOS/ SERVIÇOS","ANGELA MARIA LIMA SALES",395.08,1,"","Boleto Amigo","c",""],["r","2025-09",10,"VENDA DE PRODUTOS/ SERVIÇOS","ANGELA MARIA LIMA SALES",395.08,1,"","Boleto Amigo","k",""],["r","2026-03",9,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO DE PADUA VAZ DE LIMA",396.9,1,"","Boleto Amigo","c",""],["r","2025-10",29,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO DE PADUA VAZ DE LIMA",396.9,1,"","Boleto Amigo","k",""],["r","2026-02",27,"VENDA DE PRODUTOS/ SERVIÇOS","DORISBERTO DE VASCONCELOS ARAUJO",383.33,1,"","Boleto Amigo","c",""],["r","2025-09",5,"VENDA DE PRODUTOS/ SERVIÇOS","DORISBERTO DE VASCONCELOS ARAUJO",383.33,1,"","Boleto Amigo","k",""],["r","2026-02",27,"VENDA DE PRODUTOS/ SERVIÇOS","DIOGO HENRIQUE FARNESE",500,1,"","Boleto Amigo","c",""],["r","2025-11",5,"VENDA DE PRODUTOS/ SERVIÇOS","DIOGO HENRIQUE FARNESE",500,1,"","Boleto Amigo","k",""],["r","2026-02",27,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO WYTAMAR COELHO DA SILVA CRUZ",383.35,1,"","Boleto Amigo","c",""],["r","2025-08",20,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO WYTAMAR COELHO DA SILVA CRUZ",383.35,1,"","Boleto Amigo","k",""],["r","2026-02",25,"VENDA DE PRODUTOS/ SERVIÇOS","EDNA COSTA DE JESUS ALVES",450,1,"","Boleto Amigo","c",""],["r","2026-01",14,"VENDA DE PRODUTOS/ SERVIÇOS","EDNA COSTA DE JESUS ALVES",450,1,"","Boleto Amigo","k",""],["r","2026-02",27,"VENDA DE PRODUTOS/ SERVIÇOS","LIDIANE ALMEIDA SILVA",450,1,"","Boleto Amigo","c",""],["r","2026-01",14,"VENDA DE PRODUTOS/ SERVIÇOS","LIDIANE ALMEIDA SILVA",450,1,"","Boleto Amigo","k",""],["r","2026-02",26,"VENDA DE PRODUTOS/ SERVIÇOS","ELINILDA MACEDO DA SILVA",383.33,1,"","Boleto Amigo","c",""],["r","2025-11",17,"VENDA DE PRODUTOS/ SERVIÇOS","ELINILDA MACEDO DA SILVA",383.33,1,"","Boleto Amigo","k",""],["r","2026-02",26,"VENDA DE PRODUTOS/ SERVIÇOS","SILVANIA PEREIRA DE SOUSA",675,1,"","Boleto Amigo","c",""],["r","2026-01",9,"VENDA DE PRODUTOS/ SERVIÇOS","SILVANIA PEREIRA DE SOUSA",675,1,"","Boleto Amigo","k",""],["r","2026-02",25,"VENDA DE PRODUTOS/ SERVIÇOS","FABIO DE SOUZA BARBOSA",450,1,"","Boleto Amigo","c",""],["r","2026-01",23,"VENDA DE PRODUTOS/ SERVIÇOS","FABIO DE SOUZA BARBOSA",450,1,"","Boleto Amigo","k",""],["r","2026-02",25,"VENDA DE PRODUTOS/ SERVIÇOS","NAYANE DE SOUSA VIEIRA",386,1,"","Boleto Amigo","c",""],["r","2025-10",24,"VENDA DE PRODUTOS/ SERVIÇOS","NAYANE DE SOUSA VIEIRA",386,1,"","Boleto Amigo","k",""],["r","2026-03",4,"VENDA DE PRODUTOS/ SERVIÇOS","SERGIO RUFINO DE FREITAS",378.92,1,"","Boleto Amigo","c",""],["r","2025-09",10,"VENDA DE PRODUTOS/ SERVIÇOS","SERGIO RUFINO DE FREITAS",378.92,1,"","Boleto Amigo","k",""],["r","2026-02",27,"VENDA DE PRODUTOS/ SERVIÇOS","ELIZANGELA ALVES DA COSTA",383.33,1,"","Boleto Amigo","c",""],["r","2025-10",27,"VENDA DE PRODUTOS/ SERVIÇOS","ELIZANGELA ALVES DA COSTA",383.33,1,"","Boleto Amigo","k",""],["r","2026-02",25,"VENDA DE PRODUTOS/ SERVIÇOS","NANCI MARIA SILVEIRA CAMPOS",383.35,0,"","Boleto Amigo","c",""],["r","2025-08",7,"VENDA DE PRODUTOS/ SERVIÇOS","NANCI MARIA SILVEIRA CAMPOS",383.35,0,"","Boleto Amigo","k",""],["r","2026-03",11,"VENDA DE PRODUTOS/ SERVIÇOS","DEUSIMAR RODRIGUES NASCIMENTO",397.94,1,"","Boleto Amigo","c",""],["r","2025-09",30,"VENDA DE PRODUTOS/ SERVIÇOS","DEUSIMAR RODRIGUES NASCIMENTO",397.94,1,"","Boleto Amigo","k",""],["r","2026-03",2,"VENDA DE PRODUTOS/ SERVIÇOS","VERONICA PEREIRA RAQUEL DA SILVA TELES",395.07,1,"","Boleto Amigo","c",""],["r","2025-11",27,"VENDA DE PRODUTOS/ SERVIÇOS","VERONICA PEREIRA RAQUEL DA SILVA TELES",395.07,1,"","Boleto Amigo","k",""],["r","2026-03",3,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA ELBA CORDEIRO DA CRUZ DE SOUSA",395.37,1,"","Boleto Amigo","c",""],["r","2025-08",8,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA ELBA CORDEIRO DA CRUZ DE SOUSA",395.37,1,"","Boleto Amigo","k",""],["r","2026-02",27,"VENDA DE PRODUTOS/ SERVIÇOS","MARCIO JOSE ARAUJO POLICARPO",383.33,1,"","Boleto Amigo","c",""],["r","2025-09",16,"VENDA DE PRODUTOS/ SERVIÇOS","MARCIO JOSE ARAUJO POLICARPO",383.33,1,"","Boleto Amigo","k",""],["r","2026-02",24,"VENDA DE PRODUTOS/ SERVIÇOS","MARCOS COSTA MARQUES",383.33,1,"","Boleto Amigo","c",""],["r","2025-09",12,"VENDA DE PRODUTOS/ SERVIÇOS","MARCOS COSTA MARQUES",383.33,1,"","Boleto Amigo","k",""],["r","2026-03",5,"VENDA DE PRODUTOS/ SERVIÇOS","JOAO VICTOR SOUZA VILHENA",396.38,1,"","Boleto Amigo","c",""],["r","2025-09",15,"VENDA DE PRODUTOS/ SERVIÇOS","JOAO VICTOR SOUZA VILHENA",396.38,1,"","Boleto Amigo","k",""],["r","2026-02",27,"VENDA DE PRODUTOS/ SERVIÇOS","CARLOS ALBERTO RODRIGUES PEREIRA",383.33,1,"","Boleto Amigo","c",""],["r","2025-12",19,"VENDA DE PRODUTOS/ SERVIÇOS","CARLOS ALBERTO RODRIGUES PEREIRA",383.33,1,"","Boleto Amigo","k",""],["r","2026-03",12,"VENDA DE PRODUTOS/ SERVIÇOS","SAMUEL SALES SILVA",398.23,1,"","Boleto Amigo","c",""],["r","2025-08",6,"VENDA DE PRODUTOS/ SERVIÇOS","SAMUEL SALES SILVA",398.23,1,"","Boleto Amigo","k",""],["r","2026-02",11,"VENDA DE PRODUTOS/ SERVIÇOS","ZENILDO DA SILVA SANTOS",383.33,1,"","Boleto Amigo","c",""],["r","2025-09",25,"VENDA DE PRODUTOS/ SERVIÇOS","ZENILDO DA SILVA SANTOS",383.33,1,"","Boleto Amigo","k",""],["r","2026-02",24,"VENDA DE PRODUTOS/ SERVIÇOS","AUDACI EVARISTO DA COSTA",383.33,1,"","Boleto Amigo","c",""],["r","2025-12",8,"VENDA DE PRODUTOS/ SERVIÇOS","AUDACI EVARISTO DA COSTA",383.33,1,"","Boleto Amigo","k",""],["r","2026-02",25,"VENDA DE PRODUTOS/ SERVIÇOS","ALLYNE CAROLINA SAMPAIO SILVA",383.33,1,"","Boleto Amigo","c",""],["r","2025-12",2,"VENDA DE PRODUTOS/ SERVIÇOS","ALLYNE CAROLINA SAMPAIO SILVA",383.33,1,"","Boleto Amigo","k",""],["r","2026-02",26,"VENDA DE PRODUTOS/ SERVIÇOS","JAILSON SILVA DOS SANTOS",383.35,1,"","Boleto Amigo","c",""],["r","2025-08",12,"VENDA DE PRODUTOS/ SERVIÇOS","JAILSON SILVA DOS SANTOS",383.35,1,"","Boleto Amigo","k",""],["r","2026-03",26,"VENDA DE PRODUTOS/ SERVIÇOS","GABRIEL DA GUIA SENA",401.57,1,"","Boleto Amigo","c",""],["r","2025-12",9,"VENDA DE PRODUTOS/ SERVIÇOS","GABRIEL DA GUIA SENA",401.57,1,"","Boleto Amigo","k",""],["r","2026-04",8,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO DE ASSIS DA SILVA",405.22,1,"","Boleto Amigo","c",""],["r","2025-09",23,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO DE ASSIS DA SILVA",405.22,1,"","Boleto Amigo","k",""],["r","2026-02",27,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO JOANDERSON GOMES FERREIRA",383.33,1,"","Boleto Amigo","c",""],["r","2025-12",26,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO JOANDERSON GOMES FERREIRA",383.33,1,"","Boleto Amigo","k",""],["r","2026-03",18,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO REGINALDO QUINTINO",401.06,1,"","Boleto Amigo","c",""],["r","2025-10",7,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO REGINALDO QUINTINO",401.06,1,"","Boleto Amigo","k",""],["r","2026-02",25,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE FRANCISCO PEREIRA",395.6,1,"","Boleto Amigo","c",""],["r","2025-10",15,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE FRANCISCO PEREIRA",395.6,1,"","Boleto Amigo","k",""],["r","2026-03",6,"VENDA DE PRODUTOS/ SERVIÇOS","MAX SERGIO SANTOS MOREIRA JUNIOR",380.64,1,"","Boleto Amigo","c",""],["r","2025-08",20,"VENDA DE PRODUTOS/ SERVIÇOS","MAX SERGIO SANTOS MOREIRA JUNIOR",380.64,1,"","Boleto Amigo","k",""],["r","2026-02",23,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE ARI SANTOS MACIEL",450,1,"","Boleto Amigo","c",""],["r","2026-01",15,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE ARI SANTOS MACIEL",450,1,"","Boleto Amigo","k",""],["r","2026-03",6,"VENDA DE PRODUTOS/ SERVIÇOS","MAX SERGIO SANTOS MOREIRA JUNIOR",380.64,1,"","Boleto Amigo","c",""],["r","2025-08",20,"VENDA DE PRODUTOS/ SERVIÇOS","MAX SERGIO SANTOS MOREIRA JUNIOR",380.64,1,"","Boleto Amigo","k",""],["r","2026-02",26,"VENDA DE PRODUTOS/ SERVIÇOS","CARLOS ANDRE NUNES DA SILVA",464.66,1,"","Boleto Amigo","c",""],["r","2026-01",27,"VENDA DE PRODUTOS/ SERVIÇOS","CARLOS ANDRE NUNES DA SILVA",464.66,1,"","Boleto Amigo","k",""],["r","2026-03",9,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO PEDRO NETO",398.23,1,"","Boleto Amigo","c",""],["r","2025-08",1,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO PEDRO NETO",398.23,1,"","Boleto Amigo","k",""],["r","2026-02",20,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA FRANCILENE ALVES DA SILVA LIMA",375,1,"","Boleto Amigo","c",""],["r","2025-09",17,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA FRANCILENE ALVES DA SILVA LIMA",375,1,"","Boleto Amigo","k",""],["r","2026-02",20,"VENDA DE PRODUTOS/ SERVIÇOS","MARCUS THADEU FERNANDES ARRAES",500,1,"","Boleto Amigo","c",""],["r","2026-02",20,"VENDA DE PRODUTOS/ SERVIÇOS","MARCUS THADEU FERNANDES ARRAES",500,1,"","Boleto Amigo","k",""],["r","2026-03",11,"VENDA DE PRODUTOS/ SERVIÇOS","ALEXANDRE MARTINS DA SILVA",399.07,1,"","Boleto Amigo","c",""],["r","2025-11",18,"VENDA DE PRODUTOS/ SERVIÇOS","ALEXANDRE MARTINS DA SILVA",399.07,1,"","Boleto Amigo","k",""],["r","2026-02",19,"VENDA DE PRODUTOS/ SERVIÇOS","WILLIAM BESERRA GOMES",300,1,"","Boleto Amigo","c",""],["r","2026-02",19,"VENDA DE PRODUTOS/ SERVIÇOS","WILLIAM BESERRA GOMES",300,1,"","Boleto Amigo","k",""],["r","2026-02",19,"VENDA DE PRODUTOS/ SERVIÇOS","VITORIA SOUZA NUNES",300,1,"","Boleto Amigo","c",""],["r","2026-02",19,"VENDA DE PRODUTOS/ SERVIÇOS","VITORIA SOUZA NUNES",300,1,"","Boleto Amigo","k",""],["r","2026-02",9,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA JOCELINA FREIRE DE OLIVEIRA",383.33,1,"","Boleto Amigo","c",""],["r","2025-10",17,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA JOCELINA FREIRE DE OLIVEIRA",383.33,1,"","Boleto Amigo","k",""],["r","2026-03",6,"VENDA DE PRODUTOS/ SERVIÇOS","GABRIEL CRUZ DOS REIS",398.98,1,"","Boleto Amigo","c",""],["r","2025-09",23,"VENDA DE PRODUTOS/ SERVIÇOS","GABRIEL CRUZ DOS REIS",398.98,1,"","Boleto Amigo","k",""],["r","2026-02",15,"VENDA DE PRODUTOS/ SERVIÇOS","CESAR AUGUSTO RIBEIRO FERREIRA",500,0,"","Boleto Amigo","c",""],["r","2025-10",14,"VENDA DE PRODUTOS/ SERVIÇOS","CESAR AUGUSTO RIBEIRO FERREIRA",500,0,"","Boleto Amigo","k",""],["r","2026-02",24,"VENDA DE PRODUTOS/ SERVIÇOS","CLAUDIO JOSE INACIO JUNIOR",395.86,1,"","Boleto Amigo","c",""],["r","2025-10",21,"VENDA DE PRODUTOS/ SERVIÇOS","CLAUDIO JOSE INACIO JUNIOR",395.86,1,"","Boleto Amigo","k",""],["r","2026-02",20,"VENDA DE PRODUTOS/ SERVIÇOS","MARCIO MENDES RODRIGUES",366.65,1,"","Boleto Amigo","c",""],["r","2025-08",8,"VENDA DE PRODUTOS/ SERVIÇOS","MARCIO MENDES RODRIGUES",366.65,1,"","Boleto Amigo","k",""],["r","2026-02",20,"VENDA DE PRODUTOS/ SERVIÇOS","SIDINELIO NASCIMENTO PIRES",358.35,1,"","Boleto Amigo","c",""],["r","2025-08",8,"VENDA DE PRODUTOS/ SERVIÇOS","SIDINELIO NASCIMENTO PIRES",358.35,1,"","Boleto Amigo","k",""],["r","2026-02",23,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE ANTONIO BARBOSA DE MOURA",258.01,1,"","Boleto Amigo","c",""],["r","2025-10",24,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE ANTONIO BARBOSA DE MOURA",258.01,1,"","Boleto Amigo","k",""],["r","2026-02",23,"VENDA DE PRODUTOS/ SERVIÇOS","LANA THAYNI SILVA MENEZES",395.6,1,"","Boleto Amigo","c",""],["r","2025-09",15,"VENDA DE PRODUTOS/ SERVIÇOS","LANA THAYNI SILVA MENEZES",395.6,1,"","Boleto Amigo","k",""],["r","2026-02",6,"VENDA DE PRODUTOS/ SERVIÇOS","FERNANDO HENRIQUE PEDROZO DE CAMPOS",333.33,1,"","Boleto Amigo","c",""],["r","2025-09",25,"VENDA DE PRODUTOS/ SERVIÇOS","FERNANDO HENRIQUE PEDROZO DE CAMPOS",333.33,1,"","Boleto Amigo","k",""],["r","2026-03",25,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA VILCA GOMES DE CARVALHO FACANHA",455.56,1,"","Boleto Amigo","c",""],["r","2026-01",14,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA VILCA GOMES DE CARVALHO FACANHA",455.56,1,"","Boleto Amigo","k",""],["r","2026-02",4,"VENDA DE PRODUTOS/ SERVIÇOS","VANDERSON BARROS DE SOUZA",383.33,1,"","Boleto Amigo","c",""],["r","2025-11",11,"VENDA DE PRODUTOS/ SERVIÇOS","VANDERSON BARROS DE SOUZA",383.33,1,"","Boleto Amigo","k",""],["r","2026-02",24,"VENDA DE PRODUTOS/ SERVIÇOS","ISMAEL DA SILVA SANTOS",395.89,1,"","Boleto Amigo","c",""],["r","2025-08",18,"VENDA DE PRODUTOS/ SERVIÇOS","ISMAEL DA SILVA SANTOS",395.89,1,"","Boleto Amigo","k",""],["r","2026-02",12,"VENDA DE PRODUTOS/ SERVIÇOS","DANIELE FERREIRA DO NASCIMENTO",383.35,1,"","Boleto Amigo","c",""],["r","2025-08",25,"VENDA DE PRODUTOS/ SERVIÇOS","DANIELE FERREIRA DO NASCIMENTO",383.35,1,"","Boleto Amigo","k",""],["r","2026-02",20,"VENDA DE PRODUTOS/ SERVIÇOS","ELIETE ALVES RABELO DOS SANTOS",383.33,1,"","Boleto Amigo","c",""],["r","2025-10",3,"VENDA DE PRODUTOS/ SERVIÇOS","ELIETE ALVES RABELO DOS SANTOS",383.33,1,"","Boleto Amigo","k",""],["r","2026-02",9,"VENDA DE PRODUTOS/ SERVIÇOS","ELENICE LOURENCO FELIPE",383.33,1,"","Boleto Amigo","c",""],["r","2025-10",23,"VENDA DE PRODUTOS/ SERVIÇOS","ELENICE LOURENCO FELIPE",383.33,1,"","Boleto Amigo","k",""],["r","2026-02",20,"VENDA DE PRODUTOS/ SERVIÇOS","ELIS REGINA BERNARDO COSTA",366.67,1,"","Boleto Amigo","c",""],["r","2025-10",6,"VENDA DE PRODUTOS/ SERVIÇOS","ELIS REGINA BERNARDO COSTA",366.67,1,"","Boleto Amigo","k",""],["r","2026-02",13,"VENDA DE PRODUTOS/ SERVIÇOS","ROGELIA DE SOUZA SILVA DE ALMEIDA",300,1,"","Boleto Amigo","c",""],["r","2026-02",18,"VENDA DE PRODUTOS/ SERVIÇOS","ROGELIA DE SOUZA SILVA DE ALMEIDA",300,1,"","Boleto Amigo","k",""],["r","2026-02",18,"VENDA DE PRODUTOS/ SERVIÇOS","WILIAN GALVAO",383.33,1,"","Boleto Amigo","c",""],["r","2025-09",29,"VENDA DE PRODUTOS/ SERVIÇOS","WILIAN GALVAO",383.33,1,"","Boleto Amigo","k",""],["r","2026-02",12,"VENDA DE PRODUTOS/ SERVIÇOS","EDEZIO ALVES DOS SANTOS",200,1,"","Boleto Amigo","c",""],["r","2026-02",12,"VENDA DE PRODUTOS/ SERVIÇOS","EDEZIO ALVES DOS SANTOS",200,1,"","Boleto Amigo","k",""],["r","2026-02",12,"VENDA DE PRODUTOS/ SERVIÇOS","DELYNE DO VALE MARTINS BARROSO",383.33,1,"","Boleto Amigo","c",""],["r","2025-09",20,"VENDA DE PRODUTOS/ SERVIÇOS","DELYNE DO VALE MARTINS BARROSO",383.33,1,"","Boleto Amigo","k",""],["r","2026-02",19,"VENDA DE PRODUTOS/ SERVIÇOS","VALDEILSON SAMINES ARAUJO",395.6,1,"","Boleto Amigo","c",""],["r","2025-10",2,"VENDA DE PRODUTOS/ SERVIÇOS","VALDEILSON SAMINES ARAUJO",395.6,1,"","Boleto Amigo","k",""],["r","2026-02",12,"VENDA DE PRODUTOS/ SERVIÇOS","VITOR DA MACENO MIRANDA",383.33,1,"","Boleto Amigo","c",""],["r","2025-09",1,"VENDA DE PRODUTOS/ SERVIÇOS","VITOR DA MACENO MIRANDA",383.33,1,"","Boleto Amigo","k",""],["r","2026-01",15,"VENDA DE PRODUTOS/ SERVIÇOS","VITOR DA MACENO MIRANDA",383.33,1,"","Boleto Amigo","c",""],["r","2025-09",1,"VENDA DE PRODUTOS/ SERVIÇOS","VITOR DA MACENO MIRANDA",383.33,1,"","Boleto Amigo","k",""],["r","2026-02",27,"VENDA DE PRODUTOS/ SERVIÇOS","CRISTIANO REIS DA SILVA",398.72,1,"","Boleto Amigo","c",""],["r","2025-09",24,"VENDA DE PRODUTOS/ SERVIÇOS","CRISTIANO REIS DA SILVA",398.72,1,"","Boleto Amigo","k",""],["r","2026-02",11,"VENDA DE PRODUTOS/ SERVIÇOS","ANA CRISTINA CORREA PINHEIRO",400,1,"","Boleto Amigo","c",""],["r","2025-09",3,"VENDA DE PRODUTOS/ SERVIÇOS","ANA CRISTINA CORREA PINHEIRO",400,1,"","Boleto Amigo","k",""],["r","2026-02",4,"VENDA DE PRODUTOS/ SERVIÇOS","PAULO CANDIDO RODRIGUES",400,1,"","Boleto Amigo","c",""],["r","2025-10",11,"VENDA DE PRODUTOS/ SERVIÇOS","PAULO CANDIDO RODRIGUES",400,1,"","Boleto Amigo","k",""],["r","2026-02",12,"VENDA DE PRODUTOS/ SERVIÇOS","RUAN MATHEUS SOUSA DE MORAIS 38142166000115",460,1,"","Boleto Amigo","c",""],["r","2025-09",3,"VENDA DE PRODUTOS/ SERVIÇOS","RUAN MATHEUS SOUSA DE MORAIS 38142166000115",460,1,"","Boleto Amigo","k",""],["r","2026-02",11,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA HALINA ANDRE DOS SANTOS",383.33,1,"","Boleto Amigo","c",""],["r","2025-10",6,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA HALINA ANDRE DOS SANTOS",383.33,1,"","Boleto Amigo","k",""],["r","2026-02",26,"VENDA DE PRODUTOS/ SERVIÇOS","ERBANO VELOSO HOLANDA",398.46,1,"","Boleto Amigo","c",""],["r","2025-09",12,"VENDA DE PRODUTOS/ SERVIÇOS","ERBANO VELOSO HOLANDA",398.46,1,"","Boleto Amigo","k",""],["r","2026-02",11,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIA MARIA BARBOSA TEODOSIO",400,1,"","Boleto Amigo","c",""],["r","2025-10",1,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIA MARIA BARBOSA TEODOSIO",400,1,"","Boleto Amigo","k",""],["r","2026-03",18,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO EVANILDO COSTA DOS SANTOS",403.66,1,"","Boleto Amigo","c",""],["r","2025-11",4,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO EVANILDO COSTA DOS SANTOS",403.66,1,"","Boleto Amigo","k",""],["r","2026-02",10,"VENDA DE PRODUTOS/ SERVIÇOS","CLEGINALDO OLIVEIRA DA SILVA",383.35,1,"","Boleto Amigo","c",""],["r","2025-08",21,"VENDA DE PRODUTOS/ SERVIÇOS","CLEGINALDO OLIVEIRA DA SILVA",383.35,1,"","Boleto Amigo","k",""],["r","2026-02",2,"VENDA DE PRODUTOS/ SERVIÇOS","SIMONE FERNANDES DE SOUZA",383.33,1,"","Boleto Amigo","c",""],["r","2025-12",2,"VENDA DE PRODUTOS/ SERVIÇOS","SIMONE FERNANDES DE SOUZA",383.33,1,"","Boleto Amigo","k",""],["r","2026-02",10,"VENDA DE PRODUTOS/ SERVIÇOS","WALLEF DOS SANTOS COSTA",300,1,"","Boleto Amigo","c",""],["r","2026-02",10,"VENDA DE PRODUTOS/ SERVIÇOS","WALLEF DOS SANTOS COSTA",300,1,"","Boleto Amigo","k",""],["r","2026-02",11,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO MAGDO GUEDES MESQUITA",383.33,1,"","Boleto Amigo","c",""],["r","2025-12",3,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO MAGDO GUEDES MESQUITA",383.33,1,"","Boleto Amigo","k",""],["r","2026-02",13,"VENDA DE PRODUTOS/ SERVIÇOS","CESAR NILDO DE BRITO OLIVEIRA",395.07,1,"","Boleto Amigo","c",""],["r","2025-12",4,"VENDA DE PRODUTOS/ SERVIÇOS","CESAR NILDO DE BRITO OLIVEIRA",395.07,1,"","Boleto Amigo","k",""],["r","2026-02",24,"VENDA DE PRODUTOS/ SERVIÇOS","MARCOS ANDERSON OLIVEIRA ARAUJO",397.32,1,"","Boleto Amigo","c",""],["r","2025-12",9,"VENDA DE PRODUTOS/ SERVIÇOS","MARCOS ANDERSON OLIVEIRA ARAUJO",397.32,1,"","Boleto Amigo","k",""],["r","2026-02",12,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA HELENA EVANGELISTA MARTINS",383.33,1,"","Boleto Amigo","c",""],["r","2025-11",21,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA HELENA EVANGELISTA MARTINS",383.33,1,"","Boleto Amigo","k",""],["r","2026-02",12,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA SANDRECICERA FREIRES DA SILVA",383.33,1,"","Boleto Amigo","c",""],["r","2025-12",9,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA SANDRECICERA FREIRES DA SILVA",383.33,1,"","Boleto Amigo","k",""],["r","2026-02",18,"VENDA DE PRODUTOS/ SERVIÇOS","WASHINGTON TORQUATO DE LIMA JUNIOR",395.32,1,"","Boleto Amigo","c",""],["r","2025-12",18,"VENDA DE PRODUTOS/ SERVIÇOS","WASHINGTON TORQUATO DE LIMA JUNIOR",395.32,1,"","Boleto Amigo","k",""],["r","2026-02",12,"VENDA DE PRODUTOS/ SERVIÇOS","JULIA DE SOUZA FIRMEZA",383.33,1,"","Boleto Amigo","c",""],["r","2025-12",31,"VENDA DE PRODUTOS/ SERVIÇOS","JULIA DE SOUZA FIRMEZA",383.33,1,"","Boleto Amigo","k",""],["r","2026-02",13,"VENDA DE PRODUTOS/ SERVIÇOS","B M VIEIRA SERVICOS E COMERCIO",515.33,1,"","Boleto Amigo","c",""],["r","2026-01",2,"VENDA DE PRODUTOS/ SERVIÇOS","B M VIEIRA SERVICOS E COMERCIO",515.33,1,"","Boleto Amigo","k",""],["r","2026-02",23,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GENECY DE SOUSA SANTOS",397.16,1,"","Boleto Amigo","c",""],["r","2025-11",5,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GENECY DE SOUSA SANTOS",397.16,1,"","Boleto Amigo","k",""],["r","2026-02",12,"VENDA DE PRODUTOS/ SERVIÇOS","KLEBER DE ALMEIDA",450,1,"","Boleto Amigo","c",""],["r","2026-01",7,"VENDA DE PRODUTOS/ SERVIÇOS","KLEBER DE ALMEIDA",450,1,"","Boleto Amigo","k",""],["r","2026-02",12,"VENDA DE PRODUTOS/ SERVIÇOS","EDUARDA ANDRADE DO NASCIMENTO",450,1,"","Boleto Amigo","c",""],["r","2026-01",13,"VENDA DE PRODUTOS/ SERVIÇOS","EDUARDA ANDRADE DO NASCIMENTO",450,1,"","Boleto Amigo","k",""],["r","2026-02",10,"VENDA DE PRODUTOS/ SERVIÇOS","LUCIANA SILVA MEDEIROS",200,1,"","Boleto Amigo","c",""],["r","2026-02",10,"VENDA DE PRODUTOS/ SERVIÇOS","LUCIANA SILVA MEDEIROS",200,1,"","Boleto Amigo","k",""],["r","2026-03",3,"VENDA DE PRODUTOS/ SERVIÇOS","SAMUEL SALES SILVA",399.5,1,"","Boleto Amigo","c",""],["r","2025-08",6,"VENDA DE PRODUTOS/ SERVIÇOS","SAMUEL SALES SILVA",399.5,1,"","Boleto Amigo","k",""],["r","2026-02",3,"VENDA DE PRODUTOS/ SERVIÇOS","JOAQUIM DA SILVA REIS",383.33,1,"","Boleto Amigo","c",""],["r","2025-11",3,"VENDA DE PRODUTOS/ SERVIÇOS","JOAQUIM DA SILVA REIS",383.33,1,"","Boleto Amigo","k",""],["r","2026-02",9,"VENDA DE PRODUTOS/ SERVIÇOS","ORION ARAUJO PEREIRA",333.33,1,"","Boleto Amigo","c",""],["r","2025-11",21,"VENDA DE PRODUTOS/ SERVIÇOS","ORION ARAUJO PEREIRA",333.33,1,"","Boleto Amigo","k",""],["r","2026-02",11,"VENDA DE PRODUTOS/ SERVIÇOS","JOACIR ALVES DOS SANTOS",395.82,1,"","Boleto Amigo","c",""],["r","2026-01",2,"VENDA DE PRODUTOS/ SERVIÇOS","JOACIR ALVES DOS SANTOS",395.82,1,"","Boleto Amigo","k",""],["r","2026-02",2,"VENDA DE PRODUTOS/ SERVIÇOS","MARCOS JHONES DE SOUSA BARROS",300,1,"","Boleto Amigo","c",""],["r","2026-02",3,"VENDA DE PRODUTOS/ SERVIÇOS","MARCOS JHONES DE SOUSA BARROS",300,1,"","Boleto Amigo","k",""],["r","2026-02",2,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GESSIVALDO PINHEIRO",300,1,"","Boleto Amigo","c",""],["r","2026-02",2,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GESSIVALDO PINHEIRO",300,1,"","Boleto Amigo","k",""],["r","2026-02",3,"VENDA DE PRODUTOS/ SERVIÇOS","LEIDLENE MAGNA DE ALENCAR",300,1,"","Boleto Amigo","c",""],["r","2026-02",2,"VENDA DE PRODUTOS/ SERVIÇOS","LEIDLENE MAGNA DE ALENCAR",300,1,"","Boleto Amigo","k",""],["r","2026-02",2,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GESSIVALDO PINHEIRO",300,1,"","Boleto Amigo","c",""],["r","2026-02",2,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GESSIVALDO PINHEIRO",300,1,"","Boleto Amigo","k",""],["r","2026-01",29,"VENDA DE PRODUTOS/ SERVIÇOS","EVANDRO SOARES TORRES",300,1,"","Boleto Amigo","c",""],["r","2026-01",29,"VENDA DE PRODUTOS/ SERVIÇOS","EVANDRO SOARES TORRES",300,1,"","Boleto Amigo","k",""],["r","2026-01",27,"VENDA DE PRODUTOS/ SERVIÇOS","JANETE DE MELO GALVAO",3000,1,"","Boleto Amigo","c",""],["r","2026-01",27,"VENDA DE PRODUTOS/ SERVIÇOS","JANETE DE MELO GALVAO",3000,1,"","Boleto Amigo","k",""],["r","2026-01",27,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA ANTONIA PEREIRA",1500,1,"","Boleto Amigo","c",""],["r","2026-01",27,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA ANTONIA PEREIRA",1500,1,"","Boleto Amigo","k",""],["r","2026-01",29,"VENDA DE PRODUTOS/ SERVIÇOS","EDVALDO DO CARMO ALVES",500,1,"","Boleto Amigo","c",""],["r","2025-11",27,"VENDA DE PRODUTOS/ SERVIÇOS","EDVALDO DO CARMO ALVES",500,1,"","Boleto Amigo","k",""],["r","2026-01",27,"VENDA DE PRODUTOS/ SERVIÇOS","CARLOS ANDRE NUNES DA SILVA",300,1,"","Boleto Amigo","c",""],["r","2026-01",27,"VENDA DE PRODUTOS/ SERVIÇOS","CARLOS ANDRE NUNES DA SILVA",300,1,"","Boleto Amigo","k",""],["r","2026-02",2,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO DE ASSIS DA SILVA",395.6,1,"","Boleto Amigo","c",""],["r","2025-09",23,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO DE ASSIS DA SILVA",395.6,1,"","Boleto Amigo","k",""],["r","2026-01",25,"VENDA DE PRODUTOS/ SERVIÇOS","NANCI MARIA SILVEIRA CAMPOS",383.33,0,"","Boleto Amigo","c",""],["r","2025-08",7,"VENDA DE PRODUTOS/ SERVIÇOS","NANCI MARIA SILVEIRA CAMPOS",383.33,0,"","Boleto Amigo","k",""],["r","2026-01",28,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO WYTAMAR COELHO DA SILVA CRUZ",383.33,1,"","Boleto Amigo","c",""],["r","2025-08",20,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO WYTAMAR COELHO DA SILVA CRUZ",383.33,1,"","Boleto Amigo","k",""],["r","2026-01",9,"VENDA DE PRODUTOS/ SERVIÇOS","AUDACI EVARISTO DA COSTA",383.33,1,"","Boleto Amigo","c",""],["r","2025-12",8,"VENDA DE PRODUTOS/ SERVIÇOS","AUDACI EVARISTO DA COSTA",383.33,1,"","Boleto Amigo","k",""],["r","2026-03",3,"VENDA DE PRODUTOS/ SERVIÇOS","SAMUEL SALES SILVA",403.14,1,"","Boleto Amigo","c",""],["r","2025-08",6,"VENDA DE PRODUTOS/ SERVIÇOS","SAMUEL SALES SILVA",403.14,1,"","Boleto Amigo","k",""],["r","2026-01",29,"VENDA DE PRODUTOS/ SERVIÇOS","NAYANE DE SOUSA VIEIRA",397.84,1,"","Boleto Amigo","c",""],["r","2025-10",24,"VENDA DE PRODUTOS/ SERVIÇOS","NAYANE DE SOUSA VIEIRA",397.84,1,"","Boleto Amigo","k",""],["r","2026-01",28,"VENDA DE PRODUTOS/ SERVIÇOS","HENRIQUE RAMOS GUIMARAES",383.35,1,"","Boleto Amigo","c",""],["r","2025-07",10,"VENDA DE PRODUTOS/ SERVIÇOS","HENRIQUE RAMOS GUIMARAES",383.35,1,"","Boleto Amigo","k",""],["r","2026-01",23,"VENDA DE PRODUTOS/ SERVIÇOS","VERONICA PEREIRA RAQUEL DA SILVA TELES",383.33,1,"","Boleto Amigo","c",""],["r","2025-11",27,"VENDA DE PRODUTOS/ SERVIÇOS","VERONICA PEREIRA RAQUEL DA SILVA TELES",383.33,1,"","Boleto Amigo","k",""],["r","2026-02",20,"VENDA DE PRODUTOS/ SERVIÇOS","GABRIEL DA GUIA SENA",400.57,1,"","Boleto Amigo","c",""],["r","2025-12",9,"VENDA DE PRODUTOS/ SERVIÇOS","GABRIEL DA GUIA SENA",400.57,1,"","Boleto Amigo","k",""],["r","2026-01",13,"VENDA DE PRODUTOS/ SERVIÇOS","ZENILDO DA SILVA SANTOS",383.33,1,"","Boleto Amigo","c",""],["r","2025-09",25,"VENDA DE PRODUTOS/ SERVIÇOS","ZENILDO DA SILVA SANTOS",383.33,1,"","Boleto Amigo","k",""],["r","2026-01",28,"VENDA DE PRODUTOS/ SERVIÇOS","GERONIMO DA SILVA ALCANTARA",383.33,1,"","Boleto Amigo","c",""],["r","2025-09",19,"VENDA DE PRODUTOS/ SERVIÇOS","GERONIMO DA SILVA ALCANTARA",383.33,1,"","Boleto Amigo","k",""],["r","2026-02",13,"VENDA DE PRODUTOS/ SERVIÇOS","DEUSIMAR RODRIGUES NASCIMENTO",398.98,1,"","Boleto Amigo","c",""],["r","2025-09",30,"VENDA DE PRODUTOS/ SERVIÇOS","DEUSIMAR RODRIGUES NASCIMENTO",398.98,1,"","Boleto Amigo","k",""],["r","2026-01",28,"VENDA DE PRODUTOS/ SERVIÇOS","MARCIO JOSE ARAUJO POLICARPO",383.33,1,"","Boleto Amigo","c",""],["r","2025-09",16,"VENDA DE PRODUTOS/ SERVIÇOS","MARCIO JOSE ARAUJO POLICARPO",383.33,1,"","Boleto Amigo","k",""],["r","2026-02",4,"VENDA DE PRODUTOS/ SERVIÇOS","ALBERTO VICENTE HONORIO",379.35,1,"","Boleto Amigo","c",""],["r","2025-11",19,"VENDA DE PRODUTOS/ SERVIÇOS","ALBERTO VICENTE HONORIO",379.35,1,"","Boleto Amigo","k",""],["r","2026-01",28,"VENDA DE PRODUTOS/ SERVIÇOS","JAILSON SILVA DOS SANTOS",383.33,1,"","Boleto Amigo","c",""],["r","2025-08",12,"VENDA DE PRODUTOS/ SERVIÇOS","JAILSON SILVA DOS SANTOS",383.33,1,"","Boleto Amigo","k",""],["r","2026-01",25,"VENDA DE PRODUTOS/ SERVIÇOS","MARIANY DE SOUSA GALVAO",383.35,0,"","Boleto Amigo","c",""],["r","2025-07",14,"VENDA DE PRODUTOS/ SERVIÇOS","MARIANY DE SOUSA GALVAO",383.35,0,"","Boleto Amigo","k",""],["r","2026-01",28,"VENDA DE PRODUTOS/ SERVIÇOS","DORISBERTO DE VASCONCELOS ARAUJO",383.33,1,"","Boleto Amigo","c",""],["r","2025-09",5,"VENDA DE PRODUTOS/ SERVIÇOS","DORISBERTO DE VASCONCELOS ARAUJO",383.33,1,"","Boleto Amigo","k",""],["r","2026-01",28,"VENDA DE PRODUTOS/ SERVIÇOS","ANGELA MARIA LIMA SALES",383.33,1,"","Boleto Amigo","c",""],["r","2025-09",10,"VENDA DE PRODUTOS/ SERVIÇOS","ANGELA MARIA LIMA SALES",383.33,1,"","Boleto Amigo","k",""],["r","2026-02",4,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO DE PADUA VAZ DE LIMA",396.64,1,"","Boleto Amigo","c",""],["r","2025-10",29,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO DE PADUA VAZ DE LIMA",396.64,1,"","Boleto Amigo","k",""],["r","2026-02",27,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE WILSON JANUARIO DE SOUSA",385.17,1,"","Boleto Amigo","c",""],["r","2025-11",3,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE WILSON JANUARIO DE SOUSA",385.17,1,"","Boleto Amigo","k",""],["r","2026-01",28,"VENDA DE PRODUTOS/ SERVIÇOS","SERGIO RUFINO DE FREITAS",366.67,1,"","Boleto Amigo","c",""],["r","2025-09",10,"VENDA DE PRODUTOS/ SERVIÇOS","SERGIO RUFINO DE FREITAS",366.67,1,"","Boleto Amigo","k",""],["r","2026-01",26,"VENDA DE PRODUTOS/ SERVIÇOS","MARCOS COSTA MARQUES",383.33,1,"","Boleto Amigo","c",""],["r","2025-09",12,"VENDA DE PRODUTOS/ SERVIÇOS","MARCOS COSTA MARQUES",383.33,1,"","Boleto Amigo","k",""],["r","2026-01",28,"VENDA DE PRODUTOS/ SERVIÇOS","CARLOS ALBERTO RODRIGUES PEREIRA",383.33,1,"","Boleto Amigo","c",""],["r","2025-12",19,"VENDA DE PRODUTOS/ SERVIÇOS","CARLOS ALBERTO RODRIGUES PEREIRA",383.33,1,"","Boleto Amigo","k",""],["r","2026-01",28,"VENDA DE PRODUTOS/ SERVIÇOS","ALLYNE CAROLINA SAMPAIO SILVA",383.33,1,"","Boleto Amigo","c",""],["r","2025-12",2,"VENDA DE PRODUTOS/ SERVIÇOS","ALLYNE CAROLINA SAMPAIO SILVA",383.33,1,"","Boleto Amigo","k",""],["r","2026-01",28,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA ELBA CORDEIRO DA CRUZ DE SOUSA",383.33,1,"","Boleto Amigo","c",""],["r","2025-08",8,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA ELBA CORDEIRO DA CRUZ DE SOUSA",383.33,1,"","Boleto Amigo","k",""],["r","2026-01",19,"VENDA DE PRODUTOS/ SERVIÇOS","ELIZANGELA ALVES DA COSTA",383.33,1,"","Boleto Amigo","c",""],["r","2025-10",27,"VENDA DE PRODUTOS/ SERVIÇOS","ELIZANGELA ALVES DA COSTA",383.33,1,"","Boleto Amigo","k",""],["r","2026-02",12,"VENDA DE PRODUTOS/ SERVIÇOS","JOAO VICTOR SOUZA VILHENA",398.72,1,"","Boleto Amigo","c",""],["r","2025-09",15,"VENDA DE PRODUTOS/ SERVIÇOS","JOAO VICTOR SOUZA VILHENA",398.72,1,"","Boleto Amigo","k",""],["r","2026-01",28,"VENDA DE PRODUTOS/ SERVIÇOS","ELINILDA MACEDO DA SILVA",383.33,1,"","Boleto Amigo","c",""],["r","2025-11",17,"VENDA DE PRODUTOS/ SERVIÇOS","ELINILDA MACEDO DA SILVA",383.33,1,"","Boleto Amigo","k",""],["r","2026-01",28,"VENDA DE PRODUTOS/ SERVIÇOS","DIOGO HENRIQUE FARNESE",500,1,"","Boleto Amigo","c",""],["r","2025-11",5,"VENDA DE PRODUTOS/ SERVIÇOS","DIOGO HENRIQUE FARNESE",500,1,"","Boleto Amigo","k",""],["r","2026-01",23,"VENDA DE PRODUTOS/ SERVIÇOS","FABIO DE SOUZA BARBOSA",300,1,"","Boleto Amigo","c",""],["r","2026-01",23,"VENDA DE PRODUTOS/ SERVIÇOS","FABIO DE SOUZA BARBOSA",300,1,"","Boleto Amigo","k",""],["r","2026-01",22,"VENDA DE PRODUTOS/ SERVIÇOS","REGIANE DE JESUS BATISTA RAMOS",300,1,"","Boleto Amigo","c",""],["r","2026-01",26,"VENDA DE PRODUTOS/ SERVIÇOS","REGIANE DE JESUS BATISTA RAMOS",300,1,"","Boleto Amigo","k",""],["r","2026-01",27,"VENDA DE PRODUTOS/ SERVIÇOS","BENAVINUTA DE SOUZA OLIVEIRA",383.35,1,"","Boleto Amigo","c",""],["r","2025-06",27,"VENDA DE PRODUTOS/ SERVIÇOS","BENAVINUTA DE SOUZA OLIVEIRA",383.35,1,"","Boleto Amigo","k",""],["r","2026-01",27,"VENDA DE PRODUTOS/ SERVIÇOS","BENAVINUTA DE SOUZA OLIVEIRA",383.33,1,"","Boleto Amigo","c",""],["r","2025-06",27,"VENDA DE PRODUTOS/ SERVIÇOS","BENAVINUTA DE SOUZA OLIVEIRA",383.33,1,"","Boleto Amigo","k",""],["r","2026-01",22,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA FRANCILENE ALVES DA SILVA LIMA",375,1,"","Boleto Amigo","c",""],["r","2025-09",17,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA FRANCILENE ALVES DA SILVA LIMA",375,1,"","Boleto Amigo","k",""],["r","2026-01",22,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO REGINALDO QUINTINO",383.33,1,"","Boleto Amigo","c",""],["r","2025-10",7,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO REGINALDO QUINTINO",383.33,1,"","Boleto Amigo","k",""],["r","2026-01",26,"VENDA DE PRODUTOS/ SERVIÇOS","MAX SERGIO SANTOS MOREIRA JUNIOR",378.17,1,"","Boleto Amigo","c",""],["r","2025-08",20,"VENDA DE PRODUTOS/ SERVIÇOS","MAX SERGIO SANTOS MOREIRA JUNIOR",378.17,1,"","Boleto Amigo","k",""],["r","2026-01",26,"VENDA DE PRODUTOS/ SERVIÇOS","MAX SERGIO SANTOS MOREIRA JUNIOR",378.17,1,"","Boleto Amigo","c",""],["r","2025-08",20,"VENDA DE PRODUTOS/ SERVIÇOS","MAX SERGIO SANTOS MOREIRA JUNIOR",378.17,1,"","Boleto Amigo","k",""],["r","2026-01",26,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE FRANCISCO PEREIRA",395.34,1,"","Boleto Amigo","c",""],["r","2025-10",15,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE FRANCISCO PEREIRA",395.34,1,"","Boleto Amigo","k",""],["r","2026-01",26,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO PEDRO NETO",395.34,1,"","Boleto Amigo","c",""],["r","2025-08",1,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO PEDRO NETO",395.34,1,"","Boleto Amigo","k",""],["r","2026-02",10,"VENDA DE PRODUTOS/ SERVIÇOS","ALEXANDRE MARTINS DA SILVA",399.07,1,"","Boleto Amigo","c",""],["r","2025-11",18,"VENDA DE PRODUTOS/ SERVIÇOS","ALEXANDRE MARTINS DA SILVA",399.07,1,"","Boleto Amigo","k",""],["r","2026-01",22,"VENDA DE PRODUTOS/ SERVIÇOS","JOAO FRANCISCO CAMPOS COSTA NETO",474.11,1,"","Boleto Amigo","c",""],["r","2025-09",26,"VENDA DE PRODUTOS/ SERVIÇOS","JOAO FRANCISCO CAMPOS COSTA NETO",474.11,1,"","Boleto Amigo","k",""],["r","2026-01",21,"VENDA DE PRODUTOS/ SERVIÇOS","DEUSIMAR RODRIGUES NASCIMENTO",383.33,1,"","Boleto Amigo","c",""],["r","2025-09",30,"VENDA DE PRODUTOS/ SERVIÇOS","DEUSIMAR RODRIGUES NASCIMENTO",383.33,1,"","Boleto Amigo","k",""],["r","2026-01",7,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA JOCELINA FREIRE DE OLIVEIRA",383.33,1,"","Boleto Amigo","c",""],["r","2025-10",17,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA JOCELINA FREIRE DE OLIVEIRA",383.33,1,"","Boleto Amigo","k",""],["r","2026-01",19,"VENDA DE PRODUTOS/ SERVIÇOS","MARCIO MENDES RODRIGUES",366.67,1,"","Boleto Amigo","c",""],["r","2025-08",8,"VENDA DE PRODUTOS/ SERVIÇOS","MARCIO MENDES RODRIGUES",366.67,1,"","Boleto Amigo","k",""],["r","2026-01",21,"VENDA DE PRODUTOS/ SERVIÇOS","LANA THAYNI SILVA MENEZES",395.86,1,"","Boleto Amigo","c",""],["r","2025-09",15,"VENDA DE PRODUTOS/ SERVIÇOS","LANA THAYNI SILVA MENEZES",395.86,1,"","Boleto Amigo","k",""],["r","2026-01",21,"VENDA DE PRODUTOS/ SERVIÇOS","ISMAEL DA SILVA SANTOS",395.86,1,"","Boleto Amigo","c",""],["r","2025-08",18,"VENDA DE PRODUTOS/ SERVIÇOS","ISMAEL DA SILVA SANTOS",395.86,1,"","Boleto Amigo","k",""],["r","2026-01",19,"VENDA DE PRODUTOS/ SERVIÇOS","ELIS REGINA BERNARDO COSTA",366.67,1,"","Boleto Amigo","c",""],["r","2025-10",6,"VENDA DE PRODUTOS/ SERVIÇOS","ELIS REGINA BERNARDO COSTA",366.67,1,"","Boleto Amigo","k",""],["r","2026-01",19,"VENDA DE PRODUTOS/ SERVIÇOS","ELIETE ALVES RABELO DOS SANTOS",383.33,1,"","Boleto Amigo","c",""],["r","2025-10",3,"VENDA DE PRODUTOS/ SERVIÇOS","ELIETE ALVES RABELO DOS SANTOS",383.33,1,"","Boleto Amigo","k",""],["r","2026-01",21,"VENDA DE PRODUTOS/ SERVIÇOS","KAIQUE PINHEIRO LEITE",516.36,1,"","Boleto Amigo","c",""],["r","2025-09",18,"VENDA DE PRODUTOS/ SERVIÇOS","KAIQUE PINHEIRO LEITE",516.36,1,"","Boleto Amigo","k",""],["r","2026-01",19,"VENDA DE PRODUTOS/ SERVIÇOS","SIDINELIO NASCIMENTO PIRES",358.33,1,"","Boleto Amigo","c",""],["r","2025-08",8,"VENDA DE PRODUTOS/ SERVIÇOS","SIDINELIO NASCIMENTO PIRES",358.33,1,"","Boleto Amigo","k",""],["r","2026-01",19,"VENDA DE PRODUTOS/ SERVIÇOS","CESAR AUGUSTO RIBEIRO FERREIRA",500,1,"","Boleto Amigo","c",""],["r","2025-10",14,"VENDA DE PRODUTOS/ SERVIÇOS","CESAR AUGUSTO RIBEIRO FERREIRA",500,1,"","Boleto Amigo","k",""],["r","2026-01",14,"VENDA DE PRODUTOS/ SERVIÇOS","VANDERSON BARROS DE SOUZA",383.33,1,"","Boleto Amigo","c",""],["r","2025-11",11,"VENDA DE PRODUTOS/ SERVIÇOS","VANDERSON BARROS DE SOUZA",383.33,1,"","Boleto Amigo","k",""],["r","2026-01",7,"VENDA DE PRODUTOS/ SERVIÇOS","FERNANDO HENRIQUE PEDROZO DE CAMPOS",333.33,1,"","Boleto Amigo","c",""],["r","2025-09",25,"VENDA DE PRODUTOS/ SERVIÇOS","FERNANDO HENRIQUE PEDROZO DE CAMPOS",333.33,1,"","Boleto Amigo","k",""],["r","2026-02",27,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA URSULA RIOS CARNEIRO",405.51,1,"","Boleto Amigo","c",""],["r","2025-06",30,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA URSULA RIOS CARNEIRO",405.51,1,"","Boleto Amigo","k",""],["r","2026-01",15,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE ARI SANTOS MACIEL",300,1,"","Boleto Amigo","c",""],["r","2026-01",15,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE ARI SANTOS MACIEL",300,1,"","Boleto Amigo","k",""],["r","2026-01",19,"VENDA DE PRODUTOS/ SERVIÇOS","DANIELE FERREIRA DO NASCIMENTO",383.33,1,"","Boleto Amigo","c",""],["r","2025-08",25,"VENDA DE PRODUTOS/ SERVIÇOS","DANIELE FERREIRA DO NASCIMENTO",383.33,1,"","Boleto Amigo","k",""],["r","2026-01",14,"VENDA DE PRODUTOS/ SERVIÇOS","ELENICE LOURENCO FELIPE",383.33,1,"","Boleto Amigo","c",""],["r","2025-10",23,"VENDA DE PRODUTOS/ SERVIÇOS","ELENICE LOURENCO FELIPE",383.33,1,"","Boleto Amigo","k",""],["r","2026-02",6,"VENDA DE PRODUTOS/ SERVIÇOS","ELENILTON SANTOS DO NASCIMENTO",391.25,1,"","Boleto Amigo","c",""],["r","2025-08",20,"VENDA DE PRODUTOS/ SERVIÇOS","ELENILTON SANTOS DO NASCIMENTO",391.25,1,"","Boleto Amigo","k",""],["r","2026-01",9,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE ANTONIO BARBOSA DE MOURA",250,1,"","Boleto Amigo","c",""],["r","2025-10",24,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE ANTONIO BARBOSA DE MOURA",250,1,"","Boleto Amigo","k",""],["r","2025-12",17,"VENDA DE PRODUTOS/ SERVIÇOS","SIMONE OLIVEIRA SILVA",383.35,1,"","Boleto Amigo","c",""],["r","2025-06",30,"VENDA DE PRODUTOS/ SERVIÇOS","SIMONE OLIVEIRA SILVA",383.35,1,"","Boleto Amigo","k",""],["r","2026-01",30,"VENDA DE PRODUTOS/ SERVIÇOS","CLAUDIO JOSE INACIO JUNIOR",398.2,1,"","Boleto Amigo","c",""],["r","2025-10",21,"VENDA DE PRODUTOS/ SERVIÇOS","CLAUDIO JOSE INACIO JUNIOR",398.2,1,"","Boleto Amigo","k",""],["r","2026-02",6,"VENDA DE PRODUTOS/ SERVIÇOS","GABRIEL CRUZ DOS REIS",400.02,1,"","Boleto Amigo","c",""],["r","2025-09",23,"VENDA DE PRODUTOS/ SERVIÇOS","GABRIEL CRUZ DOS REIS",400.02,1,"","Boleto Amigo","k",""],["r","2026-01",14,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA VILCA GOMES DE CARVALHO FACANHA",400,1,"","Boleto Amigo","c",""],["r","2026-01",14,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA VILCA GOMES DE CARVALHO FACANHA",400,1,"","Boleto Amigo","k",""],["r","2026-01",14,"VENDA DE PRODUTOS/ SERVIÇOS","ANDERSON SANTOS DA SILVA CABRAL",300,1,"","Boleto Amigo","c",""],["r","2026-01",14,"VENDA DE PRODUTOS/ SERVIÇOS","ANDERSON SANTOS DA SILVA CABRAL",300,1,"","Boleto Amigo","k",""],["r","2026-01",14,"VENDA DE PRODUTOS/ SERVIÇOS","EDNA COSTA DE JESUS ALVES",300,1,"","Boleto Amigo","c",""],["r","2026-01",14,"VENDA DE PRODUTOS/ SERVIÇOS","EDNA COSTA DE JESUS ALVES",300,1,"","Boleto Amigo","k",""],["r","2026-01",14,"VENDA DE PRODUTOS/ SERVIÇOS","LIDIANE ALMEIDA SILVA",300,1,"","Boleto Amigo","c",""],["r","2026-01",14,"VENDA DE PRODUTOS/ SERVIÇOS","LIDIANE ALMEIDA SILVA",300,1,"","Boleto Amigo","k",""],["r","2026-01",14,"VENDA DE PRODUTOS/ SERVIÇOS","EDUARDA ANDRADE DO NASCIMENTO",300,1,"","Boleto Amigo","c",""],["r","2026-01",13,"VENDA DE PRODUTOS/ SERVIÇOS","EDUARDA ANDRADE DO NASCIMENTO",300,1,"","Boleto Amigo","k",""],["r","2026-01",20,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO EVANILDO COSTA DOS SANTOS",395.86,1,"","Boleto Amigo","c",""],["r","2025-11",4,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO EVANILDO COSTA DOS SANTOS",395.86,1,"","Boleto Amigo","k",""],["r","2026-01",13,"VENDA DE PRODUTOS/ SERVIÇOS","ANA CRISTINA CORREA PINHEIRO",400,1,"","Boleto Amigo","c",""],["r","2025-09",3,"VENDA DE PRODUTOS/ SERVIÇOS","ANA CRISTINA CORREA PINHEIRO",400,1,"","Boleto Amigo","k",""],["r","2026-02",9,"VENDA DE PRODUTOS/ SERVIÇOS","ERBANO VELOSO HOLANDA",401.06,1,"","Boleto Amigo","c",""],["r","2025-09",12,"VENDA DE PRODUTOS/ SERVIÇOS","ERBANO VELOSO HOLANDA",401.06,1,"","Boleto Amigo","k",""],["r","2026-01",12,"VENDA DE PRODUTOS/ SERVIÇOS","CLEGINALDO OLIVEIRA DA SILVA",383.33,1,"","Boleto Amigo","c",""],["r","2025-08",21,"VENDA DE PRODUTOS/ SERVIÇOS","CLEGINALDO OLIVEIRA DA SILVA",383.33,1,"","Boleto Amigo","k",""],["r","2026-01",6,"VENDA DE PRODUTOS/ SERVIÇOS","PAULO CANDIDO RODRIGUES",400,1,"","Boleto Amigo","c",""],["r","2025-10",11,"VENDA DE PRODUTOS/ SERVIÇOS","PAULO CANDIDO RODRIGUES",400,1,"","Boleto Amigo","k",""],["r","2026-01",14,"VENDA DE PRODUTOS/ SERVIÇOS","RUAN MATHEUS SOUSA DE MORAIS 38142166000115",460,1,"","Boleto Amigo","c",""],["r","2025-09",3,"VENDA DE PRODUTOS/ SERVIÇOS","RUAN MATHEUS SOUSA DE MORAIS 38142166000115",460,1,"","Boleto Amigo","k",""],["r","2026-01",26,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GENECY DE SOUSA SANTOS",397.42,1,"","Boleto Amigo","c",""],["r","2025-11",5,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GENECY DE SOUSA SANTOS",397.42,1,"","Boleto Amigo","k",""],["r","2026-01",13,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA HALINA ANDRE DOS SANTOS",383.33,1,"","Boleto Amigo","c",""],["r","2025-10",6,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA HALINA ANDRE DOS SANTOS",383.33,1,"","Boleto Amigo","k",""],["r","2026-01",12,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO ALEXANDRE MEDEIROS SANTANA",300,1,"","Boleto Amigo","c",""],["r","2025-07",28,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO ALEXANDRE MEDEIROS SANTANA",300,1,"","Boleto Amigo","k",""],["r","2026-01",15,"VENDA DE PRODUTOS/ SERVIÇOS","WASHINGTON TORQUATO DE LIMA JUNIOR",395.07,1,"","Boleto Amigo","c",""],["r","2025-12",18,"VENDA DE PRODUTOS/ SERVIÇOS","WASHINGTON TORQUATO DE LIMA JUNIOR",395.07,1,"","Boleto Amigo","k",""],["r","2026-01",14,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIA MARIA BARBOSA TEODOSIO",400,1,"","Boleto Amigo","c",""],["r","2025-10",1,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIA MARIA BARBOSA TEODOSIO",400,1,"","Boleto Amigo","k",""],["r","2026-01",14,"VENDA DE PRODUTOS/ SERVIÇOS","MARCOS ANDERSON OLIVEIRA ARAUJO",383.33,1,"","Boleto Amigo","c",""],["r","2025-12",9,"VENDA DE PRODUTOS/ SERVIÇOS","MARCOS ANDERSON OLIVEIRA ARAUJO",383.33,1,"","Boleto Amigo","k",""],["r","2026-01",12,"VENDA DE PRODUTOS/ SERVIÇOS","CRISTIANO REIS DA SILVA",383.33,1,"","Boleto Amigo","c",""],["r","2025-09",24,"VENDA DE PRODUTOS/ SERVIÇOS","CRISTIANO REIS DA SILVA",383.33,1,"","Boleto Amigo","k",""],["r","2026-01",14,"VENDA DE PRODUTOS/ SERVIÇOS","TANIA MARIA GOMES DA SILVA",383.33,1,"","Boleto Amigo","c",""],["r","2025-12",12,"VENDA DE PRODUTOS/ SERVIÇOS","TANIA MARIA GOMES DA SILVA",383.33,1,"","Boleto Amigo","k",""],["r","2026-01",14,"VENDA DE PRODUTOS/ SERVIÇOS","DELYNE DO VALE MARTINS BARROSO",383.33,1,"","Boleto Amigo","c",""],["r","2025-09",20,"VENDA DE PRODUTOS/ SERVIÇOS","DELYNE DO VALE MARTINS BARROSO",383.33,1,"","Boleto Amigo","k",""],["r","2026-02",4,"VENDA DE PRODUTOS/ SERVIÇOS","VALDEILSON SAMINES ARAUJO",400.28,1,"","Boleto Amigo","c",""],["r","2025-10",2,"VENDA DE PRODUTOS/ SERVIÇOS","VALDEILSON SAMINES ARAUJO",400.28,1,"","Boleto Amigo","k",""],["r","2026-01",13,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO MAGDO GUEDES MESQUITA",383.33,1,"","Boleto Amigo","c",""],["r","2025-12",3,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO MAGDO GUEDES MESQUITA",383.33,1,"","Boleto Amigo","k",""],["r","2026-01",14,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA HELENA EVANGELISTA MARTINS",383.33,1,"","Boleto Amigo","c",""],["r","2025-11",21,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA HELENA EVANGELISTA MARTINS",383.33,1,"","Boleto Amigo","k",""],["r","2026-01",14,"VENDA DE PRODUTOS/ SERVIÇOS","JULIA DE SOUZA FIRMEZA",383.33,1,"","Boleto Amigo","c",""],["r","2025-12",31,"VENDA DE PRODUTOS/ SERVIÇOS","JULIA DE SOUZA FIRMEZA",383.33,1,"","Boleto Amigo","k",""],["r","2025-12",26,"VENDA DE PRODUTOS/ SERVIÇOS","SIMONE FERNANDES DE SOUZA",383.33,1,"","Boleto Amigo","c",""],["r","2025-12",2,"VENDA DE PRODUTOS/ SERVIÇOS","SIMONE FERNANDES DE SOUZA",383.33,1,"","Boleto Amigo","k",""],["r","2026-01",14,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA SANDRECICERA FREIRES DA SILVA",383.33,1,"","Boleto Amigo","c",""],["r","2025-12",9,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA SANDRECICERA FREIRES DA SILVA",383.33,1,"","Boleto Amigo","k",""],["r","2026-01",14,"VENDA DE PRODUTOS/ SERVIÇOS","CESAR NILDO DE BRITO OLIVEIRA",383.33,1,"","Boleto Amigo","c",""],["r","2025-12",4,"VENDA DE PRODUTOS/ SERVIÇOS","CESAR NILDO DE BRITO OLIVEIRA",383.33,1,"","Boleto Amigo","k",""],["r","2026-01",8,"VENDA DE PRODUTOS/ SERVIÇOS","SILVANIA PEREIRA DE SOUSA",300,1,"","Boleto Amigo","c",""],["r","2026-01",9,"VENDA DE PRODUTOS/ SERVIÇOS","SILVANIA PEREIRA DE SOUSA",300,1,"","Boleto Amigo","k",""],["r","2026-01",8,"VENDA DE PRODUTOS/ SERVIÇOS","FLAVIO ROBERTO NASCIMENTO PEREIRA",200,1,"","Boleto Amigo","c",""],["r","2026-01",9,"VENDA DE PRODUTOS/ SERVIÇOS","FLAVIO ROBERTO NASCIMENTO PEREIRA",200,1,"","Boleto Amigo","k",""],["r","2026-01",7,"VENDA DE PRODUTOS/ SERVIÇOS","GUSTAVO BATISTA DE OLIVEIRA",200,1,"","Boleto Amigo","c",""],["r","2026-01",7,"VENDA DE PRODUTOS/ SERVIÇOS","GUSTAVO BATISTA DE OLIVEIRA",200,1,"","Boleto Amigo","k",""],["r","2026-01",7,"VENDA DE PRODUTOS/ SERVIÇOS","ORION ARAUJO PEREIRA",333.33,1,"","Boleto Amigo","c",""],["r","2025-11",21,"VENDA DE PRODUTOS/ SERVIÇOS","ORION ARAUJO PEREIRA",333.33,1,"","Boleto Amigo","k",""],["r","2026-01",7,"VENDA DE PRODUTOS/ SERVIÇOS","MILENA DE OLIVEIRA FERREIA MELO",383.35,1,"","Boleto Amigo","c",""],["r","2025-07",2,"VENDA DE PRODUTOS/ SERVIÇOS","MILENA DE OLIVEIRA FERREIA MELO",383.35,1,"","Boleto Amigo","k",""],["r","2026-01",7,"VENDA DE PRODUTOS/ SERVIÇOS","JOAQUIM DA SILVA REIS",383.33,1,"","Boleto Amigo","c",""],["r","2025-11",3,"VENDA DE PRODUTOS/ SERVIÇOS","JOAQUIM DA SILVA REIS",383.33,1,"","Boleto Amigo","k",""],["r","2026-01",5,"VENDA DE PRODUTOS/ SERVIÇOS","KAIO CESAR FREITAS PEREIRA",383.35,0,"","Boleto Amigo","c",""],["r","2025-06",4,"VENDA DE PRODUTOS/ SERVIÇOS","KAIO CESAR FREITAS PEREIRA",383.35,0,"","Boleto Amigo","k",""],["r","2026-01",5,"VENDA DE PRODUTOS/ SERVIÇOS","KLEBER DE ALMEIDA",300,1,"","Boleto Amigo","c",""],["r","2026-01",5,"VENDA DE PRODUTOS/ SERVIÇOS","KLEBER DE ALMEIDA",300,1,"","Boleto Amigo","k",""],["r","2026-01",2,"VENDA DE PRODUTOS/ SERVIÇOS","B M VIEIRA SERVICOS E COMERCIO",500,1,"","Boleto Amigo","c",""],["r","2026-01",2,"VENDA DE PRODUTOS/ SERVIÇOS","B M VIEIRA SERVICOS E COMERCIO",500,1,"","Boleto Amigo","k",""],["r","2026-01",2,"VENDA DE PRODUTOS/ SERVIÇOS","JOACIR ALVES DOS SANTOS",200,1,"","Boleto Amigo","c",""],["r","2026-01",2,"VENDA DE PRODUTOS/ SERVIÇOS","JOACIR ALVES DOS SANTOS",200,1,"","Boleto Amigo","k",""],["r","2025-12",31,"VENDA DE PRODUTOS/ SERVIÇOS","JULIA DE SOUZA FIRMEZA",200,1,"","Boleto Amigo","c",""],["r","2025-12",31,"VENDA DE PRODUTOS/ SERVIÇOS","JULIA DE SOUZA FIRMEZA",200,1,"","Boleto Amigo","k",""],["r","2025-11",7,"VENDA DE PRODUTOS/ SERVIÇOS","JOAO VICTOR DE SOUSA PESSOA",460,1,"","Boleto Amigo","c",""],["r","2025-07",25,"VENDA DE PRODUTOS/ SERVIÇOS","JOAO VICTOR DE SOUSA PESSOA",460,1,"","Boleto Amigo","k",""],["r","2025-12",30,"VENDA DE PRODUTOS/ SERVIÇOS","JORGE LUAN COSTA BOTELHO",200,1,"","Boleto Amigo","c",""],["r","2025-12",30,"VENDA DE PRODUTOS/ SERVIÇOS","JORGE LUAN COSTA BOTELHO",200,1,"","Boleto Amigo","k",""],["r","2025-12",29,"VENDA DE PRODUTOS/ SERVIÇOS","SARA JAQUELINE DE SOUSA ISIDIO",200,1,"","Boleto Amigo","c",""],["r","2025-12",29,"VENDA DE PRODUTOS/ SERVIÇOS","SARA JAQUELINE DE SOUSA ISIDIO",200,1,"","Boleto Amigo","k",""],["r","2026-01",2,"VENDA DE PRODUTOS/ SERVIÇOS","EDVALDO DO CARMO ALVES",500,1,"","Boleto Amigo","c",""],["r","2025-11",27,"VENDA DE PRODUTOS/ SERVIÇOS","EDVALDO DO CARMO ALVES",500,1,"","Boleto Amigo","k",""],["r","2025-12",26,"VENDA DE PRODUTOS/ SERVIÇOS","PAULO SERGIO NUNES DA SILVA",200,1,"","Boleto Amigo","c",""],["r","2025-12",26,"VENDA DE PRODUTOS/ SERVIÇOS","PAULO SERGIO NUNES DA SILVA",200,1,"","Boleto Amigo","k",""],["r","2025-12",24,"VENDA DE PRODUTOS/ SERVIÇOS","VERONICA PEREIRA RAQUEL DA SILVA TELES",383.33,1,"","Boleto Amigo","c",""],["r","2025-11",27,"VENDA DE PRODUTOS/ SERVIÇOS","VERONICA PEREIRA RAQUEL DA SILVA TELES",383.33,1,"","Boleto Amigo","k",""],["r","2025-12",30,"VENDA DE PRODUTOS/ SERVIÇOS","ELIZANGELA ALVES DA COSTA",383.33,1,"","Boleto Amigo","c",""],["r","2025-10",27,"VENDA DE PRODUTOS/ SERVIÇOS","ELIZANGELA ALVES DA COSTA",383.33,1,"","Boleto Amigo","k",""],["r","2026-01",6,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO DE PADUA VAZ DE LIMA",396.64,1,"","Boleto Amigo","c",""],["r","2025-10",29,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO DE PADUA VAZ DE LIMA",396.64,1,"","Boleto Amigo","k",""],["r","2025-12",18,"VENDA DE PRODUTOS/ SERVIÇOS","JOSIAS DOS SANTOS RODRIGUES",383.33,1,"","Boleto Amigo","c",""],["r","2025-08",27,"VENDA DE PRODUTOS/ SERVIÇOS","JOSIAS DOS SANTOS RODRIGUES",383.33,1,"","Boleto Amigo","k",""],["r","2025-12",24,"VENDA DE PRODUTOS/ SERVIÇOS","ZENILDO DA SILVA SANTOS",383.33,1,"","Boleto Amigo","c",""],["r","2025-09",25,"VENDA DE PRODUTOS/ SERVIÇOS","ZENILDO DA SILVA SANTOS",383.33,1,"","Boleto Amigo","k",""],["r","2026-01",7,"VENDA DE PRODUTOS/ SERVIÇOS","JOAO VICTOR SOUZA VILHENA",397.42,1,"","Boleto Amigo","c",""],["r","2025-09",15,"VENDA DE PRODUTOS/ SERVIÇOS","JOAO VICTOR SOUZA VILHENA",397.42,1,"","Boleto Amigo","k",""],["r","2025-12",26,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO DE ASSIS DA SILVA",383.33,1,"","Boleto Amigo","c",""],["r","2025-09",23,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO DE ASSIS DA SILVA",383.33,1,"","Boleto Amigo","k",""],["r","2025-12",30,"VENDA DE PRODUTOS/ SERVIÇOS","DORISBERTO DE VASCONCELOS ARAUJO",383.33,1,"","Boleto Amigo","c",""],["r","2025-09",5,"VENDA DE PRODUTOS/ SERVIÇOS","DORISBERTO DE VASCONCELOS ARAUJO",383.33,1,"","Boleto Amigo","k",""],["r","2026-02",13,"VENDA DE PRODUTOS/ SERVIÇOS","WESLEY EURIPEDIS CAVALCANTE",407.04,1,"","Boleto Amigo","c",""],["r","2025-10",1,"VENDA DE PRODUTOS/ SERVIÇOS","WESLEY EURIPEDIS CAVALCANTE",407.04,1,"","Boleto Amigo","k",""],["r","2026-01",2,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE WILSON JANUARIO DE SOUSA",378.42,1,"","Boleto Amigo","c",""],["r","2025-11",3,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE WILSON JANUARIO DE SOUSA",378.42,1,"","Boleto Amigo","k",""],["r","2025-12",30,"VENDA DE PRODUTOS/ SERVIÇOS","ALBERTO VICENTE HONORIO",366.67,1,"","Boleto Amigo","c",""],["r","2025-11",19,"VENDA DE PRODUTOS/ SERVIÇOS","ALBERTO VICENTE HONORIO",366.67,1,"","Boleto Amigo","k",""],["r","2026-01",2,"VENDA DE PRODUTOS/ SERVIÇOS","GERONIMO DA SILVA ALCANTARA",395.6,1,"","Boleto Amigo","c",""],["r","2025-09",19,"VENDA DE PRODUTOS/ SERVIÇOS","GERONIMO DA SILVA ALCANTARA",395.6,1,"","Boleto Amigo","k",""],["r","2025-12",30,"VENDA DE PRODUTOS/ SERVIÇOS","SERGIO RUFINO DE FREITAS",366.67,1,"","Boleto Amigo","c",""],["r","2025-09",10,"VENDA DE PRODUTOS/ SERVIÇOS","SERGIO RUFINO DE FREITAS",366.67,1,"","Boleto Amigo","k",""],["r","2025-12",29,"VENDA DE PRODUTOS/ SERVIÇOS","MARCIO JOSE ARAUJO POLICARPO",383.33,1,"","Boleto Amigo","c",""],["r","2025-09",16,"VENDA DE PRODUTOS/ SERVIÇOS","MARCIO JOSE ARAUJO POLICARPO",383.33,1,"","Boleto Amigo","k",""],["r","2025-12",24,"VENDA DE PRODUTOS/ SERVIÇOS","MARCOS COSTA MARQUES",383.33,1,"","Boleto Amigo","c",""],["r","2025-09",12,"VENDA DE PRODUTOS/ SERVIÇOS","MARCOS COSTA MARQUES",383.33,1,"","Boleto Amigo","k",""],["r","2026-01",5,"VENDA DE PRODUTOS/ SERVIÇOS","DIOGO HENRIQUE FARNESE",516.36,1,"","Boleto Amigo","c",""],["r","2025-11",5,"VENDA DE PRODUTOS/ SERVIÇOS","DIOGO HENRIQUE FARNESE",516.36,1,"","Boleto Amigo","k",""],["r","2025-12",22,"VENDA DE PRODUTOS/ SERVIÇOS","ELINILDA MACEDO DA SILVA",383.33,1,"","Boleto Amigo","c",""],["r","2025-11",17,"VENDA DE PRODUTOS/ SERVIÇOS","ELINILDA MACEDO DA SILVA",383.33,1,"","Boleto Amigo","k",""],["r","2025-12",30,"VENDA DE PRODUTOS/ SERVIÇOS","NAYANE DE SOUSA VIEIRA",386,1,"","Boleto Amigo","c",""],["r","2025-10",24,"VENDA DE PRODUTOS/ SERVIÇOS","NAYANE DE SOUSA VIEIRA",386,1,"","Boleto Amigo","k",""],["r","2026-01",2,"VENDA DE PRODUTOS/ SERVIÇOS","ANGELA MARIA LIMA SALES",395.6,1,"","Boleto Amigo","c",""],["r","2025-09",10,"VENDA DE PRODUTOS/ SERVIÇOS","ANGELA MARIA LIMA SALES",395.6,1,"","Boleto Amigo","k",""],["r","2026-01",7,"VENDA DE PRODUTOS/ SERVIÇOS","ERENILZA CARVALHO DA SILVA SOUSA",397.45,1,"","Boleto Amigo","c",""],["r","2025-06",4,"VENDA DE PRODUTOS/ SERVIÇOS","ERENILZA CARVALHO DA SILVA SOUSA",397.45,1,"","Boleto Amigo","k",""],["r","2026-01",15,"VENDA DE PRODUTOS/ SERVIÇOS","MARIANY DE SOUSA GALVAO",399.5,1,"","Boleto Amigo","c",""],["r","2025-07",14,"VENDA DE PRODUTOS/ SERVIÇOS","MARIANY DE SOUSA GALVAO",399.5,1,"","Boleto Amigo","k",""],["r","2025-12",25,"VENDA DE PRODUTOS/ SERVIÇOS","CAMILA GABRIELE CORREA NEVES",383.35,0,"","Boleto Amigo","c",""],["r","2025-06",23,"VENDA DE PRODUTOS/ SERVIÇOS","CAMILA GABRIELE CORREA NEVES",383.35,0,"","Boleto Amigo","k",""],["r","2025-12",30,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE AELITON DA SILVA",383.35,1,"","Boleto Amigo","c",""],["r","2025-06",5,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE AELITON DA SILVA",383.35,1,"","Boleto Amigo","k",""],["r","2025-12",30,"VENDA DE PRODUTOS/ SERVIÇOS","JADSON CARLOS DE OLIVEIRA SATURNINO",383.35,1,"","Boleto Amigo","c",""],["r","2025-06",24,"VENDA DE PRODUTOS/ SERVIÇOS","JADSON CARLOS DE OLIVEIRA SATURNINO",383.35,1,"","Boleto Amigo","k",""],["r","2025-12",30,"VENDA DE PRODUTOS/ SERVIÇOS","GORETE PEREIRA DOS SANTOS LIMA",366.65,1,"","Boleto Amigo","c",""],["r","2025-06",26,"VENDA DE PRODUTOS/ SERVIÇOS","GORETE PEREIRA DOS SANTOS LIMA",366.65,1,"","Boleto Amigo","k",""],["r","2025-12",30,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO WYTAMAR COELHO DA SILVA CRUZ",383.33,1,"","Boleto Amigo","c",""],["r","2025-08",20,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO WYTAMAR COELHO DA SILVA CRUZ",383.33,1,"","Boleto Amigo","k",""],["r","2025-12",30,"VENDA DE PRODUTOS/ SERVIÇOS","HENRIQUE RAMOS GUIMARAES",383.33,1,"","Boleto Amigo","c",""],["r","2025-07",10,"VENDA DE PRODUTOS/ SERVIÇOS","HENRIQUE RAMOS GUIMARAES",383.33,1,"","Boleto Amigo","k",""],["r","2025-12",24,"VENDA DE PRODUTOS/ SERVIÇOS","JAILSON SILVA DOS SANTOS",383.33,1,"","Boleto Amigo","c",""],["r","2025-08",12,"VENDA DE PRODUTOS/ SERVIÇOS","JAILSON SILVA DOS SANTOS",383.33,1,"","Boleto Amigo","k",""],["r","2025-12",30,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA ELBA CORDEIRO DA CRUZ DE SOUSA",383.33,1,"","Boleto Amigo","c",""],["r","2025-08",8,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA ELBA CORDEIRO DA CRUZ DE SOUSA",383.33,1,"","Boleto Amigo","k",""],["r","2025-12",25,"VENDA DE PRODUTOS/ SERVIÇOS","NANCI MARIA SILVEIRA CAMPOS",383.33,0,"","Boleto Amigo","c",""],["r","2025-08",7,"VENDA DE PRODUTOS/ SERVIÇOS","NANCI MARIA SILVEIRA CAMPOS",383.33,0,"","Boleto Amigo","k",""],["r","2025-12",22,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO JOANDERSON GOMES FERREIRA",200,1,"","Boleto Amigo","c",""],["r","2025-12",22,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO JOANDERSON GOMES FERREIRA",200,1,"","Boleto Amigo","k",""],["r","2025-12",24,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE FRANCISCO PEREIRA",383.33,1,"","Boleto Amigo","c",""],["r","2025-10",15,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE FRANCISCO PEREIRA",383.33,1,"","Boleto Amigo","k",""],["r","2026-01",2,"VENDA DE PRODUTOS/ SERVIÇOS","MAX SERGIO SANTOS MOREIRA JUNIOR",379.42,1,"","Boleto Amigo","c",""],["r","2025-08",20,"VENDA DE PRODUTOS/ SERVIÇOS","MAX SERGIO SANTOS MOREIRA JUNIOR",379.42,1,"","Boleto Amigo","k",""],["r","2026-01",8,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO REGINALDO QUINTINO",398.72,1,"","Boleto Amigo","c",""],["r","2025-10",7,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO REGINALDO QUINTINO",398.72,1,"","Boleto Amigo","k",""],["r","2025-12",26,"VENDA DE PRODUTOS/ SERVIÇOS","ALEXANDRE MARTINS DA SILVA",395.07,1,"","Boleto Amigo","c",""],["r","2025-11",18,"VENDA DE PRODUTOS/ SERVIÇOS","ALEXANDRE MARTINS DA SILVA",395.07,1,"","Boleto Amigo","k",""],["r","2026-01",2,"VENDA DE PRODUTOS/ SERVIÇOS","MAX SERGIO SANTOS MOREIRA JUNIOR",379.42,1,"","Boleto Amigo","c",""],["r","2025-08",20,"VENDA DE PRODUTOS/ SERVIÇOS","MAX SERGIO SANTOS MOREIRA JUNIOR",379.42,1,"","Boleto Amigo","k",""],["r","2026-01",15,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO PEDRO NETO",400.54,1,"","Boleto Amigo","c",""],["r","2025-08",1,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO PEDRO NETO",400.54,1,"","Boleto Amigo","k",""],["r","2025-12",19,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE MANOEL DOS SANTOS JUNIOR",383.35,1,"","Boleto Amigo","c",""],["r","2025-06",20,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE MANOEL DOS SANTOS JUNIOR",383.35,1,"","Boleto Amigo","k",""],["r","2025-12",1,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA FRANCILENE ALVES DA SILVA LIMA",375,1,"","Boleto Amigo","c",""],["r","2025-09",17,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA FRANCILENE ALVES DA SILVA LIMA",375,1,"","Boleto Amigo","k",""],["r","2025-12",19,"VENDA DE PRODUTOS/ SERVIÇOS","CARLOS ALBERTO RODRIGUES PEREIRA",200,1,"","Boleto Amigo","c",""],["r","2025-12",19,"VENDA DE PRODUTOS/ SERVIÇOS","CARLOS ALBERTO RODRIGUES PEREIRA",200,1,"","Boleto Amigo","k",""],["r","2025-12",19,"VENDA DE PRODUTOS/ SERVIÇOS","PAULA CRISTINA AROUCHA DO NASCIMENTO",200,1,"","Boleto Amigo","c",""],["r","2025-12",19,"VENDA DE PRODUTOS/ SERVIÇOS","PAULA CRISTINA AROUCHA DO NASCIMENTO",200,1,"","Boleto Amigo","k",""],["r","2025-12",19,"VENDA DE PRODUTOS/ SERVIÇOS","MATHIAS JARLAN BRITO GONCALVES",200,1,"","Boleto Amigo","c",""],["r","2025-12",22,"VENDA DE PRODUTOS/ SERVIÇOS","MATHIAS JARLAN BRITO GONCALVES",200,1,"","Boleto Amigo","k",""],["r","2025-12",18,"VENDA DE PRODUTOS/ SERVIÇOS","WASHINGTON TORQUATO DE LIMA JUNIOR",200,1,"","Boleto Amigo","c",""],["r","2025-12",18,"VENDA DE PRODUTOS/ SERVIÇOS","WASHINGTON TORQUATO DE LIMA JUNIOR",200,1,"","Boleto Amigo","k",""],["r","2025-12",9,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA JOCELINA FREIRE DE OLIVEIRA",383.33,1,"","Boleto Amigo","c",""],["r","2025-10",17,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA JOCELINA FREIRE DE OLIVEIRA",383.33,1,"","Boleto Amigo","k",""],["r","2025-12",17,"VENDA DE PRODUTOS/ SERVIÇOS","ELENICE LOURENCO FELIPE",383.33,1,"","Boleto Amigo","c",""],["r","2025-10",23,"VENDA DE PRODUTOS/ SERVIÇOS","ELENICE LOURENCO FELIPE",383.33,1,"","Boleto Amigo","k",""],["r","2025-12",3,"VENDA DE PRODUTOS/ SERVIÇOS","NADIR ALVES TEIXEIRA",383.33,1,"","Boleto Amigo","c",""],["r","2025-06",25,"VENDA DE PRODUTOS/ SERVIÇOS","NADIR ALVES TEIXEIRA",383.33,1,"","Boleto Amigo","k",""],["r","2025-12",17,"VENDA DE PRODUTOS/ SERVIÇOS","DANIELE FERREIRA DO NASCIMENTO",383.33,1,"","Boleto Amigo","c",""],["r","2025-08",25,"VENDA DE PRODUTOS/ SERVIÇOS","DANIELE FERREIRA DO NASCIMENTO",383.33,1,"","Boleto Amigo","k",""],["r","2025-11",5,"VENDA DE PRODUTOS/ SERVIÇOS","NADIR ALVES TEIXEIRA",383.35,1,"","Boleto Amigo","c",""],["r","2025-06",25,"VENDA DE PRODUTOS/ SERVIÇOS","NADIR ALVES TEIXEIRA",383.35,1,"","Boleto Amigo","k",""],["r","2025-12",16,"VENDA DE PRODUTOS/ SERVIÇOS","NATANAEL DIVINO ALVES",383.35,1,"","Boleto Amigo","c",""],["r","2025-06",27,"VENDA DE PRODUTOS/ SERVIÇOS","NATANAEL DIVINO ALVES",383.35,1,"","Boleto Amigo","k",""],["r","2025-12",17,"VENDA DE PRODUTOS/ SERVIÇOS","SIMONE OLIVEIRA SILVA",383.33,1,"","Boleto Amigo","c",""],["r","2025-06",30,"VENDA DE PRODUTOS/ SERVIÇOS","SIMONE OLIVEIRA SILVA",383.33,1,"","Boleto Amigo","k",""],["r","2025-12",10,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE ANTONIO BARBOSA DE MOURA",250,1,"","Boleto Amigo","c",""],["r","2025-10",24,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE ANTONIO BARBOSA DE MOURA",250,1,"","Boleto Amigo","k",""],["r","2025-12",18,"VENDA DE PRODUTOS/ SERVIÇOS","ISMAEL DA SILVA SANTOS",395.08,1,"","Boleto Amigo","c",""],["r","2025-08",18,"VENDA DE PRODUTOS/ SERVIÇOS","ISMAEL DA SILVA SANTOS",395.08,1,"","Boleto Amigo","k",""],["r","2025-12",23,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA URSULA RIOS CARNEIRO",395.86,1,"","Boleto Amigo","c",""],["r","2025-06",30,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA URSULA RIOS CARNEIRO",395.86,1,"","Boleto Amigo","k",""],["r","2025-12",17,"VENDA DE PRODUTOS/ SERVIÇOS","CESAR AUGUSTO RIBEIRO FERREIRA",500,1,"","Boleto Amigo","c",""],["r","2025-10",14,"VENDA DE PRODUTOS/ SERVIÇOS","CESAR AUGUSTO RIBEIRO FERREIRA",500,1,"","Boleto Amigo","k",""],["r","2025-11",19,"VENDA DE PRODUTOS/ SERVIÇOS","ELIS REGINA BERNARDO COSTA",366.67,1,"","Boleto Amigo","c",""],["r","2025-10",6,"VENDA DE PRODUTOS/ SERVIÇOS","ELIS REGINA BERNARDO COSTA",366.67,1,"","Boleto Amigo","k",""],["r","2025-12",17,"VENDA DE PRODUTOS/ SERVIÇOS","ELIETE ALVES RABELO DOS SANTOS",383.33,1,"","Boleto Amigo","c",""],["r","2025-10",3,"VENDA DE PRODUTOS/ SERVIÇOS","ELIETE ALVES RABELO DOS SANTOS",383.33,1,"","Boleto Amigo","k",""],["r","2025-12",5,"VENDA DE PRODUTOS/ SERVIÇOS","FERNANDO HENRIQUE PEDROZO DE CAMPOS",333.33,1,"","Boleto Amigo","c",""],["r","2025-09",25,"VENDA DE PRODUTOS/ SERVIÇOS","FERNANDO HENRIQUE PEDROZO DE CAMPOS",333.33,1,"","Boleto Amigo","k",""],["r","2026-01",12,"VENDA DE PRODUTOS/ SERVIÇOS","GABRIEL CRUZ DOS REIS",401.06,1,"","Boleto Amigo","c",""],["r","2025-09",23,"VENDA DE PRODUTOS/ SERVIÇOS","GABRIEL CRUZ DOS REIS",401.06,1,"","Boleto Amigo","k",""],["r","2025-12",17,"VENDA DE PRODUTOS/ SERVIÇOS","SIDINELIO NASCIMENTO PIRES",358.33,1,"","Boleto Amigo","c",""],["r","2025-08",8,"VENDA DE PRODUTOS/ SERVIÇOS","SIDINELIO NASCIMENTO PIRES",358.33,1,"","Boleto Amigo","k",""],["r","2025-12",18,"VENDA DE PRODUTOS/ SERVIÇOS","LANA THAYNI SILVA MENEZES",395.08,1,"","Boleto Amigo","c",""],["r","2025-09",15,"VENDA DE PRODUTOS/ SERVIÇOS","LANA THAYNI SILVA MENEZES",395.08,1,"","Boleto Amigo","k",""],["r","2025-12",18,"VENDA DE PRODUTOS/ SERVIÇOS","KAIQUE PINHEIRO LEITE",515.34,1,"","Boleto Amigo","c",""],["r","2025-09",18,"VENDA DE PRODUTOS/ SERVIÇOS","KAIQUE PINHEIRO LEITE",515.34,1,"","Boleto Amigo","k",""],["r","2025-12",17,"VENDA DE PRODUTOS/ SERVIÇOS","MARCIO MENDES RODRIGUES",366.67,1,"","Boleto Amigo","c",""],["r","2025-08",8,"VENDA DE PRODUTOS/ SERVIÇOS","MARCIO MENDES RODRIGUES",366.67,1,"","Boleto Amigo","k",""],["r","2025-12",12,"VENDA DE PRODUTOS/ SERVIÇOS","CLAUDIO JOSE INACIO JUNIOR",383.33,1,"","Boleto Amigo","c",""],["r","2025-10",21,"VENDA DE PRODUTOS/ SERVIÇOS","CLAUDIO JOSE INACIO JUNIOR",383.33,1,"","Boleto Amigo","k",""],["r","2025-12",15,"VENDA DE PRODUTOS/ SERVIÇOS","VANDERSON BARROS DE SOUZA",383.33,1,"","Boleto Amigo","c",""],["r","2025-11",11,"VENDA DE PRODUTOS/ SERVIÇOS","VANDERSON BARROS DE SOUZA",383.33,1,"","Boleto Amigo","k",""],["r","2026-01",15,"VENDA DE PRODUTOS/ SERVIÇOS","ELENILTON SANTOS DO NASCIMENTO",393.5,1,"","Boleto Amigo","c",""],["r","2025-08",20,"VENDA DE PRODUTOS/ SERVIÇOS","ELENILTON SANTOS DO NASCIMENTO",393.5,1,"","Boleto Amigo","k",""],["r","2025-12",10,"VENDA DE PRODUTOS/ SERVIÇOS","LEONARDO CASTRO DE JESUS",383.35,1,"","Boleto Amigo","c",""],["r","2025-06",11,"VENDA DE PRODUTOS/ SERVIÇOS","LEONARDO CASTRO DE JESUS",383.35,1,"","Boleto Amigo","k",""],["r","2025-12",12,"VENDA DE PRODUTOS/ SERVIÇOS","TANIA MARIA GOMES DA SILVA",200,1,"","Boleto Amigo","c",""],["r","2025-12",12,"VENDA DE PRODUTOS/ SERVIÇOS","TANIA MARIA GOMES DA SILVA",200,1,"","Boleto Amigo","k",""],["r","2025-12",12,"VENDA DE PRODUTOS/ SERVIÇOS","HILTON ASSUNCAO SANTOS ABREU",250,1,"","Boleto Amigo","c",""],["r","2025-12",12,"VENDA DE PRODUTOS/ SERVIÇOS","HILTON ASSUNCAO SANTOS ABREU",250,1,"","Boleto Amigo","k",""],["r","2025-12",12,"VENDA DE PRODUTOS/ SERVIÇOS","PAULA HYNGRID MORAES DE SOUZA",200,1,"","Boleto Amigo","c",""],["r","2025-12",12,"VENDA DE PRODUTOS/ SERVIÇOS","PAULA HYNGRID MORAES DE SOUZA",200,1,"","Boleto Amigo","k",""],["r","2025-12",16,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO ALEXANDRE MEDEIROS SANTANA",309.4,1,"","Boleto Amigo","c",""],["r","2025-07",28,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO ALEXANDRE MEDEIROS SANTANA",309.4,1,"","Boleto Amigo","k",""],["r","2025-12",12,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIA MARIA BARBOSA TEODOSIO",400,1,"","Boleto Amigo","c",""],["r","2025-10",1,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIA MARIA BARBOSA TEODOSIO",400,1,"","Boleto Amigo","k",""],["r","2025-12",22,"VENDA DE PRODUTOS/ SERVIÇOS","VALDEILSON SAMINES ARAUJO",396.9,1,"","Boleto Amigo","c",""],["r","2025-10",2,"VENDA DE PRODUTOS/ SERVIÇOS","VALDEILSON SAMINES ARAUJO",396.9,1,"","Boleto Amigo","k",""],["r","2025-12",9,"VENDA DE PRODUTOS/ SERVIÇOS","CRISTIANO REIS DA SILVA",383.33,1,"","Boleto Amigo","c",""],["r","2025-09",24,"VENDA DE PRODUTOS/ SERVIÇOS","CRISTIANO REIS DA SILVA",383.33,1,"","Boleto Amigo","k",""],["r","2025-12",12,"VENDA DE PRODUTOS/ SERVIÇOS","VITOR DA MACENO MIRANDA",383.33,1,"","Boleto Amigo","c",""],["r","2025-09",1,"VENDA DE PRODUTOS/ SERVIÇOS","VITOR DA MACENO MIRANDA",383.33,1,"","Boleto Amigo","k",""],["r","2025-12",12,"VENDA DE PRODUTOS/ SERVIÇOS","EDNA UCHOA DE MORAIS",500,1,"","Boleto Amigo","c",""],["r","2025-09",12,"VENDA DE PRODUTOS/ SERVIÇOS","EDNA UCHOA DE MORAIS",500,1,"","Boleto Amigo","k",""],["r","2025-12",11,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA HALINA ANDRE DOS SANTOS",383.33,1,"","Boleto Amigo","c",""],["r","2025-10",6,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA HALINA ANDRE DOS SANTOS",383.33,1,"","Boleto Amigo","k",""],["r","2025-12",16,"VENDA DE PRODUTOS/ SERVIÇOS","ERBANO VELOSO HOLANDA",396.37,1,"","Boleto Amigo","c",""],["r","2025-09",12,"VENDA DE PRODUTOS/ SERVIÇOS","ERBANO VELOSO HOLANDA",396.37,1,"","Boleto Amigo","k",""],["r","2025-12",3,"VENDA DE PRODUTOS/ SERVIÇOS","PAULO CANDIDO RODRIGUES",400,1,"","Boleto Amigo","c",""],["r","2025-10",11,"VENDA DE PRODUTOS/ SERVIÇOS","PAULO CANDIDO RODRIGUES",400,1,"","Boleto Amigo","k",""],["r","2025-12",12,"VENDA DE PRODUTOS/ SERVIÇOS","DELYNE DO VALE MARTINS BARROSO",383.33,1,"","Boleto Amigo","c",""],["r","2025-09",20,"VENDA DE PRODUTOS/ SERVIÇOS","DELYNE DO VALE MARTINS BARROSO",383.33,1,"","Boleto Amigo","k",""],["r","2025-12",12,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA HELENA EVANGELISTA MARTINS",383.33,1,"","Boleto Amigo","c",""],["r","2025-11",21,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA HELENA EVANGELISTA MARTINS",383.33,1,"","Boleto Amigo","k",""],["r","2025-12",15,"VENDA DE PRODUTOS/ SERVIÇOS","JULIO MICHAEL NUNES VENANCIO",515.34,1,"","Boleto Amigo","c",""],["r","2025-08",21,"VENDA DE PRODUTOS/ SERVIÇOS","JULIO MICHAEL NUNES VENANCIO",515.34,1,"","Boleto Amigo","k",""],["r","2025-12",12,"VENDA DE PRODUTOS/ SERVIÇOS","DENISE GRACA DOS SANTOS",383.35,1,"","Boleto Amigo","c",""],["r","2025-06",17,"VENDA DE PRODUTOS/ SERVIÇOS","DENISE GRACA DOS SANTOS",383.35,1,"","Boleto Amigo","k",""],["r","2025-12",12,"VENDA DE PRODUTOS/ SERVIÇOS","ALEXANDRE MARRON ARRUDA",383.35,1,"","Boleto Amigo","c",""],["r","2025-06",17,"VENDA DE PRODUTOS/ SERVIÇOS","ALEXANDRE MARRON ARRUDA",383.35,1,"","Boleto Amigo","k",""],["r","2025-12",10,"VENDA DE PRODUTOS/ SERVIÇOS","CLEGINALDO OLIVEIRA DA SILVA",383.33,1,"","Boleto Amigo","c",""],["r","2025-08",21,"VENDA DE PRODUTOS/ SERVIÇOS","CLEGINALDO OLIVEIRA DA SILVA",383.33,1,"","Boleto Amigo","k",""],["r","2025-12",15,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GENECY DE SOUSA SANTOS",395.08,1,"","Boleto Amigo","c",""],["r","2025-11",5,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GENECY DE SOUSA SANTOS",395.08,1,"","Boleto Amigo","k",""],["r","2025-12",12,"VENDA DE PRODUTOS/ SERVIÇOS","ANA CRISTINA CORREA PINHEIRO",400,1,"","Boleto Amigo","c",""],["r","2025-09",3,"VENDA DE PRODUTOS/ SERVIÇOS","ANA CRISTINA CORREA PINHEIRO",400,1,"","Boleto Amigo","k",""],["r","2025-12",11,"VENDA DE PRODUTOS/ SERVIÇOS","RUAN MATHEUS SOUSA DE MORAIS 38142166000115",460,1,"","Boleto Amigo","c",""],["r","2025-09",3,"VENDA DE PRODUTOS/ SERVIÇOS","RUAN MATHEUS SOUSA DE MORAIS 38142166000115",460,1,"","Boleto Amigo","k",""],["r","2025-12",12,"VENDA DE PRODUTOS/ SERVIÇOS","DENISE GRACA DOS SANTOS",383.35,1,"","Boleto Amigo","c",""],["r","2025-06",19,"VENDA DE PRODUTOS/ SERVIÇOS","DENISE GRACA DOS SANTOS",383.35,1,"","Boleto Amigo","k",""],["r","2025-12",12,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO EVANILDO COSTA DOS SANTOS",383.33,1,"","Boleto Amigo","c",""],["r","2025-11",4,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO EVANILDO COSTA DOS SANTOS",383.33,1,"","Boleto Amigo","k",""],["r","2025-12",9,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA SANDRECICERA FREIRES DA SILVA",200,1,"","Boleto Amigo","c",""],["r","2025-12",9,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA SANDRECICERA FREIRES DA SILVA",200,1,"","Boleto Amigo","k",""],["r","2025-12",9,"VENDA DE PRODUTOS/ SERVIÇOS","GABRIEL DA GUIA SENA",200,1,"","Boleto Amigo","c",""],["r","2025-12",9,"VENDA DE PRODUTOS/ SERVIÇOS","GABRIEL DA GUIA SENA",200,1,"","Boleto Amigo","k",""],["r","2025-12",9,"VENDA DE PRODUTOS/ SERVIÇOS","MARCOS ANDERSON OLIVEIRA ARAUJO",200,1,"","Boleto Amigo","c",""],["r","2025-12",9,"VENDA DE PRODUTOS/ SERVIÇOS","MARCOS ANDERSON OLIVEIRA ARAUJO",200,1,"","Boleto Amigo","k",""],["r","2025-12",9,"VENDA DE PRODUTOS/ SERVIÇOS","ANA PAULA FACUNDO PEREIRA",200,1,"","Boleto Amigo","c",""],["r","2025-12",9,"VENDA DE PRODUTOS/ SERVIÇOS","ANA PAULA FACUNDO PEREIRA",200,1,"","Boleto Amigo","k",""],["r","2025-12",9,"VENDA DE PRODUTOS/ SERVIÇOS","ALVARO FERREIRA PINTO JUNIOR",200,1,"","Boleto Amigo","c",""],["r","2025-12",9,"VENDA DE PRODUTOS/ SERVIÇOS","ALVARO FERREIRA PINTO JUNIOR",200,1,"","Boleto Amigo","k",""],["r","2025-12",8,"VENDA DE PRODUTOS/ SERVIÇOS","AUDACI EVARISTO DA COSTA",200,1,"","Boleto Amigo","c",""],["r","2025-12",8,"VENDA DE PRODUTOS/ SERVIÇOS","AUDACI EVARISTO DA COSTA",200,1,"","Boleto Amigo","k",""],["r","2025-12",9,"VENDA DE PRODUTOS/ SERVIÇOS","MILENA DE OLIVEIRA FERREIA MELO",383.33,1,"","Boleto Amigo","c",""],["r","2025-07",2,"VENDA DE PRODUTOS/ SERVIÇOS","MILENA DE OLIVEIRA FERREIA MELO",383.33,1,"","Boleto Amigo","k",""],["r","2025-12",10,"VENDA DE PRODUTOS/ SERVIÇOS","KAIO CESAR FREITAS PEREIRA",395.6,1,"","Boleto Amigo","c",""],["r","2025-06",4,"VENDA DE PRODUTOS/ SERVIÇOS","KAIO CESAR FREITAS PEREIRA",395.6,1,"","Boleto Amigo","k",""],["r","2025-12",3,"VENDA DE PRODUTOS/ SERVIÇOS","ORION ARAUJO PEREIRA",333.33,1,"","Boleto Amigo","c",""],["r","2025-11",21,"VENDA DE PRODUTOS/ SERVIÇOS","ORION ARAUJO PEREIRA",333.33,1,"","Boleto Amigo","k",""],["r","2025-12",16,"VENDA DE PRODUTOS/ SERVIÇOS","JOAQUIM DA SILVA REIS",396.57,1,"","Boleto Amigo","c",""],["r","2025-11",3,"VENDA DE PRODUTOS/ SERVIÇOS","JOAQUIM DA SILVA REIS",396.57,1,"","Boleto Amigo","k",""],["r","2025-12",4,"VENDA DE PRODUTOS/ SERVIÇOS","CESAR NILDO DE BRITO OLIVEIRA",200,1,"","Boleto Amigo","c",""],["r","2025-12",4,"VENDA DE PRODUTOS/ SERVIÇOS","CESAR NILDO DE BRITO OLIVEIRA",200,1,"","Boleto Amigo","k",""],["r","2025-12",4,"VENDA DE PRODUTOS/ SERVIÇOS","JOAO PEDRO PALHETA BOTELHO",200,1,"","Boleto Amigo","c",""],["r","2025-12",9,"VENDA DE PRODUTOS/ SERVIÇOS","JOAO PEDRO PALHETA BOTELHO",200,1,"","Boleto Amigo","k",""],["r","2025-12",3,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO MAGDO GUEDES MESQUITA",200,1,"","Boleto Amigo","c",""],["r","2025-12",3,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO MAGDO GUEDES MESQUITA",200,1,"","Boleto Amigo","k",""],["r","2025-12",2,"VENDA DE PRODUTOS/ SERVIÇOS","SIMONE FERNANDES DE SOUZA",200,1,"","Boleto Amigo","c",""],["r","2025-12",2,"VENDA DE PRODUTOS/ SERVIÇOS","SIMONE FERNANDES DE SOUZA",200,1,"","Boleto Amigo","k",""],["r","2025-12",1,"VENDA DE PRODUTOS/ SERVIÇOS","ALLYNE CAROLINA SAMPAIO SILVA",200,1,"","Boleto Amigo","c",""],["r","2025-12",2,"VENDA DE PRODUTOS/ SERVIÇOS","ALLYNE CAROLINA SAMPAIO SILVA",200,1,"","Boleto Amigo","k",""],["r","2025-12",1,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA MARCIA DE SOUSA MORORO",200,1,"","Boleto Amigo","c",""],["r","2025-12",1,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA MARCIA DE SOUSA MORORO",200,1,"","Boleto Amigo","k",""],["r","2025-12",1,"VENDA DE PRODUTOS/ SERVIÇOS","ALUIZIO GUEDES DE SOUSA",200,1,"","Boleto Amigo","c",""],["r","2025-12",1,"VENDA DE PRODUTOS/ SERVIÇOS","ALUIZIO GUEDES DE SOUSA",200,1,"","Boleto Amigo","k",""],["r","2025-11",7,"VENDA DE PRODUTOS/ SERVIÇOS","JOAO VICTOR DE SOUSA PESSOA",460,1,"","Boleto Amigo","c",""],["r","2025-07",25,"VENDA DE PRODUTOS/ SERVIÇOS","JOAO VICTOR DE SOUSA PESSOA",460,1,"","Boleto Amigo","k",""],["r","2025-11",27,"VENDA DE PRODUTOS/ SERVIÇOS","EDVALDO DO CARMO ALVES",500,1,"","Boleto Amigo","c",""],["r","2025-11",27,"VENDA DE PRODUTOS/ SERVIÇOS","EDVALDO DO CARMO ALVES",500,1,"","Boleto Amigo","k",""],["r","2025-12",5,"VENDA DE PRODUTOS/ SERVIÇOS","BENAVINUTA DE SOUZA OLIVEIRA",396.38,1,"","Boleto Amigo","c",""],["r","2025-06",27,"VENDA DE PRODUTOS/ SERVIÇOS","BENAVINUTA DE SOUZA OLIVEIRA",396.38,1,"","Boleto Amigo","k",""],["r","2025-11",27,"VENDA DE PRODUTOS/ SERVIÇOS","VERONICA PEREIRA RAQUEL DA SILVA TELES",200,1,"","Boleto Amigo","c",""],["r","2025-11",27,"VENDA DE PRODUTOS/ SERVIÇOS","VERONICA PEREIRA RAQUEL DA SILVA TELES",200,1,"","Boleto Amigo","k",""],["r","2025-12",3,"VENDA DE PRODUTOS/ SERVIÇOS","SAMUEL SALES SILVA",396.38,1,"","Boleto Amigo","c",""],["r","2025-08",6,"VENDA DE PRODUTOS/ SERVIÇOS","SAMUEL SALES SILVA",396.38,1,"","Boleto Amigo","k",""],["r","2025-12",1,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE AELITON DA SILVA",395.34,1,"","Boleto Amigo","c",""],["r","2025-06",5,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE AELITON DA SILVA",395.34,1,"","Boleto Amigo","k",""],["r","2025-10",29,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO DE ASSIS DA SILVA",383.33,1,"","Boleto Amigo","c",""],["r","2025-09",23,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO DE ASSIS DA SILVA",383.33,1,"","Boleto Amigo","k",""],["r","2025-12",9,"VENDA DE PRODUTOS/ SERVIÇOS","MARQUELE SOUSA ALMEIDA",397.42,1,"","Boleto Amigo","c",""],["r","2025-09",18,"VENDA DE PRODUTOS/ SERVIÇOS","MARQUELE SOUSA ALMEIDA",397.42,1,"","Boleto Amigo","k",""],["r","2025-11",27,"VENDA DE PRODUTOS/ SERVIÇOS","GERONIMO DA SILVA ALCANTARA",383.33,1,"","Boleto Amigo","c",""],["r","2025-09",19,"VENDA DE PRODUTOS/ SERVIÇOS","GERONIMO DA SILVA ALCANTARA",383.33,1,"","Boleto Amigo","k",""],["r","2025-11",25,"VENDA DE PRODUTOS/ SERVIÇOS","NANCI MARIA SILVEIRA CAMPOS",383.33,0,"","Boleto Amigo","c",""],["r","2025-08",7,"VENDA DE PRODUTOS/ SERVIÇOS","NANCI MARIA SILVEIRA CAMPOS",383.33,0,"","Boleto Amigo","k",""],["r","2025-11",27,"VENDA DE PRODUTOS/ SERVIÇOS","JADSON CARLOS DE OLIVEIRA SATURNINO",383.33,1,"","Boleto Amigo","c",""],["r","2025-06",24,"VENDA DE PRODUTOS/ SERVIÇOS","JADSON CARLOS DE OLIVEIRA SATURNINO",383.33,1,"","Boleto Amigo","k",""],["r","2025-11",27,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA ALNEIDE DE CALDAS ALMEIDE",383.35,1,"","Boleto Amigo","c",""],["r","2025-05",27,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA ALNEIDE DE CALDAS ALMEIDE",383.35,1,"","Boleto Amigo","k",""],["r","2025-11",25,"VENDA DE PRODUTOS/ SERVIÇOS","GEOVAN TEIXEIRA DA SILVA",383.35,1,"","Boleto Amigo","c",""],["r","2025-05",8,"VENDA DE PRODUTOS/ SERVIÇOS","GEOVAN TEIXEIRA DA SILVA",383.35,1,"","Boleto Amigo","k",""],["r","2025-12",1,"VENDA DE PRODUTOS/ SERVIÇOS","ELAINE VIEGAS CAMARA",395.34,1,"","Boleto Amigo","c",""],["r","2025-11",3,"VENDA DE PRODUTOS/ SERVIÇOS","ELAINE VIEGAS CAMARA",395.34,1,"","Boleto Amigo","k",""],["r","2025-11",26,"VENDA DE PRODUTOS/ SERVIÇOS","ZENILDO DA SILVA SANTOS",383.33,1,"","Boleto Amigo","c",""],["r","2025-09",25,"VENDA DE PRODUTOS/ SERVIÇOS","ZENILDO DA SILVA SANTOS",383.33,1,"","Boleto Amigo","k",""],["r","2025-12",1,"VENDA DE PRODUTOS/ SERVIÇOS","CLEBER DE JESUS MACHADO",395.37,1,"","Boleto Amigo","c",""],["r","2025-05",30,"VENDA DE PRODUTOS/ SERVIÇOS","CLEBER DE JESUS MACHADO",395.37,1,"","Boleto Amigo","k",""],["r","2025-11",26,"VENDA DE PRODUTOS/ SERVIÇOS","DEUSIMAR RODRIGUES NASCIMENTO",383.33,1,"","Boleto Amigo","c",""],["r","2025-09",30,"VENDA DE PRODUTOS/ SERVIÇOS","DEUSIMAR RODRIGUES NASCIMENTO",383.33,1,"","Boleto Amigo","k",""],["r","2025-12",17,"VENDA DE PRODUTOS/ SERVIÇOS","WESLEY EURIPEDIS CAVALCANTE",400.02,1,"","Boleto Amigo","c",""],["r","2025-10",1,"VENDA DE PRODUTOS/ SERVIÇOS","WESLEY EURIPEDIS CAVALCANTE",400.02,1,"","Boleto Amigo","k",""],["r","2025-11",26,"VENDA DE PRODUTOS/ SERVIÇOS","GORETE PEREIRA DOS SANTOS LIMA",366.67,1,"","Boleto Amigo","c",""],["r","2025-06",26,"VENDA DE PRODUTOS/ SERVIÇOS","GORETE PEREIRA DOS SANTOS LIMA",366.67,1,"","Boleto Amigo","k",""],["r","2025-12",3,"VENDA DE PRODUTOS/ SERVIÇOS","INEIAS ABRAAO DOS SANTOS BENJAMIM",396.38,1,"","Boleto Amigo","c",""],["r","2025-07",16,"VENDA DE PRODUTOS/ SERVIÇOS","INEIAS ABRAAO DOS SANTOS BENJAMIM",396.38,1,"","Boleto Amigo","k",""],["r","2025-12",17,"VENDA DE PRODUTOS/ SERVIÇOS","ROGERIO ARLINDO DO CARMO RIBEIRO",400.05,1,"","Boleto Amigo","c",""],["r","2025-05",30,"VENDA DE PRODUTOS/ SERVIÇOS","ROGERIO ARLINDO DO CARMO RIBEIRO",400.05,1,"","Boleto Amigo","k",""],["r","2025-12",1,"VENDA DE PRODUTOS/ SERVIÇOS","KAUAN SILVA BATISTA",395.34,1,"","Boleto Amigo","c",""],["r","2025-10",8,"VENDA DE PRODUTOS/ SERVIÇOS","KAUAN SILVA BATISTA",395.34,1,"","Boleto Amigo","k",""],["r","2025-11",27,"VENDA DE PRODUTOS/ SERVIÇOS","ERENILZA CARVALHO DA SILVA SOUSA",383.33,1,"","Boleto Amigo","c",""],["r","2025-06",4,"VENDA DE PRODUTOS/ SERVIÇOS","ERENILZA CARVALHO DA SILVA SOUSA",383.33,1,"","Boleto Amigo","k",""],["r","2025-11",27,"VENDA DE PRODUTOS/ SERVIÇOS","MARCIO JOSE ARAUJO POLICARPO",383.33,1,"","Boleto Amigo","c",""],["r","2025-09",16,"VENDA DE PRODUTOS/ SERVIÇOS","MARCIO JOSE ARAUJO POLICARPO",383.33,1,"","Boleto Amigo","k",""],["r","2025-12",4,"VENDA DE PRODUTOS/ SERVIÇOS","MARIANY DE SOUSA GALVAO",396.64,1,"","Boleto Amigo","c",""],["r","2025-07",14,"VENDA DE PRODUTOS/ SERVIÇOS","MARIANY DE SOUSA GALVAO",396.64,1,"","Boleto Amigo","k",""],["r","2025-11",27,"VENDA DE PRODUTOS/ SERVIÇOS","HENRIQUE RAMOS GUIMARAES",383.33,1,"","Boleto Amigo","c",""],["r","2025-07",10,"VENDA DE PRODUTOS/ SERVIÇOS","HENRIQUE RAMOS GUIMARAES",383.33,1,"","Boleto Amigo","k",""],["r","2025-11",24,"VENDA DE PRODUTOS/ SERVIÇOS","NAYANE DE SOUSA VIEIRA",386,1,"","Boleto Amigo","c",""],["r","2025-10",24,"VENDA DE PRODUTOS/ SERVIÇOS","NAYANE DE SOUSA VIEIRA",386,1,"","Boleto Amigo","k",""],["r","2025-11",27,"VENDA DE PRODUTOS/ SERVIÇOS","ELIZANGELA ALVES DA COSTA",383.33,1,"","Boleto Amigo","c",""],["r","2025-10",27,"VENDA DE PRODUTOS/ SERVIÇOS","ELIZANGELA ALVES DA COSTA",383.33,1,"","Boleto Amigo","k",""],["r","2025-11",27,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO DE PADUA VAZ DE LIMA",383.33,1,"","Boleto Amigo","c",""],["r","2025-10",29,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO DE PADUA VAZ DE LIMA",383.33,1,"","Boleto Amigo","k",""],["r","2025-11",25,"VENDA DE PRODUTOS/ SERVIÇOS","CAMILA GABRIELE CORREA NEVES",383.33,0,"","Boleto Amigo","c",""],["r","2025-06",23,"VENDA DE PRODUTOS/ SERVIÇOS","CAMILA GABRIELE CORREA NEVES",383.33,0,"","Boleto Amigo","k",""],["r","2025-12",1,"VENDA DE PRODUTOS/ SERVIÇOS","SERGIO RUFINO DE FREITAS",378.17,1,"","Boleto Amigo","c",""],["r","2025-09",10,"VENDA DE PRODUTOS/ SERVIÇOS","SERGIO RUFINO DE FREITAS",378.17,1,"","Boleto Amigo","k",""],["r","2025-11",26,"VENDA DE PRODUTOS/ SERVIÇOS","MARCOS COSTA MARQUES",383.33,1,"","Boleto Amigo","c",""],["r","2025-09",12,"VENDA DE PRODUTOS/ SERVIÇOS","MARCOS COSTA MARQUES",383.33,1,"","Boleto Amigo","k",""],["r","2025-11",11,"VENDA DE PRODUTOS/ SERVIÇOS","JOSIAS DOS SANTOS RODRIGUES",383.33,1,"","Boleto Amigo","c",""],["r","2025-08",27,"VENDA DE PRODUTOS/ SERVIÇOS","JOSIAS DOS SANTOS RODRIGUES",383.33,1,"","Boleto Amigo","k",""],["r","2025-11",27,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO WYTAMAR COELHO DA SILVA CRUZ",383.33,1,"","Boleto Amigo","c",""],["r","2025-08",20,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO WYTAMAR COELHO DA SILVA CRUZ",383.33,1,"","Boleto Amigo","k",""],["r","2025-11",26,"VENDA DE PRODUTOS/ SERVIÇOS","JAILSON SILVA DOS SANTOS",383.33,1,"","Boleto Amigo","c",""],["r","2025-08",12,"VENDA DE PRODUTOS/ SERVIÇOS","JAILSON SILVA DOS SANTOS",383.33,1,"","Boleto Amigo","k",""],["r","2025-11",24,"VENDA DE PRODUTOS/ SERVIÇOS","ANGELA MARIA LIMA SALES",383.33,1,"","Boleto Amigo","c",""],["r","2025-09",10,"VENDA DE PRODUTOS/ SERVIÇOS","ANGELA MARIA LIMA SALES",383.33,1,"","Boleto Amigo","k",""],["r","2025-12",9,"VENDA DE PRODUTOS/ SERVIÇOS","JOAO VICTOR SOUZA VILHENA",397.42,1,"","Boleto Amigo","c",""],["r","2025-09",15,"VENDA DE PRODUTOS/ SERVIÇOS","JOAO VICTOR SOUZA VILHENA",397.42,1,"","Boleto Amigo","k",""],["r","2025-12",1,"VENDA DE PRODUTOS/ SERVIÇOS","DORISBERTO DE VASCONCELOS ARAUJO",395.34,1,"","Boleto Amigo","c",""],["r","2025-09",5,"VENDA DE PRODUTOS/ SERVIÇOS","DORISBERTO DE VASCONCELOS ARAUJO",395.34,1,"","Boleto Amigo","k",""],["r","2025-11",28,"VENDA DE PRODUTOS/ SERVIÇOS","EUZIMAR RIBEIRO ALVES",395.08,1,"","Boleto Amigo","c",""],["r","2025-09",11,"VENDA DE PRODUTOS/ SERVIÇOS","EUZIMAR RIBEIRO ALVES",395.08,1,"","Boleto Amigo","k",""],["r","2025-11",27,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA ELBA CORDEIRO DA CRUZ DE SOUSA",383.33,1,"","Boleto Amigo","c",""],["r","2025-08",8,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA ELBA CORDEIRO DA CRUZ DE SOUSA",383.33,1,"","Boleto Amigo","k",""],["r","2025-11",21,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA HELENA EVANGELISTA MARTINS",200,1,"","Boleto Amigo","c",""],["r","2025-11",21,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA HELENA EVANGELISTA MARTINS",200,1,"","Boleto Amigo","k",""],["r","2025-11",21,"VENDA DE PRODUTOS/ SERVIÇOS","ORION ARAUJO PEREIRA",500,1,"","Boleto Amigo","c",""],["r","2025-11",21,"VENDA DE PRODUTOS/ SERVIÇOS","ORION ARAUJO PEREIRA",500,1,"","Boleto Amigo","k",""],["r","2025-11",19,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE MANOEL DOS SANTOS JUNIOR",383.33,1,"","Boleto Amigo","c",""],["r","2025-06",20,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE MANOEL DOS SANTOS JUNIOR",383.33,1,"","Boleto Amigo","k",""],["r","2025-11",25,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE CANTANHEDE MAGALHAES FILHO",500,1,"","Boleto Amigo","c",""],["r","2025-07",21,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE CANTANHEDE MAGALHAES FILHO",500,1,"","Boleto Amigo","k",""],["r","2026-01",2,"VENDA DE PRODUTOS/ SERVIÇOS","MAX SERGIO SANTOS MOREIRA JUNIOR",387.17,1,"","Boleto Amigo","c",""],["r","2025-08",20,"VENDA DE PRODUTOS/ SERVIÇOS","MAX SERGIO SANTOS MOREIRA JUNIOR",387.17,1,"","Boleto Amigo","k",""],["r","2026-01",2,"VENDA DE PRODUTOS/ SERVIÇOS","MAX SERGIO SANTOS MOREIRA JUNIOR",387.17,1,"","Boleto Amigo","c",""],["r","2025-08",20,"VENDA DE PRODUTOS/ SERVIÇOS","MAX SERGIO SANTOS MOREIRA JUNIOR",387.17,1,"","Boleto Amigo","k",""],["r","2025-11",25,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO REGINALDO QUINTINO",383.33,1,"","Boleto Amigo","c",""],["r","2025-10",7,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO REGINALDO QUINTINO",383.33,1,"","Boleto Amigo","k",""],["r","2025-11",25,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE FRANCISCO PEREIRA",383.33,1,"","Boleto Amigo","c",""],["r","2025-10",15,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE FRANCISCO PEREIRA",383.33,1,"","Boleto Amigo","k",""],["r","2025-12",1,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO PEDRO NETO",396.38,1,"","Boleto Amigo","c",""],["r","2025-08",1,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO PEDRO NETO",396.38,1,"","Boleto Amigo","k",""],["r","2025-10",29,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA FRANCILENE ALVES DA SILVA LIMA",375,1,"","Boleto Amigo","c",""],["r","2025-09",17,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA FRANCILENE ALVES DA SILVA LIMA",375,1,"","Boleto Amigo","k",""],["r","2025-11",24,"VENDA DE PRODUTOS/ SERVIÇOS","ALBERTO VICENTE HONORIO",300,1,"","Boleto Amigo","c",""],["r","2025-11",19,"VENDA DE PRODUTOS/ SERVIÇOS","ALBERTO VICENTE HONORIO",300,1,"","Boleto Amigo","k",""],["r","2025-11",18,"VENDA DE PRODUTOS/ SERVIÇOS","ALEXANDRE MARTINS DA SILVA",200,1,"","Boleto Amigo","c",""],["r","2025-11",18,"VENDA DE PRODUTOS/ SERVIÇOS","ALEXANDRE MARTINS DA SILVA",200,1,"","Boleto Amigo","k",""],["r","2025-11",17,"VENDA DE PRODUTOS/ SERVIÇOS","KARINE MOREIRA SANTANA",200,1,"","Boleto Amigo","c",""],["r","2025-11",17,"VENDA DE PRODUTOS/ SERVIÇOS","KARINE MOREIRA SANTANA",200,1,"","Boleto Amigo","k",""],["r","2025-11",17,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA EDILENE DE LIMA",200,1,"","Boleto Amigo","c",""],["r","2025-11",18,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA EDILENE DE LIMA",200,1,"","Boleto Amigo","k",""],["r","2025-11",7,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA JOCELINA FREIRE DE OLIVEIRA",383.33,1,"","Boleto Amigo","c",""],["r","2025-10",17,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA JOCELINA FREIRE DE OLIVEIRA",383.33,1,"","Boleto Amigo","k",""],["r","2025-11",19,"VENDA DE PRODUTOS/ SERVIÇOS","WEDNEY MARTINS",460,1,"","Boleto Amigo","c",""],["r","2025-07",16,"VENDA DE PRODUTOS/ SERVIÇOS","WEDNEY MARTINS",460,1,"","Boleto Amigo","k",""],["r","2025-11",19,"VENDA DE PRODUTOS/ SERVIÇOS","ANA CRISTINA CORREA PINHEIRO",400,1,"","Boleto Amigo","c",""],["r","2025-09",3,"VENDA DE PRODUTOS/ SERVIÇOS","ANA CRISTINA CORREA PINHEIRO",400,1,"","Boleto Amigo","k",""],["r","2025-11",19,"VENDA DE PRODUTOS/ SERVIÇOS","MARCIO MENDES RODRIGUES",366.67,1,"","Boleto Amigo","c",""],["r","2025-08",8,"VENDA DE PRODUTOS/ SERVIÇOS","MARCIO MENDES RODRIGUES",366.67,1,"","Boleto Amigo","k",""],["r","2025-11",19,"VENDA DE PRODUTOS/ SERVIÇOS","CESAR AUGUSTO RIBEIRO FERREIRA",500,1,"","Boleto Amigo","c",""],["r","2025-10",14,"VENDA DE PRODUTOS/ SERVIÇOS","CESAR AUGUSTO RIBEIRO FERREIRA",500,1,"","Boleto Amigo","k",""],["r","2025-11",19,"VENDA DE PRODUTOS/ SERVIÇOS","ELIETE ALVES RABELO DOS SANTOS",383.33,1,"","Boleto Amigo","c",""],["r","2025-10",3,"VENDA DE PRODUTOS/ SERVIÇOS","ELIETE ALVES RABELO DOS SANTOS",383.33,1,"","Boleto Amigo","k",""],["r","2025-11",10,"VENDA DE PRODUTOS/ SERVIÇOS","LEONARDO CASTRO DE JESUS",383.33,1,"","Boleto Amigo","c",""],["r","2025-06",11,"VENDA DE PRODUTOS/ SERVIÇOS","LEONARDO CASTRO DE JESUS",383.33,1,"","Boleto Amigo","k",""],["r","2025-11",21,"VENDA DE PRODUTOS/ SERVIÇOS","ELENILTON SANTOS DO NASCIMENTO",386.5,1,"","Boleto Amigo","c",""],["r","2025-08",20,"VENDA DE PRODUTOS/ SERVIÇOS","ELENILTON SANTOS DO NASCIMENTO",386.5,1,"","Boleto Amigo","k",""],["r","2025-12",10,"VENDA DE PRODUTOS/ SERVIÇOS","GABRIEL CRUZ DOS REIS",400.28,1,"","Boleto Amigo","c",""],["r","2025-09",23,"VENDA DE PRODUTOS/ SERVIÇOS","GABRIEL CRUZ DOS REIS",400.28,1,"","Boleto Amigo","k",""],["r","2025-12",26,"VENDA DE PRODUTOS/ SERVIÇOS","WILIAN GALVAO",404.18,1,"","Boleto Amigo","c",""],["r","2025-09",29,"VENDA DE PRODUTOS/ SERVIÇOS","WILIAN GALVAO",404.18,1,"","Boleto Amigo","k",""],["r","2025-11",21,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA GIRLEIDA DA SILVA FURTADO",395.08,1,"","Boleto Amigo","c",""],["r","2025-10",8,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA GIRLEIDA DA SILVA FURTADO",395.08,1,"","Boleto Amigo","k",""],["r","2025-12",15,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA URSULA RIOS CARNEIRO",401.06,1,"","Boleto Amigo","c",""],["r","2025-06",30,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA URSULA RIOS CARNEIRO",401.06,1,"","Boleto Amigo","k",""],["r","2025-11",21,"VENDA DE PRODUTOS/ SERVIÇOS","DANIELE FERREIRA DO NASCIMENTO",395.08,1,"","Boleto Amigo","c",""],["r","2025-08",25,"VENDA DE PRODUTOS/ SERVIÇOS","DANIELE FERREIRA DO NASCIMENTO",395.08,1,"","Boleto Amigo","k",""],["r","2025-11",21,"VENDA DE PRODUTOS/ SERVIÇOS","ISMAEL DA SILVA SANTOS",395.08,1,"","Boleto Amigo","c",""],["r","2025-08",18,"VENDA DE PRODUTOS/ SERVIÇOS","ISMAEL DA SILVA SANTOS",395.08,1,"","Boleto Amigo","k",""],["r","2025-12",23,"VENDA DE PRODUTOS/ SERVIÇOS","FELIPE PEREIRA DOS SANTOS",403.14,1,"","Boleto Amigo","c",""],["r","2025-09",2,"VENDA DE PRODUTOS/ SERVIÇOS","FELIPE PEREIRA DOS SANTOS",403.14,1,"","Boleto Amigo","k",""],["r","2025-11",21,"VENDA DE PRODUTOS/ SERVIÇOS","JOELCE FIGUEREDO DE ARAUJO",395.11,1,"","Boleto Amigo","c",""],["r","2025-05",12,"VENDA DE PRODUTOS/ SERVIÇOS","JOELCE FIGUEREDO DE ARAUJO",395.11,1,"","Boleto Amigo","k",""],["r","2025-11",19,"VENDA DE PRODUTOS/ SERVIÇOS","NATANAEL DIVINO ALVES",383.33,1,"","Boleto Amigo","c",""],["r","2025-06",27,"VENDA DE PRODUTOS/ SERVIÇOS","NATANAEL DIVINO ALVES",383.33,1,"","Boleto Amigo","k",""],["r","2025-11",13,"VENDA DE PRODUTOS/ SERVIÇOS","CLAUDIO JOSE INACIO JUNIOR",383.33,1,"","Boleto Amigo","c",""],["r","2025-10",21,"VENDA DE PRODUTOS/ SERVIÇOS","CLAUDIO JOSE INACIO JUNIOR",383.33,1,"","Boleto Amigo","k",""],["r","2025-11",11,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE ANTONIO BARBOSA DE MOURA",250,1,"","Boleto Amigo","c",""],["r","2025-10",24,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE ANTONIO BARBOSA DE MOURA",250,1,"","Boleto Amigo","k",""],["r","2025-11",26,"VENDA DE PRODUTOS/ SERVIÇOS","ELIS REGINA BERNARDO COSTA",379.42,1,"","Boleto Amigo","c",""],["r","2025-10",6,"VENDA DE PRODUTOS/ SERVIÇOS","ELIS REGINA BERNARDO COSTA",379.42,1,"","Boleto Amigo","k",""],["r","2025-12",2,"VENDA DE PRODUTOS/ SERVIÇOS","LANA THAYNI SILVA MENEZES",397.68,1,"","Boleto Amigo","c",""],["r","2025-09",15,"VENDA DE PRODUTOS/ SERVIÇOS","LANA THAYNI SILVA MENEZES",397.68,1,"","Boleto Amigo","k",""],["r","2025-11",13,"VENDA DE PRODUTOS/ SERVIÇOS","ELENICE LOURENCO FELIPE",383.33,1,"","Boleto Amigo","c",""],["r","2025-10",23,"VENDA DE PRODUTOS/ SERVIÇOS","ELENICE LOURENCO FELIPE",383.33,1,"","Boleto Amigo","k",""],["r","2025-11",19,"VENDA DE PRODUTOS/ SERVIÇOS","KAIQUE PINHEIRO LEITE",500,1,"","Boleto Amigo","c",""],["r","2025-09",18,"VENDA DE PRODUTOS/ SERVIÇOS","KAIQUE PINHEIRO LEITE",500,1,"","Boleto Amigo","k",""],["r","2025-08",15,"VENDA DE PRODUTOS/ SERVIÇOS","WILLAME COSTA NUNES",383.35,1,"","Boleto Amigo","c",""],["r","2025-05",13,"VENDA DE PRODUTOS/ SERVIÇOS","WILLAME COSTA NUNES",383.35,1,"","Boleto Amigo","k",""],["r","2025-11",21,"VENDA DE PRODUTOS/ SERVIÇOS","NAYLTON OLIVEIRA DA SILVA",343.54,1,"","Boleto Amigo","c",""],["r","2025-07",16,"VENDA DE PRODUTOS/ SERVIÇOS","NAYLTON OLIVEIRA DA SILVA",343.54,1,"","Boleto Amigo","k",""],["r","2025-11",19,"VENDA DE PRODUTOS/ SERVIÇOS","SIDINELIO NASCIMENTO PIRES",358.33,1,"","Boleto Amigo","c",""],["r","2025-08",8,"VENDA DE PRODUTOS/ SERVIÇOS","SIDINELIO NASCIMENTO PIRES",358.33,1,"","Boleto Amigo","k",""],["r","2025-11",7,"VENDA DE PRODUTOS/ SERVIÇOS","FERNANDO HENRIQUE PEDROZO DE CAMPOS",333.33,1,"","Boleto Amigo","c",""],["r","2025-09",25,"VENDA DE PRODUTOS/ SERVIÇOS","FERNANDO HENRIQUE PEDROZO DE CAMPOS",333.33,1,"","Boleto Amigo","k",""],["r","2025-11",19,"VENDA DE PRODUTOS/ SERVIÇOS","SIMONE OLIVEIRA SILVA",383.33,1,"","Boleto Amigo","c",""],["r","2025-06",30,"VENDA DE PRODUTOS/ SERVIÇOS","SIMONE OLIVEIRA SILVA",383.33,1,"","Boleto Amigo","k",""],["r","2025-11",24,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO EDVALDO ARAUJO JUNIOR",594.2,1,"","Boleto Amigo","c",""],["r","2025-09",29,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO EDVALDO ARAUJO JUNIOR",594.2,1,"","Boleto Amigo","k",""],["r","2025-11",14,"OUTRAS RECEITAS","ECONOMY ASSESSORIA - MATRIZ",1965,1,"","Boleto Amigo","c",""],["r","2025-11",14,"OUTRAS RECEITAS","ECONOMY ASSESSORIA - MATRIZ",1965,1,"","Boleto Amigo","k",""],["r","2025-11",14,"VENDA DE PRODUTOS/ SERVIÇOS","ELINILDA MACEDO DA SILVA",200,1,"","Boleto Amigo","c",""],["r","2025-11",14,"VENDA DE PRODUTOS/ SERVIÇOS","ELINILDA MACEDO DA SILVA",200,1,"","Boleto Amigo","k",""],["r","2025-11",13,"VENDA DE PRODUTOS/ SERVIÇOS","INACIO DE JESUS FERREIRA JUNIOR",200,1,"","Boleto Amigo","c",""],["r","2025-11",13,"VENDA DE PRODUTOS/ SERVIÇOS","INACIO DE JESUS FERREIRA JUNIOR",200,1,"","Boleto Amigo","k",""],["r","2025-12",4,"VENDA DE PRODUTOS/ SERVIÇOS","GERUSA CONDE DUARTE",399.76,1,"","Boleto Amigo","c",""],["r","2025-09",13,"VENDA DE PRODUTOS/ SERVIÇOS","GERUSA CONDE DUARTE",399.76,1,"","Boleto Amigo","k",""],["r","2025-11",5,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE CARLOS SOARES ALMEIDA JUNIOR",300,1,"","Boleto Amigo","c",""],["r","2025-11",5,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE CARLOS SOARES ALMEIDA JUNIOR",300,1,"","Boleto Amigo","k",""],["r","2025-11",11,"VENDA DE PRODUTOS/ SERVIÇOS","VANDERSON BARROS DE SOUZA",200,1,"","Boleto Amigo","c",""],["r","2025-11",11,"VENDA DE PRODUTOS/ SERVIÇOS","VANDERSON BARROS DE SOUZA",200,1,"","Boleto Amigo","k",""],["r","2025-11",10,"VENDA DE PRODUTOS/ SERVIÇOS","GENESINA ALVES NETA",383.35,1,"","Boleto Amigo","c",""],["r","2025-05",8,"VENDA DE PRODUTOS/ SERVIÇOS","GENESINA ALVES NETA",383.35,1,"","Boleto Amigo","k",""],["r","2025-11",12,"VENDA DE PRODUTOS/ SERVIÇOS","ESTER ALVES CAMELO",383.35,1,"","Boleto Amigo","c",""],["r","2025-05",30,"VENDA DE PRODUTOS/ SERVIÇOS","ESTER ALVES CAMELO",383.35,1,"","Boleto Amigo","k",""],["r","2025-12",16,"VENDA DE PRODUTOS/ SERVIÇOS","ERBANO VELOSO HOLANDA",404.07,1,"","Boleto Amigo","c",""],["r","2025-09",12,"VENDA DE PRODUTOS/ SERVIÇOS","ERBANO VELOSO HOLANDA",404.07,1,"","Boleto Amigo","k",""],["r","2025-11",12,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIA MARIA BARBOSA TEODOSIO",400,1,"","Boleto Amigo","c",""],["r","2025-10",1,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIA MARIA BARBOSA TEODOSIO",400,1,"","Boleto Amigo","k",""],["r","2025-11",13,"VENDA DE PRODUTOS/ SERVIÇOS","EDNA UCHOA DE MORAIS",515.34,1,"","Boleto Amigo","c",""],["r","2025-09",12,"VENDA DE PRODUTOS/ SERVIÇOS","EDNA UCHOA DE MORAIS",515.34,1,"","Boleto Amigo","k",""],["r","2025-11",12,"VENDA DE PRODUTOS/ SERVIÇOS","VALDEILSON SAMINES ARAUJO",383.33,1,"","Boleto Amigo","c",""],["r","2025-10",2,"VENDA DE PRODUTOS/ SERVIÇOS","VALDEILSON SAMINES ARAUJO",383.33,1,"","Boleto Amigo","k",""],["r","2025-11",17,"VENDA DE PRODUTOS/ SERVIÇOS","JULIO MICHAEL NUNES VENANCIO",516.02,1,"","Boleto Amigo","c",""],["r","2025-08",21,"VENDA DE PRODUTOS/ SERVIÇOS","JULIO MICHAEL NUNES VENANCIO",516.02,1,"","Boleto Amigo","k",""],["r","2025-11",12,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA MARGARIDA DA SILVA",383.35,1,"","Boleto Amigo","c",""],["r","2025-05",23,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA MARGARIDA DA SILVA",383.35,1,"","Boleto Amigo","k",""],["r","2025-11",12,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO ALEXANDRE MEDEIROS SANTANA",300,1,"","Boleto Amigo","c",""],["r","2025-07",28,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO ALEXANDRE MEDEIROS SANTANA",300,1,"","Boleto Amigo","k",""],["r","2025-11",5,"VENDA DE PRODUTOS/ SERVIÇOS","PAULO CANDIDO RODRIGUES",400,1,"","Boleto Amigo","c",""],["r","2025-10",11,"VENDA DE PRODUTOS/ SERVIÇOS","PAULO CANDIDO RODRIGUES",400,1,"","Boleto Amigo","k",""],["r","2025-11",24,"VENDA DE PRODUTOS/ SERVIÇOS","CLEGINALDO OLIVEIRA DA SILVA",397.16,1,"","Boleto Amigo","c",""],["r","2025-08",21,"VENDA DE PRODUTOS/ SERVIÇOS","CLEGINALDO OLIVEIRA DA SILVA",397.16,1,"","Boleto Amigo","k",""],["r","2025-11",12,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA HALINA ANDRE DOS SANTOS",383.33,1,"","Boleto Amigo","c",""],["r","2025-10",6,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA HALINA ANDRE DOS SANTOS",383.33,1,"","Boleto Amigo","k",""],["r","2025-11",12,"VENDA DE PRODUTOS/ SERVIÇOS","CRISTIANO REIS DA SILVA",383.33,1,"","Boleto Amigo","c",""],["r","2025-09",24,"VENDA DE PRODUTOS/ SERVIÇOS","CRISTIANO REIS DA SILVA",383.33,1,"","Boleto Amigo","k",""],["r","2025-11",13,"VENDA DE PRODUTOS/ SERVIÇOS","RUAN MATHEUS SOUSA DE MORAIS 38142166000115",474.11,1,"","Boleto Amigo","c",""],["r","2025-09",3,"VENDA DE PRODUTOS/ SERVIÇOS","RUAN MATHEUS SOUSA DE MORAIS 38142166000115",474.11,1,"","Boleto Amigo","k",""],["r","2025-11",19,"VENDA DE PRODUTOS/ SERVIÇOS","LEANDRO FEITOSA FARIAS",1034.69,1,"","Boleto Amigo","c",""],["r","2025-09",18,"VENDA DE PRODUTOS/ SERVIÇOS","LEANDRO FEITOSA FARIAS",1034.69,1,"","Boleto Amigo","k",""],["r","2025-11",14,"VENDA DE PRODUTOS/ SERVIÇOS","DENISE GRACA DOS SANTOS",395.34,1,"","Boleto Amigo","c",""],["r","2025-06",19,"VENDA DE PRODUTOS/ SERVIÇOS","DENISE GRACA DOS SANTOS",395.34,1,"","Boleto Amigo","k",""],["r","2025-11",12,"VENDA DE PRODUTOS/ SERVIÇOS","VITOR DA MACENO MIRANDA",383.33,1,"","Boleto Amigo","c",""],["r","2025-09",1,"VENDA DE PRODUTOS/ SERVIÇOS","VITOR DA MACENO MIRANDA",383.33,1,"","Boleto Amigo","k",""],["r","2025-11",12,"VENDA DE PRODUTOS/ SERVIÇOS","DELYNE DO VALE MARTINS BARROSO",383.33,1,"","Boleto Amigo","c",""],["r","2025-09",20,"VENDA DE PRODUTOS/ SERVIÇOS","DELYNE DO VALE MARTINS BARROSO",383.33,1,"","Boleto Amigo","k",""],["r","2025-11",14,"VENDA DE PRODUTOS/ SERVIÇOS","ALEXANDRE MARRON ARRUDA",395.34,1,"","Boleto Amigo","c",""],["r","2025-06",17,"VENDA DE PRODUTOS/ SERVIÇOS","ALEXANDRE MARRON ARRUDA",395.34,1,"","Boleto Amigo","k",""],["r","2025-11",14,"VENDA DE PRODUTOS/ SERVIÇOS","DENISE GRACA DOS SANTOS",395.34,1,"","Boleto Amigo","c",""],["r","2025-06",17,"VENDA DE PRODUTOS/ SERVIÇOS","DENISE GRACA DOS SANTOS",395.34,1,"","Boleto Amigo","k",""],["r","2025-11",5,"VENDA DE PRODUTOS/ SERVIÇOS","DIOGO HENRIQUE FARNESE",500,1,"","Boleto Amigo","c",""],["r","2025-11",5,"VENDA DE PRODUTOS/ SERVIÇOS","DIOGO HENRIQUE FARNESE",500,1,"","Boleto Amigo","k",""],["r","2025-11",7,"VENDA DE PRODUTOS/ SERVIÇOS","GLEIDSON MORAES DO NASCIMENTO",383.35,1,"","Boleto Amigo","c",""],["r","2025-05",6,"VENDA DE PRODUTOS/ SERVIÇOS","GLEIDSON MORAES DO NASCIMENTO",383.35,1,"","Boleto Amigo","k",""],["r","2025-12",23,"VENDA DE PRODUTOS/ SERVIÇOS","EFIJANE DE SOUSA OLIVEIRA",370.62,1,"","Boleto Amigo","c",""],["r","2025-08",4,"VENDA DE PRODUTOS/ SERVIÇOS","EFIJANE DE SOUSA OLIVEIRA",370.62,1,"","Boleto Amigo","k",""],["r","2025-12",12,"VENDA DE PRODUTOS/ SERVIÇOS","SANCHEZ FERREIRA DE LIMA",403.92,1,"","Boleto Amigo","c",""],["r","2025-05",28,"VENDA DE PRODUTOS/ SERVIÇOS","SANCHEZ FERREIRA DE LIMA",403.92,1,"","Boleto Amigo","k",""],["r","2025-11",6,"VENDA DE PRODUTOS/ SERVIÇOS","KAIO CESAR FREITAS PEREIRA",383.33,1,"","Boleto Amigo","c",""],["r","2025-06",4,"VENDA DE PRODUTOS/ SERVIÇOS","KAIO CESAR FREITAS PEREIRA",383.33,1,"","Boleto Amigo","k",""],["r","2025-11",6,"VENDA DE PRODUTOS/ SERVIÇOS","FLORISMAR TAVARES BATISTA",383.35,1,"","Boleto Amigo","c",""],["r","2025-05",2,"VENDA DE PRODUTOS/ SERVIÇOS","FLORISMAR TAVARES BATISTA",383.35,1,"","Boleto Amigo","k",""],["r","2025-11",7,"VENDA DE PRODUTOS/ SERVIÇOS","MILENA DE OLIVEIRA FERREIA MELO",383.33,1,"","Boleto Amigo","c",""],["r","2025-07",2,"VENDA DE PRODUTOS/ SERVIÇOS","MILENA DE OLIVEIRA FERREIA MELO",383.33,1,"","Boleto Amigo","k",""],["r","2025-11",11,"VENDA DE PRODUTOS/ SERVIÇOS","JOAO FRANCISCO CAMPOS COSTA NETO",474.42,1,"","Boleto Amigo","c",""],["r","2025-09",26,"VENDA DE PRODUTOS/ SERVIÇOS","JOAO FRANCISCO CAMPOS COSTA NETO",474.42,1,"","Boleto Amigo","k",""],["r","2025-11",4,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GENECY DE SOUSA SANTOS",200,1,"","Boleto Amigo","c",""],["r","2025-11",4,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GENECY DE SOUSA SANTOS",200,1,"","Boleto Amigo","k",""],["r","2025-11",3,"VENDA DE PRODUTOS/ SERVIÇOS","EDINALDO DA CRUZ SOUSA",200,1,"","Boleto Amigo","c",""],["r","2025-11",3,"VENDA DE PRODUTOS/ SERVIÇOS","EDINALDO DA CRUZ SOUSA",200,1,"","Boleto Amigo","k",""],["r","2025-11",3,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE WILSON JANUARIO DE SOUSA",300,1,"","Boleto Amigo","c",""],["r","2025-11",3,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE WILSON JANUARIO DE SOUSA",300,1,"","Boleto Amigo","k",""],["r","2025-11",3,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO EVANILDO COSTA DOS SANTOS",200,1,"","Boleto Amigo","c",""],["r","2025-11",4,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO EVANILDO COSTA DOS SANTOS",200,1,"","Boleto Amigo","k",""],["r","2025-10",29,"VENDA DE PRODUTOS/ SERVIÇOS","ELAINE VIEGAS CAMARA",200,1,"","Boleto Amigo","c",""],["r","2025-11",3,"VENDA DE PRODUTOS/ SERVIÇOS","ELAINE VIEGAS CAMARA",200,1,"","Boleto Amigo","k",""],["r","2025-10",31,"VENDA DE PRODUTOS/ SERVIÇOS","JOAQUIM DA SILVA REIS",200,1,"","Boleto Amigo","c",""],["r","2025-11",3,"VENDA DE PRODUTOS/ SERVIÇOS","JOAQUIM DA SILVA REIS",200,1,"","Boleto Amigo","k",""],["r","2025-11",4,"VENDA DE PRODUTOS/ SERVIÇOS","JOAO VICTOR DE SOUSA PESSOA",474.11,1,"","Boleto Amigo","c",""],["r","2025-07",25,"VENDA DE PRODUTOS/ SERVIÇOS","JOAO VICTOR DE SOUSA PESSOA",474.11,1,"","Boleto Amigo","k",""],["r","2025-10",29,"VENDA DE PRODUTOS/ SERVIÇOS","NATALIA RAMOS DOS ANJOS DE SOUSA",200,1,"","Boleto Amigo","c",""],["r","2025-10",29,"VENDA DE PRODUTOS/ SERVIÇOS","NATALIA RAMOS DOS ANJOS DE SOUSA",200,1,"","Boleto Amigo","k",""],["r","2025-10",29,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO DE PADUA VAZ DE LIMA",200,1,"","Boleto Amigo","c",""],["r","2025-10",29,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO DE PADUA VAZ DE LIMA",200,1,"","Boleto Amigo","k",""],["r","2025-10",27,"VENDA DE PRODUTOS/ SERVIÇOS","ELIZANGELA ALVES DA COSTA",200,1,"","Boleto Amigo","c",""],["r","2025-10",27,"VENDA DE PRODUTOS/ SERVIÇOS","ELIZANGELA ALVES DA COSTA",200,1,"","Boleto Amigo","k",""],["r","2025-10",10,"VENDA DE PRODUTOS/ SERVIÇOS","JOSIAS DOS SANTOS RODRIGUES",383.33,1,"","Boleto Amigo","c",""],["r","2025-08",27,"VENDA DE PRODUTOS/ SERVIÇOS","JOSIAS DOS SANTOS RODRIGUES",383.33,1,"","Boleto Amigo","k",""],["r","2025-10",25,"VENDA DE PRODUTOS/ SERVIÇOS","CAMILA GABRIELE CORREA NEVES",383.33,0,"","Boleto Amigo","c",""],["r","2025-06",23,"VENDA DE PRODUTOS/ SERVIÇOS","CAMILA GABRIELE CORREA NEVES",383.33,0,"","Boleto Amigo","k",""],["r","2025-10",29,"VENDA DE PRODUTOS/ SERVIÇOS","HENRIQUE RAMOS GUIMARAES",383.33,1,"","Boleto Amigo","c",""],["r","2025-07",10,"VENDA DE PRODUTOS/ SERVIÇOS","HENRIQUE RAMOS GUIMARAES",383.33,1,"","Boleto Amigo","k",""],["r","2025-10",28,"VENDA DE PRODUTOS/ SERVIÇOS","GORETE PEREIRA DOS SANTOS LIMA",366.67,1,"","Boleto Amigo","c",""],["r","2025-06",26,"VENDA DE PRODUTOS/ SERVIÇOS","GORETE PEREIRA DOS SANTOS LIMA",366.67,1,"","Boleto Amigo","k",""],["r","2025-10",29,"VENDA DE PRODUTOS/ SERVIÇOS","DORISBERTO DE VASCONCELOS ARAUJO",383.33,1,"","Boleto Amigo","c",""],["r","2025-09",5,"VENDA DE PRODUTOS/ SERVIÇOS","DORISBERTO DE VASCONCELOS ARAUJO",383.33,1,"","Boleto Amigo","k",""],["r","2025-10",29,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO WYTAMAR COELHO DA SILVA CRUZ",383.33,1,"","Boleto Amigo","c",""],["r","2025-08",20,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO WYTAMAR COELHO DA SILVA CRUZ",383.33,1,"","Boleto Amigo","k",""],["r","2025-10",20,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE AELITON DA SILVA",383.33,1,"","Boleto Amigo","c",""],["r","2025-06",5,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE AELITON DA SILVA",383.33,1,"","Boleto Amigo","k",""],["r","2025-11",6,"VENDA DE PRODUTOS/ SERVIÇOS","INEIAS ABRAAO DOS SANTOS BENJAMIM",396.9,1,"","Boleto Amigo","c",""],["r","2025-07",16,"VENDA DE PRODUTOS/ SERVIÇOS","INEIAS ABRAAO DOS SANTOS BENJAMIM",396.9,1,"","Boleto Amigo","k",""],["r","2025-10",1,"VENDA DE PRODUTOS/ SERVIÇOS","ERENILZA CARVALHO DA SILVA SOUSA",383.33,1,"","Boleto Amigo","c",""],["r","2025-06",4,"VENDA DE PRODUTOS/ SERVIÇOS","ERENILZA CARVALHO DA SILVA SOUSA",383.33,1,"","Boleto Amigo","k",""],["r","2025-10",31,"VENDA DE PRODUTOS/ SERVIÇOS","CLEGINALDO OLIVEIRA DA SILVA",395.34,1,"","Boleto Amigo","c",""],["r","2025-08",21,"VENDA DE PRODUTOS/ SERVIÇOS","CLEGINALDO OLIVEIRA DA SILVA",395.34,1,"","Boleto Amigo","k",""],["r","2025-10",29,"VENDA DE PRODUTOS/ SERVIÇOS","JAILSON SILVA DOS SANTOS",383.33,1,"","Boleto Amigo","c",""],["r","2025-08",12,"VENDA DE PRODUTOS/ SERVIÇOS","JAILSON SILVA DOS SANTOS",383.33,1,"","Boleto Amigo","k",""],["r","2025-11",5,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA MAYLMA TORRES SARAIVA",396.64,1,"","Boleto Amigo","c",""],["r","2025-08",26,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA MAYLMA TORRES SARAIVA",396.64,1,"","Boleto Amigo","k",""],["r","2025-10",29,"VENDA DE PRODUTOS/ SERVIÇOS","ERENILZA CARVALHO DA SILVA SOUSA",383.33,1,"","Boleto Amigo","c",""],["r","2025-06",4,"VENDA DE PRODUTOS/ SERVIÇOS","ERENILZA CARVALHO DA SILVA SOUSA",383.33,1,"","Boleto Amigo","k",""],["r","2025-10",28,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA ALNEIDE DE CALDAS ALMEIDE",383.33,1,"","Boleto Amigo","c",""],["r","2025-05",27,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA ALNEIDE DE CALDAS ALMEIDE",383.33,1,"","Boleto Amigo","k",""],["r","2025-11",28,"VENDA DE PRODUTOS/ SERVIÇOS","ROGERIO ARLINDO DO CARMO RIBEIRO",402.62,1,"","Boleto Amigo","c",""],["r","2025-05",30,"VENDA DE PRODUTOS/ SERVIÇOS","ROGERIO ARLINDO DO CARMO RIBEIRO",402.62,1,"","Boleto Amigo","k",""],["r","2025-10",31,"VENDA DE PRODUTOS/ SERVIÇOS","EUZIMAR RIBEIRO ALVES",395.34,1,"","Boleto Amigo","c",""],["r","2025-09",11,"VENDA DE PRODUTOS/ SERVIÇOS","EUZIMAR RIBEIRO ALVES",395.34,1,"","Boleto Amigo","k",""],["r","2025-10",28,"VENDA DE PRODUTOS/ SERVIÇOS","ANGELA MARIA LIMA SALES",383.33,1,"","Boleto Amigo","c",""],["r","2025-09",10,"VENDA DE PRODUTOS/ SERVIÇOS","ANGELA MARIA LIMA SALES",383.33,1,"","Boleto Amigo","k",""],["r","2025-11",21,"VENDA DE PRODUTOS/ SERVIÇOS","CLEBER DE JESUS MACHADO",400.54,1,"","Boleto Amigo","c",""],["r","2025-05",30,"VENDA DE PRODUTOS/ SERVIÇOS","CLEBER DE JESUS MACHADO",400.54,1,"","Boleto Amigo","k",""],["r","2025-10",29,"VENDA DE PRODUTOS/ SERVIÇOS","SERGIO RUFINO DE FREITAS",366.67,1,"","Boleto Amigo","c",""],["r","2025-09",10,"VENDA DE PRODUTOS/ SERVIÇOS","SERGIO RUFINO DE FREITAS",366.67,1,"","Boleto Amigo","k",""],["r","2025-10",30,"VENDA DE PRODUTOS/ SERVIÇOS","MARIANY DE SOUSA GALVAO",395.08,1,"","Boleto Amigo","c",""],["r","2025-07",14,"VENDA DE PRODUTOS/ SERVIÇOS","MARIANY DE SOUSA GALVAO",395.08,1,"","Boleto Amigo","k",""],["r","2025-10",29,"VENDA DE PRODUTOS/ SERVIÇOS","JADSON CARLOS DE OLIVEIRA SATURNINO",383.33,1,"","Boleto Amigo","c",""],["r","2025-06",24,"VENDA DE PRODUTOS/ SERVIÇOS","JADSON CARLOS DE OLIVEIRA SATURNINO",383.33,1,"","Boleto Amigo","k",""],["r","2025-10",29,"VENDA DE PRODUTOS/ SERVIÇOS","SAMUEL SALES SILVA",383.33,1,"","Boleto Amigo","c",""],["r","2025-08",6,"VENDA DE PRODUTOS/ SERVIÇOS","SAMUEL SALES SILVA",383.33,1,"","Boleto Amigo","k",""],["r","2025-10",29,"VENDA DE PRODUTOS/ SERVIÇOS","GERONIMO DA SILVA ALCANTARA",383.33,1,"","Boleto Amigo","c",""],["r","2025-09",19,"VENDA DE PRODUTOS/ SERVIÇOS","GERONIMO DA SILVA ALCANTARA",383.33,1,"","Boleto Amigo","k",""],["r","2025-11",11,"VENDA DE PRODUTOS/ SERVIÇOS","JOAO VICTOR SOUZA VILHENA",397.68,1,"","Boleto Amigo","c",""],["r","2025-09",15,"VENDA DE PRODUTOS/ SERVIÇOS","JOAO VICTOR SOUZA VILHENA",397.68,1,"","Boleto Amigo","k",""],["r","2025-10",29,"VENDA DE PRODUTOS/ SERVIÇOS","MARCOS COSTA MARQUES",383.33,1,"","Boleto Amigo","c",""],["r","2025-09",12,"VENDA DE PRODUTOS/ SERVIÇOS","MARCOS COSTA MARQUES",383.33,1,"","Boleto Amigo","k",""],["r","2025-11",10,"VENDA DE PRODUTOS/ SERVIÇOS","GEOVAN TEIXEIRA DA SILVA",397.42,1,"","Boleto Amigo","c",""],["r","2025-05",8,"VENDA DE PRODUTOS/ SERVIÇOS","GEOVAN TEIXEIRA DA SILVA",397.42,1,"","Boleto Amigo","k",""],["r","2025-10",29,"VENDA DE PRODUTOS/ SERVIÇOS","NANCI MARIA SILVEIRA CAMPOS",383.33,1,"","Boleto Amigo","c",""],["r","2025-08",7,"VENDA DE PRODUTOS/ SERVIÇOS","NANCI MARIA SILVEIRA CAMPOS",383.33,1,"","Boleto Amigo","k",""],["r","2025-11",26,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA LUCIDALVA CALAZANS SANTOS",402.13,1,"","Boleto Amigo","c",""],["r","2025-04",24,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA LUCIDALVA CALAZANS SANTOS",402.13,1,"","Boleto Amigo","k",""],["r","2025-10",30,"VENDA DE PRODUTOS/ SERVIÇOS","ZEFERINO FONSECA MORAES FILHO",395.11,1,"","Boleto Amigo","c",""],["r","2025-04",4,"VENDA DE PRODUTOS/ SERVIÇOS","ZEFERINO FONSECA MORAES FILHO",395.11,1,"","Boleto Amigo","k",""],["r","2025-11",12,"VENDA DE PRODUTOS/ SERVIÇOS","ZENILDO DA SILVA SANTOS",398.46,1,"","Boleto Amigo","c",""],["r","2025-09",25,"VENDA DE PRODUTOS/ SERVIÇOS","ZENILDO DA SILVA SANTOS",398.46,1,"","Boleto Amigo","k",""],["r","2025-10",29,"VENDA DE PRODUTOS/ SERVIÇOS","LUIZ PAULO BARBOSA DA SILVA",383.35,1,"","Boleto Amigo","c",""],["r","2025-04",29,"VENDA DE PRODUTOS/ SERVIÇOS","LUIZ PAULO BARBOSA DA SILVA",383.35,1,"","Boleto Amigo","k",""],["r","2025-11",10,"VENDA DE PRODUTOS/ SERVIÇOS","MARQUELE SOUSA ALMEIDA",397.42,1,"","Boleto Amigo","c",""],["r","2025-09",18,"VENDA DE PRODUTOS/ SERVIÇOS","MARQUELE SOUSA ALMEIDA",397.42,1,"","Boleto Amigo","k",""],["r","2025-10",29,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA ELBA CORDEIRO DA CRUZ DE SOUSA",383.33,1,"","Boleto Amigo","c",""],["r","2025-08",8,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA ELBA CORDEIRO DA CRUZ DE SOUSA",383.33,1,"","Boleto Amigo","k",""],["r","2025-10",30,"VENDA DE PRODUTOS/ SERVIÇOS","DAJANN GARDELL MOREIRA CHAVES",395.11,1,"","Boleto Amigo","c",""],["r","2025-04",30,"VENDA DE PRODUTOS/ SERVIÇOS","DAJANN GARDELL MOREIRA CHAVES",395.11,1,"","Boleto Amigo","k",""],["r","2025-10",27,"VENDA DE PRODUTOS/ SERVIÇOS","MARAYZA KARLA DA SILVA NERY",383.33,1,"","Boleto Amigo","c",""],["r","2025-09",27,"VENDA DE PRODUTOS/ SERVIÇOS","MARAYZA KARLA DA SILVA NERY",383.33,1,"","Boleto Amigo","k",""],["r","2025-12",8,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO DE ASSIS DA SILVA",404.7,1,"","Boleto Amigo","c",""],["r","2025-09",23,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO DE ASSIS DA SILVA",404.7,1,"","Boleto Amigo","k",""],["r","2025-10",29,"VENDA DE PRODUTOS/ SERVIÇOS","MARCIO JOSE ARAUJO POLICARPO",383.33,1,"","Boleto Amigo","c",""],["r","2025-09",16,"VENDA DE PRODUTOS/ SERVIÇOS","MARCIO JOSE ARAUJO POLICARPO",383.33,1,"","Boleto Amigo","k",""],["r","2025-10",24,"VENDA DE PRODUTOS/ SERVIÇOS","NAYANE DE SOUSA VIEIRA",570,1,"","Boleto Amigo","c",""],["r","2025-10",24,"VENDA DE PRODUTOS/ SERVIÇOS","NAYANE DE SOUSA VIEIRA",570,1,"","Boleto Amigo","k",""],["r","2025-10",24,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE ANTONIO BARBOSA DE MOURA",1000,1,"","Boleto Amigo","c",""],["r","2025-10",24,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE ANTONIO BARBOSA DE MOURA",1000,1,"","Boleto Amigo","k",""],["r","2025-10",24,"VENDA DE PRODUTOS/ SERVIÇOS","ELENICE LOURENCO FELIPE",200,1,"","Boleto Amigo","c",""],["r","2025-10",23,"VENDA DE PRODUTOS/ SERVIÇOS","ELENICE LOURENCO FELIPE",200,1,"","Boleto Amigo","k",""],["r","2025-10",21,"VENDA DE PRODUTOS/ SERVIÇOS","CLAUDIO JOSE INACIO JUNIOR",200,1,"","Boleto Amigo","c",""],["r","2025-10",21,"VENDA DE PRODUTOS/ SERVIÇOS","CLAUDIO JOSE INACIO JUNIOR",200,1,"","Boleto Amigo","k",""],["r","2025-10",28,"VENDA DE PRODUTOS/ SERVIÇOS","MAX SERGIO SANTOS MOREIRA JUNIOR",378.67,1,"","Boleto Amigo","c",""],["r","2025-08",20,"VENDA DE PRODUTOS/ SERVIÇOS","MAX SERGIO SANTOS MOREIRA JUNIOR",378.67,1,"","Boleto Amigo","k",""],["r","2025-10",8,"VENDA DE PRODUTOS/ SERVIÇOS","KATIANA FELIX ALMEIDA",383.35,1,"","Boleto Amigo","c",""],["r","2025-04",15,"VENDA DE PRODUTOS/ SERVIÇOS","KATIANA FELIX ALMEIDA",383.35,1,"","Boleto Amigo","k",""],["r","2025-10",6,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA FRANCILENE ALVES DA SILVA LIMA",375,1,"","Boleto Amigo","c",""],["r","2025-09",17,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA FRANCILENE ALVES DA SILVA LIMA",375,1,"","Boleto Amigo","k",""],["r","2025-10",28,"VENDA DE PRODUTOS/ SERVIÇOS","MAX SERGIO SANTOS MOREIRA JUNIOR",378.67,1,"","Boleto Amigo","c",""],["r","2025-08",20,"VENDA DE PRODUTOS/ SERVIÇOS","MAX SERGIO SANTOS MOREIRA JUNIOR",378.67,1,"","Boleto Amigo","k",""],["r","2025-10",30,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO PEDRO NETO",396.9,1,"","Boleto Amigo","c",""],["r","2025-08",1,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO PEDRO NETO",396.9,1,"","Boleto Amigo","k",""],["r","2025-10",22,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE CANTANHEDE MAGALHAES FILHO",500,1,"","Boleto Amigo","c",""],["r","2025-07",21,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE CANTANHEDE MAGALHAES FILHO",500,1,"","Boleto Amigo","k",""],["r","2025-10",20,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE MANOEL DOS SANTOS JUNIOR",383.33,1,"","Boleto Amigo","c",""],["r","2025-06",20,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE MANOEL DOS SANTOS JUNIOR",383.33,1,"","Boleto Amigo","k",""],["r","2025-10",23,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GOMES DIAS",395.11,1,"","Boleto Amigo","c",""],["r","2025-04",22,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GOMES DIAS",395.11,1,"","Boleto Amigo","k",""],["r","2025-10",22,"VENDA DE PRODUTOS/ SERVIÇOS","LANA THAYNI SILVA MENEZES",395.6,1,"","Boleto Amigo","c",""],["r","2025-09",15,"VENDA DE PRODUTOS/ SERVIÇOS","LANA THAYNI SILVA MENEZES",395.6,1,"","Boleto Amigo","k",""],["r","2025-10",15,"VENDA DE PRODUTOS/ SERVIÇOS","WEDNEY MARTINS",460,1,"","Boleto Amigo","c",""],["r","2025-07",16,"VENDA DE PRODUTOS/ SERVIÇOS","WEDNEY MARTINS",460,1,"","Boleto Amigo","k",""],["r","2025-10",21,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA JOCELINA FREIRE DE OLIVEIRA",200,1,"","Boleto Amigo","c",""],["r","2025-10",17,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA JOCELINA FREIRE DE OLIVEIRA",200,1,"","Boleto Amigo","k",""],["r","2025-10",17,"VENDA DE PRODUTOS/ SERVIÇOS","SIDINELIO NASCIMENTO PIRES",358.33,1,"","Boleto Amigo","c",""],["r","2025-08",8,"VENDA DE PRODUTOS/ SERVIÇOS","SIDINELIO NASCIMENTO PIRES",358.33,1,"","Boleto Amigo","k",""],["r","2025-11",11,"VENDA DE PRODUTOS/ SERVIÇOS","ELENILTON SANTOS DO NASCIMENTO",392,1,"","Boleto Amigo","c",""],["r","2025-08",20,"VENDA DE PRODUTOS/ SERVIÇOS","ELENILTON SANTOS DO NASCIMENTO",392,1,"","Boleto Amigo","k",""],["r","2025-10",17,"VENDA DE PRODUTOS/ SERVIÇOS","MARCIO MENDES RODRIGUES",366.67,1,"","Boleto Amigo","c",""],["r","2025-08",8,"VENDA DE PRODUTOS/ SERVIÇOS","MARCIO MENDES RODRIGUES",366.67,1,"","Boleto Amigo","k",""],["r","2025-11",17,"VENDA DE PRODUTOS/ SERVIÇOS","GABRIEL CRUZ DOS REIS",402.36,1,"","Boleto Amigo","c",""],["r","2025-09",23,"VENDA DE PRODUTOS/ SERVIÇOS","GABRIEL CRUZ DOS REIS",402.36,1,"","Boleto Amigo","k",""],["r","2025-11",25,"VENDA DE PRODUTOS/ SERVIÇOS","FELIPE PEREIRA DOS SANTOS",404.44,1,"","Boleto Amigo","c",""],["r","2025-09",2,"VENDA DE PRODUTOS/ SERVIÇOS","FELIPE PEREIRA DOS SANTOS",404.44,1,"","Boleto Amigo","k",""],["r","2025-10",17,"VENDA DE PRODUTOS/ SERVIÇOS","SIMONE OLIVEIRA SILVA",383.33,1,"","Boleto Amigo","c",""],["r","2025-06",30,"VENDA DE PRODUTOS/ SERVIÇOS","SIMONE OLIVEIRA SILVA",383.33,1,"","Boleto Amigo","k",""],["r","2025-10",17,"VENDA DE PRODUTOS/ SERVIÇOS","ISMAEL DA SILVA SANTOS",383.33,1,"","Boleto Amigo","c",""],["r","2025-08",18,"VENDA DE PRODUTOS/ SERVIÇOS","ISMAEL DA SILVA SANTOS",383.33,1,"","Boleto Amigo","k",""],["r","2025-10",21,"VENDA DE PRODUTOS/ SERVIÇOS","KAIQUE PINHEIRO LEITE",515.68,1,"","Boleto Amigo","c",""],["r","2025-09",18,"VENDA DE PRODUTOS/ SERVIÇOS","KAIQUE PINHEIRO LEITE",515.68,1,"","Boleto Amigo","k",""],["r","2025-10",16,"VENDA DE PRODUTOS/ SERVIÇOS","DANIELE FERREIRA DO NASCIMENTO",383.33,1,"","Boleto Amigo","c",""],["r","2025-08",25,"VENDA DE PRODUTOS/ SERVIÇOS","DANIELE FERREIRA DO NASCIMENTO",383.33,1,"","Boleto Amigo","k",""],["r","2025-10",14,"VENDA DE PRODUTOS/ SERVIÇOS","NATANAEL DIVINO ALVES",383.33,1,"","Boleto Amigo","c",""],["r","2025-06",27,"VENDA DE PRODUTOS/ SERVIÇOS","NATANAEL DIVINO ALVES",383.33,1,"","Boleto Amigo","k",""],["r","2025-10",8,"VENDA DE PRODUTOS/ SERVIÇOS","FERNANDO HENRIQUE PEDROZO DE CAMPOS",333.33,1,"","Boleto Amigo","c",""],["r","2025-09",25,"VENDA DE PRODUTOS/ SERVIÇOS","FERNANDO HENRIQUE PEDROZO DE CAMPOS",333.33,1,"","Boleto Amigo","k",""],["r","2025-11",24,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA URSULA RIOS CARNEIRO",403.92,1,"","Boleto Amigo","c",""],["r","2025-06",30,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA URSULA RIOS CARNEIRO",403.92,1,"","Boleto Amigo","k",""],["r","2025-10",9,"VENDA DE PRODUTOS/ SERVIÇOS","LEONARDO CASTRO DE JESUS",383.33,1,"","Boleto Amigo","c",""],["r","2025-06",11,"VENDA DE PRODUTOS/ SERVIÇOS","LEONARDO CASTRO DE JESUS",383.33,1,"","Boleto Amigo","k",""],["r","2025-10",3,"VENDA DE PRODUTOS/ SERVIÇOS","NADIR ALVES TEIXEIRA",383.33,1,"","Boleto Amigo","c",""],["r","2025-06",25,"VENDA DE PRODUTOS/ SERVIÇOS","NADIR ALVES TEIXEIRA",383.33,1,"","Boleto Amigo","k",""],["r","2025-10",6,"VENDA DE PRODUTOS/ SERVIÇOS","JOELCE FIGUEREDO DE ARAUJO",383.33,1,"","Boleto Amigo","c",""],["r","2025-05",12,"VENDA DE PRODUTOS/ SERVIÇOS","JOELCE FIGUEREDO DE ARAUJO",383.33,1,"","Boleto Amigo","k",""],["r","2025-10",9,"VENDA DE PRODUTOS/ SERVIÇOS","NAYLTON OLIVEIRA DA SILVA",333.33,1,"","Boleto Amigo","c",""],["r","2025-07",16,"VENDA DE PRODUTOS/ SERVIÇOS","NAYLTON OLIVEIRA DA SILVA",333.33,1,"","Boleto Amigo","k",""],["r","2025-11",25,"VENDA DE PRODUTOS/ SERVIÇOS","WILIAN GALVAO",404.44,1,"","Boleto Amigo","c",""],["r","2025-09",29,"VENDA DE PRODUTOS/ SERVIÇOS","WILIAN GALVAO",404.44,1,"","Boleto Amigo","k",""],["r","2025-10",15,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE FRANCISCO PEREIRA",200,1,"","Boleto Amigo","c",""],["r","2025-10",15,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE FRANCISCO PEREIRA",200,1,"","Boleto Amigo","k",""],["r","2025-08",15,"VENDA DE PRODUTOS/ SERVIÇOS","WILLAME COSTA NUNES",383.33,1,"","Boleto Amigo","c",""],["r","2025-05",13,"VENDA DE PRODUTOS/ SERVIÇOS","WILLAME COSTA NUNES",383.33,1,"","Boleto Amigo","k",""],["r","2025-10",16,"VENDA DE PRODUTOS/ SERVIÇOS","LEANDRO FEITOSA FARIAS",1000,1,"","Boleto Amigo","c",""],["r","2025-09",18,"VENDA DE PRODUTOS/ SERVIÇOS","LEANDRO FEITOSA FARIAS",1000,1,"","Boleto Amigo","k",""],["r","2025-10",14,"VENDA DE PRODUTOS/ SERVIÇOS","CESAR AUGUSTO RIBEIRO FERREIRA",500,1,"","Boleto Amigo","c",""],["r","2025-10",14,"VENDA DE PRODUTOS/ SERVIÇOS","CESAR AUGUSTO RIBEIRO FERREIRA",500,1,"","Boleto Amigo","k",""],["r","2025-11",6,"VENDA DE PRODUTOS/ SERVIÇOS","GERUSA CONDE DUARTE",400.54,1,"","Boleto Amigo","c",""],["r","2025-09",13,"VENDA DE PRODUTOS/ SERVIÇOS","GERUSA CONDE DUARTE",400.54,1,"","Boleto Amigo","k",""],["r","2025-10",11,"VENDA DE PRODUTOS/ SERVIÇOS","PAULO CANDIDO RODRIGUES",500,1,"","Boleto Amigo","c",""],["r","2025-10",11,"VENDA DE PRODUTOS/ SERVIÇOS","PAULO CANDIDO RODRIGUES",500,1,"","Boleto Amigo","k",""],["r","2025-10",8,"VENDA DE PRODUTOS/ SERVIÇOS","GENESINA ALVES NETA",383.33,1,"","Boleto Amigo","c",""],["r","2025-05",8,"VENDA DE PRODUTOS/ SERVIÇOS","GENESINA ALVES NETA",383.33,1,"","Boleto Amigo","k",""],["r","2025-10",9,"VENDA DE PRODUTOS/ SERVIÇOS","SAMUEL FERREIRA RAMOS",383.35,1,"","Boleto Amigo","c",""],["r","2025-04",24,"VENDA DE PRODUTOS/ SERVIÇOS","SAMUEL FERREIRA RAMOS",383.35,1,"","Boleto Amigo","k",""],["r","2025-10",14,"VENDA DE PRODUTOS/ SERVIÇOS","ALEXANDRE MARRON ARRUDA",383.33,1,"","Boleto Amigo","c",""],["r","2025-06",17,"VENDA DE PRODUTOS/ SERVIÇOS","ALEXANDRE MARRON ARRUDA",383.33,1,"","Boleto Amigo","k",""],["r","2025-10",13,"VENDA DE PRODUTOS/ SERVIÇOS","VALDEILSON SAMINES ARAUJO",383.33,1,"","Boleto Amigo","c",""],["r","2025-10",2,"VENDA DE PRODUTOS/ SERVIÇOS","VALDEILSON SAMINES ARAUJO",383.33,1,"","Boleto Amigo","k",""],["r","2025-10",9,"VENDA DE PRODUTOS/ SERVIÇOS","ANA CRISTINA CORREA PINHEIRO",400,1,"","Boleto Amigo","c",""],["r","2025-09",3,"VENDA DE PRODUTOS/ SERVIÇOS","ANA CRISTINA CORREA PINHEIRO",400,1,"","Boleto Amigo","k",""],["r","2025-10",14,"VENDA DE PRODUTOS/ SERVIÇOS","RUAN MATHEUS SOUSA DE MORAIS 38142166000115",460,1,"","Boleto Amigo","c",""],["r","2025-09",3,"VENDA DE PRODUTOS/ SERVIÇOS","RUAN MATHEUS SOUSA DE MORAIS 38142166000115",460,1,"","Boleto Amigo","k",""],["r","2025-10",10,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA MARGARIDA DA SILVA",383.33,1,"","Boleto Amigo","c",""],["r","2025-05",23,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA MARGARIDA DA SILVA",383.33,1,"","Boleto Amigo","k",""],["r","2025-10",15,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO ALEXANDRE MEDEIROS SANTANA",309.6,1,"","Boleto Amigo","c",""],["r","2025-07",28,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO ALEXANDRE MEDEIROS SANTANA",309.6,1,"","Boleto Amigo","k",""],["r","2025-10",14,"VENDA DE PRODUTOS/ SERVIÇOS","DENISE GRACA DOS SANTOS",383.33,1,"","Boleto Amigo","c",""],["r","2025-06",19,"VENDA DE PRODUTOS/ SERVIÇOS","DENISE GRACA DOS SANTOS",383.33,1,"","Boleto Amigo","k",""],["r","2025-10",29,"VENDA DE PRODUTOS/ SERVIÇOS","ERBANO VELOSO HOLANDA",399.24,1,"","Boleto Amigo","c",""],["r","2025-09",12,"VENDA DE PRODUTOS/ SERVIÇOS","ERBANO VELOSO HOLANDA",399.24,1,"","Boleto Amigo","k",""],["r","2025-10",14,"VENDA DE PRODUTOS/ SERVIÇOS","DENISE GRACA DOS SANTOS",383.33,1,"","Boleto Amigo","c",""],["r","2025-06",17,"VENDA DE PRODUTOS/ SERVIÇOS","DENISE GRACA DOS SANTOS",383.33,1,"","Boleto Amigo","k",""],["r","2025-10",14,"VENDA DE PRODUTOS/ SERVIÇOS","ESTER ALVES CAMELO",383.33,1,"","Boleto Amigo","c",""],["r","2025-05",30,"VENDA DE PRODUTOS/ SERVIÇOS","ESTER ALVES CAMELO",383.33,1,"","Boleto Amigo","k",""],["r","2025-10",14,"VENDA DE PRODUTOS/ SERVIÇOS","CLEGINALDO OLIVEIRA DA SILVA",383.33,1,"","Boleto Amigo","c",""],["r","2025-08",21,"VENDA DE PRODUTOS/ SERVIÇOS","CLEGINALDO OLIVEIRA DA SILVA",383.33,1,"","Boleto Amigo","k",""],["r","2025-10",14,"VENDA DE PRODUTOS/ SERVIÇOS","EDNA UCHOA DE MORAIS",500,1,"","Boleto Amigo","c",""],["r","2025-09",12,"VENDA DE PRODUTOS/ SERVIÇOS","EDNA UCHOA DE MORAIS",500,1,"","Boleto Amigo","k",""],["r","2025-10",14,"VENDA DE PRODUTOS/ SERVIÇOS","VITOR DA MACENO MIRANDA",383.33,1,"","Boleto Amigo","c",""],["r","2025-09",1,"VENDA DE PRODUTOS/ SERVIÇOS","VITOR DA MACENO MIRANDA",383.33,1,"","Boleto Amigo","k",""],["r","2025-10",9,"VENDA DE PRODUTOS/ SERVIÇOS","JULIO MICHAEL NUNES VENANCIO",500,1,"","Boleto Amigo","c",""],["r","2025-08",21,"VENDA DE PRODUTOS/ SERVIÇOS","JULIO MICHAEL NUNES VENANCIO",500,1,"","Boleto Amigo","k",""],["r","2025-10",9,"VENDA DE PRODUTOS/ SERVIÇOS","PAULO DA SILVA SANTOS",200,1,"","Boleto Amigo","c",""],["r","2025-10",9,"VENDA DE PRODUTOS/ SERVIÇOS","PAULO DA SILVA SANTOS",200,1,"","Boleto Amigo","k",""],["r","2025-10",8,"VENDA DE PRODUTOS/ SERVIÇOS","KAUAN SILVA BATISTA",200,1,"","Boleto Amigo","c",""],["r","2025-10",8,"VENDA DE PRODUTOS/ SERVIÇOS","KAUAN SILVA BATISTA",200,1,"","Boleto Amigo","k",""],["r","2025-10",8,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA GIRLEIDA DA SILVA FURTADO",200,1,"","Boleto Amigo","c",""],["r","2025-10",8,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA GIRLEIDA DA SILVA FURTADO",200,1,"","Boleto Amigo","k",""],["r","2025-10",7,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO REGINALDO QUINTINO",200,1,"","Boleto Amigo","c",""],["r","2025-10",7,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO REGINALDO QUINTINO",200,1,"","Boleto Amigo","k",""],["r","2025-09",30,"VENDA DE PRODUTOS/ SERVIÇOS","FELIPE MORAIS DOS SANTOS",200,1,"","Boleto Amigo","c",""],["r","2025-10",7,"VENDA DE PRODUTOS/ SERVIÇOS","FELIPE MORAIS DOS SANTOS",200,1,"","Boleto Amigo","k",""],["r","2025-10",6,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA HALINA ANDRE DOS SANTOS",200,1,"","Boleto Amigo","c",""],["r","2025-10",6,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA HALINA ANDRE DOS SANTOS",200,1,"","Boleto Amigo","k",""],["r","2025-10",6,"VENDA DE PRODUTOS/ SERVIÇOS","HUGO DE SAO VICTOR LOPES CAVALCANTE NETO",300,1,"","Boleto Amigo","c",""],["r","2025-10",6,"VENDA DE PRODUTOS/ SERVIÇOS","HUGO DE SAO VICTOR LOPES CAVALCANTE NETO",300,1,"","Boleto Amigo","k",""],["r","2025-10",8,"VENDA DE PRODUTOS/ SERVIÇOS","FLORISMAR TAVARES BATISTA",383.33,1,"","Boleto Amigo","c",""],["r","2025-05",2,"VENDA DE PRODUTOS/ SERVIÇOS","FLORISMAR TAVARES BATISTA",383.33,1,"","Boleto Amigo","k",""],["r","2025-10",8,"VENDA DE PRODUTOS/ SERVIÇOS","MILENA DE OLIVEIRA FERREIA MELO",383.33,1,"","Boleto Amigo","c",""],["r","2025-07",2,"VENDA DE PRODUTOS/ SERVIÇOS","MILENA DE OLIVEIRA FERREIA MELO",383.33,1,"","Boleto Amigo","k",""],["r","2025-11",21,"VENDA DE PRODUTOS/ SERVIÇOS","EFIJANE DE SOUSA OLIVEIRA",370.39,1,"","Boleto Amigo","c",""],["r","2025-08",4,"VENDA DE PRODUTOS/ SERVIÇOS","EFIJANE DE SOUSA OLIVEIRA",370.39,1,"","Boleto Amigo","k",""],["r","2025-10",8,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA DO SOCORRO PAULINO SOUZA",500,1,"","Boleto Amigo","c",""],["r","2025-07",11,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA DO SOCORRO PAULINO SOUZA",500,1,"","Boleto Amigo","k",""],["r","2025-10",8,"VENDA DE PRODUTOS/ SERVIÇOS","GLEIDSON MORAES DO NASCIMENTO",383.33,1,"","Boleto Amigo","c",""],["r","2025-05",6,"VENDA DE PRODUTOS/ SERVIÇOS","GLEIDSON MORAES DO NASCIMENTO",383.33,1,"","Boleto Amigo","k",""],["r","2025-10",24,"VENDA DE PRODUTOS/ SERVIÇOS","SANCHEZ FERREIRA DE LIMA",398.98,1,"","Boleto Amigo","c",""],["r","2025-05",28,"VENDA DE PRODUTOS/ SERVIÇOS","SANCHEZ FERREIRA DE LIMA",398.98,1,"","Boleto Amigo","k",""],["r","2025-10",3,"VENDA DE PRODUTOS/ SERVIÇOS","ELIS REGINA BERNARDO COSTA",300,1,"","Boleto Amigo","c",""],["r","2025-10",6,"VENDA DE PRODUTOS/ SERVIÇOS","ELIS REGINA BERNARDO COSTA",300,1,"","Boleto Amigo","k",""],["r","2025-10",3,"VENDA DE PRODUTOS/ SERVIÇOS","ELIETE ALVES RABELO DOS SANTOS",200,1,"","Boleto Amigo","c",""],["r","2025-10",3,"VENDA DE PRODUTOS/ SERVIÇOS","ELIETE ALVES RABELO DOS SANTOS",200,1,"","Boleto Amigo","k",""],["r","2025-10",2,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA ANGELICA DA SILVA",200,1,"","Boleto Amigo","c",""],["r","2025-10",2,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA ANGELICA DA SILVA",200,1,"","Boleto Amigo","k",""],["r","2025-10",1,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIA MARIA BARBOSA TEODOSIO",500,1,"","Boleto Amigo","c",""],["r","2025-10",1,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIA MARIA BARBOSA TEODOSIO",500,1,"","Boleto Amigo","k",""],["r","2025-10",1,"VENDA DE PRODUTOS/ SERVIÇOS","WESLEY EURIPEDIS CAVALCANTE",200,1,"","Boleto Amigo","c",""],["r","2025-10",1,"VENDA DE PRODUTOS/ SERVIÇOS","WESLEY EURIPEDIS CAVALCANTE",200,1,"","Boleto Amigo","k",""],["r","2025-10",1,"VENDA DE PRODUTOS/ SERVIÇOS","VALDEILSON SAMINES ARAUJO",200,1,"","Boleto Amigo","c",""],["r","2025-10",2,"VENDA DE PRODUTOS/ SERVIÇOS","VALDEILSON SAMINES ARAUJO",200,1,"","Boleto Amigo","k",""],["r","2025-10",2,"VENDA DE PRODUTOS/ SERVIÇOS","JOAO VICTOR DE SOUSA PESSOA",460,1,"","Boleto Amigo","c",""],["r","2025-07",25,"VENDA DE PRODUTOS/ SERVIÇOS","JOAO VICTOR DE SOUSA PESSOA",460,1,"","Boleto Amigo","k",""],["r","2025-09",30,"VENDA DE PRODUTOS/ SERVIÇOS","DEUSIMAR RODRIGUES NASCIMENTO",200,1,"","Boleto Amigo","c",""],["r","2025-09",30,"VENDA DE PRODUTOS/ SERVIÇOS","DEUSIMAR RODRIGUES NASCIMENTO",200,1,"","Boleto Amigo","k",""],["r","2025-09",29,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO EDVALDO ARAUJO JUNIOR",200,1,"","Boleto Amigo","c",""],["r","2025-09",29,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO EDVALDO ARAUJO JUNIOR",200,1,"","Boleto Amigo","k",""],["r","2025-09",29,"VENDA DE PRODUTOS/ SERVIÇOS","WILIAN GALVAO",200,1,"","Boleto Amigo","c",""],["r","2025-09",29,"VENDA DE PRODUTOS/ SERVIÇOS","WILIAN GALVAO",200,1,"","Boleto Amigo","k",""],["r","2025-10",1,"VENDA DE PRODUTOS/ SERVIÇOS","BENAVINUTA DE SOUZA OLIVEIRA",383.33,1,"","Boleto Amigo","c",""],["r","2025-06",27,"VENDA DE PRODUTOS/ SERVIÇOS","BENAVINUTA DE SOUZA OLIVEIRA",383.33,1,"","Boleto Amigo","k",""],["r","2025-09",26,"VENDA DE PRODUTOS/ SERVIÇOS","MARAYZA KARLA DA SILVA NERY",200,1,"","Boleto Amigo","c",""],["r","2025-09",26,"VENDA DE PRODUTOS/ SERVIÇOS","MARAYZA KARLA DA SILVA NERY",200,1,"","Boleto Amigo","k",""],["r","2025-09",26,"VENDA DE PRODUTOS/ SERVIÇOS","JESSYCA DE MATTOS CARNEIRO SILVERIO",2300,1,"","Boleto Amigo","c",""],["r","2025-09",26,"VENDA DE PRODUTOS/ SERVIÇOS","JESSYCA DE MATTOS CARNEIRO SILVERIO",2300,1,"","Boleto Amigo","k",""],["r","2025-09",30,"VENDA DE PRODUTOS/ SERVIÇOS","ZEFERINO FONSECA MORAES FILHO",395.08,1,"","Boleto Amigo","c",""],["r","2025-04",4,"VENDA DE PRODUTOS/ SERVIÇOS","ZEFERINO FONSECA MORAES FILHO",395.08,1,"","Boleto Amigo","k",""],["r","2025-09",25,"VENDA DE PRODUTOS/ SERVIÇOS","CARLOS ALBERTO FERREIRA DA SILVA",383.35,0,"","Boleto Amigo","c",""],["r","2025-03",12,"VENDA DE PRODUTOS/ SERVIÇOS","CARLOS ALBERTO FERREIRA DA SILVA",383.35,0,"","Boleto Amigo","k",""],["r","2025-09",26,"VENDA DE PRODUTOS/ SERVIÇOS","JADSON CARLOS DE OLIVEIRA SATURNINO",383.33,1,"","Boleto Amigo","c",""],["r","2025-06",24,"VENDA DE PRODUTOS/ SERVIÇOS","JADSON CARLOS DE OLIVEIRA SATURNINO",383.33,1,"","Boleto Amigo","k",""],["r","2025-08",18,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO SILVA CARNEIRO",383.35,1,"","Boleto Amigo","c",""],["r","2025-03",25,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO SILVA CARNEIRO",383.35,1,"","Boleto Amigo","k",""],["r","2025-09",30,"VENDA DE PRODUTOS/ SERVIÇOS","GLEILTON LOPES SILAS",395.08,1,"","Boleto Amigo","c",""],["r","2025-06",27,"VENDA DE PRODUTOS/ SERVIÇOS","GLEILTON LOPES SILAS",395.08,1,"","Boleto Amigo","k",""],["r","2025-09",29,"VENDA DE PRODUTOS/ SERVIÇOS","NANCI MARIA SILVEIRA CAMPOS",383.33,1,"","Boleto Amigo","c",""],["r","2025-08",7,"VENDA DE PRODUTOS/ SERVIÇOS","NANCI MARIA SILVEIRA CAMPOS",383.33,1,"","Boleto Amigo","k",""],["r","2025-09",29,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO WYTAMAR COELHO DA SILVA CRUZ",383.33,1,"","Boleto Amigo","c",""],["r","2025-08",20,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO WYTAMAR COELHO DA SILVA CRUZ",383.33,1,"","Boleto Amigo","k",""],["r","2025-09",29,"VENDA DE PRODUTOS/ SERVIÇOS","TIANA CARLA FABICHACKI LOPES",383.35,1,"","Boleto Amigo","c",""],["r","2025-03",19,"VENDA DE PRODUTOS/ SERVIÇOS","TIANA CARLA FABICHACKI LOPES",383.35,1,"","Boleto Amigo","k",""],["r","2025-10",2,"VENDA DE PRODUTOS/ SERVIÇOS","JOÃO CARLOS MORENO DE CARVALHO",396.15,1,"","Boleto Amigo","c",""],["r","2025-03",17,"VENDA DE PRODUTOS/ SERVIÇOS","JOÃO CARLOS MORENO DE CARVALHO",396.15,1,"","Boleto Amigo","k",""],["r","2025-09",29,"VENDA DE PRODUTOS/ SERVIÇOS","GORETE PEREIRA DOS SANTOS LIMA",366.67,1,"","Boleto Amigo","c",""],["r","2025-06",26,"VENDA DE PRODUTOS/ SERVIÇOS","GORETE PEREIRA DOS SANTOS LIMA",366.67,1,"","Boleto Amigo","k",""],["r","2025-09",25,"VENDA DE PRODUTOS/ SERVIÇOS","CAMILA GABRIELE CORREA NEVES",383.33,0,"","Boleto Amigo","c",""],["r","2025-06",23,"VENDA DE PRODUTOS/ SERVIÇOS","CAMILA GABRIELE CORREA NEVES",383.33,0,"","Boleto Amigo","k",""],["r","2025-09",29,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA ELBA CORDEIRO DA CRUZ DE SOUSA",383.33,1,"","Boleto Amigo","c",""],["r","2025-08",8,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA ELBA CORDEIRO DA CRUZ DE SOUSA",383.33,1,"","Boleto Amigo","k",""],["r","2025-09",29,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA ALNEIDE DE CALDAS ALMEIDE",383.33,1,"","Boleto Amigo","c",""],["r","2025-05",27,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA ALNEIDE DE CALDAS ALMEIDE",383.33,1,"","Boleto Amigo","k",""],["r","2025-09",25,"VENDA DE PRODUTOS/ SERVIÇOS","CLEBER DE JESUS MACHADO",383.3,1,"","Boleto Amigo","c",""],["r","2025-05",30,"VENDA DE PRODUTOS/ SERVIÇOS","CLEBER DE JESUS MACHADO",383.3,1,"","Boleto Amigo","k",""],["r","2025-09",19,"VENDA DE PRODUTOS/ SERVIÇOS","JOSIAS DOS SANTOS RODRIGUES",383.33,1,"","Boleto Amigo","c",""],["r","2025-08",27,"VENDA DE PRODUTOS/ SERVIÇOS","JOSIAS DOS SANTOS RODRIGUES",383.33,1,"","Boleto Amigo","k",""],["r","2025-09",26,"VENDA DE PRODUTOS/ SERVIÇOS","HENRIQUE RAMOS GUIMARAES",383.33,1,"","Boleto Amigo","c",""],["r","2025-07",10,"VENDA DE PRODUTOS/ SERVIÇOS","HENRIQUE RAMOS GUIMARAES",383.33,1,"","Boleto Amigo","k",""],["r","2025-10",3,"VENDA DE PRODUTOS/ SERVIÇOS","CLEBIANO RAMALHO DA SILVA",344.64,1,"","Boleto Amigo","c",""],["r","2025-06",13,"VENDA DE PRODUTOS/ SERVIÇOS","CLEBIANO RAMALHO DA SILVA",344.64,1,"","Boleto Amigo","k",""],["r","2025-09",30,"VENDA DE PRODUTOS/ SERVIÇOS","LUIZ PAULO BARBOSA DA SILVA",395.08,1,"","Boleto Amigo","c",""],["r","2025-04",29,"VENDA DE PRODUTOS/ SERVIÇOS","LUIZ PAULO BARBOSA DA SILVA",395.08,1,"","Boleto Amigo","k",""],["r","2025-09",29,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE AELITON DA SILVA",383.33,1,"","Boleto Amigo","c",""],["r","2025-06",5,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE AELITON DA SILVA",383.33,1,"","Boleto Amigo","k",""],["r","2025-10",7,"VENDA DE PRODUTOS/ SERVIÇOS","DAJANN GARDELL MOREIRA CHAVES",396.9,1,"","Boleto Amigo","c",""],["r","2025-04",30,"VENDA DE PRODUTOS/ SERVIÇOS","DAJANN GARDELL MOREIRA CHAVES",396.9,1,"","Boleto Amigo","k",""],["r","2025-10",1,"VENDA DE PRODUTOS/ SERVIÇOS","ROGERIO ARLINDO DO CARMO RIBEIRO",395.86,1,"","Boleto Amigo","c",""],["r","2025-05",30,"VENDA DE PRODUTOS/ SERVIÇOS","ROGERIO ARLINDO DO CARMO RIBEIRO",395.86,1,"","Boleto Amigo","k",""],["r","2025-09",29,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA MAYLMA TORRES SARAIVA",383.33,1,"","Boleto Amigo","c",""],["r","2025-08",26,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA MAYLMA TORRES SARAIVA",383.33,1,"","Boleto Amigo","k",""],["r","2025-10",9,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA LUCIDALVA CALAZANS SANTOS",397.94,1,"","Boleto Amigo","c",""],["r","2025-04",24,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA LUCIDALVA CALAZANS SANTOS",397.94,1,"","Boleto Amigo","k",""],["r","2025-09",25,"VENDA DE PRODUTOS/ SERVIÇOS","ZENILDO DA SILVA SANTOS",200,1,"","Boleto Amigo","c",""],["r","2025-09",25,"VENDA DE PRODUTOS/ SERVIÇOS","ZENILDO DA SILVA SANTOS",200,1,"","Boleto Amigo","k",""],["r","2025-09",24,"VENDA DE PRODUTOS/ SERVIÇOS","FERNANDO HENRIQUE PEDROZO DE CAMPOS",500,1,"","Boleto Amigo","c",""],["r","2025-09",24,"VENDA DE PRODUTOS/ SERVIÇOS","FERNANDO HENRIQUE PEDROZO DE CAMPOS",500,1,"","Boleto Amigo","k",""],["r","2025-09",29,"VENDA DE PRODUTOS/ SERVIÇOS","MARIANY DE SOUSA GALVAO",383.33,1,"","Boleto Amigo","c",""],["r","2025-07",14,"VENDA DE PRODUTOS/ SERVIÇOS","MARIANY DE SOUSA GALVAO",383.33,1,"","Boleto Amigo","k",""],["r","2025-09",29,"VENDA DE PRODUTOS/ SERVIÇOS","JAILSON SILVA DOS SANTOS",383.33,1,"","Boleto Amigo","c",""],["r","2025-08",12,"VENDA DE PRODUTOS/ SERVIÇOS","JAILSON SILVA DOS SANTOS",383.33,1,"","Boleto Amigo","k",""],["r","2025-09",24,"VENDA DE PRODUTOS/ SERVIÇOS","GEOVAN TEIXEIRA DA SILVA",383.33,1,"","Boleto Amigo","c",""],["r","2025-05",8,"VENDA DE PRODUTOS/ SERVIÇOS","GEOVAN TEIXEIRA DA SILVA",383.33,1,"","Boleto Amigo","k",""],["r","2025-10",1,"VENDA DE PRODUTOS/ SERVIÇOS","INEIAS ABRAAO DOS SANTOS BENJAMIM",395.86,1,"","Boleto Amigo","c",""],["r","2025-07",16,"VENDA DE PRODUTOS/ SERVIÇOS","INEIAS ABRAAO DOS SANTOS BENJAMIM",395.86,1,"","Boleto Amigo","k",""],["r","2025-09",29,"VENDA DE PRODUTOS/ SERVIÇOS","SAMUEL SALES SILVA",383.33,1,"","Boleto Amigo","c",""],["r","2025-08",6,"VENDA DE PRODUTOS/ SERVIÇOS","SAMUEL SALES SILVA",383.33,1,"","Boleto Amigo","k",""],["r","2025-10",1,"VENDA DE PRODUTOS/ SERVIÇOS","CLEGINALDO OLIVEIRA DA SILVA",395.86,1,"","Boleto Amigo","c",""],["r","2025-08",21,"VENDA DE PRODUTOS/ SERVIÇOS","CLEGINALDO OLIVEIRA DA SILVA",395.86,1,"","Boleto Amigo","k",""],["r","2025-09",24,"VENDA DE PRODUTOS/ SERVIÇOS","CRISTIANO REIS DA SILVA",200,1,"","Boleto Amigo","c",""],["r","2025-09",24,"VENDA DE PRODUTOS/ SERVIÇOS","CRISTIANO REIS DA SILVA",200,1,"","Boleto Amigo","k",""],["r","2025-09",24,"VENDA DE PRODUTOS/ SERVIÇOS","JOAO FRANCISCO CAMPOS COSTA NETO",200,1,"","Boleto Amigo","c",""],["r","2025-09",26,"VENDA DE PRODUTOS/ SERVIÇOS","JOAO FRANCISCO CAMPOS COSTA NETO",200,1,"","Boleto Amigo","k",""],["r","2025-09",24,"VENDA DE PRODUTOS/ SERVIÇOS","TACIANE DE SOUZA LIMA",500,1,"","Boleto Amigo","c",""],["r","2025-09",24,"VENDA DE PRODUTOS/ SERVIÇOS","TACIANE DE SOUZA LIMA",500,1,"","Boleto Amigo","k",""],["r","2025-09",24,"VENDA DE PRODUTOS/ SERVIÇOS","EDILEUDO VIEIRA BARROSO",2500,1,"","Boleto Amigo","c",""],["r","2025-09",24,"VENDA DE PRODUTOS/ SERVIÇOS","EDILEUDO VIEIRA BARROSO",2500,1,"","Boleto Amigo","k",""],["r","2025-09",25,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA URSULA RIOS CARNEIRO",383.33,1,"","Boleto Amigo","c",""],["r","2025-06",30,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA URSULA RIOS CARNEIRO",383.33,1,"","Boleto Amigo","k",""],["r","2025-09",23,"VENDA DE PRODUTOS/ SERVIÇOS","GABRIEL CRUZ DOS REIS",200,1,"","Boleto Amigo","c",""],["r","2025-09",23,"VENDA DE PRODUTOS/ SERVIÇOS","GABRIEL CRUZ DOS REIS",200,1,"","Boleto Amigo","k",""],["r","2025-09",23,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO DE ASSIS DA SILVA",100,1,"","Boleto Amigo","c",""],["r","2025-09",23,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO DE ASSIS DA SILVA",100,1,"","Boleto Amigo","k",""],["r","2025-09",23,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO DE ASSIS DA SILVA",200,1,"","Boleto Amigo","c",""],["r","2025-09",23,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO DE ASSIS DA SILVA",200,1,"","Boleto Amigo","k",""],["r","2025-10",28,"VENDA DE PRODUTOS/ SERVIÇOS","MAX SERGIO SANTOS MOREIRA JUNIOR",385.67,1,"","Boleto Amigo","c",""],["r","2025-08",20,"VENDA DE PRODUTOS/ SERVIÇOS","MAX SERGIO SANTOS MOREIRA JUNIOR",385.67,1,"","Boleto Amigo","k",""],["r","2025-09",24,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE CANTANHEDE MAGALHAES FILHO",500,1,"","Boleto Amigo","c",""],["r","2025-07",21,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE CANTANHEDE MAGALHAES FILHO",500,1,"","Boleto Amigo","k",""],["r","2025-09",24,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO PEDRO NETO",383.33,1,"","Boleto Amigo","c",""],["r","2025-08",1,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO PEDRO NETO",383.33,1,"","Boleto Amigo","k",""],["r","2025-09",5,"VENDA DE PRODUTOS/ SERVIÇOS","KATIANA FELIX ALMEIDA",383.33,1,"","Boleto Amigo","c",""],["r","2025-04",15,"VENDA DE PRODUTOS/ SERVIÇOS","KATIANA FELIX ALMEIDA",383.33,1,"","Boleto Amigo","k",""],["r","2025-09",17,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE MANOEL DOS SANTOS JUNIOR",383.33,1,"","Boleto Amigo","c",""],["r","2025-06",20,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE MANOEL DOS SANTOS JUNIOR",383.33,1,"","Boleto Amigo","k",""],["r","2025-09",24,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GOMES DIAS",383.33,1,"","Boleto Amigo","c",""],["r","2025-04",22,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GOMES DIAS",383.33,1,"","Boleto Amigo","k",""],["r","2025-09",20,"VENDA DE PRODUTOS/ SERVIÇOS","DELYNE DO VALE MARTINS BARROSO",200,1,"","Boleto Amigo","c",""],["r","2025-09",20,"VENDA DE PRODUTOS/ SERVIÇOS","DELYNE DO VALE MARTINS BARROSO",200,1,"","Boleto Amigo","k",""],["r","2025-10",6,"VENDA DE PRODUTOS/ SERVIÇOS","CARLOS ALBERTO ALENCAR DE SOUSA",397.42,1,"","Boleto Amigo","c",""],["r","2025-08",19,"VENDA DE PRODUTOS/ SERVIÇOS","CARLOS ALBERTO ALENCAR DE SOUSA",397.42,1,"","Boleto Amigo","k",""],["r","2025-10",28,"VENDA DE PRODUTOS/ SERVIÇOS","MAX SERGIO SANTOS MOREIRA JUNIOR",385.67,1,"","Boleto Amigo","c",""],["r","2025-08",20,"VENDA DE PRODUTOS/ SERVIÇOS","MAX SERGIO SANTOS MOREIRA JUNIOR",385.67,1,"","Boleto Amigo","k",""],["r","2025-09",19,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GILSON CASTRO DE ALMEIDA",300,1,"","Boleto Amigo","c",""],["r","2025-09",19,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GILSON CASTRO DE ALMEIDA",300,1,"","Boleto Amigo","k",""],["r","2025-09",19,"VENDA DE PRODUTOS/ SERVIÇOS","GERONIMO DA SILVA ALCANTARA",200,1,"","Boleto Amigo","c",""],["r","2025-09",19,"VENDA DE PRODUTOS/ SERVIÇOS","GERONIMO DA SILVA ALCANTARA",200,1,"","Boleto Amigo","k",""],["r","2025-09",18,"VENDA DE PRODUTOS/ SERVIÇOS","LEANDRO FEITOSA FARIAS",500,1,"","Boleto Amigo","c",""],["r","2025-09",18,"VENDA DE PRODUTOS/ SERVIÇOS","LEANDRO FEITOSA FARIAS",500,1,"","Boleto Amigo","k",""],["r","2025-09",18,"VENDA DE PRODUTOS/ SERVIÇOS","ENILSON MORAES COSTA",200,1,"","Boleto Amigo","c",""],["r","2025-09",18,"VENDA DE PRODUTOS/ SERVIÇOS","ENILSON MORAES COSTA",200,1,"","Boleto Amigo","k",""],["r","2025-09",18,"VENDA DE PRODUTOS/ SERVIÇOS","R3 BRINDES CONFECCOES LTDA ME",200,1,"","Boleto Amigo","c",""],["r","2025-09",18,"VENDA DE PRODUTOS/ SERVIÇOS","R3 BRINDES CONFECCOES LTDA ME",200,1,"","Boleto Amigo","k",""],["r","2025-09",17,"VENDA DE PRODUTOS/ SERVIÇOS","MARQUELE SOUSA ALMEIDA",200,1,"","Boleto Amigo","c",""],["r","2025-09",18,"VENDA DE PRODUTOS/ SERVIÇOS","MARQUELE SOUSA ALMEIDA",200,1,"","Boleto Amigo","k",""],["r","2025-09",17,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA FRANCILENE ALVES DA SILVA LIMA",250,1,"","Boleto Amigo","c",""],["r","2025-09",17,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA FRANCILENE ALVES DA SILVA LIMA",250,1,"","Boleto Amigo","k",""],["r","2025-09",17,"VENDA DE PRODUTOS/ SERVIÇOS","KAIQUE PINHEIRO LEITE",500,1,"","Boleto Amigo","c",""],["r","2025-09",18,"VENDA DE PRODUTOS/ SERVIÇOS","KAIQUE PINHEIRO LEITE",500,1,"","Boleto Amigo","k",""],["r","2025-09",24,"VENDA DE PRODUTOS/ SERVIÇOS","WEDNEY MARTINS",475.66,1,"","Boleto Amigo","c",""],["r","2025-07",16,"VENDA DE PRODUTOS/ SERVIÇOS","WEDNEY MARTINS",475.66,1,"","Boleto Amigo","k",""],["r","2025-09",16,"VENDA DE PRODUTOS/ SERVIÇOS","MARCIO JOSE ARAUJO POLICARPO",200,1,"","Boleto Amigo","c",""],["r","2025-09",16,"VENDA DE PRODUTOS/ SERVIÇOS","MARCIO JOSE ARAUJO POLICARPO",200,1,"","Boleto Amigo","k",""],["r","2025-09",17,"VENDA DE PRODUTOS/ SERVIÇOS","DANIELE FERREIRA DO NASCIMENTO",383.33,1,"","Boleto Amigo","c",""],["r","2025-08",25,"VENDA DE PRODUTOS/ SERVIÇOS","DANIELE FERREIRA DO NASCIMENTO",383.33,1,"","Boleto Amigo","k",""],["r","2025-09",10,"VENDA DE PRODUTOS/ SERVIÇOS","LEONARDO CASTRO DE JESUS",383.33,1,"","Boleto Amigo","c",""],["r","2025-06",11,"VENDA DE PRODUTOS/ SERVIÇOS","LEONARDO CASTRO DE JESUS",383.33,1,"","Boleto Amigo","k",""],["r","2025-08",15,"VENDA DE PRODUTOS/ SERVIÇOS","WILLAME COSTA NUNES",383.33,1,"","Boleto Amigo","c",""],["r","2025-05",13,"VENDA DE PRODUTOS/ SERVIÇOS","WILLAME COSTA NUNES",383.33,1,"","Boleto Amigo","k",""],["r","2025-10",8,"VENDA DE PRODUTOS/ SERVIÇOS","KAIO CESAR FREITAS PEREIRA",400.28,1,"","Boleto Amigo","c",""],["r","2025-06",4,"VENDA DE PRODUTOS/ SERVIÇOS","KAIO CESAR FREITAS PEREIRA",400.28,1,"","Boleto Amigo","k",""],["r","2025-09",9,"VENDA DE PRODUTOS/ SERVIÇOS","JOELCE FIGUEREDO DE ARAUJO",383.33,1,"","Boleto Amigo","c",""],["r","2025-05",12,"VENDA DE PRODUTOS/ SERVIÇOS","JOELCE FIGUEREDO DE ARAUJO",383.33,1,"","Boleto Amigo","k",""],["r","2025-09",17,"VENDA DE PRODUTOS/ SERVIÇOS","SIDINELIO NASCIMENTO PIRES",358.33,1,"","Boleto Amigo","c",""],["r","2025-08",8,"VENDA DE PRODUTOS/ SERVIÇOS","SIDINELIO NASCIMENTO PIRES",358.33,1,"","Boleto Amigo","k",""],["r","2025-09",18,"VENDA DE PRODUTOS/ SERVIÇOS","ISMAEL DA SILVA SANTOS",395.08,1,"","Boleto Amigo","c",""],["r","2025-08",18,"VENDA DE PRODUTOS/ SERVIÇOS","ISMAEL DA SILVA SANTOS",395.08,1,"","Boleto Amigo","k",""],["r","2025-09",17,"VENDA DE PRODUTOS/ SERVIÇOS","SIMONE OLIVEIRA SILVA",383.33,1,"","Boleto Amigo","c",""],["r","2025-06",30,"VENDA DE PRODUTOS/ SERVIÇOS","SIMONE OLIVEIRA SILVA",383.33,1,"","Boleto Amigo","k",""],["r","2025-09",11,"VENDA DE PRODUTOS/ SERVIÇOS","JOAO VICTOR SOUZA VILHENA",200,1,"","Boleto Amigo","c",""],["r","2025-09",15,"VENDA DE PRODUTOS/ SERVIÇOS","JOAO VICTOR SOUZA VILHENA",200,1,"","Boleto Amigo","k",""],["r","2025-09",17,"VENDA DE PRODUTOS/ SERVIÇOS","MARCIO MENDES RODRIGUES",366.67,1,"","Boleto Amigo","c",""],["r","2025-08",8,"VENDA DE PRODUTOS/ SERVIÇOS","MARCIO MENDES RODRIGUES",366.67,1,"","Boleto Amigo","k",""],["r","2025-09",23,"VENDA DE PRODUTOS/ SERVIÇOS","NATANAEL DIVINO ALVES",395.86,1,"","Boleto Amigo","c",""],["r","2025-06",27,"VENDA DE PRODUTOS/ SERVIÇOS","NATANAEL DIVINO ALVES",395.86,1,"","Boleto Amigo","k",""],["r","2025-09",19,"VENDA DE PRODUTOS/ SERVIÇOS","NAYLTON OLIVEIRA DA SILVA",343.76,1,"","Boleto Amigo","c",""],["r","2025-07",16,"VENDA DE PRODUTOS/ SERVIÇOS","NAYLTON OLIVEIRA DA SILVA",343.76,1,"","Boleto Amigo","k",""],["r","2025-09",8,"VENDA DE PRODUTOS/ SERVIÇOS","NADIR ALVES TEIXEIRA",383.33,1,"","Boleto Amigo","c",""],["r","2025-06",25,"VENDA DE PRODUTOS/ SERVIÇOS","NADIR ALVES TEIXEIRA",383.33,1,"","Boleto Amigo","k",""],["r","2025-09",12,"VENDA DE PRODUTOS/ SERVIÇOS","GERUSA CONDE DUARTE",200,1,"","Boleto Amigo","c",""],["r","2025-09",12,"VENDA DE PRODUTOS/ SERVIÇOS","GERUSA CONDE DUARTE",200,1,"","Boleto Amigo","k",""],["r","2025-09",12,"VENDA DE PRODUTOS/ SERVIÇOS","MARCOS COSTA MARQUES",200,1,"","Boleto Amigo","c",""],["r","2025-09",12,"VENDA DE PRODUTOS/ SERVIÇOS","MARCOS COSTA MARQUES",200,1,"","Boleto Amigo","k",""],["r","2025-09",12,"VENDA DE PRODUTOS/ SERVIÇOS","EDNA UCHOA DE MORAIS",1000,1,"","Boleto Amigo","c",""],["r","2025-09",12,"VENDA DE PRODUTOS/ SERVIÇOS","EDNA UCHOA DE MORAIS",1000,1,"","Boleto Amigo","k",""],["r","2025-09",11,"VENDA DE PRODUTOS/ SERVIÇOS","ERBANO VELOSO HOLANDA",200,1,"","Boleto Amigo","c",""],["r","2025-09",11,"VENDA DE PRODUTOS/ SERVIÇOS","ERBANO VELOSO HOLANDA",200,1,"","Boleto Amigo","k",""],["r","2025-09",11,"VENDA DE PRODUTOS/ SERVIÇOS","EUZIMAR RIBEIRO ALVES",200,1,"","Boleto Amigo","c",""],["r","2025-09",11,"VENDA DE PRODUTOS/ SERVIÇOS","EUZIMAR RIBEIRO ALVES",200,1,"","Boleto Amigo","k",""],["r","2025-09",22,"VENDA DE PRODUTOS/ SERVIÇOS","ROBERTO AGENOR DOS SANTOS",396.9,1,"","Boleto Amigo","c",""],["r","2025-07",17,"VENDA DE PRODUTOS/ SERVIÇOS","ROBERTO AGENOR DOS SANTOS",396.9,1,"","Boleto Amigo","k",""],["r","2025-09",10,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA MARGARIDA DA SILVA",383.33,1,"","Boleto Amigo","c",""],["r","2025-05",23,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA MARGARIDA DA SILVA",383.33,1,"","Boleto Amigo","k",""],["r","2025-09",12,"VENDA DE PRODUTOS/ SERVIÇOS","ALEXANDRE MARRON ARRUDA",383.33,1,"","Boleto Amigo","c",""],["r","2025-06",17,"VENDA DE PRODUTOS/ SERVIÇOS","ALEXANDRE MARRON ARRUDA",383.33,1,"","Boleto Amigo","k",""],["r","2025-09",12,"VENDA DE PRODUTOS/ SERVIÇOS","DENISE GRACA DOS SANTOS",383.33,1,"","Boleto Amigo","c",""],["r","2025-06",19,"VENDA DE PRODUTOS/ SERVIÇOS","DENISE GRACA DOS SANTOS",383.33,1,"","Boleto Amigo","k",""],["r","2025-09",8,"VENDA DE PRODUTOS/ SERVIÇOS","GENESINA ALVES NETA",383.33,1,"","Boleto Amigo","c",""],["r","2025-05",8,"VENDA DE PRODUTOS/ SERVIÇOS","GENESINA ALVES NETA",383.33,1,"","Boleto Amigo","k",""],["r","2025-09",12,"VENDA DE PRODUTOS/ SERVIÇOS","JULIO MICHAEL NUNES VENANCIO",500,1,"","Boleto Amigo","c",""],["r","2025-08",21,"VENDA DE PRODUTOS/ SERVIÇOS","JULIO MICHAEL NUNES VENANCIO",500,1,"","Boleto Amigo","k",""],["r","2025-09",12,"VENDA DE PRODUTOS/ SERVIÇOS","CLEGINALDO OLIVEIRA DA SILVA",383.33,1,"","Boleto Amigo","c",""],["r","2025-08",21,"VENDA DE PRODUTOS/ SERVIÇOS","CLEGINALDO OLIVEIRA DA SILVA",383.33,1,"","Boleto Amigo","k",""],["r","2025-08",13,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO ALEXANDRE MEDEIROS SANTANA",300,1,"","Boleto Amigo","c",""],["r","2025-07",28,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO ALEXANDRE MEDEIROS SANTANA",300,1,"","Boleto Amigo","k",""],["r","2025-09",3,"VENDA DE PRODUTOS/ SERVIÇOS","ESTER ALVES CAMELO",383.33,1,"","Boleto Amigo","c",""],["r","2025-05",30,"VENDA DE PRODUTOS/ SERVIÇOS","ESTER ALVES CAMELO",383.33,1,"","Boleto Amigo","k",""],["r","2025-09",10,"VENDA DE PRODUTOS/ SERVIÇOS","ANGELA MARIA LIMA SALES",200,1,"","Boleto Amigo","c",""],["r","2025-09",10,"VENDA DE PRODUTOS/ SERVIÇOS","ANGELA MARIA LIMA SALES",200,1,"","Boleto Amigo","k",""],["r","2025-09",9,"VENDA DE PRODUTOS/ SERVIÇOS","SAMUEL FERREIRA RAMOS",383.33,1,"","Boleto Amigo","c",""],["r","2025-04",24,"VENDA DE PRODUTOS/ SERVIÇOS","SAMUEL FERREIRA RAMOS",383.33,1,"","Boleto Amigo","k",""],["r","2025-09",10,"VENDA DE PRODUTOS/ SERVIÇOS","VANIA DA SILVA MEIRELLES",383.35,1,"","Boleto Amigo","c",""],["r","2025-03",7,"VENDA DE PRODUTOS/ SERVIÇOS","VANIA DA SILVA MEIRELLES",383.35,1,"","Boleto Amigo","k",""],["r","2025-09",10,"VENDA DE PRODUTOS/ SERVIÇOS","SERGIO RUFINO DE FREITAS",300,1,"","Boleto Amigo","c",""],["r","2025-09",10,"VENDA DE PRODUTOS/ SERVIÇOS","SERGIO RUFINO DE FREITAS",300,1,"","Boleto Amigo","k",""],["r","2025-09",10,"VENDA DE PRODUTOS/ SERVIÇOS","SERGIO RUFINO DE FREITAS",300,1,"","Boleto Amigo","c",""],["r","2025-09",10,"VENDA DE PRODUTOS/ SERVIÇOS","SERGIO RUFINO DE FREITAS",300,1,"","Boleto Amigo","k",""],["r","2025-09",12,"VENDA DE PRODUTOS/ SERVIÇOS","DENISE GRACA DOS SANTOS",383.33,1,"","Boleto Amigo","c",""],["r","2025-06",17,"VENDA DE PRODUTOS/ SERVIÇOS","DENISE GRACA DOS SANTOS",383.33,1,"","Boleto Amigo","k",""],["r","2025-09",9,"VENDA DE PRODUTOS/ SERVIÇOS","LANA THAYNI SILVA MENEZES",200,1,"","Boleto Amigo","c",""],["r","2025-09",9,"VENDA DE PRODUTOS/ SERVIÇOS","LANA THAYNI SILVA MENEZES",200,1,"","Boleto Amigo","k",""],["r","2025-09",11,"VENDA DE PRODUTOS/ SERVIÇOS","SANCHEZ FERREIRA DE LIMA",395.86,1,"","Boleto Amigo","c",""],["r","2025-05",28,"VENDA DE PRODUTOS/ SERVIÇOS","SANCHEZ FERREIRA DE LIMA",395.86,1,"","Boleto Amigo","k",""],["r","2025-09",9,"VENDA DE PRODUTOS/ SERVIÇOS","MILENA DE OLIVEIRA FERREIA MELO",383.33,1,"","Boleto Amigo","c",""],["r","2025-07",2,"VENDA DE PRODUTOS/ SERVIÇOS","MILENA DE OLIVEIRA FERREIA MELO",383.33,1,"","Boleto Amigo","k",""],["r","2025-10",15,"VENDA DE PRODUTOS/ SERVIÇOS","EFIJANE DE SOUSA OLIVEIRA",369.24,1,"","Boleto Amigo","c",""],["r","2025-08",4,"VENDA DE PRODUTOS/ SERVIÇOS","EFIJANE DE SOUSA OLIVEIRA",369.24,1,"","Boleto Amigo","k",""],["r","2025-09",9,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA DO SOCORRO PAULINO SOUZA",500,1,"","Boleto Amigo","c",""],["r","2025-07",11,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA DO SOCORRO PAULINO SOUZA",500,1,"","Boleto Amigo","k",""],["r","2025-09",10,"VENDA DE PRODUTOS/ SERVIÇOS","GLEIDSON MORAES DO NASCIMENTO",395.6,1,"","Boleto Amigo","c",""],["r","2025-05",6,"VENDA DE PRODUTOS/ SERVIÇOS","GLEIDSON MORAES DO NASCIMENTO",395.6,1,"","Boleto Amigo","k",""],["r","2025-09",5,"VENDA DE PRODUTOS/ SERVIÇOS","FLORISMAR TAVARES BATISTA",383.33,1,"","Boleto Amigo","c",""],["r","2025-05",2,"VENDA DE PRODUTOS/ SERVIÇOS","FLORISMAR TAVARES BATISTA",383.33,1,"","Boleto Amigo","k",""],["r","2025-09",5,"VENDA DE PRODUTOS/ SERVIÇOS","DORISBERTO DE VASCONCELOS ARAUJO",200,1,"","Boleto Amigo","c",""],["r","2025-09",5,"VENDA DE PRODUTOS/ SERVIÇOS","DORISBERTO DE VASCONCELOS ARAUJO",200,1,"","Boleto Amigo","k",""],["r","2025-09",3,"VENDA DE PRODUTOS/ SERVIÇOS","RUAN MATHEUS SOUSA DE MORAIS 38142166000115",200,1,"","Boleto Amigo","c",""],["r","2025-09",3,"VENDA DE PRODUTOS/ SERVIÇOS","RUAN MATHEUS SOUSA DE MORAIS 38142166000115",200,1,"","Boleto Amigo","k",""],["r","2025-09",2,"VENDA DE PRODUTOS/ SERVIÇOS","FELIPE PEREIRA DOS SANTOS",200,1,"","Boleto Amigo","c",""],["r","2025-09",2,"VENDA DE PRODUTOS/ SERVIÇOS","FELIPE PEREIRA DOS SANTOS",200,1,"","Boleto Amigo","k",""],["r","2025-09",2,"VENDA DE PRODUTOS/ SERVIÇOS","REGINALDO CUSTODIO BORGES",2500,1,"","Boleto Amigo","c",""],["r","2025-09",2,"VENDA DE PRODUTOS/ SERVIÇOS","REGINALDO CUSTODIO BORGES",2500,1,"","Boleto Amigo","k",""],["r","2025-09",2,"VENDA DE PRODUTOS/ SERVIÇOS","ANA CRISTINA CORREA PINHEIRO",500,1,"","Boleto Amigo","c",""],["r","2025-09",2,"VENDA DE PRODUTOS/ SERVIÇOS","ANA CRISTINA CORREA PINHEIRO",500,1,"","Boleto Amigo","k",""],["r","2025-09",3,"VENDA DE PRODUTOS/ SERVIÇOS","DEUSNENE LOURENCO DE LIMA",833.34,1,"","Boleto Amigo","c",""],["r","2025-06",30,"VENDA DE PRODUTOS/ SERVIÇOS","DEUSNENE LOURENCO DE LIMA",833.34,1,"","Boleto Amigo","k",""],["r","2025-09",1,"VENDA DE PRODUTOS/ SERVIÇOS","VITOR DA MACENO MIRANDA",200,1,"","Boleto Amigo","c",""],["r","2025-09",1,"VENDA DE PRODUTOS/ SERVIÇOS","VITOR DA MACENO MIRANDA",200,1,"","Boleto Amigo","k",""],["r","2025-09",3,"VENDA DE PRODUTOS/ SERVIÇOS","JOAO VICTOR DE SOUSA PESSOA",460,1,"","Boleto Amigo","c",""],["r","2025-07",25,"VENDA DE PRODUTOS/ SERVIÇOS","JOAO VICTOR DE SOUSA PESSOA",460,1,"","Boleto Amigo","k",""],["r","2025-08",29,"VENDA DE PRODUTOS/ SERVIÇOS","JULIA SANTOS DO NASCIMENTO SOB PROC ELENILTON S NASCIMENTO",200,1,"","Boleto Amigo","c",""],["r","2025-08",20,"VENDA DE PRODUTOS/ SERVIÇOS","JULIA SANTOS DO NASCIMENTO SOB PROC ELENILTON S NASCIMENTO",200,1,"","Boleto Amigo","k",""],["r","2025-08",29,"VENDA DE PRODUTOS/ SERVIÇOS","ELENILTON SANTOS DO NASCIMENTO",250,1,"","Boleto Amigo","c",""],["r","2025-08",20,"VENDA DE PRODUTOS/ SERVIÇOS","ELENILTON SANTOS DO NASCIMENTO",250,1,"","Boleto Amigo","k",""],["r","2025-08",28,"VENDA DE PRODUTOS/ SERVIÇOS","ILEILSON MACIEL DOS REIS",200,1,"","Boleto Amigo","c",""],["r","2025-08",28,"VENDA DE PRODUTOS/ SERVIÇOS","ILEILSON MACIEL DOS REIS",200,1,"","Boleto Amigo","k",""],["r","2025-08",27,"VENDA DE PRODUTOS/ SERVIÇOS","JOSIAS DOS SANTOS RODRIGUES",200,1,"","Boleto Amigo","c",""],["r","2025-08",27,"VENDA DE PRODUTOS/ SERVIÇOS","JOSIAS DOS SANTOS RODRIGUES",200,1,"","Boleto Amigo","k",""],["r","2025-09",1,"VENDA DE PRODUTOS/ SERVIÇOS","BENAVINUTA DE SOUZA OLIVEIRA",395.08,1,"","Boleto Amigo","c",""],["r","2025-06",27,"VENDA DE PRODUTOS/ SERVIÇOS","BENAVINUTA DE SOUZA OLIVEIRA",395.08,1,"","Boleto Amigo","k",""],["r","2025-08",26,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA MAYLMA TORRES SARAIVA",200,1,"","Boleto Amigo","c",""],["r","2025-08",26,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA MAYLMA TORRES SARAIVA",200,1,"","Boleto Amigo","k",""],["r","2025-08",28,"VENDA DE PRODUTOS/ SERVIÇOS","INEIAS ABRAAO DOS SANTOS BENJAMIM",395.08,1,"","Boleto Amigo","c",""],["r","2025-07",16,"VENDA DE PRODUTOS/ SERVIÇOS","INEIAS ABRAAO DOS SANTOS BENJAMIM",395.08,1,"","Boleto Amigo","k",""],["r","2025-08",29,"VENDA DE PRODUTOS/ SERVIÇOS","ZEFERINO FONSECA MORAES FILHO",395.34,1,"","Boleto Amigo","c",""],["r","2025-04",4,"VENDA DE PRODUTOS/ SERVIÇOS","ZEFERINO FONSECA MORAES FILHO",395.34,1,"","Boleto Amigo","k",""],["r","2025-09",1,"VENDA DE PRODUTOS/ SERVIÇOS","MARINA GAMA DA SILVA SOUSA SOB PROC JOSE ALBERTO DE SOUSA F.",395.63,1,"","Boleto Amigo","c",""],["r","2025-02",20,"VENDA DE PRODUTOS/ SERVIÇOS","MARINA GAMA DA SILVA SOUSA SOB PROC JOSE ALBERTO DE SOUSA F.",395.63,1,"","Boleto Amigo","k",""],["r","2025-09",4,"VENDA DE PRODUTOS/ SERVIÇOS","JOÃO CARLOS MORENO DE CARVALHO",396.9,1,"","Boleto Amigo","c",""],["r","2025-03",17,"VENDA DE PRODUTOS/ SERVIÇOS","JOÃO CARLOS MORENO DE CARVALHO",396.9,1,"","Boleto Amigo","k",""],["r","2025-08",27,"VENDA DE PRODUTOS/ SERVIÇOS","TIANA CARLA FABICHACKI LOPES",383.33,1,"","Boleto Amigo","c",""],["r","2025-03",19,"VENDA DE PRODUTOS/ SERVIÇOS","TIANA CARLA FABICHACKI LOPES",383.33,1,"","Boleto Amigo","k",""],["r","2025-08",18,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO SILVA CARNEIRO",383.33,1,"","Boleto Amigo","c",""],["r","2025-03",25,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO SILVA CARNEIRO",383.33,1,"","Boleto Amigo","k",""],["r","2025-08",29,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE AELITON DA SILVA",395.34,1,"","Boleto Amigo","c",""],["r","2025-06",5,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE AELITON DA SILVA",395.34,1,"","Boleto Amigo","k",""],["r","2025-08",22,"VENDA DE PRODUTOS/ SERVIÇOS","DANIELE FERREIRA DO NASCIMENTO",200,1,"","Boleto Amigo","c",""],["r","2025-08",25,"VENDA DE PRODUTOS/ SERVIÇOS","DANIELE FERREIRA DO NASCIMENTO",200,1,"","Boleto Amigo","k",""],["r","2025-08",27,"VENDA DE PRODUTOS/ SERVIÇOS","HENRIQUE RAMOS GUIMARAES",383.33,1,"","Boleto Amigo","c",""],["r","2025-07",10,"VENDA DE PRODUTOS/ SERVIÇOS","HENRIQUE RAMOS GUIMARAES",383.33,1,"","Boleto Amigo","k",""],["r","2025-09",24,"VENDA DE PRODUTOS/ SERVIÇOS","GEDAIAS FERREIRA BRAGA",402.1,1,"","Boleto Amigo","c",""],["r","2025-04",24,"VENDA DE PRODUTOS/ SERVIÇOS","GEDAIAS FERREIRA BRAGA",402.1,1,"","Boleto Amigo","k",""],["r","2025-08",27,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA ALNEIDE DE CALDAS ALMEIDE",383.33,1,"","Boleto Amigo","c",""],["r","2025-05",27,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA ALNEIDE DE CALDAS ALMEIDE",383.33,1,"","Boleto Amigo","k",""],["r","2025-09",8,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA LUCIDALVA CALAZANS SANTOS",397.42,1,"","Boleto Amigo","c",""],["r","2025-04",24,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA LUCIDALVA CALAZANS SANTOS",397.42,1,"","Boleto Amigo","k",""],["r","2025-08",27,"VENDA DE PRODUTOS/ SERVIÇOS","ERENILZA CARVALHO DA SILVA SOUSA",383.33,1,"","Boleto Amigo","c",""],["r","2025-06",4,"VENDA DE PRODUTOS/ SERVIÇOS","ERENILZA CARVALHO DA SILVA SOUSA",383.33,1,"","Boleto Amigo","k",""],["r","2025-08",27,"VENDA DE PRODUTOS/ SERVIÇOS","LUIZ PAULO BARBOSA DA SILVA",383.33,1,"","Boleto Amigo","c",""],["r","2025-04",29,"VENDA DE PRODUTOS/ SERVIÇOS","LUIZ PAULO BARBOSA DA SILVA",383.33,1,"","Boleto Amigo","k",""],["r","2025-09",3,"VENDA DE PRODUTOS/ SERVIÇOS","DAJANN GARDELL MOREIRA CHAVES",396.64,1,"","Boleto Amigo","c",""],["r","2025-04",30,"VENDA DE PRODUTOS/ SERVIÇOS","DAJANN GARDELL MOREIRA CHAVES",396.64,1,"","Boleto Amigo","k",""],["r","2025-08",27,"VENDA DE PRODUTOS/ SERVIÇOS","GEOVAN TEIXEIRA DA SILVA",383.33,1,"","Boleto Amigo","c",""],["r","2025-05",8,"VENDA DE PRODUTOS/ SERVIÇOS","GEOVAN TEIXEIRA DA SILVA",383.33,1,"","Boleto Amigo","k",""],["r","2025-08",28,"VENDA DE PRODUTOS/ SERVIÇOS","ROGERIO ARLINDO DO CARMO RIBEIRO",395.08,1,"","Boleto Amigo","c",""],["r","2025-05",30,"VENDA DE PRODUTOS/ SERVIÇOS","ROGERIO ARLINDO DO CARMO RIBEIRO",395.08,1,"","Boleto Amigo","k",""],["r","2025-08",13,"VENDA DE PRODUTOS/ SERVIÇOS","MARIANY DE SOUSA GALVAO",383.33,1,"","Boleto Amigo","c",""],["r","2025-07",14,"VENDA DE PRODUTOS/ SERVIÇOS","MARIANY DE SOUSA GALVAO",383.33,1,"","Boleto Amigo","k",""],["r","2025-08",27,"VENDA DE PRODUTOS/ SERVIÇOS","CLEBER DE JESUS MACHADO",383.33,1,"","Boleto Amigo","c",""],["r","2025-05",30,"VENDA DE PRODUTOS/ SERVIÇOS","CLEBER DE JESUS MACHADO",383.33,1,"","Boleto Amigo","k",""],["r","2025-09",18,"VENDA DE PRODUTOS/ SERVIÇOS","FC MERCEARIA E DISTRIBUIDORA LTDA",400.54,1,"","Boleto Amigo","c",""],["r","2025-05",21,"VENDA DE PRODUTOS/ SERVIÇOS","FC MERCEARIA E DISTRIBUIDORA LTDA",400.54,1,"","Boleto Amigo","k",""],["r","2025-09",19,"VENDA DE PRODUTOS/ SERVIÇOS","CARLOS ALBERTO FERREIRA DA SILVA",400.8,1,"","Boleto Amigo","c",""],["r","2025-03",12,"VENDA DE PRODUTOS/ SERVIÇOS","CARLOS ALBERTO FERREIRA DA SILVA",400.8,1,"","Boleto Amigo","k",""],["r","2025-08",27,"VENDA DE PRODUTOS/ SERVIÇOS","GORETE PEREIRA DOS SANTOS LIMA",366.67,1,"","Boleto Amigo","c",""],["r","2025-06",26,"VENDA DE PRODUTOS/ SERVIÇOS","GORETE PEREIRA DOS SANTOS LIMA",366.67,1,"","Boleto Amigo","k",""],["r","2025-09",30,"VENDA DE PRODUTOS/ SERVIÇOS","GLEILTON LOPES SILAS",403.14,1,"","Boleto Amigo","c",""],["r","2025-06",27,"VENDA DE PRODUTOS/ SERVIÇOS","GLEILTON LOPES SILAS",403.14,1,"","Boleto Amigo","k",""],["r","2025-09",3,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO PEREIRA DOS SANTOS",396.64,1,"","Boleto Amigo","c",""],["r","2025-06",16,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO PEREIRA DOS SANTOS",396.64,1,"","Boleto Amigo","k",""],["r","2025-08",25,"VENDA DE PRODUTOS/ SERVIÇOS","CAMILA GABRIELE CORREA NEVES",383.33,0,"","Boleto Amigo","c",""],["r","2025-06",23,"VENDA DE PRODUTOS/ SERVIÇOS","CAMILA GABRIELE CORREA NEVES",383.33,0,"","Boleto Amigo","k",""],["r","2025-09",9,"VENDA DE PRODUTOS/ SERVIÇOS","CLEBIANO RAMALHO DA SILVA",345.74,1,"","Boleto Amigo","c",""],["r","2025-06",13,"VENDA DE PRODUTOS/ SERVIÇOS","CLEBIANO RAMALHO DA SILVA",345.74,1,"","Boleto Amigo","k",""],["r","2025-08",27,"VENDA DE PRODUTOS/ SERVIÇOS","JADSON CARLOS DE OLIVEIRA SATURNINO",383.33,1,"","Boleto Amigo","c",""],["r","2025-06",24,"VENDA DE PRODUTOS/ SERVIÇOS","JADSON CARLOS DE OLIVEIRA SATURNINO",383.33,1,"","Boleto Amigo","k",""],["r","2025-08",21,"VENDA DE PRODUTOS/ SERVIÇOS","CLEGINALDO OLIVEIRA DA SILVA",200,1,"","Boleto Amigo","c",""],["r","2025-08",21,"VENDA DE PRODUTOS/ SERVIÇOS","CLEGINALDO OLIVEIRA DA SILVA",200,1,"","Boleto Amigo","k",""],["r","2025-08",21,"VENDA DE PRODUTOS/ SERVIÇOS","CLEGINALDO OLIVEIRA DA SILVA",200,1,"","Boleto Amigo","c",""],["r","2025-08",21,"VENDA DE PRODUTOS/ SERVIÇOS","CLEGINALDO OLIVEIRA DA SILVA",200,1,"","Boleto Amigo","k",""],["r","2025-08",21,"VENDA DE PRODUTOS/ SERVIÇOS","JULIO MICHAEL NUNES VENANCIO",500,1,"","Boleto Amigo","c",""],["r","2025-08",21,"VENDA DE PRODUTOS/ SERVIÇOS","JULIO MICHAEL NUNES VENANCIO",500,1,"","Boleto Amigo","k",""],["r","2025-08",21,"VENDA DE PRODUTOS/ SERVIÇOS","RIBAMAR RIBEIRO DOS REIS",383.33,1,"","Boleto Amigo","c",""],["r","2025-05",19,"VENDA DE PRODUTOS/ SERVIÇOS","RIBAMAR RIBEIRO DOS REIS",383.33,1,"","Boleto Amigo","k",""],["r","2025-08",20,"VENDA DE PRODUTOS/ SERVIÇOS","MAX SERGIO SANTOS MOREIRA JUNIOR",200,1,"","Boleto Amigo","c",""],["r","2025-08",20,"VENDA DE PRODUTOS/ SERVIÇOS","MAX SERGIO SANTOS MOREIRA JUNIOR",200,1,"","Boleto Amigo","k",""],["r","2025-08",20,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO WYTAMAR COELHO DA SILVA CRUZ",200,1,"","Boleto Amigo","c",""],["r","2025-08",20,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO WYTAMAR COELHO DA SILVA CRUZ",200,1,"","Boleto Amigo","k",""],["r","2025-08",22,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE CANTANHEDE MAGALHAES FILHO",500,1,"","Boleto Amigo","c",""],["r","2025-07",21,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE CANTANHEDE MAGALHAES FILHO",500,1,"","Boleto Amigo","k",""],["r","2025-08",22,"VENDA DE PRODUTOS/ SERVIÇOS","ELDER DOS SANTOS FEITOSA",383.33,1,"","Boleto Amigo","c",""],["r","2025-06",18,"VENDA DE PRODUTOS/ SERVIÇOS","ELDER DOS SANTOS FEITOSA",383.33,1,"","Boleto Amigo","k",""],["r","2025-07",9,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE MANOEL DOS SANTOS JUNIOR",383.33,1,"","Boleto Amigo","c",""],["r","2025-06",20,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE MANOEL DOS SANTOS JUNIOR",383.33,1,"","Boleto Amigo","k",""],["r","2025-08",13,"VENDA DE PRODUTOS/ SERVIÇOS","KATIANA FELIX ALMEIDA",383.33,1,"","Boleto Amigo","c",""],["r","2025-04",15,"VENDA DE PRODUTOS/ SERVIÇOS","KATIANA FELIX ALMEIDA",383.33,1,"","Boleto Amigo","k",""],["r","2025-08",18,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE MANOEL DOS SANTOS JUNIOR",383.33,1,"","Boleto Amigo","c",""],["r","2025-06",20,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE MANOEL DOS SANTOS JUNIOR",383.33,1,"","Boleto Amigo","k",""],["r","2025-08",20,"VENDA DE PRODUTOS/ SERVIÇOS","MAX SERGIO SANTOS MOREIRA JUNIOR",200,1,"","Boleto Amigo","c",""],["r","2025-08",20,"VENDA DE PRODUTOS/ SERVIÇOS","MAX SERGIO SANTOS MOREIRA JUNIOR",200,1,"","Boleto Amigo","k",""],["r","2025-08",25,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GOMES DIAS",395.08,1,"","Boleto Amigo","c",""],["r","2025-04",22,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GOMES DIAS",395.08,1,"","Boleto Amigo","k",""],["r","2025-08",18,"VENDA DE PRODUTOS/ SERVIÇOS","ISMAEL DA SILVA SANTOS",200,1,"","Boleto Amigo","c",""],["r","2025-08",18,"VENDA DE PRODUTOS/ SERVIÇOS","ISMAEL DA SILVA SANTOS",200,1,"","Boleto Amigo","k",""],["r","2025-08",18,"VENDA DE PRODUTOS/ SERVIÇOS","CARLOS ALBERTO ALENCAR DE SOUSA",200,1,"","Boleto Amigo","c",""],["r","2025-08",19,"VENDA DE PRODUTOS/ SERVIÇOS","CARLOS ALBERTO ALENCAR DE SOUSA",200,1,"","Boleto Amigo","k",""],["r","2025-08",20,"VENDA DE PRODUTOS/ SERVIÇOS","WEDNEY MARTINS",460,1,"","Boleto Amigo","c",""],["r","2025-07",16,"VENDA DE PRODUTOS/ SERVIÇOS","WEDNEY MARTINS",460,1,"","Boleto Amigo","k",""],["r","2025-08",18,"VENDA DE PRODUTOS/ SERVIÇOS","LEANDRO DE ALMEIDA RIBEIRO",460,1,"","Boleto Amigo","c",""],["r","2025-07",23,"VENDA DE PRODUTOS/ SERVIÇOS","LEANDRO DE ALMEIDA RIBEIRO",460,1,"","Boleto Amigo","k",""],["r","2025-08",19,"VENDA DE PRODUTOS/ SERVIÇOS","SIMONE OLIVEIRA SILVA",383.33,1,"","Boleto Amigo","c",""],["r","2025-06",30,"VENDA DE PRODUTOS/ SERVIÇOS","SIMONE OLIVEIRA SILVA",383.33,1,"","Boleto Amigo","k",""],["r","2025-09",8,"VENDA DE PRODUTOS/ SERVIÇOS","KAIO CESAR FREITAS PEREIRA",400.02,1,"","Boleto Amigo","c",""],["r","2025-06",4,"VENDA DE PRODUTOS/ SERVIÇOS","KAIO CESAR FREITAS PEREIRA",400.02,1,"","Boleto Amigo","k",""],["r","2025-08",11,"VENDA DE PRODUTOS/ SERVIÇOS","JOELCE FIGUEREDO DE ARAUJO",383.33,1,"","Boleto Amigo","c",""],["r","2025-05",12,"VENDA DE PRODUTOS/ SERVIÇOS","JOELCE FIGUEREDO DE ARAUJO",383.33,1,"","Boleto Amigo","k",""],["r","2025-08",20,"VENDA DE PRODUTOS/ SERVIÇOS","NADIR ALVES TEIXEIRA",395.6,1,"","Boleto Amigo","c",""],["r","2025-06",25,"VENDA DE PRODUTOS/ SERVIÇOS","NADIR ALVES TEIXEIRA",395.6,1,"","Boleto Amigo","k",""],["r","2025-08",13,"VENDA DE PRODUTOS/ SERVIÇOS","NAYLTON OLIVEIRA DA SILVA",333.33,1,"","Boleto Amigo","c",""],["r","2025-07",16,"VENDA DE PRODUTOS/ SERVIÇOS","NAYLTON OLIVEIRA DA SILVA",333.33,1,"","Boleto Amigo","k",""],["r","2025-08",28,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA URSULA RIOS CARNEIRO",397.68,1,"","Boleto Amigo","c",""],["r","2025-06",30,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA URSULA RIOS CARNEIRO",397.68,1,"","Boleto Amigo","k",""],["r","2025-08",12,"VENDA DE PRODUTOS/ SERVIÇOS","LEONARDO CASTRO DE JESUS",383.33,1,"","Boleto Amigo","c",""],["r","2025-06",11,"VENDA DE PRODUTOS/ SERVIÇOS","LEONARDO CASTRO DE JESUS",383.33,1,"","Boleto Amigo","k",""],["r","2025-08",19,"VENDA DE PRODUTOS/ SERVIÇOS","NATANAEL DIVINO ALVES",383.33,1,"","Boleto Amigo","c",""],["r","2025-06",27,"VENDA DE PRODUTOS/ SERVIÇOS","NATANAEL DIVINO ALVES",383.33,1,"","Boleto Amigo","k",""],["r","2025-07",30,"VENDA DE PRODUTOS/ SERVIÇOS","WILLAME COSTA NUNES",383.33,1,"","Boleto Amigo","c",""],["r","2025-05",13,"VENDA DE PRODUTOS/ SERVIÇOS","WILLAME COSTA NUNES",383.33,1,"","Boleto Amigo","k",""],["r","2025-08",12,"VENDA DE PRODUTOS/ SERVIÇOS","JAILSON SILVA DOS SANTOS",200,1,"","Boleto Amigo","c",""],["r","2025-08",12,"VENDA DE PRODUTOS/ SERVIÇOS","JAILSON SILVA DOS SANTOS",200,1,"","Boleto Amigo","k",""],["r","2025-08",13,"VENDA DE PRODUTOS/ SERVIÇOS","ROBERTO AGENOR DOS SANTOS",383.33,1,"","Boleto Amigo","c",""],["r","2025-07",17,"VENDA DE PRODUTOS/ SERVIÇOS","ROBERTO AGENOR DOS SANTOS",383.33,1,"","Boleto Amigo","k",""],["r","2025-08",13,"VENDA DE PRODUTOS/ SERVIÇOS","DENISE GRACA DOS SANTOS",383.33,1,"","Boleto Amigo","c",""],["r","2025-06",17,"VENDA DE PRODUTOS/ SERVIÇOS","DENISE GRACA DOS SANTOS",383.33,1,"","Boleto Amigo","k",""],["r","2025-08",12,"VENDA DE PRODUTOS/ SERVIÇOS","LUIS FILIPE PEREIRA DA FONSECA",383.33,1,"","Boleto Amigo","c",""],["r","2025-06",3,"VENDA DE PRODUTOS/ SERVIÇOS","LUIS FILIPE PEREIRA DA FONSECA",383.33,1,"","Boleto Amigo","k",""],["r","2025-08",13,"VENDA DE PRODUTOS/ SERVIÇOS","ALEXANDRE MARRON ARRUDA",383.33,1,"","Boleto Amigo","c",""],["r","2025-06",17,"VENDA DE PRODUTOS/ SERVIÇOS","ALEXANDRE MARRON ARRUDA",383.33,1,"","Boleto Amigo","k",""],["r","2025-08",13,"VENDA DE PRODUTOS/ SERVIÇOS","ESTER ALVES CAMELO",383.33,1,"","Boleto Amigo","c",""],["r","2025-05",30,"VENDA DE PRODUTOS/ SERVIÇOS","ESTER ALVES CAMELO",383.33,1,"","Boleto Amigo","k",""],["r","2025-08",14,"VENDA DE PRODUTOS/ SERVIÇOS","WILLIAN DE OLIVEIRA COELHO JUNIOR",395.08,1,"","Boleto Amigo","c",""],["r","2025-06",18,"VENDA DE PRODUTOS/ SERVIÇOS","WILLIAN DE OLIVEIRA COELHO JUNIOR",395.08,1,"","Boleto Amigo","k",""],["r","2025-08",13,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA MARGARIDA DA SILVA",383.33,1,"","Boleto Amigo","c",""],["r","2025-05",23,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA MARGARIDA DA SILVA",383.33,1,"","Boleto Amigo","k",""],["r","2025-08",11,"VENDA DE PRODUTOS/ SERVIÇOS","SAMUEL FERREIRA RAMOS",383.33,1,"","Boleto Amigo","c",""],["r","2025-04",24,"VENDA DE PRODUTOS/ SERVIÇOS","SAMUEL FERREIRA RAMOS",383.33,1,"","Boleto Amigo","k",""],["r","2025-08",8,"VENDA DE PRODUTOS/ SERVIÇOS","GENESINA ALVES NETA",383.33,1,"","Boleto Amigo","c",""],["r","2025-05",8,"VENDA DE PRODUTOS/ SERVIÇOS","GENESINA ALVES NETA",383.33,1,"","Boleto Amigo","k",""],["r","2025-08",13,"VENDA DE PRODUTOS/ SERVIÇOS","DENISE GRACA DOS SANTOS",383.33,1,"","Boleto Amigo","c",""],["r","2025-06",19,"VENDA DE PRODUTOS/ SERVIÇOS","DENISE GRACA DOS SANTOS",383.33,1,"","Boleto Amigo","k",""],["r","2025-09",10,"VENDA DE PRODUTOS/ SERVIÇOS","VANIA DA SILVA MEIRELLES",402.1,1,"","Boleto Amigo","c",""],["r","2025-03",7,"VENDA DE PRODUTOS/ SERVIÇOS","VANIA DA SILVA MEIRELLES",402.1,1,"","Boleto Amigo","k",""],["r","2025-08",8,"VENDA DE PRODUTOS/ SERVIÇOS","SIDINELIO NASCIMENTO PIRES",350,1,"","Boleto Amigo","c",""],["r","2025-08",8,"VENDA DE PRODUTOS/ SERVIÇOS","SIDINELIO NASCIMENTO PIRES",350,1,"","Boleto Amigo","k",""],["r","2025-08",8,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO VITORIANO FILHO",200,1,"","Boleto Amigo","c",""],["r","2025-08",8,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO VITORIANO FILHO",200,1,"","Boleto Amigo","k",""],["r","2025-08",8,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO VITORIANO FILHO",200,1,"","Boleto Amigo","c",""],["r","2025-08",8,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO VITORIANO FILHO",200,1,"","Boleto Amigo","k",""],["r","2025-08",7,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA ELBA CORDEIRO DA CRUZ DE SOUSA",200,1,"","Boleto Amigo","c",""],["r","2025-08",8,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA ELBA CORDEIRO DA CRUZ DE SOUSA",200,1,"","Boleto Amigo","k",""],["r","2025-08",7,"VENDA DE PRODUTOS/ SERVIÇOS","NANCI MARIA SILVEIRA CAMPOS",200,1,"","Boleto Amigo","c",""],["r","2025-08",7,"VENDA DE PRODUTOS/ SERVIÇOS","NANCI MARIA SILVEIRA CAMPOS",200,1,"","Boleto Amigo","k",""],["r","2025-08",6,"VENDA DE PRODUTOS/ SERVIÇOS","SAMUEL SALES SILVA",200,1,"","Boleto Amigo","c",""],["r","2025-08",6,"VENDA DE PRODUTOS/ SERVIÇOS","SAMUEL SALES SILVA",200,1,"","Boleto Amigo","k",""],["r","2025-08",8,"VENDA DE PRODUTOS/ SERVIÇOS","VINICIUS MYLLE TEIXEIRA SOARES",460,1,"","Boleto Amigo","c",""],["r","2024-10",10,"VENDA DE PRODUTOS/ SERVIÇOS","VINICIUS MYLLE TEIXEIRA SOARES",460,1,"","Boleto Amigo","k",""],["r","2025-08",6,"VENDA DE PRODUTOS/ SERVIÇOS","VINICIUS MYLLE TEIXEIRA SOARES",460,0,"","Boleto Amigo","c",""],["r","2024-10",10,"VENDA DE PRODUTOS/ SERVIÇOS","VINICIUS MYLLE TEIXEIRA SOARES",460,0,"","Boleto Amigo","k",""],["r","2025-08",5,"VENDA DE PRODUTOS/ SERVIÇOS","MARCIO MENDES RODRIGUES",300,1,"","Boleto Amigo","c",""],["r","2025-08",5,"VENDA DE PRODUTOS/ SERVIÇOS","MARCIO MENDES RODRIGUES",300,1,"","Boleto Amigo","k",""],["r","2025-08",7,"VENDA DE PRODUTOS/ SERVIÇOS","MILENA DE OLIVEIRA FERREIA MELO",383.33,1,"","Boleto Amigo","c",""],["r","2025-07",2,"VENDA DE PRODUTOS/ SERVIÇOS","MILENA DE OLIVEIRA FERREIA MELO",383.33,1,"","Boleto Amigo","k",""],["r","2025-08",8,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA DO SOCORRO PAULINO SOUZA",515.34,1,"","Boleto Amigo","c",""],["r","2025-07",11,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA DO SOCORRO PAULINO SOUZA",515.34,1,"","Boleto Amigo","k",""],["r","2025-08",11,"VENDA DE PRODUTOS/ SERVIÇOS","SANCHEZ FERREIRA DE LIMA",395.34,1,"","Boleto Amigo","c",""],["r","2025-05",28,"VENDA DE PRODUTOS/ SERVIÇOS","SANCHEZ FERREIRA DE LIMA",395.34,1,"","Boleto Amigo","k",""],["r","2025-08",8,"VENDA DE PRODUTOS/ SERVIÇOS","FLORISMAR TAVARES BATISTA",395.08,1,"","Boleto Amigo","c",""],["r","2025-05",2,"VENDA DE PRODUTOS/ SERVIÇOS","FLORISMAR TAVARES BATISTA",395.08,1,"","Boleto Amigo","k",""],["r","2025-08",7,"VENDA DE PRODUTOS/ SERVIÇOS","GLEIDSON MORAES DO NASCIMENTO",383.33,1,"","Boleto Amigo","c",""],["r","2025-05",6,"VENDA DE PRODUTOS/ SERVIÇOS","GLEIDSON MORAES DO NASCIMENTO",383.33,1,"","Boleto Amigo","k",""],["r","2025-08",4,"VENDA DE PRODUTOS/ SERVIÇOS","EFIJANE DE SOUSA OLIVEIRA",400,1,"","Boleto Amigo","c",""],["r","2025-08",4,"VENDA DE PRODUTOS/ SERVIÇOS","EFIJANE DE SOUSA OLIVEIRA",400,1,"","Boleto Amigo","k",""],["r","2025-08",1,"VENDA DE PRODUTOS/ SERVIÇOS","DEUSNENE LOURENCO DE LIMA",833.33,1,"","Boleto Amigo","c",""],["r","2025-06",30,"VENDA DE PRODUTOS/ SERVIÇOS","DEUSNENE LOURENCO DE LIMA",833.33,1,"","Boleto Amigo","k",""],["r","2025-07",30,"VENDA DE PRODUTOS/ SERVIÇOS","IRANILDO LIMA ALVES",200,1,"","Boleto Amigo","c",""],["r","2025-08",1,"VENDA DE PRODUTOS/ SERVIÇOS","IRANILDO LIMA ALVES",200,1,"","Boleto Amigo","k",""],["r","2025-08",1,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO PEDRO NETO",200,1,"","Boleto Amigo","c",""],["r","2025-08",1,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO PEDRO NETO",200,1,"","Boleto Amigo","k",""],["r","2025-07",28,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO ALEXANDRE MEDEIROS SANTANA",1000,1,"","Boleto Amigo","c",""],["r","2025-07",28,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO ALEXANDRE MEDEIROS SANTANA",1000,1,"","Boleto Amigo","k",""],["r","2025-07",30,"VENDA DE PRODUTOS/ SERVIÇOS","BENAVINUTA DE SOUZA OLIVEIRA",383.33,1,"","Boleto Amigo","c",""],["r","2025-06",27,"VENDA DE PRODUTOS/ SERVIÇOS","BENAVINUTA DE SOUZA OLIVEIRA",383.33,1,"","Boleto Amigo","k",""],["r","2025-07",30,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO PEREIRA DOS SANTOS",395.6,1,"","Boleto Amigo","c",""],["r","2025-06",16,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO PEREIRA DOS SANTOS",395.6,1,"","Boleto Amigo","k",""],["r","2025-07",31,"VENDA DE PRODUTOS/ SERVIÇOS","FC MERCEARIA E DISTRIBUIDORA LTDA",395.86,1,"","Boleto Amigo","c",""],["r","2025-05",21,"VENDA DE PRODUTOS/ SERVIÇOS","FC MERCEARIA E DISTRIBUIDORA LTDA",395.86,1,"","Boleto Amigo","k",""],["r","2025-07",28,"VENDA DE PRODUTOS/ SERVIÇOS","ZEFERINO FONSECA MORAES FILHO",383.33,1,"","Boleto Amigo","c",""],["r","2025-04",4,"VENDA DE PRODUTOS/ SERVIÇOS","ZEFERINO FONSECA MORAES FILHO",383.33,1,"","Boleto Amigo","k",""],["r","2025-08",4,"VENDA DE PRODUTOS/ SERVIÇOS","PAULO DICKSON DE OLIVEIRA HONORIO",396.38,1,"","Boleto Amigo","c",""],["r","2025-03",7,"VENDA DE PRODUTOS/ SERVIÇOS","PAULO DICKSON DE OLIVEIRA HONORIO",396.38,1,"","Boleto Amigo","k",""],["r","2025-07",17,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE AELITON DA SILVA",383.33,1,"","Boleto Amigo","c",""],["r","2025-06",5,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE AELITON DA SILVA",383.33,1,"","Boleto Amigo","k",""],["r","2025-07",28,"VENDA DE PRODUTOS/ SERVIÇOS","VALDETE SANTANA RIBEIRO BATISTA",383.33,1,"","Boleto Amigo","c",""],["r","2025-04",17,"VENDA DE PRODUTOS/ SERVIÇOS","VALDETE SANTANA RIBEIRO BATISTA",383.33,1,"","Boleto Amigo","k",""],["r","2025-07",25,"VENDA DE PRODUTOS/ SERVIÇOS","GORETE PEREIRA DOS SANTOS LIMA",366.67,1,"","Boleto Amigo","c",""],["r","2025-06",26,"VENDA DE PRODUTOS/ SERVIÇOS","GORETE PEREIRA DOS SANTOS LIMA",366.67,1,"","Boleto Amigo","k",""],["r","2025-07",31,"VENDA DE PRODUTOS/ SERVIÇOS","MARINA GAMA DA SILVA SOUSA SOB PROC JOSE ALBERTO DE SOUSA F.",395.86,1,"","Boleto Amigo","c",""],["r","2025-02",20,"VENDA DE PRODUTOS/ SERVIÇOS","MARINA GAMA DA SILVA SOUSA SOB PROC JOSE ALBERTO DE SOUSA F.",395.86,1,"","Boleto Amigo","k",""],["r","2025-07",25,"VENDA DE PRODUTOS/ SERVIÇOS","CAMILA GABRIELE CORREA NEVES",383.33,0,"","Boleto Amigo","c",""],["r","2025-06",23,"VENDA DE PRODUTOS/ SERVIÇOS","CAMILA GABRIELE CORREA NEVES",383.33,0,"","Boleto Amigo","k",""],["r","2025-07",31,"VENDA DE PRODUTOS/ SERVIÇOS","JOÃO CARLOS MORENO DE CARVALHO",395.86,1,"","Boleto Amigo","c",""],["r","2025-03",17,"VENDA DE PRODUTOS/ SERVIÇOS","JOÃO CARLOS MORENO DE CARVALHO",395.86,1,"","Boleto Amigo","k",""],["r","2025-08",7,"VENDA DE PRODUTOS/ SERVIÇOS","GEDAIAS FERREIRA BRAGA",397.68,1,"","Boleto Amigo","c",""],["r","2025-04",24,"VENDA DE PRODUTOS/ SERVIÇOS","GEDAIAS FERREIRA BRAGA",397.68,1,"","Boleto Amigo","k",""],["r","2025-07",30,"VENDA DE PRODUTOS/ SERVIÇOS","GEOVAN TEIXEIRA DA SILVA",395.6,1,"","Boleto Amigo","c",""],["r","2025-05",8,"VENDA DE PRODUTOS/ SERVIÇOS","GEOVAN TEIXEIRA DA SILVA",395.6,1,"","Boleto Amigo","k",""],["r","2025-08",4,"VENDA DE PRODUTOS/ SERVIÇOS","GLEILTON LOPES SILAS",396.38,1,"","Boleto Amigo","c",""],["r","2025-06",27,"VENDA DE PRODUTOS/ SERVIÇOS","GLEILTON LOPES SILAS",396.38,1,"","Boleto Amigo","k",""],["r","2025-07",28,"VENDA DE PRODUTOS/ SERVIÇOS","JADSON CARLOS DE OLIVEIRA SATURNINO",383.33,1,"","Boleto Amigo","c",""],["r","2025-06",24,"VENDA DE PRODUTOS/ SERVIÇOS","JADSON CARLOS DE OLIVEIRA SATURNINO",383.33,1,"","Boleto Amigo","k",""],["r","2025-07",25,"VENDA DE PRODUTOS/ SERVIÇOS","JOAO VICTOR DE SOUSA PESSOA",200,1,"","Boleto Amigo","c",""],["r","2025-07",25,"VENDA DE PRODUTOS/ SERVIÇOS","JOAO VICTOR DE SOUSA PESSOA",200,1,"","Boleto Amigo","k",""],["r","2025-08",6,"VENDA DE PRODUTOS/ SERVIÇOS","ROGERIO ARLINDO DO CARMO RIBEIRO",397.42,1,"","Boleto Amigo","c",""],["r","2025-05",30,"VENDA DE PRODUTOS/ SERVIÇOS","ROGERIO ARLINDO DO CARMO RIBEIRO",397.42,1,"","Boleto Amigo","k",""],["r","2025-07",29,"VENDA DE PRODUTOS/ SERVIÇOS","LUIZ PAULO BARBOSA DA SILVA",383.33,1,"","Boleto Amigo","c",""],["r","2025-04",29,"VENDA DE PRODUTOS/ SERVIÇOS","LUIZ PAULO BARBOSA DA SILVA",383.33,1,"","Boleto Amigo","k",""],["r","2025-07",31,"VENDA DE PRODUTOS/ SERVIÇOS","CLEBIANO RAMALHO DA SILVA",344.2,1,"","Boleto Amigo","c",""],["r","2025-06",13,"VENDA DE PRODUTOS/ SERVIÇOS","CLEBIANO RAMALHO DA SILVA",344.2,1,"","Boleto Amigo","k",""],["r","2025-07",29,"VENDA DE PRODUTOS/ SERVIÇOS","TIANA CARLA FABICHACKI LOPES",383.33,1,"","Boleto Amigo","c",""],["r","2025-03",19,"VENDA DE PRODUTOS/ SERVIÇOS","TIANA CARLA FABICHACKI LOPES",383.33,1,"","Boleto Amigo","k",""],["r","2025-08",1,"VENDA DE PRODUTOS/ SERVIÇOS","DAJANN GARDELL MOREIRA CHAVES",396.12,1,"","Boleto Amigo","c",""],["r","2025-04",30,"VENDA DE PRODUTOS/ SERVIÇOS","DAJANN GARDELL MOREIRA CHAVES",396.12,1,"","Boleto Amigo","k",""],["r","2025-07",29,"VENDA DE PRODUTOS/ SERVIÇOS","ERENILZA CARVALHO DA SILVA SOUSA",383.33,1,"","Boleto Amigo","c",""],["r","2025-06",4,"VENDA DE PRODUTOS/ SERVIÇOS","ERENILZA CARVALHO DA SILVA SOUSA",383.33,1,"","Boleto Amigo","k",""],["r","2025-07",31,"VENDA DE PRODUTOS/ SERVIÇOS","CLEBER DE JESUS MACHADO",395.86,1,"","Boleto Amigo","c",""],["r","2025-05",30,"VENDA DE PRODUTOS/ SERVIÇOS","CLEBER DE JESUS MACHADO",395.86,1,"","Boleto Amigo","k",""],["r","2025-07",29,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA ALNEIDE DE CALDAS ALMEIDE",383.33,1,"","Boleto Amigo","c",""],["r","2025-05",27,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA ALNEIDE DE CALDAS ALMEIDE",383.33,1,"","Boleto Amigo","k",""],["r","2025-08",12,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA LUCIDALVA CALAZANS SANTOS",398.46,1,"","Boleto Amigo","c",""],["r","2025-04",24,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA LUCIDALVA CALAZANS SANTOS",398.46,1,"","Boleto Amigo","k",""],["r","2025-08",6,"VENDA DE PRODUTOS/ SERVIÇOS","CARLOS ALBERTO FERREIRA DA SILVA",397.42,1,"","Boleto Amigo","c",""],["r","2025-03",12,"VENDA DE PRODUTOS/ SERVIÇOS","CARLOS ALBERTO FERREIRA DA SILVA",397.42,1,"","Boleto Amigo","k",""],["r","2025-07",23,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO SILVA CARNEIRO",383.33,1,"","Boleto Amigo","c",""],["r","2025-03",25,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO SILVA CARNEIRO",383.33,1,"","Boleto Amigo","k",""],["r","2025-07",25,"VENDA DE PRODUTOS/ SERVIÇOS","JACIREMA SOUSA BRASIL",200,1,"","Boleto Amigo","c",""],["r","2025-07",25,"VENDA DE PRODUTOS/ SERVIÇOS","JACIREMA SOUSA BRASIL",200,1,"","Boleto Amigo","k",""],["r","2025-07",22,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO IVANILDO MATOS",200,1,"","Boleto Amigo","c",""],["r","2025-07",23,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO IVANILDO MATOS",200,1,"","Boleto Amigo","k",""],["r","2025-07",23,"VENDA DE PRODUTOS/ SERVIÇOS","LEANDRO DE ALMEIDA RIBEIRO",200,1,"","Boleto Amigo","c",""],["r","2025-07",23,"VENDA DE PRODUTOS/ SERVIÇOS","LEANDRO DE ALMEIDA RIBEIRO",200,1,"","Boleto Amigo","k",""],["r","2025-08",15,"VENDA DE PRODUTOS/ SERVIÇOS","LEONARDO DE SOUSA DAS CHAGAS",400.8,1,"","Boleto Amigo","c",""],["r","2025-01",10,"VENDA DE PRODUTOS/ SERVIÇOS","LEONARDO DE SOUSA DAS CHAGAS",400.8,1,"","Boleto Amigo","k",""],["r","2025-07",21,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE CANTANHEDE MAGALHAES FILHO",500,1,"","Boleto Amigo","c",""],["r","2025-07",21,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE CANTANHEDE MAGALHAES FILHO",500,1,"","Boleto Amigo","k",""],["r","2025-07",23,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GOMES DIAS",383.33,1,"","Boleto Amigo","c",""],["r","2025-04",22,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GOMES DIAS",383.33,1,"","Boleto Amigo","k",""],["r","2025-07",10,"VENDA DE PRODUTOS/ SERVIÇOS","KATIANA FELIX ALMEIDA",383.33,1,"","Boleto Amigo","c",""],["r","2025-04",15,"VENDA DE PRODUTOS/ SERVIÇOS","KATIANA FELIX ALMEIDA",383.33,1,"","Boleto Amigo","k",""],["r","2025-07",23,"VENDA DE PRODUTOS/ SERVIÇOS","RIBAMAR RIBEIRO DOS REIS",383.33,1,"","Boleto Amigo","c",""],["r","2025-05",19,"VENDA DE PRODUTOS/ SERVIÇOS","RIBAMAR RIBEIRO DOS REIS",383.33,1,"","Boleto Amigo","k",""],["r","2025-07",25,"VENDA DE PRODUTOS/ SERVIÇOS","ELDER DOS SANTOS FEITOSA",395.34,1,"","Boleto Amigo","c",""],["r","2025-06",18,"VENDA DE PRODUTOS/ SERVIÇOS","ELDER DOS SANTOS FEITOSA",395.34,1,"","Boleto Amigo","k",""],["r","2025-07",22,"VENDA DE PRODUTOS/ SERVIÇOS","NEILSON CARVALHO CAMPOS",383.33,1,"","Boleto Amigo","c",""],["r","2025-06",17,"VENDA DE PRODUTOS/ SERVIÇOS","NEILSON CARVALHO CAMPOS",383.33,1,"","Boleto Amigo","k",""],["r","2025-07",17,"VENDA DE PRODUTOS/ SERVIÇOS","HAMILTON COELHO GOMES",200,1,"","Boleto Amigo","c",""],["r","2025-07",17,"VENDA DE PRODUTOS/ SERVIÇOS","HAMILTON COELHO GOMES",200,1,"","Boleto Amigo","k",""],["r","2025-07",17,"VENDA DE PRODUTOS/ SERVIÇOS","ROBERTO AGENOR DOS SANTOS",200,1,"","Boleto Amigo","c",""],["r","2025-07",17,"VENDA DE PRODUTOS/ SERVIÇOS","ROBERTO AGENOR DOS SANTOS",200,1,"","Boleto Amigo","k",""],["r","2025-07",16,"VENDA DE PRODUTOS/ SERVIÇOS","INEIAS ABRAAO DOS SANTOS BENJAMIM",200,1,"","Boleto Amigo","c",""],["r","2025-07",16,"VENDA DE PRODUTOS/ SERVIÇOS","INEIAS ABRAAO DOS SANTOS BENJAMIM",200,1,"","Boleto Amigo","k",""],["r","2025-07",16,"VENDA DE PRODUTOS/ SERVIÇOS","NAYLTON OLIVEIRA DA SILVA",500,1,"","Boleto Amigo","c",""],["r","2025-07",16,"VENDA DE PRODUTOS/ SERVIÇOS","NAYLTON OLIVEIRA DA SILVA",500,1,"","Boleto Amigo","k",""],["r","2025-07",9,"VENDA DE PRODUTOS/ SERVIÇOS","JULIANO DA SILVA",333.35,1,"","Boleto Amigo","c",""],["r","2025-01",15,"VENDA DE PRODUTOS/ SERVIÇOS","JULIANO DA SILVA",333.35,1,"","Boleto Amigo","k",""],["r","2025-07",18,"VENDA DE PRODUTOS/ SERVIÇOS","SIMONE DE SOUSA SIQUEIRA",395.11,1,"","Boleto Amigo","c",""],["r","2025-01",17,"VENDA DE PRODUTOS/ SERVIÇOS","SIMONE DE SOUSA SIQUEIRA",395.11,1,"","Boleto Amigo","k",""],["r","2025-07",23,"VENDA DE PRODUTOS/ SERVIÇOS","LEONARDO DE SOUSA DAS CHAGAS",396.41,1,"","Boleto Amigo","c",""],["r","2025-01",10,"VENDA DE PRODUTOS/ SERVIÇOS","LEONARDO DE SOUSA DAS CHAGAS",396.41,1,"","Boleto Amigo","k",""],["r","2025-07",10,"VENDA DE PRODUTOS/ SERVIÇOS","NATANAEL DIVINO ALVES",383.33,1,"","Boleto Amigo","c",""],["r","2025-06",27,"VENDA DE PRODUTOS/ SERVIÇOS","NATANAEL DIVINO ALVES",383.33,1,"","Boleto Amigo","k",""],["r","2025-07",8,"VENDA DE PRODUTOS/ SERVIÇOS","JOELCE FIGUEREDO DE ARAUJO",383.33,1,"","Boleto Amigo","c",""],["r","2025-05",12,"VENDA DE PRODUTOS/ SERVIÇOS","JOELCE FIGUEREDO DE ARAUJO",383.33,1,"","Boleto Amigo","k",""],["r","2025-08",14,"VENDA DE PRODUTOS/ SERVIÇOS","MARIANA ANGELICA SILVA ARAUJO",349.48,1,"","Boleto Amigo","c",""],["r","2025-05",22,"VENDA DE PRODUTOS/ SERVIÇOS","MARIANA ANGELICA SILVA ARAUJO",349.48,1,"","Boleto Amigo","k",""],["r","2025-07",22,"VENDA DE PRODUTOS/ SERVIÇOS","WILLAME COSTA NUNES",395.6,1,"","Boleto Amigo","c",""],["r","2025-05",13,"VENDA DE PRODUTOS/ SERVIÇOS","WILLAME COSTA NUNES",395.6,1,"","Boleto Amigo","k",""],["r","2025-07",18,"VENDA DE PRODUTOS/ SERVIÇOS","NADIR ALVES TEIXEIRA",395.08,1,"","Boleto Amigo","c",""],["r","2025-06",25,"VENDA DE PRODUTOS/ SERVIÇOS","NADIR ALVES TEIXEIRA",395.08,1,"","Boleto Amigo","k",""],["r","2025-07",16,"VENDA DE PRODUTOS/ SERVIÇOS","JOVAIR COSTA E SILVA",300,1,"","Boleto Amigo","c",""],["r","2024-11",25,"VENDA DE PRODUTOS/ SERVIÇOS","JOVAIR COSTA E SILVA",300,1,"","Boleto Amigo","k",""],["r","2025-07",10,"VENDA DE PRODUTOS/ SERVIÇOS","LEONARDO CASTRO DE JESUS",383.33,1,"","Boleto Amigo","c",""],["r","2025-06",11,"VENDA DE PRODUTOS/ SERVIÇOS","LEONARDO CASTRO DE JESUS",383.33,1,"","Boleto Amigo","k",""],["r","2025-07",15,"VENDA DE PRODUTOS/ SERVIÇOS","WEDNEY MARTINS",200,1,"","Boleto Amigo","c",""],["r","2025-07",15,"VENDA DE PRODUTOS/ SERVIÇOS","WEDNEY MARTINS",200,1,"","Boleto Amigo","k",""],["r","2025-07",15,"VENDA DE PRODUTOS/ SERVIÇOS","ANA PAULA MOREIRA DE OLIVEIRA",200,1,"","Boleto Amigo","c",""],["r","2025-07",15,"VENDA DE PRODUTOS/ SERVIÇOS","ANA PAULA MOREIRA DE OLIVEIRA",200,1,"","Boleto Amigo","k",""],["r","2025-07",16,"VENDA DE PRODUTOS/ SERVIÇOS","KAIO CESAR FREITAS PEREIRA",383.33,1,"","Boleto Amigo","c",""],["r","2025-06",4,"VENDA DE PRODUTOS/ SERVIÇOS","KAIO CESAR FREITAS PEREIRA",383.33,1,"","Boleto Amigo","k",""],["r","2025-07",14,"VENDA DE PRODUTOS/ SERVIÇOS","MARIANY DE SOUSA GALVAO",200,1,"","Boleto Amigo","c",""],["r","2025-07",14,"VENDA DE PRODUTOS/ SERVIÇOS","MARIANY DE SOUSA GALVAO",200,1,"","Boleto Amigo","k",""],["r","2025-07",11,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA DO SOCORRO PAULINO SOUZA",1000,1,"","Boleto Amigo","c",""],["r","2025-07",11,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA DO SOCORRO PAULINO SOUZA",1000,1,"","Boleto Amigo","k",""],["r","2025-07",10,"VENDA DE PRODUTOS/ SERVIÇOS","HENRIQUE RAMOS GUIMARAES",200,1,"","Boleto Amigo","c",""],["r","2025-07",10,"VENDA DE PRODUTOS/ SERVIÇOS","HENRIQUE RAMOS GUIMARAES",200,1,"","Boleto Amigo","k",""],["r","2025-07",9,"VENDA DE PRODUTOS/ SERVIÇOS","VANIA DA SILVA MEIRELLES",383.33,1,"","Boleto Amigo","c",""],["r","2025-03",7,"VENDA DE PRODUTOS/ SERVIÇOS","VANIA DA SILVA MEIRELLES",383.33,1,"","Boleto Amigo","k",""],["r","2025-07",11,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE ERNANDE MEIRELES CASTRO",366.65,1,"","Boleto Amigo","c",""],["r","2025-01",28,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE ERNANDE MEIRELES CASTRO",366.65,1,"","Boleto Amigo","k",""],["r","2025-07",4,"VENDA DE PRODUTOS/ SERVIÇOS","DENISE GRACA DOS SANTOS",383.33,1,"","Boleto Amigo","c",""],["r","2025-06",19,"VENDA DE PRODUTOS/ SERVIÇOS","DENISE GRACA DOS SANTOS",383.33,1,"","Boleto Amigo","k",""],["r","2025-07",11,"VENDA DE PRODUTOS/ SERVIÇOS","LUIS FILIPE PEREIRA DA FONSECA",383.33,1,"","Boleto Amigo","c",""],["r","2025-06",3,"VENDA DE PRODUTOS/ SERVIÇOS","LUIS FILIPE PEREIRA DA FONSECA",383.33,1,"","Boleto Amigo","k",""],["r","2025-07",4,"VENDA DE PRODUTOS/ SERVIÇOS","DENISE GRACA DOS SANTOS",383.33,1,"","Boleto Amigo","c",""],["r","2025-06",17,"VENDA DE PRODUTOS/ SERVIÇOS","DENISE GRACA DOS SANTOS",383.33,1,"","Boleto Amigo","k",""],["r","2025-07",16,"VENDA DE PRODUTOS/ SERVIÇOS","WILLIAN DE OLIVEIRA COELHO JUNIOR",395.86,1,"","Boleto Amigo","c",""],["r","2025-06",18,"VENDA DE PRODUTOS/ SERVIÇOS","WILLIAN DE OLIVEIRA COELHO JUNIOR",395.86,1,"","Boleto Amigo","k",""],["r","2025-07",7,"VENDA DE PRODUTOS/ SERVIÇOS","ESTER ALVES CAMELO",383.33,1,"","Boleto Amigo","c",""],["r","2025-05",30,"VENDA DE PRODUTOS/ SERVIÇOS","ESTER ALVES CAMELO",383.33,1,"","Boleto Amigo","k",""],["r","2025-07",4,"VENDA DE PRODUTOS/ SERVIÇOS","ALEXANDRE MARRON ARRUDA",383.33,1,"","Boleto Amigo","c",""],["r","2025-06",17,"VENDA DE PRODUTOS/ SERVIÇOS","ALEXANDRE MARRON ARRUDA",383.33,1,"","Boleto Amigo","k",""],["r","2025-07",7,"VENDA DE PRODUTOS/ SERVIÇOS","GENESINA ALVES NETA",383.33,1,"","Boleto Amigo","c",""],["r","2025-05",8,"VENDA DE PRODUTOS/ SERVIÇOS","GENESINA ALVES NETA",383.33,1,"","Boleto Amigo","k",""],["r","2025-07",14,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA MARGARIDA DA SILVA",383.33,1,"","Boleto Amigo","c",""],["r","2025-05",23,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA MARGARIDA DA SILVA",383.33,1,"","Boleto Amigo","k",""],["r","2025-07",8,"VENDA DE PRODUTOS/ SERVIÇOS","SAMUEL FERREIRA RAMOS",383.33,1,"","Boleto Amigo","c",""],["r","2025-04",24,"VENDA DE PRODUTOS/ SERVIÇOS","SAMUEL FERREIRA RAMOS",383.33,1,"","Boleto Amigo","k",""],["r","2025-07",3,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE DANIEL DA COSTA",200,1,"","Boleto Amigo","c",""],["r","2025-07",7,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE DANIEL DA COSTA",200,1,"","Boleto Amigo","k",""],["r","2025-07",9,"VENDA DE PRODUTOS/ SERVIÇOS","GLEIDSON MORAES DO NASCIMENTO",383.33,1,"","Boleto Amigo","c",""],["r","2025-05",6,"VENDA DE PRODUTOS/ SERVIÇOS","GLEIDSON MORAES DO NASCIMENTO",383.33,1,"","Boleto Amigo","k",""],["r","2025-07",9,"VENDA DE PRODUTOS/ SERVIÇOS","FLORISMAR TAVARES BATISTA",383.33,1,"","Boleto Amigo","c",""],["r","2025-05",2,"VENDA DE PRODUTOS/ SERVIÇOS","FLORISMAR TAVARES BATISTA",383.33,1,"","Boleto Amigo","k",""],["r","2025-07",4,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO EDUARDO MATIAS SILVA",300,1,"","Boleto Amigo","c",""],["r","2025-07",4,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO EDUARDO MATIAS SILVA",300,1,"","Boleto Amigo","k",""],["r","2025-07",2,"VENDA DE PRODUTOS/ SERVIÇOS","MILENA DE OLIVEIRA FERREIA MELO",200,1,"","Boleto Amigo","c",""],["r","2025-07",2,"VENDA DE PRODUTOS/ SERVIÇOS","MILENA DE OLIVEIRA FERREIA MELO",200,1,"","Boleto Amigo","k",""],["r","2025-07",1,"VENDA DE PRODUTOS/ SERVIÇOS","JOSANE DAYANE SOUZA FERRAZ",200,1,"","Boleto Amigo","c",""],["r","2025-07",1,"VENDA DE PRODUTOS/ SERVIÇOS","JOSANE DAYANE SOUZA FERRAZ",200,1,"","Boleto Amigo","k",""],["r","2025-07",1,"VENDA DE PRODUTOS/ SERVIÇOS","WESLEY EURIPEDIS CAVALCANTE",200,1,"","Boleto Amigo","c",""],["r","2025-07",1,"VENDA DE PRODUTOS/ SERVIÇOS","WESLEY EURIPEDIS CAVALCANTE",200,1,"","Boleto Amigo","k",""],["r","2025-06",30,"VENDA DE PRODUTOS/ SERVIÇOS","DEUSNENE LOURENCO DE LIMA",833.33,1,"","Boleto Amigo","c",""],["r","2025-06",30,"VENDA DE PRODUTOS/ SERVIÇOS","DEUSNENE LOURENCO DE LIMA",833.33,1,"","Boleto Amigo","k",""],["r","2025-06",30,"VENDA DE PRODUTOS/ SERVIÇOS","SIMONE OLIVEIRA SILVA",200,1,"","Boleto Amigo","c",""],["r","2025-06",30,"VENDA DE PRODUTOS/ SERVIÇOS","SIMONE OLIVEIRA SILVA",200,1,"","Boleto Amigo","k",""],["r","2025-06",27,"VENDA DE PRODUTOS/ SERVIÇOS","GLEILTON LOPES SILAS",200,1,"","Boleto Amigo","c",""],["r","2025-06",27,"VENDA DE PRODUTOS/ SERVIÇOS","GLEILTON LOPES SILAS",200,1,"","Boleto Amigo","k",""],["r","2025-06",27,"VENDA DE PRODUTOS/ SERVIÇOS","NATANAEL DIVINO ALVES",200,1,"","Boleto Amigo","c",""],["r","2025-06",27,"VENDA DE PRODUTOS/ SERVIÇOS","NATANAEL DIVINO ALVES",200,1,"","Boleto Amigo","k",""],["r","2025-06",27,"VENDA DE PRODUTOS/ SERVIÇOS","BENAVINUTA DE SOUZA OLIVEIRA",200,1,"","Boleto Amigo","c",""],["r","2025-06",27,"VENDA DE PRODUTOS/ SERVIÇOS","BENAVINUTA DE SOUZA OLIVEIRA",200,1,"","Boleto Amigo","k",""],["r","2025-06",25,"VENDA DE PRODUTOS/ SERVIÇOS","LUIZ PAULO BARBOSA DA SILVA",383.33,1,"","Boleto Amigo","c",""],["r","2025-04",29,"VENDA DE PRODUTOS/ SERVIÇOS","LUIZ PAULO BARBOSA DA SILVA",383.33,1,"","Boleto Amigo","k",""],["r","2025-04",29,"VENDA DE PRODUTOS/ SERVIÇOS","JOÃO CARLOS MORENO DE CARVALHO",383.33,1,"","Boleto Amigo","c",""],["r","2025-03",17,"VENDA DE PRODUTOS/ SERVIÇOS","JOÃO CARLOS MORENO DE CARVALHO",383.33,1,"","Boleto Amigo","k",""],["r","2025-07",3,"VENDA DE PRODUTOS/ SERVIÇOS","PAULO DICKSON DE OLIVEIRA HONORIO",396.38,1,"","Boleto Amigo","c",""],["r","2025-03",7,"VENDA DE PRODUTOS/ SERVIÇOS","PAULO DICKSON DE OLIVEIRA HONORIO",396.38,1,"","Boleto Amigo","k",""],["r","2025-06",30,"VENDA DE PRODUTOS/ SERVIÇOS","TIANA CARLA FABICHACKI LOPES",395.08,1,"","Boleto Amigo","c",""],["r","2025-03",19,"VENDA DE PRODUTOS/ SERVIÇOS","TIANA CARLA FABICHACKI LOPES",395.08,1,"","Boleto Amigo","k",""],["r","2025-06",27,"VENDA DE PRODUTOS/ SERVIÇOS","VALDETE SANTANA RIBEIRO BATISTA",383.33,1,"","Boleto Amigo","c",""],["r","2025-04",17,"VENDA DE PRODUTOS/ SERVIÇOS","VALDETE SANTANA RIBEIRO BATISTA",383.33,1,"","Boleto Amigo","k",""],["r","2025-07",2,"VENDA DE PRODUTOS/ SERVIÇOS","GEDAIAS FERREIRA BRAGA",396.12,1,"","Boleto Amigo","c",""],["r","2025-04",24,"VENDA DE PRODUTOS/ SERVIÇOS","GEDAIAS FERREIRA BRAGA",396.12,1,"","Boleto Amigo","k",""],["r","2025-07",3,"VENDA DE PRODUTOS/ SERVIÇOS","MARINA GAMA DA SILVA SOUSA SOB PROC JOSE ALBERTO DE SOUSA F.",396.38,1,"","Boleto Amigo","c",""],["r","2025-02",20,"VENDA DE PRODUTOS/ SERVIÇOS","MARINA GAMA DA SILVA SOUSA SOB PROC JOSE ALBERTO DE SOUSA F.",396.38,1,"","Boleto Amigo","k",""],["r","2025-07",9,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA LUCIDALVA CALAZANS SANTOS",397.94,1,"","Boleto Amigo","c",""],["r","2025-04",24,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA LUCIDALVA CALAZANS SANTOS",397.94,1,"","Boleto Amigo","k",""],["r","2025-07",2,"VENDA DE PRODUTOS/ SERVIÇOS","ROGERIO ARLINDO DO CARMO RIBEIRO",396.12,1,"","Boleto Amigo","c",""],["r","2025-05",30,"VENDA DE PRODUTOS/ SERVIÇOS","ROGERIO ARLINDO DO CARMO RIBEIRO",396.12,1,"","Boleto Amigo","k",""],["r","2025-06",25,"VENDA DE PRODUTOS/ SERVIÇOS","ANA JESSICA DOMINGOS DE MOURA",200,1,"","Boleto Amigo","c",""],["r","2025-06",25,"VENDA DE PRODUTOS/ SERVIÇOS","ANA JESSICA DOMINGOS DE MOURA",200,1,"","Boleto Amigo","k",""],["r","2025-05",29,"VENDA DE PRODUTOS/ SERVIÇOS","PAULO DICKSON DE OLIVEIRA HONORIO",383.33,1,"","Boleto Amigo","c",""],["r","2025-03",7,"VENDA DE PRODUTOS/ SERVIÇOS","PAULO DICKSON DE OLIVEIRA HONORIO",383.33,1,"","Boleto Amigo","k",""],["r","2025-06",24,"VENDA DE PRODUTOS/ SERVIÇOS","GEOVAN TEIXEIRA DA SILVA",383.33,1,"","Boleto Amigo","c",""],["r","2025-05",8,"VENDA DE PRODUTOS/ SERVIÇOS","GEOVAN TEIXEIRA DA SILVA",383.33,1,"","Boleto Amigo","k",""],["r","2025-06",30,"VENDA DE PRODUTOS/ SERVIÇOS","JOÃO CARLOS MORENO DE CARVALHO",395.08,1,"","Boleto Amigo","c",""],["r","2025-03",17,"VENDA DE PRODUTOS/ SERVIÇOS","JOÃO CARLOS MORENO DE CARVALHO",395.08,1,"","Boleto Amigo","k",""],["r","2025-06",27,"VENDA DE PRODUTOS/ SERVIÇOS","DAJANN GARDELL MOREIRA CHAVES",383.33,1,"","Boleto Amigo","c",""],["r","2025-04",30,"VENDA DE PRODUTOS/ SERVIÇOS","DAJANN GARDELL MOREIRA CHAVES",383.33,1,"","Boleto Amigo","k",""],["r","2025-06",25,"VENDA DE PRODUTOS/ SERVIÇOS","LUIS CARLOS GOMES DA SILVA",383.35,1,"","Boleto Amigo","c",""],["r","2024-12",20,"VENDA DE PRODUTOS/ SERVIÇOS","LUIS CARLOS GOMES DA SILVA",383.35,1,"","Boleto Amigo","k",""],["r","2025-07",31,"VENDA DE PRODUTOS/ SERVIÇOS","CLEBER DE JESUS MACHADO",403.66,1,"","Boleto Amigo","c",""],["r","2025-05",30,"VENDA DE PRODUTOS/ SERVIÇOS","CLEBER DE JESUS MACHADO",403.66,1,"","Boleto Amigo","k",""],["r","2025-06",27,"VENDA DE PRODUTOS/ SERVIÇOS","FC MERCEARIA E DISTRIBUIDORA LTDA",383.33,1,"","Boleto Amigo","c",""],["r","2025-05",21,"VENDA DE PRODUTOS/ SERVIÇOS","FC MERCEARIA E DISTRIBUIDORA LTDA",383.33,1,"","Boleto Amigo","k",""],["r","2025-07",9,"VENDA DE PRODUTOS/ SERVIÇOS","CARLOS ALBERTO FERREIRA DA SILVA",397.94,1,"","Boleto Amigo","c",""],["r","2025-03",12,"VENDA DE PRODUTOS/ SERVIÇOS","CARLOS ALBERTO FERREIRA DA SILVA",397.94,1,"","Boleto Amigo","k",""],["r","2025-06",30,"VENDA DE PRODUTOS/ SERVIÇOS","ZEFERINO FONSECA MORAES FILHO",395.08,1,"","Boleto Amigo","c",""],["r","2025-04",4,"VENDA DE PRODUTOS/ SERVIÇOS","ZEFERINO FONSECA MORAES FILHO",395.08,1,"","Boleto Amigo","k",""],["r","2025-06",25,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO SILVA CARNEIRO",383.33,1,"","Boleto Amigo","c",""],["r","2025-03",25,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO SILVA CARNEIRO",383.33,1,"","Boleto Amigo","k",""],["r","2025-07",3,"VENDA DE PRODUTOS/ SERVIÇOS","SANCHEZ FERREIRA DE LIMA",396.38,1,"","Boleto Amigo","c",""],["r","2025-05",28,"VENDA DE PRODUTOS/ SERVIÇOS","SANCHEZ FERREIRA DE LIMA",396.38,1,"","Boleto Amigo","k",""],["r","2025-06",27,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA ALNEIDE DE CALDAS ALMEIDE",383.33,1,"","Boleto Amigo","c",""],["r","2025-05",27,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA ALNEIDE DE CALDAS ALMEIDE",383.33,1,"","Boleto Amigo","k",""],["r","2025-06",24,"VENDA DE PRODUTOS/ SERVIÇOS","JADSON CARLOS DE OLIVEIRA SATURNINO",200,1,"","Boleto Amigo","c",""],["r","2025-06",24,"VENDA DE PRODUTOS/ SERVIÇOS","JADSON CARLOS DE OLIVEIRA SATURNINO",200,1,"","Boleto Amigo","k",""],["r","2025-06",18,"VENDA DE PRODUTOS/ SERVIÇOS","CAMILA GABRIELE CORREA NEVES",200,1,"","Boleto Amigo","c",""],["r","2025-06",23,"VENDA DE PRODUTOS/ SERVIÇOS","CAMILA GABRIELE CORREA NEVES",200,1,"","Boleto Amigo","k",""],["r","2025-06",23,"VENDA DE PRODUTOS/ SERVIÇOS","GORETE PEREIRA DOS SANTOS LIMA",300,1,"","Boleto Amigo","c",""],["r","2025-06",26,"VENDA DE PRODUTOS/ SERVIÇOS","GORETE PEREIRA DOS SANTOS LIMA",300,1,"","Boleto Amigo","k",""],["r","2025-06",24,"VENDA DE PRODUTOS/ SERVIÇOS","RIBAMAR RIBEIRO DOS REIS",383.33,1,"","Boleto Amigo","c",""],["r","2025-05",19,"VENDA DE PRODUTOS/ SERVIÇOS","RIBAMAR RIBEIRO DOS REIS",383.33,1,"","Boleto Amigo","k",""],["r","2025-06",24,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GOMES DIAS",383.33,1,"","Boleto Amigo","c",""],["r","2025-04",22,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GOMES DIAS",383.33,1,"","Boleto Amigo","k",""],["r","2025-06",25,"VENDA DE PRODUTOS/ SERVIÇOS","KATIANA FELIX ALMEIDA",395.6,1,"","Boleto Amigo","c",""],["r","2025-04",15,"VENDA DE PRODUTOS/ SERVIÇOS","KATIANA FELIX ALMEIDA",395.6,1,"","Boleto Amigo","k",""],["r","2025-06",19,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE MANOEL DOS SANTOS JUNIOR",200,1,"","Boleto Amigo","c",""],["r","2025-06",20,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE MANOEL DOS SANTOS JUNIOR",200,1,"","Boleto Amigo","k",""],["r","2025-06",17,"VENDA DE PRODUTOS/ SERVIÇOS","DENISE GRACA DOS SANTOS",200,1,"","Boleto Amigo","c",""],["r","2025-06",19,"VENDA DE PRODUTOS/ SERVIÇOS","DENISE GRACA DOS SANTOS",200,1,"","Boleto Amigo","k",""],["r","2025-06",19,"VENDA DE PRODUTOS/ SERVIÇOS","ALEXANDRE MARRON ARRUDA",200,1,"","Boleto Amigo","c",""],["r","2025-06",19,"VENDA DE PRODUTOS/ SERVIÇOS","ALEXANDRE MARRON ARRUDA",200,1,"","Boleto Amigo","k",""],["r","2025-06",18,"VENDA DE PRODUTOS/ SERVIÇOS","WILLIAN DE OLIVEIRA COELHO JUNIOR",200,1,"","Boleto Amigo","c",""],["r","2025-06",18,"VENDA DE PRODUTOS/ SERVIÇOS","WILLIAN DE OLIVEIRA COELHO JUNIOR",200,1,"","Boleto Amigo","k",""],["r","2025-06",18,"VENDA DE PRODUTOS/ SERVIÇOS","ELDER DOS SANTOS FEITOSA",200,1,"","Boleto Amigo","c",""],["r","2025-06",18,"VENDA DE PRODUTOS/ SERVIÇOS","ELDER DOS SANTOS FEITOSA",200,1,"","Boleto Amigo","k",""],["r","2025-06",18,"VENDA DE PRODUTOS/ SERVIÇOS","NEILSON CARVALHO CAMPOS",200,1,"","Boleto Amigo","c",""],["r","2025-06",17,"VENDA DE PRODUTOS/ SERVIÇOS","NEILSON CARVALHO CAMPOS",200,1,"","Boleto Amigo","k",""],["r","2025-06",16,"VENDA DE PRODUTOS/ SERVIÇOS","PEDRO HENRIQUE RODRIGUES CHARLES TEIXEIRA",200,1,"","Boleto Amigo","c",""],["r","2025-06",16,"VENDA DE PRODUTOS/ SERVIÇOS","PEDRO HENRIQUE RODRIGUES CHARLES TEIXEIRA",200,1,"","Boleto Amigo","k",""],["r","2025-06",16,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO PEREIRA DOS SANTOS",200,1,"","Boleto Amigo","c",""],["r","2025-06",16,"VENDA DE PRODUTOS/ SERVIÇOS","ANTONIO PEREIRA DOS SANTOS",200,1,"","Boleto Amigo","k",""],["r","2025-06",23,"VENDA DE PRODUTOS/ SERVIÇOS","SIMONE DE SOUSA SIQUEIRA",395.34,1,"","Boleto Amigo","c",""],["r","2025-01",17,"VENDA DE PRODUTOS/ SERVIÇOS","SIMONE DE SOUSA SIQUEIRA",395.34,1,"","Boleto Amigo","k",""],["r","2025-06",11,"VENDA DE PRODUTOS/ SERVIÇOS","WILLAME COSTA NUNES",383.33,1,"","Boleto Amigo","c",""],["r","2025-05",13,"VENDA DE PRODUTOS/ SERVIÇOS","WILLAME COSTA NUNES",383.33,1,"","Boleto Amigo","k",""],["r","2025-06",11,"VENDA DE PRODUTOS/ SERVIÇOS","JOVAIR COSTA E SILVA",300,1,"","Boleto Amigo","c",""],["r","2024-11",25,"VENDA DE PRODUTOS/ SERVIÇOS","JOVAIR COSTA E SILVA",300,1,"","Boleto Amigo","k",""],["r","2025-06",23,"VENDA DE PRODUTOS/ SERVIÇOS","ALESSANDRO MAIA NOMIYAMA",395.34,1,"","Boleto Amigo","c",""],["r","2025-05",12,"VENDA DE PRODUTOS/ SERVIÇOS","ALESSANDRO MAIA NOMIYAMA",395.34,1,"","Boleto Amigo","k",""],["r","2025-06",11,"VENDA DE PRODUTOS/ SERVIÇOS","JOELCE FIGUEREDO DE ARAUJO",383.33,1,"","Boleto Amigo","c",""],["r","2025-05",12,"VENDA DE PRODUTOS/ SERVIÇOS","JOELCE FIGUEREDO DE ARAUJO",383.33,1,"","Boleto Amigo","k",""],["r","2025-06",18,"VENDA DE PRODUTOS/ SERVIÇOS","MARIANA ANGELICA SILVA ARAUJO",333.33,1,"","Boleto Amigo","c",""],["r","2025-05",22,"VENDA DE PRODUTOS/ SERVIÇOS","MARIANA ANGELICA SILVA ARAUJO",333.33,1,"","Boleto Amigo","k",""],["r","2025-06",12,"VENDA DE PRODUTOS/ SERVIÇOS","ADAISA ANDRADE SOARES",383.35,1,"","Boleto Amigo","c",""],["r","2024-12",13,"VENDA DE PRODUTOS/ SERVIÇOS","ADAISA ANDRADE SOARES",383.35,1,"","Boleto Amigo","k",""],["r","2025-06",11,"VENDA DE PRODUTOS/ SERVIÇOS","JULIANO DA SILVA",333.33,1,"","Boleto Amigo","c",""],["r","2025-01",15,"VENDA DE PRODUTOS/ SERVIÇOS","JULIANO DA SILVA",333.33,1,"","Boleto Amigo","k",""],["r","2025-06",13,"VENDA DE PRODUTOS/ SERVIÇOS","CLEBIANO RAMALHO DA SILVA",500,1,"","Boleto Amigo","c",""],["r","2025-06",13,"VENDA DE PRODUTOS/ SERVIÇOS","CLEBIANO RAMALHO DA SILVA",500,1,"","Boleto Amigo","k",""],["r","2025-06",12,"VENDA DE PRODUTOS/ SERVIÇOS","DENISE GRACA DOS SANTOS",200,1,"","Boleto Amigo","c",""],["r","2025-06",12,"VENDA DE PRODUTOS/ SERVIÇOS","DENISE GRACA DOS SANTOS",200,1,"","Boleto Amigo","k",""],["r","2025-06",12,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA MARGARIDA DA SILVA",383.33,1,"","Boleto Amigo","c",""],["r","2025-05",23,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA MARGARIDA DA SILVA",383.33,1,"","Boleto Amigo","k",""],["r","2025-06",10,"VENDA DE PRODUTOS/ SERVIÇOS","SAMUEL FERREIRA RAMOS",383.33,1,"","Boleto Amigo","c",""],["r","2025-04",24,"VENDA DE PRODUTOS/ SERVIÇOS","SAMUEL FERREIRA RAMOS",383.33,1,"","Boleto Amigo","k",""],["r","2025-06",10,"VENDA DE PRODUTOS/ SERVIÇOS","LEONARDO CASTRO DE JESUS",200,1,"","Boleto Amigo","c",""],["r","2025-06",10,"VENDA DE PRODUTOS/ SERVIÇOS","LEONARDO CASTRO DE JESUS",200,1,"","Boleto Amigo","k",""],["r","2025-06",12,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE ERNANDE MEIRELES CASTRO",366.67,1,"","Boleto Amigo","c",""],["r","2025-01",28,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE ERNANDE MEIRELES CASTRO",366.67,1,"","Boleto Amigo","k",""],["r","2025-06",11,"VENDA DE PRODUTOS/ SERVIÇOS","VANIA DA SILVA MEIRELLES",383.33,1,"","Boleto Amigo","c",""],["r","2025-03",7,"VENDA DE PRODUTOS/ SERVIÇOS","VANIA DA SILVA MEIRELLES",383.33,1,"","Boleto Amigo","k",""],["r","2025-06",6,"VENDA DE PRODUTOS/ SERVIÇOS","GENESINA ALVES NETA",383.33,1,"","Boleto Amigo","c",""],["r","2025-05",8,"VENDA DE PRODUTOS/ SERVIÇOS","GENESINA ALVES NETA",383.33,1,"","Boleto Amigo","k",""],["r","2025-06",12,"VENDA DE PRODUTOS/ SERVIÇOS","ESTER ALVES CAMELO",383.33,1,"","Boleto Amigo","c",""],["r","2025-05",30,"VENDA DE PRODUTOS/ SERVIÇOS","ESTER ALVES CAMELO",383.33,1,"","Boleto Amigo","k",""],["r","2025-06",9,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA URSULA RIOS CARNEIRO",200,1,"","Boleto Amigo","c",""],["r","2025-06",9,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA URSULA RIOS CARNEIRO",200,1,"","Boleto Amigo","k",""],["r","2025-06",10,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA AUXILIADORA GOMES DOS SANTOS",460,1,"","Boleto Amigo","c",""],["r","2024-10",9,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA AUXILIADORA GOMES DOS SANTOS",460,1,"","Boleto Amigo","k",""],["r","2025-06",6,"VENDA DE PRODUTOS/ SERVIÇOS","UELTON FRANCISCO DOS SANTOS",200,1,"","Boleto Amigo","c",""],["r","2025-06",6,"VENDA DE PRODUTOS/ SERVIÇOS","UELTON FRANCISCO DOS SANTOS",200,1,"","Boleto Amigo","k",""],["r","2025-06",3,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE AELITON DA SILVA",200,1,"","Boleto Amigo","c",""],["r","2025-06",5,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE AELITON DA SILVA",200,1,"","Boleto Amigo","k",""],["r","2025-06",9,"VENDA DE PRODUTOS/ SERVIÇOS","FLORISMAR TAVARES BATISTA",383.33,1,"","Boleto Amigo","c",""],["r","2025-05",2,"VENDA DE PRODUTOS/ SERVIÇOS","FLORISMAR TAVARES BATISTA",383.33,1,"","Boleto Amigo","k",""],["r","2025-06",9,"VENDA DE PRODUTOS/ SERVIÇOS","GLEIDSON MORAES DO NASCIMENTO",383.33,1,"","Boleto Amigo","c",""],["r","2025-05",6,"VENDA DE PRODUTOS/ SERVIÇOS","GLEIDSON MORAES DO NASCIMENTO",383.33,1,"","Boleto Amigo","k",""],["r","2025-06",4,"VENDA DE PRODUTOS/ SERVIÇOS","ERENILZA CARVALHO DA SILVA SOUSA",200,1,"","Boleto Amigo","c",""],["r","2025-06",4,"VENDA DE PRODUTOS/ SERVIÇOS","ERENILZA CARVALHO DA SILVA SOUSA",200,1,"","Boleto Amigo","k",""],["r","2025-06",4,"VENDA DE PRODUTOS/ SERVIÇOS","NADIR ALVES TEIXEIRA",200,1,"","Boleto Amigo","c",""],["r","2025-06",4,"VENDA DE PRODUTOS/ SERVIÇOS","NADIR ALVES TEIXEIRA",200,1,"","Boleto Amigo","k",""],["r","2025-06",4,"VENDA DE PRODUTOS/ SERVIÇOS","JUANITA APARECIDA FELICIANO",200,1,"","Boleto Amigo","c",""],["r","2025-06",4,"VENDA DE PRODUTOS/ SERVIÇOS","JUANITA APARECIDA FELICIANO",200,1,"","Boleto Amigo","k",""],["r","2025-06",4,"VENDA DE PRODUTOS/ SERVIÇOS","KAIO CESAR FREITAS PEREIRA",200,1,"","Boleto Amigo","c",""],["r","2025-06",4,"VENDA DE PRODUTOS/ SERVIÇOS","KAIO CESAR FREITAS PEREIRA",200,1,"","Boleto Amigo","k",""],["r","2025-06",2,"VENDA DE PRODUTOS/ SERVIÇOS","LUIS FILIPE PEREIRA DA FONSECA",200,1,"","Boleto Amigo","c",""],["r","2025-06",2,"VENDA DE PRODUTOS/ SERVIÇOS","LUIS FILIPE PEREIRA DA FONSECA",200,1,"","Boleto Amigo","k",""],["r","2025-05",30,"VENDA DE PRODUTOS/ SERVIÇOS","ESTER ALVES CAMELO",200,1,"","Boleto Amigo","c",""],["r","2025-05",30,"VENDA DE PRODUTOS/ SERVIÇOS","ESTER ALVES CAMELO",200,1,"","Boleto Amigo","k",""],["r","2025-05",29,"VENDA DE PRODUTOS/ SERVIÇOS","ROGERIO ARLINDO DO CARMO RIBEIRO",200,1,"","Boleto Amigo","c",""],["r","2025-05",30,"VENDA DE PRODUTOS/ SERVIÇOS","ROGERIO ARLINDO DO CARMO RIBEIRO",200,1,"","Boleto Amigo","k",""],["r","2025-05",28,"VENDA DE PRODUTOS/ SERVIÇOS","SANCHEZ FERREIRA DE LIMA",200,1,"","Boleto Amigo","c",""],["r","2025-05",28,"VENDA DE PRODUTOS/ SERVIÇOS","SANCHEZ FERREIRA DE LIMA",200,1,"","Boleto Amigo","k",""],["r","2025-05",26,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA ALNEIDE DE CALDAS ALMEIDE",200,1,"","Boleto Amigo","c",""],["r","2025-05",26,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCA ALNEIDE DE CALDAS ALMEIDE",200,1,"","Boleto Amigo","k",""],["r","2025-05",28,"VENDA DE PRODUTOS/ SERVIÇOS","TIANA CARLA FABICHACKI LOPES",383.33,1,"","Boleto Amigo","c",""],["r","2025-03",19,"VENDA DE PRODUTOS/ SERVIÇOS","TIANA CARLA FABICHACKI LOPES",383.33,1,"","Boleto Amigo","k",""],["r","2025-05",29,"VENDA DE PRODUTOS/ SERVIÇOS","GEDAIAS FERREIRA BRAGA",395.08,1,"","Boleto Amigo","c",""],["r","2025-04",24,"VENDA DE PRODUTOS/ SERVIÇOS","GEDAIAS FERREIRA BRAGA",395.08,1,"","Boleto Amigo","k",""],["r","2025-05",22,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO SILVA CARNEIRO",383.33,1,"","Boleto Amigo","c",""],["r","2025-03",25,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO SILVA CARNEIRO",383.33,1,"","Boleto Amigo","k",""],["r","2025-05",28,"VENDA DE PRODUTOS/ SERVIÇOS","VALDETE SANTANA RIBEIRO BATISTA",383.33,1,"","Boleto Amigo","c",""],["r","2025-04",17,"VENDA DE PRODUTOS/ SERVIÇOS","VALDETE SANTANA RIBEIRO BATISTA",383.33,1,"","Boleto Amigo","k",""],["r","2025-05",30,"VENDA DE PRODUTOS/ SERVIÇOS","CARLOS ALBERTO FERREIRA DA SILVA",395.34,1,"","Boleto Amigo","c",""],["r","2025-03",12,"VENDA DE PRODUTOS/ SERVIÇOS","CARLOS ALBERTO FERREIRA DA SILVA",395.34,1,"","Boleto Amigo","k",""],["r","2025-05",29,"VENDA DE PRODUTOS/ SERVIÇOS","ZEFERINO FONSECA MORAES FILHO",395.08,1,"","Boleto Amigo","c",""],["r","2025-04",4,"VENDA DE PRODUTOS/ SERVIÇOS","ZEFERINO FONSECA MORAES FILHO",395.08,1,"","Boleto Amigo","k",""],["r","2025-05",28,"VENDA DE PRODUTOS/ SERVIÇOS","LUIS CARLOS GOMES DA SILVA",383.33,1,"","Boleto Amigo","c",""],["r","2024-12",20,"VENDA DE PRODUTOS/ SERVIÇOS","LUIS CARLOS GOMES DA SILVA",383.33,1,"","Boleto Amigo","k",""],["r","2025-05",29,"VENDA DE PRODUTOS/ SERVIÇOS","DAJANN GARDELL MOREIRA CHAVES",395.08,1,"","Boleto Amigo","c",""],["r","2025-04",30,"VENDA DE PRODUTOS/ SERVIÇOS","DAJANN GARDELL MOREIRA CHAVES",395.08,1,"","Boleto Amigo","k",""],["r","2025-05",28,"VENDA DE PRODUTOS/ SERVIÇOS","LUIZ PAULO BARBOSA DA SILVA",383.33,1,"","Boleto Amigo","c",""],["r","2025-04",29,"VENDA DE PRODUTOS/ SERVIÇOS","LUIZ PAULO BARBOSA DA SILVA",383.33,1,"","Boleto Amigo","k",""],["r","2025-06",9,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA LUCIDALVA CALAZANS SANTOS",397.42,1,"","Boleto Amigo","c",""],["r","2025-04",24,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA LUCIDALVA CALAZANS SANTOS",397.42,1,"","Boleto Amigo","k",""],["r","2025-06",9,"VENDA DE PRODUTOS/ SERVIÇOS","MARINA GAMA DA SILVA SOUSA SOB PROC JOSE ALBERTO DE SOUSA F.",397.42,1,"","Boleto Amigo","c",""],["r","2025-02",20,"VENDA DE PRODUTOS/ SERVIÇOS","MARINA GAMA DA SILVA SOUSA SOB PROC JOSE ALBERTO DE SOUSA F.",397.42,1,"","Boleto Amigo","k",""],["r","2025-05",21,"VENDA DE PRODUTOS/ SERVIÇOS","JOÃO CARLOS MORENO DE CARVALHO",383.33,1,"","Boleto Amigo","c",""],["r","2025-03",17,"VENDA DE PRODUTOS/ SERVIÇOS","JOÃO CARLOS MORENO DE CARVALHO",383.33,1,"","Boleto Amigo","k",""],["r","2025-05",23,"VENDA DE PRODUTOS/ SERVIÇOS","CLEBER DE JESUS MACHADO",200,1,"","Boleto Amigo","c",""],["r","2025-05",23,"VENDA DE PRODUTOS/ SERVIÇOS","CLEBER DE JESUS MACHADO",200,1,"","Boleto Amigo","k",""],["r","2025-05",9,"VENDA DE PRODUTOS/ SERVIÇOS","MARIANA ANGELICA SILVA ARAUJO",500,1,"","Boleto Amigo","c",""],["r","2025-05",22,"VENDA DE PRODUTOS/ SERVIÇOS","MARIANA ANGELICA SILVA ARAUJO",500,1,"","Boleto Amigo","k",""],["r","2025-05",21,"OUTRAS RECEITAS","MERCADO LIVRE",167,1,"","Boleto Amigo","c",""],["r","2025-05",22,"OUTRAS RECEITAS","MERCADO LIVRE",167,1,"","Boleto Amigo","k",""],["r","2025-05",21,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE APARECIDO DE MOURA",200,1,"","Boleto Amigo","c",""],["r","2025-05",21,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE APARECIDO DE MOURA",200,1,"","Boleto Amigo","k",""],["r","2025-05",21,"VENDA DE PRODUTOS/ SERVIÇOS","FC MERCEARIA E DISTRIBUIDORA LTDA",200,1,"","Boleto Amigo","c",""],["r","2025-05",21,"VENDA DE PRODUTOS/ SERVIÇOS","FC MERCEARIA E DISTRIBUIDORA LTDA",200,1,"","Boleto Amigo","k",""],["r","2025-05",27,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GOMES DIAS",383.33,1,"","Boleto Amigo","c",""],["r","2025-04",22,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GOMES DIAS",383.33,1,"","Boleto Amigo","k",""],["r","2025-05",14,"VENDA DE PRODUTOS/ SERVIÇOS","KATIANA FELIX ALMEIDA",383.33,1,"","Boleto Amigo","c",""],["r","2025-04",15,"VENDA DE PRODUTOS/ SERVIÇOS","KATIANA FELIX ALMEIDA",383.33,1,"","Boleto Amigo","k",""],["r","2025-05",19,"VENDA DE PRODUTOS/ SERVIÇOS","RIBAMAR RIBEIRO DOS REIS",200,1,"","Boleto Amigo","c",""],["r","2025-05",19,"VENDA DE PRODUTOS/ SERVIÇOS","RIBAMAR RIBEIRO DOS REIS",200,1,"","Boleto Amigo","k",""],["r","2025-05",21,"VENDA DE PRODUTOS/ SERVIÇOS","SIMONE DE SOUSA SIQUEIRA",395.86,1,"","Boleto Amigo","c",""],["r","2025-01",17,"VENDA DE PRODUTOS/ SERVIÇOS","SIMONE DE SOUSA SIQUEIRA",395.86,1,"","Boleto Amigo","k",""],["r","2025-05",14,"VENDA DE PRODUTOS/ SERVIÇOS","ADAISA ANDRADE SOARES",383.33,1,"","Boleto Amigo","c",""],["r","2024-12",13,"VENDA DE PRODUTOS/ SERVIÇOS","ADAISA ANDRADE SOARES",383.33,1,"","Boleto Amigo","k",""],["r","2025-05",15,"VENDA DE PRODUTOS/ SERVIÇOS","JULIANO DA SILVA",333.33,1,"","Boleto Amigo","c",""],["r","2025-01",15,"VENDA DE PRODUTOS/ SERVIÇOS","JULIANO DA SILVA",333.33,1,"","Boleto Amigo","k",""],["r","2025-05",14,"VENDA DE PRODUTOS/ SERVIÇOS","JOVAIR COSTA E SILVA",300,1,"","Boleto Amigo","c",""],["r","2024-11",25,"VENDA DE PRODUTOS/ SERVIÇOS","JOVAIR COSTA E SILVA",300,1,"","Boleto Amigo","k",""],["r","2025-07",1,"VENDA DE PRODUTOS/ SERVIÇOS","LEONARDO DE SOUSA DAS CHAGAS",406,1,"","Boleto Amigo","c",""],["r","2025-01",10,"VENDA DE PRODUTOS/ SERVIÇOS","LEONARDO DE SOUSA DAS CHAGAS",406,1,"","Boleto Amigo","k",""],["r","2025-06",6,"VENDA DE PRODUTOS/ SERVIÇOS","LUCIANO BARBOSA DA SILVA",400.02,1,"","Boleto Amigo","c",""],["r","2025-03",14,"VENDA DE PRODUTOS/ SERVIÇOS","LUCIANO BARBOSA DA SILVA",400.02,1,"","Boleto Amigo","k",""],["r","2025-05",15,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA MARGARIDA DA SILVA",200,1,"","Boleto Amigo","c",""],["r","2025-05",15,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA MARGARIDA DA SILVA",200,1,"","Boleto Amigo","k",""],["r","2025-05",12,"VENDA DE PRODUTOS/ SERVIÇOS","JODERVAL DE MACEDO NEGREIROS",200,1,"","Boleto Amigo","c",""],["r","2025-05",12,"VENDA DE PRODUTOS/ SERVIÇOS","JODERVAL DE MACEDO NEGREIROS",200,1,"","Boleto Amigo","k",""],["r","2025-04",30,"VENDA DE PRODUTOS/ SERVIÇOS","JOELCE FIGUEREDO DE ARAUJO",200,1,"","Boleto Amigo","c",""],["r","2025-04",30,"VENDA DE PRODUTOS/ SERVIÇOS","JOELCE FIGUEREDO DE ARAUJO",200,1,"","Boleto Amigo","k",""],["r","2025-05",12,"VENDA DE PRODUTOS/ SERVIÇOS","WILLAME COSTA NUNES",200,1,"","Boleto Amigo","c",""],["r","2025-05",12,"VENDA DE PRODUTOS/ SERVIÇOS","WILLAME COSTA NUNES",200,1,"","Boleto Amigo","k",""],["r","2025-05",12,"VENDA DE PRODUTOS/ SERVIÇOS","SAMUEL FERREIRA RAMOS",383.33,1,"","Boleto Amigo","c",""],["r","2025-04",24,"VENDA DE PRODUTOS/ SERVIÇOS","SAMUEL FERREIRA RAMOS",383.33,1,"","Boleto Amigo","k",""],["r","2025-05",13,"VENDA DE PRODUTOS/ SERVIÇOS","VANIA DA SILVA MEIRELLES",383.33,1,"","Boleto Amigo","c",""],["r","2025-03",7,"VENDA DE PRODUTOS/ SERVIÇOS","VANIA DA SILVA MEIRELLES",383.33,1,"","Boleto Amigo","k",""],["r","2025-05",14,"VENDA DE PRODUTOS/ SERVIÇOS","FLÁVIO TURMINA",383.33,1,"","Boleto Amigo","c",""],["r","2025-01",22,"VENDA DE PRODUTOS/ SERVIÇOS","FLÁVIO TURMINA",383.33,1,"","Boleto Amigo","k",""],["r","2025-05",16,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE ERNANDE MEIRELES CASTRO",378.17,1,"","Boleto Amigo","c",""],["r","2025-01",28,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE ERNANDE MEIRELES CASTRO",378.17,1,"","Boleto Amigo","k",""],["r","2025-05",9,"VENDA DE PRODUTOS/ SERVIÇOS","ALESSANDRO MAIA NOMIYAMA",200,1,"","Boleto Amigo","c",""],["r","2025-05",9,"VENDA DE PRODUTOS/ SERVIÇOS","ALESSANDRO MAIA NOMIYAMA",200,1,"","Boleto Amigo","k",""],["r","2025-05",8,"VENDA DE PRODUTOS/ SERVIÇOS","BENEDITO PAULO DA SILVA",200,1,"","Boleto Amigo","c",""],["r","2025-05",8,"VENDA DE PRODUTOS/ SERVIÇOS","BENEDITO PAULO DA SILVA",200,1,"","Boleto Amigo","k",""],["r","2025-05",8,"VENDA DE PRODUTOS/ SERVIÇOS","GENESINA ALVES NETA",200,1,"","Boleto Amigo","c",""],["r","2025-05",8,"VENDA DE PRODUTOS/ SERVIÇOS","GENESINA ALVES NETA",200,1,"","Boleto Amigo","k",""],["r","2025-05",6,"VENDA DE PRODUTOS/ SERVIÇOS","GEOVAN TEIXEIRA DA SILVA",200,1,"","Boleto Amigo","c",""],["r","2025-05",8,"VENDA DE PRODUTOS/ SERVIÇOS","GEOVAN TEIXEIRA DA SILVA",200,1,"","Boleto Amigo","k",""],["r","2025-05",8,"VENDA DE PRODUTOS/ SERVIÇOS","ERIKA DE SOUZA COSTA",200,1,"","Boleto Amigo","c",""],["r","2025-05",8,"VENDA DE PRODUTOS/ SERVIÇOS","ERIKA DE SOUZA COSTA",200,1,"","Boleto Amigo","k",""],["r","2025-05",8,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA AUXILIADORA GOMES DOS SANTOS",460,1,"","Boleto Amigo","c",""],["r","2024-10",9,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA AUXILIADORA GOMES DOS SANTOS",460,1,"","Boleto Amigo","k",""],["r","2025-05",2,"VENDA DE PRODUTOS/ SERVIÇOS","GLEIDSON MORAES DO NASCIMENTO",200,1,"","Boleto Amigo","c",""],["r","2025-05",2,"VENDA DE PRODUTOS/ SERVIÇOS","GLEIDSON MORAES DO NASCIMENTO",200,1,"","Boleto Amigo","k",""],["r","2025-05",2,"VENDA DE PRODUTOS/ SERVIÇOS","FLORISMAR TAVARES BATISTA",200,1,"","Boleto Amigo","c",""],["r","2025-05",2,"VENDA DE PRODUTOS/ SERVIÇOS","FLORISMAR TAVARES BATISTA",200,1,"","Boleto Amigo","k",""],["r","2025-04",30,"VENDA DE PRODUTOS/ SERVIÇOS","VILMA DE JESUS LIMA",200,1,"","Boleto Amigo","c",""],["r","2025-04",30,"VENDA DE PRODUTOS/ SERVIÇOS","VILMA DE JESUS LIMA",200,1,"","Boleto Amigo","k",""],["r","2025-04",29,"VENDA DE PRODUTOS/ SERVIÇOS","DAJANN GARDELL MOREIRA CHAVES",200,1,"","Boleto Amigo","c",""],["r","2025-04",29,"VENDA DE PRODUTOS/ SERVIÇOS","DAJANN GARDELL MOREIRA CHAVES",200,1,"","Boleto Amigo","k",""],["r","2025-04",29,"VENDA DE PRODUTOS/ SERVIÇOS","LUIZ PAULO BARBOSA DA SILVA",200,1,"","Boleto Amigo","c",""],["r","2025-04",29,"VENDA DE PRODUTOS/ SERVIÇOS","LUIZ PAULO BARBOSA DA SILVA",200,1,"","Boleto Amigo","k",""],["r","2025-04",29,"VENDA DE PRODUTOS/ SERVIÇOS","TIANA CARLA FABICHACKI LOPES",383.33,1,"","Boleto Amigo","c",""],["r","2025-03",19,"VENDA DE PRODUTOS/ SERVIÇOS","TIANA CARLA FABICHACKI LOPES",383.33,1,"","Boleto Amigo","k",""],["r","2025-04",29,"VENDA DE PRODUTOS/ SERVIÇOS","PAULO DICKSON DE OLIVEIRA HONORIO",383.33,1,"","Boleto Amigo","c",""],["r","2025-03",7,"VENDA DE PRODUTOS/ SERVIÇOS","PAULO DICKSON DE OLIVEIRA HONORIO",383.33,1,"","Boleto Amigo","k",""],["r","2025-04",29,"VENDA DE PRODUTOS/ SERVIÇOS","CLEIRE IONE RODRIGUES MARQUES",330,1,"","Boleto Amigo","c",""],["r","2024-11",28,"VENDA DE PRODUTOS/ SERVIÇOS","CLEIRE IONE RODRIGUES MARQUES",330,1,"","Boleto Amigo","k",""],["r","2025-04",23,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO SILVA CARNEIRO",383.33,1,"","Boleto Amigo","c",""],["r","2025-03",25,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO SILVA CARNEIRO",383.33,1,"","Boleto Amigo","k",""],["r","2025-04",24,"VENDA DE PRODUTOS/ SERVIÇOS","LUIS CARLOS GOMES DA SILVA",383.33,1,"","Boleto Amigo","c",""],["r","2024-12",20,"VENDA DE PRODUTOS/ SERVIÇOS","LUIS CARLOS GOMES DA SILVA",383.33,1,"","Boleto Amigo","k",""],["r","2025-04",30,"VENDA DE PRODUTOS/ SERVIÇOS","CARLOS ALBERTO FERREIRA DA SILVA",395.6,1,"","Boleto Amigo","c",""],["r","2025-03",12,"VENDA DE PRODUTOS/ SERVIÇOS","CARLOS ALBERTO FERREIRA DA SILVA",395.6,1,"","Boleto Amigo","k",""],["r","2025-06",4,"VENDA DE PRODUTOS/ SERVIÇOS","CARLOS ROBERTO FARIAS MOREIRA",485.58,1,"","Boleto Amigo","c",""],["r","2024-11",12,"VENDA DE PRODUTOS/ SERVIÇOS","CARLOS ROBERTO FARIAS MOREIRA",485.58,1,"","Boleto Amigo","k",""],["r","2025-05",7,"VENDA DE PRODUTOS/ SERVIÇOS","MARINA GAMA DA SILVA SOUSA SOB PROC JOSE ALBERTO DE SOUSA F.",397.42,1,"","Boleto Amigo","c",""],["r","2025-02",20,"VENDA DE PRODUTOS/ SERVIÇOS","MARINA GAMA DA SILVA SOUSA SOB PROC JOSE ALBERTO DE SOUSA F.",397.42,1,"","Boleto Amigo","k",""],["r","2025-04",23,"VENDA DE PRODUTOS/ SERVIÇOS","SAMUEL FERREIRA RAMOS",200,1,"","Boleto Amigo","c",""],["r","2025-04",24,"VENDA DE PRODUTOS/ SERVIÇOS","SAMUEL FERREIRA RAMOS",200,1,"","Boleto Amigo","k",""],["r","2025-04",17,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA LUCIDALVA CALAZANS SANTOS",200,1,"","Boleto Amigo","c",""],["r","2025-04",24,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA LUCIDALVA CALAZANS SANTOS",200,1,"","Boleto Amigo","k",""],["r","2025-04",22,"VENDA DE PRODUTOS/ SERVIÇOS","GEDAIAS FERREIRA BRAGA",200,1,"","Boleto Amigo","c",""],["r","2025-04",24,"VENDA DE PRODUTOS/ SERVIÇOS","GEDAIAS FERREIRA BRAGA",200,1,"","Boleto Amigo","k",""],["r","2025-04",16,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GOMES DIAS",200,1,"","Boleto Amigo","c",""],["r","2025-04",22,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO GOMES DIAS",200,1,"","Boleto Amigo","k",""],["r","2025-04",17,"VENDA DE PRODUTOS/ SERVIÇOS","VALDETE SANTANA RIBEIRO BATISTA",200,1,"","Boleto Amigo","c",""],["r","2025-04",17,"VENDA DE PRODUTOS/ SERVIÇOS","VALDETE SANTANA RIBEIRO BATISTA",200,1,"","Boleto Amigo","k",""],["r","2025-04",14,"VENDA DE PRODUTOS/ SERVIÇOS","JULIANO DA SILVA",333.33,1,"","Boleto Amigo","c",""],["r","2025-01",15,"VENDA DE PRODUTOS/ SERVIÇOS","JULIANO DA SILVA",333.33,1,"","Boleto Amigo","k",""],["r","2025-04",10,"VENDA DE PRODUTOS/ SERVIÇOS","ADAISA ANDRADE SOARES",383.33,1,"","Boleto Amigo","c",""],["r","2024-12",13,"VENDA DE PRODUTOS/ SERVIÇOS","ADAISA ANDRADE SOARES",383.33,1,"","Boleto Amigo","k",""],["r","2025-04",9,"VENDA DE PRODUTOS/ SERVIÇOS","SIMONE DE SOUSA SIQUEIRA",383.33,1,"","Boleto Amigo","c",""],["r","2025-01",17,"VENDA DE PRODUTOS/ SERVIÇOS","SIMONE DE SOUSA SIQUEIRA",383.33,1,"","Boleto Amigo","k",""],["r","2025-05",12,"VENDA DE PRODUTOS/ SERVIÇOS","LEONARDO DE SOUSA DAS CHAGAS",400.8,1,"","Boleto Amigo","c",""],["r","2025-01",10,"VENDA DE PRODUTOS/ SERVIÇOS","LEONARDO DE SOUSA DAS CHAGAS",400.8,1,"","Boleto Amigo","k",""],["r","2025-05",8,"VENDA DE PRODUTOS/ SERVIÇOS","JOSEMAR RODRIGUES DOS SANTOS",459.29,1,"","Boleto Amigo","c",""],["r","2024-11",4,"VENDA DE PRODUTOS/ SERVIÇOS","JOSEMAR RODRIGUES DOS SANTOS",459.29,1,"","Boleto Amigo","k",""],["r","2025-04",16,"VENDA DE PRODUTOS/ SERVIÇOS","JOVAIR COSTA E SILVA",300,1,"","Boleto Amigo","c",""],["r","2024-11",25,"VENDA DE PRODUTOS/ SERVIÇOS","JOVAIR COSTA E SILVA",300,1,"","Boleto Amigo","k",""],["r","2025-04",23,"VENDA DE PRODUTOS/ SERVIÇOS","APARECIDA SOUTO SOUZA",296.5,1,"","Boleto Amigo","c",""],["r","2024-12",18,"VENDA DE PRODUTOS/ SERVIÇOS","APARECIDA SOUTO SOUZA",296.5,1,"","Boleto Amigo","k",""],["r","2025-04",17,"VENDA DE PRODUTOS/ SERVIÇOS","KATIANA FELIX ALMEIDA",200,1,"","Boleto Amigo","c",""],["r","2025-04",15,"VENDA DE PRODUTOS/ SERVIÇOS","KATIANA FELIX ALMEIDA",200,1,"","Boleto Amigo","k",""],["r","2025-04",11,"VENDA DE PRODUTOS/ SERVIÇOS","Maria Tereza Americo Ferreira",300,1,"","Boleto Amigo","c",""],["r","2024-11",26,"VENDA DE PRODUTOS/ SERVIÇOS","Maria Tereza Americo Ferreira",300,1,"","Boleto Amigo","k",""],["r","2025-04",29,"VENDA DE PRODUTOS/ SERVIÇOS","LUCIANO BARBOSA DA SILVA",397.42,1,"","Boleto Amigo","c",""],["r","2025-03",14,"VENDA DE PRODUTOS/ SERVIÇOS","LUCIANO BARBOSA DA SILVA",397.42,1,"","Boleto Amigo","k",""],["r","2025-04",15,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE ERNANDE MEIRELES CASTRO",377.92,1,"","Boleto Amigo","c",""],["r","2025-01",28,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE ERNANDE MEIRELES CASTRO",377.92,1,"","Boleto Amigo","k",""],["r","2025-04",8,"VENDA DE PRODUTOS/ SERVIÇOS","VANIA DA SILVA MEIRELLES",383.33,1,"","Boleto Amigo","c",""],["r","2025-03",7,"VENDA DE PRODUTOS/ SERVIÇOS","VANIA DA SILVA MEIRELLES",383.33,1,"","Boleto Amigo","k",""],["r","2025-04",14,"VENDA DE PRODUTOS/ SERVIÇOS","FLÁVIO TURMINA",383.33,1,"","Boleto Amigo","c",""],["r","2025-01",22,"VENDA DE PRODUTOS/ SERVIÇOS","FLÁVIO TURMINA",383.33,1,"","Boleto Amigo","k",""],["r","2025-04",9,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA AUXILIADORA GOMES DOS SANTOS",474.73,1,"","Boleto Amigo","c",""],["r","2024-10",9,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA AUXILIADORA GOMES DOS SANTOS",474.73,1,"","Boleto Amigo","k",""],["r","2025-04",2,"VENDA DE PRODUTOS/ SERVIÇOS","ZEFERINO FONSECA MORAES FILHO",200,1,"","Boleto Amigo","c",""],["r","2025-04",4,"VENDA DE PRODUTOS/ SERVIÇOS","ZEFERINO FONSECA MORAES FILHO",200,1,"","Boleto Amigo","k",""],["r","2025-03",27,"VENDA DE PRODUTOS/ SERVIÇOS","GENAILTON ALVES DE SOUSA",200,1,"","Boleto Amigo","c",""],["r","2025-03",27,"VENDA DE PRODUTOS/ SERVIÇOS","GENAILTON ALVES DE SOUSA",200,1,"","Boleto Amigo","k",""],["r","2025-03",26,"VENDA DE PRODUTOS/ SERVIÇOS","ILEILSON MACIEL DOS REIS",200,1,"","Boleto Amigo","c",""],["r","2025-03",27,"VENDA DE PRODUTOS/ SERVIÇOS","ILEILSON MACIEL DOS REIS",200,1,"","Boleto Amigo","k",""],["r","2025-03",26,"VENDA DE PRODUTOS/ SERVIÇOS","LUIS CARLOS GOMES DA SILVA",383.33,1,"","Boleto Amigo","c",""],["r","2024-12",20,"VENDA DE PRODUTOS/ SERVIÇOS","LUIS CARLOS GOMES DA SILVA",383.33,1,"","Boleto Amigo","k",""],["r","2025-03",31,"VENDA DE PRODUTOS/ SERVIÇOS","MARINA GAMA DA SILVA SOUSA SOB PROC JOSE ALBERTO DE SOUSA F.",395.34,1,"","Boleto Amigo","c",""],["r","2025-02",20,"VENDA DE PRODUTOS/ SERVIÇOS","MARINA GAMA DA SILVA SOUSA SOB PROC JOSE ALBERTO DE SOUSA F.",395.34,1,"","Boleto Amigo","k",""],["r","2025-04",8,"VENDA DE PRODUTOS/ SERVIÇOS","PAULO CESAR FERREIRA SOARES",397.42,1,"","Boleto Amigo","c",""],["r","2025-02",28,"VENDA DE PRODUTOS/ SERVIÇOS","PAULO CESAR FERREIRA SOARES",397.42,1,"","Boleto Amigo","k",""],["r","2025-03",27,"VENDA DE PRODUTOS/ SERVIÇOS","CLEIRE IONE RODRIGUES MARQUES",330,1,"","Boleto Amigo","c",""],["r","2024-11",28,"VENDA DE PRODUTOS/ SERVIÇOS","CLEIRE IONE RODRIGUES MARQUES",330,1,"","Boleto Amigo","k",""],["r","2025-04",9,"VENDA DE PRODUTOS/ SERVIÇOS","CARLOS ROBERTO FARIAS MOREIRA",477.83,1,"","Boleto Amigo","c",""],["r","2024-11",12,"VENDA DE PRODUTOS/ SERVIÇOS","CARLOS ROBERTO FARIAS MOREIRA",477.83,1,"","Boleto Amigo","k",""],["r","2025-03",22,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO SILVA CARNEIRO",200,1,"","Boleto Amigo","c",""],["r","2025-03",25,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO SILVA CARNEIRO",200,1,"","Boleto Amigo","k",""],["r","2025-03",18,"VENDA DE PRODUTOS/ SERVIÇOS","TIANA CARLA FABICHACKI LOPES",200,1,"","Boleto Amigo","c",""],["r","2025-03",18,"VENDA DE PRODUTOS/ SERVIÇOS","TIANA CARLA FABICHACKI LOPES",200,1,"","Boleto Amigo","k",""],["r","2025-03",12,"VENDA DE PRODUTOS/ SERVIÇOS","APARECIDA SOUTO SOUZA",287.5,1,"","Boleto Amigo","c",""],["r","2024-12",18,"VENDA DE PRODUTOS/ SERVIÇOS","APARECIDA SOUTO SOUZA",287.5,1,"","Boleto Amigo","k",""],["r","2025-03",12,"VENDA DE PRODUTOS/ SERVIÇOS","ADAISA ANDRADE SOARES",383.33,1,"","Boleto Amigo","c",""],["r","2024-12",13,"VENDA DE PRODUTOS/ SERVIÇOS","ADAISA ANDRADE SOARES",383.33,1,"","Boleto Amigo","k",""],["r","2025-04",8,"VENDA DE PRODUTOS/ SERVIÇOS","LEONARDO DE SOUSA DAS CHAGAS",399.5,1,"","Boleto Amigo","c",""],["r","2025-01",10,"VENDA DE PRODUTOS/ SERVIÇOS","LEONARDO DE SOUSA DAS CHAGAS",399.5,1,"","Boleto Amigo","k",""],["r","2025-03",18,"VENDA DE PRODUTOS/ SERVIÇOS","JULIANO DA SILVA",333.33,1,"","Boleto Amigo","c",""],["r","2025-01",15,"VENDA DE PRODUTOS/ SERVIÇOS","JULIANO DA SILVA",333.33,1,"","Boleto Amigo","k",""],["r","2025-03",13,"VENDA DE PRODUTOS/ SERVIÇOS","Maria Tereza Americo Ferreira",300,1,"","Boleto Amigo","c",""],["r","2024-11",26,"VENDA DE PRODUTOS/ SERVIÇOS","Maria Tereza Americo Ferreira",300,1,"","Boleto Amigo","k",""],["r","2025-04",10,"VENDA DE PRODUTOS/ SERVIÇOS","JOSEMAR RODRIGUES DOS SANTOS",459.58,1,"","Boleto Amigo","c",""],["r","2024-11",4,"VENDA DE PRODUTOS/ SERVIÇOS","JOSEMAR RODRIGUES DOS SANTOS",459.58,1,"","Boleto Amigo","k",""],["r","2025-03",19,"VENDA DE PRODUTOS/ SERVIÇOS","SIMONE DE SOUSA SIQUEIRA",383.33,1,"","Boleto Amigo","c",""],["r","2025-01",17,"VENDA DE PRODUTOS/ SERVIÇOS","SIMONE DE SOUSA SIQUEIRA",383.33,1,"","Boleto Amigo","k",""],["r","2025-03",18,"VENDA DE PRODUTOS/ SERVIÇOS","JOVAIR COSTA E SILVA",300,1,"","Boleto Amigo","c",""],["r","2024-11",25,"VENDA DE PRODUTOS/ SERVIÇOS","JOVAIR COSTA E SILVA",300,1,"","Boleto Amigo","k",""],["r","2025-03",14,"VENDA DE PRODUTOS/ SERVIÇOS","WALBER MOURA SANTOS FILHO",460,0,"","Boleto Amigo","c",""],["r","2024-10",30,"VENDA DE PRODUTOS/ SERVIÇOS","WALBER MOURA SANTOS FILHO",460,0,"","Boleto Amigo","k",""],["r","2025-03",14,"VENDA DE PRODUTOS/ SERVIÇOS","LUCIANO BARBOSA DA SILVA",200,1,"","Boleto Amigo","c",""],["r","2025-03",14,"VENDA DE PRODUTOS/ SERVIÇOS","LUCIANO BARBOSA DA SILVA",200,1,"","Boleto Amigo","k",""],["r","2025-03",13,"VENDA DE PRODUTOS/ SERVIÇOS","JOÃO CARLOS MORENO DE CARVALHO",200,1,"","Boleto Amigo","c",""],["r","2025-03",17,"VENDA DE PRODUTOS/ SERVIÇOS","JOÃO CARLOS MORENO DE CARVALHO",200,1,"","Boleto Amigo","k",""],["r","2025-03",14,"VENDA DE PRODUTOS/ SERVIÇOS","CARLOS ALBERTO FERREIRA DA SILVA",200,1,"","Boleto Amigo","c",""],["r","2025-03",12,"VENDA DE PRODUTOS/ SERVIÇOS","CARLOS ALBERTO FERREIRA DA SILVA",200,1,"","Boleto Amigo","k",""],["r","2025-04",4,"VENDA DE PRODUTOS/ SERVIÇOS","ARTISANELIO RODRIGUES",480.93,1,"","Boleto Amigo","c",""],["r","2024-10",1,"VENDA DE PRODUTOS/ SERVIÇOS","ARTISANELIO RODRIGUES",480.93,1,"","Boleto Amigo","k",""],["r","2025-03",10,"OUTRAS RECEITAS","STRIPE-CARTAO DE CREDITO",3.23,1,"","Boleto Amigo","c",""],["r","2025-03",10,"OUTRAS RECEITAS","STRIPE-CARTAO DE CREDITO",3.23,1,"","Boleto Amigo","k",""],["r","2025-03",11,"VENDA DE PRODUTOS/ SERVIÇOS","PEDRO BATISTA LIMA",460,1,"","Boleto Amigo","c",""],["r","2024-10",14,"VENDA DE PRODUTOS/ SERVIÇOS","PEDRO BATISTA LIMA",460,1,"","Boleto Amigo","k",""],["r","2025-03",13,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE ERNANDE MEIRELES CASTRO",377.92,1,"","Boleto Amigo","c",""],["r","2025-01",28,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE ERNANDE MEIRELES CASTRO",377.92,1,"","Boleto Amigo","k",""],["r","2025-03",12,"VENDA DE PRODUTOS/ SERVIÇOS","FLÁVIO TURMINA",383.33,1,"","Boleto Amigo","c",""],["r","2025-01",22,"VENDA DE PRODUTOS/ SERVIÇOS","FLÁVIO TURMINA",383.33,1,"","Boleto Amigo","k",""],["r","2025-03",7,"VENDA DE PRODUTOS/ SERVIÇOS","VANIA DA SILVA MEIRELLES",200,1,"","Boleto Amigo","c",""],["r","2025-03",7,"VENDA DE PRODUTOS/ SERVIÇOS","VANIA DA SILVA MEIRELLES",200,1,"","Boleto Amigo","k",""],["r","2025-03",7,"VENDA DE PRODUTOS/ SERVIÇOS","PAULO DICKSON DE OLIVEIRA HONORIO",200,1,"","Boleto Amigo","c",""],["r","2025-03",7,"VENDA DE PRODUTOS/ SERVIÇOS","PAULO DICKSON DE OLIVEIRA HONORIO",200,1,"","Boleto Amigo","k",""],["r","2025-02",28,"VENDA DE PRODUTOS/ SERVIÇOS","PAULO CESAR FERREIRA SOARES",200,1,"","Boleto Amigo","c",""],["r","2025-02",28,"VENDA DE PRODUTOS/ SERVIÇOS","PAULO CESAR FERREIRA SOARES",200,1,"","Boleto Amigo","k",""],["r","2025-02",27,"VENDA DE PRODUTOS/ SERVIÇOS","EDNEUDO SERPA RODRIGUES",200,1,"","Boleto Amigo","c",""],["r","2025-02",28,"VENDA DE PRODUTOS/ SERVIÇOS","EDNEUDO SERPA RODRIGUES",200,1,"","Boleto Amigo","k",""],["r","2025-02",18,"VENDA DE PRODUTOS/ SERVIÇOS","EDNEIA MARTINS FERREIRA CASTANHEIRA",460,1,"","Boleto Amigo","c",""],["r","2024-09",12,"VENDA DE PRODUTOS/ SERVIÇOS","EDNEIA MARTINS FERREIRA CASTANHEIRA",460,1,"","Boleto Amigo","k",""],["r","2025-03",20,"VENDA DE PRODUTOS/ SERVIÇOS","CARLOS ROBERTO FARIAS MOREIRA",480.31,1,"","Boleto Amigo","c",""],["r","2024-11",12,"VENDA DE PRODUTOS/ SERVIÇOS","CARLOS ROBERTO FARIAS MOREIRA",480.31,1,"","Boleto Amigo","k",""],["r","2025-02",27,"VENDA DE PRODUTOS/ SERVIÇOS","MARLETE SABINO DE OLIVEIRA",500,1,"","Boleto Amigo","c","FINAL DO CONTRATO"],["r","2024-06",17,"VENDA DE PRODUTOS/ SERVIÇOS","MARLETE SABINO DE OLIVEIRA",500,1,"","Boleto Amigo","k","FINAL DO CONTRATO"],["r","2025-02",26,"VENDA DE PRODUTOS/ SERVIÇOS","LUIS CARLOS GOMES DA SILVA",383.33,1,"","Boleto Amigo","c",""],["r","2024-12",20,"VENDA DE PRODUTOS/ SERVIÇOS","LUIS CARLOS GOMES DA SILVA",383.33,1,"","Boleto Amigo","k",""],["r","2025-02",26,"VENDA DE PRODUTOS/ SERVIÇOS","CLEIRE IONE RODRIGUES MARQUES",330,1,"","Boleto Amigo","c",""],["r","2024-11",28,"VENDA DE PRODUTOS/ SERVIÇOS","CLEIRE IONE RODRIGUES MARQUES",330,1,"","Boleto Amigo","k",""],["r","2025-02",20,"VENDA DE PRODUTOS/ SERVIÇOS","MARINA GAMA DA SILVA SOUSA SOB PROC JOSE ALBERTO DE SOUSA F.",200,1,"","Boleto Amigo","c",""],["r","2025-02",20,"VENDA DE PRODUTOS/ SERVIÇOS","MARINA GAMA DA SILVA SOUSA SOB PROC JOSE ALBERTO DE SOUSA F.",200,1,"","Boleto Amigo","k",""],["r","2025-04",4,"VENDA DE PRODUTOS/ SERVIÇOS","VINICIUS MYLLE TEIXEIRA SOARES",486.51,1,"","Boleto Amigo","c",""],["r","2024-10",10,"VENDA DE PRODUTOS/ SERVIÇOS","VINICIUS MYLLE TEIXEIRA SOARES",486.51,1,"","Boleto Amigo","k",""],["r","2025-03",11,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA DA CONCEIÇÃO OLIVEIRA BARROS",479.38,1,"","Boleto Amigo","c",""],["r","2024-09",23,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA DA CONCEIÇÃO OLIVEIRA BARROS",479.38,1,"","Boleto Amigo","k",""],["r","2025-02",20,"VENDA DE PRODUTOS/ SERVIÇOS","APARECIDA SOUTO SOUZA",296.31,1,"","Boleto Amigo","c",""],["r","2024-12",18,"VENDA DE PRODUTOS/ SERVIÇOS","APARECIDA SOUTO SOUZA",296.31,1,"","Boleto Amigo","k",""],["r","2025-03",26,"VENDA DE PRODUTOS/ SERVIÇOS","JOSEMAR RODRIGUES DOS SANTOS",463.35,1,"","Boleto Amigo","c",""],["r","2024-11",4,"VENDA DE PRODUTOS/ SERVIÇOS","JOSEMAR RODRIGUES DOS SANTOS",463.35,1,"","Boleto Amigo","k",""],["r","2025-02",19,"VENDA DE PRODUTOS/ SERVIÇOS","JUCICLEIDE SANTOS RAMOS",460,1,"","Boleto Amigo","c",""],["r","2024-09",5,"VENDA DE PRODUTOS/ SERVIÇOS","JUCICLEIDE SANTOS RAMOS",460,1,"","Boleto Amigo","k",""],["r","2025-02",14,"VENDA DE PRODUTOS/ SERVIÇOS","ADAISA ANDRADE SOARES",383.33,1,"","Boleto Amigo","c",""],["r","2024-12",13,"VENDA DE PRODUTOS/ SERVIÇOS","ADAISA ANDRADE SOARES",383.33,1,"","Boleto Amigo","k",""],["r","2025-02",12,"VENDA DE PRODUTOS/ SERVIÇOS","Maria Tereza Americo Ferreira",300,1,"","Boleto Amigo","c",""],["r","2024-11",26,"VENDA DE PRODUTOS/ SERVIÇOS","Maria Tereza Americo Ferreira",300,1,"","Boleto Amigo","k",""],["r","2025-02",19,"VENDA DE PRODUTOS/ SERVIÇOS","SIMONE DE SOUSA SIQUEIRA",383.33,1,"","Boleto Amigo","c",""],["r","2025-01",17,"VENDA DE PRODUTOS/ SERVIÇOS","SIMONE DE SOUSA SIQUEIRA",383.33,1,"","Boleto Amigo","k",""],["r","2025-02",11,"VENDA DE PRODUTOS/ SERVIÇOS","JOVAIR COSTA E SILVA",300,1,"","Boleto Amigo","c",""],["r","2024-11",25,"VENDA DE PRODUTOS/ SERVIÇOS","JOVAIR COSTA E SILVA",300,1,"","Boleto Amigo","k",""],["r","2025-02",19,"VENDA DE PRODUTOS/ SERVIÇOS","JULIANO DA SILVA",333.33,1,"","Boleto Amigo","c",""],["r","2025-01",15,"VENDA DE PRODUTOS/ SERVIÇOS","JULIANO DA SILVA",333.33,1,"","Boleto Amigo","k",""],["r","2025-03",19,"VENDA DE PRODUTOS/ SERVIÇOS","LEONARDO DE SOUSA DAS CHAGAS",402.1,1,"","Boleto Amigo","c",""],["r","2025-01",10,"VENDA DE PRODUTOS/ SERVIÇOS","LEONARDO DE SOUSA DAS CHAGAS",402.1,1,"","Boleto Amigo","k",""],["r","2025-02",14,"VENDA DE PRODUTOS/ SERVIÇOS","WALBER MOURA SANTOS FILHO",460,0,"","Boleto Amigo","c",""],["r","2024-10",30,"VENDA DE PRODUTOS/ SERVIÇOS","WALBER MOURA SANTOS FILHO",460,0,"","Boleto Amigo","k",""],["r","2025-02",12,"VENDA DE PRODUTOS/ SERVIÇOS","PEDRO BATISTA LIMA",460,1,"","Boleto Amigo","c",""],["r","2024-10",14,"VENDA DE PRODUTOS/ SERVIÇOS","PEDRO BATISTA LIMA",460,1,"","Boleto Amigo","k",""],["r","2024-11",27,"VENDA DE PRODUTOS/ SERVIÇOS","ARTISANELIO RODRIGUES",460,1,"","Boleto Amigo","c",""],["r","2024-10",1,"VENDA DE PRODUTOS/ SERVIÇOS","ARTISANELIO RODRIGUES",460,1,"","Boleto Amigo","k",""],["r","2025-02",28,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE ERNANDE MEIRELES CASTRO",381.67,1,"","Boleto Amigo","c",""],["r","2025-01",28,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE ERNANDE MEIRELES CASTRO",381.67,1,"","Boleto Amigo","k",""],["r","2025-02",12,"VENDA DE PRODUTOS/ SERVIÇOS","FLÁVIO TURMINA",383.33,1,"","Boleto Amigo","c",""],["r","2025-01",22,"VENDA DE PRODUTOS/ SERVIÇOS","FLÁVIO TURMINA",383.33,1,"","Boleto Amigo","k",""],["r","2025-02",3,"VENDA DE PRODUTOS/ SERVIÇOS","ADALBERTO RUFINO DE ALMEIDA",200,1,"","Boleto Amigo","c",""],["r","2025-02",3,"VENDA DE PRODUTOS/ SERVIÇOS","ADALBERTO RUFINO DE ALMEIDA",200,1,"","Boleto Amigo","k",""],["r","2025-01",28,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE ERNANDE MEIRELES CASTRO",300,1,"","Boleto Amigo","c",""],["r","2025-01",28,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE ERNANDE MEIRELES CASTRO",300,1,"","Boleto Amigo","k",""],["r","2025-01",22,"VENDA DE PRODUTOS/ SERVIÇOS","LUIS CARLOS GOMES DA SILVA",383.33,1,"","Boleto Amigo","c",""],["r","2024-12",20,"VENDA DE PRODUTOS/ SERVIÇOS","LUIS CARLOS GOMES DA SILVA",383.33,1,"","Boleto Amigo","k",""],["r","2025-01",29,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO VALDENIR PINTO LIMA",460,1,"","Boleto Amigo","c",""],["r","2024-08",22,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO VALDENIR PINTO LIMA",460,1,"","Boleto Amigo","k",""],["r","2025-01",29,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE GLEILSON PEREIRA RIBEIRO",460,1,"","Boleto Amigo","c",""],["r","2024-08",29,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE GLEILSON PEREIRA RIBEIRO",460,1,"","Boleto Amigo","k",""],["r","2025-02",5,"VENDA DE PRODUTOS/ SERVIÇOS","CARLOS ROBERTO FARIAS MOREIRA",475.97,1,"","Boleto Amigo","c",""],["r","2024-11",12,"VENDA DE PRODUTOS/ SERVIÇOS","CARLOS ROBERTO FARIAS MOREIRA",475.97,1,"","Boleto Amigo","k",""],["r","2025-01",27,"VENDA DE PRODUTOS/ SERVIÇOS","EDNEIA MARTINS FERREIRA CASTANHEIRA",460,1,"","Boleto Amigo","c",""],["r","2024-09",12,"VENDA DE PRODUTOS/ SERVIÇOS","EDNEIA MARTINS FERREIRA CASTANHEIRA",460,1,"","Boleto Amigo","k",""],["r","2025-01",29,"VENDA DE PRODUTOS/ SERVIÇOS","CLEIRE IONE RODRIGUES MARQUES",330,1,"","Boleto Amigo","c",""],["r","2024-11",28,"VENDA DE PRODUTOS/ SERVIÇOS","CLEIRE IONE RODRIGUES MARQUES",330,1,"","Boleto Amigo","k",""],["r","2025-01",22,"VENDA DE PRODUTOS/ SERVIÇOS","ANGELICA DE FATIMA FARIAS ALMEIDA FERREIRA",200,1,"","Boleto Amigo","c",""],["r","2025-01",22,"VENDA DE PRODUTOS/ SERVIÇOS","ANGELICA DE FATIMA FARIAS ALMEIDA FERREIRA",200,1,"","Boleto Amigo","k",""],["r","2025-01",22,"VENDA DE PRODUTOS/ SERVIÇOS","FLÁVIO TURMINA",200,1,"","Boleto Amigo","c",""],["r","2025-01",22,"VENDA DE PRODUTOS/ SERVIÇOS","FLÁVIO TURMINA",200,1,"","Boleto Amigo","k",""],["r","2025-02",10,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA AUXILIADORA GOMES DOS SANTOS",479.07,1,"","Boleto Amigo","c",""],["r","2024-10",9,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA AUXILIADORA GOMES DOS SANTOS",479.07,1,"","Boleto Amigo","k",""],["r","2025-02",5,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO CELIO ROCHA PEREIRA",478.14,1,"","Boleto Amigo","c",""],["r","2024-10",7,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO CELIO ROCHA PEREIRA",478.14,1,"","Boleto Amigo","k",""],["r","2025-01",17,"VENDA DE PRODUTOS/ SERVIÇOS","SIMONE DE SOUSA SIQUEIRA",200,1,"","Boleto Amigo","c",""],["r","2025-01",17,"VENDA DE PRODUTOS/ SERVIÇOS","SIMONE DE SOUSA SIQUEIRA",200,1,"","Boleto Amigo","k",""],["r","2025-01",15,"VENDA DE PRODUTOS/ SERVIÇOS","ADAISA ANDRADE SOARES",383.33,1,"","Boleto Amigo","c",""],["r","2024-12",13,"VENDA DE PRODUTOS/ SERVIÇOS","ADAISA ANDRADE SOARES",383.33,1,"","Boleto Amigo","k",""],["r","2025-01",15,"VENDA DE PRODUTOS/ SERVIÇOS","JULIANO DA SILVA",500,1,"","Boleto Amigo","c",""],["r","2025-01",15,"VENDA DE PRODUTOS/ SERVIÇOS","JULIANO DA SILVA",500,1,"","Boleto Amigo","k",""],["r","2025-01",13,"VENDA DE PRODUTOS/ SERVIÇOS","JOVAIR COSTA E SILVA",300,1,"","Boleto Amigo","c",""],["r","2024-11",25,"VENDA DE PRODUTOS/ SERVIÇOS","JOVAIR COSTA E SILVA",300,1,"","Boleto Amigo","k",""],["r","2024-11",8,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA DA CONCEIÇÃO OLIVEIRA BARROS",460,1,"","Boleto Amigo","c",""],["r","2024-09",23,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA DA CONCEIÇÃO OLIVEIRA BARROS",460,1,"","Boleto Amigo","k",""],["r","2025-01",17,"VENDA DE PRODUTOS/ SERVIÇOS","APARECIDA SOUTO SOUZA",287.5,1,"","Boleto Amigo","c",""],["r","2024-12",18,"VENDA DE PRODUTOS/ SERVIÇOS","APARECIDA SOUTO SOUZA",287.5,1,"","Boleto Amigo","k",""],["r","2025-02",11,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA DA CONCEIÇÃO OLIVEIRA BARROS",480.93,1,"","Boleto Amigo","c",""],["r","2024-09",23,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA DA CONCEIÇÃO OLIVEIRA BARROS",480.93,1,"","Boleto Amigo","k",""],["r","2025-01",17,"VENDA DE PRODUTOS/ SERVIÇOS","JUCICLEIDE SANTOS RAMOS",460,1,"","Boleto Amigo","c",""],["r","2024-09",5,"VENDA DE PRODUTOS/ SERVIÇOS","JUCICLEIDE SANTOS RAMOS",460,1,"","Boleto Amigo","k",""],["r","2025-01",15,"VENDA DE PRODUTOS/ SERVIÇOS","Maria Tereza Americo Ferreira",300,1,"","Boleto Amigo","c",""],["r","2024-11",26,"VENDA DE PRODUTOS/ SERVIÇOS","Maria Tereza Americo Ferreira",300,1,"","Boleto Amigo","k",""],["r","2025-02",11,"VENDA DE PRODUTOS/ SERVIÇOS","JOSEMAR RODRIGUES DOS SANTOS",459.87,1,"","Boleto Amigo","c",""],["r","2024-11",4,"VENDA DE PRODUTOS/ SERVIÇOS","JOSEMAR RODRIGUES DOS SANTOS",459.87,1,"","Boleto Amigo","k",""],["r","2025-01",14,"VENDA DE PRODUTOS/ SERVIÇOS","WALBER MOURA SANTOS FILHO",460,0,"","Boleto Amigo","c",""],["r","2024-10",30,"VENDA DE PRODUTOS/ SERVIÇOS","WALBER MOURA SANTOS FILHO",460,0,"","Boleto Amigo","k",""],["r","2025-01",10,"VENDA DE PRODUTOS/ SERVIÇOS","LEONARDO DE SOUSA DAS CHAGAS",200,1,"","Boleto Amigo","c",""],["r","2025-01",10,"VENDA DE PRODUTOS/ SERVIÇOS","LEONARDO DE SOUSA DAS CHAGAS",200,1,"","Boleto Amigo","k",""],["r","2025-01",15,"VENDA DE PRODUTOS/ SERVIÇOS","DANIELE FERREIRA DO NASCIMENTO",412.81,1,"","Boleto Amigo","c",""],["r","2024-08",8,"VENDA DE PRODUTOS/ SERVIÇOS","DANIELE FERREIRA DO NASCIMENTO",412.81,1,"","Boleto Amigo","k",""],["r","2024-11",27,"VENDA DE PRODUTOS/ SERVIÇOS","ARTISANELIO RODRIGUES",460,1,"","Boleto Amigo","c",""],["r","2024-10",1,"VENDA DE PRODUTOS/ SERVIÇOS","ARTISANELIO RODRIGUES",460,1,"","Boleto Amigo","k",""],["r","2025-01",14,"VENDA DE PRODUTOS/ SERVIÇOS","PEDRO BATISTA LIMA",460,1,"","Boleto Amigo","c",""],["r","2024-10",14,"VENDA DE PRODUTOS/ SERVIÇOS","PEDRO BATISTA LIMA",460,1,"","Boleto Amigo","k",""],["r","2024-12",26,"OUTRAS RECEITAS","MAGAZINE LUIZA",553.57,1,"","Boleto Amigo","c",""],["r","2024-12",26,"OUTRAS RECEITAS","MAGAZINE LUIZA",553.57,1,"","Boleto Amigo","k",""],["r","2024-12",30,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO VALDENIR PINTO LIMA",460,1,"","Boleto Amigo","c",""],["r","2024-08",22,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO VALDENIR PINTO LIMA",460,1,"","Boleto Amigo","k",""],["r","2024-12",30,"VENDA DE PRODUTOS/ SERVIÇOS","CLEIRE IONE RODRIGUES MARQUES",330,1,"","Boleto Amigo","c",""],["r","2024-11",28,"VENDA DE PRODUTOS/ SERVIÇOS","CLEIRE IONE RODRIGUES MARQUES",330,1,"","Boleto Amigo","k",""],["r","2024-12",26,"VENDA DE PRODUTOS/ SERVIÇOS","EDNEIA MARTINS FERREIRA CASTANHEIRA",460,1,"","Boleto Amigo","c",""],["r","2024-09",12,"VENDA DE PRODUTOS/ SERVIÇOS","EDNEIA MARTINS FERREIRA CASTANHEIRA",460,1,"","Boleto Amigo","k",""],["r","2024-12",3,"VENDA DE PRODUTOS/ SERVIÇOS","CARLOS ROBERTO FARIAS MOREIRA",25,1,"","Boleto Amigo","c",""],["r","2024-11",12,"VENDA DE PRODUTOS/ SERVIÇOS","CARLOS ROBERTO FARIAS MOREIRA",25,1,"","Boleto Amigo","k",""],["r","2024-12",30,"VENDA DE PRODUTOS/ SERVIÇOS","CARLOS ROBERTO FARIAS MOREIRA",435,1,"","Boleto Amigo","c",""],["r","2024-11",12,"VENDA DE PRODUTOS/ SERVIÇOS","CARLOS ROBERTO FARIAS MOREIRA",435,1,"","Boleto Amigo","k",""],["r","2024-12",30,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE GLEILSON PEREIRA RIBEIRO",460,1,"","Boleto Amigo","c",""],["r","2024-08",29,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE GLEILSON PEREIRA RIBEIRO",460,1,"","Boleto Amigo","k",""],["r","2024-12",26,"VENDA DE PRODUTOS/ SERVIÇOS","EUZIMAR RIBEIRO ALVES",440,1,"","Boleto Amigo","c",""],["r","2024-07",10,"VENDA DE PRODUTOS/ SERVIÇOS","EUZIMAR RIBEIRO ALVES",440,1,"","Boleto Amigo","k",""],["r","2025-02",3,"VENDA DE PRODUTOS/ SERVIÇOS","VINICIUS MYLLE TEIXEIRA SOARES",486.51,1,"","Boleto Amigo","c",""],["r","2024-10",10,"VENDA DE PRODUTOS/ SERVIÇOS","VINICIUS MYLLE TEIXEIRA SOARES",486.51,1,"","Boleto Amigo","k",""],["r","2024-12",20,"VENDA DE PRODUTOS/ SERVIÇOS","LUIS CARLOS GOMES DA SILVA",200,1,"","Boleto Amigo","c",""],["r","2024-12",20,"VENDA DE PRODUTOS/ SERVIÇOS","LUIS CARLOS GOMES DA SILVA",200,1,"","Boleto Amigo","k",""],["r","2024-12",30,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO CELIO ROCHA PEREIRA",475.66,1,"","Boleto Amigo","c",""],["r","2024-10",7,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO CELIO ROCHA PEREIRA",475.66,1,"","Boleto Amigo","k",""],["r","2024-12",18,"VENDA DE PRODUTOS/ SERVIÇOS","APARECIDA SOUTO SOUZA",200,1,"","Boleto Amigo","c",""],["r","2024-12",18,"VENDA DE PRODUTOS/ SERVIÇOS","APARECIDA SOUTO SOUZA",200,1,"","Boleto Amigo","k",""],["r","2025-01",13,"VENDA DE PRODUTOS/ SERVIÇOS","ITALO RODRIGO SILVA DOS SANTOS",460.16,1,"","Boleto Amigo","c",""],["r","2024-07",18,"VENDA DE PRODUTOS/ SERVIÇOS","ITALO RODRIGO SILVA DOS SANTOS",460.16,1,"","Boleto Amigo","k",""],["r","2024-12",11,"VENDA DE PRODUTOS/ SERVIÇOS","JOVAIR COSTA E SILVA",300,1,"","Boleto Amigo","c",""],["r","2024-11",25,"VENDA DE PRODUTOS/ SERVIÇOS","JOVAIR COSTA E SILVA",300,1,"","Boleto Amigo","k",""],["r","2025-01",9,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA DA CONCEIÇÃO OLIVEIRA BARROS",480.62,1,"","Boleto Amigo","c",""],["r","2024-09",23,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA DA CONCEIÇÃO OLIVEIRA BARROS",480.62,1,"","Boleto Amigo","k",""],["r","2024-12",16,"VENDA DE PRODUTOS/ SERVIÇOS","Maria Tereza Americo Ferreira",300,1,"","Boleto Amigo","c",""],["r","2024-11",26,"VENDA DE PRODUTOS/ SERVIÇOS","Maria Tereza Americo Ferreira",300,1,"","Boleto Amigo","k",""],["r","2024-12",18,"VENDA DE PRODUTOS/ SERVIÇOS","JOSEMAR RODRIGUES DOS SANTOS",440,1,"","Boleto Amigo","c",""],["r","2024-11",4,"VENDA DE PRODUTOS/ SERVIÇOS","JOSEMAR RODRIGUES DOS SANTOS",440,1,"","Boleto Amigo","k",""],["r","2024-12",18,"VENDA DE PRODUTOS/ SERVIÇOS","JUCICLEIDE SANTOS RAMOS",460,1,"","Boleto Amigo","c",""],["r","2024-09",5,"VENDA DE PRODUTOS/ SERVIÇOS","JUCICLEIDE SANTOS RAMOS",460,1,"","Boleto Amigo","k",""],["r","2024-12",14,"VENDA DE PRODUTOS/ SERVIÇOS","WALBER MOURA SANTOS FILHO",460,0,"","Boleto Amigo","c",""],["r","2024-10",30,"VENDA DE PRODUTOS/ SERVIÇOS","WALBER MOURA SANTOS FILHO",460,0,"","Boleto Amigo","k",""],["r","2024-12",13,"VENDA DE PRODUTOS/ SERVIÇOS","ADAISA ANDRADE SOARES",200,1,"","Boleto Amigo","c",""],["r","2024-12",13,"VENDA DE PRODUTOS/ SERVIÇOS","ADAISA ANDRADE SOARES",200,1,"","Boleto Amigo","k",""],["r","2024-12",12,"EMPRESTIMOS","ECONOMY - CONTA SIMPLES",30000,1,"","Boleto Amigo","c",""],["r","2024-12",12,"EMPRESTIMOS","ECONOMY - CONTA SIMPLES",30000,1,"","Boleto Amigo","k",""],["r","2024-12",16,"VENDA DE PRODUTOS/ SERVIÇOS","PEDRO BATISTA LIMA",460,1,"","Boleto Amigo","c",""],["r","2024-10",14,"VENDA DE PRODUTOS/ SERVIÇOS","PEDRO BATISTA LIMA",460,1,"","Boleto Amigo","k",""],["r","2024-11",27,"VENDA DE PRODUTOS/ SERVIÇOS","ARTISANELIO RODRIGUES",460,1,"","Boleto Amigo","c",""],["r","2024-10",1,"VENDA DE PRODUTOS/ SERVIÇOS","ARTISANELIO RODRIGUES",460,1,"","Boleto Amigo","k",""],["r","2024-12",12,"VENDA DE PRODUTOS/ SERVIÇOS","DANIELE FERREIRA DO NASCIMENTO",400,1,"","Boleto Amigo","c",""],["r","2024-08",8,"VENDA DE PRODUTOS/ SERVIÇOS","DANIELE FERREIRA DO NASCIMENTO",400,1,"","Boleto Amigo","k",""],["r","2024-12",11,"VENDA DE PRODUTOS/ SERVIÇOS","DIAMANTINO DOS SANTOS FILHO",543.2,1,"","Boleto Amigo","c",""],["r","2024-07",29,"VENDA DE PRODUTOS/ SERVIÇOS","DIAMANTINO DOS SANTOS FILHO",543.2,1,"","Boleto Amigo","k",""],["r","2024-11",28,"VENDA DE PRODUTOS/ SERVIÇOS","CLEIRE IONE RODRIGUES MARQUES",600,1,"","Boleto Amigo","c",""],["r","2024-11",28,"VENDA DE PRODUTOS/ SERVIÇOS","CLEIRE IONE RODRIGUES MARQUES",600,1,"","Boleto Amigo","k",""],["r","2024-11",26,"VENDA DE PRODUTOS/ SERVIÇOS","Maria Tereza Americo Ferreira",1000,1,"","Boleto Amigo","c",""],["r","2024-11",26,"VENDA DE PRODUTOS/ SERVIÇOS","Maria Tereza Americo Ferreira",1000,1,"","Boleto Amigo","k",""],["r","2024-11",27,"VENDA DE PRODUTOS/ SERVIÇOS","JOVAIR COSTA E SILVA",100,1,"","Boleto Amigo","c",""],["r","2024-11",25,"VENDA DE PRODUTOS/ SERVIÇOS","JOVAIR COSTA E SILVA",100,1,"","Boleto Amigo","k",""],["r","2024-11",27,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE GLEILSON PEREIRA RIBEIRO",460,1,"","Boleto Amigo","c",""],["r","2024-08",29,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE GLEILSON PEREIRA RIBEIRO",460,1,"","Boleto Amigo","k",""],["r","2024-11",27,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO VALDENIR PINTO LIMA",460,1,"","Boleto Amigo","c",""],["r","2024-08",22,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO VALDENIR PINTO LIMA",460,1,"","Boleto Amigo","k",""],["r","2024-11",28,"VENDA DE PRODUTOS/ SERVIÇOS","EDNEIA MARTINS FERREIRA CASTANHEIRA",474.11,1,"","Boleto Amigo","c",""],["r","2024-09",12,"VENDA DE PRODUTOS/ SERVIÇOS","EDNEIA MARTINS FERREIRA CASTANHEIRA",474.11,1,"","Boleto Amigo","k",""],["r","2024-11",21,"VENDA DE PRODUTOS/ SERVIÇOS","JACINTO SOUSA",440,1,"","Boleto Amigo","c",""],["r","2024-06",24,"VENDA DE PRODUTOS/ SERVIÇOS","JACINTO SOUSA",440,1,"","Boleto Amigo","k",""],["r","2024-11",27,"VENDA DE PRODUTOS/ SERVIÇOS","EUZIMAR RIBEIRO ALVES",454.07,1,"","Boleto Amigo","c",""],["r","2024-07",10,"VENDA DE PRODUTOS/ SERVIÇOS","EUZIMAR RIBEIRO ALVES",454.07,1,"","Boleto Amigo","k",""],["r","2024-12",10,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA AUXILIADORA GOMES DOS SANTOS",478.76,1,"","Boleto Amigo","c",""],["r","2024-10",9,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA AUXILIADORA GOMES DOS SANTOS",478.76,1,"","Boleto Amigo","k",""],["r","2024-11",25,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO CELIO ROCHA PEREIRA",460,1,"","Boleto Amigo","c",""],["r","2024-10",7,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO CELIO ROCHA PEREIRA",460,1,"","Boleto Amigo","k",""],["r","2024-12",20,"VENDA DE PRODUTOS/ SERVIÇOS","VINICIUS MYLLE TEIXEIRA SOARES",482.48,1,"","Boleto Amigo","c",""],["r","2024-10",10,"VENDA DE PRODUTOS/ SERVIÇOS","VINICIUS MYLLE TEIXEIRA SOARES",482.48,1,"","Boleto Amigo","k",""],["r","2024-11",21,"VENDA DE PRODUTOS/ SERVIÇOS","JUCICLEIDE SANTOS RAMOS",460,1,"","Boleto Amigo","c",""],["r","2024-09",5,"VENDA DE PRODUTOS/ SERVIÇOS","JUCICLEIDE SANTOS RAMOS",460,1,"","Boleto Amigo","k",""],["r","2024-11",18,"VENDA DE PRODUTOS/ SERVIÇOS","ITALO RODRIGO SILVA DOS SANTOS",440,1,"","Boleto Amigo","c",""],["r","2024-07",18,"VENDA DE PRODUTOS/ SERVIÇOS","ITALO RODRIGO SILVA DOS SANTOS",440,1,"","Boleto Amigo","k",""],["r","2024-12",10,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA DA CONCEIÇÃO OLIVEIRA BARROS",479.38,1,"","Boleto Amigo","c",""],["r","2024-09",23,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA DA CONCEIÇÃO OLIVEIRA BARROS",479.38,1,"","Boleto Amigo","k",""],["r","2024-11",14,"VENDA DE PRODUTOS/ SERVIÇOS","WALBER MOURA SANTOS FILHO",460,0,"","Boleto Amigo","c",""],["r","2024-10",30,"VENDA DE PRODUTOS/ SERVIÇOS","WALBER MOURA SANTOS FILHO",460,0,"","Boleto Amigo","k",""],["r","2024-11",11,"VENDA DE PRODUTOS/ SERVIÇOS","CARLOS ROBERTO FARIAS MOREIRA",200,1,"","Boleto Amigo","c",""],["r","2024-11",12,"VENDA DE PRODUTOS/ SERVIÇOS","CARLOS ROBERTO FARIAS MOREIRA",200,1,"","Boleto Amigo","k",""],["r","2024-11",13,"VENDA DE PRODUTOS/ SERVIÇOS","DANIELE FERREIRA DO NASCIMENTO",400,1,"","Boleto Amigo","c",""],["r","2024-08",8,"VENDA DE PRODUTOS/ SERVIÇOS","DANIELE FERREIRA DO NASCIMENTO",400,1,"","Boleto Amigo","k",""],["r","2024-11",14,"VENDA DE PRODUTOS/ SERVIÇOS","KELVIN PATRICK FARIAS LOPES",515.34,1,"","Boleto Amigo","c",""],["r","2024-07",4,"VENDA DE PRODUTOS/ SERVIÇOS","KELVIN PATRICK FARIAS LOPES",515.34,1,"","Boleto Amigo","k",""],["r","2024-11",4,"VENDA DE PRODUTOS/ SERVIÇOS","ARTISANELIO RODRIGUES",460,1,"","Boleto Amigo","c",""],["r","2024-10",1,"VENDA DE PRODUTOS/ SERVIÇOS","ARTISANELIO RODRIGUES",460,1,"","Boleto Amigo","k",""],["r","2024-11",7,"VENDA DE PRODUTOS/ SERVIÇOS","PEDRO BATISTA LIMA",460,1,"","Boleto Amigo","c",""],["r","2024-10",14,"VENDA DE PRODUTOS/ SERVIÇOS","PEDRO BATISTA LIMA",460,1,"","Boleto Amigo","k",""],["r","2024-11",27,"VENDA DE PRODUTOS/ SERVIÇOS","ANTÔNIO IRLANDO DE SOUSA NASCIMENTO",489.01,1,"","Boleto Amigo","c",""],["r","2024-07",9,"VENDA DE PRODUTOS/ SERVIÇOS","ANTÔNIO IRLANDO DE SOUSA NASCIMENTO",489.01,1,"","Boleto Amigo","k",""],["r","2024-11",5,"VENDA DE PRODUTOS/ SERVIÇOS","MAKSON SUEL COELHO BOAES",150,1,"","Boleto Amigo","c",""],["r","2024-11",5,"VENDA DE PRODUTOS/ SERVIÇOS","MAKSON SUEL COELHO BOAES",150,1,"","Boleto Amigo","k",""],["r","2024-11",6,"VENDA DE PRODUTOS/ SERVIÇOS","JOSEMAR RODRIGUES DOS SANTOS",300,1,"","Boleto Amigo","c",""],["r","2024-11",4,"VENDA DE PRODUTOS/ SERVIÇOS","JOSEMAR RODRIGUES DOS SANTOS",300,1,"","Boleto Amigo","k",""],["r","2024-11",1,"VENDA DE PRODUTOS/ SERVIÇOS","DIAMANTINO DOS SANTOS FILHO",525,1,"","Boleto Amigo","c",""],["r","2024-07",29,"VENDA DE PRODUTOS/ SERVIÇOS","DIAMANTINO DOS SANTOS FILHO",525,1,"","Boleto Amigo","k",""],["r","2024-10",9,"VENDA DE PRODUTOS/ SERVIÇOS","DIAMANTINO DOS SANTOS FILHO",525,1,"","Boleto Amigo","c",""],["r","2024-07",29,"VENDA DE PRODUTOS/ SERVIÇOS","DIAMANTINO DOS SANTOS FILHO",525,1,"","Boleto Amigo","k",""],["r","2024-10",30,"VENDA DE PRODUTOS/ SERVIÇOS","WALBER MOURA SANTOS FILHO",200,1,"","Boleto Amigo","c",""],["r","2024-10",30,"VENDA DE PRODUTOS/ SERVIÇOS","WALBER MOURA SANTOS FILHO",200,1,"","Boleto Amigo","k",""],["r","2024-10",28,"VENDA DE PRODUTOS/ SERVIÇOS","ELIVAN DE JESUS FRANCA DOS SANTOS",200,1,"","Boleto Amigo","c",""],["r","2024-10",28,"VENDA DE PRODUTOS/ SERVIÇOS","ELIVAN DE JESUS FRANCA DOS SANTOS",200,1,"","Boleto Amigo","k",""],["r","2024-10",29,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE GLEILSON PEREIRA RIBEIRO",460,1,"","Boleto Amigo","c",""],["r","2024-08",29,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE GLEILSON PEREIRA RIBEIRO",460,1,"","Boleto Amigo","k",""],["r","2024-10",29,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO VALDENIR PINTO LIMA",460,1,"","Boleto Amigo","c",""],["r","2024-08",22,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO VALDENIR PINTO LIMA",460,1,"","Boleto Amigo","k",""],["r","2024-10",29,"VENDA DE PRODUTOS/ SERVIÇOS","EDNEIA MARTINS FERREIRA CASTANHEIRA",460,1,"","Boleto Amigo","c",""],["r","2024-09",12,"VENDA DE PRODUTOS/ SERVIÇOS","EDNEIA MARTINS FERREIRA CASTANHEIRA",460,1,"","Boleto Amigo","k",""],["r","2024-10",22,"VENDA DE PRODUTOS/ SERVIÇOS","JACINTO SOUSA",440,1,"","Boleto Amigo","c",""],["r","2024-06",24,"VENDA DE PRODUTOS/ SERVIÇOS","JACINTO SOUSA",440,1,"","Boleto Amigo","k",""],["r","2024-10",23,"VENDA DE PRODUTOS/ SERVIÇOS","EUZIMAR RIBEIRO ALVES",440,1,"","Boleto Amigo","c",""],["r","2024-07",10,"VENDA DE PRODUTOS/ SERVIÇOS","EUZIMAR RIBEIRO ALVES",440,1,"","Boleto Amigo","k",""],["r","2024-10",21,"VENDA DE PRODUTOS/ SERVIÇOS","MARLETE SABINO DE OLIVEIRA",500,1,"","Boleto Amigo","c",""],["r","2024-06",17,"VENDA DE PRODUTOS/ SERVIÇOS","MARLETE SABINO DE OLIVEIRA",500,1,"","Boleto Amigo","k",""],["r","2024-10",16,"VENDA DE PRODUTOS/ SERVIÇOS","JUCICLEIDE SANTOS RAMOS",460,1,"","Boleto Amigo","c",""],["r","2024-09",5,"VENDA DE PRODUTOS/ SERVIÇOS","JUCICLEIDE SANTOS RAMOS",460,1,"","Boleto Amigo","k",""],["r","2024-10",24,"VENDA DE PRODUTOS/ SERVIÇOS","ITALO RODRIGO SILVA DOS SANTOS",455.23,1,"","Boleto Amigo","c",""],["r","2024-07",18,"VENDA DE PRODUTOS/ SERVIÇOS","ITALO RODRIGO SILVA DOS SANTOS",455.23,1,"","Boleto Amigo","k",""],["r","2024-10",17,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE ROBERTO VASCONCELOS LOBATO",500,1,"","Boleto Amigo","c",""],["r","2024-06",21,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE ROBERTO VASCONCELOS LOBATO",500,1,"","Boleto Amigo","k",""],["r","2024-10",14,"VENDA DE PRODUTOS/ SERVIÇOS","PEDRO BATISTA LIMA",200,1,"","Boleto Amigo","c",""],["r","2024-10",14,"VENDA DE PRODUTOS/ SERVIÇOS","PEDRO BATISTA LIMA",200,1,"","Boleto Amigo","k",""],["r","2024-10",9,"VENDA DE PRODUTOS/ SERVIÇOS","DANIELE FERREIRA DO NASCIMENTO",400,1,"","Boleto Amigo","c",""],["r","2024-08",8,"VENDA DE PRODUTOS/ SERVIÇOS","DANIELE FERREIRA DO NASCIMENTO",400,1,"","Boleto Amigo","k",""],["r","2024-10",10,"VENDA DE PRODUTOS/ SERVIÇOS","KELVIN PATRICK FARIAS LOPES",500,1,"","Boleto Amigo","c",""],["r","2024-07",4,"VENDA DE PRODUTOS/ SERVIÇOS","KELVIN PATRICK FARIAS LOPES",500,1,"","Boleto Amigo","k",""],["r","2024-10",10,"VENDA DE PRODUTOS/ SERVIÇOS","VINICIUS MYLLE TEIXEIRA SOARES",200,1,"","Boleto Amigo","c",""],["r","2024-10",10,"VENDA DE PRODUTOS/ SERVIÇOS","VINICIUS MYLLE TEIXEIRA SOARES",200,1,"","Boleto Amigo","k",""],["r","2024-10",9,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA AUXILIADORA GOMES DOS SANTOS",200,1,"","Boleto Amigo","c",""],["r","2024-10",9,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA AUXILIADORA GOMES DOS SANTOS",200,1,"","Boleto Amigo","k",""],["r","2024-10",7,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO CELIO ROCHA PEREIRA",200,1,"","Boleto Amigo","c",""],["r","2024-10",7,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO CELIO ROCHA PEREIRA",200,1,"","Boleto Amigo","k",""],["r","2024-10",8,"VENDA DE PRODUTOS/ SERVIÇOS","ANTÔNIO IRLANDO DE SOUSA NASCIMENTO",468.75,1,"","Boleto Amigo","c",""],["r","2024-07",9,"VENDA DE PRODUTOS/ SERVIÇOS","ANTÔNIO IRLANDO DE SOUSA NASCIMENTO",468.75,1,"","Boleto Amigo","k",""],["r","2024-10",1,"VENDA DE PRODUTOS/ SERVIÇOS","IRANILDO LIMA ALVES",200,1,"","Boleto Amigo","c",""],["r","2024-10",1,"VENDA DE PRODUTOS/ SERVIÇOS","IRANILDO LIMA ALVES",200,1,"","Boleto Amigo","k",""],["r","2024-10",1,"VENDA DE PRODUTOS/ SERVIÇOS","ARTISANELIO RODRIGUES",200,1,"","Boleto Amigo","c",""],["r","2024-10",1,"VENDA DE PRODUTOS/ SERVIÇOS","ARTISANELIO RODRIGUES",200,1,"","Boleto Amigo","k",""],["r","2024-09",27,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE GLEILSON PEREIRA RIBEIRO",460,1,"","Boleto Amigo","c",""],["r","2024-08",29,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE GLEILSON PEREIRA RIBEIRO",460,1,"","Boleto Amigo","k",""],["r","2024-09",27,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO VALDENIR PINTO LIMA",460,1,"","Boleto Amigo","c",""],["r","2024-08",22,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO VALDENIR PINTO LIMA",460,1,"","Boleto Amigo","k",""],["r","2024-09",23,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA DA CONCEIÇÃO OLIVEIRA BARROS",200,1,"","Boleto Amigo","c",""],["r","2024-09",23,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA DA CONCEIÇÃO OLIVEIRA BARROS",200,1,"","Boleto Amigo","k",""],["r","2024-09",25,"VENDA DE PRODUTOS/ SERVIÇOS","EUZIMAR RIBEIRO ALVES",440,1,"","Boleto Amigo","c",""],["r","2024-07",10,"VENDA DE PRODUTOS/ SERVIÇOS","EUZIMAR RIBEIRO ALVES",440,1,"","Boleto Amigo","k",""],["r","2024-09",20,"VENDA DE PRODUTOS/ SERVIÇOS","JACINTO SOUSA",440,1,"","Boleto Amigo","c",""],["r","2024-06",24,"VENDA DE PRODUTOS/ SERVIÇOS","JACINTO SOUSA",440,1,"","Boleto Amigo","k",""],["r","2024-09",19,"VENDA DE PRODUTOS/ SERVIÇOS","MARLETE SABINO DE OLIVEIRA",500,1,"","Boleto Amigo","c",""],["r","2024-06",17,"VENDA DE PRODUTOS/ SERVIÇOS","MARLETE SABINO DE OLIVEIRA",500,1,"","Boleto Amigo","k",""],["r","2024-09",18,"VENDA DE PRODUTOS/ SERVIÇOS","ITALO RODRIGO SILVA DOS SANTOS",440,1,"","Boleto Amigo","c",""],["r","2024-07",18,"VENDA DE PRODUTOS/ SERVIÇOS","ITALO RODRIGO SILVA DOS SANTOS",440,1,"","Boleto Amigo","k",""],["r","2024-09",18,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE ROBERTO VASCONCELOS LOBATO",500,1,"","Boleto Amigo","c",""],["r","2024-06",21,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE ROBERTO VASCONCELOS LOBATO",500,1,"","Boleto Amigo","k",""],["r","2024-09",12,"VENDA DE PRODUTOS/ SERVIÇOS","EDNEIA MARTINS FERREIRA CASTANHEIRA",200,1,"","Boleto Amigo","c",""],["r","2024-09",12,"VENDA DE PRODUTOS/ SERVIÇOS","EDNEIA MARTINS FERREIRA CASTANHEIRA",200,1,"","Boleto Amigo","k",""],["r","2024-09",6,"VENDA DE PRODUTOS/ SERVIÇOS","KELVIN PATRICK FARIAS LOPES",500,1,"","Boleto Amigo","c",""],["r","2024-07",4,"VENDA DE PRODUTOS/ SERVIÇOS","KELVIN PATRICK FARIAS LOPES",500,1,"","Boleto Amigo","k",""],["r","2024-09",9,"VENDA DE PRODUTOS/ SERVIÇOS","DANIELE FERREIRA DO NASCIMENTO",400,1,"","Boleto Amigo","c",""],["r","2024-08",8,"VENDA DE PRODUTOS/ SERVIÇOS","DANIELE FERREIRA DO NASCIMENTO",400,1,"","Boleto Amigo","k",""],["r","2024-09",10,"VENDA DE PRODUTOS/ SERVIÇOS","ANTÔNIO IRLANDO DE SOUSA NASCIMENTO",483.12,1,"","Boleto Amigo","c",""],["r","2024-07",9,"VENDA DE PRODUTOS/ SERVIÇOS","ANTÔNIO IRLANDO DE SOUSA NASCIMENTO",483.12,1,"","Boleto Amigo","k",""],["r","2024-09",5,"VENDA DE PRODUTOS/ SERVIÇOS","JUCICLEIDE SANTOS RAMOS",200,1,"","Boleto Amigo","c",""],["r","2024-09",5,"VENDA DE PRODUTOS/ SERVIÇOS","JUCICLEIDE SANTOS RAMOS",200,1,"","Boleto Amigo","k",""],["r","2024-09",6,"VENDA DE PRODUTOS/ SERVIÇOS","DIAMANTINO DOS SANTOS FILHO",542.5,1,"","Boleto Amigo","c",""],["r","2024-07",29,"VENDA DE PRODUTOS/ SERVIÇOS","DIAMANTINO DOS SANTOS FILHO",542.5,1,"","Boleto Amigo","k",""],["r","2024-08",29,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE GLEILSON PEREIRA RIBEIRO",200,1,"","Boleto Amigo","c",""],["r","2024-08",29,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE GLEILSON PEREIRA RIBEIRO",200,1,"","Boleto Amigo","k",""],["r","2024-08",26,"VENDA DE PRODUTOS/ SERVIÇOS","JACINTO SOUSA",440,1,"","Boleto Amigo","c",""],["r","2024-06",24,"VENDA DE PRODUTOS/ SERVIÇOS","JACINTO SOUSA",440,1,"","Boleto Amigo","k",""],["r","2024-08",27,"VENDA DE PRODUTOS/ SERVIÇOS","EUZIMAR RIBEIRO ALVES",453.49,1,"","Boleto Amigo","c",""],["r","2024-07",10,"VENDA DE PRODUTOS/ SERVIÇOS","EUZIMAR RIBEIRO ALVES",453.49,1,"","Boleto Amigo","k",""],["r","2024-08",22,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO VALDENIR PINTO LIMA",200,1,"","Boleto Amigo","c",""],["r","2024-08",22,"VENDA DE PRODUTOS/ SERVIÇOS","FRANCISCO VALDENIR PINTO LIMA",200,1,"","Boleto Amigo","k",""],["r","2024-08",19,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE ROBERTO VASCONCELOS LOBATO",500,1,"","Boleto Amigo","c",""],["r","2024-06",21,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE ROBERTO VASCONCELOS LOBATO",500,1,"","Boleto Amigo","k",""],["r","2024-08",19,"VENDA DE PRODUTOS/ SERVIÇOS","ITALO RODRIGO SILVA DOS SANTOS",440,1,"","Boleto Amigo","c",""],["r","2024-07",18,"VENDA DE PRODUTOS/ SERVIÇOS","ITALO RODRIGO SILVA DOS SANTOS",440,1,"","Boleto Amigo","k",""],["r","2024-08",6,"VENDA DE PRODUTOS/ SERVIÇOS","KELVIN PATRICK FARIAS LOPES",500,1,"","Boleto Amigo","c",""],["r","2024-07",4,"VENDA DE PRODUTOS/ SERVIÇOS","KELVIN PATRICK FARIAS LOPES",500,1,"","Boleto Amigo","k",""],["r","2024-08",8,"VENDA DE PRODUTOS/ SERVIÇOS","DANIELE FERREIRA DO NASCIMENTO",500,1,"","Boleto Amigo","c",""],["r","2024-08",8,"VENDA DE PRODUTOS/ SERVIÇOS","DANIELE FERREIRA DO NASCIMENTO",500,1,"","Boleto Amigo","k",""],["r","2024-08",5,"VENDA DE PRODUTOS/ SERVIÇOS","ANDERSON VICTOR CARVALHO XAVIER",2250,1,"","Boleto Amigo","c",""],["r","2024-08",5,"VENDA DE PRODUTOS/ SERVIÇOS","ANDERSON VICTOR CARVALHO XAVIER",2250,1,"","Boleto Amigo","k",""],["r","2024-08",7,"VENDA DE PRODUTOS/ SERVIÇOS","ANTÔNIO IRLANDO DE SOUSA NASCIMENTO",468.75,1,"","Boleto Amigo","c",""],["r","2024-07",9,"VENDA DE PRODUTOS/ SERVIÇOS","ANTÔNIO IRLANDO DE SOUSA NASCIMENTO",468.75,1,"","Boleto Amigo","k",""],["r","2024-07",29,"VENDA DE PRODUTOS/ SERVIÇOS","DIAMANTINO DOS SANTOS FILHO",400,1,"","Boleto Amigo","c",""],["r","2024-07",29,"VENDA DE PRODUTOS/ SERVIÇOS","DIAMANTINO DOS SANTOS FILHO",400,1,"","Boleto Amigo","k",""],["r","2024-07",24,"VENDA DE PRODUTOS/ SERVIÇOS","JACINTO SOUSA",440,1,"","Boleto Amigo","c",""],["r","2024-06",24,"VENDA DE PRODUTOS/ SERVIÇOS","JACINTO SOUSA",440,1,"","Boleto Amigo","k",""],["r","2024-07",23,"VENDA DE PRODUTOS/ SERVIÇOS","MARLETE SABINO DE OLIVEIRA",500,1,"","Boleto Amigo","c",""],["r","2024-06",17,"VENDA DE PRODUTOS/ SERVIÇOS","MARLETE SABINO DE OLIVEIRA",500,1,"","Boleto Amigo","k",""],["r","2024-07",17,"VENDA DE PRODUTOS/ SERVIÇOS","ITALO RODRIGO SILVA DOS SANTOS",300,1,"","Boleto Amigo","c",""],["r","2024-07",18,"VENDA DE PRODUTOS/ SERVIÇOS","ITALO RODRIGO SILVA DOS SANTOS",300,1,"","Boleto Amigo","k",""],["r","2024-07",17,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE ROBERTO VASCONCELOS LOBATO",500,1,"","Boleto Amigo","c",""],["r","2024-06",21,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE ROBERTO VASCONCELOS LOBATO",500,1,"","Boleto Amigo","k",""],["r","2024-07",4,"VENDA DE PRODUTOS/ SERVIÇOS","TEREZINHA MARIA DE BRITO",583.33,1,"","Boleto Amigo","c",""],["r","2024-06",13,"VENDA DE PRODUTOS/ SERVIÇOS","TEREZINHA MARIA DE BRITO",583.33,1,"","Boleto Amigo","k",""],["r","2024-07",10,"VENDA DE PRODUTOS/ SERVIÇOS","EUZIMAR RIBEIRO ALVES",300,1,"","Boleto Amigo","c",""],["r","2024-07",10,"VENDA DE PRODUTOS/ SERVIÇOS","EUZIMAR RIBEIRO ALVES",300,1,"","Boleto Amigo","k",""],["r","2024-07",11,"VENDA DE PRODUTOS/ SERVIÇOS","LUCILENE DE JESUS RODRIGUES",150,1,"","Boleto Amigo","c",""],["r","2024-07",10,"VENDA DE PRODUTOS/ SERVIÇOS","LUCILENE DE JESUS RODRIGUES",150,1,"","Boleto Amigo","k",""],["r","2024-07",8,"VENDA DE PRODUTOS/ SERVIÇOS","ANTÔNIO IRLANDO DE SOUSA NASCIMENTO",500,1,"","Boleto Amigo","c",""],["r","2024-07",9,"VENDA DE PRODUTOS/ SERVIÇOS","ANTÔNIO IRLANDO DE SOUSA NASCIMENTO",500,1,"","Boleto Amigo","k",""],["r","2024-07",4,"VENDA DE PRODUTOS/ SERVIÇOS","KELVIN PATRICK FARIAS LOPES",500,1,"","Boleto Amigo","c",""],["r","2024-07",4,"VENDA DE PRODUTOS/ SERVIÇOS","KELVIN PATRICK FARIAS LOPES",500,1,"","Boleto Amigo","k",""],["r","2024-06",24,"VENDA DE PRODUTOS/ SERVIÇOS","JACINTO SOUSA",300,1,"","Boleto Amigo","c",""],["r","2024-06",24,"VENDA DE PRODUTOS/ SERVIÇOS","JACINTO SOUSA",300,1,"","Boleto Amigo","k",""],["r","2024-06",21,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE ROBERTO VASCONCELOS LOBATO",500,1,"","Boleto Amigo","c",""],["r","2024-06",21,"VENDA DE PRODUTOS/ SERVIÇOS","JOSE ROBERTO VASCONCELOS LOBATO",500,1,"","Boleto Amigo","k",""],["r","2024-06",18,"VENDA DE PRODUTOS/ SERVIÇOS","WALBER MOURA SANTOS FILHO",500,1,"","Boleto Amigo","c",""],["r","2024-06",18,"VENDA DE PRODUTOS/ SERVIÇOS","WALBER MOURA SANTOS FILHO",500,1,"","Boleto Amigo","k",""],["r","2024-06",17,"VENDA DE PRODUTOS/ SERVIÇOS","MARLETE SABINO DE OLIVEIRA",500,1,"","Boleto Amigo","c",""],["r","2024-06",17,"VENDA DE PRODUTOS/ SERVIÇOS","MARLETE SABINO DE OLIVEIRA",500,1,"","Boleto Amigo","k",""],["r","2024-06",13,"VENDA DE PRODUTOS/ SERVIÇOS","TEREZINHA MARIA DE BRITO",200,1,"","Boleto Amigo","c",""],["r","2024-06",13,"VENDA DE PRODUTOS/ SERVIÇOS","TEREZINHA MARIA DE BRITO",200,1,"","Boleto Amigo","k",""],["r","2024-06",13,"VENDA DE PRODUTOS/ SERVIÇOS","TEREZINHA MARIA DE BRITO",300,1,"","Boleto Amigo","c",""],["r","2024-06",13,"VENDA DE PRODUTOS/ SERVIÇOS","TEREZINHA MARIA DE BRITO",300,1,"","Boleto Amigo","k",""],["r","2024-06",7,"OUTRAS RECEITAS","-",7.75,1,"","Boleto Amigo","c",""],["r","2024-06",7,"OUTRAS RECEITAS","-",7.75,1,"","Boleto Amigo","k",""],["r","2024-05",27,"EMPRESTIMOS","Economy assessoria",50000,1,"","Boleto Amigo","c",""],["r","2024-05",27,"EMPRESTIMOS","Economy assessoria",50000,1,"","Boleto Amigo","k",""],["r","2023-06",22,"VENDA DE PRODUTOS/ SERVIÇOS","LUCIANO DAS NEVES ALVES",322.77,1,"","Boleto Amigo","c",""],["r","2023-06",22,"VENDA DE PRODUTOS/ SERVIÇOS","LUCIANO DAS NEVES ALVES",322.77,1,"","Boleto Amigo","k",""],["r","2023-06",22,"VENDA DE PRODUTOS/ SERVIÇOS","LUCIANO DAS NEVES ALVES",322.77,1,"","Boleto Amigo","c",""],["r","2023-06",22,"VENDA DE PRODUTOS/ SERVIÇOS","LUCIANO DAS NEVES ALVES",322.77,1,"","Boleto Amigo","k",""],["r","2024-02",16,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA ROSILENE LOPES SOUSA",195.08,0,"","Boleto Amigo","c",""],["r","2023-10",16,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA ROSILENE LOPES SOUSA",195.08,0,"","Boleto Amigo","k",""],["r","2024-02",19,"VENDA DE PRODUTOS/ SERVIÇOS","FABIO SILVA DA VEIGA",10.33,1,"","Boleto Amigo","c",""],["r","2024-02",16,"VENDA DE PRODUTOS/ SERVIÇOS","FABIO SILVA DA VEIGA",10.33,1,"","Boleto Amigo","k",""],["r","2023-06",22,"VENDA DE PRODUTOS/ SERVIÇOS","LUCIANO DAS NEVES ALVES",322.77,1,"","Boleto Amigo","c",""],["r","2023-06",22,"VENDA DE PRODUTOS/ SERVIÇOS","LUCIANO DAS NEVES ALVES",322.77,1,"","Boleto Amigo","k",""],["r","2024-01",16,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA ROSILENE LOPES SOUSA",195.08,0,"","Boleto Amigo","c",""],["r","2023-10",16,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA ROSILENE LOPES SOUSA",195.08,0,"","Boleto Amigo","k",""],["r","2023-07",25,"VENDA DE PRODUTOS/ SERVIÇOS","EDINA MARIA BATISTA DA SILVA",108.33,1,"","Boleto Amigo","c",""],["r","2023-07",25,"VENDA DE PRODUTOS/ SERVIÇOS","EDINA MARIA BATISTA DA SILVA",108.33,1,"","Boleto Amigo","k",""],["r","2023-06",22,"VENDA DE PRODUTOS/ SERVIÇOS","LUCIANO DAS NEVES ALVES",322.77,1,"","Boleto Amigo","c",""],["r","2023-06",22,"VENDA DE PRODUTOS/ SERVIÇOS","LUCIANO DAS NEVES ALVES",322.77,1,"","Boleto Amigo","k",""],["r","2023-12",16,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA ROSILENE LOPES SOUSA",195.08,0,"","Boleto Amigo","c",""],["r","2023-10",16,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA ROSILENE LOPES SOUSA",195.08,0,"","Boleto Amigo","k",""],["r","2023-07",25,"VENDA DE PRODUTOS/ SERVIÇOS","EDINA MARIA BATISTA DA SILVA",108.34,1,"","Boleto Amigo","c",""],["r","2023-07",25,"VENDA DE PRODUTOS/ SERVIÇOS","EDINA MARIA BATISTA DA SILVA",108.34,1,"","Boleto Amigo","k",""],["r","2023-06",22,"VENDA DE PRODUTOS/ SERVIÇOS","LUCIANO DAS NEVES ALVES",322.77,1,"","Boleto Amigo","c",""],["r","2023-06",22,"VENDA DE PRODUTOS/ SERVIÇOS","LUCIANO DAS NEVES ALVES",322.77,1,"","Boleto Amigo","k",""],["r","2023-11",16,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA ROSILENE LOPES SOUSA",195.08,0,"","Boleto Amigo","c",""],["r","2023-10",16,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA ROSILENE LOPES SOUSA",195.08,0,"","Boleto Amigo","k",""],["r","2023-06",22,"VENDA DE PRODUTOS/ SERVIÇOS","LUCIANO DAS NEVES ALVES",322.77,1,"","Boleto Amigo","c",""],["r","2023-06",22,"VENDA DE PRODUTOS/ SERVIÇOS","LUCIANO DAS NEVES ALVES",322.77,1,"","Boleto Amigo","k",""],["r","2023-09",29,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA DOMINGAS FERREIRA GOMES",395.7,1,"","Boleto Amigo","c",""],["r","2023-09",29,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA DOMINGAS FERREIRA GOMES",395.7,1,"","Boleto Amigo","k",""],["r","2023-09",29,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA DOMINGAS FERREIRA GOMES",395.7,1,"","Boleto Amigo","c",""],["r","2023-09",29,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA DOMINGAS FERREIRA GOMES",395.7,1,"","Boleto Amigo","k",""],["r","2023-09",29,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA DOMINGAS FERREIRA GOMES",395.7,1,"","Boleto Amigo","c",""],["r","2023-09",29,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA DOMINGAS FERREIRA GOMES",395.7,1,"","Boleto Amigo","k",""],["r","2023-09",29,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA DOMINGAS FERREIRA GOMES",395.7,1,"","Boleto Amigo","c",""],["r","2023-09",29,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA DOMINGAS FERREIRA GOMES",395.7,1,"","Boleto Amigo","k",""],["r","2023-09",29,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA DOMINGAS FERREIRA GOMES",395.7,1,"","Boleto Amigo","c",""],["r","2023-09",29,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA DOMINGAS FERREIRA GOMES",395.7,1,"","Boleto Amigo","k",""],["r","2023-09",29,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA DOMINGAS FERREIRA GOMES",395.73,1,"","Boleto Amigo","c",""],["r","2023-09",29,"VENDA DE PRODUTOS/ SERVIÇOS","MARIA DOMINGAS FERREIRA GOMES",395.73,1,"","Boleto Amigo","k",""],["r","2023-09",27,"VENDA DE PRODUTOS/ SERVIÇOS","ANA CLAUDIA SILVA DE ALMEIDA",217.63,1,"","Boleto Amigo","c",""],["r","2023-09",27,"VENDA DE PRODUTOS/ SERVIÇOS","ANA CLAUDIA SILVA DE ALMEIDA",217.63,1,"","Boleto Amigo","k",""],["r","2023-09",27,"VENDA DE PRODUTOS/ SERVIÇOS","ANA CLAUDIA SILVA DE ALMEIDA",217.63,1,"","Boleto Amigo","c",""],["r","2023-09",27,"VENDA DE PRODUTOS/ SERVIÇOS","ANA CLAUDIA SILVA DE ALMEIDA",217.63,1,"","Boleto Amigo","k",""],["r","2023-09",27,"VENDA DE PRODUTOS/ SERVIÇOS","ANA CLAUDIA SILVA DE ALMEIDA",217.67,1,"","Boleto Amigo","c",""],["r","2023-09",27,"VENDA DE PRODUTOS/ SERVIÇOS","ANA CLAUDIA SILVA DE ALMEIDA",217.67,1,"","Boleto Amigo","k",""],["r","2023-09",27,"VENDA DE PRODUTOS/ SERVIÇOS","ANA CLAUDIA SILVA DE ALMEIDA",217.63,1,"","Boleto Amigo","c",""],["r","2023-09",27,"VENDA DE PRODUTOS/ SERVIÇOS","ANA CLAUDIA SILVA DE ALMEIDA",217.63,1,"","Boleto Amigo","k",""],["r","2023-09",27,"VENDA DE PRODUTOS/ SERVIÇOS","ANA CLAUDIA SILVA DE ALMEIDA",217.63,1,"","Boleto Amigo","c",""],["r","2023-09",27,"VENDA DE PRODUTOS/ SERVIÇOS","ANA CLAUDIA SILVA DE ALMEIDA",217.63,1,"","Boleto Amigo","k",""],["r","2023-09",27,"VENDA DE PRODUTOS/ SERVIÇOS","ANA CLAUDIA SILVA DE ALMEIDA",217.63,1,"","Boleto Amigo","c",""],["r","2023-09",27,"VENDA DE PRODUTOS/ SERVIÇOS","ANA CLAUDIA SILVA DE ALMEIDA",217.63,1,"","Boleto Amigo","k",""],["r","2023-08",24,"VENDA DE PRODUTOS/ SERVIÇOS","ANA MARIA DA SILVA SOARES",816.65,1,"","Boleto Amigo","c",""],["r","2023-08",24,"VENDA DE PRODUTOS/ SERVIÇOS","ANA MARIA DA SILVA SOARES",816.65,1,"","Boleto Amigo","k",""],["r","2023-08",24,"VENDA DE PRODUTOS/ SERVIÇOS","ANA MARIA DA SILVA SOARES",816.62,1,"","Boleto Amigo","c",""],["r","2023-08",24,"VENDA DE PRODUTOS/ SERVIÇOS","ANA MARIA DA SILVA SOARES",816.62,1,"","Boleto Amigo","k",""],["r","2023-08",24,"VENDA DE PRODUTOS/ SERVIÇOS","ANA MARIA DA SILVA SOARES",816.62,1,"","Boleto Amigo","c",""],["r","2023-08",24,"VENDA DE PRODUTOS/ SERVIÇOS","ANA MARIA DA SILVA SOARES",816.62,1,"","Boleto Amigo","k",""],["r","2023-08",24,"VENDA DE PRODUTOS/ SERVIÇOS","ANA MARIA DA SILVA SOARES",816.62,1,"","Boleto Amigo","c",""],["r","2023-08",24,"VENDA DE PRODUTOS/ SERVIÇOS","ANA MARIA DA SILVA SOARES",816.62,1,"","Boleto Amigo","k",""],["r","2023-08",24,"VENDA DE PRODUTOS/ SERVIÇOS","ANA MARIA DA SILVA SOARES",816.62,1,"","Boleto Amigo","c",""],["r","2023-08",24,"VENDA DE PRODUTOS/ SERVIÇOS","ANA MARIA DA SILVA SOARES",816.62,1,"","Boleto Amigo","k",""],["r","2023-06",22,"VENDA DE PRODUTOS/ SERVIÇOS","LUCIANO DAS NEVES ALVES",322.77,1,"","Boleto Amigo","c",""],["r","2023-06",22,"VENDA DE PRODUTOS/ SERVIÇOS","LUCIANO DAS NEVES ALVES",322.77,1,"","Boleto Amigo","k",""],["r","2023-09",15,"VENDA DE PRODUTOS/ SERVIÇOS","IZEMAR LAERCIO F DE OLIVEIRA",367.94,1,"","Boleto Amigo","c",""],["r","2023-09",15,"VENDA DE PRODUTOS/ SERVIÇOS","IZEMAR LAERCIO F DE OLIVEIRA",367.94,1,"","Boleto Amigo","k",""],["r","2023-09",15,"VENDA DE PRODUTOS/ SERVIÇOS","IZEMAR LAERCIO F DE OLIVEIRA",367.94,1,"","Boleto Amigo","c",""],["r","2023-09",15,"VENDA DE PRODUTOS/ SERVIÇOS","IZEMAR LAERCIO F DE OLIVEIRA",367.94,1,"","Boleto Amigo","k",""],["r","2023-09",15,"VENDA DE PRODUTOS/ SERVIÇOS","IZEMAR LAERCIO F DE OLIVEIRA",367.94,1,"","Boleto Amigo","c",""],["r","2023-09",15,"VENDA DE PRODUTOS/ SERVIÇOS","IZEMAR LAERCIO F DE OLIVEIRA",367.94,1,"","Boleto Amigo","k",""],["r","2023-09",15,"VENDA DE PRODUTOS/ SERVIÇOS","IZEMAR LAERCIO F DE OLIVEIRA",367.94,1,"","Boleto Amigo","c",""],["r","2023-09",15,"VENDA DE PRODUTOS/ SERVIÇOS","IZEMAR LAERCIO F DE OLIVEIRA",367.94,1,"","Boleto Amigo","k",""],["r","2023-06",22,"VENDA DE PRODUTOS/ SERVIÇOS","LUCIANO DAS NEVES ALVES",322.77,1,"","Boleto Amigo","c",""],["r","2023-06",22,"VENDA DE PRODUTOS/ SERVIÇOS","LUCIANO DAS NEVES ALVES",322.77,1,"","Boleto Amigo","k",""],["r","2023-06",22,"VENDA DE PRODUTOS/ SERVIÇOS","LUCIANO DAS NEVES ALVES",322.77,1,"","Boleto Amigo","c",""],["r","2023-06",22,"VENDA DE PRODUTOS/ SERVIÇOS","LUCIANO DAS NEVES ALVES",322.77,1,"","Boleto Amigo","k",""],["r","2023-06",22,"VENDA DE PRODUTOS/ SERVIÇOS","LUCIANO DAS NEVES ALVES",322.77,1,"","Boleto Amigo","c",""],["r","2023-06",22,"VENDA DE PRODUTOS/ SERVIÇOS","LUCIANO DAS NEVES ALVES",322.77,1,"","Boleto Amigo","k",""],["r","2023-06",12,"VENDA DE PRODUTOS/ SERVIÇOS","VENDA SEM REGISTRO",8.37,1,"","Boleto Amigo","c",""],["r","2023-06",12,"VENDA DE PRODUTOS/ SERVIÇOS","VENDA SEM REGISTRO",8.37,1,"","Boleto Amigo","k",""],["r","2023-06",12,"VENDA DE PRODUTOS/ SERVIÇOS","VENDA SEM REGISTRO",8.33,1,"","Boleto Amigo","c",""],["r","2023-06",12,"VENDA DE PRODUTOS/ SERVIÇOS","VENDA SEM REGISTRO",8.33,1,"","Boleto Amigo","k",""],["r","2023-06",12,"VENDA DE PRODUTOS/ SERVIÇOS","VENDA SEM REGISTRO",8.33,1,"","Boleto Amigo","c",""],["r","2023-06",12,"VENDA DE PRODUTOS/ SERVIÇOS","VENDA SEM REGISTRO",8.33,1,"","Boleto Amigo","k",""],["r","2023-06",12,"VENDA DE PRODUTOS/ SERVIÇOS","VENDA SEM REGISTRO",8.33,1,"","Boleto Amigo","c",""],["r","2023-06",12,"VENDA DE PRODUTOS/ SERVIÇOS","VENDA SEM REGISTRO",8.33,1,"","Boleto Amigo","k",""],["r","2023-06",12,"VENDA DE PRODUTOS/ SERVIÇOS","VENDA SEM REGISTRO",8.33,1,"","Boleto Amigo","c",""],["r","2023-06",12,"VENDA DE PRODUTOS/ SERVIÇOS","VENDA SEM REGISTRO",8.33,1,"","Boleto Amigo","k",""],["r","2023-06",12,"VENDA DE PRODUTOS/ SERVIÇOS","VENDA SEM REGISTRO",8.33,1,"","Boleto Amigo","c",""],["r","2023-06",12,"VENDA DE PRODUTOS/ SERVIÇOS","VENDA SEM REGISTRO",8.33,1,"","Boleto Amigo","k",""],["r","2023-06",12,"VENDA DE PRODUTOS/ SERVIÇOS","VENDA SEM REGISTRO",8.33,1,"","Boleto Amigo","c",""],["r","2023-06",12,"VENDA DE PRODUTOS/ SERVIÇOS","VENDA SEM REGISTRO",8.33,1,"","Boleto Amigo","k",""],["r","2023-06",12,"VENDA DE PRODUTOS/ SERVIÇOS","VENDA SEM REGISTRO",8.33,1,"","Boleto Amigo","c",""],["r","2023-06",12,"VENDA DE PRODUTOS/ SERVIÇOS","VENDA SEM REGISTRO",8.33,1,"","Boleto Amigo","k",""],["r","2023-06",12,"VENDA DE PRODUTOS/ SERVIÇOS","VENDA SEM REGISTRO",8.33,1,"","Boleto Amigo","c",""],["r","2023-06",12,"VENDA DE PRODUTOS/ SERVIÇOS","VENDA SEM REGISTRO",8.33,1,"","Boleto Amigo","k",""],["r","2023-06",12,"VENDA DE PRODUTOS/ SERVIÇOS","VENDA SEM REGISTRO",8.33,1,"","Boleto Amigo","c",""],["r","2023-06",12,"VENDA DE PRODUTOS/ SERVIÇOS","VENDA SEM REGISTRO",8.33,1,"","Boleto Amigo","k",""],["r","2023-06",12,"VENDA DE PRODUTOS/ SERVIÇOS","VENDA SEM REGISTRO",8.33,1,"","Boleto Amigo","c",""],["r","2023-06",12,"VENDA DE PRODUTOS/ SERVIÇOS","VENDA SEM REGISTRO",8.33,1,"","Boleto Amigo","k",""],["r","2023-06",12,"VENDA DE PRODUTOS/ SERVIÇOS","VENDA SEM REGISTRO",8.33,1,"","Boleto Amigo","c",""],["r","2023-06",12,"VENDA DE PRODUTOS/ SERVIÇOS","VENDA SEM REGISTRO",8.33,1,"","Boleto Amigo","k",""],["r","2023-05",29,"VENDA DE PRODUTOS/ SERVIÇOS","FABIO SILVA DA VEIGA",100,1,"","Boleto Amigo","c",""],["r","2023-05",29,"VENDA DE PRODUTOS/ SERVIÇOS","FABIO SILVA DA VEIGA",100,1,"","Boleto Amigo","k",""],["r","2023-05",22,"RENDIMENTOS FINANCEIROS","CIELO",0.01,1,"","Boleto Amigo","c",""],["r","2023-05",22,"RENDIMENTOS FINANCEIROS","CIELO",0.01,1,"","Boleto Amigo","k",""],["r","2023-05",9,"VENDA DE PRODUTOS/ SERVIÇOS","VENDA SEM REGISTRO",1,1,"","Boleto Amigo","c",""],["r","2023-05",9,"VENDA DE PRODUTOS/ SERVIÇOS","VENDA SEM REGISTRO",1,1,"","Boleto Amigo","k",""],["r","2023-05",10,"INVESTIMENTOS","THIAGO LOURES PEIXOTO",2500,1,"","Boleto Amigo","c",""],["r","2023-05",10,"INVESTIMENTOS","THIAGO LOURES PEIXOTO",2500,1,"","Boleto Amigo","k",""],["r","2023-05",8,"INVESTIMENTOS","CLAUDIO ROBERTO SILVA DA VEIGA",2500,1,"","Boleto Amigo","c",""],["r","2023-05",8,"INVESTIMENTOS","CLAUDIO ROBERTO SILVA DA VEIGA",2500,1,"","Boleto Amigo","k",""],["r","2023-05",8,"INVESTIMENTOS","FABIO SILVA DA VEIGA",2500,1,"","Boleto Amigo","c",""],["r","2023-05",8,"INVESTIMENTOS","FABIO SILVA DA VEIGA",2500,1,"","Boleto Amigo","k",""],["r","2023-05",8,"INVESTIMENTOS","HELIO JOSÉ SOARES JUNIOR",2500,1,"","Boleto Amigo","c",""],["r","2023-05",8,"INVESTIMENTOS","HELIO JOSÉ SOARES JUNIOR",2500,1,"","Boleto Amigo","k",""],["r","2023-05",3,"RENDIMENTOS FINANCEIROS","CIELO",0.01,1,"","Boleto Amigo","c",""],["r","2023-05",3,"RENDIMENTOS FINANCEIROS","CIELO",0.01,1,"","Boleto Amigo","k",""],["r","2026-12",25,"VENDA DE PRODUTOS/ SERVIÇOS","DALVA MARGARET ROCHA FERREIRA CIRQUEIRA",450,0,"","Boleto Amigo","c",""],["r","2026-06",2,"VENDA DE PRODUTOS/ SERVIÇOS","DALVA MARGARET ROCHA FERREIRA CIRQUEIRA",450,0,"","Boleto Amigo","k",""],["r","2026-06",2,"VENDA DE PRODUTOS/ SERVIÇOS","WAGNER DA SILVA XAVIER",100,0,"","Boleto Amigo","c",""],["r","2026-06",2,"VENDA DE PRODUTOS/ SERVIÇOS","WAGNER DA SILVA XAVIER",100,0,"","Boleto Amigo","k",""],["r","2026-07",20,"VENDA DE PRODUTOS/ SERVIÇOS","WAGNER DA SILVA XAVIER",100,0,"","Boleto Amigo","c",""],["r","2026-06",2,"VENDA DE PRODUTOS/ SERVIÇOS","WAGNER DA SILVA XAVIER",100,0,"","Boleto Amigo","k",""],["r","2026-08",20,"VENDA DE PRODUTOS/ SERVIÇOS","WAGNER DA SILVA XAVIER",100,0,"","Boleto Amigo","c",""],["r","2026-06",2,"VENDA DE PRODUTOS/ SERVIÇOS","WAGNER DA SILVA XAVIER",100,0,"","Boleto Amigo","k",""],["r","2026-09",20,"VENDA DE PRODUTOS/ SERVIÇOS","WAGNER DA SILVA XAVIER",100,0,"","Boleto Amigo","c",""],["r","2026-06",2,"VENDA DE PRODUTOS/ SERVIÇOS","WAGNER DA SILVA XAVIER",100,0,"","Boleto Amigo","k",""],["r","2026-10",20,"VENDA DE PRODUTOS/ SERVIÇOS","WAGNER DA SILVA XAVIER",100,0,"","Boleto Amigo","c",""],["r","2026-06",2,"VENDA DE PRODUTOS/ SERVIÇOS","WAGNER DA SILVA XAVIER",100,0,"","Boleto Amigo","k",""],["r","2026-06",2,"VENDA DE PRODUTOS/ SERVIÇOS","DALVA MARGARET ROCHA FERREIRA CIRQUEIRA",300,1,"","Boleto Amigo","c",""],["r","2026-06",2,"VENDA DE PRODUTOS/ SERVIÇOS","DALVA MARGARET ROCHA FERREIRA CIRQUEIRA",300,1,"","Boleto Amigo","k",""],["r","2026-07",25,"VENDA DE PRODUTOS/ SERVIÇOS","DALVA MARGARET ROCHA FERREIRA CIRQUEIRA",450,0,"","Boleto Amigo","c",""],["r","2026-06",2,"VENDA DE PRODUTOS/ SERVIÇOS","DALVA MARGARET ROCHA FERREIRA CIRQUEIRA",450,0,"","Boleto Amigo","k",""],["r","2026-08",25,"VENDA DE PRODUTOS/ SERVIÇOS","DALVA MARGARET ROCHA FERREIRA CIRQUEIRA",450,0,"","Boleto Amigo","c",""],["r","2026-06",2,"VENDA DE PRODUTOS/ SERVIÇOS","DALVA MARGARET ROCHA FERREIRA CIRQUEIRA",450,0,"","Boleto Amigo","k",""],["r","2026-09",25,"VENDA DE PRODUTOS/ SERVIÇOS","DALVA MARGARET ROCHA FERREIRA CIRQUEIRA",450,0,"","Boleto Amigo","c",""],["r","2026-06",2,"VENDA DE PRODUTOS/ SERVIÇOS","DALVA MARGARET ROCHA FERREIRA CIRQUEIRA",450,0,"","Boleto Amigo","k",""],["r","2026-10",25,"VENDA DE PRODUTOS/ SERVIÇOS","DALVA MARGARET ROCHA FERREIRA CIRQUEIRA",450,0,"","Boleto Amigo","c",""],["r","2026-06",2,"VENDA DE PRODUTOS/ SERVIÇOS","DALVA MARGARET ROCHA FERREIRA CIRQUEIRA",450,0,"","Boleto Amigo","k",""],["r","2026-11",25,"VENDA DE PRODUTOS/ SERVIÇOS","DALVA MARGARET ROCHA FERREIRA CIRQUEIRA",450,0,"","Boleto Amigo","c",""],["r","2026-06",2,"VENDA DE PRODUTOS/ SERVIÇOS","DALVA MARGARET ROCHA FERREIRA CIRQUEIRA",450,0,"","Boleto Amigo","k",""],["r","2026-06",2,"VENDA DE PRODUTOS/ SERVIÇOS","CASSIO RODRIGO SANTOS SILVA",600,0,"","Boleto Amigo","c",""],["r","2026-06",2,"VENDA DE PRODUTOS/ SERVIÇOS","CASSIO RODRIGO SANTOS SILVA",600,0,"","Boleto Amigo","k",""],["r","2026-07",20,"VENDA DE PRODUTOS/ SERVIÇOS","CASSIO RODRIGO SANTOS SILVA",520.01,0,"","Boleto Amigo","c",""],["r","2026-06",2,"VENDA DE PRODUTOS/ SERVIÇOS","CASSIO RODRIGO SANTOS SILVA",520.01,0,"","Boleto Amigo","k",""],["r","2026-08",20,"VENDA DE PRODUTOS/ SERVIÇOS","CASSIO RODRIGO SANTOS SILVA",520.01,0,"","Boleto Amigo","c",""],["r","2026-06",2,"VENDA DE PRODUTOS/ SERVIÇOS","CASSIO RODRIGO SANTOS SILVA",520.01,0,"","Boleto Amigo","k",""],["r","2026-09",20,"VENDA DE PRODUTOS/ SERVIÇOS","CASSIO RODRIGO SANTOS SILVA",520.01,0,"","Boleto Amigo","c",""],["r","2026-06",2,"VENDA DE PRODUTOS/ SERVIÇOS","CASSIO RODRIGO SANTOS SILVA",520.01,0,"","Boleto Amigo","k",""],["r","2026-10",20,"VENDA DE PRODUTOS/ SERVIÇOS","CASSIO RODRIGO SANTOS SILVA",520.01,0,"","Boleto Amigo","c",""],["r","2026-06",2,"VENDA DE PRODUTOS/ SERVIÇOS","CASSIO RODRIGO SANTOS SILVA",520.01,0,"","Boleto Amigo","k",""],["r","2026-11",20,"VENDA DE PRODUTOS/ SERVIÇOS","CASSIO RODRIGO SANTOS SILVA",520.01,0,"","Boleto Amigo","c",""],["r","2026-06",2,"VENDA DE PRODUTOS/ SERVIÇOS","CASSIO RODRIGO SANTOS SILVA",520.01,0,"","Boleto Amigo","k",""],["r","2026-12",20,"VENDA DE PRODUTOS/ SERVIÇOS","CASSIO RODRIGO SANTOS SILVA",520.01,0,"","Boleto Amigo","c",""],["r","2026-06",2,"VENDA DE PRODUTOS/ SERVIÇOS","CASSIO RODRIGO SANTOS SILVA",520.01,0,"","Boleto Amigo","k",""],["d","2029-03",11,"OUTRAS DESPESAS","",79.08,0,"DLOCAL BRASIL PAGAMENTOS LTDA","Boleto Amigo","c",""],["d","2029-03",11,"OUTRAS DESPESAS","",79.08,0,"DLOCAL BRASIL PAGAMENTOS LTDA","Boleto Amigo","k",""],["d","2028-08",5,"ALUGUEL","",2312.59,0,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","c",""],["d","2027-12",5,"ALUGUEL","",2312.59,0,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","k",""],["d","2028-07",18,"EMPRESTIMOS A PAGAR","",2000,0,"ECONOMY - CONTA SIMPLES","Boleto Amigo","c",""],["d","2028-07",18,"EMPRESTIMOS A PAGAR","",2000,0,"ECONOMY - CONTA SIMPLES","Boleto Amigo","k",""],["d","2028-07",5,"ALUGUEL","",2312.59,0,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","c",""],["d","2027-11",5,"ALUGUEL","",2312.59,0,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","k",""],["d","2028-06",18,"EMPRESTIMOS A PAGAR","",2000,0,"ECONOMY - CONTA SIMPLES","Boleto Amigo","c",""],["d","2028-06",18,"EMPRESTIMOS A PAGAR","",2000,0,"ECONOMY - CONTA SIMPLES","Boleto Amigo","k",""],["d","2028-06",5,"ALUGUEL","",2312.59,0,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","c",""],["d","2027-10",5,"ALUGUEL","",2312.59,0,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","k",""],["d","2028-05",18,"EMPRESTIMOS A PAGAR","",2000,0,"ECONOMY - CONTA SIMPLES","Boleto Amigo","c",""],["d","2028-05",18,"EMPRESTIMOS A PAGAR","",2000,0,"ECONOMY - CONTA SIMPLES","Boleto Amigo","k",""],["d","2028-05",5,"ALUGUEL","",2312.59,0,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","c",""],["d","2027-09",5,"ALUGUEL","",2312.59,0,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","k",""],["d","2028-04",18,"EMPRESTIMOS A PAGAR","",2000,0,"ECONOMY - CONTA SIMPLES","Boleto Amigo","c",""],["d","2028-04",18,"EMPRESTIMOS A PAGAR","",2000,0,"ECONOMY - CONTA SIMPLES","Boleto Amigo","k",""],["d","2028-04",5,"ALUGUEL","",2312.59,0,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","c",""],["d","2027-08",5,"ALUGUEL","",2312.59,0,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","k",""],["d","2028-03",18,"EMPRESTIMOS A PAGAR","",2000,0,"ECONOMY - CONTA SIMPLES","Boleto Amigo","c",""],["d","2028-03",18,"EMPRESTIMOS A PAGAR","",2000,0,"ECONOMY - CONTA SIMPLES","Boleto Amigo","k",""],["d","2028-03",11,"OUTRAS DESPESAS","",79.08,0,"DLOCAL BRASIL PAGAMENTOS LTDA","Boleto Amigo","c",""],["d","2028-03",11,"OUTRAS DESPESAS","",79.08,0,"DLOCAL BRASIL PAGAMENTOS LTDA","Boleto Amigo","k",""],["d","2028-03",5,"ALUGUEL","",2312.59,0,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","c",""],["d","2027-07",5,"ALUGUEL","",2312.59,0,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","k",""],["d","2028-02",18,"EMPRESTIMOS A PAGAR","",2000,0,"ECONOMY - CONTA SIMPLES","Boleto Amigo","c",""],["d","2028-02",18,"EMPRESTIMOS A PAGAR","",2000,0,"ECONOMY - CONTA SIMPLES","Boleto Amigo","k",""],["d","2028-02",5,"ALUGUEL","",2312.59,0,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","c",""],["d","2027-06",5,"ALUGUEL","",2312.59,0,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","k",""],["d","2028-01",18,"EMPRESTIMOS A PAGAR","",2000,0,"ECONOMY - CONTA SIMPLES","Boleto Amigo","c",""],["d","2028-01",18,"EMPRESTIMOS A PAGAR","",2000,0,"ECONOMY - CONTA SIMPLES","Boleto Amigo","k",""],["d","2028-01",5,"ALUGUEL","",2312.59,0,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","c",""],["d","2027-05",5,"ALUGUEL","",2312.59,0,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","k",""],["d","2027-12",18,"EMPRESTIMOS A PAGAR","",2000,0,"ECONOMY - CONTA SIMPLES","Boleto Amigo","c",""],["d","2027-12",18,"EMPRESTIMOS A PAGAR","",2000,0,"ECONOMY - CONTA SIMPLES","Boleto Amigo","k",""],["d","2027-12",5,"ALUGUEL","",2312.59,0,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","c",""],["d","2027-04",5,"ALUGUEL","",2312.59,0,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","k",""],["d","2027-11",18,"EMPRESTIMOS A PAGAR","",2000,0,"ECONOMY - CONTA SIMPLES","Boleto Amigo","c",""],["d","2027-11",18,"EMPRESTIMOS A PAGAR","",2000,0,"ECONOMY - CONTA SIMPLES","Boleto Amigo","k",""],["d","2027-11",5,"ALUGUEL","",2312.59,0,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","c",""],["d","2027-03",5,"ALUGUEL","",2312.59,0,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","k",""],["d","2027-10",18,"EMPRESTIMOS A PAGAR","",2000,0,"ECONOMY - CONTA SIMPLES","Boleto Amigo","c",""],["d","2027-10",18,"EMPRESTIMOS A PAGAR","",2000,0,"ECONOMY - CONTA SIMPLES","Boleto Amigo","k",""],["d","2027-10",5,"ALUGUEL","",2312.59,0,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","c",""],["d","2027-02",5,"ALUGUEL","",2312.59,0,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","k",""],["d","2027-09",18,"EMPRESTIMOS A PAGAR","",2000,0,"ECONOMY - CONTA SIMPLES","Boleto Amigo","c",""],["d","2027-09",18,"EMPRESTIMOS A PAGAR","",2000,0,"ECONOMY - CONTA SIMPLES","Boleto Amigo","k",""],["d","2027-09",5,"ALUGUEL","",2312.59,0,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","c",""],["d","2027-01",5,"ALUGUEL","",2312.59,0,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","k",""],["d","2027-08",18,"EMPRESTIMOS A PAGAR","",2000,0,"ECONOMY - CONTA SIMPLES","Boleto Amigo","c",""],["d","2027-08",18,"EMPRESTIMOS A PAGAR","",2000,0,"ECONOMY - CONTA SIMPLES","Boleto Amigo","k",""],["d","2027-08",5,"ALUGUEL","",2312.59,0,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","c",""],["d","2026-12",5,"ALUGUEL","",2312.59,0,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","k",""],["d","2027-07",18,"EMPRESTIMOS A PAGAR","",2000,0,"ECONOMY - CONTA SIMPLES","Boleto Amigo","c",""],["d","2027-07",18,"EMPRESTIMOS A PAGAR","",2000,0,"ECONOMY - CONTA SIMPLES","Boleto Amigo","k",""],["d","2027-07",5,"ALUGUEL","",2312.59,0,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","c",""],["d","2026-11",5,"ALUGUEL","",2312.59,0,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","k",""],["d","2027-06",18,"EMPRESTIMOS A PAGAR","",2000,0,"ECONOMY - CONTA SIMPLES","Boleto Amigo","c",""],["d","2027-06",18,"EMPRESTIMOS A PAGAR","",2000,0,"ECONOMY - CONTA SIMPLES","Boleto Amigo","k",""],["d","2027-06",5,"ALUGUEL","",2312.59,0,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","c",""],["d","2026-10",5,"ALUGUEL","",2312.59,0,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","k",""],["d","2027-05",28,"ENERGIA","",7.36,0,"NEOENERGIA","Boleto Amigo","c",""],["d","2027-05",28,"ENERGIA","",7.36,0,"NEOENERGIA","Boleto Amigo","k",""],["d","2027-05",18,"EMPRESTIMOS A PAGAR","",2000,0,"ECONOMY - CONTA SIMPLES","Boleto Amigo","c",""],["d","2027-05",18,"EMPRESTIMOS A PAGAR","",2000,0,"ECONOMY - CONTA SIMPLES","Boleto Amigo","k",""],["d","2027-05",5,"ALUGUEL","",2312.59,0,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","c",""],["d","2026-09",5,"ALUGUEL","",2312.59,0,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","k",""],["d","2027-04",28,"ENERGIA","",7.36,0,"NEOENERGIA","Boleto Amigo","c",""],["d","2027-04",28,"ENERGIA","",7.36,0,"NEOENERGIA","Boleto Amigo","k",""],["d","2027-04",18,"EMPRESTIMOS A PAGAR","",2000,0,"ECONOMY - CONTA SIMPLES","Boleto Amigo","c",""],["d","2027-04",18,"EMPRESTIMOS A PAGAR","",2000,0,"ECONOMY - CONTA SIMPLES","Boleto Amigo","k",""],["d","2027-04",5,"ALUGUEL","",2312.59,0,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","c",""],["d","2026-08",5,"ALUGUEL","",2312.59,0,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","k",""],["d","2027-03",28,"ENERGIA","",7.36,0,"NEOENERGIA","Boleto Amigo","c",""],["d","2027-03",28,"ENERGIA","",7.36,0,"NEOENERGIA","Boleto Amigo","k",""],["d","2027-03",18,"EMPRESTIMOS A PAGAR","",2000,0,"ECONOMY - CONTA SIMPLES","Boleto Amigo","c",""],["d","2027-03",18,"EMPRESTIMOS A PAGAR","",2000,0,"ECONOMY - CONTA SIMPLES","Boleto Amigo","k",""],["d","2027-03",11,"OUTRAS DESPESAS","",79.08,0,"DLOCAL BRASIL PAGAMENTOS LTDA","Boleto Amigo","c",""],["d","2027-03",11,"OUTRAS DESPESAS","",79.08,0,"DLOCAL BRASIL PAGAMENTOS LTDA","Boleto Amigo","k",""],["d","2027-03",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",2500,0,"HUGO LEONARDO MOURA","Boleto Amigo","c",""],["d","2027-03",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",2500,0,"HUGO LEONARDO MOURA","Boleto Amigo","k",""],["d","2027-03",5,"ALUGUEL","",2312.59,0,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","c",""],["d","2026-07",5,"ALUGUEL","",2312.59,0,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","k",""],["d","2027-02",28,"ENERGIA","",7.36,0,"NEOENERGIA","Boleto Amigo","c",""],["d","2027-02",28,"ENERGIA","",7.36,0,"NEOENERGIA","Boleto Amigo","k",""],["d","2027-02",18,"EMPRESTIMOS A PAGAR","",2000,0,"ECONOMY - CONTA SIMPLES","Boleto Amigo","c",""],["d","2027-02",18,"EMPRESTIMOS A PAGAR","",2000,0,"ECONOMY - CONTA SIMPLES","Boleto Amigo","k",""],["d","2027-02",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",2500,0,"HUGO LEONARDO MOURA","Boleto Amigo","c",""],["d","2027-02",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",2500,0,"HUGO LEONARDO MOURA","Boleto Amigo","k",""],["d","2027-02",5,"ALUGUEL","",2312.59,0,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","c",""],["d","2026-06",5,"ALUGUEL","",2312.59,0,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","k",""],["d","2027-02",4,"META (FACEBOOK E INSTAGRAM)","",3000,0,"FACEBOOK CNPJ: 13.347.016/0001-17","Boleto Amigo","c",""],["d","2027-02",4,"META (FACEBOOK E INSTAGRAM)","",3000,0,"FACEBOOK CNPJ: 13.347.016/0001-17","Boleto Amigo","k",""],["d","2027-01",28,"SISTEMAS","",49,0,"DOCK INSTITUIÇÃO DE PAGAMENTO S.A","Boleto Amigo","c",""],["d","2027-01",28,"SISTEMAS","",49,0,"DOCK INSTITUIÇÃO DE PAGAMENTO S.A","Boleto Amigo","k",""],["d","2027-01",28,"ENERGIA","",7.36,0,"NEOENERGIA","Boleto Amigo","c",""],["d","2027-01",28,"ENERGIA","",7.36,0,"NEOENERGIA","Boleto Amigo","k",""],["d","2027-01",18,"EMPRESTIMOS A PAGAR","",2000,0,"ECONOMY - CONTA SIMPLES","Boleto Amigo","c",""],["d","2027-01",18,"EMPRESTIMOS A PAGAR","",2000,0,"ECONOMY - CONTA SIMPLES","Boleto Amigo","k",""],["d","2027-01",16,"OUTROS IMPOSTOS","",0.01,0,"MINISTERIO DA FAZENDA (IRRF)","Boleto Amigo","c",""],["d","2027-01",16,"OUTROS IMPOSTOS","",0.01,0,"MINISTERIO DA FAZENDA (IRRF)","Boleto Amigo","k",""],["d","2027-01",16,"SIMPLES","",0.01,0,"SIMPLES - RECEITA FEDERAL","Boleto Amigo","c",""],["d","2027-01",16,"SIMPLES","",0.01,0,"SIMPLES - RECEITA FEDERAL","Boleto Amigo","k",""],["d","2027-01",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",2500,0,"HUGO LEONARDO MOURA","Boleto Amigo","c",""],["d","2027-01",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",2500,0,"HUGO LEONARDO MOURA","Boleto Amigo","k",""],["d","2027-01",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",2561.23,0,"MARIA EDUARDA ANACLETO","Boleto Amigo","c",""],["d","2027-01",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",2561.23,0,"MARIA EDUARDA ANACLETO","Boleto Amigo","k",""],["d","2027-01",5,"ALUGUEL","",2312.59,0,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","c",""],["d","2026-05",5,"ALUGUEL","",2312.59,0,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","k",""],["d","2027-01",4,"META (FACEBOOK E INSTAGRAM)","",3000,0,"FACEBOOK CNPJ: 13.347.016/0001-17","Boleto Amigo","c",""],["d","2027-01",4,"META (FACEBOOK E INSTAGRAM)","",3000,0,"FACEBOOK CNPJ: 13.347.016/0001-17","Boleto Amigo","k",""],["d","2026-12",28,"SISTEMAS","",49,0,"DOCK INSTITUIÇÃO DE PAGAMENTO S.A","Boleto Amigo","c",""],["d","2026-12",28,"SISTEMAS","",49,0,"DOCK INSTITUIÇÃO DE PAGAMENTO S.A","Boleto Amigo","k",""],["d","2026-12",28,"PAGAMENTO DE VALE ALIMENTAÇÃO","",630,0,"PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL","Boleto Amigo","c",""],["d","2026-12",28,"PAGAMENTO DE VALE ALIMENTAÇÃO","",630,0,"PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL","Boleto Amigo","k",""],["d","2026-12",28,"ENERGIA","",7.36,0,"NEOENERGIA","Boleto Amigo","c",""],["d","2026-12",28,"ENERGIA","",7.36,0,"NEOENERGIA","Boleto Amigo","k",""],["d","2026-12",27,"PAGAMENTO DE VALE TRANSPORTE","",209,0,"SEMOB SECRETARIA DE ESTADO DE TRANSPORTE E MODILIDADE DO DF","Boleto Amigo","c",""],["d","2026-12",27,"PAGAMENTO DE VALE TRANSPORTE","",209,0,"SEMOB SECRETARIA DE ESTADO DE TRANSPORTE E MODILIDADE DO DF","Boleto Amigo","k",""],["d","2026-12",20,"SISTEMAS","",467.76,0,"ALGAR TELECOM S/A","Boleto Amigo","c",""],["d","2026-12",20,"SISTEMAS","",467.76,0,"ALGAR TELECOM S/A","Boleto Amigo","k",""],["d","2026-12",20,"SISTEMAS","",800,0,"ALGAR TELECOM S/A","Boleto Amigo","c",""],["d","2026-12",20,"SISTEMAS","",800,0,"ALGAR TELECOM S/A","Boleto Amigo","k",""],["d","2026-12",18,"EMPRESTIMOS A PAGAR","",2000,0,"ECONOMY - CONTA SIMPLES","Boleto Amigo","c",""],["d","2026-12",18,"EMPRESTIMOS A PAGAR","",2000,0,"ECONOMY - CONTA SIMPLES","Boleto Amigo","k",""],["d","2026-12",16,"SIMPLES","",0.01,0,"SIMPLES - RECEITA FEDERAL","Boleto Amigo","c",""],["d","2026-12",16,"SIMPLES","",0.01,0,"SIMPLES - RECEITA FEDERAL","Boleto Amigo","k",""],["d","2026-12",16,"OUTROS IMPOSTOS","",0.01,0,"MINISTERIO DA FAZENDA (IRRF)","Boleto Amigo","c",""],["d","2026-12",16,"OUTROS IMPOSTOS","",0.01,0,"MINISTERIO DA FAZENDA (IRRF)","Boleto Amigo","k",""],["d","2026-12",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",2561.23,0,"MARIA EDUARDA ANACLETO","Boleto Amigo","c",""],["d","2026-12",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",2561.23,0,"MARIA EDUARDA ANACLETO","Boleto Amigo","k",""],["d","2026-12",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",2500,0,"HUGO LEONARDO MOURA","Boleto Amigo","c",""],["d","2026-12",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",2500,0,"HUGO LEONARDO MOURA","Boleto Amigo","k",""],["d","2026-12",5,"ALUGUEL","",2312.59,0,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","c",""],["d","2026-04",5,"ALUGUEL","",2312.59,0,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","k",""],["d","2026-12",4,"META (FACEBOOK E INSTAGRAM)","",3000,0,"FACEBOOK CNPJ: 13.347.016/0001-17","Boleto Amigo","c",""],["d","2026-12",4,"META (FACEBOOK E INSTAGRAM)","",3000,0,"FACEBOOK CNPJ: 13.347.016/0001-17","Boleto Amigo","k",""],["d","2026-12",4,"LIMPEZA E HIGIENIZAÇÃO ESCRITÓRIO","",650,0,"ISMAILDE E SOUZA","Boleto Amigo","c",""],["d","2026-12",4,"LIMPEZA E HIGIENIZAÇÃO ESCRITÓRIO","",650,0,"ISMAILDE E SOUZA","Boleto Amigo","k",""],["d","2026-11",28,"SISTEMAS","",49,0,"DOCK INSTITUIÇÃO DE PAGAMENTO S.A","Boleto Amigo","c",""],["d","2026-11",28,"SISTEMAS","",49,0,"DOCK INSTITUIÇÃO DE PAGAMENTO S.A","Boleto Amigo","k",""],["d","2026-11",28,"ENERGIA","",7.36,0,"NEOENERGIA","Boleto Amigo","c",""],["d","2026-11",28,"ENERGIA","",7.36,0,"NEOENERGIA","Boleto Amigo","k",""],["d","2026-11",28,"PAGAMENTO DE VALE ALIMENTAÇÃO","",630,0,"PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL","Boleto Amigo","c",""],["d","2026-11",28,"PAGAMENTO DE VALE ALIMENTAÇÃO","",630,0,"PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL","Boleto Amigo","k",""],["d","2026-11",27,"PAGAMENTO DE VALE TRANSPORTE","",209,0,"SEMOB SECRETARIA DE ESTADO DE TRANSPORTE E MODILIDADE DO DF","Boleto Amigo","c",""],["d","2026-11",27,"PAGAMENTO DE VALE TRANSPORTE","",209,0,"SEMOB SECRETARIA DE ESTADO DE TRANSPORTE E MODILIDADE DO DF","Boleto Amigo","k",""],["d","2026-11",20,"SISTEMAS","",800,0,"ALGAR TELECOM S/A","Boleto Amigo","c",""],["d","2026-11",20,"SISTEMAS","",800,0,"ALGAR TELECOM S/A","Boleto Amigo","k",""],["d","2026-11",20,"SISTEMAS","",467.76,0,"ALGAR TELECOM S/A","Boleto Amigo","c",""],["d","2026-11",20,"SISTEMAS","",467.76,0,"ALGAR TELECOM S/A","Boleto Amigo","k",""],["d","2026-11",18,"EMPRESTIMOS A PAGAR","",2000,0,"ECONOMY - CONTA SIMPLES","Boleto Amigo","c",""],["d","2026-11",18,"EMPRESTIMOS A PAGAR","",2000,0,"ECONOMY - CONTA SIMPLES","Boleto Amigo","k",""],["d","2026-11",16,"SIMPLES","",0.01,0,"SIMPLES - RECEITA FEDERAL","Boleto Amigo","c",""],["d","2026-11",16,"SIMPLES","",0.01,0,"SIMPLES - RECEITA FEDERAL","Boleto Amigo","k",""],["d","2026-11",16,"OUTROS IMPOSTOS","",0.01,0,"MINISTERIO DA FAZENDA (IRRF)","Boleto Amigo","c",""],["d","2026-11",16,"OUTROS IMPOSTOS","",0.01,0,"MINISTERIO DA FAZENDA (IRRF)","Boleto Amigo","k",""],["d","2026-11",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",2500,0,"HUGO LEONARDO MOURA","Boleto Amigo","c",""],["d","2026-11",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",2500,0,"HUGO LEONARDO MOURA","Boleto Amigo","k",""],["d","2026-11",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",2561.23,0,"MARIA EDUARDA ANACLETO","Boleto Amigo","c",""],["d","2026-11",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",2561.23,0,"MARIA EDUARDA ANACLETO","Boleto Amigo","k",""],["d","2026-11",5,"ALUGUEL","",2312.59,0,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","c",""],["d","2026-03",5,"ALUGUEL","",2312.59,0,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","k",""],["d","2026-11",4,"LIMPEZA E HIGIENIZAÇÃO ESCRITÓRIO","",650,0,"ISMAILDE E SOUZA","Boleto Amigo","c",""],["d","2026-11",4,"LIMPEZA E HIGIENIZAÇÃO ESCRITÓRIO","",650,0,"ISMAILDE E SOUZA","Boleto Amigo","k",""],["d","2026-11",4,"META (FACEBOOK E INSTAGRAM)","",3000,0,"FACEBOOK CNPJ: 13.347.016/0001-17","Boleto Amigo","c",""],["d","2026-11",4,"META (FACEBOOK E INSTAGRAM)","",3000,0,"FACEBOOK CNPJ: 13.347.016/0001-17","Boleto Amigo","k",""],["d","2026-10",28,"SISTEMAS","",49,0,"DOCK INSTITUIÇÃO DE PAGAMENTO S.A","Boleto Amigo","c",""],["d","2026-10",28,"SISTEMAS","",49,0,"DOCK INSTITUIÇÃO DE PAGAMENTO S.A","Boleto Amigo","k",""],["d","2026-10",28,"PAGAMENTO DE VALE ALIMENTAÇÃO","",630,0,"PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL","Boleto Amigo","c",""],["d","2026-10",28,"PAGAMENTO DE VALE ALIMENTAÇÃO","",630,0,"PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL","Boleto Amigo","k",""],["d","2026-10",28,"ENERGIA","",7.36,0,"NEOENERGIA","Boleto Amigo","c",""],["d","2026-10",28,"ENERGIA","",7.36,0,"NEOENERGIA","Boleto Amigo","k",""],["d","2026-10",27,"PAGAMENTO DE VALE TRANSPORTE","",209,0,"SEMOB SECRETARIA DE ESTADO DE TRANSPORTE E MODILIDADE DO DF","Boleto Amigo","c",""],["d","2026-10",27,"PAGAMENTO DE VALE TRANSPORTE","",209,0,"SEMOB SECRETARIA DE ESTADO DE TRANSPORTE E MODILIDADE DO DF","Boleto Amigo","k",""],["d","2026-10",20,"SISTEMAS","",467.76,0,"ALGAR TELECOM S/A","Boleto Amigo","c",""],["d","2026-10",20,"SISTEMAS","",467.76,0,"ALGAR TELECOM S/A","Boleto Amigo","k",""],["d","2026-10",20,"SISTEMAS","",800,0,"ALGAR TELECOM S/A","Boleto Amigo","c",""],["d","2026-10",20,"SISTEMAS","",800,0,"ALGAR TELECOM S/A","Boleto Amigo","k",""],["d","2026-10",18,"INSS","",1078.83,0,"MINISTERIO DA PREVIDENCIA (INSS)","Boleto Amigo","c",""],["d","2026-10",18,"INSS","",1078.83,0,"MINISTERIO DA PREVIDENCIA (INSS)","Boleto Amigo","k",""],["d","2026-10",18,"FGTS","",452.04,0,"CAIXA ECONOMICA FEDERAL","Boleto Amigo","c",""],["d","2026-10",18,"FGTS","",452.04,0,"CAIXA ECONOMICA FEDERAL","Boleto Amigo","k",""],["d","2026-10",18,"EMPRESTIMOS A PAGAR","",2000,0,"ECONOMY - CONTA SIMPLES","Boleto Amigo","c",""],["d","2026-10",18,"EMPRESTIMOS A PAGAR","",2000,0,"ECONOMY - CONTA SIMPLES","Boleto Amigo","k",""],["d","2026-10",16,"OUTROS IMPOSTOS","",0.01,0,"MINISTERIO DA FAZENDA (IRRF)","Boleto Amigo","c",""],["d","2026-10",16,"OUTROS IMPOSTOS","",0.01,0,"MINISTERIO DA FAZENDA (IRRF)","Boleto Amigo","k",""],["d","2026-10",16,"SIMPLES","",0.01,0,"SIMPLES - RECEITA FEDERAL","Boleto Amigo","c",""],["d","2026-10",16,"SIMPLES","",0.01,0,"SIMPLES - RECEITA FEDERAL","Boleto Amigo","k",""],["d","2026-10",10,"OUTRAS DESPESAS","",180.8,0,"BRXNQ- TELECOMUNICAÇÕES- LTDA","Boleto Amigo","c",""],["d","2026-10",10,"OUTRAS DESPESAS","",180.8,0,"BRXNQ- TELECOMUNICAÇÕES- LTDA","Boleto Amigo","k",""],["d","2026-10",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",2561.23,0,"MARIA EDUARDA ANACLETO","Boleto Amigo","c",""],["d","2026-10",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",2561.23,0,"MARIA EDUARDA ANACLETO","Boleto Amigo","k",""],["d","2026-10",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",2500,0,"HUGO LEONARDO MOURA","Boleto Amigo","c",""],["d","2026-10",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",2500,0,"HUGO LEONARDO MOURA","Boleto Amigo","k",""],["d","2026-10",5,"ALUGUEL","",470.98,0,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","c",""],["d","2026-10",5,"ALUGUEL","",470.98,0,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","k",""],["d","2026-10",5,"CONDOMÍNIO","",1123.44,0,"CONDOMINIO DO EDIFICIO SUPER CENTER VENANCIO 2000","Boleto Amigo","c",""],["d","2026-10",5,"CONDOMÍNIO","",1123.44,0,"CONDOMINIO DO EDIFICIO SUPER CENTER VENANCIO 2000","Boleto Amigo","k",""],["d","2026-10",5,"ALUGUEL","",2246.08,0,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","c",""],["d","2026-10",5,"ALUGUEL","",2246.08,0,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","k",""],["d","2026-10",4,"META (FACEBOOK E INSTAGRAM)","",3000,0,"FACEBOOK CNPJ: 13.347.016/0001-17","Boleto Amigo","c",""],["d","2026-10",4,"META (FACEBOOK E INSTAGRAM)","",3000,0,"FACEBOOK CNPJ: 13.347.016/0001-17","Boleto Amigo","k",""],["d","2026-10",4,"LIMPEZA E HIGIENIZAÇÃO ESCRITÓRIO","",650,0,"ISMAILDE E SOUZA","Boleto Amigo","c",""],["d","2026-10",4,"LIMPEZA E HIGIENIZAÇÃO ESCRITÓRIO","",650,0,"ISMAILDE E SOUZA","Boleto Amigo","k",""],["d","2026-09",28,"SISTEMAS","",49,0,"DOCK INSTITUIÇÃO DE PAGAMENTO S.A","Boleto Amigo","c",""],["d","2026-09",28,"SISTEMAS","",49,0,"DOCK INSTITUIÇÃO DE PAGAMENTO S.A","Boleto Amigo","k",""],["d","2026-09",28,"ENERGIA","",7.36,0,"NEOENERGIA","Boleto Amigo","c",""],["d","2026-09",28,"ENERGIA","",7.36,0,"NEOENERGIA","Boleto Amigo","k",""],["d","2026-09",28,"PAGAMENTO DE VALE ALIMENTAÇÃO","",630,0,"PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL","Boleto Amigo","c",""],["d","2026-09",28,"PAGAMENTO DE VALE ALIMENTAÇÃO","",630,0,"PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL","Boleto Amigo","k",""],["d","2026-09",27,"PAGAMENTO DE VALE TRANSPORTE","",209,0,"SEMOB SECRETARIA DE ESTADO DE TRANSPORTE E MODILIDADE DO DF","Boleto Amigo","c",""],["d","2026-09",27,"PAGAMENTO DE VALE TRANSPORTE","",209,0,"SEMOB SECRETARIA DE ESTADO DE TRANSPORTE E MODILIDADE DO DF","Boleto Amigo","k",""],["d","2026-09",20,"SISTEMAS","",800,0,"ALGAR TELECOM S/A","Boleto Amigo","c",""],["d","2026-09",20,"SISTEMAS","",800,0,"ALGAR TELECOM S/A","Boleto Amigo","k",""],["d","2026-09",20,"SISTEMAS","",467.76,0,"ALGAR TELECOM S/A","Boleto Amigo","c",""],["d","2026-09",20,"SISTEMAS","",467.76,0,"ALGAR TELECOM S/A","Boleto Amigo","k",""],["d","2026-09",18,"EMPRESTIMOS A PAGAR","",2000,0,"ECONOMY - CONTA SIMPLES","Boleto Amigo","c",""],["d","2026-09",18,"EMPRESTIMOS A PAGAR","",2000,0,"ECONOMY - CONTA SIMPLES","Boleto Amigo","k",""],["d","2026-09",18,"FGTS","",452.04,0,"CAIXA ECONOMICA FEDERAL","Boleto Amigo","c",""],["d","2026-09",18,"FGTS","",452.04,0,"CAIXA ECONOMICA FEDERAL","Boleto Amigo","k",""],["d","2026-09",18,"INSS","",1078.83,0,"MINISTERIO DA PREVIDENCIA (INSS)","Boleto Amigo","c",""],["d","2026-09",18,"INSS","",1078.83,0,"MINISTERIO DA PREVIDENCIA (INSS)","Boleto Amigo","k",""],["d","2026-09",16,"SIMPLES","",0.01,0,"SIMPLES - RECEITA FEDERAL","Boleto Amigo","c",""],["d","2026-09",16,"SIMPLES","",0.01,0,"SIMPLES - RECEITA FEDERAL","Boleto Amigo","k",""],["d","2026-09",16,"OUTROS IMPOSTOS","",0.01,0,"MINISTERIO DA FAZENDA (IRRF)","Boleto Amigo","c",""],["d","2026-09",16,"OUTROS IMPOSTOS","",0.01,0,"MINISTERIO DA FAZENDA (IRRF)","Boleto Amigo","k",""],["d","2026-09",10,"OUTRAS DESPESAS","",180.8,0,"BRXNQ- TELECOMUNICAÇÕES- LTDA","Boleto Amigo","c",""],["d","2026-09",10,"OUTRAS DESPESAS","",180.8,0,"BRXNQ- TELECOMUNICAÇÕES- LTDA","Boleto Amigo","k",""],["d","2026-09",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",2561.23,0,"MARIA EDUARDA ANACLETO","Boleto Amigo","c",""],["d","2026-09",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",2561.23,0,"MARIA EDUARDA ANACLETO","Boleto Amigo","k",""],["d","2026-09",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",2500,0,"HUGO LEONARDO MOURA","Boleto Amigo","c",""],["d","2026-09",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",2500,0,"HUGO LEONARDO MOURA","Boleto Amigo","k",""],["d","2026-09",5,"ALUGUEL","",470.98,0,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","c",""],["d","2026-09",5,"ALUGUEL","",470.98,0,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","k",""],["d","2026-09",5,"CONDOMÍNIO","",1123.44,0,"CONDOMINIO DO EDIFICIO SUPER CENTER VENANCIO 2000","Boleto Amigo","c",""],["d","2026-09",5,"CONDOMÍNIO","",1123.44,0,"CONDOMINIO DO EDIFICIO SUPER CENTER VENANCIO 2000","Boleto Amigo","k",""],["d","2026-09",5,"ALUGUEL","",2246.08,0,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","c",""],["d","2026-09",5,"ALUGUEL","",2246.08,0,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","k",""],["d","2026-09",4,"LIMPEZA E HIGIENIZAÇÃO ESCRITÓRIO","",650,0,"ISMAILDE E SOUZA","Boleto Amigo","c",""],["d","2026-09",4,"LIMPEZA E HIGIENIZAÇÃO ESCRITÓRIO","",650,0,"ISMAILDE E SOUZA","Boleto Amigo","k",""],["d","2026-09",4,"META (FACEBOOK E INSTAGRAM)","",3000,0,"FACEBOOK CNPJ: 13.347.016/0001-17","Boleto Amigo","c",""],["d","2026-09",4,"META (FACEBOOK E INSTAGRAM)","",3000,0,"FACEBOOK CNPJ: 13.347.016/0001-17","Boleto Amigo","k",""],["d","2026-08",28,"SISTEMAS","",49,0,"DOCK INSTITUIÇÃO DE PAGAMENTO S.A","Boleto Amigo","c",""],["d","2026-08",28,"SISTEMAS","",49,0,"DOCK INSTITUIÇÃO DE PAGAMENTO S.A","Boleto Amigo","k",""],["d","2026-08",28,"PAGAMENTO DE VALE ALIMENTAÇÃO","",630,0,"PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL","Boleto Amigo","c",""],["d","2026-08",28,"PAGAMENTO DE VALE ALIMENTAÇÃO","",630,0,"PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL","Boleto Amigo","k",""],["d","2026-08",28,"ENERGIA","",7.36,0,"NEOENERGIA","Boleto Amigo","c",""],["d","2026-08",28,"ENERGIA","",7.36,0,"NEOENERGIA","Boleto Amigo","k",""],["d","2026-08",27,"PAGAMENTO DE VALE TRANSPORTE","",209,0,"SEMOB SECRETARIA DE ESTADO DE TRANSPORTE E MODILIDADE DO DF","Boleto Amigo","c",""],["d","2026-08",27,"PAGAMENTO DE VALE TRANSPORTE","",209,0,"SEMOB SECRETARIA DE ESTADO DE TRANSPORTE E MODILIDADE DO DF","Boleto Amigo","k",""],["d","2026-08",20,"SISTEMAS","",800,0,"ALGAR TELECOM S/A","Boleto Amigo","c",""],["d","2026-08",20,"SISTEMAS","",800,0,"ALGAR TELECOM S/A","Boleto Amigo","k",""],["d","2026-08",20,"SISTEMAS","",467.76,0,"ALGAR TELECOM S/A","Boleto Amigo","c",""],["d","2026-08",20,"SISTEMAS","",467.76,0,"ALGAR TELECOM S/A","Boleto Amigo","k",""],["d","2026-08",18,"EMPRESTIMOS A PAGAR","",2000,0,"ECONOMY - CONTA SIMPLES","Boleto Amigo","c",""],["d","2026-08",18,"EMPRESTIMOS A PAGAR","",2000,0,"ECONOMY - CONTA SIMPLES","Boleto Amigo","k",""],["d","2026-08",18,"INSS","",1078.83,0,"MINISTERIO DA PREVIDENCIA (INSS)","Boleto Amigo","c",""],["d","2026-08",18,"INSS","",1078.83,0,"MINISTERIO DA PREVIDENCIA (INSS)","Boleto Amigo","k",""],["d","2026-08",18,"FGTS","",452.04,0,"CAIXA ECONOMICA FEDERAL","Boleto Amigo","c",""],["d","2026-08",18,"FGTS","",452.04,0,"CAIXA ECONOMICA FEDERAL","Boleto Amigo","k",""],["d","2026-08",16,"SIMPLES","",0.01,0,"SIMPLES - RECEITA FEDERAL","Boleto Amigo","c",""],["d","2026-08",16,"SIMPLES","",0.01,0,"SIMPLES - RECEITA FEDERAL","Boleto Amigo","k",""],["d","2026-08",16,"OUTROS IMPOSTOS","",0.01,0,"MINISTERIO DA FAZENDA (IRRF)","Boleto Amigo","c",""],["d","2026-08",16,"OUTROS IMPOSTOS","",0.01,0,"MINISTERIO DA FAZENDA (IRRF)","Boleto Amigo","k",""],["d","2026-08",10,"OUTRAS DESPESAS","",180.8,0,"BRXNQ- TELECOMUNICAÇÕES- LTDA","Boleto Amigo","c",""],["d","2026-08",10,"OUTRAS DESPESAS","",180.8,0,"BRXNQ- TELECOMUNICAÇÕES- LTDA","Boleto Amigo","k",""],["d","2026-08",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",2500,0,"HUGO LEONARDO MOURA","Boleto Amigo","c",""],["d","2026-08",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",2500,0,"HUGO LEONARDO MOURA","Boleto Amigo","k",""],["d","2026-08",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",2561.23,0,"MARIA EDUARDA ANACLETO","Boleto Amigo","c",""],["d","2026-08",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",2561.23,0,"MARIA EDUARDA ANACLETO","Boleto Amigo","k",""],["d","2026-08",5,"ALUGUEL","",470.98,0,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","c",""],["d","2026-08",5,"ALUGUEL","",470.98,0,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","k",""],["d","2026-08",5,"ALUGUEL","",2246.08,0,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","c",""],["d","2026-08",5,"ALUGUEL","",2246.08,0,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","k",""],["d","2026-08",5,"CONDOMÍNIO","",1123.44,0,"CONDOMINIO DO EDIFICIO SUPER CENTER VENANCIO 2000","Boleto Amigo","c",""],["d","2026-08",5,"CONDOMÍNIO","",1123.44,0,"CONDOMINIO DO EDIFICIO SUPER CENTER VENANCIO 2000","Boleto Amigo","k",""],["d","2026-08",4,"LIMPEZA E HIGIENIZAÇÃO ESCRITÓRIO","",650,0,"ISMAILDE E SOUZA","Boleto Amigo","c",""],["d","2026-08",4,"LIMPEZA E HIGIENIZAÇÃO ESCRITÓRIO","",650,0,"ISMAILDE E SOUZA","Boleto Amigo","k",""],["d","2026-08",4,"META (FACEBOOK E INSTAGRAM)","",3000,0,"FACEBOOK CNPJ: 13.347.016/0001-17","Boleto Amigo","c",""],["d","2026-08",4,"META (FACEBOOK E INSTAGRAM)","",3000,0,"FACEBOOK CNPJ: 13.347.016/0001-17","Boleto Amigo","k",""],["d","2026-08",2,"RESSARCIMENTO DE DESPESAS DE CUSTOS OPERACIONAIS (TAG/DF)","",0.01,0,"ECONOMY ASSESSORIA - TAGUATINGA","Boleto Amigo","c",""],["d","2026-08",2,"RESSARCIMENTO DE DESPESAS DE CUSTOS OPERACIONAIS (TAG/DF)","",0.01,0,"ECONOMY ASSESSORIA - TAGUATINGA","Boleto Amigo","k",""],["d","2026-08",1,"FUNDO DE CAIXA ECONOMY (CONTA SIMPLES)","",0.01,0,"DOCK IP S.A FUNDO DE CAIXA E INVESTIMENTOS","Boleto Amigo","c",""],["d","2026-08",1,"FUNDO DE CAIXA ECONOMY (CONTA SIMPLES)","",0.01,0,"DOCK IP S.A FUNDO DE CAIXA E INVESTIMENTOS","Boleto Amigo","k",""],["d","2026-07",28,"ENERGIA","",7.36,0,"NEOENERGIA","Boleto Amigo","c",""],["d","2026-07",28,"ENERGIA","",7.36,0,"NEOENERGIA","Boleto Amigo","k",""],["d","2026-07",28,"SISTEMAS","",49,0,"DOCK INSTITUIÇÃO DE PAGAMENTO S.A","Boleto Amigo","c",""],["d","2026-07",28,"SISTEMAS","",49,0,"DOCK INSTITUIÇÃO DE PAGAMENTO S.A","Boleto Amigo","k",""],["d","2026-07",28,"PAGAMENTO DE VALE ALIMENTAÇÃO","",630,0,"PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL","Boleto Amigo","c",""],["d","2026-07",28,"PAGAMENTO DE VALE ALIMENTAÇÃO","",630,0,"PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL","Boleto Amigo","k",""],["d","2026-07",27,"PAGAMENTO DE VALE TRANSPORTE","",209,0,"SEMOB SECRETARIA DE ESTADO DE TRANSPORTE E MODILIDADE DO DF","Boleto Amigo","c",""],["d","2026-07",27,"PAGAMENTO DE VALE TRANSPORTE","",209,0,"SEMOB SECRETARIA DE ESTADO DE TRANSPORTE E MODILIDADE DO DF","Boleto Amigo","k",""],["d","2026-07",20,"SISTEMAS","",800,0,"ALGAR TELECOM S/A","Boleto Amigo","c",""],["d","2026-07",20,"SISTEMAS","",800,0,"ALGAR TELECOM S/A","Boleto Amigo","k",""],["d","2026-07",20,"SISTEMAS","",467.76,0,"ALGAR TELECOM S/A","Boleto Amigo","c",""],["d","2026-07",20,"SISTEMAS","",467.76,0,"ALGAR TELECOM S/A","Boleto Amigo","k",""],["d","2026-07",18,"INSS","",1078.83,0,"MINISTERIO DA PREVIDENCIA (INSS)","Boleto Amigo","c",""],["d","2026-07",18,"INSS","",1078.83,0,"MINISTERIO DA PREVIDENCIA (INSS)","Boleto Amigo","k",""],["d","2026-07",18,"EMPRESTIMOS A PAGAR","",2000,0,"ECONOMY - CONTA SIMPLES","Boleto Amigo","c",""],["d","2026-07",18,"EMPRESTIMOS A PAGAR","",2000,0,"ECONOMY - CONTA SIMPLES","Boleto Amigo","k",""],["d","2026-07",18,"FGTS","",452.04,0,"CAIXA ECONOMICA FEDERAL","Boleto Amigo","c",""],["d","2026-07",18,"FGTS","",452.04,0,"CAIXA ECONOMICA FEDERAL","Boleto Amigo","k",""],["d","2026-07",16,"OUTROS IMPOSTOS","",0.01,0,"MINISTERIO DA FAZENDA (IRRF)","Boleto Amigo","c",""],["d","2026-07",16,"OUTROS IMPOSTOS","",0.01,0,"MINISTERIO DA FAZENDA (IRRF)","Boleto Amigo","k",""],["d","2026-07",16,"SIMPLES","",0.01,0,"SIMPLES - RECEITA FEDERAL","Boleto Amigo","c",""],["d","2026-07",16,"SIMPLES","",0.01,0,"SIMPLES - RECEITA FEDERAL","Boleto Amigo","k",""],["d","2026-07",10,"OUTRAS DESPESAS","",180.8,0,"BRXNQ- TELECOMUNICAÇÕES- LTDA","Boleto Amigo","c",""],["d","2026-07",10,"OUTRAS DESPESAS","",180.8,0,"BRXNQ- TELECOMUNICAÇÕES- LTDA","Boleto Amigo","k",""],["d","2026-07",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",2500,0,"HUGO LEONARDO MOURA","Boleto Amigo","c",""],["d","2026-07",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",2500,0,"HUGO LEONARDO MOURA","Boleto Amigo","k",""],["d","2026-07",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",2561.23,0,"MARIA EDUARDA ANACLETO","Boleto Amigo","c",""],["d","2026-07",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",2561.23,0,"MARIA EDUARDA ANACLETO","Boleto Amigo","k",""],["d","2026-07",6,"MATERIAL DE CONSUMO","",325.72,0,"TUDO OFFICE LTDA","Boleto Amigo","c",""],["d","2026-07",6,"MATERIAL DE CONSUMO","",325.72,0,"TUDO OFFICE LTDA","Boleto Amigo","k",""],["d","2026-07",5,"CONDOMÍNIO","",1123.44,0,"CONDOMINIO DO EDIFICIO SUPER CENTER VENANCIO 2000","Boleto Amigo","c",""],["d","2026-07",5,"CONDOMÍNIO","",1123.44,0,"CONDOMINIO DO EDIFICIO SUPER CENTER VENANCIO 2000","Boleto Amigo","k",""],["d","2026-07",5,"ALUGUEL","",2246.08,0,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","c",""],["d","2026-07",5,"ALUGUEL","",2246.08,0,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","k",""],["d","2026-07",5,"ALUGUEL","",470.98,0,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","c",""],["d","2026-07",5,"ALUGUEL","",470.98,0,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","k",""],["d","2026-07",4,"META (FACEBOOK E INSTAGRAM)","",3000,0,"FACEBOOK CNPJ: 13.347.016/0001-17","Boleto Amigo","c",""],["d","2026-07",4,"META (FACEBOOK E INSTAGRAM)","",3000,0,"FACEBOOK CNPJ: 13.347.016/0001-17","Boleto Amigo","k",""],["d","2026-07",4,"LIMPEZA E HIGIENIZAÇÃO ESCRITÓRIO","",650,0,"ISMAILDE E SOUZA","Boleto Amigo","c",""],["d","2026-07",4,"LIMPEZA E HIGIENIZAÇÃO ESCRITÓRIO","",650,0,"ISMAILDE E SOUZA","Boleto Amigo","k",""],["d","2026-07",2,"RESSARCIMENTO DE DESPESAS DE CUSTOS OPERACIONAIS (TAG/DF)","",0.01,0,"ECONOMY ASSESSORIA - TAGUATINGA","Boleto Amigo","c",""],["d","2026-07",2,"RESSARCIMENTO DE DESPESAS DE CUSTOS OPERACIONAIS (TAG/DF)","",0.01,0,"ECONOMY ASSESSORIA - TAGUATINGA","Boleto Amigo","k",""],["d","2026-07",1,"FUNDO DE CAIXA ECONOMY (CONTA SIMPLES)","",0.01,0,"DOCK IP S.A FUNDO DE CAIXA E INVESTIMENTOS","Boleto Amigo","c",""],["d","2026-07",1,"FUNDO DE CAIXA ECONOMY (CONTA SIMPLES)","",0.01,0,"DOCK IP S.A FUNDO DE CAIXA E INVESTIMENTOS","Boleto Amigo","k",""],["d","2026-06",28,"SISTEMAS","",49,0,"DOCK INSTITUIÇÃO DE PAGAMENTO S.A","Boleto Amigo","c",""],["d","2026-06",28,"SISTEMAS","",49,0,"DOCK INSTITUIÇÃO DE PAGAMENTO S.A","Boleto Amigo","k",""],["d","2026-06",28,"ENERGIA","",7.36,0,"NEOENERGIA","Boleto Amigo","c",""],["d","2026-06",28,"ENERGIA","",7.36,0,"NEOENERGIA","Boleto Amigo","k",""],["d","2026-06",28,"PAGAMENTO DE VALE ALIMENTAÇÃO","",630,0,"PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL","Boleto Amigo","c",""],["d","2026-06",28,"PAGAMENTO DE VALE ALIMENTAÇÃO","",630,0,"PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL","Boleto Amigo","k",""],["d","2026-06",27,"PAGAMENTO DE VALE TRANSPORTE","",209,0,"SEMOB SECRETARIA DE ESTADO DE TRANSPORTE E MODILIDADE DO DF","Boleto Amigo","c",""],["d","2026-06",27,"PAGAMENTO DE VALE TRANSPORTE","",209,0,"SEMOB SECRETARIA DE ESTADO DE TRANSPORTE E MODILIDADE DO DF","Boleto Amigo","k",""],["d","2026-06",20,"SISTEMAS","",467.76,0,"ALGAR TELECOM S/A","Boleto Amigo","c",""],["d","2026-06",20,"SISTEMAS","",467.76,0,"ALGAR TELECOM S/A","Boleto Amigo","k",""],["d","2026-06",20,"SISTEMAS","",800,0,"ALGAR TELECOM S/A","Boleto Amigo","c",""],["d","2026-06",20,"SISTEMAS","",800,0,"ALGAR TELECOM S/A","Boleto Amigo","k",""],["d","2026-06",18,"EMPRESTIMOS A PAGAR","",2000,0,"ECONOMY - CONTA SIMPLES","Boleto Amigo","c",""],["d","2026-06",18,"EMPRESTIMOS A PAGAR","",2000,0,"ECONOMY - CONTA SIMPLES","Boleto Amigo","k",""],["d","2026-06",18,"INSS","",1078.83,0,"MINISTERIO DA PREVIDENCIA (INSS)","Boleto Amigo","c",""],["d","2026-06",18,"INSS","",1078.83,0,"MINISTERIO DA PREVIDENCIA (INSS)","Boleto Amigo","k",""],["d","2026-06",18,"FGTS","",452.04,0,"CAIXA ECONOMICA FEDERAL","Boleto Amigo","c",""],["d","2026-06",18,"FGTS","",452.04,0,"CAIXA ECONOMICA FEDERAL","Boleto Amigo","k",""],["d","2026-06",16,"MATERIAL DE CONSUMO","",325.72,0,"TUDO OFFICE LTDA","Boleto Amigo","c",""],["d","2026-06",16,"MATERIAL DE CONSUMO","",325.72,0,"TUDO OFFICE LTDA","Boleto Amigo","k",""],["d","2026-06",16,"OUTROS IMPOSTOS","",0.01,0,"MINISTERIO DA FAZENDA (IRRF)","Boleto Amigo","c",""],["d","2026-06",16,"OUTROS IMPOSTOS","",0.01,0,"MINISTERIO DA FAZENDA (IRRF)","Boleto Amigo","k",""],["d","2026-06",16,"SIMPLES","",0.01,0,"SIMPLES - RECEITA FEDERAL","Boleto Amigo","c",""],["d","2026-06",16,"SIMPLES","",0.01,0,"SIMPLES - RECEITA FEDERAL","Boleto Amigo","k",""],["d","2026-06",10,"OUTRAS DESPESAS","",180.8,0,"BRXNQ- TELECOMUNICAÇÕES- LTDA","Boleto Amigo","c",""],["d","2026-06",10,"OUTRAS DESPESAS","",180.8,0,"BRXNQ- TELECOMUNICAÇÕES- LTDA","Boleto Amigo","k",""],["d","2026-06",9,"ALUGUEL DE IMPRESSORA","",384.79,0,"QUALITY TOTAL LOCAÇÃO DE EQUIPAMENTOS DE INFORMATICA","Boleto Amigo","c",""],["d","2026-06",9,"ALUGUEL DE IMPRESSORA","",384.79,0,"QUALITY TOTAL LOCAÇÃO DE EQUIPAMENTOS DE INFORMATICA","Boleto Amigo","k",""],["d","2026-06",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",2561.23,0,"MARIA EDUARDA ANACLETO","Boleto Amigo","c",""],["d","2026-06",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",2561.23,0,"MARIA EDUARDA ANACLETO","Boleto Amigo","k",""],["d","2026-06",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",2500,0,"HUGO LEONARDO MOURA","Boleto Amigo","c",""],["d","2026-06",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",2500,0,"HUGO LEONARDO MOURA","Boleto Amigo","k",""],["d","2026-06",5,"ALUGUEL","",2246.08,0,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","c",""],["d","2026-06",5,"ALUGUEL","",2246.08,0,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","k",""],["d","2026-06",5,"CONDOMÍNIO","",1234.52,0,"CONDOMINIO DO EDIFICIO SUPER CENTER VENANCIO 2000","Boleto Amigo","c",""],["d","2026-06",5,"CONDOMÍNIO","",1234.52,0,"CONDOMINIO DO EDIFICIO SUPER CENTER VENANCIO 2000","Boleto Amigo","k",""],["d","2026-06",5,"ALUGUEL","",470.98,0,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","c",""],["d","2026-06",5,"ALUGUEL","",470.98,0,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","k",""],["d","2026-06",4,"LIMPEZA E HIGIENIZAÇÃO ESCRITÓRIO","",650,0,"ISMAILDE E SOUZA","Boleto Amigo","c",""],["d","2026-06",4,"LIMPEZA E HIGIENIZAÇÃO ESCRITÓRIO","",650,0,"ISMAILDE E SOUZA","Boleto Amigo","k",""],["d","2026-06",4,"META (FACEBOOK E INSTAGRAM)","",3000,0,"FACEBOOK CNPJ: 13.347.016/0001-17","Boleto Amigo","c",""],["d","2026-06",4,"META (FACEBOOK E INSTAGRAM)","",3000,0,"FACEBOOK CNPJ: 13.347.016/0001-17","Boleto Amigo","k",""],["d","2026-06",2,"Sem categoria","",2.59,1,"-","Boleto Amigo","c",""],["d","2026-06",2,"Sem categoria","",2.59,1,"-","Boleto Amigo","k",""],["d","2026-06",2,"RESSARCIMENTO DE DESPESAS DE CUSTOS OPERACIONAIS (TAG/DF)","",0.01,0,"ECONOMY ASSESSORIA - TAGUATINGA","Boleto Amigo","c",""],["d","2026-06",2,"RESSARCIMENTO DE DESPESAS DE CUSTOS OPERACIONAIS (TAG/DF)","",0.01,0,"ECONOMY ASSESSORIA - TAGUATINGA","Boleto Amigo","k",""],["d","2026-06",1,"ENERGIA","",7.36,0,"NEOENERGIA","Boleto Amigo","c",""],["d","2026-05",28,"ENERGIA","",7.36,0,"NEOENERGIA","Boleto Amigo","k",""],["d","2026-06",1,"Sem categoria","",2.59,1,"-","Boleto Amigo","c",""],["d","2026-06",1,"Sem categoria","",2.59,1,"-","Boleto Amigo","k",""],["d","2026-06",1,"EMPRESA PRESTADORA DE SERVIÇOS","",400,0,"LEANDRO HENRIQUE PEREIRA DE LIRA","Boleto Amigo","c",""],["d","2026-04",29,"EMPRESA PRESTADORA DE SERVIÇOS","",400,0,"LEANDRO HENRIQUE PEREIRA DE LIRA","Boleto Amigo","k",""],["d","2026-06",1,"FUNDO DE CAIXA ECONOMY (CONTA SIMPLES)","",0.01,0,"DOCK IP S.A FUNDO DE CAIXA E INVESTIMENTOS","Boleto Amigo","c",""],["d","2026-06",1,"FUNDO DE CAIXA ECONOMY (CONTA SIMPLES)","",0.01,0,"DOCK IP S.A FUNDO DE CAIXA E INVESTIMENTOS","Boleto Amigo","k",""],["d","2026-06",1,"SISTEMAS","",49,0,"DOCK INSTITUIÇÃO DE PAGAMENTO S.A","Boleto Amigo","c",""],["d","2026-05",28,"SISTEMAS","",49,0,"DOCK INSTITUIÇÃO DE PAGAMENTO S.A","Boleto Amigo","k",""],["d","2026-05",29,"MATERIAL DE CONSUMO","",12.99,1,"HUGO LEONARDO MOURA","Boleto Amigo","c",""],["d","2026-05",29,"MATERIAL DE CONSUMO","",12.99,1,"HUGO LEONARDO MOURA","Boleto Amigo","k",""],["d","2026-05",29,"OUTROS IMPOSTOS","",0.01,1,"MINISTERIO DA FAZENDA (IRRF)","Boleto Amigo","c",""],["d","2026-05",16,"OUTROS IMPOSTOS","",0.01,1,"MINISTERIO DA FAZENDA (IRRF)","Boleto Amigo","k",""],["d","2026-05",29,"MATERIAL DE CONSUMO","",132.2,1,"COMERCIAL ALVORADA PROD. LIMP DESC LTDA","Boleto Amigo","c",""],["d","2026-05",29,"MATERIAL DE CONSUMO","",132.2,1,"COMERCIAL ALVORADA PROD. LIMP DESC LTDA","Boleto Amigo","k",""],["d","2026-05",29,"Sem categoria","",5.18,1,"-","Boleto Amigo","c",""],["d","2026-05",29,"Sem categoria","",5.18,1,"-","Boleto Amigo","k",""],["d","2026-05",28,"Sem categoria","",10.36,1,"-","Boleto Amigo","c",""],["d","2026-05",28,"Sem categoria","",10.36,1,"-","Boleto Amigo","k",""],["d","2026-05",27,"Sem categoria","",31.08,1,"-","Boleto Amigo","c",""],["d","2026-05",27,"Sem categoria","",31.08,1,"-","Boleto Amigo","k",""],["d","2026-05",26,"Sem categoria","",7.77,1,"-","Boleto Amigo","c",""],["d","2026-05",26,"Sem categoria","",7.77,1,"-","Boleto Amigo","k",""],["d","2026-05",25,"PAGAMENTO DE VALE TRANSPORTE","",253,1,"SEMOB SECRETARIA DE ESTADO DE TRANSPORTE E MODILIDADE DO DF","Boleto Amigo","c",""],["d","2026-05",27,"PAGAMENTO DE VALE TRANSPORTE","",253,1,"SEMOB SECRETARIA DE ESTADO DE TRANSPORTE E MODILIDADE DO DF","Boleto Amigo","k",""],["d","2026-05",25,"Sem categoria","",2.59,1,"-","Boleto Amigo","c",""],["d","2026-05",25,"Sem categoria","",2.59,1,"-","Boleto Amigo","k",""],["d","2026-05",25,"PAGAMENTO DE VALE ALIMENTAÇÃO","",1420,1,"PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL","Boleto Amigo","c",""],["d","2026-05",28,"PAGAMENTO DE VALE ALIMENTAÇÃO","",1420,1,"PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL","Boleto Amigo","k",""],["d","2026-05",25,"EMPRESA PRESTADORA DE SERVIÇOS","",15,1,"FRANCISCO AROUDO DOS SANTOS BATISTA","Boleto Amigo","c",""],["d","2026-05",25,"EMPRESA PRESTADORA DE SERVIÇOS","",15,1,"FRANCISCO AROUDO DOS SANTOS BATISTA","Boleto Amigo","k",""],["d","2026-05",22,"SISTEMAS","",0.01,0,"ALGAR TELECOM S/A","Boleto Amigo","c",""],["d","2026-05",20,"SISTEMAS","",0.01,0,"ALGAR TELECOM S/A","Boleto Amigo","k",""],["d","2026-05",22,"Sem categoria","",5.18,1,"-","Boleto Amigo","c",""],["d","2026-05",22,"Sem categoria","",5.18,1,"-","Boleto Amigo","k",""],["d","2026-05",22,"MATERIAL DE CONSUMO","",132.21,1,"COMERCIAL ALVORADA PROD. LIMP DESC LTDA","Boleto Amigo","c",""],["d","2026-05",22,"MATERIAL DE CONSUMO","",132.21,1,"COMERCIAL ALVORADA PROD. LIMP DESC LTDA","Boleto Amigo","k",""],["d","2026-05",20,"SISTEMAS","",482.56,1,"ALGAR TELECOM S/A","Boleto Amigo","c",""],["d","2026-05",20,"SISTEMAS","",482.56,1,"ALGAR TELECOM S/A","Boleto Amigo","k",""],["d","2026-05",19,"Sem categoria","",10.36,1,"-","Boleto Amigo","c",""],["d","2026-05",19,"Sem categoria","",10.36,1,"-","Boleto Amigo","k",""],["d","2026-05",18,"EMPRESTIMOS A PAGAR","",2000,0,"ECONOMY - CONTA SIMPLES","Boleto Amigo","c",""],["d","2026-05",18,"EMPRESTIMOS A PAGAR","",2000,0,"ECONOMY - CONTA SIMPLES","Boleto Amigo","k",""],["d","2026-05",18,"Sem categoria","",2.59,1,"-","Boleto Amigo","c",""],["d","2026-05",18,"Sem categoria","",2.59,1,"-","Boleto Amigo","k",""],["d","2026-05",15,"SIMPLES","",285.01,1,"SIMPLES - RECEITA FEDERAL","Boleto Amigo","c",""],["d","2026-05",16,"SIMPLES","",285.01,1,"SIMPLES - RECEITA FEDERAL","Boleto Amigo","k",""],["d","2026-05",15,"Sem categoria","",5.18,1,"-","Boleto Amigo","c",""],["d","2026-05",15,"Sem categoria","",5.18,1,"-","Boleto Amigo","k",""],["d","2026-05",15,"CONFRATENIZAÇÃO","",70,1,"HUGO LEONARDO MOURA","Boleto Amigo","c",""],["d","2026-05",4,"CONFRATENIZAÇÃO","",70,1,"HUGO LEONARDO MOURA","Boleto Amigo","k",""],["d","2026-05",14,"INSS","",824.33,1,"MINISTERIO DA PREVIDENCIA (INSS)","Boleto Amigo","c",""],["d","2026-05",18,"INSS","",824.33,1,"MINISTERIO DA PREVIDENCIA (INSS)","Boleto Amigo","k",""],["d","2026-05",14,"FGTS","",690.31,1,"CAIXA ECONOMICA FEDERAL","Boleto Amigo","c",""],["d","2026-05",18,"FGTS","",690.31,1,"CAIXA ECONOMICA FEDERAL","Boleto Amigo","k",""],["d","2026-05",14,"Sem categoria","",2.59,1,"-","Boleto Amigo","c",""],["d","2026-05",14,"Sem categoria","",2.59,1,"-","Boleto Amigo","k",""],["d","2026-05",13,"Sem categoria","",31.08,1,"-","Boleto Amigo","c",""],["d","2026-05",13,"Sem categoria","",31.08,1,"-","Boleto Amigo","k",""],["d","2026-05",12,"Sem categoria","",5.18,1,"-","Boleto Amigo","c",""],["d","2026-05",12,"Sem categoria","",5.18,1,"-","Boleto Amigo","k",""],["d","2026-05",11,"Sem categoria","",12.95,1,"-","Boleto Amigo","c",""],["d","2026-05",11,"Sem categoria","",12.95,1,"-","Boleto Amigo","k",""],["d","2026-05",11,"FUNDO DE CAIXA ECONOMY (CONTA SIMPLES)","",2029.27,1,"DOCK IP S.A FUNDO DE CAIXA E INVESTIMENTOS","Boleto Amigo","c",""],["d","2026-05",1,"FUNDO DE CAIXA ECONOMY (CONTA SIMPLES)","",2029.27,1,"DOCK IP S.A FUNDO DE CAIXA E INVESTIMENTOS","Boleto Amigo","k",""],["d","2026-05",11,"ALUGUEL DE IMPRESSORA","",384.79,1,"QUALITY TOTAL LOCAÇÃO DE EQUIPAMENTOS DE INFORMATICA","Boleto Amigo","c",""],["d","2026-05",11,"ALUGUEL DE IMPRESSORA","",384.79,1,"QUALITY TOTAL LOCAÇÃO DE EQUIPAMENTOS DE INFORMATICA","Boleto Amigo","k",""],["d","2026-05",8,"OUTRAS DESPESAS","",180.8,1,"BRXNQ- TELECOMUNICAÇÕES- LTDA","Boleto Amigo","c",""],["d","2026-05",10,"OUTRAS DESPESAS","",180.8,1,"BRXNQ- TELECOMUNICAÇÕES- LTDA","Boleto Amigo","k",""],["d","2026-05",8,"Sem categoria","",10.36,1,"-","Boleto Amigo","c",""],["d","2026-05",8,"Sem categoria","",10.36,1,"-","Boleto Amigo","k",""],["d","2026-05",7,"RESSARCIMENTO DE DESPESAS DE CUSTOS OPERACIONAIS (TAG/DF)","",2998.93,1,"ECONOMY ASSESSORIA - TAGUATINGA","Boleto Amigo","c",""],["d","2026-05",2,"RESSARCIMENTO DE DESPESAS DE CUSTOS OPERACIONAIS (TAG/DF)","",2998.93,1,"ECONOMY ASSESSORIA - TAGUATINGA","Boleto Amigo","k",""],["d","2026-05",7,"Sem categoria","",12.95,1,"-","Boleto Amigo","c",""],["d","2026-05",7,"Sem categoria","",12.95,1,"-","Boleto Amigo","k",""],["d","2026-05",6,"Sem categoria","",15.54,1,"-","Boleto Amigo","c",""],["d","2026-05",6,"Sem categoria","",15.54,1,"-","Boleto Amigo","k",""],["d","2026-04",28,"EMPRESA PRESTADORA DE SERVIÇOS","",1792.79,1,"LASERSING SINALIZAÇÃO E PROJETOS","Boleto Amigo","c",""],["d","2026-05",6,"EMPRESA PRESTADORA DE SERVIÇOS","",1792.79,1,"LASERSING SINALIZAÇÃO E PROJETOS","Boleto Amigo","k",""],["d","2026-05",6,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"GABRIELA BARBOSA FERNANDES","Boleto Amigo","c",""],["d","2026-05",6,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"GABRIELA BARBOSA FERNANDES","Boleto Amigo","k",""],["d","2026-05",6,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"ALINE VIEIRA GARCIA","Boleto Amigo","c",""],["d","2026-05",6,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"ALINE VIEIRA GARCIA","Boleto Amigo","k",""],["d","2026-05",5,"Sem categoria","",10.36,1,"-","Boleto Amigo","c",""],["d","2026-05",5,"Sem categoria","",10.36,1,"-","Boleto Amigo","k",""],["d","2026-05",5,"CONDOMÍNIO","",1188.25,1,"CONDOMINIO DO EDIFICIO SUPER CENTER VENANCIO 2000","Boleto Amigo","c",""],["d","2026-05",5,"CONDOMÍNIO","",1188.25,1,"CONDOMINIO DO EDIFICIO SUPER CENTER VENANCIO 2000","Boleto Amigo","k",""],["d","2026-05",5,"ALUGUEL","",2312.59,1,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","c",""],["d","2026-05",5,"ALUGUEL","",2312.59,1,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","k",""],["d","2026-05",5,"LIMPEZA E HIGIENIZAÇÃO ESCRITÓRIO","",600,1,"ISMAILDE E SOUZA","Boleto Amigo","c",""],["d","2026-05",4,"LIMPEZA E HIGIENIZAÇÃO ESCRITÓRIO","",600,1,"ISMAILDE E SOUZA","Boleto Amigo","k",""],["d","2026-05",5,"ALUGUEL","",470.98,1,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","c",""],["d","2026-05",5,"ALUGUEL","",470.98,1,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","k",""],["d","2026-05",4,"ANÚNCIOS DE TELEVISÃO","",500,1,"EMMANUEL WESLEY RAMOS DA SOUSA","Boleto Amigo","c",""],["d","2026-05",4,"ANÚNCIOS DE TELEVISÃO","",500,1,"EMMANUEL WESLEY RAMOS DA SOUSA","Boleto Amigo","k",""],["d","2026-05",4,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",3201.08,1,"MARIA EDUARDA ANACLETO","Boleto Amigo","c",""],["d","2026-05",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",3201.08,1,"MARIA EDUARDA ANACLETO","Boleto Amigo","k",""],["d","2026-05",4,"Sem categoria","",5.18,1,"-","Boleto Amigo","c",""],["d","2026-05",4,"Sem categoria","",5.18,1,"-","Boleto Amigo","k",""],["d","2026-05",4,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",3294.8,1,"HUGO LEONARDO MOURA","Boleto Amigo","c",""],["d","2026-05",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",3294.8,1,"HUGO LEONARDO MOURA","Boleto Amigo","k",""],["d","2026-05",4,"META (FACEBOOK E INSTAGRAM)","",6000,1,"FACEBOOK CNPJ: 13.347.016/0001-17","Boleto Amigo","c",""],["d","2026-05",4,"META (FACEBOOK E INSTAGRAM)","",6000,1,"FACEBOOK CNPJ: 13.347.016/0001-17","Boleto Amigo","k",""],["d","2026-04",30,"SISTEMAS","",49,1,"DOCK INSTITUIÇÃO DE PAGAMENTO S.A","Boleto Amigo","c",""],["d","2026-04",28,"SISTEMAS","",49,1,"DOCK INSTITUIÇÃO DE PAGAMENTO S.A","Boleto Amigo","k",""],["d","2026-04",30,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","c",""],["d","2026-04",30,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","k",""],["d","2026-04",29,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","c",""],["d","2026-04",29,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","k",""],["d","2026-04",29,"PAGAMENTO DE FÉRIAS","",5430.69,1,"MARIA EDUARDA ANACLETO","Boleto Amigo","c",""],["d","2026-04",28,"PAGAMENTO DE FÉRIAS","",5430.69,1,"MARIA EDUARDA ANACLETO","Boleto Amigo","k",""],["d","2026-04",28,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","c",""],["d","2026-04",28,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","k",""],["d","2026-04",27,"PAGAMENTO DE VALE TRANSPORTE","",264,1,"SEMOB SECRETARIA DE ESTADO DE TRANSPORTE E MODILIDADE DO DF","Boleto Amigo","c",""],["d","2026-04",27,"PAGAMENTO DE VALE TRANSPORTE","",264,1,"SEMOB SECRETARIA DE ESTADO DE TRANSPORTE E MODILIDADE DO DF","Boleto Amigo","k",""],["d","2026-04",27,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG","Boleto Amigo","c",""],["d","2026-04",27,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG","Boleto Amigo","k",""],["d","2026-04",27,"PAGAMENTO DE VALE ALIMENTAÇÃO","",965,1,"PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL","Boleto Amigo","c",""],["d","2026-04",28,"PAGAMENTO DE VALE ALIMENTAÇÃO","",965,1,"PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL","Boleto Amigo","k",""],["d","2026-04",24,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG","Boleto Amigo","c",""],["d","2026-04",24,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG","Boleto Amigo","k",""],["d","2026-04",23,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG","Boleto Amigo","c",""],["d","2026-04",23,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG","Boleto Amigo","k",""],["d","2026-04",22,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","c",""],["d","2026-04",22,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","k",""],["d","2026-04",22,"DESPESA DE AQUISIÇÃO DE EQUIP OU MANUTENÇÃO","",209.9,1,"MERCADO PAGO","Boleto Amigo","c",""],["d","2026-04",22,"DESPESA DE AQUISIÇÃO DE EQUIP OU MANUTENÇÃO","",209.9,1,"MERCADO PAGO","Boleto Amigo","k",""],["d","2026-04",22,"MATERIAL DE CONSUMO","",100.71,1,"COMERCIAL ALVORADA PROD. LIMP DESC LTDA","Boleto Amigo","c",""],["d","2026-04",21,"MATERIAL DE CONSUMO","",100.71,1,"COMERCIAL ALVORADA PROD. LIMP DESC LTDA","Boleto Amigo","k",""],["d","2026-04",20,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","c",""],["d","2026-04",20,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","k",""],["d","2026-04",20,"SISTEMAS","",26.66,1,"ALGAR TELECOM S/A","Boleto Amigo","c",""],["d","2026-04",20,"SISTEMAS","",26.66,1,"ALGAR TELECOM S/A","Boleto Amigo","k",""],["d","2026-04",20,"SISTEMAS","",482.56,1,"ALGAR TELECOM S/A","Boleto Amigo","c",""],["d","2026-04",20,"SISTEMAS","",482.56,1,"ALGAR TELECOM S/A","Boleto Amigo","k",""],["d","2026-04",20,"TARIFAS BANCÁRIAS","",50,1,"SICOOB","Boleto Amigo","c",""],["d","2026-04",20,"TARIFAS BANCÁRIAS","",50,1,"SICOOB","Boleto Amigo","k",""],["d","2026-04",17,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","c",""],["d","2026-04",17,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","k",""],["d","2026-04",16,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","c",""],["d","2026-04",16,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","k",""],["d","2026-04",15,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","c",""],["d","2026-04",15,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","k",""],["d","2026-04",14,"MATERIAL DE CONSUMO","",100.72,1,"COMERCIAL ALVORADA PROD. LIMP DESC LTDA","Boleto Amigo","c",""],["d","2026-04",14,"MATERIAL DE CONSUMO","",100.72,1,"COMERCIAL ALVORADA PROD. LIMP DESC LTDA","Boleto Amigo","k",""],["d","2026-04",14,"OUTRAS DESPESAS","",70,1,"MARIA EDUARDA ANACLETO","Boleto Amigo","c",""],["d","2026-03",27,"OUTRAS DESPESAS","",70,1,"MARIA EDUARDA ANACLETO","Boleto Amigo","k",""],["d","2026-04",29,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"FRANCISCO NADSON MENDES PEREIRA","Boleto Amigo","c",""],["d","2026-04",14,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"FRANCISCO NADSON MENDES PEREIRA","Boleto Amigo","k",""],["d","2026-04",14,"TARIFAS BANCÁRIAS","",31.08,1,"SISPAG","Boleto Amigo","c",""],["d","2026-04",14,"TARIFAS BANCÁRIAS","",31.08,1,"SISPAG","Boleto Amigo","k",""],["d","2026-04",13,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","c",""],["d","2026-04",13,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","k",""],["d","2026-04",13,"OUTRAS DESPESAS","",20,1,"HUGO LEONARDO MOURA","Boleto Amigo","c",""],["d","2026-04",11,"OUTRAS DESPESAS","",20,1,"HUGO LEONARDO MOURA","Boleto Amigo","k",""],["d","2026-04",10,"EMPRESA PRESTADORA DE SERVIÇOS","",287.11,1,"GODADDY","Boleto Amigo","c",""],["d","2025-09",1,"EMPRESA PRESTADORA DE SERVIÇOS","",287.11,1,"GODADDY","Boleto Amigo","k",""],["d","2026-04",10,"ENERGIA","",3.46,1,"NEOENERGIA","Boleto Amigo","c",""],["d","2026-04",9,"ENERGIA","",3.46,1,"NEOENERGIA","Boleto Amigo","k",""],["d","2026-04",10,"ANÚNCIOS DE TELEVISÃO","",500,1,"EMMANUEL WESLEY RAMOS DA SOUSA","Boleto Amigo","c",""],["d","2026-04",10,"ANÚNCIOS DE TELEVISÃO","",500,1,"EMMANUEL WESLEY RAMOS DA SOUSA","Boleto Amigo","k",""],["d","2026-04",10,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","c",""],["d","2026-04",10,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","k",""],["d","2026-04",10,"META (FACEBOOK E INSTAGRAM)","",5000,1,"FACEBOOK CNPJ: 13.347.016/0001-17","Boleto Amigo","c",""],["d","2026-04",4,"META (FACEBOOK E INSTAGRAM)","",5000,1,"FACEBOOK CNPJ: 13.347.016/0001-17","Boleto Amigo","k",""],["d","2026-04",10,"OUTRAS DESPESAS","",180.8,1,"BRXNQ- TELECOMUNICAÇÕES- LTDA","Boleto Amigo","c",""],["d","2026-04",10,"OUTRAS DESPESAS","",180.8,1,"BRXNQ- TELECOMUNICAÇÕES- LTDA","Boleto Amigo","k",""],["d","2026-04",10,"ENERGIA","",3.6,1,"NEOENERGIA","Boleto Amigo","c",""],["d","2026-04",10,"ENERGIA","",3.6,1,"NEOENERGIA","Boleto Amigo","k",""],["d","2026-04",10,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",1500,1,"HUGO LEONARDO MOURA","Boleto Amigo","c",""],["d","2026-04",9,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",1500,1,"HUGO LEONARDO MOURA","Boleto Amigo","k",""],["d","2026-04",10,"ENERGIA","",3.6,1,"NEOENERGIA","Boleto Amigo","c",""],["d","2026-04",10,"ENERGIA","",3.6,1,"NEOENERGIA","Boleto Amigo","k",""],["d","2026-04",10,"ENERGIA","",3.46,1,"NEOENERGIA","Boleto Amigo","c",""],["d","2026-04",10,"ENERGIA","",3.46,1,"NEOENERGIA","Boleto Amigo","k",""],["d","2026-04",10,"ENERGIA","",3.63,1,"NEOENERGIA","Boleto Amigo","c",""],["d","2026-04",10,"ENERGIA","",3.63,1,"NEOENERGIA","Boleto Amigo","k",""],["d","2026-04",10,"ENERGIA","",7.36,1,"NEOENERGIA","Boleto Amigo","c",""],["d","2026-04",10,"ENERGIA","",7.36,1,"NEOENERGIA","Boleto Amigo","k",""],["d","2026-04",10,"ENERGIA","",3.46,1,"NEOENERGIA","Boleto Amigo","c",""],["d","2026-04",10,"ENERGIA","",3.46,1,"NEOENERGIA","Boleto Amigo","k",""],["d","2026-04",9,"SIMPLES","",540,1,"SIMPLES - RECEITA FEDERAL","Boleto Amigo","c",""],["d","2026-04",16,"SIMPLES","",540,1,"SIMPLES - RECEITA FEDERAL","Boleto Amigo","k",""],["d","2026-04",9,"MATERIAL DE ESCRITÓRIO","",269,1,"HUGO LEONARDO MOURA","Boleto Amigo","c",""],["d","2026-04",9,"MATERIAL DE ESCRITÓRIO","",269,1,"HUGO LEONARDO MOURA","Boleto Amigo","k",""],["d","2026-04",9,"ALUGUEL DE IMPRESSORA","",384.79,1,"QUALITY TOTAL LOCAÇÃO DE EQUIPAMENTOS DE INFORMATICA","Boleto Amigo","c",""],["d","2026-04",9,"ALUGUEL DE IMPRESSORA","",384.79,1,"QUALITY TOTAL LOCAÇÃO DE EQUIPAMENTOS DE INFORMATICA","Boleto Amigo","k",""],["d","2026-04",9,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG","Boleto Amigo","c",""],["d","2026-04",9,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG","Boleto Amigo","k",""],["d","2026-04",8,"FGTS","",378.3,1,"CAIXA ECONOMICA FEDERAL","Boleto Amigo","c",""],["d","2026-04",18,"FGTS","",378.3,1,"CAIXA ECONOMICA FEDERAL","Boleto Amigo","k",""],["d","2026-04",8,"INSS","",377.07,1,"MINISTERIO DA PREVIDENCIA (INSS)","Boleto Amigo","c",""],["d","2026-04",18,"INSS","",377.07,1,"MINISTERIO DA PREVIDENCIA (INSS)","Boleto Amigo","k",""],["d","2026-04",8,"TARIFAS BANCÁRIAS","",20.72,1,"SISPAG","Boleto Amigo","c",""],["d","2026-04",8,"TARIFAS BANCÁRIAS","",20.72,1,"SISPAG","Boleto Amigo","k",""],["d","2026-04",7,"FUNDO DE CAIXA ECONOMY (CONTA SIMPLES)","",10955.52,1,"DOCK IP S.A FUNDO DE CAIXA E INVESTIMENTOS","Boleto Amigo","c",""],["d","2026-04",1,"FUNDO DE CAIXA ECONOMY (CONTA SIMPLES)","",10955.52,1,"DOCK IP S.A FUNDO DE CAIXA E INVESTIMENTOS","Boleto Amigo","k",""],["d","2026-04",7,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","c",""],["d","2026-04",7,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","k",""],["d","2026-04",6,"LIMPEZA E HIGIENIZAÇÃO ESCRITÓRIO","",750,1,"ISMAILDE E SOUZA","Boleto Amigo","c",""],["d","2026-04",4,"LIMPEZA E HIGIENIZAÇÃO ESCRITÓRIO","",750,1,"ISMAILDE E SOUZA","Boleto Amigo","k",""],["d","2026-04",6,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG","Boleto Amigo","c",""],["d","2026-04",6,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG","Boleto Amigo","k",""],["d","2026-04",6,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"JOSE DAS NEVES PINHEIRO","Boleto Amigo","c",""],["d","2026-04",6,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"JOSE DAS NEVES PINHEIRO","Boleto Amigo","k",""],["d","2026-04",2,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",2507.01,1,"MARIA EDUARDA ANACLETO","Boleto Amigo","c",""],["d","2026-04",2,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",2507.01,1,"MARIA EDUARDA ANACLETO","Boleto Amigo","k",""],["d","2026-04",2,"ALUGUEL","",2312.59,1,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","c",""],["d","2026-04",5,"ALUGUEL","",2312.59,1,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","k",""],["d","2026-04",2,"RESSARCIMENTO DE DESPESAS DE CUSTOS OPERACIONAIS (TAG/DF)","",4234.19,1,"ECONOMY ASSESSORIA - TAGUATINGA","Boleto Amigo","c",""],["d","2026-04",2,"RESSARCIMENTO DE DESPESAS DE CUSTOS OPERACIONAIS (TAG/DF)","",4234.19,1,"ECONOMY ASSESSORIA - TAGUATINGA","Boleto Amigo","k",""],["d","2026-04",2,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",2147.95,1,"HUGO LEONARDO MOURA","Boleto Amigo","c",""],["d","2026-04",2,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",2147.95,1,"HUGO LEONARDO MOURA","Boleto Amigo","k",""],["d","2026-04",2,"EMPRESA PRESTADORA DE SERVIÇOS","",242.08,1,"MARTE DECORA","Boleto Amigo","c",""],["d","2026-04",2,"EMPRESA PRESTADORA DE SERVIÇOS","",242.08,1,"MARTE DECORA","Boleto Amigo","k",""],["d","2026-04",2,"CONDOMÍNIO","",1138.2,1,"CONDOMINIO DO EDIFICIO SUPER CENTER VENANCIO 2000","Boleto Amigo","c",""],["d","2026-04",5,"CONDOMÍNIO","",1138.2,1,"CONDOMINIO DO EDIFICIO SUPER CENTER VENANCIO 2000","Boleto Amigo","k",""],["d","2026-04",2,"CONFRATENIZAÇÃO","",40,1,"ECONOMY ASSESSORIA - MATRIZ","Boleto Amigo","c",""],["d","2026-04",2,"CONFRATENIZAÇÃO","",40,1,"ECONOMY ASSESSORIA - MATRIZ","Boleto Amigo","k",""],["d","2026-04",1,"TARIFAS BANCÁRIAS","",18.13,1,"SISPAG","Boleto Amigo","c",""],["d","2026-04",1,"TARIFAS BANCÁRIAS","",18.13,1,"SISPAG","Boleto Amigo","k",""],["d","2026-04",1,"UNIFORMES","",550,1,"D SOL CAMISETERIA","Boleto Amigo","c",""],["d","2026-03",27,"UNIFORMES","",550,1,"D SOL CAMISETERIA","Boleto Amigo","k",""],["d","2026-04",1,"RESCISÃO CONTRATUAL COM DEVOLUÇÃO DE VALORES","",1250,1,"SIMONE OLIVEIRA SILVA","Boleto Amigo","c",""],["d","2026-03",30,"RESCISÃO CONTRATUAL COM DEVOLUÇÃO DE VALORES","",1250,1,"SIMONE OLIVEIRA SILVA","Boleto Amigo","k",""],["d","2026-04",1,"SISTEMAS","",49,1,"DOCK INSTITUIÇÃO DE PAGAMENTO S.A","Boleto Amigo","c",""],["d","2026-03",28,"SISTEMAS","",49,1,"DOCK INSTITUIÇÃO DE PAGAMENTO S.A","Boleto Amigo","k",""],["d","2026-03",31,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","c",""],["d","2026-03",31,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","k",""],["d","2026-03",30,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","c",""],["d","2026-03",30,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","k",""],["d","2026-03",27,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG","Boleto Amigo","c",""],["d","2026-03",27,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG","Boleto Amigo","k",""],["d","2026-03",27,"CONFRATENIZAÇÃO","",1749.4,1,"ASSB COMERCIO VAREJISTA DE DOCES LTDA","Boleto Amigo","c","PASCOA 2026"],["d","2026-03",27,"CONFRATENIZAÇÃO","",1749.4,1,"ASSB COMERCIO VAREJISTA DE DOCES LTDA","Boleto Amigo","k","PASCOA 2026"],["d","2026-03",26,"DESPESA DE AQUISIÇÃO DE EQUIP OU MANUTENÇÃO","",99.99,1,"AMAZON SERVIÇOS DE VAREJO BRASIL LTDA","Boleto Amigo","c",""],["d","2026-03",26,"DESPESA DE AQUISIÇÃO DE EQUIP OU MANUTENÇÃO","",99.99,1,"AMAZON SERVIÇOS DE VAREJO BRASIL LTDA","Boleto Amigo","k",""],["d","2026-03",26,"TARIFAS BANCÁRIAS","",15.54,1,"SISPAG","Boleto Amigo","c",""],["d","2026-03",26,"TARIFAS BANCÁRIAS","",15.54,1,"SISPAG","Boleto Amigo","k",""],["d","2026-03",26,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"RICHARD RAFAEL RIBEIRO BRITO","Boleto Amigo","c",""],["d","2026-03",26,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"RICHARD RAFAEL RIBEIRO BRITO","Boleto Amigo","k",""],["d","2026-03",26,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"FRANCISCO BRAZ COSTA SERRÃO","Boleto Amigo","c",""],["d","2026-03",26,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"FRANCISCO BRAZ COSTA SERRÃO","Boleto Amigo","k",""],["d","2026-03",26,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"MARIA DO SOCORRO ALVES DA SILVA","Boleto Amigo","c",""],["d","2026-03",26,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"MARIA DO SOCORRO ALVES DA SILVA","Boleto Amigo","k",""],["d","2026-03",25,"TARIFAS BANCÁRIAS","",15.54,1,"SISPAG","Boleto Amigo","c",""],["d","2026-03",25,"TARIFAS BANCÁRIAS","",15.54,1,"SISPAG","Boleto Amigo","k",""],["d","2026-03",24,"PAGAMENTO DE VALE TRANSPORTE","",231,1,"SEMOB SECRETARIA DE ESTADO DE TRANSPORTE E MODILIDADE DO DF","Boleto Amigo","c",""],["d","2026-03",27,"PAGAMENTO DE VALE TRANSPORTE","",231,1,"SEMOB SECRETARIA DE ESTADO DE TRANSPORTE E MODILIDADE DO DF","Boleto Amigo","k",""],["d","2026-03",24,"PAGAMENTO DE VALE ALIMENTAÇÃO","",700,1,"PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL","Boleto Amigo","c",""],["d","2026-03",28,"PAGAMENTO DE VALE ALIMENTAÇÃO","",700,1,"PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL","Boleto Amigo","k",""],["d","2026-03",24,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","c",""],["d","2026-03",24,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","k",""],["d","2026-03",23,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"WANESSA DA SILVA CHAVES","Boleto Amigo","c",""],["d","2026-03",23,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"WANESSA DA SILVA CHAVES","Boleto Amigo","k",""],["d","2026-03",23,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","c",""],["d","2026-03",23,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","k",""],["d","2026-03",20,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","c",""],["d","2026-03",20,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","k",""],["d","2026-03",20,"TARIFAS BANCÁRIAS","",50,1,"SICOOB","Boleto Amigo","c",""],["d","2026-03",20,"TARIFAS BANCÁRIAS","",50,1,"SICOOB","Boleto Amigo","k",""],["d","2026-03",20,"SISTEMAS","",469.35,1,"ALGAR TELECOM S/A","Boleto Amigo","c",""],["d","2026-03",20,"SISTEMAS","",469.35,1,"ALGAR TELECOM S/A","Boleto Amigo","k",""],["d","2026-03",20,"SISTEMAS","",800,1,"ALGAR TELECOM S/A","Boleto Amigo","c",""],["d","2026-03",20,"SISTEMAS","",800,1,"ALGAR TELECOM S/A","Boleto Amigo","k",""],["d","2026-03",18,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","c",""],["d","2026-03",18,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","k",""],["d","2026-03",18,"RESCISÃO CONTRATUAL COM DEVOLUÇÃO DE VALORES","",300,1,"JORGE LUIZ FREITAS DA SILVA","Boleto Amigo","c",""],["d","2026-03",18,"RESCISÃO CONTRATUAL COM DEVOLUÇÃO DE VALORES","",300,1,"JORGE LUIZ FREITAS DA SILVA","Boleto Amigo","k",""],["d","2026-03",18,"EMPRESTIMOS A PAGAR","",2000,1,"ECONOMY - CONTA SIMPLES","Boleto Amigo","c",""],["d","2026-03",18,"EMPRESTIMOS A PAGAR","",2000,1,"ECONOMY - CONTA SIMPLES","Boleto Amigo","k",""],["d","2026-03",17,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG","Boleto Amigo","c",""],["d","2026-03",17,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG","Boleto Amigo","k",""],["d","2026-03",17,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"JOAO BATISTA RIBEIRO CARDOSO","Boleto Amigo","c",""],["d","2026-03",17,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"JOAO BATISTA RIBEIRO CARDOSO","Boleto Amigo","k",""],["d","2026-03",16,"ANÚNCIOS DE TELEVISÃO","",4000,1,"RÁDIO E TELEVISÃO CV LTDA","Boleto Amigo","c",""],["d","2026-03",18,"ANÚNCIOS DE TELEVISÃO","",4000,1,"RÁDIO E TELEVISÃO CV LTDA","Boleto Amigo","k",""],["d","2026-03",16,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","c",""],["d","2026-03",16,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","k",""],["d","2026-03",16,"INSS","",265.97,1,"MINISTERIO DA PREVIDENCIA (INSS)","Boleto Amigo","c",""],["d","2026-03",18,"INSS","",265.97,1,"MINISTERIO DA PREVIDENCIA (INSS)","Boleto Amigo","k",""],["d","2026-03",16,"FGTS","",251.58,1,"CAIXA ECONOMICA FEDERAL","Boleto Amigo","c",""],["d","2026-03",18,"FGTS","",251.58,1,"CAIXA ECONOMICA FEDERAL","Boleto Amigo","k",""],["d","2026-03",16,"RESCISÃO CONTRATUAL COM DEVOLUÇÃO DE VALORES","",1273.69,1,"KAIQUE PINHEIRO LEITE","Boleto Amigo","c",""],["d","2026-03",16,"RESCISÃO CONTRATUAL COM DEVOLUÇÃO DE VALORES","",1273.69,1,"KAIQUE PINHEIRO LEITE","Boleto Amigo","k",""],["d","2026-03",16,"SIMPLES","",150,1,"SIMPLES - RECEITA FEDERAL","Boleto Amigo","c",""],["d","2026-03",16,"SIMPLES","",150,1,"SIMPLES - RECEITA FEDERAL","Boleto Amigo","k",""],["d","2026-03",13,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","c",""],["d","2026-03",13,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","k",""],["d","2026-03",12,"OUTRAS DESPESAS","",2249.26,1,"DECOLAR.COM","Boleto Amigo","c",""],["d","2026-03",12,"OUTRAS DESPESAS","",2249.26,1,"DECOLAR.COM","Boleto Amigo","k",""],["d","2026-03",12,"TARIFAS BANCÁRIAS","",25.9,1,"SISPAG","Boleto Amigo","c",""],["d","2026-03",12,"TARIFAS BANCÁRIAS","",25.9,1,"SISPAG","Boleto Amigo","k",""],["d","2026-03",12,"PAGAMENTO DE VALE ALIMENTAÇÃO","",420,1,"HUGO LEONARDO MOURA","Boleto Amigo","c",""],["d","2026-03",12,"PAGAMENTO DE VALE ALIMENTAÇÃO","",420,1,"HUGO LEONARDO MOURA","Boleto Amigo","k",""],["d","2026-03",12,"PAGAMENTO DE VALE TRANSPORTE","",137.66,1,"HUGO LEONARDO MOURA","Boleto Amigo","c",""],["d","2026-03",12,"PAGAMENTO DE VALE TRANSPORTE","",137.66,1,"HUGO LEONARDO MOURA","Boleto Amigo","k",""],["d","2026-03",11,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG","Boleto Amigo","c",""],["d","2026-03",11,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG","Boleto Amigo","k",""],["d","2026-03",10,"OUTRAS DESPESAS","",180.8,1,"BRXNQ- TELECOMUNICAÇÕES- LTDA","Boleto Amigo","c",""],["d","2026-03",10,"OUTRAS DESPESAS","",180.8,1,"BRXNQ- TELECOMUNICAÇÕES- LTDA","Boleto Amigo","k",""],["d","2026-03",9,"TAXA DE EXAME ADMISSIONAL/ DEMISSIONAL","",25,1,"ENGEMEDICAL - ENGENHARIA CONSULTORIA LTDA","Boleto Amigo","c",""],["d","2026-03",9,"TAXA DE EXAME ADMISSIONAL/ DEMISSIONAL","",25,1,"ENGEMEDICAL - ENGENHARIA CONSULTORIA LTDA","Boleto Amigo","k",""],["d","2026-03",9,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG","Boleto Amigo","c",""],["d","2026-03",9,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG","Boleto Amigo","k",""],["d","2026-03",9,"ALUGUEL DE IMPRESSORA","",384.79,1,"QUALITY TOTAL LOCAÇÃO DE EQUIPAMENTOS DE INFORMATICA","Boleto Amigo","c",""],["d","2026-03",9,"ALUGUEL DE IMPRESSORA","",384.79,1,"QUALITY TOTAL LOCAÇÃO DE EQUIPAMENTOS DE INFORMATICA","Boleto Amigo","k",""],["d","2026-03",9,"FUNDO DE CAIXA ECONOMY (CONTA SIMPLES)","",9222.3,1,"DOCK IP S.A FUNDO DE CAIXA E INVESTIMENTOS","Boleto Amigo","c",""],["d","2026-03",1,"FUNDO DE CAIXA ECONOMY (CONTA SIMPLES)","",9222.3,1,"DOCK IP S.A FUNDO DE CAIXA E INVESTIMENTOS","Boleto Amigo","k",""],["d","2026-03",6,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG","Boleto Amigo","c",""],["d","2026-03",6,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG","Boleto Amigo","k",""],["d","2026-03",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",2724.57,1,"MARIA EDUARDA ANACLETO","Boleto Amigo","c",""],["d","2026-03",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",2724.57,1,"MARIA EDUARDA ANACLETO","Boleto Amigo","k",""],["d","2026-03",6,"RESCISÃO DE FUNCIONÁRIOS","",1089.91,1,"LANA THAYNI SILVA MENEZES","Boleto Amigo","c",""],["d","2026-03",6,"RESCISÃO DE FUNCIONÁRIOS","",1089.91,1,"LANA THAYNI SILVA MENEZES","Boleto Amigo","k",""],["d","2026-03",5,"CONDOMÍNIO","",1333.54,1,"CONDOMINIO DO EDIFICIO SUPER CENTER VENANCIO 2000","Boleto Amigo","c",""],["d","2026-03",5,"CONDOMÍNIO","",1333.54,1,"CONDOMINIO DO EDIFICIO SUPER CENTER VENANCIO 2000","Boleto Amigo","k",""],["d","2026-03",5,"ALUGUEL","",2312.59,1,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","c",""],["d","2026-03",5,"ALUGUEL","",2312.59,1,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","k",""],["d","2026-03",5,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","c",""],["d","2026-03",5,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","k",""],["d","2026-03",4,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","c",""],["d","2026-03",4,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","k",""],["d","2026-03",4,"LIMPEZA E HIGIENIZAÇÃO ESCRITÓRIO","",600,1,"ISMAILDE E SOUZA","Boleto Amigo","c",""],["d","2026-03",4,"LIMPEZA E HIGIENIZAÇÃO ESCRITÓRIO","",600,1,"ISMAILDE E SOUZA","Boleto Amigo","k",""],["d","2026-03",4,"EMPRESA PRESTADORA DE SERVIÇOS","",23.72,1,"JANE JOSELI SANTOS DE MELO","Boleto Amigo","c",""],["d","2026-03",4,"EMPRESA PRESTADORA DE SERVIÇOS","",23.72,1,"JANE JOSELI SANTOS DE MELO","Boleto Amigo","k",""],["d","2026-03",4,"EMPRESA PRESTADORA DE SERVIÇOS","",500,1,"ELENITA GADELHA DE SOUSA","Boleto Amigo","c",""],["d","2026-03",4,"EMPRESA PRESTADORA DE SERVIÇOS","",500,1,"ELENITA GADELHA DE SOUSA","Boleto Amigo","k",""],["d","2026-03",4,"META (FACEBOOK E INSTAGRAM)","",3000,1,"FACEBOOK CNPJ: 13.347.016/0001-17","Boleto Amigo","c",""],["d","2026-03",4,"META (FACEBOOK E INSTAGRAM)","",3000,1,"FACEBOOK CNPJ: 13.347.016/0001-17","Boleto Amigo","k",""],["d","2026-03",4,"ANÚNCIOS DE TELEVISÃO","",500,1,"EMMANUEL WESLEY RAMOS DA SOUSA","Boleto Amigo","c",""],["d","2026-03",4,"ANÚNCIOS DE TELEVISÃO","",500,1,"EMMANUEL WESLEY RAMOS DA SOUSA","Boleto Amigo","k",""],["d","2026-03",4,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"CARLOS ALBERTO SOUSA VALDES","Boleto Amigo","c",""],["d","2026-03",4,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"CARLOS ALBERTO SOUSA VALDES","Boleto Amigo","k",""],["d","2026-03",3,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG","Boleto Amigo","c",""],["d","2026-03",3,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG","Boleto Amigo","k",""],["d","2026-03",3,"RESSARCIMENTO DE DESPESAS DE CUSTOS OPERACIONAIS (TAG/DF)","",1617.85,1,"ECONOMY ASSESSORIA - TAGUATINGA","Boleto Amigo","c",""],["d","2026-03",2,"RESSARCIMENTO DE DESPESAS DE CUSTOS OPERACIONAIS (TAG/DF)","",1617.85,1,"ECONOMY ASSESSORIA - TAGUATINGA","Boleto Amigo","k",""],["d","2026-03",2,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","c",""],["d","2026-03",2,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","k",""],["d","2026-03",2,"EMPRESA PRESTADORA DE SERVIÇOS","",2328.86,1,"PRINTI","Boleto Amigo","c",""],["d","2026-03",2,"EMPRESA PRESTADORA DE SERVIÇOS","",2328.86,1,"PRINTI","Boleto Amigo","k",""],["d","2026-03",2,"SISTEMAS","",49,1,"DOCK INSTITUIÇÃO DE PAGAMENTO S.A","Boleto Amigo","c",""],["d","2026-02",28,"SISTEMAS","",49,1,"DOCK INSTITUIÇÃO DE PAGAMENTO S.A","Boleto Amigo","k",""],["d","2026-02",27,"TARIFAS BANCÁRIAS","",28.49,1,"SISPAG","Boleto Amigo","c",""],["d","2026-02",27,"TARIFAS BANCÁRIAS","",28.49,1,"SISPAG","Boleto Amigo","k",""],["d","2026-02",27,"UNIFORMES","",550,1,"D SOL CAMISETERIA","Boleto Amigo","c",""],["d","2026-02",27,"UNIFORMES","",550,1,"D SOL CAMISETERIA","Boleto Amigo","k",""],["d","2026-02",27,"META (FACEBOOK E INSTAGRAM)","",53.9,1,"DOCK INSTITUIÇÃO DE PAGAMENTO S.A","Boleto Amigo","c",""],["d","2025-12",29,"META (FACEBOOK E INSTAGRAM)","",53.9,1,"DOCK INSTITUIÇÃO DE PAGAMENTO S.A","Boleto Amigo","k",""],["d","2026-02",26,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG","Boleto Amigo","c",""],["d","2026-02",26,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG","Boleto Amigo","k",""],["d","2026-02",26,"PAGAMENTO DE VALE TRANSPORTE","",253,1,"SEMOB SECRETARIA DE ESTADO DE TRANSPORTE E MODILIDADE DO DF","Boleto Amigo","c",""],["d","2026-02",27,"PAGAMENTO DE VALE TRANSPORTE","",253,1,"SEMOB SECRETARIA DE ESTADO DE TRANSPORTE E MODILIDADE DO DF","Boleto Amigo","k",""],["d","2026-02",25,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG","Boleto Amigo","c",""],["d","2026-02",25,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG","Boleto Amigo","k",""],["d","2026-02",25,"PAGAMENTO DE VALE ALIMENTAÇÃO","",770,1,"PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL","Boleto Amigo","c",""],["d","2026-02",28,"PAGAMENTO DE VALE ALIMENTAÇÃO","",770,1,"PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL","Boleto Amigo","k",""],["d","2026-02",24,"ANÚNCIOS DE TELEVISÃO","",11000,1,"TV METROPOLITANA","Boleto Amigo","c",""],["d","2026-02",24,"ANÚNCIOS DE TELEVISÃO","",11000,1,"TV METROPOLITANA","Boleto Amigo","k",""],["d","2026-02",24,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG","Boleto Amigo","c",""],["d","2026-02",24,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG","Boleto Amigo","k",""],["d","2026-02",23,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","c",""],["d","2026-02",23,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","k",""],["d","2026-02",20,"TARIFAS BANCÁRIAS","",15.54,1,"SISPAG","Boleto Amigo","c",""],["d","2026-02",20,"TARIFAS BANCÁRIAS","",15.54,1,"SISPAG","Boleto Amigo","k",""],["d","2026-02",20,"OUTROS IMPOSTOS","",354.04,1,"MINISTERIO DA FAZENDA (IRRF)","Boleto Amigo","c",""],["d","2026-02",16,"OUTROS IMPOSTOS","",354.04,1,"MINISTERIO DA FAZENDA (IRRF)","Boleto Amigo","k",""],["d","2026-02",20,"TARIFAS BANCÁRIAS","",50,1,"SICOOB","Boleto Amigo","c",""],["d","2026-02",20,"TARIFAS BANCÁRIAS","",50,1,"SICOOB","Boleto Amigo","k",""],["d","2026-02",20,"EMPRESA PRESTADORA DE SERVIÇOS","",1510.5,1,"GOCASE","Boleto Amigo","c",""],["d","2026-01",30,"EMPRESA PRESTADORA DE SERVIÇOS","",1510.5,1,"GOCASE","Boleto Amigo","k",""],["d","2026-02",20,"SISTEMAS","",800,1,"ALGAR TELECOM S/A","Boleto Amigo","c",""],["d","2026-02",20,"SISTEMAS","",800,1,"ALGAR TELECOM S/A","Boleto Amigo","k",""],["d","2026-02",20,"SIMPLES","",270,1,"SIMPLES - RECEITA FEDERAL","Boleto Amigo","c",""],["d","2026-02",16,"SIMPLES","",270,1,"SIMPLES - RECEITA FEDERAL","Boleto Amigo","k",""],["d","2026-02",20,"SISTEMAS","",467.76,1,"ALGAR TELECOM S/A","Boleto Amigo","c",""],["d","2026-02",20,"SISTEMAS","",467.76,1,"ALGAR TELECOM S/A","Boleto Amigo","k",""],["d","2026-02",19,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","c",""],["d","2026-02",19,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","k",""],["d","2026-02",19,"FGTS","",236.73,1,"CAIXA ECONOMICA FEDERAL","Boleto Amigo","c",""],["d","2026-02",18,"FGTS","",236.73,1,"CAIXA ECONOMICA FEDERAL","Boleto Amigo","k",""],["d","2026-02",19,"INSS","",243.69,1,"MINISTERIO DA PREVIDENCIA (INSS)","Boleto Amigo","c",""],["d","2026-02",18,"INSS","",243.69,1,"MINISTERIO DA PREVIDENCIA (INSS)","Boleto Amigo","k",""],["d","2026-02",18,"EMPRESTIMOS A PAGAR","",2000,1,"ECONOMY - CONTA SIMPLES","Boleto Amigo","c",""],["d","2026-02",18,"EMPRESTIMOS A PAGAR","",2000,1,"ECONOMY - CONTA SIMPLES","Boleto Amigo","k",""],["d","2026-02",18,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG","Boleto Amigo","c",""],["d","2026-02",18,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG","Boleto Amigo","k",""],["d","2026-02",18,"ANÚNCIOS DE TELEVISÃO","",4000,1,"RÁDIO E TELEVISÃO CV LTDA","Boleto Amigo","c",""],["d","2026-02",18,"ANÚNCIOS DE TELEVISÃO","",4000,1,"RÁDIO E TELEVISÃO CV LTDA","Boleto Amigo","k",""],["d","2026-02",13,"EMPRESA PRESTADORA DE SERVIÇOS","",400,1,"LEANDRO HENRIQUE PEREIRA DE LIRA","Boleto Amigo","c",""],["d","2026-01",13,"EMPRESA PRESTADORA DE SERVIÇOS","",400,1,"LEANDRO HENRIQUE PEREIRA DE LIRA","Boleto Amigo","k",""],["d","2026-02",13,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","c",""],["d","2026-02",13,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","k",""],["d","2026-02",13,"DESPESA DE AQUISIÇÃO DE EQUIP OU MANUTENÇÃO","",58.9,1,"MERCADO LIVRE","Boleto Amigo","c",""],["d","2026-02",13,"DESPESA DE AQUISIÇÃO DE EQUIP OU MANUTENÇÃO","",58.9,1,"MERCADO LIVRE","Boleto Amigo","k",""],["d","2026-02",13,"RESCISÃO CONTRATUAL COM DEVOLUÇÃO DE VALORES","",1083.32,1,"FERNANDO HENRIQUE PEDROZO DE CAMPOS","Boleto Amigo","c",""],["d","2026-02",13,"RESCISÃO CONTRATUAL COM DEVOLUÇÃO DE VALORES","",1083.32,1,"FERNANDO HENRIQUE PEDROZO DE CAMPOS","Boleto Amigo","k",""],["d","2026-02",12,"TARIFAS BANCÁRIAS","",25.9,1,"SISPAG","Boleto Amigo","c",""],["d","2026-02",12,"TARIFAS BANCÁRIAS","",25.9,1,"SISPAG","Boleto Amigo","k",""],["d","2026-02",11,"FUNDO DE CAIXA ECONOMY (CONTA SIMPLES)","",7737.84,1,"DOCK IP S.A FUNDO DE CAIXA E INVESTIMENTOS","Boleto Amigo","c",""],["d","2026-02",1,"FUNDO DE CAIXA ECONOMY (CONTA SIMPLES)","",7737.84,1,"DOCK IP S.A FUNDO DE CAIXA E INVESTIMENTOS","Boleto Amigo","k",""],["d","2026-02",11,"EMPRESA PRESTADORA DE SERVIÇOS","",780,1,"PATRON CONSTRUÇÕES E REFORMAS","Boleto Amigo","c",""],["d","2026-02",11,"EMPRESA PRESTADORA DE SERVIÇOS","",780,1,"PATRON CONSTRUÇÕES E REFORMAS","Boleto Amigo","k",""],["d","2026-02",11,"TARIFAS BANCÁRIAS","",15.54,1,"SISPAG","Boleto Amigo","c",""],["d","2026-02",11,"TARIFAS BANCÁRIAS","",15.54,1,"SISPAG","Boleto Amigo","k",""],["d","2026-02",13,"META (FACEBOOK E INSTAGRAM)","",50,1,"FACEBOOK PROCESSADO POR ADYER","Boleto Amigo","c",""],["d","2026-02",11,"META (FACEBOOK E INSTAGRAM)","",50,1,"FACEBOOK PROCESSADO POR ADYER","Boleto Amigo","k",""],["d","2026-02",11,"MATERIAL DE CONSUMO","",85.98,1,"COMERCIAL ALVORADA PROD. LIMP DESC LTDA","Boleto Amigo","c",""],["d","2026-02",11,"MATERIAL DE CONSUMO","",85.98,1,"COMERCIAL ALVORADA PROD. LIMP DESC LTDA","Boleto Amigo","k",""],["d","2026-02",10,"OUTRAS DESPESAS","",180.8,1,"BRXNQ- TELECOMUNICAÇÕES- LTDA","Boleto Amigo","c",""],["d","2026-02",10,"OUTRAS DESPESAS","",180.8,1,"BRXNQ- TELECOMUNICAÇÕES- LTDA","Boleto Amigo","k",""],["d","2026-02",10,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","c",""],["d","2026-02",10,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","k",""],["d","2026-02",10,"PAGAMENTO DE VALE TRANSPORTE","",165,1,"ECONOMY ALIENAÇÃO","Boleto Amigo","c",""],["d","2026-02",10,"PAGAMENTO DE VALE TRANSPORTE","",165,1,"ECONOMY ALIENAÇÃO","Boleto Amigo","k",""],["d","2026-02",9,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","c",""],["d","2026-02",9,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","k",""],["d","2026-02",9,"UNIFORMES","",150,1,"D SOL CAMISETERIA","Boleto Amigo","c",""],["d","2026-02",9,"UNIFORMES","",150,1,"D SOL CAMISETERIA","Boleto Amigo","k",""],["d","2026-02",9,"ALUGUEL DE IMPRESSORA","",384.79,1,"QUALITY TOTAL LOCAÇÃO DE EQUIPAMENTOS DE INFORMATICA","Boleto Amigo","c",""],["d","2026-02",9,"ALUGUEL DE IMPRESSORA","",384.79,1,"QUALITY TOTAL LOCAÇÃO DE EQUIPAMENTOS DE INFORMATICA","Boleto Amigo","k",""],["d","2026-02",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",2561.23,1,"MARIA EDUARDA ANACLETO","Boleto Amigo","c",""],["d","2026-02",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",2561.23,1,"MARIA EDUARDA ANACLETO","Boleto Amigo","k",""],["d","2026-02",6,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG","Boleto Amigo","c",""],["d","2026-02",6,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG","Boleto Amigo","k",""],["d","2026-02",5,"EMPRESA PRESTADORA DE SERVIÇOS","",1840.13,1,"GODADDY","Boleto Amigo","c",""],["d","2025-09",1,"EMPRESA PRESTADORA DE SERVIÇOS","",1840.13,1,"GODADDY","Boleto Amigo","k",""],["d","2026-02",5,"ANÚNCIOS DE TELEVISÃO","",500,1,"EMMANUEL WESLEY RAMOS DA SOUSA","Boleto Amigo","c",""],["d","2026-02",5,"ANÚNCIOS DE TELEVISÃO","",500,1,"EMMANUEL WESLEY RAMOS DA SOUSA","Boleto Amigo","k",""],["d","2026-02",5,"LIMPEZA E HIGIENIZAÇÃO ESCRITÓRIO","",600,1,"ISMAILDE E SOUZA","Boleto Amigo","c",""],["d","2026-02",4,"LIMPEZA E HIGIENIZAÇÃO ESCRITÓRIO","",600,1,"ISMAILDE E SOUZA","Boleto Amigo","k",""],["d","2026-02",4,"CONDOMÍNIO","",1139.65,1,"CONDOMINIO DO EDIFICIO SUPER CENTER VENANCIO 2000","Boleto Amigo","c",""],["d","2026-02",4,"CONDOMÍNIO","",1139.65,1,"CONDOMINIO DO EDIFICIO SUPER CENTER VENANCIO 2000","Boleto Amigo","k",""],["d","2026-02",4,"ALUGUEL","",2312.59,1,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","c",""],["d","2026-02",5,"ALUGUEL","",2312.59,1,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","k",""],["d","2026-02",4,"MATERIAL DE CONSUMO","",85.99,1,"COMERCIAL ALVORADA PROD. LIMP DESC LTDA","Boleto Amigo","c",""],["d","2026-02",4,"MATERIAL DE CONSUMO","",85.99,1,"COMERCIAL ALVORADA PROD. LIMP DESC LTDA","Boleto Amigo","k",""],["d","2026-02",4,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG","Boleto Amigo","c",""],["d","2026-02",4,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG","Boleto Amigo","k",""],["d","2026-02",3,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","c",""],["d","2026-02",3,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","k",""],["d","2026-02",3,"RESSARCIMENTO DE DESPESAS DE CUSTOS OPERACIONAIS (TAG/DF)","",2887.31,1,"ECONOMY ASSESSORIA - TAGUATINGA","Boleto Amigo","c",""],["d","2026-02",2,"RESSARCIMENTO DE DESPESAS DE CUSTOS OPERACIONAIS (TAG/DF)","",2887.31,1,"ECONOMY ASSESSORIA - TAGUATINGA","Boleto Amigo","k",""],["d","2026-02",2,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","c",""],["d","2026-02",2,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","k",""],["d","2026-01",30,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","c",""],["d","2026-01",30,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","k",""],["d","2026-01",30,"EMPRESTIMOS A PAGAR","",2000,1,"ECONOMY - CONTA SIMPLES","Boleto Amigo","c",""],["d","2026-01",18,"EMPRESTIMOS A PAGAR","",2000,1,"ECONOMY - CONTA SIMPLES","Boleto Amigo","k",""],["d","2026-01",30,"SISTEMAS","",49,1,"DOCK INSTITUIÇÃO DE PAGAMENTO S.A","Boleto Amigo","c",""],["d","2025-11",29,"SISTEMAS","",49,1,"DOCK INSTITUIÇÃO DE PAGAMENTO S.A","Boleto Amigo","k",""],["d","2026-01",29,"RESCISÃO CONTRATUAL COM DEVOLUÇÃO DE VALORES","",1261.75,1,"FRANCISCO GOMES DIAS","Boleto Amigo","c",""],["d","2026-01",29,"RESCISÃO CONTRATUAL COM DEVOLUÇÃO DE VALORES","",1261.75,1,"FRANCISCO GOMES DIAS","Boleto Amigo","k",""],["d","2026-01",29,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","c",""],["d","2026-01",29,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","k",""],["d","2026-01",28,"PAGAMENTO DE VALE ALIMENTAÇÃO","",630,1,"PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL","Boleto Amigo","c",""],["d","2026-01",28,"PAGAMENTO DE VALE ALIMENTAÇÃO","",630,1,"PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL","Boleto Amigo","k",""],["d","2026-01",28,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"JESSICA DINIZ DOS SANTOS","Boleto Amigo","c",""],["d","2026-01",28,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"JESSICA DINIZ DOS SANTOS","Boleto Amigo","k",""],["d","2026-01",28,"MATERIAL DE CONSUMO","",40.9,1,"MARIA EDUARDA ANACLETO","Boleto Amigo","c",""],["d","2026-01",28,"MATERIAL DE CONSUMO","",40.9,1,"MARIA EDUARDA ANACLETO","Boleto Amigo","k",""],["d","2026-01",28,"TARIFAS BANCÁRIAS","",36.26,1,"SISPAG","Boleto Amigo","c",""],["d","2026-01",28,"TARIFAS BANCÁRIAS","",36.26,1,"SISPAG","Boleto Amigo","k",""],["d","2026-01",27,"OUTRAS DESPESAS","",14391.71,1,"BANCO ITAÚ","Boleto Amigo","c",""],["d","2026-01",27,"OUTRAS DESPESAS","",14391.71,1,"BANCO ITAÚ","Boleto Amigo","k",""],["d","2026-01",27,"PAGAMENTO DE VALE TRANSPORTE","",209,1,"SEMOB SECRETARIA DE ESTADO DE TRANSPORTE E MODILIDADE DO DF","Boleto Amigo","c",""],["d","2026-01",27,"PAGAMENTO DE VALE TRANSPORTE","",209,1,"SEMOB SECRETARIA DE ESTADO DE TRANSPORTE E MODILIDADE DO DF","Boleto Amigo","k",""],["d","2026-01",27,"META (FACEBOOK E INSTAGRAM)","",53.9,1,"DOCK INSTITUIÇÃO DE PAGAMENTO S.A","Boleto Amigo","c",""],["d","2025-10",29,"META (FACEBOOK E INSTAGRAM)","",53.9,1,"DOCK INSTITUIÇÃO DE PAGAMENTO S.A","Boleto Amigo","k",""],["d","2026-01",27,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","c",""],["d","2026-01",27,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","k",""],["d","2026-01",26,"TARIFAS BANCÁRIAS","",15.54,1,"SISPAG","Boleto Amigo","c",""],["d","2026-01",26,"TARIFAS BANCÁRIAS","",15.54,1,"SISPAG","Boleto Amigo","k",""],["d","2026-01",23,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","c",""],["d","2026-01",23,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","k",""],["d","2026-01",22,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG","Boleto Amigo","c",""],["d","2026-01",22,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG","Boleto Amigo","k",""],["d","2026-01",21,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","c",""],["d","2026-01",21,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","k",""],["d","2026-01",20,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","c",""],["d","2026-01",20,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","k",""],["d","2026-01",20,"SISTEMAS","",818.19,1,"ALGAR TELECOM S/A","Boleto Amigo","c",""],["d","2026-01",20,"SISTEMAS","",818.19,1,"ALGAR TELECOM S/A","Boleto Amigo","k",""],["d","2026-01",20,"SISTEMAS","",478.4,1,"ALGAR TELECOM S/A","Boleto Amigo","c",""],["d","2026-01",20,"SISTEMAS","",478.4,1,"ALGAR TELECOM S/A","Boleto Amigo","k",""],["d","2026-01",20,"TARIFAS BANCÁRIAS","",50,1,"SICOOB","Boleto Amigo","c",""],["d","2026-01",20,"TARIFAS BANCÁRIAS","",50,1,"SICOOB","Boleto Amigo","k",""],["d","2026-01",19,"FGTS","",184.94,1,"CAIXA ECONOMICA FEDERAL","Boleto Amigo","c",""],["d","2026-01",18,"FGTS","",184.94,1,"CAIXA ECONOMICA FEDERAL","Boleto Amigo","k",""],["d","2026-01",19,"DESPESA DE AQUISIÇÃO DE EQUIP OU MANUTENÇÃO","",79.9,1,"AMAZON SERVIÇOS DE VAREJO BRASIL LTDA","Boleto Amigo","c",""],["d","2026-01",13,"DESPESA DE AQUISIÇÃO DE EQUIP OU MANUTENÇÃO","",79.9,1,"AMAZON SERVIÇOS DE VAREJO BRASIL LTDA","Boleto Amigo","k",""],["d","2026-01",19,"TARIFAS BANCÁRIAS","",18.13,1,"SISPAG","Boleto Amigo","c",""],["d","2026-01",19,"TARIFAS BANCÁRIAS","",18.13,1,"SISPAG","Boleto Amigo","k",""],["d","2026-01",16,"SIMPLES","",255.01,1,"SIMPLES - RECEITA FEDERAL","Boleto Amigo","c",""],["d","2026-01",16,"SIMPLES","",255.01,1,"SIMPLES - RECEITA FEDERAL","Boleto Amigo","k",""],["d","2026-01",16,"EMPRESA PRESTADORA DE SERVIÇOS","",149.9,1,"MUNDO DOS FILTROS","Boleto Amigo","c",""],["d","2026-01",16,"EMPRESA PRESTADORA DE SERVIÇOS","",149.9,1,"MUNDO DOS FILTROS","Boleto Amigo","k",""],["d","2026-01",16,"OUTROS IMPOSTOS","",311.83,1,"MINISTERIO DA FAZENDA (IRRF)","Boleto Amigo","c",""],["d","2026-01",16,"OUTROS IMPOSTOS","",311.83,1,"MINISTERIO DA FAZENDA (IRRF)","Boleto Amigo","k",""],["d","2026-01",16,"INSS","",184.63,1,"MINISTERIO DA PREVIDENCIA (INSS)","Boleto Amigo","c",""],["d","2026-01",18,"INSS","",184.63,1,"MINISTERIO DA PREVIDENCIA (INSS)","Boleto Amigo","k",""],["d","2026-01",15,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"ELENILTON SANTOS DO NASCIMENTO","Boleto Amigo","c",""],["d","2026-01",15,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"ELENILTON SANTOS DO NASCIMENTO","Boleto Amigo","k",""],["d","2026-01",5,"FUNDO DE CAIXA ECONOMY (CONTA SIMPLES)","",14162.64,1,"DOCK IP S.A FUNDO DE CAIXA E INVESTIMENTOS","Boleto Amigo","c",""],["d","2026-01",1,"FUNDO DE CAIXA ECONOMY (CONTA SIMPLES)","",14162.64,1,"DOCK IP S.A FUNDO DE CAIXA E INVESTIMENTOS","Boleto Amigo","k",""],["d","2026-01",15,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"FLAVIO ROBERTO NASCIMENTO PEREIRA","Boleto Amigo","c",""],["d","2026-01",15,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"FLAVIO ROBERTO NASCIMENTO PEREIRA","Boleto Amigo","k",""],["d","2026-01",15,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG","Boleto Amigo","c",""],["d","2026-01",15,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG","Boleto Amigo","k",""],["d","2026-01",15,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"MARY HELLEN SANTOS DA SILVA","Boleto Amigo","c",""],["d","2026-01",15,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"MARY HELLEN SANTOS DA SILVA","Boleto Amigo","k",""],["d","2026-01",15,"ANÚNCIOS DE TELEVISÃO","",4000,1,"RÁDIO E TELEVISÃO CV LTDA","Boleto Amigo","c",""],["d","2026-01",6,"ANÚNCIOS DE TELEVISÃO","",4000,1,"RÁDIO E TELEVISÃO CV LTDA","Boleto Amigo","k",""],["d","2026-01",14,"TARIFAS BANCÁRIAS","",31.08,1,"SISPAG","Boleto Amigo","c",""],["d","2026-01",14,"TARIFAS BANCÁRIAS","",31.08,1,"SISPAG","Boleto Amigo","k",""],["d","2026-01",13,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","c",""],["d","2026-01",13,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","k",""],["d","2026-01",12,"DARF","",311.83,1,"MINISTERIO DA FAZENDA (IRRF)","Boleto Amigo","c",""],["d","2026-01",12,"DARF","",311.83,1,"MINISTERIO DA FAZENDA (IRRF)","Boleto Amigo","k",""],["d","2026-01",12,"FGTS","",220.41,1,"CAIXA ECONOMICA FEDERAL","Boleto Amigo","c",""],["d","2026-01",12,"FGTS","",220.41,1,"CAIXA ECONOMICA FEDERAL","Boleto Amigo","k",""],["d","2026-01",12,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG","Boleto Amigo","c",""],["d","2026-01",12,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG","Boleto Amigo","k",""],["d","2026-01",9,"OUTRAS DESPESAS","",180.8,1,"BRXNQ- TELECOMUNICAÇÕES- LTDA","Boleto Amigo","c",""],["d","2026-01",10,"OUTRAS DESPESAS","",180.8,1,"BRXNQ- TELECOMUNICAÇÕES- LTDA","Boleto Amigo","k",""],["d","2026-01",9,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","c",""],["d","2026-01",9,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","k",""],["d","2026-01",9,"ALUGUEL DE IMPRESSORA","",384.79,1,"QUALITY TOTAL LOCAÇÃO DE EQUIPAMENTOS DE INFORMATICA","Boleto Amigo","c",""],["d","2026-01",9,"ALUGUEL DE IMPRESSORA","",384.79,1,"QUALITY TOTAL LOCAÇÃO DE EQUIPAMENTOS DE INFORMATICA","Boleto Amigo","k",""],["d","2026-01",8,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","c",""],["d","2026-01",8,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","k",""],["d","2026-01",8,"PAGAMENTO DE VALE ALIMENTAÇÃO","",525,1,"PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL","Boleto Amigo","c",""],["d","2026-01",8,"PAGAMENTO DE VALE ALIMENTAÇÃO","",525,1,"PLUXEE INSTITUIÇÃO DE PAGAMENTO BRASIL","Boleto Amigo","k",""],["d","2026-01",8,"ANÚNCIOS DE RÁDIO","",500,1,"EMMANUEL WESLEY RAMOS DA SOUSA","Boleto Amigo","c",""],["d","2026-01",8,"ANÚNCIOS DE RÁDIO","",500,1,"EMMANUEL WESLEY RAMOS DA SOUSA","Boleto Amigo","k",""],["d","2026-01",7,"TARIFAS BANCÁRIAS","",18.13,1,"SISPAG","Boleto Amigo","c",""],["d","2026-01",7,"TARIFAS BANCÁRIAS","",18.13,1,"SISPAG","Boleto Amigo","k",""],["d","2026-01",7,"RESCISÃO CONTRATUAL COM DEVOLUÇÃO DE VALORES","",200,1,"SARA JAQUELINE DE SOUSA ISIDIO","Boleto Amigo","c",""],["d","2026-01",6,"RESCISÃO CONTRATUAL COM DEVOLUÇÃO DE VALORES","",200,1,"SARA JAQUELINE DE SOUSA ISIDIO","Boleto Amigo","k",""],["d","2026-01",7,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",2108.78,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","c",""],["d","2025-12",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",2108.78,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","k",""],["d","2026-01",6,"LIMPEZA E HIGIENIZAÇÃO ESCRITÓRIO","",750,1,"ISMAILDE E SOUZA","Boleto Amigo","c",""],["d","2026-01",4,"LIMPEZA E HIGIENIZAÇÃO ESCRITÓRIO","",750,1,"ISMAILDE E SOUZA","Boleto Amigo","k",""],["d","2026-01",6,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","c",""],["d","2026-01",6,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","k",""],["d","2026-01",5,"CONDOMÍNIO","",1307.47,1,"CONDOMINIO DO EDIFICIO SUPER CENTER VENANCIO 2000","Boleto Amigo","c",""],["d","2026-01",5,"CONDOMÍNIO","",1307.47,1,"CONDOMINIO DO EDIFICIO SUPER CENTER VENANCIO 2000","Boleto Amigo","k",""],["d","2026-01",5,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","c",""],["d","2026-01",5,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","k",""],["d","2026-01",5,"ALUGUEL","",2312.59,1,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","c",""],["d","2026-01",5,"ALUGUEL","",2312.59,1,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","k",""],["d","2026-01",5,"PAGAMENTO DE VALE ALIMENTAÇÃO","",175,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","c",""],["d","2025-12",6,"PAGAMENTO DE VALE ALIMENTAÇÃO","",175,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","k",""],["d","2026-01",5,"PAGAMENTO DE VALE TRANSPORTE","",55,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","c",""],["d","2025-12",6,"PAGAMENTO DE VALE TRANSPORTE","",55,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","k",""],["d","2026-01",2,"TARIFAS BANCÁRIAS","",20.72,1,"SISPAG","Boleto Amigo","c",""],["d","2026-01",2,"TARIFAS BANCÁRIAS","",20.72,1,"SISPAG","Boleto Amigo","k",""],["d","2026-01",2,"RESSARCIMENTO DE DESPESAS DE CUSTOS OPERACIONAIS (TAG/DF)","",3404.47,1,"ECONOMY ASSESSORIA - TAGUATINGA","Boleto Amigo","c",""],["d","2026-01",2,"RESSARCIMENTO DE DESPESAS DE CUSTOS OPERACIONAIS (TAG/DF)","",3404.47,1,"ECONOMY ASSESSORIA - TAGUATINGA","Boleto Amigo","k",""],["d","2025-12",29,"META (FACEBOOK E INSTAGRAM)","",53.9,1,"DOCK INSTITUIÇÃO DE PAGAMENTO S.A","Boleto Amigo","c",""],["d","2025-09",29,"META (FACEBOOK E INSTAGRAM)","",53.9,1,"DOCK INSTITUIÇÃO DE PAGAMENTO S.A","Boleto Amigo","k",""],["d","2025-12",30,"TARIFAS BANCÁRIAS","",28.49,1,"SISPAG","Boleto Amigo","c",""],["d","2025-12",30,"TARIFAS BANCÁRIAS","",28.49,1,"SISPAG","Boleto Amigo","k",""],["d","2025-12",30,"SISTEMAS","",49,1,"DOCK INSTITUIÇÃO DE PAGAMENTO S.A","Boleto Amigo","c",""],["d","2025-10",29,"SISTEMAS","",49,1,"DOCK INSTITUIÇÃO DE PAGAMENTO S.A","Boleto Amigo","k",""],["d","2025-12",29,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"LAIZA BARBOSA DA SILVA","Boleto Amigo","c",""],["d","2025-12",22,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"LAIZA BARBOSA DA SILVA","Boleto Amigo","k",""],["d","2025-12",29,"SISTEMAS","",467.76,1,"ALGAR TELECOM S/A","Boleto Amigo","c",""],["d","2025-12",20,"SISTEMAS","",467.76,1,"ALGAR TELECOM S/A","Boleto Amigo","k",""],["d","2025-12",29,"SISTEMAS","",800,1,"ALGAR TELECOM S/A","Boleto Amigo","c",""],["d","2025-12",20,"SISTEMAS","",800,1,"ALGAR TELECOM S/A","Boleto Amigo","k",""],["d","2025-12",29,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","c",""],["d","2025-12",29,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","k",""],["d","2025-12",26,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","c",""],["d","2025-12",26,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","k",""],["d","2025-12",24,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG","Boleto Amigo","c",""],["d","2025-12",24,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG","Boleto Amigo","k",""],["d","2025-12",23,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG","Boleto Amigo","c",""],["d","2025-12",23,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG","Boleto Amigo","k",""],["d","2025-12",22,"TARIFAS BANCÁRIAS","",50,1,"SICOOB","Boleto Amigo","c",""],["d","2025-12",22,"TARIFAS BANCÁRIAS","",50,1,"SICOOB","Boleto Amigo","k",""],["d","2025-12",22,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","c",""],["d","2025-12",22,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","k",""],["d","2025-12",19,"PAGAMENTO DE 13º","",1950.45,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","c",""],["d","2025-12",19,"PAGAMENTO DE 13º","",1950.45,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","k",""],["d","2025-12",19,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","c",""],["d","2025-12",19,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","k",""],["d","2025-12",19,"FUNDO DE CAIXA ECONOMY (CONTA SIMPLES)","",16600.2,1,"DOCK IP S.A FUNDO DE CAIXA E INVESTIMENTOS","Boleto Amigo","c",""],["d","2025-12",1,"FUNDO DE CAIXA ECONOMY (CONTA SIMPLES)","",16600.2,1,"DOCK IP S.A FUNDO DE CAIXA E INVESTIMENTOS","Boleto Amigo","k",""],["d","2025-12",19,"EMPRESTIMOS A PAGAR","",2000,1,"ECONOMY - CONTA SIMPLES","Boleto Amigo","c",""],["d","2025-12",18,"EMPRESTIMOS A PAGAR","",2000,1,"ECONOMY - CONTA SIMPLES","Boleto Amigo","k",""],["d","2025-12",19,"INSS","",492.92,1,"MINISTERIO DA PREVIDENCIA (INSS)","Boleto Amigo","c",""],["d","2025-12",19,"INSS","",492.92,1,"MINISTERIO DA PREVIDENCIA (INSS)","Boleto Amigo","k",""],["d","2025-12",18,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","c",""],["d","2025-12",18,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","k",""],["d","2025-12",17,"TARIFAS BANCÁRIAS","",25.9,1,"SISPAG","Boleto Amigo","c",""],["d","2025-12",17,"TARIFAS BANCÁRIAS","",25.9,1,"SISPAG","Boleto Amigo","k",""],["d","2025-12",16,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG","Boleto Amigo","c",""],["d","2025-12",16,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG","Boleto Amigo","k",""],["d","2025-12",16,"FGTS","",350.97,1,"CAIXA ECONOMICA FEDERAL","Boleto Amigo","c",""],["d","2025-12",18,"FGTS","",350.97,1,"CAIXA ECONOMICA FEDERAL","Boleto Amigo","k",""],["d","2025-12",16,"INSS","",180.75,1,"MINISTERIO DA PREVIDENCIA (INSS)","Boleto Amigo","c",""],["d","2025-12",18,"INSS","",180.75,1,"MINISTERIO DA PREVIDENCIA (INSS)","Boleto Amigo","k",""],["d","2025-12",15,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","c",""],["d","2025-12",15,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","k",""],["d","2025-12",15,"SIMPLES","",270,1,"SIMPLES - RECEITA FEDERAL","Boleto Amigo","c",""],["d","2025-12",18,"SIMPLES","",270,1,"SIMPLES - RECEITA FEDERAL","Boleto Amigo","k",""],["d","2025-12",15,"ANÚNCIOS DE TELEVISÃO","",5000,1,"RÁDIO E TELEVISÃO CV LTDA","Boleto Amigo","c",""],["d","2025-12",4,"ANÚNCIOS DE TELEVISÃO","",5000,1,"RÁDIO E TELEVISÃO CV LTDA","Boleto Amigo","k",""],["d","2025-12",12,"TARIFAS BANCÁRIAS","",31.08,1,"SISPAG","Boleto Amigo","c",""],["d","2025-12",12,"TARIFAS BANCÁRIAS","",31.08,1,"SISPAG","Boleto Amigo","k",""],["d","2025-12",11,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","c",""],["d","2025-12",11,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","k",""],["d","2025-12",10,"OUTRAS DESPESAS","",180.8,1,"BRXNQ- TELECOMUNICAÇÕES- LTDA","Boleto Amigo","c",""],["d","2025-12",10,"OUTRAS DESPESAS","",180.8,1,"BRXNQ- TELECOMUNICAÇÕES- LTDA","Boleto Amigo","k",""],["d","2025-12",10,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG","Boleto Amigo","c",""],["d","2025-12",10,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG","Boleto Amigo","k",""],["d","2025-12",9,"ALUGUEL DE IMPRESSORA","",384.79,1,"QUALITY TOTAL LOCAÇÃO DE EQUIPAMENTOS DE INFORMATICA","Boleto Amigo","c",""],["d","2025-12",9,"ALUGUEL DE IMPRESSORA","",384.79,1,"QUALITY TOTAL LOCAÇÃO DE EQUIPAMENTOS DE INFORMATICA","Boleto Amigo","k",""],["d","2025-12",9,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG","Boleto Amigo","c",""],["d","2025-12",9,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG","Boleto Amigo","k",""],["d","2025-12",9,"EMPRESA PRESTADORA DE SERVIÇOS","",400,1,"LEANDRO HENRIQUE PEREIRA DE LIRA","Boleto Amigo","c",""],["d","2025-12",9,"EMPRESA PRESTADORA DE SERVIÇOS","",400,1,"LEANDRO HENRIQUE PEREIRA DE LIRA","Boleto Amigo","k",""],["d","2025-12",9,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"BRILHANTE SILVA DE CARLOS LIMA NETO","Boleto Amigo","c",""],["d","2025-12",9,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"BRILHANTE SILVA DE CARLOS LIMA NETO","Boleto Amigo","k",""],["d","2025-12",9,"ANÚNCIOS DE RÁDIO","",500,1,"EMMANUEL WESLEY RAMOS DA SOUSA","Boleto Amigo","c",""],["d","2025-12",9,"ANÚNCIOS DE RÁDIO","",500,1,"EMMANUEL WESLEY RAMOS DA SOUSA","Boleto Amigo","k",""],["d","2025-12",8,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","c",""],["d","2025-12",8,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","k",""],["d","2025-12",5,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",1929.49,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","c",""],["d","2025-11",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",1929.49,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","k",""],["d","2025-12",5,"PAGAMENTO DE VALE TRANSPORTE","",224,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","c",""],["d","2025-11",6,"PAGAMENTO DE VALE TRANSPORTE","",224,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","k",""],["d","2025-12",5,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","c",""],["d","2025-12",5,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","k",""],["d","2025-12",5,"PAGAMENTO DE VALE ALIMENTAÇÃO","",525,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","c",""],["d","2025-11",6,"PAGAMENTO DE VALE ALIMENTAÇÃO","",525,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","k",""],["d","2025-12",4,"EMPRESA PRESTADORA DE SERVIÇOS","",118.09,1,"VOGA CONTABILIDADE","Boleto Amigo","c",""],["d","2025-12",5,"EMPRESA PRESTADORA DE SERVIÇOS","",118.09,1,"VOGA CONTABILIDADE","Boleto Amigo","k",""],["d","2025-12",4,"ALUGUEL","",2312.59,1,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","c",""],["d","2025-12",5,"ALUGUEL","",2312.59,1,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","k",""],["d","2025-12",4,"LIMPEZA E HIGIENIZAÇÃO ESCRITÓRIO","",600,1,"ISMAILDE E SOUZA","Boleto Amigo","c",""],["d","2025-12",4,"LIMPEZA E HIGIENIZAÇÃO ESCRITÓRIO","",600,1,"ISMAILDE E SOUZA","Boleto Amigo","k",""],["d","2025-12",4,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","c",""],["d","2025-12",4,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","k",""],["d","2025-12",4,"CONDOMÍNIO","",1334.33,1,"CONDOMINIO DO EDIFICIO SUPER CENTER VENANCIO 2000","Boleto Amigo","c",""],["d","2025-12",5,"CONDOMÍNIO","",1334.33,1,"CONDOMINIO DO EDIFICIO SUPER CENTER VENANCIO 2000","Boleto Amigo","k",""],["d","2025-12",3,"RESSARCIMENTO DE DESPESAS DE CUSTOS OPERACIONAIS (TAG/DF)","",2407.57,1,"ECONOMY ASSESSORIA - TAGUATINGA","Boleto Amigo","c",""],["d","2025-12",2,"RESSARCIMENTO DE DESPESAS DE CUSTOS OPERACIONAIS (TAG/DF)","",2407.57,1,"ECONOMY ASSESSORIA - TAGUATINGA","Boleto Amigo","k",""],["d","2025-12",3,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG","Boleto Amigo","c",""],["d","2025-12",3,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG","Boleto Amigo","k",""],["d","2025-12",2,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"RICARDO DURANS BARRETO","Boleto Amigo","c",""],["d","2025-12",2,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"RICARDO DURANS BARRETO","Boleto Amigo","k",""],["d","2025-12",2,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","c",""],["d","2025-12",2,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","k",""],["d","2025-12",1,"TARIFAS BANCÁRIAS","",20.72,1,"SISPAG","Boleto Amigo","c",""],["d","2025-12",1,"TARIFAS BANCÁRIAS","",20.72,1,"SISPAG","Boleto Amigo","k",""],["d","2025-12",1,"MATERIAL DE CONSUMO","",289.45,1,"COMERCIAL ALVORADA PROD. LIMP DESC LTDA","Boleto Amigo","c",""],["d","2025-12",1,"MATERIAL DE CONSUMO","",289.45,1,"COMERCIAL ALVORADA PROD. LIMP DESC LTDA","Boleto Amigo","k",""],["d","2025-11",28,"EMPRESTIMOS A PAGAR","",2000,1,"ECONOMY - CONTA SIMPLES","Boleto Amigo","c",""],["d","2025-11",18,"EMPRESTIMOS A PAGAR","",2000,1,"ECONOMY - CONTA SIMPLES","Boleto Amigo","k",""],["d","2025-11",28,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","c",""],["d","2025-11",28,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","k",""],["d","2025-11",27,"TARIFAS BANCÁRIAS","",25.9,1,"SISPAG","Boleto Amigo","c",""],["d","2025-11",27,"TARIFAS BANCÁRIAS","",25.9,1,"SISPAG","Boleto Amigo","k",""],["d","2025-11",27,"PAGAMENTO DE 13º","",2125.82,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","c",""],["d","2025-11",27,"PAGAMENTO DE 13º","",2125.82,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","k",""],["d","2025-11",26,"TARIFAS BANCÁRIAS","",18.13,1,"SISPAG","Boleto Amigo","c",""],["d","2025-11",26,"TARIFAS BANCÁRIAS","",18.13,1,"SISPAG","Boleto Amigo","k",""],["d","2025-11",25,"TARIFAS BANCÁRIAS","",15.54,1,"SISPAG","Boleto Amigo","c",""],["d","2025-11",25,"TARIFAS BANCÁRIAS","",15.54,1,"SISPAG","Boleto Amigo","k",""],["d","2025-11",24,"TARIFAS BANCÁRIAS","",15.54,1,"SISPAG","Boleto Amigo","c",""],["d","2025-11",24,"TARIFAS BANCÁRIAS","",15.54,1,"SISPAG","Boleto Amigo","k",""],["d","2025-11",21,"PAGAMENTO DE FÉRIAS","",2442.82,1,"MARIA EDUARDA ANACLETO","Boleto Amigo","c",""],["d","2025-11",3,"PAGAMENTO DE FÉRIAS","",2442.82,1,"MARIA EDUARDA ANACLETO","Boleto Amigo","k",""],["d","2025-11",21,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"AILTON LINO DE SOUZA","Boleto Amigo","c",""],["d","2025-11",21,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"AILTON LINO DE SOUZA","Boleto Amigo","k",""],["d","2025-11",21,"TARIFAS BANCÁRIAS","",20.72,1,"SISPAG","Boleto Amigo","c",""],["d","2025-11",21,"TARIFAS BANCÁRIAS","",20.72,1,"SISPAG","Boleto Amigo","k",""],["d","2025-11",21,"TARIFAS BANCÁRIAS","",50,1,"SICOOB","Boleto Amigo","c",""],["d","2025-11",21,"TARIFAS BANCÁRIAS","",50,1,"SICOOB","Boleto Amigo","k",""],["d","2025-11",19,"TARIFAS BANCÁRIAS","",31.08,1,"SISPAG","Boleto Amigo","c",""],["d","2025-11",19,"TARIFAS BANCÁRIAS","",31.08,1,"SISPAG","Boleto Amigo","k",""],["d","2025-11",18,"RESCISÃO CONTRATUAL COM DEVOLUÇÃO DE VALORES","",1000,1,"VANIA DA SILVA MEIRELLES","Boleto Amigo","c",""],["d","2025-11",18,"RESCISÃO CONTRATUAL COM DEVOLUÇÃO DE VALORES","",1000,1,"VANIA DA SILVA MEIRELLES","Boleto Amigo","k",""],["d","2025-11",18,"RESSARCIMENTO DE DESPESAS DE CUSTOS OPERACIONAIS (TAG/DF)","",3925.93,1,"ECONOMY ASSESSORIA - TAGUATINGA","Boleto Amigo","c",""],["d","2025-11",2,"RESSARCIMENTO DE DESPESAS DE CUSTOS OPERACIONAIS (TAG/DF)","",3925.93,1,"ECONOMY ASSESSORIA - TAGUATINGA","Boleto Amigo","k",""],["d","2025-11",18,"SISTEMAS","",800.91,1,"ALGAR TELECOM S/A","Boleto Amigo","c",""],["d","2025-11",20,"SISTEMAS","",800.91,1,"ALGAR TELECOM S/A","Boleto Amigo","k",""],["d","2025-11",18,"FGTS","",452.04,1,"CAIXA ECONOMICA FEDERAL","Boleto Amigo","c",""],["d","2025-11",18,"FGTS","",452.04,1,"CAIXA ECONOMICA FEDERAL","Boleto Amigo","k",""],["d","2025-11",18,"INSS","",1078.83,1,"MINISTERIO DA PREVIDENCIA (INSS)","Boleto Amigo","c",""],["d","2025-11",18,"INSS","",1078.83,1,"MINISTERIO DA PREVIDENCIA (INSS)","Boleto Amigo","k",""],["d","2025-11",18,"FUNDO DE CAIXA ECONOMY (CONTA SIMPLES)","",5384.45,1,"DOCK IP S.A FUNDO DE CAIXA E INVESTIMENTOS","Boleto Amigo","c",""],["d","2025-11",1,"FUNDO DE CAIXA ECONOMY (CONTA SIMPLES)","",5384.45,1,"DOCK IP S.A FUNDO DE CAIXA E INVESTIMENTOS","Boleto Amigo","k",""],["d","2025-11",18,"SISTEMAS","",467.76,1,"ALGAR TELECOM S/A","Boleto Amigo","c",""],["d","2025-11",20,"SISTEMAS","",467.76,1,"ALGAR TELECOM S/A","Boleto Amigo","k",""],["d","2025-11",18,"SIMPLES","",345.01,1,"SIMPLES - RECEITA FEDERAL","Boleto Amigo","c",""],["d","2025-11",18,"SIMPLES","",345.01,1,"SIMPLES - RECEITA FEDERAL","Boleto Amigo","k",""],["d","2025-11",17,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","c",""],["d","2025-11",17,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","k",""],["d","2025-11",14,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"JOSUEL MARTINS MORAES","Boleto Amigo","c",""],["d","2025-11",7,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"JOSUEL MARTINS MORAES","Boleto Amigo","k",""],["d","2025-11",14,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG","Boleto Amigo","c",""],["d","2025-11",14,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG","Boleto Amigo","k",""],["d","2025-11",13,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","c",""],["d","2025-11",13,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","k",""],["d","2025-11",11,"META (FACEBOOK E INSTAGRAM)","",53.9,1,"DOCK INSTITUIÇÃO DE PAGAMENTO S.A","Boleto Amigo","c",""],["d","2025-08",29,"META (FACEBOOK E INSTAGRAM)","",53.9,1,"DOCK INSTITUIÇÃO DE PAGAMENTO S.A","Boleto Amigo","k",""],["d","2025-11",12,"TAXA JUNTA COMERCIAL","",430.96,1,"JUNTA COMERCIAL DO DISTRITO FEDERAL","Boleto Amigo","c",""],["d","2025-11",12,"TAXA JUNTA COMERCIAL","",430.96,1,"JUNTA COMERCIAL DO DISTRITO FEDERAL","Boleto Amigo","k",""],["d","2025-11",12,"TARIFAS BANCÁRIAS","",25.9,1,"SISPAG","Boleto Amigo","c",""],["d","2025-11",12,"TARIFAS BANCÁRIAS","",25.9,1,"SISPAG","Boleto Amigo","k",""],["d","2025-11",11,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG","Boleto Amigo","c",""],["d","2025-11",11,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG","Boleto Amigo","k",""],["d","2025-11",10,"ALUGUEL DE IMPRESSORA","",200,1,"QUALITY TOTAL LOCAÇÃO DE EQUIPAMENTOS DE INFORMATICA","Boleto Amigo","c",""],["d","2025-11",9,"ALUGUEL DE IMPRESSORA","",200,1,"QUALITY TOTAL LOCAÇÃO DE EQUIPAMENTOS DE INFORMATICA","Boleto Amigo","k",""],["d","2025-11",10,"INTERNET E TELEFONE","",180.8,1,"BRXNQ- TELECOMUNICAÇÕES- LTDA","Boleto Amigo","c",""],["d","2025-11",10,"INTERNET E TELEFONE","",180.8,1,"BRXNQ- TELECOMUNICAÇÕES- LTDA","Boleto Amigo","k",""],["d","2025-11",10,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","c",""],["d","2025-11",10,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","k",""],["d","2025-11",7,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"MARIA ELBA CORDEIRO DA CRUZ DE SOUSA","Boleto Amigo","c",""],["d","2025-11",7,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"MARIA ELBA CORDEIRO DA CRUZ DE SOUSA","Boleto Amigo","k",""],["d","2025-11",7,"TARIFAS BANCÁRIAS","",15.54,1,"SISPAG","Boleto Amigo","c",""],["d","2025-11",7,"TARIFAS BANCÁRIAS","",15.54,1,"SISPAG","Boleto Amigo","k",""],["d","2025-11",6,"PAGAMENTO DE VALE TRANSPORTE","",140,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","c",""],["d","2025-10",6,"PAGAMENTO DE VALE TRANSPORTE","",140,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","k",""],["d","2025-11",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",4440.23,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","c",""],["d","2025-10",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",4440.23,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","k",""],["d","2025-11",6,"PAGAMENTO DE VALE ALIMENTAÇÃO","",350,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","c",""],["d","2025-10",6,"PAGAMENTO DE VALE ALIMENTAÇÃO","",350,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","k",""],["d","2025-11",6,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","c",""],["d","2025-11",6,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","k",""],["d","2025-11",5,"EMPRESA PRESTADORA DE SERVIÇOS","",506,1,"VOGA CONTABILIDADE","Boleto Amigo","c",""],["d","2025-11",5,"EMPRESA PRESTADORA DE SERVIÇOS","",506,1,"VOGA CONTABILIDADE","Boleto Amigo","k",""],["d","2025-11",5,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG","Boleto Amigo","c",""],["d","2025-11",5,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG","Boleto Amigo","k",""],["d","2025-11",5,"ALUGUEL","",2312.59,1,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","c",""],["d","2025-11",5,"ALUGUEL","",2312.59,1,"AR EMPREENDIMENTOS PARTICIPAÇÕES E SERVIÇOS LTDA","Boleto Amigo","k",""],["d","2025-11",5,"CONDOMÍNIO","",1149.49,1,"CONDOMINIO DO EDIFICIO SUPER CENTER VENANCIO 2000","Boleto Amigo","c",""],["d","2025-11",5,"CONDOMÍNIO","",1149.49,1,"CONDOMINIO DO EDIFICIO SUPER CENTER VENANCIO 2000","Boleto Amigo","k",""],["d","2025-11",4,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","c",""],["d","2025-11",4,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","k",""],["d","2025-10",31,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","c",""],["d","2025-10",31,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","k",""],["d","2025-10",31,"ANÚNCIOS DE TELEVISÃO","",5000,1,"RÁDIO E TELEVISÃO CV LTDA","Boleto Amigo","c",""],["d","2025-10",31,"ANÚNCIOS DE TELEVISÃO","",5000,1,"RÁDIO E TELEVISÃO CV LTDA","Boleto Amigo","k",""],["d","2025-10",30,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","c",""],["d","2025-10",30,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","k",""],["d","2025-10",30,"EMPRESTIMOS A PAGAR","",2000,1,"ECONOMY - CONTA SIMPLES","Boleto Amigo","c",""],["d","2025-10",18,"EMPRESTIMOS A PAGAR","",2000,1,"ECONOMY - CONTA SIMPLES","Boleto Amigo","k",""],["d","2025-10",30,"FUNDO DE CAIXA ECONOMY (CONTA SIMPLES)","",14887.99,1,"DOCK IP S.A FUNDO DE CAIXA E INVESTIMENTOS","Boleto Amigo","c",""],["d","2025-10",1,"FUNDO DE CAIXA ECONOMY (CONTA SIMPLES)","",14887.99,1,"DOCK IP S.A FUNDO DE CAIXA E INVESTIMENTOS","Boleto Amigo","k",""],["d","2025-10",30,"RESCISÃO CONTRATUAL COM DEVOLUÇÃO DE VALORES","",2500,1,"MARLETE SABINO DE OLIVEIRA","Boleto Amigo","c",""],["d","2025-10",29,"RESCISÃO CONTRATUAL COM DEVOLUÇÃO DE VALORES","",2500,1,"MARLETE SABINO DE OLIVEIRA","Boleto Amigo","k",""],["d","2025-10",30,"EMPRESA PRESTADORA DE SERVIÇOS","",3400,1,"PATRON CONSTRUÇÕES E REFORMAS","Boleto Amigo","c",""],["d","2025-10",30,"EMPRESA PRESTADORA DE SERVIÇOS","",3400,1,"PATRON CONSTRUÇÕES E REFORMAS","Boleto Amigo","k",""],["d","2025-10",30,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"MARIA ALDA RODRIGUES FREITAS","Boleto Amigo","c",""],["d","2025-10",30,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"MARIA ALDA RODRIGUES FREITAS","Boleto Amigo","k",""],["d","2025-10",29,"TARIFAS BANCÁRIAS","",44.03,1,"SISPAG","Boleto Amigo","c",""],["d","2025-10",29,"TARIFAS BANCÁRIAS","",44.03,1,"SISPAG","Boleto Amigo","k",""],["d","2025-10",28,"TARIFAS BANCÁRIAS","",18.13,1,"SISPAG","Boleto Amigo","c",""],["d","2025-10",28,"TARIFAS BANCÁRIAS","",18.13,1,"SISPAG","Boleto Amigo","k",""],["d","2025-10",27,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","c",""],["d","2025-10",27,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","k",""],["d","2025-10",24,"OUTRAS DESPESAS","",200,1,"GERALDO MAGELA DE VASCONCELOS","Boleto Amigo","c",""],["d","2025-10",24,"OUTRAS DESPESAS","",200,1,"GERALDO MAGELA DE VASCONCELOS","Boleto Amigo","k",""],["d","2025-10",24,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","c",""],["d","2025-10",24,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","k",""],["d","2025-10",23,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","c",""],["d","2025-10",23,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","k",""],["d","2025-10",22,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"ITATIANA GONÇALVES DA SILVA","Boleto Amigo","c",""],["d","2025-10",22,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"ITATIANA GONÇALVES DA SILVA","Boleto Amigo","k",""],["d","2025-10",22,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","c",""],["d","2025-10",22,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","k",""],["d","2025-10",21,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"ANTONIO ELIVARDO FREIRE DE OLIVEIRA","Boleto Amigo","c",""],["d","2025-10",21,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"ANTONIO ELIVARDO FREIRE DE OLIVEIRA","Boleto Amigo","k",""],["d","2025-10",21,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","c",""],["d","2025-10",21,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","k",""],["d","2025-10",20,"SISTEMAS","",467.76,1,"ALGAR TELECOM S/A","Boleto Amigo","c",""],["d","2025-10",20,"SISTEMAS","",467.76,1,"ALGAR TELECOM S/A","Boleto Amigo","k",""],["d","2025-10",20,"SISTEMAS","",800,1,"ALGAR TELECOM S/A","Boleto Amigo","c",""],["d","2025-10",20,"SISTEMAS","",800,1,"ALGAR TELECOM S/A","Boleto Amigo","k",""],["d","2025-10",20,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","c",""],["d","2025-10",20,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","k",""],["d","2025-10",20,"TARIFAS BANCÁRIAS","",50,1,"SICOOB","Boleto Amigo","c",""],["d","2025-10",20,"TARIFAS BANCÁRIAS","",50,1,"SICOOB","Boleto Amigo","k",""],["d","2025-10",20,"ENERGIA","",242.89,1,"NEOENERGIA","Boleto Amigo","c",""],["d","2025-10",28,"ENERGIA","",242.89,1,"NEOENERGIA","Boleto Amigo","k",""],["d","2025-10",17,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","c",""],["d","2025-10",17,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","k",""],["d","2025-10",17,"ALUGUEL","",2968.49,1,"ECONOMY ASSESSORIA - TAGUATINGA","Boleto Amigo","c",""],["d","2025-10",5,"ALUGUEL","",2968.49,1,"ECONOMY ASSESSORIA - TAGUATINGA","Boleto Amigo","k",""],["d","2025-10",10,"EMPRESA PRESTADORA DE SERVIÇOS","",2457.47,1,"A&R SINALIZAÇÃO E COMUNICAÇÃO","Boleto Amigo","c",""],["d","2025-10",17,"EMPRESA PRESTADORA DE SERVIÇOS","",2457.47,1,"A&R SINALIZAÇÃO E COMUNICAÇÃO","Boleto Amigo","k",""],["d","2025-10",16,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","c",""],["d","2025-10",16,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","k",""],["d","2025-10",15,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG","Boleto Amigo","c",""],["d","2025-10",15,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG","Boleto Amigo","k",""],["d","2025-10",14,"MATERIAL DE ESCRITÓRIO","",24.9,1,"MARIA EDUARDA ANACLETO","Boleto Amigo","c",""],["d","2025-10",14,"MATERIAL DE ESCRITÓRIO","",24.9,1,"MARIA EDUARDA ANACLETO","Boleto Amigo","k",""],["d","2025-10",14,"TARIFAS BANCÁRIAS","",23.31,1,"SISPAG","Boleto Amigo","c",""],["d","2025-10",14,"TARIFAS BANCÁRIAS","",23.31,1,"SISPAG","Boleto Amigo","k",""],["d","2025-10",13,"EMPRESA PRESTADORA DE SERVIÇOS","",1965,1,"PATRON CONSTRUÇÕES E REFORMAS","Boleto Amigo","c",""],["d","2025-10",30,"EMPRESA PRESTADORA DE SERVIÇOS","",1965,1,"PATRON CONSTRUÇÕES E REFORMAS","Boleto Amigo","k",""],["d","2025-10",13,"FGTS","",244.24,1,"CAIXA ECONOMICA FEDERAL","Boleto Amigo","c",""],["d","2025-10",14,"FGTS","",244.24,1,"CAIXA ECONOMICA FEDERAL","Boleto Amigo","k",""],["d","2025-10",13,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","c",""],["d","2025-10",13,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","k",""],["d","2025-10",13,"INSS","",259.76,1,"MINISTERIO DA PREVIDENCIA (INSS)","Boleto Amigo","c",""],["d","2025-11",19,"INSS","",259.76,1,"MINISTERIO DA PREVIDENCIA (INSS)","Boleto Amigo","k",""],["d","2025-10",13,"SIMPLES","",570,1,"SIMPLES - RECEITA FEDERAL","Boleto Amigo","c",""],["d","2025-10",18,"SIMPLES","",570,1,"SIMPLES - RECEITA FEDERAL","Boleto Amigo","k",""],["d","2025-10",13,"META (FACEBOOK E INSTAGRAM)","",53.9,1,"DOCK INSTITUIÇÃO DE PAGAMENTO S.A","Boleto Amigo","c",""],["d","2025-07",29,"META (FACEBOOK E INSTAGRAM)","",53.9,1,"DOCK INSTITUIÇÃO DE PAGAMENTO S.A","Boleto Amigo","k",""],["d","2025-10",10,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","c",""],["d","2025-10",10,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","k",""],["d","2025-10",9,"MATERIAL DE ESCRITÓRIO","",18.9,1,"BRUNO CAMARA TRINDADE","Boleto Amigo","c",""],["d","2025-10",9,"MATERIAL DE ESCRITÓRIO","",18.9,1,"BRUNO CAMARA TRINDADE","Boleto Amigo","k",""],["d","2025-10",9,"ALUGUEL DE IMPRESSORA","",200,1,"QUALITY TOTAL LOCAÇÃO DE EQUIPAMENTOS DE INFORMATICA","Boleto Amigo","c",""],["d","2025-10",9,"ALUGUEL DE IMPRESSORA","",200,1,"QUALITY TOTAL LOCAÇÃO DE EQUIPAMENTOS DE INFORMATICA","Boleto Amigo","k",""],["d","2025-10",9,"TARIFAS BANCÁRIAS","",15.54,1,"SISPAG","Boleto Amigo","c",""],["d","2025-10",9,"TARIFAS BANCÁRIAS","",15.54,1,"SISPAG","Boleto Amigo","k",""],["d","2025-10",8,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"FRANCISCO EUDES DE ARAUJO SILVA","Boleto Amigo","c",""],["d","2025-10",8,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"FRANCISCO EUDES DE ARAUJO SILVA","Boleto Amigo","k",""],["d","2025-10",8,"OUTRAS DESPESAS","",22.5,1,"MARIA EDUARDA ANACLETO","Boleto Amigo","c",""],["d","2025-10",8,"OUTRAS DESPESAS","",22.5,1,"MARIA EDUARDA ANACLETO","Boleto Amigo","k",""],["d","2025-10",8,"ANÚNCIOS DE RÁDIO","",1000,1,"EMMANUEL WESLEY RAMOS DA SOUSA","Boleto Amigo","c",""],["d","2025-10",8,"ANÚNCIOS DE RÁDIO","",1000,1,"EMMANUEL WESLEY RAMOS DA SOUSA","Boleto Amigo","k",""],["d","2025-10",8,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"JONAS PINTO CARDOSO","Boleto Amigo","c",""],["d","2025-10",7,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"JONAS PINTO CARDOSO","Boleto Amigo","k",""],["d","2025-10",8,"TARIFAS BANCÁRIAS","",20.72,1,"SISPAG","Boleto Amigo","c",""],["d","2025-10",8,"TARIFAS BANCÁRIAS","",20.72,1,"SISPAG","Boleto Amigo","k",""],["d","2025-10",7,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"BISMARK DA SILVA TAVARES","Boleto Amigo","c",""],["d","2025-10",7,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"BISMARK DA SILVA TAVARES","Boleto Amigo","k",""],["d","2025-10",6,"EMPRESA PRESTADORA DE SERVIÇOS","",600,1,"AGIRAR EVENTOS E EXPERIENCIAS LTDA","Boleto Amigo","c",""],["d","2025-10",7,"EMPRESA PRESTADORA DE SERVIÇOS","",600,1,"AGIRAR EVENTOS E EXPERIENCIAS LTDA","Boleto Amigo","k",""],["d","2025-10",7,"OUTRAS DESPESAS","",200,1,"FELIPE MORAIS DOS SANTOS","Boleto Amigo","c",""],["d","2025-10",7,"OUTRAS DESPESAS","",200,1,"FELIPE MORAIS DOS SANTOS","Boleto Amigo","k",""],["d","2025-10",7,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","c",""],["d","2025-10",7,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","k",""],["d","2025-10",7,"EMPRESA PRESTADORA DE SERVIÇOS","",450,1,"LM SINALIZACAO E PROJETOS","Boleto Amigo","c",""],["d","2025-10",15,"EMPRESA PRESTADORA DE SERVIÇOS","",450,1,"LM SINALIZACAO E PROJETOS","Boleto Amigo","k",""],["d","2025-10",6,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"JOSE HAMILTON MENEZES FREITAS","Boleto Amigo","c",""],["d","2025-10",6,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"JOSE HAMILTON MENEZES FREITAS","Boleto Amigo","k",""],["d","2025-10",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",2632.43,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","c",""],["d","2025-09",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",2632.43,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","k",""],["d","2025-10",6,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG","Boleto Amigo","c",""],["d","2025-10",6,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG","Boleto Amigo","k",""],["d","2025-10",3,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","c",""],["d","2025-10",3,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","k",""],["d","2025-10",3,"EMPRESA PRESTADORA DE SERVIÇOS","",506,1,"VOGA CONTABILIDADE","Boleto Amigo","c",""],["d","2025-10",5,"EMPRESA PRESTADORA DE SERVIÇOS","",506,1,"VOGA CONTABILIDADE","Boleto Amigo","k",""],["d","2025-10",3,"PAGAMENTO DE VALE ALIMENTAÇÃO","",840,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","c",""],["d","2025-09",6,"PAGAMENTO DE VALE ALIMENTAÇÃO","",840,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","k",""],["d","2025-10",3,"PAGAMENTO DE VALE TRANSPORTE","",350,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","c",""],["d","2025-09",6,"PAGAMENTO DE VALE TRANSPORTE","",350,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","k",""],["d","2025-10",2,"RESSARCIMENTO DE DESPESAS DE CUSTOS OPERACIONAIS (TAG/DF)","",6453.62,1,"ECONOMY ASSESSORIA - TAGUATINGA","Boleto Amigo","c",""],["d","2025-10",2,"RESSARCIMENTO DE DESPESAS DE CUSTOS OPERACIONAIS (TAG/DF)","",6453.62,1,"ECONOMY ASSESSORIA - TAGUATINGA","Boleto Amigo","k",""],["d","2025-10",2,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","c",""],["d","2025-10",2,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","k",""],["d","2025-10",2,"EMPRESA PRESTADORA DE SERVIÇOS","",2382.47,1,"A&R SINALIZAÇÃO E COMUNICAÇÃO","Boleto Amigo","c",""],["d","2025-10",2,"EMPRESA PRESTADORA DE SERVIÇOS","",2382.47,1,"A&R SINALIZAÇÃO E COMUNICAÇÃO","Boleto Amigo","k",""],["d","2025-10",2,"EMPRESA PRESTADORA DE SERVIÇOS","",75,1,"A&R SINALIZAÇÃO E COMUNICAÇÃO","Boleto Amigo","c",""],["d","2025-10",2,"EMPRESA PRESTADORA DE SERVIÇOS","",75,1,"A&R SINALIZAÇÃO E COMUNICAÇÃO","Boleto Amigo","k",""],["d","2025-10",2,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"JOÃO CARLOS DA SILVA SANTOS","Boleto Amigo","c",""],["d","2025-10",2,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"JOÃO CARLOS DA SILVA SANTOS","Boleto Amigo","k",""],["d","2025-10",1,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG","Boleto Amigo","c",""],["d","2025-10",1,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG","Boleto Amigo","k",""],["d","2025-09",30,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","c",""],["d","2025-09",30,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","k",""],["d","2025-09",30,"SISTEMAS","",49,1,"DOCK INSTITUIÇÃO DE PAGAMENTO S.A","Boleto Amigo","c",""],["d","2025-09",29,"SISTEMAS","",49,1,"DOCK INSTITUIÇÃO DE PAGAMENTO S.A","Boleto Amigo","k",""],["d","2025-09",30,"EMPRESA PRESTADORA DE SERVIÇOS","",450,1,"LM SINALIZACAO E PROJETOS","Boleto Amigo","c",""],["d","2025-09",30,"EMPRESA PRESTADORA DE SERVIÇOS","",450,1,"LM SINALIZACAO E PROJETOS","Boleto Amigo","k",""],["d","2025-09",29,"TARIFAS BANCÁRIAS","",28.49,1,"SISPAG","Boleto Amigo","c",""],["d","2025-09",29,"TARIFAS BANCÁRIAS","",28.49,1,"SISPAG","Boleto Amigo","k",""],["d","2025-09",26,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"EDILEUDO VIEIRA BARROSO","Boleto Amigo","c",""],["d","2025-09",25,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"EDILEUDO VIEIRA BARROSO","Boleto Amigo","k",""],["d","2025-09",26,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","c",""],["d","2025-09",26,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","k",""],["d","2025-09",26,"ENERGIA","",194.39,1,"NEOENERGIA","Boleto Amigo","c",""],["d","2025-09",28,"ENERGIA","",194.39,1,"NEOENERGIA","Boleto Amigo","k",""],["d","2025-09",25,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","c",""],["d","2025-09",25,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","k",""],["d","2025-09",24,"TARIFAS BANCÁRIAS","",15.54,1,"SISPAG","Boleto Amigo","c",""],["d","2025-09",24,"TARIFAS BANCÁRIAS","",15.54,1,"SISPAG","Boleto Amigo","k",""],["d","2025-09",23,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","c",""],["d","2025-09",23,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","k",""],["d","2025-09",23,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"ANTONIO WYTAMAR COELHO DA SILVA CRUZ","Boleto Amigo","c",""],["d","2025-09",23,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"ANTONIO WYTAMAR COELHO DA SILVA CRUZ","Boleto Amigo","k",""],["d","2025-09",22,"SISTEMAS","",467.76,1,"ALGAR TELECOM S/A","Boleto Amigo","c",""],["d","2025-09",20,"SISTEMAS","",467.76,1,"ALGAR TELECOM S/A","Boleto Amigo","k",""],["d","2025-09",22,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","c",""],["d","2025-09",22,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","k",""],["d","2025-09",22,"TARIFAS BANCÁRIAS","",50,1,"SICOOB","Boleto Amigo","c",""],["d","2025-09",22,"TARIFAS BANCÁRIAS","",50,1,"SICOOB","Boleto Amigo","k",""],["d","2025-09",22,"EMPRESA PRESTADORA DE SERVIÇOS","",200,1,"LEANDRO HENRIQUE PEREIRA DE LIRA","Boleto Amigo","c",""],["d","2025-09",22,"EMPRESA PRESTADORA DE SERVIÇOS","",200,1,"LEANDRO HENRIQUE PEREIRA DE LIRA","Boleto Amigo","k",""],["d","2025-09",22,"RESCISÃO CONTRATUAL COM DEVOLUÇÃO DE VALORES","",1000,1,"RIBAMAR RIBEIRO DOS REIS","Boleto Amigo","c",""],["d","2025-09",22,"RESCISÃO CONTRATUAL COM DEVOLUÇÃO DE VALORES","",1000,1,"RIBAMAR RIBEIRO DOS REIS","Boleto Amigo","k",""],["d","2025-09",22,"SISTEMAS","",800,1,"ALGAR TELECOM S/A","Boleto Amigo","c",""],["d","2025-09",20,"SISTEMAS","",800,1,"ALGAR TELECOM S/A","Boleto Amigo","k",""],["d","2025-09",19,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG","Boleto Amigo","c",""],["d","2025-09",19,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG","Boleto Amigo","k",""],["d","2025-09",18,"EMPRESTIMOS A PAGAR","",2000,1,"ECONOMY - CONTA SIMPLES","Boleto Amigo","c",""],["d","2025-09",18,"EMPRESTIMOS A PAGAR","",2000,1,"ECONOMY - CONTA SIMPLES","Boleto Amigo","k",""],["d","2025-09",18,"ALUGUEL","",2968.49,1,"ECONOMY ASSESSORIA - TAGUATINGA","Boleto Amigo","c",""],["d","2025-09",5,"ALUGUEL","",2968.49,1,"ECONOMY ASSESSORIA - TAGUATINGA","Boleto Amigo","k",""],["d","2025-09",18,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","c",""],["d","2025-09",18,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","k",""],["d","2025-09",17,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG","Boleto Amigo","c",""],["d","2025-09",17,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG","Boleto Amigo","k",""],["d","2025-09",16,"FGTS","",295.01,1,"CAIXA ECONOMICA FEDERAL","Boleto Amigo","c",""],["d","2025-09",14,"FGTS","",295.01,1,"CAIXA ECONOMICA FEDERAL","Boleto Amigo","k",""],["d","2025-09",16,"INSS","",403.83,1,"MINISTERIO DA PREVIDENCIA (INSS)","Boleto Amigo","c",""],["d","2025-10",19,"INSS","",403.83,1,"MINISTERIO DA PREVIDENCIA (INSS)","Boleto Amigo","k",""],["d","2025-09",16,"SIMPLES","",315.01,1,"SIMPLES - RECEITA FEDERAL","Boleto Amigo","c",""],["d","2025-09",18,"SIMPLES","",315.01,1,"SIMPLES - RECEITA FEDERAL","Boleto Amigo","k",""],["d","2025-09",15,"ANÚNCIOS DE RÁDIO","",1000,1,"EMMANUEL WESLEY RAMOS DA SOUSA","Boleto Amigo","c",""],["d","2025-09",1,"ANÚNCIOS DE RÁDIO","",1000,1,"EMMANUEL WESLEY RAMOS DA SOUSA","Boleto Amigo","k",""],["d","2025-09",12,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG","Boleto Amigo","c",""],["d","2025-09",12,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG","Boleto Amigo","k",""],["d","2025-09",11,"SISTEMAS","",53.9,1,"DOCK INSTITUIÇÃO DE PAGAMENTO S.A","Boleto Amigo","c",""],["d","2025-08",29,"SISTEMAS","",53.9,1,"DOCK INSTITUIÇÃO DE PAGAMENTO S.A","Boleto Amigo","k",""],["d","2025-09",11,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","c",""],["d","2025-09",11,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","k",""],["d","2025-09",10,"EMPRESA PRESTADORA DE SERVIÇOS","",170,1,"GESTÃO 3","Boleto Amigo","c",""],["d","2025-09",10,"EMPRESA PRESTADORA DE SERVIÇOS","",170,1,"GESTÃO 3","Boleto Amigo","k",""],["d","2025-09",10,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG","Boleto Amigo","c",""],["d","2025-09",10,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG","Boleto Amigo","k",""],["d","2025-09",9,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG","Boleto Amigo","c",""],["d","2025-09",9,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG","Boleto Amigo","k",""],["d","2025-09",9,"EMPRESA PRESTADORA DE SERVIÇOS","",315,1,"PATRON CONSTRUÇÕES E REFORMAS","Boleto Amigo","c",""],["d","2025-09",9,"EMPRESA PRESTADORA DE SERVIÇOS","",315,1,"PATRON CONSTRUÇÕES E REFORMAS","Boleto Amigo","k",""],["d","2025-09",9,"RESSARCIMENTO DE DESPESAS DE CUSTOS OPERACIONAIS (TAG/DF)","",3009.62,1,"ECONOMY ASSESSORIA - TAGUATINGA","Boleto Amigo","c",""],["d","2025-09",9,"RESSARCIMENTO DE DESPESAS DE CUSTOS OPERACIONAIS (TAG/DF)","",3009.62,1,"ECONOMY ASSESSORIA - TAGUATINGA","Boleto Amigo","k",""],["d","2025-09",9,"ALUGUEL DE IMPRESSORA","",200,1,"QUALITY TOTAL LOCAÇÃO DE EQUIPAMENTOS DE INFORMATICA","Boleto Amigo","c",""],["d","2025-09",9,"ALUGUEL DE IMPRESSORA","",200,1,"QUALITY TOTAL LOCAÇÃO DE EQUIPAMENTOS DE INFORMATICA","Boleto Amigo","k",""],["d","2025-09",9,"EMPRESA PRESTADORA DE SERVIÇOS","",1965,1,"PATRON CONSTRUÇÕES E REFORMAS","Boleto Amigo","c",""],["d","2025-09",9,"EMPRESA PRESTADORA DE SERVIÇOS","",1965,1,"PATRON CONSTRUÇÕES E REFORMAS","Boleto Amigo","k",""],["d","2025-09",8,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","c",""],["d","2025-09",8,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","k",""],["d","2025-09",5,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",3131.38,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","c",""],["d","2025-08",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",3131.38,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","k",""],["d","2025-09",5,"PAGAMENTO DE VALE TRANSPORTE","",294,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","c",""],["d","2025-08",6,"PAGAMENTO DE VALE TRANSPORTE","",294,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","k",""],["d","2025-09",5,"PAGAMENTO DE VALE ALIMENTAÇÃO","",700,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","c",""],["d","2025-08",6,"PAGAMENTO DE VALE ALIMENTAÇÃO","",700,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","k",""],["d","2025-09",5,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","c",""],["d","2025-09",5,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","k",""],["d","2025-09",4,"EMPRESA PRESTADORA DE SERVIÇOS","",506,1,"VOGA CONTABILIDADE","Boleto Amigo","c",""],["d","2025-09",5,"EMPRESA PRESTADORA DE SERVIÇOS","",506,1,"VOGA CONTABILIDADE","Boleto Amigo","k",""],["d","2025-09",4,"COMISSÃO INDICAÇÃO DE CLIENTES","",300,1,"CARLOS WIRLEY SANTOS POTIGUARA","Boleto Amigo","c",""],["d","2025-09",3,"COMISSÃO INDICAÇÃO DE CLIENTES","",300,1,"CARLOS WIRLEY SANTOS POTIGUARA","Boleto Amigo","k",""],["d","2025-09",4,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","c",""],["d","2025-09",4,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","k",""],["d","2025-09",4,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"CARLOS WIRLEY SANTOS POTIGUARA","Boleto Amigo","c",""],["d","2025-09",3,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"CARLOS WIRLEY SANTOS POTIGUARA","Boleto Amigo","k",""],["d","2025-09",3,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"VALDENILSON FERREIRA SOARES","Boleto Amigo","c",""],["d","2025-09",3,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"VALDENILSON FERREIRA SOARES","Boleto Amigo","k",""],["d","2025-09",3,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG","Boleto Amigo","c",""],["d","2025-09",3,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG","Boleto Amigo","k",""],["d","2025-09",3,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"MARIA DO CARMO DOS SANTOS NASCIMENTO","Boleto Amigo","c",""],["d","2025-09",1,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"MARIA DO CARMO DOS SANTOS NASCIMENTO","Boleto Amigo","k",""],["d","2025-09",1,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"JOSE MARLON TORRES SARAIVA","Boleto Amigo","c",""],["d","2025-08",4,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"JOSE MARLON TORRES SARAIVA","Boleto Amigo","k",""],["d","2025-09",1,"SISTEMAS","",49,1,"DOCK INSTITUIÇÃO DE PAGAMENTO S.A","Boleto Amigo","c",""],["d","2025-07",29,"SISTEMAS","",49,1,"DOCK INSTITUIÇÃO DE PAGAMENTO S.A","Boleto Amigo","k",""],["d","2025-09",1,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","c",""],["d","2025-09",1,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","k",""],["d","2025-09",1,"META (FACEBOOK E INSTAGRAM)","",53.9,1,"DOCK INSTITUIÇÃO DE PAGAMENTO S.A","Boleto Amigo","c",""],["d","2025-06",29,"META (FACEBOOK E INSTAGRAM)","",53.9,1,"DOCK INSTITUIÇÃO DE PAGAMENTO S.A","Boleto Amigo","k",""],["d","2025-09",1,"FUNDO DE CAIXA ECONOMY (CONTA SIMPLES)","",10000,1,"DOCK IP S.A FUNDO DE CAIXA E INVESTIMENTOS","Boleto Amigo","c",""],["d","2025-09",1,"FUNDO DE CAIXA ECONOMY (CONTA SIMPLES)","",10000,1,"DOCK IP S.A FUNDO DE CAIXA E INVESTIMENTOS","Boleto Amigo","k",""],["d","2025-08",29,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","c",""],["d","2025-08",29,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","k",""],["d","2025-08",28,"ENERGIA","",164.6,1,"NEOENERGIA","Boleto Amigo","c",""],["d","2025-08",28,"ENERGIA","",164.6,1,"NEOENERGIA","Boleto Amigo","k",""],["d","2025-08",28,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG","Boleto Amigo","c",""],["d","2025-08",28,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG","Boleto Amigo","k",""],["d","2025-08",27,"TARIFAS BANCÁRIAS","",23.31,1,"SISPAG","Boleto Amigo","c",""],["d","2025-08",27,"TARIFAS BANCÁRIAS","",23.31,1,"SISPAG","Boleto Amigo","k",""],["d","2025-08",25,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","c",""],["d","2025-08",25,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","k",""],["d","2025-08",22,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","c",""],["d","2025-08",22,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","k",""],["d","2025-08",21,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","c",""],["d","2025-08",21,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","k",""],["d","2025-08",20,"TARIFAS BANCÁRIAS","",50,1,"SICOOB","Boleto Amigo","c",""],["d","2025-08",20,"TARIFAS BANCÁRIAS","",50,1,"SICOOB","Boleto Amigo","k",""],["d","2025-08",20,"SISTEMAS","",473.79,1,"ALGAR TELECOM S/A","Boleto Amigo","c",""],["d","2025-08",20,"SISTEMAS","",473.79,1,"ALGAR TELECOM S/A","Boleto Amigo","k",""],["d","2025-08",20,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","c",""],["d","2025-08",20,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","k",""],["d","2025-08",20,"SISTEMAS","",816.69,1,"ALGAR TELECOM S/A","Boleto Amigo","c",""],["d","2025-08",20,"SISTEMAS","",816.69,1,"ALGAR TELECOM S/A","Boleto Amigo","k",""],["d","2025-08",19,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","c",""],["d","2025-08",19,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","k",""],["d","2025-08",18,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","c",""],["d","2025-08",18,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","k",""],["d","2025-08",15,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","c",""],["d","2025-08",15,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","k",""],["d","2025-08",14,"FGTS","",367.9,1,"CAIXA ECONOMICA FEDERAL","Boleto Amigo","c",""],["d","2025-08",14,"FGTS","",367.9,1,"CAIXA ECONOMICA FEDERAL","Boleto Amigo","k",""],["d","2025-08",14,"INSS","",676.02,1,"MINISTERIO DA PREVIDENCIA (INSS)","Boleto Amigo","c",""],["d","2025-09",19,"INSS","",676.02,1,"MINISTERIO DA PREVIDENCIA (INSS)","Boleto Amigo","k",""],["d","2025-08",14,"ALUGUEL","",2955.75,1,"ECONOMY ASSESSORIA - TAGUATINGA","Boleto Amigo","c",""],["d","2025-08",5,"ALUGUEL","",2955.75,1,"ECONOMY ASSESSORIA - TAGUATINGA","Boleto Amigo","k",""],["d","2025-08",14,"EMPRESTIMOS A PAGAR","",5000,1,"ECONOMY - CONTA SIMPLES","Boleto Amigo","c",""],["d","2025-03",21,"EMPRESTIMOS A PAGAR","",5000,1,"ECONOMY - CONTA SIMPLES","Boleto Amigo","k",""],["d","2025-08",14,"SIMPLES","",300,1,"SIMPLES - RECEITA FEDERAL","Boleto Amigo","c",""],["d","2025-08",18,"SIMPLES","",300,1,"SIMPLES - RECEITA FEDERAL","Boleto Amigo","k",""],["d","2025-08",14,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","c",""],["d","2025-08",14,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","k",""],["d","2025-08",13,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"FRANCISCO MENDES RODRIGUES","Boleto Amigo","c",""],["d","2025-08",13,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"FRANCISCO MENDES RODRIGUES","Boleto Amigo","k",""],["d","2025-08",13,"TARIFAS BANCÁRIAS","",25.9,1,"SISPAG","Boleto Amigo","c",""],["d","2025-08",13,"TARIFAS BANCÁRIAS","",25.9,1,"SISPAG","Boleto Amigo","k",""],["d","2025-08",13,"EMPRESA PRESTADORA DE SERVIÇOS","",20,1,"MARIA EDUARDA ANACLETO","Boleto Amigo","c",""],["d","2025-08",13,"EMPRESA PRESTADORA DE SERVIÇOS","",20,1,"MARIA EDUARDA ANACLETO","Boleto Amigo","k",""],["d","2025-08",13,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"DAYANE DA SILVA SANTANA","Boleto Amigo","c",""],["d","2025-08",13,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"DAYANE DA SILVA SANTANA","Boleto Amigo","k",""],["d","2025-08",12,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG","Boleto Amigo","c",""],["d","2025-08",12,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG","Boleto Amigo","k",""],["d","2025-08",11,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG","Boleto Amigo","c",""],["d","2025-08",11,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG","Boleto Amigo","k",""],["d","2025-08",11,"ALUGUEL DE IMPRESSORA","",200,1,"QUALITY TOTAL LOCAÇÃO DE EQUIPAMENTOS DE INFORMATICA","Boleto Amigo","c",""],["d","2025-08",9,"ALUGUEL DE IMPRESSORA","",200,1,"QUALITY TOTAL LOCAÇÃO DE EQUIPAMENTOS DE INFORMATICA","Boleto Amigo","k",""],["d","2025-08",8,"EMPRESA PRESTADORA DE SERVIÇOS","",820,1,"PATRON CONSTRUÇÕES E REFORMAS","Boleto Amigo","c",""],["d","2025-08",8,"EMPRESA PRESTADORA DE SERVIÇOS","",820,1,"PATRON CONSTRUÇÕES E REFORMAS","Boleto Amigo","k",""],["d","2025-08",8,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","c",""],["d","2025-08",8,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","k",""],["d","2025-08",7,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG","Boleto Amigo","c",""],["d","2025-08",7,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG","Boleto Amigo","k",""],["d","2025-08",6,"PAGAMENTO DE VALE ALIMENTAÇÃO","",770,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","c",""],["d","2025-07",6,"PAGAMENTO DE VALE ALIMENTAÇÃO","",770,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","k",""],["d","2025-08",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",3766.1,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","c",""],["d","2025-07",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",3766.1,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","k",""],["d","2025-08",6,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","c",""],["d","2025-08",6,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","k",""],["d","2025-08",6,"PAGAMENTO DE VALE TRANSPORTE","",322,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","c",""],["d","2025-07",6,"PAGAMENTO DE VALE TRANSPORTE","",322,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","k",""],["d","2025-08",5,"EMPRESA PRESTADORA DE SERVIÇOS","",506,1,"VOGA CONTABILIDADE","Boleto Amigo","c",""],["d","2024-09",2,"EMPRESA PRESTADORA DE SERVIÇOS","",506,1,"VOGA CONTABILIDADE","Boleto Amigo","k",""],["d","2025-08",5,"EMPRESA PRESTADORA DE SERVIÇOS","",310.54,1,"PRINTI","Boleto Amigo","c",""],["d","2025-08",5,"EMPRESA PRESTADORA DE SERVIÇOS","",310.54,1,"PRINTI","Boleto Amigo","k",""],["d","2025-08",4,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","c",""],["d","2025-08",4,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","k",""],["d","2025-08",1,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","c",""],["d","2025-08",1,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","k",""],["d","2025-07",31,"TARIFAS BANCÁRIAS","",15.54,1,"SISPAG","Boleto Amigo","c",""],["d","2025-07",31,"TARIFAS BANCÁRIAS","",15.54,1,"SISPAG","Boleto Amigo","k",""],["d","2025-07",30,"SISTEMAS","",49,1,"DOCK INSTITUIÇÃO DE PAGAMENTO S.A","Boleto Amigo","c",""],["d","2025-06",29,"SISTEMAS","",49,1,"DOCK INSTITUIÇÃO DE PAGAMENTO S.A","Boleto Amigo","k",""],["d","2025-07",30,"DESPESA DE AQUISIÇÃO DE EQUIP OU MANUTENÇÃO","",431.38,1,"AMAZON SERVIÇOS DE VAREJO BRASIL LTDA","Boleto Amigo","c",""],["d","2025-07",30,"DESPESA DE AQUISIÇÃO DE EQUIP OU MANUTENÇÃO","",431.38,1,"AMAZON SERVIÇOS DE VAREJO BRASIL LTDA","Boleto Amigo","k",""],["d","2025-07",30,"EMPRESA PRESTADORA DE SERVIÇOS","",120,1,"GUILHERME PENHA DOS REIS","Boleto Amigo","c",""],["d","2025-07",30,"EMPRESA PRESTADORA DE SERVIÇOS","",120,1,"GUILHERME PENHA DOS REIS","Boleto Amigo","k",""],["d","2025-07",30,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","c",""],["d","2025-07",30,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","k",""],["d","2025-07",29,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","c",""],["d","2025-07",29,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","k",""],["d","2025-07",28,"ENERGIA","",128.24,1,"NEOENERGIA","Boleto Amigo","c",""],["d","2025-07",28,"ENERGIA","",128.24,1,"NEOENERGIA","Boleto Amigo","k",""],["d","2025-07",28,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG","Boleto Amigo","c",""],["d","2025-07",28,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG","Boleto Amigo","k",""],["d","2025-07",25,"SISTEMAS","",5.18,1,"SISPAG","Boleto Amigo","c",""],["d","2025-07",25,"SISTEMAS","",5.18,1,"SISPAG","Boleto Amigo","k",""],["d","2025-07",23,"SISTEMAS","",817.65,1,"ALGAR TELECOM S/A","Boleto Amigo","c",""],["d","2025-07",20,"SISTEMAS","",817.65,1,"ALGAR TELECOM S/A","Boleto Amigo","k",""],["d","2025-07",23,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","c",""],["d","2025-07",23,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","k",""],["d","2025-07",23,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"RAIMUNDO NILSON SANTOS DAS MERCES","Boleto Amigo","c",""],["d","2025-07",23,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"RAIMUNDO NILSON SANTOS DAS MERCES","Boleto Amigo","k",""],["d","2025-07",22,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","c",""],["d","2025-07",22,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","k",""],["d","2025-07",21,"TARIFAS BANCÁRIAS","",50,1,"SICOOB","Boleto Amigo","c",""],["d","2025-07",21,"TARIFAS BANCÁRIAS","",50,1,"SICOOB","Boleto Amigo","k",""],["d","2025-07",23,"SISTEMAS","",469.39,1,"ALGAR TELECOM S/A","Boleto Amigo","c",""],["d","2025-07",20,"SISTEMAS","",469.39,1,"ALGAR TELECOM S/A","Boleto Amigo","k",""],["d","2025-07",18,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","c",""],["d","2025-07",18,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","k",""],["d","2025-07",17,"ALUGUEL","",2812.69,1,"ECONOMY ASSESSORIA - TAGUATINGA","Boleto Amigo","c",""],["d","2025-07",17,"ALUGUEL","",2812.69,1,"ECONOMY ASSESSORIA - TAGUATINGA","Boleto Amigo","k",""],["d","2025-07",17,"INSS","",845.34,1,"MINISTERIO DA PREVIDENCIA (INSS)","Boleto Amigo","c",""],["d","2025-08",19,"INSS","",845.34,1,"MINISTERIO DA PREVIDENCIA (INSS)","Boleto Amigo","k",""],["d","2025-07",17,"FGTS","",405.01,1,"CAIXA ECONOMICA FEDERAL","Boleto Amigo","c",""],["d","2025-07",14,"FGTS","",405.01,1,"CAIXA ECONOMICA FEDERAL","Boleto Amigo","k",""],["d","2025-07",17,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","c",""],["d","2025-07",17,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","k",""],["d","2025-07",17,"ALUGUEL","",2944.23,1,"ECONOMY ASSESSORIA - TAGUATINGA","Boleto Amigo","c",""],["d","2025-07",5,"ALUGUEL","",2944.23,1,"ECONOMY ASSESSORIA - TAGUATINGA","Boleto Amigo","k",""],["d","2025-07",16,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG","Boleto Amigo","c",""],["d","2025-07",16,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG","Boleto Amigo","k",""],["d","2025-07",15,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"RAFAEL MENDES ARAÚJO","Boleto Amigo","c",""],["d","2025-07",15,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"RAFAEL MENDES ARAÚJO","Boleto Amigo","k",""],["d","2025-07",14,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","c",""],["d","2025-07",14,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","k",""],["d","2025-07",11,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","c",""],["d","2025-07",11,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","k",""],["d","2025-07",10,"RESCISÃO CONTRATUAL COM DEVOLUÇÃO DE VALORES","",700,1,"ADAISA ANDRADE SOARES","Boleto Amigo","c",""],["d","2025-07",10,"RESCISÃO CONTRATUAL COM DEVOLUÇÃO DE VALORES","",700,1,"ADAISA ANDRADE SOARES","Boleto Amigo","k",""],["d","2025-07",10,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG","Boleto Amigo","c",""],["d","2025-07",10,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG","Boleto Amigo","k",""],["d","2025-07",9,"TARIFAS BANCÁRIAS","",18.13,1,"SISPAG","Boleto Amigo","c",""],["d","2025-07",9,"TARIFAS BANCÁRIAS","",18.13,1,"SISPAG","Boleto Amigo","k",""],["d","2025-07",9,"EMPRESA PRESTADORA DE SERVIÇOS","",70,1,"ANTONIO FERREIRA DA SILVA SOBRINHO","Boleto Amigo","c",""],["d","2025-07",9,"EMPRESA PRESTADORA DE SERVIÇOS","",70,1,"ANTONIO FERREIRA DA SILVA SOBRINHO","Boleto Amigo","k",""],["d","2025-07",9,"ALUGUEL DE IMPRESSORA","",200,1,"QUALITY TOTAL LOCAÇÃO DE EQUIPAMENTOS DE INFORMATICA","Boleto Amigo","c",""],["d","2025-07",9,"ALUGUEL DE IMPRESSORA","",200,1,"QUALITY TOTAL LOCAÇÃO DE EQUIPAMENTOS DE INFORMATICA","Boleto Amigo","k",""],["d","2025-07",8,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","c",""],["d","2025-07",8,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","k",""],["d","2025-07",7,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","c",""],["d","2025-07",7,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","k",""],["d","2025-07",7,"EMPRESA PRESTADORA DE SERVIÇOS","",506,1,"VOGA CONTABILIDADE","Boleto Amigo","c",""],["d","2024-09",2,"EMPRESA PRESTADORA DE SERVIÇOS","",506,1,"VOGA CONTABILIDADE","Boleto Amigo","k",""],["d","2025-07",4,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG","Boleto Amigo","c",""],["d","2025-07",4,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG","Boleto Amigo","k",""],["d","2025-07",4,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",4060.67,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","c",""],["d","2025-06",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",4060.67,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","k",""],["d","2025-07",4,"PAGAMENTO DE VALE ALIMENTAÇÃO","",770,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","c",""],["d","2025-06",6,"PAGAMENTO DE VALE ALIMENTAÇÃO","",770,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","k",""],["d","2025-07",4,"PAGAMENTO DE VALE TRANSPORTE","",322,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","c",""],["d","2025-06",6,"PAGAMENTO DE VALE TRANSPORTE","",322,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","k",""],["d","2025-07",3,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"JUSCELINO ALVES KARDEC","Boleto Amigo","c",""],["d","2025-07",3,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"JUSCELINO ALVES KARDEC","Boleto Amigo","k",""],["d","2025-07",3,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"JOSE MANOEL DOS SANTOS JUNIOR","Boleto Amigo","c",""],["d","2025-07",2,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"JOSE MANOEL DOS SANTOS JUNIOR","Boleto Amigo","k",""],["d","2025-07",3,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG","Boleto Amigo","c",""],["d","2025-07",3,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG","Boleto Amigo","k",""],["d","2025-07",3,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"GERSON FARIAS ARAUJO","Boleto Amigo","c",""],["d","2025-07",3,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"GERSON FARIAS ARAUJO","Boleto Amigo","k",""],["d","2025-07",2,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","c",""],["d","2025-07",2,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","k",""],["d","2025-07",1,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","c",""],["d","2025-07",1,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","k",""],["d","2025-06",30,"META (FACEBOOK E INSTAGRAM)","",53.9,1,"DOCK INSTITUIÇÃO DE PAGAMENTO S.A","Boleto Amigo","c",""],["d","2025-05",29,"META (FACEBOOK E INSTAGRAM)","",53.9,1,"DOCK INSTITUIÇÃO DE PAGAMENTO S.A","Boleto Amigo","k",""],["d","2025-06",30,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG","Boleto Amigo","c",""],["d","2025-06",30,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG","Boleto Amigo","k",""],["d","2025-06",30,"SISTEMAS","",50,1,"DOCK INSTITUIÇÃO DE PAGAMENTO S.A","Boleto Amigo","c",""],["d","2025-05",29,"SISTEMAS","",50,1,"DOCK INSTITUIÇÃO DE PAGAMENTO S.A","Boleto Amigo","k",""],["d","2025-06",30,"RESCISÃO CONTRATUAL COM DEVOLUÇÃO DE VALORES","",1291.04,1,"JOSEMAR RODRIGUES DOS SANTOS","Boleto Amigo","c",""],["d","2025-06",30,"RESCISÃO CONTRATUAL COM DEVOLUÇÃO DE VALORES","",1291.04,1,"JOSEMAR RODRIGUES DOS SANTOS","Boleto Amigo","k",""],["d","2025-06",27,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","c",""],["d","2025-06",27,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","k",""],["d","2025-06",27,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"THAYNARA KIMBERLY LUSTOSA DA VEIGA","Boleto Amigo","c",""],["d","2025-06",27,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"THAYNARA KIMBERLY LUSTOSA DA VEIGA","Boleto Amigo","k",""],["d","2025-06",27,"ALUGUEL","",2808.87,1,"ECONOMY ASSESSORIA - TAGUATINGA","Boleto Amigo","c",""],["d","2025-06",5,"ALUGUEL","",2808.87,1,"ECONOMY ASSESSORIA - TAGUATINGA","Boleto Amigo","k",""],["d","2025-06",25,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG","Boleto Amigo","c",""],["d","2025-06",25,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG","Boleto Amigo","k",""],["d","2025-06",25,"COMISSÃO INDICAÇÃO DE CLIENTES","",300,1,"DENISE GRACA DOS SANTOS","Boleto Amigo","c",""],["d","2025-06",23,"COMISSÃO INDICAÇÃO DE CLIENTES","",300,1,"DENISE GRACA DOS SANTOS","Boleto Amigo","k",""],["d","2025-06",25,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"DENISE GRACA DOS SANTOS","Boleto Amigo","c",""],["d","2025-06",23,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"DENISE GRACA DOS SANTOS","Boleto Amigo","k",""],["d","2025-06",25,"SISTEMAS","",459.25,1,"ALGAR TELECOM S/A","Boleto Amigo","c",""],["d","2025-06",20,"SISTEMAS","",459.25,1,"ALGAR TELECOM S/A","Boleto Amigo","k",""],["d","2025-06",25,"SISTEMAS","",800,1,"ALGAR TELECOM S/A","Boleto Amigo","c",""],["d","2025-06",20,"SISTEMAS","",800,1,"ALGAR TELECOM S/A","Boleto Amigo","k",""],["d","2025-06",25,"ENERGIA","",157.5,1,"NEOENERGIA","Boleto Amigo","c",""],["d","2025-06",28,"ENERGIA","",157.5,1,"NEOENERGIA","Boleto Amigo","k",""],["d","2025-06",24,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG","Boleto Amigo","c",""],["d","2025-06",24,"TARIFAS BANCÁRIAS","",7.77,1,"SISPAG","Boleto Amigo","k",""],["d","2025-06",23,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","c",""],["d","2025-06",23,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","k",""],["d","2025-06",20,"TARIFAS BANCÁRIAS","",50,1,"SICOOB","Boleto Amigo","c",""],["d","2025-06",20,"TARIFAS BANCÁRIAS","",50,1,"SICOOB","Boleto Amigo","k",""],["d","2025-06",19,"INSS","",510.27,1,"MINISTERIO DA PREVIDENCIA (INSS)","Boleto Amigo","c",""],["d","2025-07",19,"INSS","",510.27,1,"MINISTERIO DA PREVIDENCIA (INSS)","Boleto Amigo","k",""],["d","2025-06",19,"FGTS","",326.55,1,"CAIXA ECONOMICA FEDERAL","Boleto Amigo","c",""],["d","2025-06",19,"FGTS","",326.55,1,"CAIXA ECONOMICA FEDERAL","Boleto Amigo","k",""],["d","2025-06",18,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","c",""],["d","2025-06",18,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","k",""],["d","2025-06",12,"EMPRESA PRESTADORA DE SERVIÇOS","",200,1,"LEANDRO HENRIQUE PEREIRA DE LIRA","Boleto Amigo","c",""],["d","2025-06",12,"EMPRESA PRESTADORA DE SERVIÇOS","",200,1,"LEANDRO HENRIQUE PEREIRA DE LIRA","Boleto Amigo","k",""],["d","2025-06",12,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","c",""],["d","2025-06",12,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","k",""],["d","2025-06",11,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG","Boleto Amigo","c",""],["d","2025-06",11,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG","Boleto Amigo","k",""],["d","2025-06",10,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","c",""],["d","2025-06",10,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","k",""],["d","2025-06",9,"ALUGUEL DE IMPRESSORA","",200,1,"QUALITY TOTAL LOCAÇÃO DE EQUIPAMENTOS DE INFORMATICA","Boleto Amigo","c",""],["d","2025-06",5,"ALUGUEL DE IMPRESSORA","",200,1,"QUALITY TOTAL LOCAÇÃO DE EQUIPAMENTOS DE INFORMATICA","Boleto Amigo","k",""],["d","2025-06",9,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","c",""],["d","2025-06",9,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","k",""],["d","2025-06",6,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","c",""],["d","2025-06",6,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","k",""],["d","2025-06",5,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",3419.17,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","c",""],["d","2025-05",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",3419.17,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","k",""],["d","2025-06",5,"PAGAMENTO DE VALE ALIMENTAÇÃO","",700,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","c",""],["d","2025-05",6,"PAGAMENTO DE VALE ALIMENTAÇÃO","",700,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","k",""],["d","2025-06",5,"PAGAMENTO DE VALE TRANSPORTE","",294,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","c",""],["d","2025-05",6,"PAGAMENTO DE VALE TRANSPORTE","",294,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","k",""],["d","2025-06",5,"EMPRESA PRESTADORA DE SERVIÇOS","",506,1,"VOGA CONTABILIDADE","Boleto Amigo","c",""],["d","2024-09",2,"EMPRESA PRESTADORA DE SERVIÇOS","",506,1,"VOGA CONTABILIDADE","Boleto Amigo","k",""],["d","2025-06",4,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","c",""],["d","2025-06",4,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","k",""],["d","2025-05",30,"EMPRESA PRESTADORA DE SERVIÇOS","",44,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","c",""],["d","2025-05",30,"EMPRESA PRESTADORA DE SERVIÇOS","",44,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","k",""],["d","2025-05",30,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","c",""],["d","2025-05",30,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","k",""],["d","2025-05",29,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","c",""],["d","2025-05",29,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","k",""],["d","2025-05",28,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","c",""],["d","2025-05",28,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","k",""],["d","2025-05",28,"ENERGIA","",150.9,1,"NEOENERGIA","Boleto Amigo","c",""],["d","2025-05",28,"ENERGIA","",150.9,1,"NEOENERGIA","Boleto Amigo","k",""],["d","2025-05",27,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","c",""],["d","2025-05",27,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","k",""],["d","2025-05",26,"EMPRESA PRESTADORA DE SERVIÇOS","",10,1,"ARIANE KATLE SILVA SOARES","Boleto Amigo","c",""],["d","2025-05",26,"EMPRESA PRESTADORA DE SERVIÇOS","",10,1,"ARIANE KATLE SILVA SOARES","Boleto Amigo","k",""],["d","2025-05",26,"META (FACEBOOK E INSTAGRAM)","",53.9,1,"DOCK INSTITUIÇÃO DE PAGAMENTO S.A","Boleto Amigo","c",""],["d","2025-04",29,"META (FACEBOOK E INSTAGRAM)","",53.9,1,"DOCK INSTITUIÇÃO DE PAGAMENTO S.A","Boleto Amigo","k",""],["d","2025-05",26,"SISTEMAS","",49,1,"DOCK INSTITUIÇÃO DE PAGAMENTO S.A","Boleto Amigo","c",""],["d","2025-04",29,"SISTEMAS","",49,1,"DOCK INSTITUIÇÃO DE PAGAMENTO S.A","Boleto Amigo","k",""],["d","2025-05",22,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","c",""],["d","2025-05",22,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","k",""],["d","2025-05",21,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","c",""],["d","2025-05",21,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","k",""],["d","2025-05",20,"SISTEMAS","",773.34,1,"ALGAR TELECOM S/A","Boleto Amigo","c",""],["d","2025-05",20,"SISTEMAS","",773.34,1,"ALGAR TELECOM S/A","Boleto Amigo","k",""],["d","2025-05",20,"SISTEMAS","",459.25,1,"ALGAR TELECOM S/A","Boleto Amigo","c",""],["d","2025-05",20,"SISTEMAS","",459.25,1,"ALGAR TELECOM S/A","Boleto Amigo","k",""],["d","2025-05",20,"TARIFAS BANCÁRIAS","",50,1,"SICOOB","Boleto Amigo","c",""],["d","2025-05",20,"TARIFAS BANCÁRIAS","",50,1,"SICOOB","Boleto Amigo","k",""],["d","2025-05",19,"FGTS","",337.67,1,"CAIXA ECONOMICA FEDERAL","Boleto Amigo","c",""],["d","2025-05",14,"FGTS","",337.67,1,"CAIXA ECONOMICA FEDERAL","Boleto Amigo","k",""],["d","2025-05",19,"INSS","",567.48,1,"MINISTERIO DA PREVIDENCIA (INSS)","Boleto Amigo","c",""],["d","2025-06",19,"INSS","",567.48,1,"MINISTERIO DA PREVIDENCIA (INSS)","Boleto Amigo","k",""],["d","2025-05",16,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","c",""],["d","2025-05",16,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","k",""],["d","2025-05",15,"TARIFAS BANCÁRIAS","",2.59,1,"SICOOB","Boleto Amigo","c",""],["d","2025-05",15,"TARIFAS BANCÁRIAS","",2.59,1,"SICOOB","Boleto Amigo","k",""],["d","2025-05",14,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","c",""],["d","2025-05",14,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","k",""],["d","2025-05",13,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","c",""],["d","2025-05",13,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","k",""],["d","2025-05",13,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"GLEICILENE DE SOUZA TRINDADE","Boleto Amigo","c",""],["d","2025-05",12,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"GLEICILENE DE SOUZA TRINDADE","Boleto Amigo","k",""],["d","2025-05",13,"DESPESA DE AQUISIÇÃO DE EQUIP OU MANUTENÇÃO","",167,1,"MERCADO LIVRE","Boleto Amigo","c",""],["d","2025-04",29,"DESPESA DE AQUISIÇÃO DE EQUIP OU MANUTENÇÃO","",167,1,"MERCADO LIVRE","Boleto Amigo","k",""],["d","2025-05",13,"COMISSÕES","",200,1,"THAYNARA KIMBERLY LUSTOSA DA VEIGA","Boleto Amigo","c",""],["d","2025-05",13,"COMISSÕES","",200,1,"THAYNARA KIMBERLY LUSTOSA DA VEIGA","Boleto Amigo","k",""],["d","2025-05",12,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","c",""],["d","2025-05",12,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","k",""],["d","2025-05",9,"ALUGUEL DE IMPRESSORA","",200,1,"QUALITY TOTAL LOCAÇÃO DE EQUIPAMENTOS DE INFORMATICA","Boleto Amigo","c",""],["d","2025-05",5,"ALUGUEL DE IMPRESSORA","",200,1,"QUALITY TOTAL LOCAÇÃO DE EQUIPAMENTOS DE INFORMATICA","Boleto Amigo","k",""],["d","2025-05",8,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","c",""],["d","2025-05",8,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","k",""],["d","2025-05",7,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","c",""],["d","2025-05",7,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","k",""],["d","2025-05",6,"PAGAMENTO DE VALE ALIMENTAÇÃO","",805,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","c",""],["d","2025-04",6,"PAGAMENTO DE VALE ALIMENTAÇÃO","",805,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","k",""],["d","2025-05",6,"PAGAMENTO DE VALE TRANSPORTE","",336,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","c",""],["d","2025-04",6,"PAGAMENTO DE VALE TRANSPORTE","",336,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","k",""],["d","2025-05",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",3494.68,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","c",""],["d","2025-04",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",3494.68,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","k",""],["d","2025-05",5,"EMPRESA PRESTADORA DE SERVIÇOS","",506,1,"VOGA CONTABILIDADE","Boleto Amigo","c",""],["d","2024-09",2,"EMPRESA PRESTADORA DE SERVIÇOS","",506,1,"VOGA CONTABILIDADE","Boleto Amigo","k",""],["d","2025-04",30,"Sem categoria","",2.59,1,"-","Boleto Amigo","c",""],["d","2025-04",30,"Sem categoria","",2.59,1,"-","Boleto Amigo","k",""],["d","2025-04",29,"Sem categoria","",12.95,1,"-","Boleto Amigo","c",""],["d","2025-04",29,"Sem categoria","",12.95,1,"-","Boleto Amigo","k",""],["d","2025-04",23,"ENERGIA","",168.6,1,"NEOENERGIA","Boleto Amigo","c",""],["d","2025-04",28,"ENERGIA","",168.6,1,"NEOENERGIA","Boleto Amigo","k",""],["d","2025-04",25,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"IAGO PEREIRA PINTO","Boleto Amigo","c",""],["d","2025-04",24,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"IAGO PEREIRA PINTO","Boleto Amigo","k",""],["d","2025-04",25,"META (FACEBOOK E INSTAGRAM)","",53.9,1,"DOCK INSTITUIÇÃO DE PAGAMENTO S.A","Boleto Amigo","c",""],["d","2025-03",29,"META (FACEBOOK E INSTAGRAM)","",53.9,1,"DOCK INSTITUIÇÃO DE PAGAMENTO S.A","Boleto Amigo","k",""],["d","2025-04",25,"SISTEMAS","",49,1,"DOCK INSTITUIÇÃO DE PAGAMENTO S.A","Boleto Amigo","c",""],["d","2025-03",29,"SISTEMAS","",49,1,"DOCK INSTITUIÇÃO DE PAGAMENTO S.A","Boleto Amigo","k",""],["d","2025-04",23,"ALUGUEL","",2387.79,1,"ERBE INCORPORADORA","Boleto Amigo","c",""],["d","2025-04",5,"ALUGUEL","",2387.79,1,"ERBE INCORPORADORA","Boleto Amigo","k",""],["d","2025-04",25,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"IVNA SAMARA DE LIMA","Boleto Amigo","c",""],["d","2025-04",24,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"IVNA SAMARA DE LIMA","Boleto Amigo","k",""],["d","2025-04",24,"Sem categoria","",2.59,1,"-","Boleto Amigo","c",""],["d","2025-04",24,"Sem categoria","",2.59,1,"-","Boleto Amigo","k",""],["d","2025-04",23,"Sem categoria","",5.18,1,"-","Boleto Amigo","c",""],["d","2025-04",23,"Sem categoria","",5.18,1,"-","Boleto Amigo","k",""],["d","2025-04",22,"SISTEMAS","",800.01,1,"ALGAR TELECOM S/A","Boleto Amigo","c",""],["d","2025-06",20,"SISTEMAS","",800.01,1,"ALGAR TELECOM S/A","Boleto Amigo","k",""],["d","2025-04",22,"SISTEMAS","",459.25,1,"ALGAR TELECOM S/A","Boleto Amigo","c",""],["d","2025-07",20,"SISTEMAS","",459.25,1,"ALGAR TELECOM S/A","Boleto Amigo","k",""],["d","2025-04",22,"TARIFAS BANCÁRIAS","",50,1,"SICOOB","Boleto Amigo","c",""],["d","2025-04",22,"TARIFAS BANCÁRIAS","",50,1,"SICOOB","Boleto Amigo","k",""],["d","2025-04",17,"Sem categoria","",2.59,1,"-","Boleto Amigo","c",""],["d","2025-04",17,"Sem categoria","",2.59,1,"-","Boleto Amigo","k",""],["d","2025-04",16,"Sem categoria","",2.59,1,"-","Boleto Amigo","c",""],["d","2025-04",16,"Sem categoria","",2.59,1,"-","Boleto Amigo","k",""],["d","2025-04",15,"Sem categoria","",2.59,1,"-","Boleto Amigo","c",""],["d","2025-04",15,"Sem categoria","",2.59,1,"-","Boleto Amigo","k",""],["d","2025-04",16,"INSS","",286.34,1,"MINISTERIO DA PREVIDENCIA (INSS)","Boleto Amigo","c",""],["d","2025-05",19,"INSS","",286.34,1,"MINISTERIO DA PREVIDENCIA (INSS)","Boleto Amigo","k",""],["d","2025-04",16,"FGTS","",248.09,1,"CAIXA ECONOMICA FEDERAL","Boleto Amigo","c",""],["d","2025-04",14,"FGTS","",248.09,1,"CAIXA ECONOMICA FEDERAL","Boleto Amigo","k",""],["d","2025-04",14,"Sem categoria","",5.18,1,"-","Boleto Amigo","c",""],["d","2025-04",14,"Sem categoria","",5.18,1,"-","Boleto Amigo","k",""],["d","2025-04",14,"OUTRAS DESPESAS","",70,1,"MARIA EDUARDA ANACLETO","Boleto Amigo","c",""],["d","2025-03",28,"OUTRAS DESPESAS","",70,1,"MARIA EDUARDA ANACLETO","Boleto Amigo","k",""],["d","2025-04",11,"Sem categoria","",2.59,1,"-","Boleto Amigo","c",""],["d","2025-04",11,"Sem categoria","",2.59,1,"-","Boleto Amigo","k",""],["d","2025-04",10,"Sem categoria","",5.18,1,"-","Boleto Amigo","c",""],["d","2025-04",10,"Sem categoria","",5.18,1,"-","Boleto Amigo","k",""],["d","2025-04",9,"ALUGUEL DE IMPRESSORA","",200,1,"QUALITY TOTAL LOCAÇÃO DE EQUIPAMENTOS DE INFORMATICA","Boleto Amigo","c",""],["d","2025-04",5,"ALUGUEL DE IMPRESSORA","",200,1,"QUALITY TOTAL LOCAÇÃO DE EQUIPAMENTOS DE INFORMATICA","Boleto Amigo","k",""],["d","2025-04",9,"Sem categoria","",7.77,1,"-","Boleto Amigo","c",""],["d","2025-04",9,"Sem categoria","",7.77,1,"-","Boleto Amigo","k",""],["d","2025-04",8,"EMPRESA PRESTADORA DE SERVIÇOS","",516.13,1,"VOGA CONTABILIDADE","Boleto Amigo","c",""],["d","2024-09",2,"EMPRESA PRESTADORA DE SERVIÇOS","",516.13,1,"VOGA CONTABILIDADE","Boleto Amigo","k",""],["d","2025-04",8,"Sem categoria","",7.77,1,"-","Boleto Amigo","c",""],["d","2025-04",8,"Sem categoria","",7.77,1,"-","Boleto Amigo","k",""],["d","2025-04",3,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",2662.45,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","c",""],["d","2025-03",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",2662.45,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","k",""],["d","2025-04",3,"PAGAMENTO DE VALE ALIMENTAÇÃO","",700,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","c",""],["d","2025-03",6,"PAGAMENTO DE VALE ALIMENTAÇÃO","",700,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","k",""],["d","2025-04",3,"PAGAMENTO DE VALE TRANSPORTE","",294,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","c",""],["d","2025-03",6,"PAGAMENTO DE VALE TRANSPORTE","",294,1,"MARIA EDUARDA ANACLETO SILVA","Boleto Amigo","k",""],["d","2025-04",4,"Sem categoria","",5.18,1,"-","Boleto Amigo","c",""],["d","2025-04",4,"Sem categoria","",5.18,1,"-","Boleto Amigo","k",""],["d","2025-03",31,"Sem categoria","",2.59,1,"-","Boleto Amigo","c",""],["d","2025-03",31,"Sem categoria","",2.59,1,"-","Boleto Amigo","k",""],["d","2025-03",24,"ALUGUEL","",2323,1,"ERBE INCORPORADORA","Boleto Amigo","c",""],["d","2025-03",5,"ALUGUEL","",2323,1,"ERBE INCORPORADORA","Boleto Amigo","k",""],["d","2025-03",28,"ENERGIA","",236.14,1,"NEOENERGIA","Boleto Amigo","c",""],["d","2025-03",28,"ENERGIA","",236.14,1,"NEOENERGIA","Boleto Amigo","k",""],["d","2025-03",27,"COMISSÕES","",200,1,"JOÃO HILÁRIO ROCHA MACIEL","Boleto Amigo","c",""],["d","2025-03",27,"COMISSÕES","",200,1,"JOÃO HILÁRIO ROCHA MACIEL","Boleto Amigo","k",""],["d","2025-03",27,"Sem categoria","",2.59,1,"-","Boleto Amigo","c",""],["d","2025-03",27,"Sem categoria","",2.59,1,"-","Boleto Amigo","k",""],["d","2025-03",26,"Sem categoria","",5.18,1,"-","Boleto Amigo","c",""],["d","2025-03",26,"Sem categoria","",5.18,1,"-","Boleto Amigo","k",""],["d","2025-03",20,"Sem categoria","",2.59,1,"-","Boleto Amigo","c",""],["d","2025-03",20,"Sem categoria","",2.59,1,"-","Boleto Amigo","k",""],["d","2025-03",20,"SISTEMAS","",459.25,1,"ALGAR TELECOM S/A","Boleto Amigo","c",""],["d","2025-05",20,"SISTEMAS","",459.25,1,"ALGAR TELECOM S/A","Boleto Amigo","k",""],["d","2025-03",20,"TARIFAS BANCÁRIAS","",50,1,"SICOOB","Boleto Amigo","c",""],["d","2025-03",20,"TARIFAS BANCÁRIAS","",50,1,"SICOOB","Boleto Amigo","k",""],["d","2025-03",20,"SISTEMAS","",800,1,"ALGAR TELECOM S/A","Boleto Amigo","c",""],["d","2025-04",20,"SISTEMAS","",800,1,"ALGAR TELECOM S/A","Boleto Amigo","k",""],["d","2025-03",19,"Sem categoria","",5.18,1,"-","Boleto Amigo","c",""],["d","2025-03",19,"Sem categoria","",5.18,1,"-","Boleto Amigo","k",""],["d","2025-03",19,"COMISSÕES","",200,1,"FRANCISCO ANTONIO DA SILVA","Boleto Amigo","c",""],["d","2025-03",19,"COMISSÕES","",200,1,"FRANCISCO ANTONIO DA SILVA","Boleto Amigo","k",""],["d","2025-03",18,"Sem categoria","",5.18,1,"-","Boleto Amigo","c",""],["d","2025-03",18,"Sem categoria","",5.18,1,"-","Boleto Amigo","k",""],["d","2025-03",13,"INSS","",324.04,1,"MINISTERIO DA PREVIDENCIA (INSS)","Boleto Amigo","c",""],["d","2025-04",19,"INSS","",324.04,1,"MINISTERIO DA PREVIDENCIA (INSS)","Boleto Amigo","k",""],["d","2025-03",17,"RESCISÃO CONTRATUAL COM DEVOLUÇÃO DE VALORES","",875,1,"JUCICLEIDE SANTOS RAMOS","Boleto Amigo","c",""],["d","2025-03",14,"RESCISÃO CONTRATUAL COM DEVOLUÇÃO DE VALORES","",875,1,"JUCICLEIDE SANTOS RAMOS","Boleto Amigo","k",""],["d","2025-03",13,"FGTS","",277.72,1,"CAIXA ECONOMICA FEDERAL","Boleto Amigo","c",""],["d","2025-03",14,"FGTS","",277.72,1,"CAIXA ECONOMICA FEDERAL","Boleto Amigo","k",""],["d","2025-03",14,"Sem categoria","",2.59,1,"-","Boleto Amigo","c",""],["d","2025-03",14,"Sem categoria","",2.59,1,"-","Boleto Amigo","k",""],["d","2025-03",13,"Sem categoria","",5.18,1,"-","Boleto Amigo","c",""],["d","2025-03",13,"Sem categoria","",5.18,1,"-","Boleto Amigo","k",""],["d","2025-03",12,"Sem categoria","",7.77,1,"-","Boleto Amigo","c",""],["d","2025-03",12,"Sem categoria","",7.77,1,"-","Boleto Amigo","k",""],["d","2025-03",12,"GOOGLE ADS","",1000,1,"GOOGLE BRASIL INTERNET LTDA","Boleto Amigo","c",""],["d","2025-03",5,"GOOGLE ADS","",1000,1,"GOOGLE BRASIL INTERNET LTDA","Boleto Amigo","k",""],["d","2025-03",11,"Sem categoria","",5.18,1,"-","Boleto Amigo","c",""],["d","2025-03",11,"Sem categoria","",5.18,1,"-","Boleto Amigo","k",""],["d","2025-03",11,"META (FACEBOOK E INSTAGRAM)","",2000,1,"FACEBOOK CNPJ: 13.347.016/0001-17","Boleto Amigo","c",""],["d","2024-12",1,"META (FACEBOOK E INSTAGRAM)","",2000,1,"FACEBOOK CNPJ: 13.347.016/0001-17","Boleto Amigo","k",""],["d","2025-03",10,"ALUGUEL DE IMPRESSORA","",200,1,"QUALITY TOTAL LOCAÇÃO DE EQUIPAMENTOS DE INFORMATICA","Boleto Amigo","c",""],["d","2025-03",5,"ALUGUEL DE IMPRESSORA","",200,1,"QUALITY TOTAL LOCAÇÃO DE EQUIPAMENTOS DE INFORMATICA","Boleto Amigo","k",""],["d","2025-03",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",168,1,"GABRIELLE RODRIGUES COSTA","Boleto Amigo","c",""],["d","2025-03",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",168,1,"GABRIELLE RODRIGUES COSTA","Boleto Amigo","k",""],["d","2025-03",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",420,1,"GABRIELLE RODRIGUES COSTA","Boleto Amigo","c",""],["d","2025-03",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",420,1,"GABRIELLE RODRIGUES COSTA","Boleto Amigo","k",""],["d","2025-03",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",2758.86,1,"GABRIELLE RODRIGUES COSTA","Boleto Amigo","c",""],["d","2025-03",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",2758.86,1,"GABRIELLE RODRIGUES COSTA","Boleto Amigo","k",""],["d","2025-03",5,"EMPRESA PRESTADORA DE SERVIÇOS","",505.97,1,"VOGA CONTABILIDADE","Boleto Amigo","c",""],["d","2024-09",2,"EMPRESA PRESTADORA DE SERVIÇOS","",505.97,1,"VOGA CONTABILIDADE","Boleto Amigo","k",""],["d","2025-02",28,"Sem categoria","",2.59,1,"-","Boleto Amigo","c",""],["d","2025-02",28,"Sem categoria","",2.59,1,"-","Boleto Amigo","k",""],["d","2025-02",26,"SISTEMAS","",50,1,"DOCK INSTITUIÇÃO DE PAGAMENTO S.A","Boleto Amigo","c",""],["d","2025-03",1,"SISTEMAS","",50,1,"DOCK INSTITUIÇÃO DE PAGAMENTO S.A","Boleto Amigo","k",""],["d","2025-02",26,"META (FACEBOOK E INSTAGRAM)","",27.9,1,"DOCK INSTITUIÇÃO DE PAGAMENTO S.A","Boleto Amigo","c",""],["d","2025-02",27,"META (FACEBOOK E INSTAGRAM)","",27.9,1,"DOCK INSTITUIÇÃO DE PAGAMENTO S.A","Boleto Amigo","k",""],["d","2025-02",27,"Sem categoria","",2.59,1,"-","Boleto Amigo","c",""],["d","2025-02",27,"Sem categoria","",2.59,1,"-","Boleto Amigo","k",""],["d","2025-02",26,"EMPRESTIMOS A PAGAR","",5000,1,"ECONOMY - CONTA SIMPLES","Boleto Amigo","c",""],["d","2025-02",21,"EMPRESTIMOS A PAGAR","",5000,1,"ECONOMY - CONTA SIMPLES","Boleto Amigo","k",""],["d","2025-02",26,"Sem categoria","",5.18,1,"-","Boleto Amigo","c",""],["d","2025-02",26,"Sem categoria","",5.18,1,"-","Boleto Amigo","k",""],["d","2025-02",24,"META (FACEBOOK E INSTAGRAM)","",1500,1,"FACEBOOK CNPJ: 13.347.016/0001-17","Boleto Amigo","c",""],["d","2025-02",24,"META (FACEBOOK E INSTAGRAM)","",1500,1,"FACEBOOK CNPJ: 13.347.016/0001-17","Boleto Amigo","k",""],["d","2025-02",18,"ENERGIA","",165.62,1,"NEOENERGIA","Boleto Amigo","c",""],["d","2025-02",28,"ENERGIA","",165.62,1,"NEOENERGIA","Boleto Amigo","k",""],["d","2025-02",20,"Sem categoria","",2.59,1,"-","Boleto Amigo","c",""],["d","2025-02",20,"Sem categoria","",2.59,1,"-","Boleto Amigo","k",""],["d","2025-02",20,"TARIFAS BANCÁRIAS","",50,1,"SICOOB","Boleto Amigo","c",""],["d","2025-02",20,"TARIFAS BANCÁRIAS","",50,1,"SICOOB","Boleto Amigo","k",""],["d","2025-02",20,"SISTEMAS","",119.88,1,"GODADDY","Boleto Amigo","c",""],["d","2025-02",20,"SISTEMAS","",119.88,1,"GODADDY","Boleto Amigo","k",""],["d","2025-02",19,"Sem categoria","",7.77,1,"-","Boleto Amigo","c",""],["d","2025-02",19,"Sem categoria","",7.77,1,"-","Boleto Amigo","k",""],["d","2025-02",18,"SISTEMAS","",459.25,1,"ALGAR TELECOM S/A","Boleto Amigo","c",""],["d","2025-03",20,"SISTEMAS","",459.25,1,"ALGAR TELECOM S/A","Boleto Amigo","k",""],["d","2025-02",18,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"HÉLIO FLORENTINO DA SILVA RODRIGUES","Boleto Amigo","c",""],["d","2025-02",18,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"HÉLIO FLORENTINO DA SILVA RODRIGUES","Boleto Amigo","k",""],["d","2025-02",18,"Sem categoria","",2.59,1,"-","Boleto Amigo","c",""],["d","2025-02",18,"Sem categoria","",2.59,1,"-","Boleto Amigo","k",""],["d","2025-02",18,"SISTEMAS","",800,1,"ALGAR TELECOM S/A","Boleto Amigo","c",""],["d","2025-02",20,"SISTEMAS","",800,1,"ALGAR TELECOM S/A","Boleto Amigo","k",""],["d","2025-02",7,"EMPRESA PRESTADORA DE SERVIÇOS","",969.86,1,"GODADDY","Boleto Amigo","c",""],["d","2025-02",5,"EMPRESA PRESTADORA DE SERVIÇOS","",969.86,1,"GODADDY","Boleto Amigo","k",""],["d","2025-02",18,"META (FACEBOOK E INSTAGRAM)","",27.9,1,"ECONOMY ASSESSORIA - TAGUATINGA","Boleto Amigo","c",""],["d","2025-01",29,"META (FACEBOOK E INSTAGRAM)","",27.9,1,"ECONOMY ASSESSORIA - TAGUATINGA","Boleto Amigo","k",""],["d","2025-02",18,"SISTEMAS","",1,1,"ECONOMY ASSESSORIA - TAGUATINGA","Boleto Amigo","c",""],["d","2025-01",29,"SISTEMAS","",1,1,"ECONOMY ASSESSORIA - TAGUATINGA","Boleto Amigo","k",""],["d","2025-02",18,"FGTS","",235.99,1,"CAIXA ECONOMICA FEDERAL","Boleto Amigo","c",""],["d","2025-02",14,"FGTS","",235.99,1,"CAIXA ECONOMICA FEDERAL","Boleto Amigo","k",""],["d","2025-02",18,"ALUGUEL","",2289.9,1,"ECONOMY ASSESSORIA - TAGUATINGA","Boleto Amigo","c",""],["d","2025-02",5,"ALUGUEL","",2289.9,1,"ECONOMY ASSESSORIA - TAGUATINGA","Boleto Amigo","k",""],["d","2025-02",14,"Sem categoria","",2.59,1,"-","Boleto Amigo","c",""],["d","2025-02",14,"Sem categoria","",2.59,1,"-","Boleto Amigo","k",""],["d","2025-01",13,"INSS","",379.22,1,"MINISTERIO DA PREVIDENCIA (INSS)","Boleto Amigo","c",""],["d","2025-03",19,"INSS","",379.22,1,"MINISTERIO DA PREVIDENCIA (INSS)","Boleto Amigo","k",""],["d","2025-02",12,"Sem categoria","",7.77,1,"-","Boleto Amigo","c",""],["d","2025-02",12,"Sem categoria","",7.77,1,"-","Boleto Amigo","k",""],["d","2025-02",12,"EMPRESA PRESTADORA DE SERVIÇOS","",463.13,1,"GODADDY","Boleto Amigo","c",""],["d","2025-02",12,"EMPRESA PRESTADORA DE SERVIÇOS","",463.13,1,"GODADDY","Boleto Amigo","k",""],["d","2025-02",11,"Sem categoria","",7.77,1,"-","Boleto Amigo","c",""],["d","2025-02",11,"Sem categoria","",7.77,1,"-","Boleto Amigo","k",""],["d","2025-02",10,"Sem categoria","",2.59,1,"-","Boleto Amigo","c",""],["d","2025-02",10,"Sem categoria","",2.59,1,"-","Boleto Amigo","k",""],["d","2025-02",10,"ALUGUEL DE IMPRESSORA","",187.1,1,"QUALITY TOTAL LOCAÇÃO DE EQUIPAMENTOS DE INFORMATICA","Boleto Amigo","c",""],["d","2025-02",5,"ALUGUEL DE IMPRESSORA","",187.1,1,"QUALITY TOTAL LOCAÇÃO DE EQUIPAMENTOS DE INFORMATICA","Boleto Amigo","k",""],["d","2025-02",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",2413.85,1,"GABRIELLE RODRIGUES COSTA","Boleto Amigo","c",""],["d","2025-02",3,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",2413.85,1,"GABRIELLE RODRIGUES COSTA","Boleto Amigo","k",""],["d","2025-02",6,"PAGAMENTO DE VALE TRANSPORTE","",266,1,"GABRIELLE RODRIGUES COSTA","Boleto Amigo","c",""],["d","2025-01",3,"PAGAMENTO DE VALE TRANSPORTE","",266,1,"GABRIELLE RODRIGUES COSTA","Boleto Amigo","k",""],["d","2025-02",6,"PAGAMENTO DE VALE ALIMENTAÇÃO","",665,1,"GABRIELLE RODRIGUES COSTA","Boleto Amigo","c",""],["d","2025-01",3,"PAGAMENTO DE VALE ALIMENTAÇÃO","",665,1,"GABRIELLE RODRIGUES COSTA","Boleto Amigo","k",""],["d","2025-02",5,"Sem categoria","",5.18,1,"-","Boleto Amigo","c",""],["d","2025-02",5,"Sem categoria","",5.18,1,"-","Boleto Amigo","k",""],["d","2025-02",5,"EMPRESA PRESTADORA DE SERVIÇOS","",505.97,1,"VOGA CONTABILIDADE","Boleto Amigo","c",""],["d","2024-09",2,"EMPRESA PRESTADORA DE SERVIÇOS","",505.97,1,"VOGA CONTABILIDADE","Boleto Amigo","k",""],["d","2025-02",4,"GOOGLE ADS","",500,1,"GOOGLE BRASIL INTERNET LTDA","Boleto Amigo","c",""],["d","2025-02",5,"GOOGLE ADS","",500,1,"GOOGLE BRASIL INTERNET LTDA","Boleto Amigo","k",""],["d","2025-02",3,"Sem categoria","",2.59,1,"-","Boleto Amigo","c",""],["d","2025-02",3,"Sem categoria","",2.59,1,"-","Boleto Amigo","k",""],["d","2025-01",29,"Sem categoria","",7.77,1,"-","Boleto Amigo","c",""],["d","2025-01",29,"Sem categoria","",7.77,1,"-","Boleto Amigo","k",""],["d","2025-01",16,"ENERGIA","",98.02,1,"NEOENERGIA","Boleto Amigo","c",""],["d","2025-01",28,"ENERGIA","",98.02,1,"NEOENERGIA","Boleto Amigo","k",""],["d","2025-01",27,"Sem categoria","",2.59,1,"-","Boleto Amigo","c",""],["d","2025-01",27,"Sem categoria","",2.59,1,"-","Boleto Amigo","k",""],["d","2025-01",22,"RESCISÃO CONTRATUAL COM DEVOLUÇÃO DE VALORES","",200,1,"ANGELICA DE FATIMA FARIAS ALMEIDA FERREIRA","Boleto Amigo","c",""],["d","2025-01",22,"RESCISÃO CONTRATUAL COM DEVOLUÇÃO DE VALORES","",200,1,"ANGELICA DE FATIMA FARIAS ALMEIDA FERREIRA","Boleto Amigo","k",""],["d","2025-01",22,"Sem categoria","",2.59,1,"-","Boleto Amigo","c",""],["d","2025-01",22,"Sem categoria","",2.59,1,"-","Boleto Amigo","k",""],["d","2025-01",21,"DESPESA DE AQUISIÇÃO DE EQUIP OU MANUTENÇÃO","",534.24,1,"AMAZON SERVIÇOS DE VAREJO BRASIL LTDA","Boleto Amigo","c",""],["d","2025-01",21,"DESPESA DE AQUISIÇÃO DE EQUIP OU MANUTENÇÃO","",534.24,1,"AMAZON SERVIÇOS DE VAREJO BRASIL LTDA","Boleto Amigo","k",""],["d","2025-01",17,"SISTEMAS","",459.25,1,"ALGAR TELECOM S/A","Boleto Amigo","c",""],["d","2025-01",20,"SISTEMAS","",459.25,1,"ALGAR TELECOM S/A","Boleto Amigo","k",""],["d","2025-01",20,"TARIFAS BANCÁRIAS","",50,1,"SICOOB","Boleto Amigo","c",""],["d","2025-01",20,"TARIFAS BANCÁRIAS","",50,1,"SICOOB","Boleto Amigo","k",""],["d","2025-01",17,"SISTEMAS","",800,1,"ALGAR TELECOM S/A","Boleto Amigo","c",""],["d","2025-01",13,"SISTEMAS","",800,1,"ALGAR TELECOM S/A","Boleto Amigo","k",""],["d","2025-01",10,"INSS","",379.22,1,"MINISTERIO DA PREVIDENCIA (INSS)","Boleto Amigo","c",""],["d","2025-02",19,"INSS","",379.22,1,"MINISTERIO DA PREVIDENCIA (INSS)","Boleto Amigo","k",""],["d","2025-01",17,"Sem categoria","",5.18,1,"-","Boleto Amigo","c",""],["d","2025-01",17,"Sem categoria","",5.18,1,"-","Boleto Amigo","k",""],["d","2025-01",15,"Sem categoria","",7.77,1,"-","Boleto Amigo","c",""],["d","2025-01",15,"Sem categoria","",7.77,1,"-","Boleto Amigo","k",""],["d","2025-01",15,"ALUGUEL","",2324.27,1,"ERBE INCORPORADORA","Boleto Amigo","c",""],["d","2025-01",5,"ALUGUEL","",2324.27,1,"ERBE INCORPORADORA","Boleto Amigo","k",""],["d","2025-01",14,"Sem categoria","",2.59,1,"-","Boleto Amigo","c",""],["d","2025-01",14,"Sem categoria","",2.59,1,"-","Boleto Amigo","k",""],["d","2025-01",13,"Sem categoria","",5.18,1,"-","Boleto Amigo","c",""],["d","2025-01",13,"Sem categoria","",5.18,1,"-","Boleto Amigo","k",""],["d","2025-01",10,"FGTS","",409.44,1,"CAIXA ECONOMICA FEDERAL","Boleto Amigo","c",""],["d","2025-01",14,"FGTS","",409.44,1,"CAIXA ECONOMICA FEDERAL","Boleto Amigo","k",""],["d","2025-01",9,"ALUGUEL DE IMPRESSORA","",200,1,"QUALITY TOTAL LOCAÇÃO DE EQUIPAMENTOS DE INFORMATICA","Boleto Amigo","c",""],["d","2025-01",5,"ALUGUEL DE IMPRESSORA","",200,1,"QUALITY TOTAL LOCAÇÃO DE EQUIPAMENTOS DE INFORMATICA","Boleto Amigo","k",""],["d","2025-01",9,"Sem categoria","",2.59,1,"-","Boleto Amigo","c",""],["d","2025-01",9,"Sem categoria","",2.59,1,"-","Boleto Amigo","k",""],["d","2024-12",19,"SISTEMAS","",533.34,1,"ALGAR TELECOM S/A","Boleto Amigo","c",""],["d","2025-01",7,"SISTEMAS","",533.34,1,"ALGAR TELECOM S/A","Boleto Amigo","k",""],["d","2025-01",7,"ALUGUEL DE IMPRESSORA","",200,1,"QUALITY TOTAL LOCAÇÃO DE EQUIPAMENTOS DE INFORMATICA","Boleto Amigo","c",""],["d","2025-01",7,"ALUGUEL DE IMPRESSORA","",200,1,"QUALITY TOTAL LOCAÇÃO DE EQUIPAMENTOS DE INFORMATICA","Boleto Amigo","k",""],["d","2025-01",6,"PAGAMENTO DE VALE TRANSPORTE","",322,1,"GABRIELLE RODRIGUES COSTA","Boleto Amigo","c",""],["d","2024-12",3,"PAGAMENTO DE VALE TRANSPORTE","",322,1,"GABRIELLE RODRIGUES COSTA","Boleto Amigo","k",""],["d","2025-01",6,"PAGAMENTO DE VALE ALIMENTAÇÃO","",805,1,"GABRIELLE RODRIGUES COSTA","Boleto Amigo","c",""],["d","2024-12",3,"PAGAMENTO DE VALE ALIMENTAÇÃO","",805,1,"GABRIELLE RODRIGUES COSTA","Boleto Amigo","k",""],["d","2025-01",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",2702.31,1,"GABRIELLE RODRIGUES COSTA","Boleto Amigo","c",""],["d","2025-01",3,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",2702.31,1,"GABRIELLE RODRIGUES COSTA","Boleto Amigo","k",""],["d","2025-01",3,"EMPRESA PRESTADORA DE SERVIÇOS","",470.67,1,"VOGA CONTABILIDADE","Boleto Amigo","c",""],["d","2024-09",2,"EMPRESA PRESTADORA DE SERVIÇOS","",470.67,1,"VOGA CONTABILIDADE","Boleto Amigo","k",""],["d","2024-12",30,"Sem categoria","",12.95,1,"-","Boleto Amigo","c",""],["d","2024-12",30,"Sem categoria","",12.95,1,"-","Boleto Amigo","k",""],["d","2024-12",30,"EMPRESA PRESTADORA DE SERVIÇOS","",650,1,"EVOLUE PRESTAÇÃO","Boleto Amigo","c",""],["d","2024-12",30,"EMPRESA PRESTADORA DE SERVIÇOS","",650,1,"EVOLUE PRESTAÇÃO","Boleto Amigo","k",""],["d","2024-12",20,"ENERGIA","",111.93,1,"NEOENERGIA","Boleto Amigo","c",""],["d","2024-12",28,"ENERGIA","",111.93,1,"NEOENERGIA","Boleto Amigo","k",""],["d","2024-12",26,"Sem categoria","",5.18,1,"-","Boleto Amigo","c",""],["d","2024-12",26,"Sem categoria","",5.18,1,"-","Boleto Amigo","k",""],["d","2024-12",20,"META (FACEBOOK E INSTAGRAM)","",3000,1,"FACEBOOK CNPJ: 13.347.016/0001-17","Boleto Amigo","c",""],["d","2024-11",1,"META (FACEBOOK E INSTAGRAM)","",3000,1,"FACEBOOK CNPJ: 13.347.016/0001-17","Boleto Amigo","k",""],["d","2024-12",19,"SISTEMAS","",590.84,1,"ALGAR TELECOM S/A","Boleto Amigo","c",""],["d","2024-12",20,"SISTEMAS","",590.84,1,"ALGAR TELECOM S/A","Boleto Amigo","k",""],["d","2024-12",20,"TARIFAS BANCÁRIAS","",50,1,"SICOOB","Boleto Amigo","c",""],["d","2024-12",20,"TARIFAS BANCÁRIAS","",50,1,"SICOOB","Boleto Amigo","k",""],["d","2024-12",20,"Sem categoria","",2.59,1,"-","Boleto Amigo","c",""],["d","2024-12",20,"Sem categoria","",2.59,1,"-","Boleto Amigo","k",""],["d","2024-12",19,"ALUGUEL","",2324.28,1,"ECONOMY ASSESSORIA - TAGUATINGA","Boleto Amigo","c",""],["d","2024-12",5,"ALUGUEL","",2324.28,1,"ECONOMY ASSESSORIA - TAGUATINGA","Boleto Amigo","k",""],["d","2024-11",12,"INSS","",309.4,1,"MINISTERIO DA PREVIDENCIA (INSS)","Boleto Amigo","c",""],["d","2024-12",19,"INSS","",309.4,1,"MINISTERIO DA PREVIDENCIA (INSS)","Boleto Amigo","k",""],["d","2024-12",19,"SISTEMAS","",186.66,1,"ALGAR TELECOM S/A","Boleto Amigo","c",""],["d","2025-01",7,"SISTEMAS","",186.66,1,"ALGAR TELECOM S/A","Boleto Amigo","k",""],["d","2024-12",18,"Sem categoria","",5.18,1,"-","Boleto Amigo","c",""],["d","2024-12",18,"Sem categoria","",5.18,1,"-","Boleto Amigo","k",""],["d","2024-12",17,"FGTS","",423.28,1,"CAIXA ECONOMICA FEDERAL","Boleto Amigo","c",""],["d","2024-12",14,"FGTS","",423.28,1,"CAIXA ECONOMICA FEDERAL","Boleto Amigo","k",""],["d","2024-12",17,"INSS","",323.89,1,"MINISTERIO DA PREVIDENCIA (INSS)","Boleto Amigo","c",""],["d","2024-12",12,"INSS","",323.89,1,"MINISTERIO DA PREVIDENCIA (INSS)","Boleto Amigo","k",""],["d","2024-12",16,"INSS","",90.8,1,"MINISTERIO DA PREVIDENCIA (INSS)","Boleto Amigo","c",""],["d","2024-12",16,"INSS","",90.8,1,"MINISTERIO DA PREVIDENCIA (INSS)","Boleto Amigo","k",""],["d","2024-12",16,"EMPRESA PRESTADORA DE SERVIÇOS","",2000,1,"HM NEGOCIOS E SERV LTDA","Boleto Amigo","c","OBRA DA SALA"],["d","2024-11",15,"EMPRESA PRESTADORA DE SERVIÇOS","",2000,1,"HM NEGOCIOS E SERV LTDA","Boleto Amigo","k","OBRA DA SALA"],["d","2024-12",16,"Sem categoria","",5.18,1,"-","Boleto Amigo","c",""],["d","2024-12",16,"Sem categoria","",5.18,1,"-","Boleto Amigo","k",""],["d","2024-12",16,"EMPRESA PRESTADORA DE SERVIÇOS","",4179.92,1,"FABIO SILVA DA VEIGA","Boleto Amigo","c","OBRA DA SALA"],["d","2024-12",9,"EMPRESA PRESTADORA DE SERVIÇOS","",4179.92,1,"FABIO SILVA DA VEIGA","Boleto Amigo","k","OBRA DA SALA"],["d","2024-12",16,"MATERIAL DE ESCRITÓRIO","",393.59,1,"ECONOMY ASSESSORIA - MATRIZ","Boleto Amigo","c","OBRA DA SALA"],["d","2024-11",25,"MATERIAL DE ESCRITÓRIO","",393.59,1,"ECONOMY ASSESSORIA - MATRIZ","Boleto Amigo","k","OBRA DA SALA"],["d","2024-12",16,"MATERIAL DE ESCRITÓRIO","",1321.97,1,"ECONOMY ASSESSORIA - MATRIZ","Boleto Amigo","c","OBRA DA SALA"],["d","2024-11",25,"MATERIAL DE ESCRITÓRIO","",1321.97,1,"ECONOMY ASSESSORIA - MATRIZ","Boleto Amigo","k","OBRA DA SALA"],["d","2024-12",12,"Sem categoria","",2.59,1,"-","Boleto Amigo","c",""],["d","2024-12",12,"Sem categoria","",2.59,1,"-","Boleto Amigo","k",""],["d","2024-12",13,"EMPRESA PRESTADORA DE SERVIÇOS","",470.67,1,"VOGA CONTABILIDADE","Boleto Amigo","c",""],["d","2024-12",12,"EMPRESA PRESTADORA DE SERVIÇOS","",470.67,1,"VOGA CONTABILIDADE","Boleto Amigo","k",""],["d","2024-12",11,"PAGAMENTO DE 13º","",1513.65,1,"GABRIELLE RODRIGUES COSTA","Boleto Amigo","c",""],["d","2024-12",13,"PAGAMENTO DE 13º","",1513.65,1,"GABRIELLE RODRIGUES COSTA","Boleto Amigo","k",""],["d","2024-12",11,"Sem categoria","",5.18,1,"-","Boleto Amigo","c",""],["d","2024-12",11,"Sem categoria","",5.18,1,"-","Boleto Amigo","k",""],["d","2024-12",10,"Sem categoria","",5.18,1,"-","Boleto Amigo","c",""],["d","2024-12",10,"Sem categoria","",5.18,1,"-","Boleto Amigo","k",""],["d","2024-12",10,"ALUGUEL DE IMPRESSORA","",459.14,1,"QUALITY TOTAL LOCAÇÃO DE EQUIPAMENTOS DE INFORMATICA","Boleto Amigo","c",""],["d","2024-12",5,"ALUGUEL DE IMPRESSORA","",459.14,1,"QUALITY TOTAL LOCAÇÃO DE EQUIPAMENTOS DE INFORMATICA","Boleto Amigo","k",""],["d","2024-11",29,"EMPRESA PRESTADORA DE SERVIÇOS","",250,1,"DOUTOR 7 COMUNICAÇÃO VISUAL","Boleto Amigo","c",""],["d","2024-11",19,"EMPRESA PRESTADORA DE SERVIÇOS","",250,1,"DOUTOR 7 COMUNICAÇÃO VISUAL","Boleto Amigo","k",""],["d","2024-12",5,"EMPRESA PRESTADORA DE SERVIÇOS","",470.67,1,"VOGA CONTABILIDADE","Boleto Amigo","c",""],["d","2024-09",2,"EMPRESA PRESTADORA DE SERVIÇOS","",470.67,1,"VOGA CONTABILIDADE","Boleto Amigo","k",""],["d","2024-12",5,"INSS","",327.79,1,"MINISTERIO DA PREVIDENCIA (INSS)","Boleto Amigo","c",""],["d","2025-01",19,"INSS","",327.79,1,"MINISTERIO DA PREVIDENCIA (INSS)","Boleto Amigo","k",""],["d","2024-12",4,"PAGAMENTO DE VALE TRANSPORTE","",294,1,"GABRIELLE RODRIGUES COSTA","Boleto Amigo","c",""],["d","2024-11",3,"PAGAMENTO DE VALE TRANSPORTE","",294,1,"GABRIELLE RODRIGUES COSTA","Boleto Amigo","k",""],["d","2024-12",4,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",3085.83,1,"GABRIELLE RODRIGUES COSTA","Boleto Amigo","c",""],["d","2024-12",3,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",3085.83,1,"GABRIELLE RODRIGUES COSTA","Boleto Amigo","k",""],["d","2024-12",4,"PAGAMENTO DE VALE ALIMENTAÇÃO","",700,1,"GABRIELLE RODRIGUES COSTA","Boleto Amigo","c",""],["d","2024-11",3,"PAGAMENTO DE VALE ALIMENTAÇÃO","",700,1,"GABRIELLE RODRIGUES COSTA","Boleto Amigo","k",""],["d","2024-11",23,"EMPRESA PRESTADORA DE SERVIÇOS","",3000,1,"HM NEGOCIOS E SERV LTDA","Boleto Amigo","c","OBRA DA SALA"],["d","2024-11",15,"EMPRESA PRESTADORA DE SERVIÇOS","",3000,1,"HM NEGOCIOS E SERV LTDA","Boleto Amigo","k","OBRA DA SALA"],["d","2024-11",29,"DESPESA DE AQUISIÇÃO DE EQUIP OU MANUTENÇÃO","",553.57,1,"MAGAZINE LUIZA","Boleto Amigo","c",""],["d","2024-11",29,"DESPESA DE AQUISIÇÃO DE EQUIP OU MANUTENÇÃO","",553.57,1,"MAGAZINE LUIZA","Boleto Amigo","k",""],["d","2024-11",29,"PAGAMENTO DE 13º","",1639.59,1,"GABRIELLE RODRIGUES COSTA","Boleto Amigo","c",""],["d","2024-11",29,"PAGAMENTO DE 13º","",1639.59,1,"GABRIELLE RODRIGUES COSTA","Boleto Amigo","k",""],["d","2024-11",28,"MATERIAL DE ESCRITÓRIO","",141.9,1,"KALUNGA SA","Boleto Amigo","c",""],["d","2024-11",28,"MATERIAL DE ESCRITÓRIO","",141.9,1,"KALUNGA SA","Boleto Amigo","k",""],["d","2024-11",28,"Sem categoria","",2.59,1,"-","Boleto Amigo","c",""],["d","2024-11",28,"Sem categoria","",2.59,1,"-","Boleto Amigo","k",""],["d","2024-11",27,"Sem categoria","",20.72,1,"-","Boleto Amigo","c",""],["d","2024-11",27,"Sem categoria","",20.72,1,"-","Boleto Amigo","k",""],["d","2024-11",26,"DESPESA DE AQUISIÇÃO DE EQUIP OU MANUTENÇÃO","",151.57,1,"KABUM","Boleto Amigo","c",""],["d","2024-11",26,"DESPESA DE AQUISIÇÃO DE EQUIP OU MANUTENÇÃO","",151.57,1,"KABUM","Boleto Amigo","k",""],["d","2024-11",25,"Sem categoria","",2.59,1,"-","Boleto Amigo","c",""],["d","2024-11",25,"Sem categoria","",2.59,1,"-","Boleto Amigo","k",""],["d","2024-11",23,"MATERIAL DE ESCRITÓRIO","",526.39,1,"FABIO SILVA DA VEIGA","Boleto Amigo","c","OBRA DA SALA"],["d","2024-11",25,"MATERIAL DE ESCRITÓRIO","",526.39,1,"FABIO SILVA DA VEIGA","Boleto Amigo","k","OBRA DA SALA"],["d","2024-11",21,"ENERGIA","",32.62,1,"NEOENERGIA","Boleto Amigo","c",""],["d","2024-11",28,"ENERGIA","",32.62,1,"NEOENERGIA","Boleto Amigo","k",""],["d","2024-11",21,"ALUGUEL","",2326.83,1,"ECONOMY ASSESSORIA - TAGUATINGA","Boleto Amigo","c",""],["d","2024-11",5,"ALUGUEL","",2326.83,1,"ECONOMY ASSESSORIA - TAGUATINGA","Boleto Amigo","k",""],["d","2024-11",21,"TARIFAS BANCÁRIAS","",50,1,"SICOOB","Boleto Amigo","c",""],["d","2024-11",21,"TARIFAS BANCÁRIAS","",50,1,"SICOOB","Boleto Amigo","k",""],["d","2024-11",19,"SISTEMAS","",1257.5,1,"ALGAR TELECOM S/A","Boleto Amigo","c",""],["d","2024-11",20,"SISTEMAS","",1257.5,1,"ALGAR TELECOM S/A","Boleto Amigo","k",""],["d","2024-11",18,"Sem categoria","",2.59,1,"-","Boleto Amigo","c",""],["d","2024-11",18,"Sem categoria","",2.59,1,"-","Boleto Amigo","k",""],["d","2024-11",14,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"ANDRE HENRIQUE TAVARES FERREIRA","Boleto Amigo","c",""],["d","2024-11",14,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"ANDRE HENRIQUE TAVARES FERREIRA","Boleto Amigo","k",""],["d","2024-11",7,"FGTS","",255.33,1,"CAIXA ECONOMICA FEDERAL","Boleto Amigo","c",""],["d","2024-11",14,"FGTS","",255.33,1,"CAIXA ECONOMICA FEDERAL","Boleto Amigo","k",""],["d","2024-11",14,"Sem categoria","",2.59,1,"-","Boleto Amigo","c",""],["d","2024-11",14,"Sem categoria","",2.59,1,"-","Boleto Amigo","k",""],["d","2024-11",13,"Sem categoria","",2.59,1,"-","Boleto Amigo","c",""],["d","2024-11",13,"Sem categoria","",2.59,1,"-","Boleto Amigo","k",""],["d","2024-11",12,"EMPRESA PRESTADORA DE SERVIÇOS","",250,1,"DOUTOR 7 COMUNICAÇÃO VISUAL","Boleto Amigo","c",""],["d","2024-11",12,"EMPRESA PRESTADORA DE SERVIÇOS","",250,1,"DOUTOR 7 COMUNICAÇÃO VISUAL","Boleto Amigo","k",""],["d","2024-11",11,"ALUGUEL DE IMPRESSORA","",450,1,"QUALITY TOTAL LOCAÇÃO DE EQUIPAMENTOS DE INFORMATICA","Boleto Amigo","c",""],["d","2024-11",5,"ALUGUEL DE IMPRESSORA","",450,1,"QUALITY TOTAL LOCAÇÃO DE EQUIPAMENTOS DE INFORMATICA","Boleto Amigo","k",""],["d","2024-11",8,"Sem categoria","",2.59,1,"-","Boleto Amigo","c",""],["d","2024-11",8,"Sem categoria","",2.59,1,"-","Boleto Amigo","k",""],["d","2024-11",7,"Sem categoria","",2.59,1,"-","Boleto Amigo","c",""],["d","2024-11",7,"Sem categoria","",2.59,1,"-","Boleto Amigo","k",""],["d","2024-11",6,"PAGAMENTO DE VALE TRANSPORTE","",308,1,"GABRIELLE RODRIGUES COSTA","Boleto Amigo","c",""],["d","2024-10",3,"PAGAMENTO DE VALE TRANSPORTE","",308,1,"GABRIELLE RODRIGUES COSTA","Boleto Amigo","k",""],["d","2024-11",6,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",2735.14,1,"GABRIELLE RODRIGUES COSTA","Boleto Amigo","c",""],["d","2024-11",3,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",2735.14,1,"GABRIELLE RODRIGUES COSTA","Boleto Amigo","k",""],["d","2024-11",6,"PAGAMENTO DE VALE ALIMENTAÇÃO","",700,1,"GABRIELLE RODRIGUES COSTA","Boleto Amigo","c",""],["d","2024-10",3,"PAGAMENTO DE VALE ALIMENTAÇÃO","",700,1,"GABRIELLE RODRIGUES COSTA","Boleto Amigo","k",""],["d","2024-11",6,"Sem categoria","",2.59,1,"-","Boleto Amigo","c",""],["d","2024-11",6,"Sem categoria","",2.59,1,"-","Boleto Amigo","k",""],["d","2024-11",5,"EMPRESA PRESTADORA DE SERVIÇOS","",470.67,1,"VOGA CONTABILIDADE","Boleto Amigo","c",""],["d","2024-09",2,"EMPRESA PRESTADORA DE SERVIÇOS","",470.67,1,"VOGA CONTABILIDADE","Boleto Amigo","k",""],["d","2024-11",4,"Sem categoria","",2.59,1,"-","Boleto Amigo","c",""],["d","2024-11",4,"Sem categoria","",2.59,1,"-","Boleto Amigo","k",""],["d","2024-11",1,"Sem categoria","",2.59,1,"-","Boleto Amigo","c",""],["d","2024-11",1,"Sem categoria","",2.59,1,"-","Boleto Amigo","k",""],["d","2024-10",31,"EMPRESA PRESTADORA DE SERVIÇOS","",390,1,"PATRON CONSTRUÇÕES E REFORMAS","Boleto Amigo","c","OBRA DA SALA"],["d","2024-11",4,"EMPRESA PRESTADORA DE SERVIÇOS","",390,1,"PATRON CONSTRUÇÕES E REFORMAS","Boleto Amigo","k","OBRA DA SALA"],["d","2024-10",31,"EMPRESA PRESTADORA DE SERVIÇOS","",2555,1,"PATRON CONSTRUÇÕES E REFORMAS","Boleto Amigo","c","OBRA DA SALA"],["d","2024-10",31,"EMPRESA PRESTADORA DE SERVIÇOS","",2555,1,"PATRON CONSTRUÇÕES E REFORMAS","Boleto Amigo","k","OBRA DA SALA"],["d","2024-10",31,"EMPRESA PRESTADORA DE SERVIÇOS","",4850,1,"HM NEGOCIOS E SERV LTDA","Boleto Amigo","c","OBRA DA SALA"],["d","2024-10",31,"EMPRESA PRESTADORA DE SERVIÇOS","",4850,1,"HM NEGOCIOS E SERV LTDA","Boleto Amigo","k","OBRA DA SALA"],["d","2024-10",30,"EMPRESA PRESTADORA DE SERVIÇOS","",2345.28,1,"REFORMA REGULAR","Boleto Amigo","c",""],["d","2024-09",25,"EMPRESA PRESTADORA DE SERVIÇOS","",2345.28,1,"REFORMA REGULAR","Boleto Amigo","k",""],["d","2024-10",29,"Sem categoria","",7.77,1,"-","Boleto Amigo","c",""],["d","2024-10",29,"Sem categoria","",7.77,1,"-","Boleto Amigo","k",""],["d","2024-10",16,"ENERGIA","",33.31,1,"NEOENERGIA","Boleto Amigo","c",""],["d","2024-10",28,"ENERGIA","",33.31,1,"NEOENERGIA","Boleto Amigo","k",""],["d","2024-10",24,"Sem categoria","",2.59,1,"-","Boleto Amigo","c",""],["d","2024-10",24,"Sem categoria","",2.59,1,"-","Boleto Amigo","k",""],["d","2024-10",23,"Sem categoria","",2.59,1,"-","Boleto Amigo","c",""],["d","2024-10",23,"Sem categoria","",2.59,1,"-","Boleto Amigo","k",""],["d","2024-10",22,"EMPRESA PRESTADORA DE SERVIÇOS","",7000,1,"PATRON CONSTRUÇÕES E REFORMAS","Boleto Amigo","c","OBRA DA SALA"],["d","2024-10",23,"EMPRESA PRESTADORA DE SERVIÇOS","",7000,1,"PATRON CONSTRUÇÕES E REFORMAS","Boleto Amigo","k","OBRA DA SALA"],["d","2024-10",22,"Sem categoria","",2.59,1,"-","Boleto Amigo","c",""],["d","2024-10",22,"Sem categoria","",2.59,1,"-","Boleto Amigo","k",""],["d","2024-10",21,"Sem categoria","",2.59,1,"-","Boleto Amigo","c",""],["d","2024-10",21,"Sem categoria","",2.59,1,"-","Boleto Amigo","k",""],["d","2024-10",21,"TARIFAS BANCÁRIAS","",50,1,"SICOOB","Boleto Amigo","c",""],["d","2024-10",21,"TARIFAS BANCÁRIAS","",50,1,"SICOOB","Boleto Amigo","k",""],["d","2024-10",16,"SISTEMAS","",1257.5,1,"ALGAR TELECOM S/A","Boleto Amigo","c",""],["d","2024-10",20,"SISTEMAS","",1257.5,1,"ALGAR TELECOM S/A","Boleto Amigo","k",""],["d","2024-10",17,"Sem categoria","",2.59,1,"-","Boleto Amigo","c",""],["d","2024-10",17,"Sem categoria","",2.59,1,"-","Boleto Amigo","k",""],["d","2024-10",17,"Sem categoria","",1500,1,"FACEBOOK CNPJ: 13.347.016/0001-17","Boleto Amigo","c",""],["d","2024-09",25,"Sem categoria","",1500,1,"FACEBOOK CNPJ: 13.347.016/0001-17","Boleto Amigo","k",""],["d","2024-10",16,"Sem categoria","",2.59,1,"-","Boleto Amigo","c",""],["d","2024-10",16,"Sem categoria","",2.59,1,"-","Boleto Amigo","k",""],["d","2024-10",10,"EMPRESA PRESTADORA DE SERVIÇOS","",7820,1,"PATRON CONSTRUÇÕES E REFORMAS","Boleto Amigo","c","OBRA DA SALA"],["d","2024-10",7,"EMPRESA PRESTADORA DE SERVIÇOS","",7820,1,"PATRON CONSTRUÇÕES E REFORMAS","Boleto Amigo","k","OBRA DA SALA"],["d","2024-10",10,"COMISSÕES","",200,1,"ANTONIO CARLOS BRITO","Boleto Amigo","c",""],["d","2024-10",9,"COMISSÕES","",200,1,"ANTONIO CARLOS BRITO","Boleto Amigo","k",""],["d","2024-10",10,"Sem categoria","",2.59,1,"-","Boleto Amigo","c",""],["d","2024-10",10,"Sem categoria","",2.59,1,"-","Boleto Amigo","k",""],["d","2024-10",9,"ALUGUEL DE IMPRESSORA","",450,1,"QUALITY TOTAL LOCAÇÃO DE EQUIPAMENTOS DE INFORMATICA","Boleto Amigo","c",""],["d","2024-10",5,"ALUGUEL DE IMPRESSORA","",450,1,"QUALITY TOTAL LOCAÇÃO DE EQUIPAMENTOS DE INFORMATICA","Boleto Amigo","k",""],["d","2024-10",9,"Sem categoria","",5.18,1,"-","Boleto Amigo","c",""],["d","2024-10",9,"Sem categoria","",5.18,1,"-","Boleto Amigo","k",""],["d","2024-10",8,"Sem categoria","",2.59,1,"-","Boleto Amigo","c",""],["d","2024-10",8,"Sem categoria","",2.59,1,"-","Boleto Amigo","k",""],["d","2024-10",7,"EMPRESA PRESTADORA DE SERVIÇOS","",470.67,1,"VOGA CONTABILIDADE","Boleto Amigo","c",""],["d","2024-09",2,"EMPRESA PRESTADORA DE SERVIÇOS","",470.67,1,"VOGA CONTABILIDADE","Boleto Amigo","k",""],["d","2024-10",4,"PAGAMENTO DE VALE TRANSPORTE","",322,1,"GABRIELLE RODRIGUES COSTA","Boleto Amigo","c",""],["d","2024-09",3,"PAGAMENTO DE VALE TRANSPORTE","",322,1,"GABRIELLE RODRIGUES COSTA","Boleto Amigo","k",""],["d","2024-10",4,"PAGAMENTO DE VALE ALIMENTAÇÃO","",805,1,"GABRIELLE RODRIGUES COSTA","Boleto Amigo","c",""],["d","2024-09",3,"PAGAMENTO DE VALE ALIMENTAÇÃO","",805,1,"GABRIELLE RODRIGUES COSTA","Boleto Amigo","k",""],["d","2024-10",4,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",2520.85,1,"GABRIELLE RODRIGUES COSTA","Boleto Amigo","c",""],["d","2024-10",3,"PAGAMENTO DE SALÁRIOS DE FUNCIONÁRIOS","",2520.85,1,"GABRIELLE RODRIGUES COSTA","Boleto Amigo","k",""],["d","2024-10",4,"COMISSÕES","",200,1,"JOSE DE RIBAMAR DESTERRO","Boleto Amigo","c",""],["d","2024-10",2,"COMISSÕES","",200,1,"JOSE DE RIBAMAR DESTERRO","Boleto Amigo","k",""],["d","2024-09",30,"META (FACEBOOK E INSTAGRAM)","",1500,1,"FACEBOOK CNPJ: 13.347.016/0001-17","Boleto Amigo","c",""],["d","2024-10",1,"META (FACEBOOK E INSTAGRAM)","",1500,1,"FACEBOOK CNPJ: 13.347.016/0001-17","Boleto Amigo","k",""],["d","2024-09",20,"ENERGIA","",31.08,1,"NEOENERGIA","Boleto Amigo","c",""],["d","2024-09",28,"ENERGIA","",31.08,1,"NEOENERGIA","Boleto Amigo","k",""],["d","2024-09",27,"Sem categoria","",5.18,1,"-","Boleto Amigo","c",""],["d","2024-09",27,"Sem categoria","",5.18,1,"-","Boleto Amigo","k",""],["d","2024-09",26,"EMPRESA PRESTADORA DE SERVIÇOS","",580,1,"DOUTOR 7 COMUNICAÇÃO VISUAL","Boleto Amigo","c",""],["d","2024-06",28,"EMPRESA PRESTADORA DE SERVIÇOS","",580,1,"DOUTOR 7 COMUNICAÇÃO VISUAL","Boleto Amigo","k",""],["d","2024-09",25,"Sem categoria","",2.59,1,"-","Boleto Amigo","c",""],["d","2024-09",25,"Sem categoria","",2.59,1,"-","Boleto Amigo","k",""],["d","2024-09",20,"Sem categoria","",2.59,1,"-","Boleto Amigo","c",""],["d","2024-09",20,"Sem categoria","",2.59,1,"-","Boleto Amigo","k",""],["d","2024-09",20,"TARIFAS BANCÁRIAS","",50,1,"SICOOB","Boleto Amigo","c",""],["d","2024-09",20,"TARIFAS BANCÁRIAS","",50,1,"SICOOB","Boleto Amigo","k",""],["d","2024-09",19,"SISTEMAS","",1288.61,1,"ALGAR TELECOM S/A","Boleto Amigo","c",""],["d","2024-09",20,"SISTEMAS","",1288.61,1,"ALGAR TELECOM S/A","Boleto Amigo","k",""],["d","2024-09",19,"Sem categoria","",2.59,1,"-","Boleto Amigo","c",""],["d","2024-09",19,"Sem categoria","",2.59,1,"-","Boleto Amigo","k",""],["d","2024-09",18,"Sem categoria","",5.18,1,"-","Boleto Amigo","c",""],["d","2024-09",18,"Sem categoria","",5.18,1,"-","Boleto Amigo","k",""],["d","2024-09",17,"COMISSÕES","",200,1,"DAYLANE PEREIRA LIMA","Boleto Amigo","c",""],["d","2024-09",13,"COMISSÕES","",200,1,"DAYLANE PEREIRA LIMA","Boleto Amigo","k",""],["d","2024-09",10,"Sem categoria","",2.59,1,"-","Boleto Amigo","c",""],["d","2024-09",10,"Sem categoria","",2.59,1,"-","Boleto Amigo","k",""],["d","2024-09",10,"META (FACEBOOK E INSTAGRAM)","",1500,1,"FACEBOOK CNPJ: 13.347.016/0001-17","Boleto Amigo","c",""],["d","2024-09",4,"META (FACEBOOK E INSTAGRAM)","",1500,1,"FACEBOOK CNPJ: 13.347.016/0001-17","Boleto Amigo","k",""],["d","2024-09",9,"Sem categoria","",2.59,1,"-","Boleto Amigo","c",""],["d","2024-09",9,"Sem categoria","",2.59,1,"-","Boleto Amigo","k",""],["d","2024-09",6,"Sem categoria","",5.18,1,"-","Boleto Amigo","c",""],["d","2024-09",6,"Sem categoria","",5.18,1,"-","Boleto Amigo","k",""],["d","2024-09",5,"ALUGUEL DE IMPRESSORA","",450,1,"QUALITY TOTAL LOCAÇÃO DE EQUIPAMENTOS DE INFORMATICA","Boleto Amigo","c",""],["d","2024-09",5,"ALUGUEL DE IMPRESSORA","",450,1,"QUALITY TOTAL LOCAÇÃO DE EQUIPAMENTOS DE INFORMATICA","Boleto Amigo","k",""],["d","2024-09",5,"EMPRESA PRESTADORA DE SERVIÇOS","",470.67,1,"VOGA CONTABILIDADE","Boleto Amigo","c",""],["d","2024-09",2,"EMPRESA PRESTADORA DE SERVIÇOS","",470.67,1,"VOGA CONTABILIDADE","Boleto Amigo","k",""],["d","2024-09",4,"META (FACEBOOK E INSTAGRAM)","",1500,1,"FACEBOOK CNPJ: 13.347.016/0001-17","Boleto Amigo","c",""],["d","2024-09",1,"META (FACEBOOK E INSTAGRAM)","",1500,1,"FACEBOOK CNPJ: 13.347.016/0001-17","Boleto Amigo","k",""],["d","2024-09",4,"EMPRESA PRESTADORA DE SERVIÇOS","",1290,1,"ALLAN DIEGO SANTOS","Boleto Amigo","c",""],["d","2024-09",3,"EMPRESA PRESTADORA DE SERVIÇOS","",1290,1,"ALLAN DIEGO SANTOS","Boleto Amigo","k",""],["d","2024-09",2,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"ERICK MICHEL BATALHA DE OLIVEIRA","Boleto Amigo","c",""],["d","2024-09",2,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"ERICK MICHEL BATALHA DE OLIVEIRA","Boleto Amigo","k",""],["d","2024-08",27,"EMPRESA PRESTADORA DE SERVIÇOS","",250,1,"REFORMA REGULAR","Boleto Amigo","c","OBRA DA SALA"],["d","2024-08",19,"EMPRESA PRESTADORA DE SERVIÇOS","",250,1,"REFORMA REGULAR","Boleto Amigo","k","OBRA DA SALA"],["d","2024-08",30,"EMPRESA PRESTADORA DE SERVIÇOS","",450,1,"Romulo Francelino Alves","Boleto Amigo","c","OBRA DA SALA"],["d","2024-08",30,"EMPRESA PRESTADORA DE SERVIÇOS","",450,1,"Romulo Francelino Alves","Boleto Amigo","k","OBRA DA SALA"],["d","2024-08",30,"EMPRESA PRESTADORA DE SERVIÇOS","",300,1,"ELLO PAPELARIA","Boleto Amigo","c",""],["d","2024-08",29,"EMPRESA PRESTADORA DE SERVIÇOS","",300,1,"ELLO PAPELARIA","Boleto Amigo","k",""],["d","2024-08",28,"SISTEMAS","",1314.08,1,"ALGAR TELECOM S/A","Boleto Amigo","c",""],["d","2024-08",20,"SISTEMAS","",1314.08,1,"ALGAR TELECOM S/A","Boleto Amigo","k",""],["d","2024-08",28,"ENERGIA","",26.96,1,"NEOENERGIA","Boleto Amigo","c","OBRA DA SALA"],["d","2024-08",28,"ENERGIA","",26.96,1,"NEOENERGIA","Boleto Amigo","k","OBRA DA SALA"],["d","2024-08",27,"Sem categoria","",2.59,1,"-","Boleto Amigo","c",""],["d","2024-08",27,"Sem categoria","",2.59,1,"-","Boleto Amigo","k",""],["d","2024-08",26,"Sem categoria","",2.59,1,"-","Boleto Amigo","c",""],["d","2024-08",26,"Sem categoria","",2.59,1,"-","Boleto Amigo","k",""],["d","2024-08",27,"META (FACEBOOK E INSTAGRAM)","",1000,1,"FACEBOOK CNPJ: 13.347.016/0001-17","Boleto Amigo","c",""],["d","2024-08",26,"META (FACEBOOK E INSTAGRAM)","",1000,1,"FACEBOOK CNPJ: 13.347.016/0001-17","Boleto Amigo","k",""],["d","2024-08",20,"TARIFAS BANCÁRIAS","",50,1,"SICOOB","Boleto Amigo","c",""],["d","2024-08",20,"TARIFAS BANCÁRIAS","",50,1,"SICOOB","Boleto Amigo","k",""],["d","2024-08",19,"EMPRESA PRESTADORA DE SERVIÇOS","",500,1,"REFORMA REGULAR","Boleto Amigo","c","OBRA DA SALA"],["d","2024-08",12,"EMPRESA PRESTADORA DE SERVIÇOS","",500,1,"REFORMA REGULAR","Boleto Amigo","k","OBRA DA SALA"],["d","2024-08",19,"Sem categoria","",5.18,1,"-","Boleto Amigo","c",""],["d","2024-08",19,"Sem categoria","",5.18,1,"-","Boleto Amigo","k",""],["d","2024-08",19,"EMPRESA PRESTADORA DE SERVIÇOS","",200,1,"Select Corretora e Consultoria em Seguros LTDA","Boleto Amigo","c",""],["d","2024-08",14,"EMPRESA PRESTADORA DE SERVIÇOS","",200,1,"Select Corretora e Consultoria em Seguros LTDA","Boleto Amigo","k",""],["d","2024-08",9,"META (FACEBOOK E INSTAGRAM)","",2000,1,"FACEBOOK CNPJ: 13.347.016/0001-17","Boleto Amigo","c",""],["d","2024-08",1,"META (FACEBOOK E INSTAGRAM)","",2000,1,"FACEBOOK CNPJ: 13.347.016/0001-17","Boleto Amigo","k",""],["d","2024-08",8,"ALUGUEL DE IMPRESSORA","",450,1,"QUALITY TOTAL LOCAÇÃO DE EQUIPAMENTOS DE INFORMATICA","Boleto Amigo","c",""],["d","2024-08",5,"ALUGUEL DE IMPRESSORA","",450,1,"QUALITY TOTAL LOCAÇÃO DE EQUIPAMENTOS DE INFORMATICA","Boleto Amigo","k",""],["d","2024-08",8,"EMPRESA PRESTADORA DE SERVIÇOS","",2500,1,"DANIELE FIDYK","Boleto Amigo","c","OBRA DA SALA"],["d","2024-07",2,"EMPRESA PRESTADORA DE SERVIÇOS","",2500,1,"DANIELE FIDYK","Boleto Amigo","k","OBRA DA SALA"],["d","2024-08",7,"Sem categoria","",2.59,1,"-","Boleto Amigo","c",""],["d","2024-08",7,"Sem categoria","",2.59,1,"-","Boleto Amigo","k",""],["d","2024-08",6,"Sem categoria","",2.59,1,"-","Boleto Amigo","c",""],["d","2024-08",6,"Sem categoria","",2.59,1,"-","Boleto Amigo","k",""],["d","2024-08",2,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"FABIANO CEZARIO DA CUNHA","Boleto Amigo","c",""],["d","2024-08",2,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"FABIANO CEZARIO DA CUNHA","Boleto Amigo","k",""],["d","2024-08",1,"EMPRESA PRESTADORA DE SERVIÇOS","",119.61,1,"CAU-DF","Boleto Amigo","c","OBRA DA SALA"],["d","2024-08",1,"EMPRESA PRESTADORA DE SERVIÇOS","",119.61,1,"CAU-DF","Boleto Amigo","k","OBRA DA SALA"],["d","2024-07",24,"TARIFAS BANCÁRIAS","",2.59,1,"-","Boleto Amigo","c",""],["d","2024-07",24,"TARIFAS BANCÁRIAS","",2.59,1,"-","Boleto Amigo","k",""],["d","2024-07",24,"EMPRESA PRESTADORA DE SERVIÇOS","",2000,1,"RUAN MATHEUS SOUSA DE MORAIS","Boleto Amigo","c",""],["d","2024-07",24,"EMPRESA PRESTADORA DE SERVIÇOS","",2000,1,"RUAN MATHEUS SOUSA DE MORAIS","Boleto Amigo","k",""],["d","2024-07",23,"TARIFAS BANCÁRIAS","",2.59,1,"-","Boleto Amigo","c",""],["d","2024-07",23,"TARIFAS BANCÁRIAS","",2.59,1,"-","Boleto Amigo","k",""],["d","2024-07",22,"TARIFAS BANCÁRIAS","",50,1,"SICOOB","Boleto Amigo","c","CONTA CAPITAL"],["d","2024-07",22,"TARIFAS BANCÁRIAS","",50,1,"SICOOB","Boleto Amigo","k","CONTA CAPITAL"],["d","2024-07",22,"ANÚNCIOS DE TELEVISÃO","",7000,1,"RÁDIO E TELEVISÃO CV LTDA","Boleto Amigo","c",""],["d","2024-06",30,"ANÚNCIOS DE TELEVISÃO","",7000,1,"RÁDIO E TELEVISÃO CV LTDA","Boleto Amigo","k",""],["d","2024-07",17,"TARIFAS BANCÁRIAS","",2.59,1,"-","Boleto Amigo","c",""],["d","2024-07",17,"TARIFAS BANCÁRIAS","",2.59,1,"-","Boleto Amigo","k",""],["d","2024-07",11,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"FRANCISCO FERREIRA SILVA","Boleto Amigo","c",""],["d","2024-07",10,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"FRANCISCO FERREIRA SILVA","Boleto Amigo","k",""],["d","2024-07",9,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"HARLEY AUDIR RODRIGUES LOPES","Boleto Amigo","c",""],["d","2024-07",9,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"HARLEY AUDIR RODRIGUES LOPES","Boleto Amigo","k",""],["d","2024-07",9,"ALUGUEL DE IMPRESSORA","",285,1,"QUALITY TOTAL LOCAÇÃO DE EQUIPAMENTOS DE INFORMATICA","Boleto Amigo","c",""],["d","2024-07",5,"ALUGUEL DE IMPRESSORA","",285,1,"QUALITY TOTAL LOCAÇÃO DE EQUIPAMENTOS DE INFORMATICA","Boleto Amigo","k",""],["d","2024-07",4,"MATERIAL DE ESCRITÓRIO","",90,1,"BRUNO CAMARA TRINDADE","Boleto Amigo","c",""],["d","2024-07",8,"MATERIAL DE ESCRITÓRIO","",90,1,"BRUNO CAMARA TRINDADE","Boleto Amigo","k",""],["d","2024-07",4,"TARIFAS BANCÁRIAS","",2.59,1,"-","Boleto Amigo","c",""],["d","2024-07",4,"TARIFAS BANCÁRIAS","",2.59,1,"-","Boleto Amigo","k",""],["d","2024-07",4,"TARIFAS BANCÁRIAS","",50,1,"SICOOB","Boleto Amigo","c","CONTA CAPITAL"],["d","2024-07",4,"TARIFAS BANCÁRIAS","",50,1,"SICOOB","Boleto Amigo","k","CONTA CAPITAL"],["d","2024-07",1,"OUTRAS DESPESAS","",298.8,1,"KVOIP","Boleto Amigo","c",""],["d","2024-07",1,"OUTRAS DESPESAS","",298.8,1,"KVOIP","Boleto Amigo","k",""],["d","2024-06",24,"OUTRAS DESPESAS","",400,1,"WREF COMPANHIA CONTABIL LTDA","Boleto Amigo","c",""],["d","2024-06",20,"OUTRAS DESPESAS","",400,1,"WREF COMPANHIA CONTABIL LTDA","Boleto Amigo","k",""],["d","2024-06",28,"EMPRESA PRESTADORA DE SERVIÇOS","",455,1,"GIRO COWORKING - F H T H PAIVA - ME","Boleto Amigo","c",""],["d","2024-06",28,"EMPRESA PRESTADORA DE SERVIÇOS","",455,1,"GIRO COWORKING - F H T H PAIVA - ME","Boleto Amigo","k",""],["d","2024-06",28,"EMPRESA PRESTADORA DE SERVIÇOS","",580,1,"DOUTOR 7 COMUNICAÇÃO VISUAL","Boleto Amigo","c",""],["d","2024-06",27,"EMPRESA PRESTADORA DE SERVIÇOS","",580,1,"DOUTOR 7 COMUNICAÇÃO VISUAL","Boleto Amigo","k",""],["d","2024-06",28,"MATERIAL DE ESCRITÓRIO","",828.99,1,"Adyen Latin America","Boleto Amigo","c",""],["d","2024-06",26,"MATERIAL DE ESCRITÓRIO","",828.99,1,"Adyen Latin America","Boleto Amigo","k",""],["d","2024-06",26,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"ANDRE HENRIQUE TAVARES FERREIRA","Boleto Amigo","c",""],["d","2024-06",25,"COMISSÃO INDICAÇÃO DE CLIENTES","",200,1,"ANDRE HENRIQUE TAVARES FERREIRA","Boleto Amigo","k",""],["d","2024-06",26,"EMPRESA PRESTADORA DE SERVIÇOS","",1300,1,"RUAN MATHEUS SOUSA DE MORAIS","Boleto Amigo","c",""],["d","2024-06",26,"EMPRESA PRESTADORA DE SERVIÇOS","",1300,1,"RUAN MATHEUS SOUSA DE MORAIS","Boleto Amigo","k",""],["d","2024-06",24,"OUTRAS DESPESAS","",90,1,"GIRO COWORKING LTDA - GIRO COWORKING SLZ","Boleto Amigo","c",""],["d","2024-06",24,"OUTRAS DESPESAS","",90,1,"GIRO COWORKING LTDA - GIRO COWORKING SLZ","Boleto Amigo","k",""],["d","2024-06",24,"OUTRAS DESPESAS","",90,1,"GIRO COWORKING - F H T H PAIVA - ME","Boleto Amigo","c",""],["d","2024-06",24,"OUTRAS DESPESAS","",90,1,"GIRO COWORKING - F H T H PAIVA - ME","Boleto Amigo","k",""],["d","2024-06",20,"DESPESA DE AQUISIÇÃO DE EQUIP OU MANUTENÇÃO","",437.5,1,"MOBILIANDO MÓVEIS RESIDENCIAS E DE ESCRITÓRIO","Boleto Amigo","c",""],["d","2024-06",19,"DESPESA DE AQUISIÇÃO DE EQUIP OU MANUTENÇÃO","",437.5,1,"MOBILIANDO MÓVEIS RESIDENCIAS E DE ESCRITÓRIO","Boleto Amigo","k",""],["d","2024-06",18,"DESPESA DE AQUISIÇÃO DE EQUIP OU MANUTENÇÃO","",437.5,1,"MOBILIANDO MÓVEIS RESIDENCIAS E DE ESCRITÓRIO","Boleto Amigo","c",""],["d","2024-06",18,"DESPESA DE AQUISIÇÃO DE EQUIP OU MANUTENÇÃO","",437.5,1,"MOBILIANDO MÓVEIS RESIDENCIAS E DE ESCRITÓRIO","Boleto Amigo","k",""],["d","2024-06",18,"UNIFORMES","",220,1,"D SOL CAMISETERIA","Boleto Amigo","c",""],["d","2024-06",14,"UNIFORMES","",220,1,"D SOL CAMISETERIA","Boleto Amigo","k",""],["d","2024-06",11,"OUTRAS DESPESAS","",200,1,"KVOIP","Boleto Amigo","c",""],["d","2024-06",1,"OUTRAS DESPESAS","",200,1,"KVOIP","Boleto Amigo","k",""],["d","2024-05",24,"OUTRAS DESPESAS","",90,1,"GIRO COWORKING LTDA - GIRO COWORKING SLZ","Boleto Amigo","c",""],["d","2024-05",24,"OUTRAS DESPESAS","",90,1,"GIRO COWORKING LTDA - GIRO COWORKING SLZ","Boleto Amigo","k",""],["d","2024-05",24,"OUTRAS DESPESAS","",90,1,"GIRO COWORKING - F H T H PAIVA - ME","Boleto Amigo","c",""],["d","2024-05",24,"OUTRAS DESPESAS","",90,1,"GIRO COWORKING - F H T H PAIVA - ME","Boleto Amigo","k",""],["d","2024-05",24,"OUTRAS DESPESAS","",24.33,1,"GABRIELLE RODRIGUES COSTA","Boleto Amigo","c",""],["d","2024-05",24,"OUTRAS DESPESAS","",24.33,1,"GABRIELLE RODRIGUES COSTA","Boleto Amigo","k",""],["d","2024-05",24,"OUTRAS DESPESAS","",130,1,"ELZA FRANCISCA GONÇALVES","Boleto Amigo","c",""],["d","2024-05",24,"OUTRAS DESPESAS","",130,1,"ELZA FRANCISCA GONÇALVES","Boleto Amigo","k",""],["d","2024-05",31,"OUTRAS DESPESAS","",400,1,"WREF COMPANHIA CONTABIL LTDA","Boleto Amigo","c",""],["d","2024-05",20,"OUTRAS DESPESAS","",400,1,"WREF COMPANHIA CONTABIL LTDA","Boleto Amigo","k",""],["d","2024-05",24,"OUTRAS DESPESAS","",306.96,1,"KVOIP","Boleto Amigo","c",""],["d","2024-05",1,"OUTRAS DESPESAS","",306.96,1,"KVOIP","Boleto Amigo","k",""],["d","2024-04",25,"OUTRAS DESPESAS","",90,1,"GIRO COWORKING - F H T H PAIVA - ME","Boleto Amigo","c",""],["d","2024-04",24,"OUTRAS DESPESAS","",90,1,"GIRO COWORKING - F H T H PAIVA - ME","Boleto Amigo","k",""],["d","2024-04",25,"OUTRAS DESPESAS","",90,1,"GIRO COWORKING LTDA - GIRO COWORKING SLZ","Boleto Amigo","c",""],["d","2024-04",24,"OUTRAS DESPESAS","",90,1,"GIRO COWORKING LTDA - GIRO COWORKING SLZ","Boleto Amigo","k",""],["d","2024-04",24,"OUTRAS DESPESAS","",1000,1,"WREF COMPANHIA CONTABIL LTDA","Boleto Amigo","c",""],["d","2024-03",8,"OUTRAS DESPESAS","",1000,1,"WREF COMPANHIA CONTABIL LTDA","Boleto Amigo","k",""],["d","2024-04",15,"OUTRAS DESPESAS","",306.16,1,"KVOIP","Boleto Amigo","c",""],["d","2024-04",1,"OUTRAS DESPESAS","",306.16,1,"KVOIP","Boleto Amigo","k",""],["d","2024-03",27,"OUTRAS DESPESAS","",243.03,1,"PRINTI","Boleto Amigo","c",""],["d","2024-03",27,"OUTRAS DESPESAS","",243.03,1,"PRINTI","Boleto Amigo","k",""],["d","2024-03",25,"OUTRAS DESPESAS","",90,1,"GIRO COWORKING - F H T H PAIVA - ME","Boleto Amigo","c",""],["d","2024-03",24,"OUTRAS DESPESAS","",90,1,"GIRO COWORKING - F H T H PAIVA - ME","Boleto Amigo","k",""],["d","2024-03",25,"OUTRAS DESPESAS","",90,1,"GIRO COWORKING LTDA - GIRO COWORKING SLZ","Boleto Amigo","c",""],["d","2024-03",24,"OUTRAS DESPESAS","",90,1,"GIRO COWORKING LTDA - GIRO COWORKING SLZ","Boleto Amigo","k",""],["d","2024-03",19,"OUTRAS DESPESAS","",1000,1,"WREF COMPANHIA CONTABIL LTDA","Boleto Amigo","c",""],["d","2024-03",8,"OUTRAS DESPESAS","",1000,1,"WREF COMPANHIA CONTABIL LTDA","Boleto Amigo","k",""],["d","2024-03",18,"OUTRAS DESPESAS","",324.5,1,"DOUTOR 7 COMUNICAÇÃO VISUAL","Boleto Amigo","c",""],["d","2024-03",15,"OUTRAS DESPESAS","",324.5,1,"DOUTOR 7 COMUNICAÇÃO VISUAL","Boleto Amigo","k",""],["d","2024-03",13,"OUTRAS DESPESAS","",120,1,"DOUTOR 7 COMUNICAÇÃO VISUAL","Boleto Amigo","c",""],["d","2024-03",13,"OUTRAS DESPESAS","",120,1,"DOUTOR 7 COMUNICAÇÃO VISUAL","Boleto Amigo","k",""],["d","2024-03",11,"OUTRAS DESPESAS","",79.08,1,"DLOCAL BRASIL PAGAMENTOS LTDA","Boleto Amigo","c",""],["d","2024-03",11,"OUTRAS DESPESAS","",79.08,1,"DLOCAL BRASIL PAGAMENTOS LTDA","Boleto Amigo","k",""],["d","2024-03",8,"OUTRAS DESPESAS","",60.9,1,"DLOCAL BRASIL PAGAMENTOS LTDA","Boleto Amigo","c",""],["d","2024-03",8,"OUTRAS DESPESAS","",60.9,1,"DLOCAL BRASIL PAGAMENTOS LTDA","Boleto Amigo","k",""],["d","2024-03",8,"OUTRAS DESPESAS","",39.99,1,"DLOCAL BRASIL PAGAMENTOS LTDA","Boleto Amigo","c",""],["d","2024-03",8,"OUTRAS DESPESAS","",39.99,1,"DLOCAL BRASIL PAGAMENTOS LTDA","Boleto Amigo","k",""],["d","2024-03",8,"OUTRAS DESPESAS","",324.5,1,"DOUTOR 7 COMUNICAÇÃO VISUAL","Boleto Amigo","c",""],["d","2024-03",8,"OUTRAS DESPESAS","",324.5,1,"DOUTOR 7 COMUNICAÇÃO VISUAL","Boleto Amigo","k",""],["d","2024-02",29,"OUTRAS DESPESAS","",50,1,"KVOIP","Boleto Amigo","c",""],["d","2024-02",29,"OUTRAS DESPESAS","",50,1,"KVOIP","Boleto Amigo","k",""],["d","2024-02",29,"OUTRAS DESPESAS","",298.8,1,"KVOIP","Boleto Amigo","c",""],["d","2024-03",1,"OUTRAS DESPESAS","",298.8,1,"KVOIP","Boleto Amigo","k",""],["d","2024-02",27,"OUTRAS DESPESAS","",3000,1,"ADALTON DOS SANTOS SILVA","Boleto Amigo","c",""],["d","2024-02",29,"OUTRAS DESPESAS","",3000,1,"ADALTON DOS SANTOS SILVA","Boleto Amigo","k",""],["d","2024-02",29,"OUTRAS DESPESAS","",39.99,1,"DLOCAL BRASIL PAGAMENTOS LTDA","Boleto Amigo","c",""],["d","2024-02",28,"OUTRAS DESPESAS","",39.99,1,"DLOCAL BRASIL PAGAMENTOS LTDA","Boleto Amigo","k",""],["d","2024-02",23,"OUTRAS DESPESAS","",90,1,"GIRO COWORKING LTDA - GIRO COWORKING SLZ","Boleto Amigo","c",""],["d","2024-02",24,"OUTRAS DESPESAS","",90,1,"GIRO COWORKING LTDA - GIRO COWORKING SLZ","Boleto Amigo","k",""],["d","2024-02",26,"OUTRAS DESPESAS","",90,1,"GIRO COWORKING - F H T H PAIVA - ME","Boleto Amigo","c",""],["d","2024-02",24,"OUTRAS DESPESAS","",90,1,"GIRO COWORKING - F H T H PAIVA - ME","Boleto Amigo","k",""],["d","2024-02",23,"OUTRAS DESPESAS","",500,1,"PJ BANK","Boleto Amigo","c",""],["d","2023-12",20,"OUTRAS DESPESAS","",500,1,"PJ BANK","Boleto Amigo","k",""],["d","2024-02",21,"OUTRAS DESPESAS","",10,1,"PJ BANK","Boleto Amigo","c",""],["d","2024-02",26,"OUTRAS DESPESAS","",10,1,"PJ BANK","Boleto Amigo","k",""],["d","2024-02",21,"OUTRAS DESPESAS","",510.67,1,"Managed WordPress Deluxe","Boleto Amigo","c",""],["d","2024-02",21,"OUTRAS DESPESAS","",510.67,1,"Managed WordPress Deluxe","Boleto Amigo","k",""],["d","2024-02",7,"OUTRAS DESPESAS","",69.9,1,"FALE PACO PAGAR.ME PAGAMENTOS S/A","Boleto Amigo","c",""],["d","2024-02",8,"OUTRAS DESPESAS","",69.9,1,"FALE PACO PAGAR.ME PAGAMENTOS S/A","Boleto Amigo","k",""],["d","2024-01",24,"OUTRAS DESPESAS","",90,1,"GIRO COWORKING LTDA - GIRO COWORKING SLZ","Boleto Amigo","c",""],["d","2024-01",24,"OUTRAS DESPESAS","",90,1,"GIRO COWORKING LTDA - GIRO COWORKING SLZ","Boleto Amigo","k",""],["d","2024-01",24,"OUTRAS DESPESAS","",90,1,"GIRO COWORKING - F H T H PAIVA - ME","Boleto Amigo","c",""],["d","2024-01",24,"OUTRAS DESPESAS","",90,1,"GIRO COWORKING - F H T H PAIVA - ME","Boleto Amigo","k",""],["d","2023-12",20,"OUTRAS DESPESAS","",500,1,"PJ BANK","Boleto Amigo","c",""],["d","2023-12",20,"OUTRAS DESPESAS","",500,1,"PJ BANK","Boleto Amigo","k",""],["d","2023-10",30,"TAXAS ADMINISTRATIVAS","",121.24,1,"CIELO","Boleto Amigo","c",""],["d","2023-10",30,"TAXAS ADMINISTRATIVAS","",121.24,1,"CIELO","Boleto Amigo","k",""],["d","2023-05",29,"TAXAS ADMINISTRATIVAS","",3.09,1,"CIELO","Boleto Amigo","c",""],["d","2023-05",29,"TAXAS ADMINISTRATIVAS","",3.09,1,"CIELO","Boleto Amigo","k",""],["d","2023-10",2,"REPASSE","",2000,1,"MARIA DOMINGAS FERREIRA GOMES","Boleto Amigo","c",""],["d","2023-10",2,"REPASSE","",2000,1,"MARIA DOMINGAS FERREIRA GOMES","Boleto Amigo","k",""],["d","2023-09",29,"TAXAS ADMINISTRATIVAS","",154.32,1,"CIELO","Boleto Amigo","c",""],["d","2023-09",29,"TAXAS ADMINISTRATIVAS","",154.32,1,"CIELO","Boleto Amigo","k",""],["d","2023-09",29,"REPASSE","",1100,1,"ANA CLAUDIA SILVA DE ALMEIDA","Boleto Amigo","c",""],["d","2023-09",29,"REPASSE","",1100,1,"ANA CLAUDIA SILVA DE ALMEIDA","Boleto Amigo","k",""],["d","2023-09",27,"TAXAS ADMINISTRATIVAS","",84.9,1,"CIELO","Boleto Amigo","c",""],["d","2023-09",27,"TAXAS ADMINISTRATIVAS","",84.9,1,"CIELO","Boleto Amigo","k",""],["d","2023-09",25,"TAXAS ADMINISTRATIVAS","",41.17,1,"CIELO","Boleto Amigo","c",""],["d","2023-09",25,"TAXAS ADMINISTRATIVAS","",41.17,1,"CIELO","Boleto Amigo","k",""],["d","2023-09",25,"TAXAS ADMINISTRATIVAS","",101.56,1,"CIELO","Boleto Amigo","c",""],["d","2023-09",25,"TAXAS ADMINISTRATIVAS","",101.56,1,"CIELO","Boleto Amigo","k",""],["d","2023-09",25,"TAXAS ADMINISTRATIVAS","",129.9,1,"CIELO","Boleto Amigo","c",""],["d","2023-09",25,"TAXAS ADMINISTRATIVAS","",129.9,1,"CIELO","Boleto Amigo","k",""],["d","2023-09",18,"REPASSE","",1268.28,1,"IZEMAR LAERCIO F DE OLIVEIRA","Boleto Amigo","c",""],["d","2023-09",18,"REPASSE","",1268.28,1,"IZEMAR LAERCIO F DE OLIVEIRA","Boleto Amigo","k",""],["d","2023-09",15,"TAXAS ADMINISTRATIVAS","",95.68,1,"CIELO","Boleto Amigo","c",""],["d","2023-09",15,"TAXAS ADMINISTRATIVAS","",95.68,1,"CIELO","Boleto Amigo","k",""],["d","2023-09",11,"TAXAS ADMINISTRATIVAS","",7.75,1,"CIELO","Boleto Amigo","c",""],["d","2023-09",11,"TAXAS ADMINISTRATIVAS","",7.75,1,"CIELO","Boleto Amigo","k",""],["d","2023-08",25,"REPASSE","",3500,1,"ANA MARIA DA SILVA SOARES","Boleto Amigo","c",""],["d","2023-08",25,"REPASSE","",3500,1,"ANA MARIA DA SILVA SOARES","Boleto Amigo","k",""],["d","2023-08",25,"TAXAS ADMINISTRATIVAS","",101.57,1,"CIELO","Boleto Amigo","c",""],["d","2023-08",25,"TAXAS ADMINISTRATIVAS","",101.57,1,"CIELO","Boleto Amigo","k",""],["d","2023-08",24,"TAXAS ADMINISTRATIVAS","",265.4,1,"CIELO","Boleto Amigo","c",""],["d","2023-08",24,"TAXAS ADMINISTRATIVAS","",265.4,1,"CIELO","Boleto Amigo","k",""],["d","2023-08",14,"TAXAS ADMINISTRATIVAS","",7.75,1,"CIELO","Boleto Amigo","c",""],["d","2023-08",14,"TAXAS ADMINISTRATIVAS","",7.75,1,"CIELO","Boleto Amigo","k",""],["d","2023-07",27,"REPASSE","",192.23,1,"EDINA MARIA BATISTA DA SILVA","Boleto Amigo","c",""],["d","2023-07",27,"REPASSE","",192.23,1,"EDINA MARIA BATISTA DA SILVA","Boleto Amigo","k",""],["d","2023-07",25,"TAXAS ADMINISTRATIVAS","",13.54,1,"CIELO","Boleto Amigo","c",""],["d","2023-07",25,"TAXAS ADMINISTRATIVAS","",13.54,1,"CIELO","Boleto Amigo","k",""],["d","2023-06",23,"REPASSE","",2516.73,1,"LUCIANO DAS NEVES ALVES","Boleto Amigo","c",""],["d","2023-06",23,"REPASSE","",2516.73,1,"LUCIANO DAS NEVES ALVES","Boleto Amigo","k",""],["d","2023-06",22,"OUTRAS DESPESAS","",590,1,"MARIANA PRADO","Boleto Amigo","c",""],["d","2023-06",22,"OUTRAS DESPESAS","",590,1,"MARIANA PRADO","Boleto Amigo","k",""],["d","2023-06",22,"TAXAS ADMINISTRATIVAS","",511.6,1,"CIELO","Boleto Amigo","c",""],["d","2023-06",22,"TAXAS ADMINISTRATIVAS","",511.6,1,"CIELO","Boleto Amigo","k",""],["d","2023-06",12,"TAXAS ADMINISTRATIVAS","",6.97,1,"CIELO","Boleto Amigo","c",""],["d","2023-06",12,"TAXAS ADMINISTRATIVAS","",6.97,1,"CIELO","Boleto Amigo","k",""],["d","2023-05",29,"REPASSE","",100,1,"FABIO SILVA DA VEIGA","Boleto Amigo","c",""],["d","2023-05",29,"REPASSE","",100,1,"FABIO SILVA DA VEIGA","Boleto Amigo","k",""],["d","2023-05",9,"TAXAS ADMINISTRATIVAS","",0.01,1,"CIELO","Boleto Amigo","c",""],["d","2023-05",9,"TAXAS ADMINISTRATIVAS","",0.01,1,"CIELO","Boleto Amigo","k",""],["d","2023-05",8,"OUTRAS DESPESAS","",177.75,1,"DLOCAL BRASIL PAGAMENTOS LTDA","Boleto Amigo","c",""],["d","2023-05",8,"OUTRAS DESPESAS","",177.75,1,"DLOCAL BRASIL PAGAMENTOS LTDA","Boleto Amigo","k",""],["d","2026-06",3,"Sem categoria","",12.95,1,"-","Boleto Amigo","c",""],["d","2026-06",3,"Sem categoria","",12.95,1,"-","Boleto Amigo","k",""],["d","2026-06",2,"ANÚNCIOS DE RÁDIO","",500,1,"EMMANUEL WESLEY RAMOS DA SOUSA","Boleto Amigo","c",""],["d","2026-06",2,"ANÚNCIOS DE RÁDIO","",500,1,"EMMANUEL WESLEY RAMOS DA SOUSA","Boleto Amigo","k",""],["d","2026-06",2,"LIMPEZA E HIGIENIZAÇÃO ESCRITÓRIO","",100,1,"MARIA LUIZA LIMEIRA P COELHO","Boleto Amigo","c",""],["d","2026-06",2,"LIMPEZA E HIGIENIZAÇÃO ESCRITÓRIO","",100,1,"MARIA LUIZA LIMEIRA P COELHO","Boleto Amigo","k",""],["d","2026-06",5,"Sem categoria","",7.77,1,"-","Boleto Amigo","c",""],["d","2026-06",5,"Sem categoria","",7.77,1,"-","Boleto Amigo","k",""],["d","2026-06",3,"DESPESA DE AQUISIÇÃO DE EQUIP OU MANUTENÇÃO","",599,1,"HUGO LEONARDO MOURA","Boleto Amigo","c",""],["d","2026-06",3,"DESPESA DE AQUISIÇÃO DE EQUIP OU MANUTENÇÃO","",599,1,"HUGO LEONARDO MOURA","Boleto Amigo","k",""],["d","2026-06",3,"EMPRESA PRESTADORA DE SERVIÇOS","",64,1,"HUGO LEONARDO MOURA","Boleto Amigo","c",""],["d","2026-06",3,"EMPRESA PRESTADORA DE SERVIÇOS","",64,1,"HUGO LEONARDO MOURA","Boleto Amigo","k",""],["d","2026-06",8,"Sem categoria","",7.77,1,"-","Boleto Amigo","c",""],["d","2026-06",8,"Sem categoria","",7.77,1,"-","Boleto Amigo","k",""],["d","2026-06",5,"DESPESA DE AQUISIÇÃO DE EQUIP OU MANUTENÇÃO","",258,0,"MERCADO LIVRE","Boleto Amigo","c",""],["d","2026-06",4,"DESPESA DE AQUISIÇÃO DE EQUIP OU MANUTENÇÃO","",258,0,"MERCADO LIVRE","Boleto Amigo","k",""],["d","2026-05",20,"TARIFAS BANCÁRIAS","",50,1,"SICOOB","Boleto Amigo","c",""],["d","2026-05",20,"TARIFAS BANCÁRIAS","",50,1,"SICOOB","Boleto Amigo","k",""],["d","2026-05",4,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","c",""],["d","2026-05",4,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","k",""],["d","2026-05",5,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","c",""],["d","2026-05",5,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","k",""],["d","2026-05",6,"TARIFAS BANCÁRIAS","",15.54,1,"SISPAG","Boleto Amigo","c",""],["d","2026-05",6,"TARIFAS BANCÁRIAS","",15.54,1,"SISPAG","Boleto Amigo","k",""],["d","2026-05",7,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG","Boleto Amigo","c",""],["d","2026-05",7,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG","Boleto Amigo","k",""],["d","2026-05",8,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","c",""],["d","2026-05",8,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","k",""],["d","2026-05",11,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG","Boleto Amigo","c",""],["d","2026-05",11,"TARIFAS BANCÁRIAS","",12.95,1,"SISPAG","Boleto Amigo","k",""],["d","2026-05",12,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","c",""],["d","2026-05",12,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","k",""],["d","2026-05",13,"TARIFAS BANCÁRIAS","",31.08,1,"SISPAG","Boleto Amigo","c",""],["d","2026-05",13,"TARIFAS BANCÁRIAS","",31.08,1,"SISPAG","Boleto Amigo","k",""],["d","2026-05",14,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","c",""],["d","2026-05",14,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","k",""],["d","2026-05",15,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","c",""],["d","2026-05",15,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","k",""],["d","2026-05",18,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","c",""],["d","2026-05",18,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","k",""],["d","2026-05",19,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","c",""],["d","2026-05",19,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","k",""],["d","2026-05",22,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","c",""],["d","2026-05",22,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","k",""],["d","2026-05",25,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","c",""],["d","2026-05",25,"TARIFAS BANCÁRIAS","",2.59,1,"SISPAG","Boleto Amigo","k",""],["d","2026-05",29,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","c",""],["d","2026-05",29,"TARIFAS BANCÁRIAS","",5.18,1,"SISPAG","Boleto Amigo","k",""],["d","2026-05",28,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","c",""],["d","2026-05",28,"TARIFAS BANCÁRIAS","",10.36,1,"SISPAG","Boleto Amigo","k",""],["d","2026-05",27,"TARIFAS BANCÁRIAS","",31.08,1,"SISPAG","Boleto Amigo","c",""],["d","2026-05",27,"TARIFAS BANCÁRIAS","",31.08,1,"SISPAG","Boleto Amigo","k",""],["d","2026-05",26,"TARIFAS BANCÁRIAS","",7.77,1,"SICOOB","Boleto Amigo","c",""],["d","2026-05",26,"TARIFAS BANCÁRIAS","",7.77,1,"SICOOB","Boleto Amigo","k",""],["d","2026-06",9,"Sem categoria","",18.13,1,"-","Boleto Amigo","c",""],["d","2026-06",9,"Sem categoria","",18.13,1,"-","Boleto Amigo","k",""]];

const REF_YEAR = 2026;
const AVAILABLE_YEARS = [2029,2028,2027,2026,2025,2024,2023];

// aggregateTx: recomputa MONTH_DATA, KPIS, top categorias/clientes/fornecedores
// e EXTRATO a partir de uma lista filtrada de transacoes. Chamada pelas Pages
// quando drilldown ou statusFilter estao ativos.
function aggregateTx(txList, year) {
  year = year || REF_YEAR;
  const months = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];
  const MONTH_DATA = months.map(m => ({ m, receita: 0, despesa: 0 }));
  const RECEITA_DIA = Array(31).fill(0);
  const DESPESA_DIA = Array(31).fill(0);
  const recCat = new Map(), despCat = new Map();
  const recCli = new Map(), despForn = new Map();
  const extratoArr = [];
  const extratoRecArr = [], extratoDespArr = [];
  let totalReceita = 0, totalDespesa = 0;

  for (const row of txList) {
    const [kind, mes, dia, categoria, cliente, valor, realizado, fornecedor, cc] = row;
    if (!mes) continue;
    const ymonth = mes.slice(0,4);
    if (Number(ymonth) !== year) continue;
    const mIdx = parseInt(mes.slice(5,7), 10) - 1;
    if (mIdx < 0 || mIdx > 11) continue;
    if (kind === 'r') {
      MONTH_DATA[mIdx].receita += valor;
      totalReceita += valor;
      recCat.set(categoria, (recCat.get(categoria) || 0) + valor);
      if (cliente) recCli.set(cliente, (recCli.get(cliente) || 0) + valor);
      if (dia >= 1 && dia <= 31) RECEITA_DIA[dia - 1] += valor;
    } else {
      MONTH_DATA[mIdx].despesa += valor;
      totalDespesa += valor;
      despCat.set(categoria, (despCat.get(categoria) || 0) + valor);
      if (fornecedor) despForn.set(fornecedor, (despForn.get(fornecedor) || 0) + valor);
      if (dia >= 1 && dia <= 31) DESPESA_DIA[dia - 1] += valor;
    }
    // Extrato compacto pra tabela (renomeado pra extRow porque outer for já usa 'row')
    const dataStr = String(dia).padStart(2,'0') + '/' + mes.slice(5,7) + '/' + mes.slice(0,4);
    const extRow = [dataStr, cc || 'Operações', categoria, kind === 'r' ? cliente : fornecedor, kind === 'r' ? valor : -valor, realizado ? 'PAGO' : ''];
    extratoArr.push(extRow);
    if (kind === 'r') extratoRecArr.push(extRow); else extratoDespArr.push(extRow);
  }

  // sort por data desc (string DD/MM/YYYY → Date) — aplica nos 3 arrays
  const sortByDateDesc = (a, b) => {
    const [da,ma,ya] = a[0].split('/').map(Number);
    const [db,mb,yb] = b[0].split('/').map(Number);
    return new Date(yb,mb-1,db) - new Date(ya,ma-1,da);
  };
  extratoArr.sort(sortByDateDesc);
  extratoRecArr.sort(sortByDateDesc);
  extratoDespArr.sort(sortByDateDesc);

  const topN = (mp, n) => Array.from(mp.entries()).map(([name,value]) => ({name,value})).sort((a,b)=>b.value-a.value).slice(0,n);
  const VALOR_LIQUIDO = totalReceita - totalDespesa;
  const MARGEM_LIQUIDA = totalReceita > 0 ? (VALOR_LIQUIDO / totalReceita) * 100 : 0;

  // Saldos acumulados por mês
  const SALDOS_MES = [];
  var _saldo = 0;
  for (var _si = 0; _si < MONTH_DATA.length; _si++) {
    _saldo += MONTH_DATA[_si].receita - MONTH_DATA[_si].despesa;
    SALDOS_MES.push(_saldo);
  }

  return {
    MONTH_DATA,
    RECEITA_CATEGORIAS: topN(recCat, 12),
    DESPESA_CATEGORIAS: topN(despCat, 12),
    RECEITA_CLIENTES: topN(recCli, 12),
    DESPESA_FORNECEDORES: topN(despForn, 12),
    EXTRATO: extratoArr.slice(0, 200),
    EXTRATO_RECEITAS: extratoRecArr.slice(0, 200),
    EXTRATO_DESPESAS: extratoDespArr.slice(0, 200),
    RECEITA_DIA: RECEITA_DIA,
    DESPESA_DIA: DESPESA_DIA,
    SALDOS_MES: SALDOS_MES,
    KPIS: {
      TOTAL_RECEITA: totalReceita,
      TOTAL_DESPESA: totalDespesa,
      VALOR_LIQUIDO,
      MARGEM_LIQUIDA,
      VALOR_LIQ_SERIES: MONTH_DATA.map(m => m.receita - m.despesa),
    },
  };
}

// applyDrilldown: filtra ALL_TX baseado em statusFilter + drilldown + regime.
// statusFilter: 'realizado' | 'a_pagar_receber' | 'tudo'
// drilldown: null | { type: 'mes'|'categoria'|'cliente'|'fornecedor', value: ... }
// regime: 'caixa' | 'competencia' | null (null = caixa default)
function filterTx(allTx, statusFilter, drilldown, regime, extraFilters) {
  let out = allTx;
  // Filtro por regime (caixa/competencia) — index [9]: 'c' ou 'k'
  var rg = (regime === 'competencia') ? 'k' : 'c';
  out = out.filter(r => r[9] === rg);
  if (statusFilter === 'realizado') out = out.filter(r => r[6] === 1);
  else if (statusFilter === 'a_pagar_receber') out = out.filter(r => r[6] === 0);
  if (drilldown) {
    if (drilldown.type === 'mes') out = out.filter(r => r[1] === drilldown.value);
    else if (drilldown.type === 'categoria') out = out.filter(r => r[3] === drilldown.value);
    else if (drilldown.type === 'cliente') out = out.filter(r => r[0] === 'r' && r[4] === drilldown.value);
    else if (drilldown.type === 'fornecedor') out = out.filter(r => r[0] === 'd' && r[7] === drilldown.value);
    else if (drilldown.type === 'dia') out = out.filter(r => r[2] === drilldown.value + 1);
  }
  // Extra filters: dateFrom, dateTo, categoria
  if (extraFilters) {
    if (extraFilters.dateFrom) {
      // dateFrom format: "YYYY-MM-DD"
      var dfYm = extraFilters.dateFrom.slice(0, 7); // "YYYY-MM"
      var dfDay = parseInt(extraFilters.dateFrom.slice(8, 10), 10);
      out = out.filter(function(r) {
        if (r[1] > dfYm) return true;
        if (r[1] < dfYm) return false;
        return r[2] >= dfDay;
      });
    }
    if (extraFilters.dateTo) {
      var dtYm = extraFilters.dateTo.slice(0, 7);
      var dtDay = parseInt(extraFilters.dateTo.slice(8, 10), 10);
      out = out.filter(function(r) {
        if (r[1] < dtYm) return true;
        if (r[1] > dtYm) return false;
        return r[2] <= dtDay;
      });
    }
    if (extraFilters.categorias && extraFilters.categorias.length > 0) {
      var _catSet = new Set(extraFilters.categorias);
      out = out.filter(function(r) { return _catSet.has(r[3]); });
    } else if (extraFilters.categoria && extraFilters.categoria !== "Todas categorias") {
      out = out.filter(function(r) { return r[3] === extraFilters.categoria; });
    }
    if (extraFilters.diaFrom && extraFilters.diaFrom > 0) {
      out = out.filter(function(r) { return r[2] >= extraFilters.diaFrom; });
    }
    if (extraFilters.diaTo && extraFilters.diaTo > 0) {
      out = out.filter(function(r) { return r[2] <= extraFilters.diaTo; });
    }
    if (extraFilters.empresas && extraFilters.empresas.length > 0) {
      var _empSet = new Set(extraFilters.empresas);
      out = out.filter(function(r) { return _empSet.has(r[8]); });
    } else if (extraFilters.empresa && extraFilters.empresa !== "Todas empresas") {
      out = out.filter(function(r) { return r[8] === extraFilters.empresa; });
    }
    if (extraFilters.tags && extraFilters.tags.length > 0) {
      var _tags = extraFilters.tags;
      out = out.filter(function(r) {
        var t = r[10] || '';
        for (var _ti = 0; _ti < _tags.length; _ti++) { if (t.indexOf(_tags[_ti]) !== -1) return true; }
        return false;
      });
    } else if (extraFilters.tag && extraFilters.tag !== "Todas tags") {
      out = out.filter(function(r) { return (r[10] || '').indexOf(extraFilters.tag) !== -1; });
    }
    if (extraFilters.fornecedorSearch) {
      var fs = extraFilters.fornecedorSearch.toLowerCase();
      out = out.filter(function(r) {
        var nome = (r[0] === 'd' ? r[7] : r[4]) || '';
        return nome.toLowerCase().indexOf(fs) !== -1;
      });
    }
  }
  return out;
}

// Sintetiza um BIT "flat" baseado no filtro escolhido (window.BIT_FILTER).
// Default: 'realizado' (PAGO).
function _makeBit(filter) {
  const seg = SEGMENTS[filter] || SEGMENTS.realizado;
  const K = seg.KPIS;
  const indicadores = {
    TOTAL_RECEITA: K.TOTAL_RECEITA,
    TOTAL_DESPESA: K.TOTAL_DESPESA,
    VALOR_LIQUIDO: K.VALOR_LIQUIDO,
    MARGEM_LIQUIDA: K.MARGEM_LIQUIDA,
    IMPOSTOS: 0,
    EBITDA: K.VALOR_LIQUIDO,
    RESULTADO_OPERACIONAL: K.VALOR_LIQUIDO,
    CAPEX: 0,
    MARGEM_CONTRIB: K.MARGEM_LIQUIDA,
    EBITDA_PCT: K.MARGEM_LIQUIDA,
    IMPOSTOS_PCT: 0,
  };
  return Object.assign({
    META, POSICAO_CAIXA, COMPOSICAO_DESPESA,
    MONTHS, MONTHS_FULL, fmt, fmtK, fmtPct,
    SEGMENTS,
    MONTH_DATA: seg.MONTH_DATA,
    RECEITA_CATEGORIAS: seg.RECEITA_CATEGORIAS,
    DESPESA_CATEGORIAS: seg.DESPESA_CATEGORIAS,
    RECEITA_CLIENTES: seg.RECEITA_CLIENTES,
    DESPESA_FORNECEDORES: seg.DESPESA_FORNECEDORES,
    EXTRATO: seg.EXTRATO,
    DIAS: Array.from({ length: 31 }, (_, i) => i + 1),
    RECEITA_DIA: seg.RECEITA_DIA,
    DESPESA_DIA: seg.DESPESA_DIA,
    SALDOS_MES: seg.SALDOS_MES,
    VALOR_LIQ_SERIES: K.VALOR_LIQ_SERIES,
    FLUXO_RECEITA: seg.FLUXO_RECEITA,
    FLUXO_DESPESA: seg.FLUXO_DESPESA,
    COMP_DATA: seg.COMP_DATA,
    RECDESP_AREA: seg.MONTH_DATA.map(m => ({ m: m.m.slice(0,3), receita: m.receita, despesa: m.despesa })),
  }, indicadores);
}

window.BIT = _makeBit(window.BIT_FILTER || 'realizado');
window._makeBit = _makeBit;
window.BIT_SEGMENTS = SEGMENTS;
window.BIT_META = META;
window.ALL_TX = ALL_TX;
window.REF_YEAR = REF_YEAR;
window.AVAILABLE_YEARS = AVAILABLE_YEARS;
window.aggregateTx = aggregateTx;
window.filterTx = filterTx;
// Cache LRU para getBit — evita recompute repetido com mesmos params
var _bitCache = new Map();
var _bitCacheMax = 16;
function _bitCacheKey(sf, dd, y, regime, ef) {
  return sf + '|' + (dd ? dd.type + ':' + dd.value : '-') + '|' + y + '|' + (regime || 'caixa') + '|' + (ef ? JSON.stringify(ef) : '-');
}
window.getBit = function (statusFilter, drilldown, year, month, regime, extraFilters) {
  const sf = statusFilter || window.BIT_FILTER || 'realizado';
  const y = year || window.REF_YEAR;
  let dd = drilldown;
  if (!dd && month && month >= 1 && month <= 12) {
    const mm = String(month).padStart(2, '0');
    const ym = y + '-' + mm;
    dd = { type: 'mes', value: ym, label: ym };
  }
  var key = _bitCacheKey(sf, dd, y, regime, extraFilters);
  if (_bitCache.has(key)) return _bitCache.get(key);
  var result = window.recomputeBit(sf, dd, y, regime, extraFilters);
  if (_bitCache.size >= _bitCacheMax) { var first = _bitCache.keys().next().value; _bitCache.delete(first); }
  _bitCache.set(key, result);
  return result;
};
// Invalidate cache when statusFilter changes
window._invalidateBitCache = function() { _bitCache.clear(); };
// Cross-filter helper: combina statusFilter + drilldown + regime e retorna BIT-like
// com KPIs/charts/extrato recalculados em ~10ms (17k rows).
window.recomputeBit = function (statusFilter, drilldown, year, regime, extraFilters) {
  const filtered = filterTx(ALL_TX, statusFilter, drilldown, regime || 'caixa', extraFilters);
  const agg = aggregateTx(filtered, year || REF_YEAR);
  // Mescla com BIT base pra preservar META, helpers (fmt, fmtK), MONTHS etc.
  const base = window.BIT || {};
  return Object.assign({}, base, agg, {
    TOTAL_RECEITA: agg.KPIS.TOTAL_RECEITA,
    TOTAL_DESPESA: agg.KPIS.TOTAL_DESPESA,
    VALOR_LIQUIDO: agg.KPIS.VALOR_LIQUIDO,
    MARGEM_LIQUIDA: agg.KPIS.MARGEM_LIQUIDA,
  });
};
window.BIT_ORCAMENTO = [];
