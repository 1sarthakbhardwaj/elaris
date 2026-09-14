import ArticleTable from "@/components/blogs/blocks/ArticleTable";
import Callout from "@/components/blogs/blocks/Callout";
import CodePanel from "@/components/blogs/blocks/CodePanel";
import DualVideoCompare from "@/components/blogs/blocks/DualVideoCompare";
import TableOfContents from "@/components/blogs/blocks/TableOfContents";
import { SEEDANCE_STRESS_PROMPT } from "@/data/seedancePrompt";
import { STUDIO_APP_URL } from "@/lib/site";

const BEATS = [
  { label: "00:00", time: 0 },
  { label: "03 · mask", time: 3 },
  { label: "05 · hand", time: 5 },
  { label: "06.5 · web", time: 6.5 },
  { label: "08 · swing", time: 8 },
  { label: "11 · street", time: 11 },
  { label: "13.5 · unmask", time: 13.5 },
];

const SPEC_ROWS = [
  ["Company", "ByteDance Seed", "MiniMax"],
  ["Launched", "31 July 2026", "31 July 2026"],
  ["Predecessor", "Seedance 2.0", "Hailuo 2.3"],
  ["Max single generation", "30 seconds", "15 seconds"],
  ["Extension", "Multi-round extension", "Platform extend tooling"],
  ["Frame rate", "Not officially published", "24 fps"],
  ["Native audio", "Yes", "Yes, 32 kHz stereo"],
  ["Image references", "Up to 30", "Up to 9"],
  ["Video references", "Up to 10", "Up to 3"],
  ["Audio references", "Up to 10", "Up to 3"],
  ["Multi-shot in one take", "Yes, with scene changes", "Yes, within 15s"],
  ["Editing model", "Timestamp-level", "Instruction-based"],
  ["Prompt limit", "Not published", "7,000 characters"],
  ["Weights", "Closed", "Open, 33B, community license"],
  ["Billing unit", "Tokens, via provider", "Per generated second"],
];

export default function SeedanceVsMinimax() {
  return (
    <>
      <div className="mxd-article__block">
        <p className="mxd-article__excerpt">
          Seedance 2.5 and MiniMax H3 launched on the same day at the end of
          July. Both generate audio in the same pass as picture, both take large
          reference packages, and both arrived with a wall of demo reels that
          prove very little.
          <span>
            So we did the boring thing: read both spec sheets properly, listed
            everything each one actually ships, then wrote a prompt designed to
            break things and ran it through both.
          </span>
        </p>
      </div>
      <TableOfContents
        items={[
          { id: "chapter-01", label: "The rig" },
          { id: "chapter-02", label: "The two models" },
          { id: "chapter-03", label: "Side by side" },
          { id: "chapter-04", label: "Cost" },
          { id: "chapter-05", label: "Method" },
          { id: "chapter-06", label: "Which to use" },
          { id: "chapter-07", label: "The full prompt" },
        ]}
      />
      <div id="chapter-01" className="mxd-article__block">
        <h3>The rig: same prompt, same references, one take each</h3>
        <p className="mxd-article__normal">
          Each marker is a graded beat. The two hardest are 05 to 08, a held
          hand pose in macro followed by twin web strands with real line
          tension, and 13.5, where the same face has to come back after eleven
          seconds under a helmet.
        </p>
      </div>
      <DualVideoCompare
        leftSrc="/blogs/seedance-2-5-vs-minimax-h3/assets/seedance-2-5.mp4"
        rightSrc="/blogs/seedance-2-5-vs-minimax-h3/assets/minimax-h3.mp4"
        leftPoster="/blogs/seedance-2-5-vs-minimax-h3/assets/poster-seedance.jpg"
        rightPoster="/blogs/seedance-2-5-vs-minimax-h3/assets/poster-minimax.jpg"
        leftCaption="Seedance 2.5 · ByteDance Seed"
        rightCaption="MiniMax H3 · Hailuo 3"
        beats={BEATS}
      />
      <div id="chapter-02" className="mxd-article__block">
        <h3>Same launch day. Different companies, different bets.</h3>
        <p className="mxd-article__normal">
          Before any judgment about quality: what each one is, who builds it,
          when it shipped, everything it publicly claims to do, and where you
          can actually get at it.
        </p>
        <h4>Seedance 2.5</h4>
        <p className="mxd-article__normal">
          Built by ByteDance Seed, ByteDance&apos;s research division. Previewed
          at the Volcano Engine FORCE conference in late June and shipped at
          the end of July. ByteDance skipped 2.1 through 2.4 entirely, framing
          this as a generational jump rather than a point release. The pitch is
          long-form: a whole scene, with its own internal shot changes, out of
          one generation.
        </p>
        <ul className="article-ul">
          <li>
            Duration: up to 30 seconds in a single pass, with multi-round
            extension beyond that.
          </li>
          <li>
            Multi-shot: several logically connected shots inside one generation,
            with improved transitions and scene changes.
          </li>
          <li>
            References: up to 30 images, 10 video clips and 10 audio clips in a
            single pass, 50 inputs total.
          </li>
          <li>
            Editing: timestamp-level control for targeted edits to audio and
            video without regenerating the whole shot.
          </li>
          <li>
            Weights: closed. Platform and API access only. Native 4K was
            announced. Verify inside your own workspace before planning around
            it.
          </li>
        </ul>
        <h4>MiniMax H3 (Hailuo 3.0)</h4>
        <p className="mxd-article__normal">
          Built by MiniMax, the lab behind Hailuo 02 and Hailuo 2.3. Officially
          named MiniMax H3. Hailuo 3, Hailuo 3.0 and Hailuo 03 all point at the
          same model. The pitch is that it stops behaving like a video model:
          one transformer reading text, images, video and audio as a single
          context.
        </p>
        <ul className="article-ul">
          <li>
            Duration: 4 to 15 seconds per generation at 24fps, with platform
            tooling to extend further.
          </li>
          <li>
            Resolution: 768p and 2K, native, not a separate upscale pass.
          </li>
          <li>
            Audio: 32 kHz native stereo generated in the same pass as picture.
          </li>
          <li>
            References: up to 9 images, 3 video clips and 3 audio clips, 12
            files total.
          </li>
          <li>Prompt limit: 7,000 characters.</li>
          <li>
            Weights: open. A 33B dense single-stream Omni-Transformer, published
            on Hugging Face in early August 2026 under the MiniMax H3 Community
            License.
          </li>
        </ul>
      </div>
      <Callout>
        Both launches are recent enough that the public record still contradicts
        itself. Verify the model label inside your own signed-in workspace
        before you plan a pipeline around a number you read in a blog post.
        Including this one.
      </Callout>
      <div id="chapter-03" className="mxd-article__block">
        <h3>The scene model and the shot model.</h3>
        <p className="mxd-article__normal">
          Read down this table and the strategic difference is obvious. Seedance
          is betting the unit of work is a scene. MiniMax is betting it is a
          shot. That decides where each one sits in a pipeline more than any
          quality score will.
        </p>
      </div>
      <ArticleTable
        headers={["Capability", "Seedance 2.5", "MiniMax H3"]}
        rows={SPEC_ROWS}
      />
      <div id="chapter-04" className="mxd-article__block">
        <h3>You cannot divide one of these prices by the other.</h3>
        <p className="mxd-article__normal">
          This is the part most comparisons get wrong. The two models do not
          bill in the same unit, so any figure produced by comparing them
          directly is meaningless.
        </p>
        <p className="mxd-article__normal">
          MiniMax publishes a straightforward per-generated-second rate for H3,
          roughly $0.13 per second at 2K and $0.09 per second at 768p, with extra
          charges for excess image references and for input video duration. A
          15-second reference clip is billed as fifteen seconds of input on top
          of your output.
        </p>
        <p className="mxd-article__normal">
          Seedance 2.5 bills through token-based provider rates that change
          depending on whether video input is present, and the numbers differ
          across Volcano Engine, BytePlus ModelArk and aggregators. There is no
          single published per-second figure to hold against H3&apos;s.
        </p>
        <p className="mxd-article__normal">
          If you are testing prompts, H3 is cheaper to fail at. If you are
          delivering scenes, Seedance is cheaper to succeed at.
        </p>
      </div>
      <div id="chapter-05" className="mxd-article__block">
        <h3>We tested at fifteen seconds. Neither model stops there.</h3>
        <p className="mxd-article__normal">
          Seedance 2.5 will run to thirty seconds in one pass. H3 will run to
          fifteen. Testing at fifteen is not a statement about what either
          model can do. It is the only window where the two are doing the same
          job, and therefore the only window where a result means anything.
        </p>
        <p className="mxd-article__normal">
          Everything else is held constant: 16:9, the same two reference images
          attached to both runs, one generation each, no rerolls. Both outputs
          at each platform&apos;s highest available native resolution,
          downscaled to a shared 1080p canvas only at the comparison stage.
        </p>
        <h4>00:00 to 00:03 · Bare face on the ledge</h4>
        <p className="mxd-article__normal">
          Close on his unmasked face, rain on the skin, breath visible, neon
          across one cheek. Watch for whether the face matches the portrait
          reference at all, and whether the helmet has believable mass in the
          hands or floats like a decal.
        </p>
        <h4>00:03 to 00:05 · The helmet goes on</h4>
        <p className="mxd-article__normal">
          Hands manipulating a rigid object with occlusion. Fingers should grip
          a hard shell, not squash it. No clipping through the skull, no skin
          visible once seated.
        </p>
        <h4>00:05 to 00:06.5 · The hand sign, in macro</h4>
        <p className="mxd-article__normal">
          A specific held finger configuration at close range. The hardest thing
          in the shot. Count the digits, check the joint bends, check whether
          the pose survives the beat or quietly morphs.
        </p>
        <h4>00:06.5 to 00:08 · Twin strands, braiding</h4>
        <p className="mxd-article__normal">
          Two strands actually converging. Models cheat two ways: collapsing to
          one strand immediately, or letting the pair drift and never merge. The
          line should have thickness and sag, not glow.
        </p>
        <h4>00:08 to 00:11 · Swing, car roof, wall run</h4>
        <p className="mxd-article__normal">
          Watch for the sign staying spelled correctly, and whether the car roof
          and the brick push back. Floating contact is the most common failure
          at this speed.
        </p>
        <h4>00:11 to 00:13.5 · Street, taxi, launch</h4>
        <p className="mxd-article__normal">
          Reflections on wet asphalt should move coherently with the camera
          rather than sitting painted in place. Also whether the splash lands
          on the same frame as the footfall.
        </p>
        <h4>00:13.5 to 00:15 · Landing, unmask, the smile</h4>
        <p className="mxd-article__normal">
          The same face. Produced at second one, hidden for eleven seconds under
          a rigid shell, reproduced at second fourteen. Also the landing.
          Models float the touchdown instead of absorbing it.
        </p>
      </div>
      <div id="chapter-06" className="mxd-article__block">
        <h3>They are not competing for the same job.</h3>
        <p className="mxd-article__normal">
          Neither model has been independently benchmarked long enough for a
          verdict to survive the next release cycle. What follows is a fit
          decision, not a ranking.
        </p>
        <h4>Reach for MiniMax H3</h4>
        <ul className="article-ul">
          <li>The deliverable fits inside fifteen seconds</li>
          <li>You want 2K without an upscale pass</li>
          <li>On-screen type is part of the brief</li>
          <li>You are iterating heavily and need cheap failures</li>
          <li>You want instruction-based edits instead of re-rolls</li>
          <li>Compliance needs weights outside a vendor API</li>
        </ul>
        <h4>Reach for Seedance 2.5</h4>
        <ul className="article-ul">
          <li>The scene needs more than fifteen seconds to breathe</li>
          <li>You want multiple shots inside one generation</li>
          <li>
            You are stacking large reference packages for character consistency
          </li>
          <li>
            Motion, clay-render or white-model references matter to your
            blocking
          </li>
          <li>Timestamp-level editing removes a real revision bottleneck</li>
          <li>
            You already work inside the Dreamina, Jimeng or CapCut stack
          </li>
        </ul>
        <p className="mxd-article__normal">
          And the answer most production teams will actually land on is both.
          Seedance for the establishing scene, H3 for the inserts and coverage.
          They are not competitors in a pipeline. They are different tools that
          happened to launch on the same day.
        </p>
      </div>
      <div id="chapter-07" className="mxd-article__block">
        <h3>The full prompt, verbatim.</h3>
        <p className="mxd-article__normal">
          Copy it into both models with the same two reference images attached.
          If your results differ from ours, send them. We will add them to this
          page with credit.
        </p>
      </div>
      <CodePanel title="ELARIS STRESS TEST 01 · THWIP" code={SEEDANCE_STRESS_PROMPT} />
      <div className="mxd-article__block">
        <h3>Sources and further reading</h3>
        <ul className="article-ul">
          <li>ByteDance Seed, Seedance 2.5 model page</li>
          <li>Dreamina, Seedance 2.5 consumer access</li>
          <li>Hailuo AI, MiniMax H3 official multimodal feature set</li>
          <li>Hugging Face, MiniMax H3 architecture and open-weights status</li>
          <li>fal, MiniMax H3 vs Seedance reference-heavy cost comparison</li>
        </ul>
        <p className="mxd-article__normal">
          ElarisLabs is the AI-native creative operating system for brands. We
          publish the tests we run internally, including the ones where the
          model we expected to win didn&apos;t, because a comparison you can
          reproduce is worth more than a reel you can only admire. Open Studio
          at{" "}
          <a href={STUDIO_APP_URL} target="_blank" rel="noopener noreferrer">
            studio.elarislabs.ai
          </a>
          .
        </p>
      </div>
    </>
  );
}
