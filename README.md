1. run `npm run build && npm run start`
2. open `http://localhost:3000`
3. navigate to `http://localhost:3000/random-number`, write down the number, I'll call it `number1`
4. navigate back to `http://localhost:3000` immediately, wait for > 25 seconds
5. then hover over the random number button and a new prefetch request will be sent because client-side router cache is stale now
6. click on the random number button, you should still see the same number (`number1`) because the previous prefetch request still sent back stale data, while in the background triggering a rull route cache revalidation. After the revalidation, the full route cache should store a new number, `number2`.
7. go back to `http://localhost:3000` and wait for > 25 seconds. The reason we should wait for 25 seconds is because the client-side router cache is fresh for another 25 seconds
8. hover over the random number button, and another prefetch request should be sent (because the client-side router cache is stale), giving back the number `number2` that is stored in
   the full route cache. However that is not what happens. You will still see `number1`, because the prefetch request is never sent. No matter how long you wait, the prefetch request is never sent.
9. In order to see `number2`, you have to manually refresh the page.
