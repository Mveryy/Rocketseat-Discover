function converterGraus() {
    let celsius = 30;
    let fahrenheit = 86;

    const celsiusToFahrenheit = (celsius * 9) / 5 + 32;
    console.log(`${celsius} graus Celsius equivalem à ${celsiusToFahrenheit} graus Fahrenheit.`);

    const fahrenheitToCelsius = ((fahrenheit - 32) * 5) / 9;
    console.log(`${fahrenheit} graus Fahrenheit equivalem à ${fahrenheitToCelsius} graus Celsius.`);
}

// console.log(converterGraus());

//TransformDegree (mayk)
const transformDegree = (degree) => {
    const celsiusExists = degree.toUpperCase().includes("C");
    const fahrenheitExists = degree.toUpperCase().includes("F");

    if (!celsiusExists && !fahrenheitExists) {
        throw new Error("Grau não identificado");
    }
    //F -> C
    let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
    let degreeSign = "C";

    //C -> F
    if (celsiusExists) {
        updatedDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = (celsius) => (celsius * 9) / 5 + 32;
        degreeSign = "F";
    }

    return formula(updatedDegree) + degreeSign;
};

try {
    console.log(transformDegree("50F"));
    console.log(transformDegree("30C"));
} catch (error) {
    console.log(error.message);
}
