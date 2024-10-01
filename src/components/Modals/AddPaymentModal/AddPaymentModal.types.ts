export interface IAddPaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  saldoId: string;
  onPaymentAdded?: () => Promise<void>;
}
