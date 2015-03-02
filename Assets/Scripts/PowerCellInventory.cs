using UnityEngine;
using System.Collections;

public class PowerCellInventory : MonoBehaviour {
	
	// Cells
	public static int charge = 0;
	public AudioClip collectSound;
	
	// HUD
	public Texture2D[] hudCharge;
	public GUITexture chargeHudGUI;

	// Use this for initialization
	void Start () {
		charge = 5;
		chargeHudGUI.enabled = true;
	}
	
	void CellPickup() {
		AudioSource.PlayClipAtPoint(collectSound, transform.position);
		chargeHudGUI.texture = hudCharge[++charge];
	}
}
