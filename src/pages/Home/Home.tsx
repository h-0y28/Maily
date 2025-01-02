import Pick from "../../components/Home/Pick";
import Quick from "../../components/Home/Quick";
import { Container } from "../../styles/commonStyles";

export default function Home() {
  return (
    <Container>
      <Quick />
      <Pick />
    </Container>
  );
}
