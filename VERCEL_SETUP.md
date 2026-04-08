# Configuration Vercel pour les Emails 📧

Ce guide explique comment configurer les variables d'environnement sur Vercel pour que les emails RSVP fonctionnent.

## 🎯 Résumé du Système

```
LOCAL (.env.local)              GITHUB (non envoyé)         VERCEL (variables config)
✓ Marche en développement        ✗ .env* ignoré par Git     ✓ Faut configurer manuellement
```

## 🔑 Variables d'Environnement Requises

Deux variables doivent être ajoutées à Vercel:

| Variable         | Valeur                                        | Format              |
| ---------------- | --------------------------------------------- | ------------------- |
| `RESEND_API_KEY` | Ta clé API Resend (depuis https://resend.com) | `re_xxxxxxxxxxxx`   |
| `CONTACT_EMAIL`  | L'email qui recevra les réponses RSVP         | `email@example.com` |

## 📋 Étapes de Configuration

### ÉTAPE 1 — Récupère ta Clé API Resend

1. Va sur https://resend.com/dashboard
2. Clique sur **"API Keys"** (menu gauche)
3. Si pas de clé, clique **"Create API Key"**
4. **Copie** la clé (elle ressemble à: `re_AFEQ7hAL_EFhpvv14WQRcstFx1YuRY38E`)
5. ✅ _Garde cette clé à côté pour l'étape suivante_

### ÉTAPE 2 — Configure sur Vercel

**Option A: Interface Web (Recommandée) 🖱️**

1. Va sur https://vercel.com/dashboard
2. Sélectionne ton projet **"le-ciel-ouvert"**
3. Clique sur l'onglet **"Settings"** (en haut)
4. Clique sur **"Environment Variables"** (menu gauche)
5. Ajoute **RESEND_API_KEY**:
   - **Name:** `RESEND_API_KEY`
   - **Value:** `re_AFEQ7hAL_EFhpvv14WQRcstFx1YuRY38E` (ta clé)
   - **Environments:** ✅ Production ✅ Preview ✅ Development
   - Clique **"Save"**
6. Ajoute **CONTACT_EMAIL**:
   - **Name:** `CONTACT_EMAIL`
   - **Value:** `devnet8057@gmail.com` (ou remplace par VOTRE adresse email réelle)
   - **Environments:** ✅ Production ✅ Preview ✅ Development
   - Clique **"Save"**

**Option B: Vercel CLI (Avancé) ⚡**

```bash
# Depuis le répertoire du projet
vercel env add RESEND_API_KEY
# Puis rentre: re_AFEQ7hAL_EFhpvv14WQRcstFx1YuRY38E

vercel env add CONTACT_EMAIL
# Puis rentre: devnet8057@gmail.com
```

### ÉTAPE 3 — Redéploie sur Vercel

Après avoir configuré les variables, Vercel redéploie automatiquement en ~2-3 minutes.

Ou force manuellement:

1. Va sur https://vercel.com/dashboard
2. Sélectionne **"le-ciel-ouvert"**
3. Clique sur **"Deployments"** (onglet)
4. Trouve ton dernier déploiement (listé en haut)
5. Clique sur les **3 points ⋯** → **"Redeploy"**
6. Attends la confirmation (vert ✅)

## ✅ Teste ta Configuration

### Sur le site en ligne:

1. Va sur https://le-ciel-ouvert.vercel.app (ou ton domaine perso)
2. Scroll jusqu'à **"RSVP"**
3. Remplace le formulaire avec **TON** email comme invité:
   - Prénom: `Test`
   - Nom: `Utilisateur`
   - **Email: TonEmail@gmail.com** (pour voir la réponse)
   - Présence: `Oui`
   - Personnes: `1`
4. Clique **"Envoyer ma confirmation"**

### Vérifie les emails reçus:

**Tu dois recevoir 2 emails:**

1. **Email #1** → À `devnet8057@gmail.com`
   - Sujet: `💍 RSVP — Test Utilisateur`
   - Contenu: Récapitulatif de la réponse RSVP

2. **Email #2** → À ton adresse (ex: tonEmail@gmail.com)
   - Sujet: `💍 Votre réponse a bien été enregistrée`
   - Contenu: Remerciement personnalisé

Si tu reçois les deux emails ✅ → **Configuration réussie !**

---

## 📝 Après les Tests — Remplacer par la Vraie Adresse

Une fois que tout fonctionne:

1. Va sur https://vercel.com/dashboard
2. Sélectionne **"le-ciel-ouvert"**
3. **Settings** → **Environment Variables**
4. Clique sur **"CONTACT_EMAIL"** → Édite
5. Remplace `devnet8057@gmail.com` par **L'ADRESSE RÉELLE** (ex: mariages@dirane.cm)
6. Clique **"Save"**
7. Vercel redéploie automatiquement ✅

---

## 🔒 Entre-temps: Protégez vos données

✅ `RESEND_API_KEY` = privé (stockée en variable Vercel, jamais sur GitHub)
✅ `.env.local` = privé (fichier local pour dev, ignoré par Git)
✅ Tout fonctionne de la même manière partout 🎉

---

## ⚠️ Dépannage Rapide

| Problème                            | Solution                                                                    |
| ----------------------------------- | --------------------------------------------------------------------------- |
| "Erreur lors de l'envoi"            | Vérifie que tu as saisi la clé `RESEND_API_KEY` exacte (commence par `re_`) |
| Pas d'email reçu                    | Vérifie le email de `CONTACT_EMAIL` + regarde le spam                       |
| Variable non trouvée                | Redéploie Vercel (Settings > Deployments > Redeploy)                        |
| Fonctionne en local mais pas Vercel | `RESEND_API_KEY` peut être expirée — génère une nouvelle clé                |

---

## 🎯 Checklist Final

- [ ] Clé `RESEND_API_KEY` récupérée de https://resend.com/dashboard
- [ ] Variables ajoutées dans Vercel Settings > Environment Variables
- [ ] Vercel redéployé (Settings > Deployments)
- [ ] Test RSVP avec ton email — reçu 2 emails ✅
- [ ] Remplacé `CONTACT_EMAIL` par l'adresse réelle
- [ ] Dernier redéploiement effectué ✅

🎊 **Prêt pour le mariage!**

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
  setIsLoading(true);
  try {
    const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Erreur");
    setSubmitted(true);
  } catch (error) {
    console.error("Erreur:", error);
    alert("Une erreur est survenue. Merci de réessayer.");
  } finally {
    setIsLoading(false);
  }
};
```

6. Push et redéploie

## 💡 Besoin d'Aide?

- Resend Help: https://resend.com/docs
- Vercel Help: https://vercel.com/docs
- Next.js Environment Variables: https://nextjs.org/docs/basic-features/environment-variables

---

**Dernier Update:** 6 Avril 2026  
**Projet:** Le Ciel Ouvert - Mariage Ange Esther & Elvis Dirane
