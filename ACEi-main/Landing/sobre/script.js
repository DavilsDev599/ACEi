document.addEventListener('DOMContentLoaded', () => {
    // Dados dos homenageados (extraídos do conteúdo da página)
    const honorees = [
        {
            id: 'jsl',
            iniciais: 'JSL',
            nome: 'José da Silva Lima',
            cargo: 'Presidente — Gestão 2010-2014',
            descricao: 'Liderou importantes reformas estatutárias e ampliou a representatividade da entidade junto aos poderes públicos.'
        },
        {
            id: 'mos',
            iniciais: 'MOS',
            nome: 'Maria Oliveira Santos',
            cargo: 'Membro Honorário',
            descricao: 'Dedicou mais de duas décadas ao associativismo, sendo reconhecida pelo trabalho voluntário e pela defesa do comércio local.'
        },
        {
            id: 'apn',
            iniciais: 'APN',
            nome: 'Antônio Pereira Neto',
            cargo: 'Presidente — Gestão 2014-2018',
            descricao: 'Fortaleceu os convênios institucionais e implementou projetos de capacitação para associados.'
        },
        {
            id: 'abc',
            iniciais: 'ABC',
            nome: 'Ana Beatriz Costa',
            cargo: 'Tesoureira — Gestão 2008-2012',
            descricao: 'Responsável pela reorganização financeira da associação, garantindo sustentabilidade e transparência.'
        },
        {
            id: 'ceb',
            iniciais: 'CEB',
            nome: 'Carlos Eduardo Braga',
            cargo: 'Conselheiro Emérito',
            descricao: 'Referência em governança associativa, contribuiu para a modernização dos processos internos da ACEI.'
        },
        {
            id: 'fm',
            iniciais: 'FM',
            nome: 'Francisca Mendes',
            cargo: 'Presidente — Gestão 2018-2022',
            descricao: 'Ampliou a presença digital da entidade e criou programas de incentivo ao empreendedorismo feminino.'
        }
    ];

    // Referência ao container
    const container = document.getElementById('honorees-container');

    // Gera os cards dinamicamente
    function renderHonorees() {
        // Limpa o container (opcional, mas garante que só teremos os cards)
        container.innerHTML = '';

        // Para cada homenageado, cria um card
        honorees.forEach(person => {
            const card = document.createElement('div');
            card.className = 'honoree-card';

            // Conteúdo do card
            card.innerHTML = `
                <span class="honoree-iniciais">${person.iniciais}</span>
                <h3 class="honoree-nome">${person.nome}</h3>
                <p class="honoree-cargo">${person.cargo}</p>
                <p class="honoree-descricao">${person.descricao}</p>
            `;

            container.appendChild(card);
        });
    }

    // Renderiza tudo
    renderHonorees();
});