import { Typography, Box, TextField, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Email from "@mui/icons-material/Email";
import Send from "@mui/icons-material/Send";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact">
      <Box sx={{ mt: { xs: 4, md: 8 } }}>
        {/* Título */}
        <Typography
          style={{
            background: "linear-gradient(to bottom, #fff 20%, #696969 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          sx={{
            fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
            fontFamily: "DM Sans",
          }}
        >
          Entre em contato!
        </Typography>

        {/* Descrição */}
        <Typography
          sx={{
            textAlign: "start",
            fontSize: "1.2rem",
            fontWeight: 400,
            lineHeight: "28px",
            fontFamily: "DM Sans",
            color: "#B4B4B4",
            maxWidth: "800px",
            margin: "0 40px",
            mt: { xs: 2, sm: 3, md: 4 },
          }}
        >
          Preencha o formulário abaixo para entrar em contato comigo. Fico
          sempre animado para conhecer novas oportunidades e farei o meu melhor
          para responder à sua mensagem dentro de 24 horas.
        </Typography>
      </Box>

      {/* Caixa preta de fundo */}
      <Box
        sx={{
          width: "100vw",
          mt: { xs: 6, sm: 8, md: 10 },
          backgroundColor: "#070707",
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
            backgroundColor: "#070707",
            display: "flex",
            flexDirection: "column",
            gap: 3,
            color: "#fff",
          }}
        >
          {/* Informações de contato */}
          <Typography
            variant="body1"
            sx={{
              display: "flex",
              width: { xs: "100%", sm: "60%", md: "45%", lg: "31%" },
              alignItems: "center",
              fontSize: { xs: "0.9rem", md: "1rem" },
              color: "#B4B4B4",
              fontFamily: "DM Sans",
              border: "1px dashed #00D9FF",
              borderRadius: "12px",
              padding: "8px 12px",
            }}
          >
            <Email sx={{ mr: 1, fontSize: { xs: "1rem", sm: "1.5rem" } }} />{" "}
            Email: joaovictormacields@gmail.com
          </Typography>

          {/* Formulário */}
          <Grid container spacing={3}>
            {/* Campo Nome */}
            <Grid size={{ xs: 12, sm: 6 }}>
              <Box>
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "#B4B4B4",
                    fontFamily: "DM Sans",
                    mb: 1,
                  }}
                >
                  Nome Completo
                </Typography>
                <TextField
                  placeholder="Ex.: João da Silva"
                  fullWidth
                  sx={{
                    backgroundColor: "#fff",
                    border: "1px solid #00D9FF",
                    borderRadius: "10px",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                    },
                  }}
                />
              </Box>
            </Grid>

            {/* Campo Email */}
            <Grid size={{ xs: 12, sm: 6 }}>
              <Box>
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "#B4B4B4",
                    fontFamily: "DM Sans",
                    mb: 1,
                  }}
                >
                  Endereço de Email
                </Typography>
                <TextField
                  placeholder="Ex.: contato@exemplo.com"
                  fullWidth
                  sx={{
                    backgroundColor: "#fff",
                    border: "1px solid #00D9FF",
                    borderRadius: "10px",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                    },
                  }}
                />
              </Box>
            </Grid>
          </Grid>

          {/* Campo Mensagem */}
          <Box>
            <Typography
              sx={{
                fontSize: "14px",
                color: "#B4B4B4",
                fontFamily: "DM Sans",
                mb: 1,
              }}
            >
              Sua Mensagem
            </Typography>
            <TextField
              placeholder="Digite sua mensagem aqui..."
              multiline
              rows={4}
              fullWidth
              sx={{
                backgroundColor: "#fff",
                border: "1px solid #00D9FF",
                borderRadius: "10px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                },
              }}
            />
          </Box>

          {/* Botão Enviar */}
          <Box sx={{ textAlign: "start" }}>
            <Button
              variant="contained"
              endIcon={<Send />}
              sx={{
                fontWeight: 500,
                textTransform: "none",
                fontFamily: "DM Sans",
                fontSize: { xs: "14px", sm: "16px" },
                backgroundColor: "#00D9FF",
                color: "#000",
                padding: "12px 32px",
                borderRadius: "50px",
                "&:hover": {
                  backgroundColor: "#000",
                  border: "1px solid #00D9FF",
                  color: "#fff",
                  transition: "all 0.3s ease-in-out",
                },
              }}
            >
              Enviar Mensagem
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Contact;
