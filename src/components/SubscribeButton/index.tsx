import { useSession, signIn } from "next-auth/client";
import { stripe } from "../../services/stripe";
import styles from "./styles.module.scss";

interface subscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: subscribeButtonProps) {
  const [session] = useSession();

  function handleSubscribe() {
    if (!session) {
      signIn('github')
      return;
    }
    
  }

  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >
      Subscribe now
    </button>
  );
}
