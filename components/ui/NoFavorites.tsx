import { Container, Image, Text } from "@nextui-org/react";

export const NoFavorites = () => {
  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh - 100px)",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
      }}
    >
      <Text
        css={{
          textGradient: "45deg, $blue500 -20%, $pink800 50%",
        }}
        h1
      >
        No hay favoritos
      </Text>
      <Image
        alt="No tienes pokemons favoritos"
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
        width={250}
        height={250}
        css={{
          opacity: 0.1,
        }}
      />
    </Container>
  );
};
