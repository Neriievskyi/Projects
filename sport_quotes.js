var quotes = [
    `Finding good players is easy`,
    `You can't win unless you learn how to lose`,
    `Many men go fishing all of their lives without knowing that it is not fish they are after`,
    `Winners never quit and quitters never win`,
    `Football is football and talent is talent`,
    `Just play`,
    `Success is where preparation and opportunity meet`,
    `What makes something special is not just what you have to gain, but what you feel there is to lose`,
    `The more difficult the victory, the greater the happiness in winning`,
    `One man can be a crucial ingredient on a team, but one man cannot make a team`,
    `The mind is the limit. As long as the mind can envision the fact that you can do something, you can do it, as long as you really believe 100 percent`,
    `When I go out there, I have no pity on my brother. I am out there to win`,
    `You have to expect things of yourself before you can do them`,
    `Your biggest opponent isn’t the other guy. It’s human nature`,
    `If you can believe it, the mind can achieve it`,
    `Without self-discipline success is impossible`,
    `Obstacles don’t have to stop you. If you run into a wall, don’t turn around and give up. Figure out how to climb it, go through it, or work around it`,
    `Make each day your masterpiece`,
    `Excellence is the gradual result of always striving to do better`,
    `Do you know what my favorite part of the game is? The opportunity to play`
], button = document.getElementById(`quoteButton`),
    randomResult = document.getElementById(`quoteResult`),
    size = quotes.length;

button.addEventListener(`click`, function () {
    randomResult.innerText = quotes [Math.floor(Math.random() * size)];
});