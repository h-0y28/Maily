import * as S from "./Footer.styles";

interface FooterContentLink {
  text: string;
  url: string;
}

interface FooterSection {
  title: string;
  content: string[] | FooterContentLink[];
}

const Footer = () => {
  const footer: FooterSection[] = [
    {
      title: "Maily",
      content: ["당신의 매일을 기록하세요."],
    },
    {
      title: "Quick Link",
      content: [
        {
          text: "Write",
          url: `/diary/form/${new Date().toISOString().split("T")[0]}`,
        },
        {
          text: "Diary",
          url: `/diary/${new Date().toISOString().split("T")[0]}`,
        },
        { text: "Pick", url: "/pick" },
      ],
    },
    {
      title: "Contact",
      content: [
        {
          text: "Email: fedevluna@gmail.com",
          url: "mailto:fedevluna@gmail.com",
        },
        { text: "GitHub: Maily", url: "https://github.com/h-0y28/Maily" },
      ],
    },
  ];

  return (
    <S.FooterContainer>
      <S.SectionWrapper>
        {footer.map((section, index) => (
          <S.SectionContainer key={index}>
            <S.Title>{section.title}</S.Title>
            {section.content.map((item, idx) =>
              typeof item === "string" ? (
                <S.TextContent key={idx}>{item}</S.TextContent>
              ) : (
                <S.LinkContent
                  key={idx}
                  href={item.url}
                  rel="noopener noreferrer"
                >
                  {item.text}
                </S.LinkContent>
              )
            )}
          </S.SectionContainer>
        ))}
      </S.SectionWrapper>
      <S.Copyright>© 2024 MyDiary. All rights reserved.</S.Copyright>
    </S.FooterContainer>
  );
};

export default Footer;
