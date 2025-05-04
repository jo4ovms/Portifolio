import {
  Typography,
  Box,
  TextField,
  useTheme,
  Container,
  Button,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Email from "@mui/icons-material/Email";
import Send from "@mui/icons-material/Send";
import "./Contact.css";
import RoundGradientButton from "../../pages/Skills/ContainedButtons";
const Contact = () => {
  const theme = useTheme();

  return (
    <Container component="main">
      <Box sx={{ mt: { xs: 4, md: 15 } }}>
        <Typography
          variant="h1"
          style={{
            background: "linear-gradient(to bottom, #fff 20%, #696969 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          sx={{
            fontSize: { xs: "2.5rem", sm: "4rem", md: "4rem" },
            textAlign: "start",
            mb: 4,
          }}
        >
          Entre em contato!
        </Typography>

        <Typography variant="subtitle1">
          Preencha o formulário abaixo para entrar em contato comigo. Fico
          sempre animado para conhecer novas oportunidades e farei o meu melhor
          para responder à sua mensagem dentro de 24 horas.
        </Typography>
      </Box>

      <Box
        sx={{
          width: "100vw",
          mt: { xs: 6, sm: 8, md: 10 },
          backgroundColor: theme.palette.background.default,
          pt: 6,
          pb: 6,
          px: 2,
          marginLeft: "calc(-50vw + 50%)",
          position: "relative",
        }}
      >
        <Box
          sx={{
            maxWidth: "1200px",
            margin: "0 auto",
            backgroundColor: theme.palette.background.default,
            display: "flex",
            flexDirection: "column",
            gap: 3,
            color: theme.palette.background.paper,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              display: "flex",
              width: { xs: "100%", sm: "60%", md: "45%", lg: "31%" },
              alignItems: "center",
              border: `1px dashed ${theme.palette.primary.main}`,
              borderRadius: "12px",
              padding: "8px 12px",
            }}
          >
            <Email sx={{ mr: 1 }} /> Email: joaovictormacields@gmail.com
          </Typography>

          <Grid container spacing={3}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Box>
                <Typography variant="contacttypography">
                  Nome Completo
                </Typography>
                <TextField
                  sx={{ mt: 1 }}
                  placeholder="Ex.: João da Silva"
                  fullWidth
                />
              </Box>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <Box>
                <Typography variant="contacttypography">
                  Endereço de Email
                </Typography>
                <TextField
                  sx={{ mt: 1 }}
                  placeholder="Ex.: contato@exemplo.com"
                  fullWidth
                />
              </Box>
            </Grid>
          </Grid>

          <Box>
            <Typography variant="contacttypography">Sua Mensagem</Typography>
            <TextField
              sx={{ mt: 1 }}
              placeholder="Digite sua mensagem aqui..."
              multiline
              rows={4}
              fullWidth
            />
          </Box>

          {/* <Box
            sx={{
              textAlign: "start",
              width: "100%",
              position: "relative", // Mantém o contexto sem ocultar pseudo-elementos
              overflow: "visible",
            }}
          >
           
          </Box> */}
          <Button
            variant="contained"
            endIcon={<Send />}
            sx={{
              fontSize: "16px",
              padding: "12px 32px",
              ":active": {
                transform: undefined,
              },
            }}
          >
            Enviar Mensagem
          </Button>
        </Box>
      </Box>
      {/* <RoundGradientButton
        sx={{
          fontSize: "16px",
          fontWeight: 500,
          ":active": {
            transform: undefined,
          },

          mt: 5,
          mb: 5,
          background: "linear-gradient(to right, #00D9FF, #00FF94)",
          transition: "behavior 0.5s ease",
          ":hover": {
            background: "#000",
            border: "20px solid linear-gradient(to right, #00D9FF, #00FF94)",
          },
        }}
        icon={<Send />}
      >
        Enviar Mensagem
      </RoundGradientButton> */}
    </Container>
  );
};

export default Contact;
