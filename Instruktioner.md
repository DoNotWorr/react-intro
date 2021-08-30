# Övning 7.1 - Lösenordsauktorisering

Vi ska i denna övning göra en enkel implementation av lösenordsauktorisering med hjälp av React. Målet är att endast visa vissa komponenter när användaren är inloggad.

För att komma åt egenskaper i state använder du `this.state.authorized` ex.

1. Ändra `<h1>` så att den visar "Welcome" om användaren är auktoriserad, och "Enter your password" om användaren inte är det. Testa skillnaden genom att ändra `this.state.authorized` i koden.
2. Skapa ett formulär för inloggning med ett textfält och en submit button. Lägg värdet i en konstant med namnet `loginForm`. Sätt formulärets action till #. Input type MÅSTE vara `password` för att .authorize() ska fungera.
3. Lägg till så att `.authorize()` kallas `onSubmit`. I nuläget är inte `.authorize()` varken en arrow-funktion eller bind:ad korrekt. Gör om `.authorize()` till en arrow-funktion.
4. Skapa en paragraf som senare bara kommer visas om användaren är inloggad. Fyll den med lite text och lägg den i en konstant med valfritt namn.
5. Under `<h1>` lägg till en ny rad som renderar rätt element beroende på om användaren är inloggad eller inte. Använd `?`-operatorn.
