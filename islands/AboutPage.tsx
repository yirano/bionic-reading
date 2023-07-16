import Layout from "../components/Layout.tsx";
import MainHeader from "../components/headers/MainHeader.tsx";
import SubHeader from "../components/headers/SubHeader.tsx";
import List from "../components/textFields/List.tsx";
import TextContent from "../components/textFields/TextContent.tsx";
import { list } from "../constants/list.ts";

export default function AboutPage() {
  return (
    <Layout>
      <div class="w-9/12 mx-auto">
        <MainHeader customClass="text-center mb-4 mt-6">
          About Bionic Reader
        </MainHeader>
        <TextContent>
          Bionic Reader invites you to a whole new world of reading excellence.
          Step into the realm of enhanced reading capabilities and explore the
          power of our revolutionary Bionic Reading format.
        </TextContent>

        <SubHeader customClass="text-center">
          Elevate Your Reading Journey
        </SubHeader>
        <TextContent>
          Say goodbye to traditional reading methods and embrace a more dynamic
          approach. Bionic Reading combines advanced techniques rooted in
          scientific research, unleashing your reading potential like never
          before. Get ready to experience reading on a whole new level.
        </TextContent>
        <SubHeader customClass="text-center">
          The Science Behind Bionic Reading
        </SubHeader>
        <List type={list.ORDERED_LIST}>
          <li>Input your text into the text field</li>
          <li>Convert your text content by hitting the submit button</li>
          <li>
            Prepare yourself for a reading adventure that enhances speed,
            comprehension, and engagement
          </li>
        </List>

        <SubHeader customClass="text-center">Unlock the Benefits</SubHeader>
        <List>
          <li>
            Swift Reading: Bionic Reading propels your reading speed, enabling
            you to consume more content efficiently.
          </li>
          <li>
            Focused Attention: Immerse yourself in an environment free from
            distractions, fostering deep concentration and heightened focus.
          </li>
          <li>
            Retain with Ease: Benefit from improved information retention,
            allowing key insights to stay with you long after reading.
          </li>
          <li>
            Tailored Experience: Customize fixation and saccade settings to
            align with your preferences and optimize your reading journey.
          </li>
        </List>
        <SubHeader customClass="text-center">
          Embark on Your Bionic Reading Adventure
        </SubHeader>
        <TextContent>
          Join us on a transformative reading journey with Bionic Reader. Simply
          enter your text into our intuitive interface and witness its
          transformation into the mesmerizing Bionic Reading format. Prepare to
          embark on an extraordinary reading experience that amplifies your
          abilities to new heights.

          Discover the power of Bionic Reading and unlock your reading prowess.
          It's time to embrace a world of efficient reading and captivating
          comprehension.
        </TextContent>
      </div>
    </Layout>
  );
}
