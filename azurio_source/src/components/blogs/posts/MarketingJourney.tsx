import ArticleEmbed from "@/components/blogs/blocks/ArticleEmbed";
import ArticleVideo from "@/components/blogs/blocks/ArticleVideo";
import Callout from "@/components/blogs/blocks/Callout";
import NumberedFrames from "@/components/blogs/blocks/NumberedFrames";
import SideBySide from "@/components/blogs/blocks/SideBySide";
import TableOfContents from "@/components/blogs/blocks/TableOfContents";
import { STUDIO_APP_URL } from "@/lib/site";

const DRIVE_PREVIEW =
  "https://drive.google.com/file/d/1ZHt_jv9KAEY6gRCPJXm9PPw8bDGZXPSi/preview";

export default function MarketingJourney() {
  return (
    <>
      <div className="mxd-article__block">
        <p className="mxd-article__excerpt">
          ElarisLabs is the AI-native creative operating system for brands.
          Onboard your brand from a URL, build on an infinite canvas, generate
          at scale, edit video without juggling models, then publish and learn.
          <span> One loop, from brand to campaign to insights.</span>
        </p>
      </div>
      <TableOfContents
        items={[
          { id: "chapter-01", label: "Stop stitching ten tools" },
          { id: "chapter-02", label: "Onboard from a URL" },
          { id: "chapter-03", label: "Infinite canvas" },
          { id: "chapter-04", label: "Templates" },
          { id: "chapter-05", label: "Brand Pack" },
          { id: "chapter-06", label: "Composer" },
          { id: "chapter-07", label: "HyperFrame video" },
          { id: "chapter-08", label: "Publish, then learn" },
        ]}
      />
      <div id="chapter-01" className="mxd-article__block">
        <h3>Stop stitching ten tools together.</h3>
        <p className="mxd-article__normal">
          Most teams run their marketing across a pile of disconnected apps. One
          for brand assets, one for design, one for video, another for
          scheduling, another for analytics. Nothing remembers your brand, and
          nothing talks to anything else.
        </p>
        <p className="mxd-article__normal">
          ElarisLabs is one platform for the entire journey. You onboard a
          brand, create on an infinite node canvas, scale it into every size and
          format, turn it into video, publish it to your social accounts, and
          read the results, all in the same place. Underneath it sits a
          brand-level memory that learns how your brand performs and gets
          sharper every cycle.
        </p>
      </div>
      <Callout>
        Onboard a brand, create on the canvas, make video, resize with Brand
        Pack, publish, then read the insights. The results feed straight back
        into the brand memory at the center. That is the whole loop, closed.
      </Callout>
      <div id="chapter-02" className="mxd-article__block">
        <h3>Onboard your brand from a URL</h3>
        <p className="mxd-article__normal">
          Paste your website and ElarisLabs builds your brand profile in
          seconds. Colors, fonts, logo, photos and an AI read on your tone and
          audience. No uploading logos, no hunting hex codes.
        </p>
        <p className="mxd-article__normal">
          From that profile it can immediately generate on-brand assets. And
          you are not locked to one engine: ElarisLabs gives you a wide range of
          image and video models to generate from, so you can pick the right
          model for each look. Whatever you pick, every output stays locked to
          your brand.
        </p>
        <ul className="article-ul">
          <li>Auto-extracted colors, typography, logo and brand voice</li>
          <li>Generate on-brand assets across a wide range of models</li>
          <li>Pick the model that fits the look, output stays on brand</li>
          <li>Edit anything, then save it as your living brand</li>
        </ul>
      </div>
      <div id="chapter-03" className="mxd-article__block">
        <h3>The infinite node canvas, your master workspace</h3>
        <p className="mxd-article__normal">
          This is the heart of ElarisLabs. An infinite canvas where every part
          of your creative process is a node you can wire together. Brand in,
          prompt, generate, upscale, branch into variants, send to video, push
          to publish. Connect as much as you want.
        </p>
        <p className="mxd-article__normal">
          It is visual, so you see exactly how your campaign is built, and you
          can rearrange any step at any time. Drop an @ command to mention a
          teammate and pull your whole team straight into the workspace, so
          design, copy and strategy all work on the same board.
        </p>
        <ul className="article-ul">
          <li>Connect brand, generation, edit and publish nodes</li>
          <li>Branch one idea into many directions on the same board</li>
          <li>Everything stays live and re-runnable</li>
          <li>Bring your whole team in with @ commands</li>
        </ul>
      </div>
      <div id="chapter-04" className="mxd-article__block">
        <h3>Build a workflow once, reuse it as a template</h3>
        <p className="mxd-article__normal">
          When a flow works, save the whole node graph as a template. Next time,
          start from it instead of from scratch. A weekly promo, a product drop,
          a launch teaser, each becomes a repeatable recipe your team can run
          in one click.
        </p>
      </div>
      <ArticleEmbed
        src="https://www.youtube.com/embed/AwZwkYSrIi0"
        title="Templates walkthrough"
      />
      <NumberedFrames
        frames={[
          {
            title: "Save the graph",
            body: "Turn any canvas into a reusable template.",
          },
          {
            title: "Share it",
            body: "Share templates across your team.",
          },
          {
            title: "Re-run",
            body: "Swap the brand or product and re-run instantly.",
          },
        ]}
      />
      <div id="chapter-05" className="mxd-article__block">
        <h3>One master design becomes every size</h3>
        <p className="mxd-article__normal">
          Design the master concept once. Then hand it to Brand Pack and get
          every format you need, square, story, wide, portrait, all resized
          intelligently and kept perfectly on brand. No re-cropping, no
          re-laying-out each channel by hand.
        </p>
      </div>
      <ArticleEmbed
        src="https://www.youtube.com/embed/F-CnNnzzOQM"
        title="Brand Pack walkthrough"
      />
      <div id="chapter-06" className="mxd-article__block">
        <h3>The Composer node: edit files or load a PSD</h3>
        <p className="mxd-article__normal">
          Right on the canvas, the Composer node is where you bring real files
          in. Drop in a design or upload a manual PSD, and Composer reads every
          layer so you can work with it directly.
        </p>
        <p className="mxd-article__normal">
          Edit it live. Make changes right on the PSD with HyperFrame. Even
          something as simple as swapping the headline text is instant, no
          design tool round-trip needed. Or bulk generate: pick which layers
          become variables, the background, the product shot, the headline, the
          price, set your options, and generate the whole batch at once.
        </p>
      </div>
      <ArticleEmbed
        src="https://www.youtube.com/embed/PXcPa8zT5_s"
        title="Composer node walkthrough"
      />
      <div id="chapter-07" className="mxd-article__block">
        <h3>HyperFrame video: just say what to change</h3>
        <p className="mxd-article__normal">
          Editing AI video usually means hopping between model APIs,
          re-prompting, re-rendering, and stitching results together. HyperFrame
          removes all of that. You stay in one place and simply tell it the
          change you want, and it edits the video for you.
        </p>
        <ul className="article-ul">
          <li>Describe the edit in plain language</li>
          <li>No switching between model APIs each time</li>
          <li>Iterate on the same clip until it is right</li>
        </ul>
        <h4>QDB creatives, portrait and precise.</h4>
        <p className="mxd-article__normal">
          Vertical spots for Qatar Development Bank, English and Arabic
          versions, edited in HyperFrame.
        </p>
      </div>
      <SideBySide
        left={
          <ArticleVideo
            src="/blogs/elarislabs-marketing-journey/assets/The_Axis_1024x1792_EN_v3_40c.mp4"
            caption="The Axis, English"
          />
        }
        right={
          <ArticleVideo
            src="/blogs/elarislabs-marketing-journey/assets/The_Halo_1344x2520_AR_v2_38c.mp4"
            caption="The Halo, Arabic"
          />
        }
      />
      <div className="mxd-article__block">
        <h4>McDonald&apos;s creatives, on-brand at every size.</h4>
        <p className="mxd-article__normal">
          Vertical spots produced through the same HyperFrame workflow, portrait
          formats tuned for feed and story placements.
        </p>
      </div>
      <SideBySide
        left={
          <ArticleVideo
            src="/blogs/elarislabs-marketing-journey/assets/Al_Masa_576x864_EN.mp4"
            caption="Al Masa, English"
          />
        }
        right={
          <ArticleVideo
            src="/blogs/elarislabs-marketing-journey/assets/The_Gateways_512x896_EN.mp4"
            caption="The Gateways, English"
          />
        }
      />
      <div className="mxd-article__block">
        <p className="mxd-article__normal">
          Wide spot for Qatar Pharma, stored on Drive and embedded here as it
          shipped in the original walkthrough.
        </p>
      </div>
      <ArticleEmbed src={DRIVE_PREVIEW} title="Qatar Pharma wide spot" />
      <div className="mxd-article__block">
        <h3>URL to video: paste a link, get a video</h3>
        <p className="mxd-article__normal">
          Have a product page? Paste the URL and ElarisLabs pulls the name,
          price, images and features, then turns them into a finished video.
          Script, voiceover and render handled for you. Going from a live
          listing to a shareable clip takes one paste.
        </p>
        <ul className="article-ul">
          <li>Paste any product URL to start</li>
          <li>Assets, script and voiceover generated automatically</li>
          <li>Out comes a ready-to-post video</li>
        </ul>
      </div>
      <div id="chapter-08" className="mxd-article__block">
        <h3>Push straight to the scheduler</h3>
        <p className="mxd-article__normal">
          Once a creative is ready, send it to the scheduler and post to your
          social accounts without leaving ElarisLabs. Publish to Meta, TikTok
          and your other accounts, time your campaign, and let it run.
        </p>
        <ul className="article-ul">
          <li>Connect Meta, TikTok and more</li>
          <li>Queue and time a full campaign</li>
          <li>Publish from the same place you created</li>
        </ul>
        <h4>A brand memory that gets sharper every cycle.</h4>
        <p className="mxd-article__normal">
          Everything you do runs on a brand-level memory. It studies your brand
          patterns and your data, what your brand looks and sounds like, and
          what actually performs, so each new creative is more on-brand and more
          effective than the last.
        </p>
        <p className="mxd-article__normal">
          Onboard your brand, build on the canvas, generate at scale, make
          video, publish and learn. ElarisLabs runs your whole marketing journey
          in one place. Jump in at{" "}
          <a href={STUDIO_APP_URL} target="_blank" rel="noopener noreferrer">
            studio.elarislabs.ai
          </a>
          .
        </p>
      </div>
    </>
  );
}
