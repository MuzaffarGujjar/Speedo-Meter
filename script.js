var opts = {
    lines: 12,
    angle: 0.00,
    lineWidth: 0.44,
    pointer: {
        length: 0.5,
        strokeWidth: 0.035,
        color: 'red'
    },
    limitMax: false,
    colorStart: 'blue',
    colorStop: '#8fc0da',
    strokeColor: '#e0e0e0',
    generateGradient: true
};

var target = document.getElementById('foo');
var gauge = new Gauge(target).setOptions(opts);

gauge.maxValue = 200;
gauge.animationSpeed = 32;

function chamar(valor) {
    valor = document.getElementById("campo").value;
    gauge.set(valor);
}