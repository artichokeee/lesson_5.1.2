curl -H "Content-Type: text/xml" -X POST -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5hbnQiOiI1YmM2YmEwYy02NmVkLTNmYzctOTE4NC1jMjE5NDhjYjBhNWMiLCJhY2NvdW50SWQiOiI2MTNhNjk4OGJiYTZjNzAwNmE0YWFlZGEiLCJpc1hlYSI6ZmFsc2UsImlhdCI6MTcwNzA1OTMwNSwiZXhwIjoxNzA3MTQ1NzA1LCJhdWQiOiI2MjEwMUYyOUJDMjA0MjRDOTU1Njg3M0IzMzE1NEVGMSIsImlzcyI6ImNvbS54cGFuZGl0LnBsdWdpbnMueHJheSIsInN1YiI6IjYyMTAxRjI5QkMyMDQyNEM5NTU2ODczQjMzMTU0RUYxIn0.o4NfZCA348jWpkE4CfwRisUjL8rx8hwk2SCE3wHw0Zs"  --data @"/Users/rusau/Documents/js_course/hw/lesson_5.1.2/test-results.xml" https://xray.cloud.getxray.app/api/v2/import/execution/junit?projectKey=CYP

curl -H "Content-Type: application/json" -X POST --data '{ "client_id": "your_id","client_secret": "ypur_secret" }' https://xray.cloud.getxray.app/api/v1/authenticate


