# Configuration Vercel pour les Emails 📧

Ce guide explique comment configurer les variables d'environnement sur Vercel pour que les emails RSVP fonctionnent.

## 🔑 Variables d'Environnement Requises

Deux variables doivent être ajoutées à Vercel:

| Variable | Valeur |
|----------|--------|
| `RESEND_API_KEY` | Ta clé API Resend (commence par `re_`) |
| `CONTACT_EMAIL` | L'email qui recevra les réponses RSVP |

## 📋 Étapes de Configuration

### 1. Récupère ta Clé Resend API
- Va sur https://resend.com/dashboard
- Va à **API Keys** (dans le menu à gauche)
- Copie ta clé API (commençant par `re_`)

### 2. Accède à Vercel
- Va sur https://vercel.com/dashboard
- Sélectionne ton projet **le-ciel-ouvert**

### 3. Configure les Variables d'Environnement

#### Via l'Interface Web (Recommandé):
1. Clique sur **Settings** (onglet)
2. Clique sur **Environment Variables** (menu à gauche)
3. Ajoute les deux variables:

**Pour RESEND_API_KEY:**
- **Name:** `RESEND_API_KEY`
- **Value:** `re_AFEQ7hAL_EFhpvv14WQRcstFx1YuRY38E` (ou ta clé actuelle)
- **Environments:** ✅ Production ✅ Preview ✅ Development
- Clique **Save**

**Pour CONTACT_EMAIL:**
- **Name:** `CONTACT_EMAIL`
- **Value:** `devnet8057@gmail.com`
- **Environments:** ✅ Production ✅ Preview ✅ Development
- Clique **Save**

#### Via Vercel CLI (Alternative):
```bash
vercel env add RESEND_API_KEY
# Puis rentre la valeur: re_AFEQ7hAL_EFhpvv14WQRcstFx1YuRY38E

vercel env add CONTACT_EMAIL
# Puis rentre la valeur: devnet8057@gmail.com
```

### 4. Redéploie sur Vercel

**Option A:** Redéploiement Automatique (le plus simple)
- Une fois les variables ajoutées, Vercel redéplie automatiquement
- Attends ~3-5 minutes
- Visite ton site et teste le formulaire RSVP

**Option B:** Redéploiement Manuel
1. Va à https://vercel.com/dashboard
2. Sélectionne **le-ciel-ouvert**
3. Clique sur **Deployments** (onglet)
4. Clique sur les 3 points à côté du dernier déploiement
5. Clique **Redeploy**
6. Attends la confirmation

## ✅ Teste ton Configuration

1. Va sur https://le-ciel-ouvert.vercel.app (ou ton domaine personnalisé)
2. Scroll jusqu'à la section **RSVP**
3. Remplissez le formulaire:
   - Prénom: `Test`
   - Nom: `Utilisateur`
   - Email: Ton email personnel
   - Présence: `Oui`
   - Personnes: `1`
   - Message (optionnel): `Test`
4. Clique **Envoyer ma confirmation**

## 📨 Vérifie les Emails

**Tu dois recevoir deux emails:**

1. **Email #1** → À `devnet8057@gmail.com` (email de notification)
   - Sujet: `💍 RSVP — Test Utilisateur`
   - Contenu: Récapitulatif de la réponse

2. **Email #2** → À l'adresse que tu as rentrée dans le formulaire (confirmation)
   - Sujet: `💍 Votre réponse a bien été enregistrée`
   - Contenu: Remerciement personnalisé

## 🚨 Dépannage

### Les emails ne partent pas?

**Problème #1: API Key invalide**
- Vérifies que ta clé commence par `re_`
- Teste la clé localement: `npm run dev` → Remplis le formulaire → Vérifies les logs du serveur

**Problème #2: Email de destination non vérifié sur Resend**
- Va sur https://resend.com/audiences
- Ajoute ton email si manquant
- Clique sur le lien dans le mail de confirmation

**Problème #3: Variables non actualisées**
- Vérifies que tu as redéployé après ajouter les variables
- Attends 3-5 minutes après le redéploiement
- Peut-être clear le cache du navigateur (Ctrl+Shift+Delete)

**Problème #4: Vérifies les logs Vercel**
- Va à https://vercel.com/dashboard
- Sélectionne **le-ciel-ouvert**
- Clique **Deployments** → dernier déploiement
- Clique **Functions** (onglet)
- Clique sur `/api/rsvp` pour voir les logs

### Erreur "401 Unauthorized" dans les logs?
- Ta clé Resend est probablement incorrecte ou expirée
- Génère une nouvelle clé sur https://resend.com/dashboard

### Erreur "Missing RESEND_API_KEY"?
- La variable d'environnement n'a pas été trouvée
- Vérifies l'orthographe exacte: `RESEND_API_KEY` (sensible à la casse)

## 📧 Configuration Alternative: Formspree

Si Resend ne fonctionne pas, tu peux utiliser **Formspree** (gratuit):

1. Va sur https://formspree.io
2. Crée un compte
3. Crée un formulaire pour `devnet8057@gmail.com`
4. Note l'ID du formulaire (ex: `f/xyzabc123`)
5. Modifie `src/components/sections/RSVP.tsx`:

```tsx
const onSubmit = async (data: RSVPFormData) => {
  setIsLoading(true)
  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    if (!response.ok) throw new Error('Erreur')
    setSubmitted(true)
  } catch (error) {
    console.error('Erreur:', error)
    alert('Une erreur est survenue. Merci de réessayer.')
  } finally {
    setIsLoading(false)
  }
}
```

6. Push et redéploie

## 💡 Besoin d'Aide?

- Resend Help: https://resend.com/docs
- Vercel Help: https://vercel.com/docs
- Next.js Environment Variables: https://nextjs.org/docs/basic-features/environment-variables

---

**Dernier Update:** 6 Avril 2026  
**Projet:** Le Ciel Ouvert - Mariage Ange Esther & Elvis Dirane
