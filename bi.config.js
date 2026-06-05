module.exports = {
  cliente: {
    nome: "Boleto Amigo",
    subdomain: "boletoamigo-bi",
    coolify_app_uuid: "bahb4txdqr2su1vk6wqvd90k",
    cor_primaria: "#06b6d4",
  },
  fontes: {
    adapters: ["boletoamigo-xlsx"],
    boletoamigo_xlsx: {
      files: ["Boleto Amigo - Caixa Real.xlsx"],
      vendas_path: "G:/Meu Drive/BGP/CLIENTES/BI/450.  ECONOMY ASSESSORIA/BASES/Vendas",
      vendas_files: [
        "Economy Brasília - Vendas - 2025_a_2026.xlsx",
        "Boleto Amigo - Vendas e Cancelamentos.xlsx",
      ],
      vendedores_file: "Economy Brasilia - Dimensao Vendedores.xlsx",
      cancelamentos_file: "G:/Meu Drive/BGP/CLIENTES/BI/450.  ECONOMY ASSESSORIA/BASES/Cancelamentos Vendas/CONSOLIDADO - Cancelamentos Vendas.xlsx",
      empresa_filter: "Boleto Amigo",
    },
    drive: {
      base_path: "G:/Meu Drive/BGP/CLIENTES/BI/450.  ECONOMY ASSESSORIA/BASES/Por Empresa v2",
    },
  },
  pages: {
    geral: {
      overview: "active", receita: "active", despesa: "active",
      fluxo: "active", tesouraria: "active", comparativo: "active",
      relatorio: "active", valuation: "hidden", orcamento: "hidden", dre: "active",
    },
    outros: {
      indicators: "hidden", faturamento_produto: "hidden", curva_abc: "hidden",
      marketing: "hidden", hierarquia: "hidden", detalhado: "hidden",
      profunda_cliente: "hidden", crm: "hidden",
      consolidado: "active", vendas: "active", cancelamentos: "active",
    },
  },
  meta: { ano_corrente: 2026, metas_crm: { mes: 0, ano: 0 }, valuation_premissas: { wacc: 25, growth_year2: 20, growth_year3: 20, ipca: 4.5, perpetuity_growth: 10 } },
  template: { version_when_created: "1.0.0", version_last_synced: "1.0.0" },
};
