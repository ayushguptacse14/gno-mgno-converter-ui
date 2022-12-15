import useFooterStyles from './footer.styles'
import { Box, Container } from "@mui/system"
import twitter from '../../images/twitter.svg';
import discord from '../../images/discord.svg';
import telegram from '../../images/telegram.svg';
import { Grid, Typography } from "@mui/material";

const footerLinks = [
  {
      title: "Organization",
      links: [
          {
              title: "Gnosis Builders",
              url: "https://www.gnosis.builders/",
          },
          {
              title: "Careers",
              url: "https://www.gnosis.builders/careers",
          },
          {
              title: "Gnosis Chain",
              url: "https://www.gnosis.io/",
          },
      ],
  },
  {
      title: "Tools",
      links: [
          {
              title: "xDAI Faucet",
              url: "https://gnosisfaucet.com/",
          },
          {
              title: "Buy xDAI",
              url: "https://buyxdai.com/",
          },
          {
              title: "Buy GNO",
              url: "https://buyxdai.com/gno",
          },
          {
              title: "Wallet Finder",
              url: "https://gnosiswallets.com/",
          },
          {
              title: "Gnosis Metrics",
              url: "https://www.gnosismetrics.com/",
          },
      ],
  },
  {
      title: "Blog",
      links: [
          {
              title: "Builders Blog",
              url: "https://www.gnosis.builders/gnosis-builders-blog",
          },
      ],
  },
];
function Footer () {
  const classes = useFooterStyles()
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};
  return (
    <footer className={classes.footer}>
            <Container>
                <Box>
                    <div onClick={() => scrollToTop()}>
                    </div>
                    <div>
                        <Grid
                            container
                            spacing={8}
                            flex="1"
                            justifyContent="center"
                        >
                            {footerLinks.map((footer) => (
                                <Grid item key={footer.title}>
                                    <Typography
                                        variant="h6"
                                        fontFamily="Avenir-Next"
                                        fontWeight="bold"
                                        fontSize="14px"
                                        color="grey"
                                        sx={{
                                            textTransform: "uppercase",
                                            marginBottom: "10px",
                                        }}
                                    >
                                        {footer.title}
                                    </Typography>
                                    {footer.links.map((link) => (
                                        <Typography
                                            key={link.title}
                                            variant="subtitle1"
                                            fontSize="14px"
                                            fontFamily="Avenir-Next-Regular"
                                        >
                                            <a
                                                target="_blank"
                                                rel="noreferrer noopener"
                                                href={link.url}
                                            >
                                                {link.title}
                                            </a>
                                        </Typography>
                                    ))}
                                </Grid>
                            ))}
                            <Grid item>
                                <Typography
                                    variant="h6"
                                    fontFamily="Avenir-Next"
                                    fontWeight="bold"
                                    fontSize="14px"
                                    color="grey"
                                    sx={{
                                        textTransform: "uppercase",
                                        marginBottom: "15px",
                                    }}
                                >
                                    Socials
                                </Typography>
                                <Grid container spacing={2}>
                                    <Grid item>
                                        <div>
                                            <a
                                                href="https://twitter.com/gnosisbuilders"
                                                target="_blank"
                                            >
                                                <img
                                                    src={twitter}
                                                    alt="Gnosis Twitter"
                                                />
                                            </a>
                                        </div>
                                    </Grid>
                                    <Grid item>
                                        <div>
                                            <a
                                                href="https://discord.gg/gnosischain"
                                                target="_blank"
                                            >
                                                <img
                                                    src={discord}
                                                    alt="Gnosis Discord"
                                                />
                                            </a>
                                        </div>
                                    </Grid>
                                    <Grid item>
                                        <div>
                                            <a
                                                href="https://t.me/gnosischain"
                                                target="_blank"
                                            >
                                                <img
                                                    src={telegram}
                                                    alt="Gnosis Telegram"
                                                />
                                            </a>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                </Box>
            </Container>
        </footer>
  )
}

export default Footer
