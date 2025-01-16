
# NubiWeather

NubiWeather to aplikacja pogodowa, która umożliwia użytkownikom sprawdzenie prognozy pogody w dwóch miastach: Gliwicach i Hamburgu. Aplikacja jest zbudowana w technologii React i korzysta z API WeatherAPI do pobierania danych pogodowych. W ramach rozwoju dodane będą inne miasta (poprzez wyszukiwarke) oraz live pogoda (ale to wszystko w swoim czasie w ramach zabawy :D )

### Funkcje:
- Wyświetlanie bieżącej pogody w Gliwicach i Hamburgu, w tym temperatury, warunków pogodowych oraz ikony.
- Pokazanie prognozy pogody na 7 dni dla każdego miasta w formie karuzeli.

---

## Wymagania

- Node.js (wersja 16 lub wyższa)
- npm lub yarn (menedżer pakietów)

---

## Instalacja

### 1. Sklonuj repozytorium

```bash
git clone https://github.com/PioSwi00/nubiweather.git
```

### 2. Przejdź do katalogu projektu

```bash
cd nubiweather-recruitment
cd frontend
cd react-ts
```

### 3. Zainstaluj zależności

```bash
npm install
```

lub jeśli używasz yarn:

```bash
yarn install
```

---

## Uruchamianie aplikacji

### 4. Uruchom serwer deweloperski

```bash
npm run dev
```

lub jeśli używasz yarn:

```bash
yarn start
```

Aplikacja zostanie uruchomiona na lokalnym serwerze 

---

## Zmienne środowiskowe

Aplikacja korzysta z API [WeatherAPI](https://www.weatherapi.com/) do pobierania danych pogodowych. Aby używać aplikacji, musisz mieć klucz API z WeatherAPI.

### 5. Skonfiguruj klucz API

```

Zastąp `twój_klucz_api` swoim rzeczywistym kluczem API z WeatherAPI. Bądź skorzystaj z aktualnego.

---

## Przegląd aplikacji

Po otwarciu aplikacji zobaczysz:
- Stronę główną z linkiem do prognozy
- Bieżącą pogodę oraz prognozę na 7 dni dla **Gliwic** i **Hamburga** (aplikacja obsługuje tylko te dwa miasta).
- Karuzelę z prognozą pogody na 7 dni dla każdego miasta.
- Przycisk, który przekierowuje Cię z ekranu głównego do szczegółów pogody.

Dane pogodowe obejmują:
- Bieżącą temperaturę w stopniach Celsjusza.
- Warunki pogodowe (np. słonecznie, deszczowo).
- Ikonę reprezentującą warunki pogodowe.
- Prognozę na 7 dni z średnimi temperaturami i warunkami pogodowymi.

---

## Technologie użyte w projekcie

- **React** – biblioteka JavaScript do tworzenia interfejsów użytkownika.
- **Tailwind CSS** – framework CSS typu utility-first.
- **Axios** – klient HTTP oparty na obietnicach do wykonywania zapytań API.
- **WeatherAPI** – usługa API do pobierania danych pogodowych.

---

## Znane problemy i przyszłe ulepszenia

- Obecnie aplikacja obsługuje tylko dwa miasta (Gliwice i Hamburg).
- Dane pogodowe nie są aktualizowane na żywo – aplikacja korzysta z danych zapisanych w pamięci podręcznej, dopóki nie zostanie przeładowana strona.

Przyszłe ulepszenia mogą obejmować:
- Obsługę większej liczby miast.
- Dodanie szczegółowych informacji pogodowych .
- Możliwość dynamicznego wyszukiwania dowolnego miasta.
- Więcej animowanych efektów

---

## Licencja

Projekt jest dostępny na licencji MIT – zobacz plik [LICENSE](LICENSE) dla szczegółów.

---

Czuj się swobodnie, aby skontaktować się w razie pytań lub sugestii dotyczących tego projektu!
