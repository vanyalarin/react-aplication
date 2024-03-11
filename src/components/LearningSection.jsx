import { ways, differences } from "../data";
import WayToLearn from "./WayToLeatn";

export default function LearningSection() {
  return (
    <section>
      <h3>My approach to learning</h3>
      <ul>
        {ways.map((way) => (
          <WayToLearn key={way.title} {...way} />
        ))}
      </ul>
    </section>
  );
}
