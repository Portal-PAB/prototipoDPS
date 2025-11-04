// 1. Crescimento de Seguidores
const tempoCrescimento = Array.from({ length: 25 }, (_, i) => i);
const seguidoresCrescimento = tempoCrescimento.map((x) => 5000 * Math.pow(1.08, x));
new Chart(document.getElementById("seguidoresChart"), {
    type: "line",
    data: {
        labels: tempoCrescimento,
        datasets: [
            {
                label: "Seguidores (f(t))",
                data: seguidoresCrescimento,
                borderColor: "purple",
                borderWidth: 2,
                fill: false,
                tension: 0.2,
            },
        ],
    },
    options: {
        scales: {
            x: { title: { display: true, text: "Tempo (meses)" } },
            y: { title: { display: true, text: "Seguidores" } },
        },
    },
});


// 2. Audiência em Finais do Campeonato Brasileiro Feminino
const anosAudiencia = ["2021", "2022", "2023", "2024", "2025"];
const audiencia = [10000, 13500, 18225, 24584, 42566];

new Chart(document.getElementById("audienciaChart"), {
    type: "line",
    data: {
        labels: anosAudiencia,
        datasets: [{
            label: "Audiência (número de espectadores)",
            data: audiencia,
            borderColor: "purple",
            borderWidth: 2,
            fill: false,
            tension: 0.3,
            pointRadius: anosAudiencia.map(ano => ano === "2025" ? 6 : 4),
            pointBackgroundColor: "purple",
            pointStyle: anosAudiencia.map(ano => ano === "2025" ? "star" : "circle")
        }]
    },
    options: {
        plugins: {
            legend: { display: true },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        const valor = context.parsed.y.toLocaleString("pt-BR");
                        return `Audiência: ${valor} espectadores`;
                    }
                }
            }
        },
        scales: {
            x: {
                title: { display: true, text: "Ano" }
            },
            y: {
                title: { display: true, text: "Número de Espectadores" },
                beginAtZero: true
            }
        }
    }
});


// 3. Comparação de Velocidade das Jogadoras
const tempoVelociade = Array.from({ length: 11 }, (_, i) => i);

const velocidadeA = tempoVelociade.map((t) => 5 + 0.5 * t);
const velocidadeB = tempoVelociade.map(() => 6);

new Chart(document.getElementById("velocidadeChart"), {
    type: "line",
    data: {
        labels: tempoVelociade,
        datasets: [
            {
                label: "Jogadora A (aceleração)",
                data: velocidadeA,
                borderColor: "purple",
                borderWidth: 2,
                fill: false,
                tension: 0.3,
                pointRadius: 4,
                pointBackgroundColor: "purple",
            },
            {
                label: "Jogadora B (constante)",
                data: velocidadeB,
                borderColor: "green",
                borderWidth: 2,
                fill: false,
                tension: 0.3,
                pointRadius: 4,
                pointBackgroundColor: "green",
            },
        ],
    },
    options: {
        plugins: {
            legend: { display: true },
        },
        scales: {
            x: {
                title: { display: true, text: "Tempo (s)" },
            },
            y: {
                title: { display: true, text: "Velocidade (m/s)" },
                beginAtZero: true,
            },
        },
    },
});


// 4. Crescimento de Seguidores
const mesesLimCres = Array.from({ length: 25 }, (_, i) => i); // 0 a 24 meses
const seguidoresLimCres = mesesLimCres.map((t) => 5000 * Math.pow(1.08, t));

new Chart(document.getElementById("seguidoresLimChart"), {
    type: "line",
    data: {
        labels: mesesLimCres,
        datasets: [
            {
                label: "Seguidores (f(t) = 5000 × 1.08^t)",
                data: seguidoresLimCres,
                borderColor: "purple",
                borderWidth: 2,
                fill: false,
                tension: 0.3,
                pointRadius: 3,
                pointBackgroundColor: "purple",
            },
        ],
    },
    options: {
        scales: {
            x: { title: { display: true, text: "Meses" } },
            y: {
                title: { display: true, text: "Número de Seguidores" },
                beginAtZero: true,
            },
        },
    },
});

const meses = Array.from({ length: 25 }, (_, i) => i);

// Função de crescimento com limite (saturação)
const seguidoresLim = meses.map(
    (t) => 50000 * (1 - Math.exp(-0.15 * t))
);

new Chart(document.getElementById("seguidoresLimSatChart"), {
    type: "line",
    data: {
        labels: meses,
        datasets: [
            {
                label: "Seguidores (f(t) = 50000 × (1 − e^−0.15t))",
                data: seguidoresLim,
                borderColor: "purple",
                borderWidth: 2,
                fill: false,
                tension: 0.3,
                pointRadius: 3,
                pointBackgroundColor: "purple",
            },
        ],
    },
    options: {
        scales: {
            x: { title: { display: true, text: "Meses" } },
            y: {
                title: { display: true, text: "Número de Seguidores" },
                beginAtZero: true,
                suggestedMax: 55000,
            },
        },
    },
});



// 5. Audiência em Finais do Campeonato Limite;
const anosLim = Array.from({ length: 11 }, (_, i) => i); // 0 a 10 anos
const audienciaLim = anosLim.map(t => 10000 + 700 * t);

new Chart(document.getElementById("audienciaLimChart"), {
    type: "line",
    data: {
        labels: anosLim,
        datasets: [{
            label: "Audiência (A(t) = 10000 + 700t)",
            data: audienciaLim,
            borderColor: "purple",
            borderWidth: 2,
            fill: false,
            tension: 0.3,
            pointRadius: 3,
            pointBackgroundColor: "purple"
        }]
    },
    options: {
        scales: {
            x: { title: { display: true, text: "Anos desde 2020" } },
            y: { title: { display: true, text: "Número de Espectadores" }, beginAtZero: true }
        }
    }
});


// 6. Velocidade da Jogadora A Limite
const segundosVel = Array.from({ length: 21 }, (_, i) => i); // 0 a 20 segundos
const velocidadeVel = segundosVel.map((t) => 5 + 0.5 * t);

new Chart(document.getElementById("velocidadeLimChart"), {
    type: "line",
    data: {
        labels: segundosVel,
        datasets: [
            {
                label: "Velocidade (v(t) = 5 + 0.5t)",
                data: velocidadeVel,
                borderColor: "purple",
                borderWidth: 2,
                fill: false,
                tension: 0.3,
                pointRadius: 3,
                pointBackgroundColor: "purple",
            },
        ],
    },
    options: {
        scales: {
            x: { title: { display: true, text: "Tempo (s)" } },
            y: {
                title: { display: true, text: "Velocidade (m/s)" },
                beginAtZero: true,
            },
        },
    },
});

// 7. Velocidade de uma jogadora
// Tempo em segundos
const tempo = Array.from({ length: 21 }, (_, i) => i); // 0 a 20 segundos
const velocidade = tempo.map(t => 5 + 0.5 * t);

new Chart(document.getElementById("velocidadeDerChart"), {
    type: "line",
    data: {
        labels: tempo,
        datasets: [{
            label: "Velocidade da Jogadora A (v(t) = 5 + 0.5t)",
            data: velocidade,
            borderColor: "purple",
            borderWidth: 2,
            fill: false,
            tension: 0.3,
            pointRadius: 3,
            pointBackgroundColor: "purple"
        }]
    },
    options: {
        scales: {
            x: { title: { display: true, text: "Tempo (s)" } },
            y: { title: { display: true, text: "Velocidade (m/s)" }, beginAtZero: true }
        }
    }
});

// 8. Crescimento de engajamento em campanha digital
const dias = Array.from({ length: 11 }, (_, i) => i); // 0 a 10 dias

// Engajamento: E(t) = -t^2 + 10t
const engajamento = dias.map((t) => -Math.pow(t, 2) + 10 * t);

new Chart(document.getElementById("engajamentoDerChart"), {
    type: "line",
    data: {
        labels: dias,
        datasets: [
            {
                label: "Engajamento (E(t) = -t² + 10t)",
                data: engajamento,
                borderColor: "purple",
                borderWidth: 2,
                fill: false,
                tension: 0.3,
                pointRadius: 3,
                pointBackgroundColor: "purple",
            },
        ],
    },
    options: {
        scales: {
            x: { title: { display: true, text: "Dias" } },
            y: {
                title: { display: true, text: "Engajamento (interações)" },
                beginAtZero: true,
            },
        },
    },
});


// 9. Distância percorrida pela Jogadora A

const tempoInt = Array.from({ length: 11 }, (_, i) => i); // 0 a 10 segundos
const distanciaInt = tempoInt.map(t => 5 * t + 0.25 * t * t); // s(t) = 5t + 0.25t²

new Chart(document.getElementById("distanciaIntChart"), {
    type: "line",
    data: {
        labels: tempoInt,
        datasets: [{
            label: "Distância (s(t) = 5t + 0.25t²)",
            data: distanciaInt,
            borderColor: "purple",
            borderWidth: 2,
            fill: true,
            backgroundColor: "rgba(128,0,128,0.2)",
            tension: 0.3,
            pointRadius: 3,
            pointBackgroundColor: "purple"
        }]
    },
    options: {
        scales: {
            x: { title: { display: true, text: "Tempo (s)" } },
            y: { title: { display: true, text: "Distância (m)" }, beginAtZero: true }
        }
    }
});


// 10. Engajamento total em campanha digital

const diasInt = Array.from({ length: 11 }, (_, i) => i); // 0 a 10 dias
const engajamentoInt = diasInt.map(t => -t * t + 10 * t); // E(t) = -t² + 10t

new Chart(document.getElementById("engajamentoIntChart"), {
    type: "line",
    data: {
        labels: diasInt,
        datasets: [{
            label: "Engajamento acumulado (E(t) = -t² + 10t)",
            data: engajamentoInt,
            borderColor: "purple",
            borderWidth: 2,
            fill: true,
            backgroundColor: "rgba(128,0,128,0.2)",
            tension: 0.3,
            pointRadius: 3,
            pointBackgroundColor: "purple"
        }]
    },
    options: {
        scales: {
            x: { title: { display: true, text: "Dias" } },
            y: { title: { display: true, text: "Engajamento (interações)" }, beginAtZero: true }
        }
    }
});
