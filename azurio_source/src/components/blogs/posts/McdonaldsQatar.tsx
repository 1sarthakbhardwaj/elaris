import ArticleImage from "@/components/blogs/blocks/ArticleImage";
import ArticleVideo from "@/components/blogs/blocks/ArticleVideo";
import Callout from "@/components/blogs/blocks/Callout";
import NumberedFrames from "@/components/blogs/blocks/NumberedFrames";
import StatRow from "@/components/blogs/blocks/StatRow";
import TableOfContents from "@/components/blogs/blocks/TableOfContents";
import { STUDIO_APP_URL } from "@/lib/site";

export default function McdonaldsQatar() {
  return (
    <>
      <div className="mxd-article__block">
        <p className="mxd-article__excerpt">
          McDonald&apos;s Taste the Mixperience went live across Doha on screens
          that read the real temperature outside, in real time. The hotter the
          city got, the harder the ice-cold Sprite payoff landed.
          <span>
            Here is how we turned one flat PSD into a living, weather-reactive
            campaign.
          </span>
        </p>
      </div>
      <TableOfContents
        items={[
          { id: "chapter-01", label: "Live on a screen, not a render" },
          { id: "chapter-02", label: "One PSD. Nine venues. Two weeks." },
          { id: "chapter-03", label: "Make Doha's heat the media" },
          { id: "chapter-04", label: "From a flat PSD to a living creative" },
          { id: "chapter-05", label: "Software behind every screen" },
          { id: "chapter-06", label: "Every screen the city runs" },
        ]}
      />
      <div id="chapter-01" className="mxd-article__block">
        <h3>Live on a screen, not a render.</h3>
        <p className="mxd-article__normal">
          This is the actual panel running in Doha. The number on it is pulled
          from the real weather, and it updates while the campaign is live.
        </p>
      </div>
      <ArticleVideo
        src="/blogs/mcdonalds-qatar-live-dooh/assets/live-panel.mp4"
        poster="/blogs/mcdonalds-qatar-live-dooh/assets/live-panel-poster.jpg"
        caption="QIIB tower, Doha. One of nine venues across the city."
        autoPlay
      />
      <StatRow
        stats={[
          { value: "1", label: "Master PSD" },
          { value: "9", label: "Venues in Doha" },
          { value: "2", label: "Weeks to ship" },
          { value: "0°C", label: "The cool turn" },
        ]}
      />
      <div id="chapter-02" className="mxd-article__block">
        <h3>One PSD. Nine venues. Two weeks.</h3>
        <p className="mxd-article__normal">
          McDonald&apos;s Qatar launched two new Sprite mixes for the summer:
          Passionfruit mixed with Sprite, and Watermelon mixed with Sprite. The
          plan was a full out-of-home takeover across Doha, nine venues, both
          languages, on every screen format the city runs.
        </p>
        <p className="mxd-article__normal">
          The brand handed us one thing to start from. A single layered PSD.
          Everything that happened next, the motion, the live data and the
          build, was ours.
        </p>
      </div>
      <ArticleImage
        src="/blogs/mcdonalds-qatar-live-dooh/assets/venue-product-reveal.jpg"
        alt="Taste the Mixperience product reveal on a vertical LED in Doha"
        caption="The product reveal frame, live on a vertical LED in Doha."
      />
      <div id="chapter-03" className="mxd-article__block">
        <h3>Make Doha&apos;s heat the media.</h3>
        <p className="mxd-article__normal">
          In a Qatar summer, the most honest thing a cold drink can do is admit
          how hot it is outside. So we let the ad say the temperature out loud.
        </p>
        <p className="mxd-article__normal">
          The creative reads the real feels-like temperature, turns it into a
          live Thirst Score, and then cuts it to zero. Forty-five degrees of
          heat, dropped to FEELS LIKE 0°C, straight into the ice-cold Sprite
          mix.
        </p>
      </div>
      <Callout>
        The creative is not a video of the idea. It is the idea, running live.
      </Callout>
      <div id="chapter-04" className="mxd-article__block">
        <h3>From a flat PSD to a living creative.</h3>
        <p className="mxd-article__normal">
          We pulled every layer out of the file: fruit cutouts, ice, sparkles,
          type, mascots, and rebuilt the whole thing as animated HTML. No
          exported video files, no per-frame baking. Just code that plays
          frame-perfect on whatever screen the city throws at it, in English
          and Arabic.
        </p>
        <p className="mxd-article__normal">
          Each panel runs the same five-beat story, and the first three beats
          are filled in by the weather, the moment it loads.
        </p>
      </div>
      <NumberedFrames
        frames={[
          {
            title: "Temperature",
            body: "The real air temperature in that venue, right now.",
          },
          {
            title: "Feels like",
            body: "The real-feel number, the one your skin actually believes.",
          },
          {
            title: "Thirst Score",
            body: "How thirsty Doha is at this exact minute, scored live from the heat.",
          },
          {
            title: "Feels like 0°C",
            body: "The cool turn. The whole screen drops to ice.",
          },
          {
            title: "The Mixperience",
            body: "Passionfruit and Watermelon Sprite, the reveal you were thirsty for.",
          },
        ]}
      />
      <div id="chapter-05" className="mxd-article__block">
        <h3>A small piece of software behind every screen.</h3>
        <p className="mxd-article__normal">
          The live part is quiet by design. A Cloudflare Worker wakes up on a
          schedule, reads the weather for every venue, computes the Thirst
          Score, and writes it all into one tiny cached file. The creatives
          just read that file when they load.
        </p>
        <p className="mxd-article__normal">
          So the screens never wait on an API, the data never goes stale
          mid-loop, and every panel across the city shows the same live number
          at the same time.
        </p>
        <p className="mxd-article__normal">
          One PSD in. A weather-reactive campaign across the city out.
        </p>
      </div>
      <ArticleImage
        src="/blogs/mcdonalds-qatar-live-dooh/assets/venue-2.jpg"
        alt="Mixperience campaign on a Doha roadside LED"
        caption="Roadside LED. Same master, live weather layer intact."
      />
      <div id="chapter-06" className="mxd-article__block">
        <h3>One master design. Every screen the city runs.</h3>
        <p className="mxd-article__normal">
          Roadside LED, mall portrait panels, vertical poles, ultrawide
          screens. Same master design, adapted cleanly to every ratio, in both
          languages, with the live layer wired into all of them.
        </p>
        <p className="mxd-article__normal">
          The unlock was never one good frame. It was building the creative and
          the software as a single thing, so what used to take a studio weeks
          shipped from one platform in days.
        </p>
      </div>
      <ArticleImage
        src="/blogs/mcdonalds-qatar-live-dooh/assets/venue-3.jpg"
        alt="Mixperience campaign on another Doha venue screen"
        caption="Same story, another format. Nine venues, both languages."
      />
      <div className="mxd-article__block">
        <h3>Great advertising starts with knowing the moment.</h3>
        <p className="mxd-article__normal">
          ElarisLabs is the AI-native creative operating system for brands.
          Mixperience is what happens when the design and the software are
          built together, so a campaign can react to the real world while it is
          live. Open it at{" "}
          <a href={STUDIO_APP_URL} target="_blank" rel="noopener noreferrer">
            studio.elarislabs.ai
          </a>
          .
        </p>
      </div>
    </>
  );
}
